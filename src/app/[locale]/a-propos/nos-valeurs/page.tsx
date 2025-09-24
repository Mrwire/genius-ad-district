import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Heart, Lightbulb, Shield, Leaf, Users, Trophy, Zap, Target } from 'lucide-react';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  return {
    title: 'Nos Valeurs - Gamius',
    description: "Les valeurs qui guident Gamius : Innovation, Excellence, Durabilité et Collaboration. Découvrez les principes qui animent notre équipe au quotidien.",
    openGraph: {
      title: 'Nos Valeurs - Gamius',
      description: "Les valeurs qui guident Gamius au quotidien.",
      type: 'website',
      locale: locale,
      url: `/${locale}/a-propos/nos-valeurs`,
    },
  };
}

interface Value {
  title: string;
  icon: any;
  color: string;
  description: string;
  principles: string[];
  quote?: string;
}

export default async function ValuesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const values: Value[] = [
    {
      title: "Innovation",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-500",
      description: "Nous repoussons constamment les limites du possible, explorant de nouvelles technologies et méthodes créatives pour offrir des solutions uniques.",
      principles: [
        "Exploration continue de nouvelles technologies",
        "Encouragement de la pensée créative",
        "R&D en IA créative et expériences immersives",
        "Adoption précoce des tendances émergentes"
      ],
      quote: "L'innovation n'est pas qu'une méthode, c'est notre état d'esprit."
    },
    {
      title: "Excellence",
      icon: Trophy,
      color: "from-blue-500 to-purple-600",
      description: "Nous visons la perfection dans chaque projet, avec une attention méticuleuse aux détails et un engagement total envers la qualité.",
      principles: [
        "Standards de qualité les plus élevés",
        "Attention obsessionnelle aux détails",
        "Formation continue de nos équipes",
        "Processus de contrôle qualité rigoureux"
      ],
      quote: "L'excellence n'est pas un acte, mais une habitude."
    },
    {
      title: "Durabilité",
      icon: Leaf,
      color: "from-green-500 to-teal-600",
      description: "Nous intégrons des pratiques durables dans tous nos processus, minimisant notre impact environnemental tout en maximisant la valeur créée.",
      principles: [
        "Production éco-responsable",
        "Utilisation de matériaux durables",
        "Optimisation des ressources",
        "Engagement pour un futur plus vert"
      ],
      quote: "Créer aujourd'hui en pensant à demain."
    },
    {
      title: "Collaboration",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      description: "Nous croyons en la force du collectif. Chaque projet est le fruit d'une synergie entre nos équipes, nos clients et nos partenaires.",
      principles: [
        "Travail d'équipe transversal",
        "Co-création avec nos clients",
        "Partage de connaissances",
        "Partenariats stratégiques durables"
      ],
      quote: "Ensemble, nous allons plus loin."
    },
    {
      title: "Intégrité",
      icon: Shield,
      color: "from-gray-600 to-gray-800",
      description: "Nous agissons avec honnêteté et transparence dans toutes nos interactions, construisant des relations de confiance durables.",
      principles: [
        "Transparence totale avec nos clients",
        "Respect des engagements",
        "Éthique professionnelle irréprochable",
        "Communication ouverte et honnête"
      ],
      quote: "La confiance se gagne en gouttes et se perd en litres."
    },
    {
      title: "Passion",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      description: "Notre passion pour la création et l'innovation anime chaque projet. C'est elle qui transforme le travail en art.",
      principles: [
        "Amour du métier et de l'artisanat",
        "Enthousiasme contagieux",
        "Dépassement de soi constant",
        "Fierté dans chaque réalisation"
      ],
      quote: "La passion est l'énergie qui alimente notre créativité."
    },
    {
      title: "Agilité",
      icon: Zap,
      color: "from-indigo-500 to-blue-600",
      description: "Nous nous adaptons rapidement aux changements, embrassant la flexibilité comme un atout stratégique.",
      principles: [
        "Réactivité face aux défis",
        "Adaptation aux besoins changeants",
        "Processus flexibles et évolutifs",
        "Innovation continue des méthodes"
      ],
      quote: "L'agilité est notre réponse à la complexité."
    },
    {
      title: "Impact",
      icon: Target,
      color: "from-amber-500 to-orange-600",
      description: "Nous mesurons notre succès par l'impact positif que nous créons pour nos clients, notre communauté et notre environnement.",
      principles: [
        "Création de valeur mesurable",
        "Contribution à la communauté",
        "Impact positif sur la société",
        "Résultats qui font la différence"
      ],
      quote: "Notre succès se mesure à l'impact que nous créons."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-600/20 dark:to-blue-600/20" />
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nos Valeurs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident chaque décision, chaque création et chaque interaction chez Gamius.
            </p>
          </div>

          {/* Introduction Quote */}
          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 mb-4 italic">
                "Nos valeurs ne sont pas que des mots sur un mur. Elles sont l'essence même de qui nous sommes et de ce que nous créons."
              </p>
              <footer className="text-gray-600 dark:text-gray-400">
                — <cite className="font-semibold">Ahmed Bennis, CEO & Fondateur</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${value.color} text-white shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </div>

                    {/* Principles */}
                    <div className="space-y-2 mb-6">
                      {value.principles.map((principle, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color} mt-2 flex-shrink-0`} />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {principle}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    {value.quote && (
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm italic text-gray-500 dark:text-gray-400">
                          "{value.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Nos Valeurs en Action
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Au quotidien",
                description: "Nos valeurs guident chaque décision, de la conception à la livraison, créant une culture d'excellence.",
                stats: ["100% des projets", "Revue qualité systématique", "Formation continue"]
              },
              {
                title: "Avec nos clients",
                description: "Nous construisons des relations durables basées sur la confiance, la transparence et la création de valeur.",
                stats: ["95% de satisfaction", "80% de clients fidèles", "Co-création active"]
              },
              {
                title: "Pour l'avenir",
                description: "Nous investissons dans un futur durable, innovant et inclusif pour notre industrie et notre communauté.",
                stats: ["Neutralité carbone 2030", "R&D continue", "Impact social positif"]
              }
            ].map((section, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {section.description}
                </p>
                <div className="space-y-2">
                  {section.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Engagement
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Ces valeurs ne sont pas négociables. Elles sont notre promesse à nos clients, 
              nos collaborateurs et notre communauté. Chaque jour, nous nous efforçons de les incarner 
              dans tout ce que nous faisons.
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Travaillons ensemble
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}