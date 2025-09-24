import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AppleFooter } from '@/components/organisms/AppleFooter';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: t?.('title') || 'Contact - Genius Ad District',
    description: t?.('description') || 'Discutons de votre projet. Contactez notre équipe.',
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            {t?.('headline') || (locale === 'fr' ? 'Parlons de votre projet' : 'Let’s talk about your project')}
          </h1>
          <p className="text-white/70 text-lg mb-10">
            {t?.('subhead') || (locale === 'fr' ? "Dites-nous en plus et nous reviendrons vers vous sous 24h." : 'Tell us more and we’ll get back within 24h.')}
          </p>

          <form className="grid grid-cols-1 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">{t?.('name') || (locale === 'fr' ? 'Votre nom' : 'Your name')}</label>
                <input id="name" name="name" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder={locale === 'fr' ? 'Ex. Sarah Benali' : 'e.g. Sarah Benali'} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">{t?.('company') || (locale === 'fr' ? 'Entreprise' : 'Company')}</label>
                <input id="company" name="company" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder={locale === 'fr' ? 'Nom de votre entreprise' : 'Your company name'} />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-1">{t?.('budget') || (locale === 'fr' ? 'Budget estimé' : 'Estimated budget')}</label>
                <select id="budget" name="budget" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                  <option value="" className="bg-black">{locale === 'fr' ? 'Sélectionnez…' : 'Select…'}</option>
                  <option className="bg-black">5k–15k</option>
                  <option className="bg-black">15k–50k</option>
                  <option className="bg-black">50k+</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">{t?.('message') || (locale === 'fr' ? 'Votre message' : 'Your message')}</label>
              <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder={locale === 'fr' ? 'Décrivez vos objectifs…' : 'Describe your goals…'} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/50">{t?.('privacy') || (locale === 'fr' ? "En envoyant, vous acceptez notre politique de confidentialité." : 'By sending, you agree to our privacy policy.')}</p>
              <button type="submit" className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors">{t?.('cta') || (locale === 'fr' ? 'Envoyer' : 'Send')}</button>
            </div>
          </form>
        </div>
      </main>
      <AppleFooter />
    </div>
  );
}

