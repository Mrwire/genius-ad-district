import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Target, Lightbulb, Award } from 'lucide-react';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  return {
    title: 'À propos - Gamius',
    description: 'Découvrez Gamius, agence créative et de production événementielle leader au Maroc. Notre histoire, nos valeurs et notre expertise.',
    openGraph: {
      title: 'À propos - Gamius',
      description: 'Découvrez Gamius, agence créative et de production événementielle leader au Maroc.',
      type: 'website',
      locale: locale,
      url: `/${locale}/a-propos`,
    },
  };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const sections = [
    {
      title: "Notre Histoire",
      description: "25 ans d'innovation créative et d'excellence",
      icon: Award,
      href: `/${locale}/a-propos/notre-histoire`,
      color: "from-blue-500 to-purple-600",
      stats: ["Depuis 1999", "2600m² d'ateliers", "+100 collaborateurs"]
    },
    {
      title: "Notre Équipe",
      description: "Des talents passionnés au service de votre vision",
      icon: Users,
      href: `/${locale}/a-propos/notre-equipe`,
      color: "from-green-500 to-teal-600",
      stats: ["Experts créatifs", "Techniciens spécialisés", "Stratèges digitaux"]
    },
    {
      title: "Nos Valeurs",
      description: "Les principes qui guident chaque projet",
      icon: Target,
      href: `/${locale}/a-propos/nos-valeurs`,
      color: "from-orange-500 to-red-600",
      stats: ["Innovation", "Excellence", "Durabilité"]
    },
    {
      title: "Nos Expertises",
      description: "Un savoir-faire complet pour vos projets",
      icon: Lightbulb,
      href: `/${locale}/a-propos/expertises`,
      color: "from-purple-500 to-pink-600",
      stats: ["Production", "Digital", "Événementiel"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              À propos de Gamius
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Depuis 1999, nous transformons les idées audacieuses en expériences mémorables. 
              Découvrez notre histoire, nos valeurs et l'équipe qui fait battre le cœur de Gamius.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Années d'expérience", value: "25+" },
              { label: "Projets réalisés", value: "1000+" },
              { label: "Clients satisfaits", value: "500+" },
              { label: "Collaborateurs", value: "100+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link
                  key={index}
                  href={section.href}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} text-white`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-2" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {section.description}
                    </p>
                    
                    {/* Stats Pills */}
                    <div className="flex flex-wrap gap-2">
                      {section.stats.map((stat, statIndex) => (
                        <span
                          key={statIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Prêt à créer quelque chose d'extraordinaire ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Découvrez comment notre expertise peut transformer votre vision en réalité.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contactez-nous
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}