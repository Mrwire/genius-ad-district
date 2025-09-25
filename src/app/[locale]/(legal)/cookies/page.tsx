import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BaseLayout from '@/components/templates/BaseLayout';

interface PageParams {
  params: {
    locale: string;
  };
}

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

type SubSection = {
  title: string;
  content: ContentBlock[];
};

type Section = {
  title: string;
  content?: ContentBlock[];
  subsections?: SubSection[];
};

function renderContent(content: ContentBlock[]) {
  return content.map((block, index) => {
    if (block.type === 'list') {
      return (
        <ul key={`list-${index}`} className="list-disc pl-6 space-y-2 text-base text-white/80">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={`paragraph-${index}`} className="text-base text-white/80 leading-relaxed">
        {block.text}
      </p>
    );
  });
}

export async function generateMetadata({ params: { locale } }: PageParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'legal.cookies.metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function CookiesPolicyPage({ params: { locale } }: PageParams) {
  const t = await getTranslations({ locale, namespace: 'legal.cookies' });
  const intro = t.raw('intro') as ContentBlock[];
  const sections = t.raw('sections') as Section[];

  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">{t('title')}</h1>
          <p className="text-sm uppercase tracking-wide text-white/60">{t('lastUpdated')}</p>
        </div>

        <div className="space-y-4">{renderContent(intro)}</div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              {section.content && <div className="space-y-4">{renderContent(section.content)}</div>}
              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subSection, subIndex) => (
                    <div key={subIndex} className="space-y-3">
                      <h3 className="text-xl font-semibold text-white/90">{subSection.title}</h3>
                      <div className="space-y-3">{renderContent(subSection.content)}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
