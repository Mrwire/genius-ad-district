import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { 
  Palette, 
  Monitor, 
  Calendar, 
  Factory, 
  Megaphone, 
  Gamepad2, 
  Video, 
  Layers, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Cpu,
  Wrench,
  Package
} from 'lucide-react';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  return {
    title: 'Nos Expertises - Gamius',
    description: "Découvrez l'étendue de nos expertises : Production, Digital, Événementiel, Gaming et plus. Un savoir-faire complet pour tous vos projets créatifs.",
    openGraph: {
      title: 'Nos Expertises - Gamius',
      description: "Un savoir-faire complet pour tous vos projets créatifs.",
      type: 'website',
      locale: locale,
      url: `/${locale}/a-propos/expertises`,
    },
  };
}

interface Expertise {
  title: string;
  icon: any;
  color: string;
  description: string;
  services: string[];
  technologies?: string[];
  stats?: { label: string; value: string }[];
}

export default async function ExpertisesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const expertises: Expertise[] = [
    {
      title: "Production & Manufacturing",
      icon: Factory,
      color: "from-orange-500 to-red-600",
      description: "Infrastructure de production de 2600m² avec ateliers spécialisés pour réaliser tous vos projets sur mesure.",
      services: [
        "Fabrication de stands et structures événementielles",
        "Production de PLV et mobilier commercial",
        "Métallerie et soudure spécialisée",
        "Menuiserie et travail du bois",
        "Impression grand format et découpe",
        "Assemblage et finitions premium"
      ],
      technologies: ["CNC", "Découpe laser", "Impression 3D", "Thermoformage"],
      stats: [
        { label: "Surface d'ateliers", value: "2600m²" },
        { label: "Capacité de production", value: "24/7" },
        { label: "Projets livrés", value: "500+/an" }
      ]
    },
    {
      title: "Digital & Web",
      icon: Monitor,
      color: "from-blue-500 to-purple-600",
      description: "Solutions digitales innovantes pour transformer votre présence en ligne et créer des expériences utilisateur exceptionnelles.",
      services: [
        "Développement web et applications mobiles",
        "Design UI/UX et prototypage",
        "E-commerce et marketplaces",
        "Plateformes SaaS sur mesure",
        "Intégration API et systèmes",
        "Maintenance et support technique"
      ],
      technologies: ["React", "Next.js", "Node.js", "Flutter", "AWS", "Sanity CMS"],
      stats: [
        { label: "Sites web créés", value: "200+" },
        { label: "Applications mobiles", value: "50+" },
        { label: "Utilisateurs actifs", value: "1M+" }
      ]
    },
    {
      title: "Événementiel",
      icon: Calendar,
      color: "from-purple-500 to-pink-600",
      description: "Conception et réalisation d'événements mémorables, de la stratégie créative à l'exécution sur le terrain.",
      services: [
        "Conception scénographique",
        "Production technique complète",
        "Gestion logistique événementielle",
        "Activation de marque",
        "Événements corporate et institutionnels",
        "Festivals et événements grand public"
      ],
      stats: [
        { label: "Événements réalisés", value: "300+/an" },
        { label: "Visiteurs touchés", value: "500K+" },
        { label: "Villes couvertes", value: "20+" }
      ]
    },
    {
      title: "Création & Design",
      icon: Palette,
      color: "from-pink-500 to-orange-600",
      description: "Studio créatif complet pour donner vie à votre identité de marque et créer des contenus visuels impactants.",
      services: [
        "Identité visuelle et branding",
        "Direction artistique",
        "Design graphique print et digital",
        "Illustration et iconographie",
        "Packaging design",
        "Design d'espace et signalétique"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Cinema 4D", "Blender"],
      stats: [
        { label: "Marques créées", value: "150+" },
        { label: "Campagnes visuelles", value: "500+" },
        { label: "Awards créatifs", value: "25+" }
      ]
    },
    {
      title: "Marketing & Communication",
      icon: Megaphone,
      color: "from-green-500 to-teal-600",
      description: "Stratégies marketing intégrées pour maximiser votre impact et atteindre vos objectifs commerciaux.",
      services: [
        "Stratégie de marque et positionnement",
        "Campagnes publicitaires 360°",
        "Marketing digital et SEO",
        "Community management",
        "Content marketing",
        "Influence et relations publiques"
      ],
      stats: [
        { label: "Campagnes menées", value: "200+/an" },
        { label: "ROI moyen", value: "+250%" },
        { label: "Reach social media", value: "10M+" }
      ]
    },
    {
      title: "Gaming & Esport",
      icon: Gamepad2,
      color: "from-indigo-500 to-purple-600",
      description: "Expertise unique dans l'univers du gaming et de l'esport pour créer des expériences immersives.",
      services: [
        "Organisation de tournois esport",
        "Création de contenus gaming",
        "Streaming et production live",
        "Activation gaming pour marques",
        "Développement de jeux promotionnels",
        "Espaces gaming et arenas"
      ],
      technologies: ["Unity", "Unreal Engine", "OBS", "Twitch API"],
      stats: [
        { label: "Tournois organisés", value: "50+" },
        { label: "Joueurs participants", value: "10K+" },
        { label: "Viewers cumulés", value: "5M+" }
      ]
    },
    {
      title: "Production Audiovisuelle",
      icon: Video,
      color: "from-red-500 to-pink-600",
      description: "Studio de production complet pour créer des contenus vidéo professionnels et captivants.",
      services: [
        "Films publicitaires et institutionnels",
        "Motion design et animation",
        "Production live et streaming",
        "Post-production et effets spéciaux",
        "Photographie professionnelle",
        "Contenu social media"
      ],
      technologies: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Cinema 4D"],
      stats: [
        { label: "Vidéos produites", value: "1000+" },
        { label: "Heures de contenu", value: "5000+" },
        { label: "Vues cumulées", value: "50M+" }
      ]
    },
    {
      title: "Innovation & R&D",
      icon: Cpu,
      color: "from-teal-500 to-blue-600",
      description: "Laboratoire d'innovation pour explorer les technologies émergentes et créer les expériences de demain.",
      services: [
        "Réalité augmentée et virtuelle",
        "Intelligence artificielle créative",
        "Expériences interactives",
        "IoT et objets connectés",
        "Blockchain et NFTs",
        "Métavers et espaces virtuels"
      ],
      technologies: ["AR Core", "WebXR", "TensorFlow", "Three.js", "Web3"],
      stats: [
        { label: "Projets innovants", value: "30+/an" },
        { label: "Brevets déposés", value: "5" },
        { label: "Investissement R&D", value: "10%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20" />
          {/* Animated Background */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nos Expertises
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un écosystème complet de compétences pour transformer vos idées les plus ambitieuses en réalités tangibles et mémorables.
            </p>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Domaines d'expertise", value: "8", icon: Layers },
              { label: "Professionnels spécialisés", value: "100+", icon: Wrench },
              { label: "Technologies maîtrisées", value: "50+", icon: Cpu },
              { label: "Projets multi-expertises", value: "60%", icon: Package }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${expertise.color}`} />
                  
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${expertise.color} text-white shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {expertise.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {expertise.description}
                    </p>

                    {/* Services List */}
                    <div className="space-y-2 mb-6">
                      {expertise.services.slice(0, 4).map((service, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {service}
                          </span>
                        </div>
                      ))}
                      {expertise.services.length > 4 && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic pl-6">
                          +{expertise.services.length - 4} autres services
                        </p>
                      )}
                    </div>

                    {/* Technologies */}
                    {expertise.technologies && (
                      <div className="mb-6">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {expertise.technologies.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats */}
                    {expertise.stats && (
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {expertise.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              L'Avantage de l'Intégration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Notre force réside dans la synergie de nos expertises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Guichet Unique",
                icon: Sparkles,
                description: "Un seul interlocuteur pour tous vos besoins créatifs et techniques. Simplifiez vos projets avec notre approche intégrée.",
                benefits: ["Gain de temps", "Cohérence garantie", "Budget optimisé"]
              },
              {
                title: "Synergie Créative",
                icon: Layers,
                description: "Nos équipes collaborent en permanence pour créer des solutions innovantes qui dépassent les attentes.",
                benefits: ["Innovation continue", "Solutions sur mesure", "Créativité décuplée"]
              },
              {
                title: "Excellence Opérationnelle",
                icon: CheckCircle,
                description: "Processus optimisés et contrôle qualité rigoureux à chaque étape pour garantir l'excellence.",
                benefits: ["Qualité constante", "Délais respectés", "Satisfaction garantie"]
              }
            ].map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {advantage.description}
                  </p>
                  <div className="space-y-1">
                    {advantage.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="text-sm text-gray-500 dark:text-gray-400">
                        ✓ {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformons vos idées en réalité
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Quelle que soit la complexité de votre projet, nous avons l'expertise pour le réaliser. 
              Discutons de vos besoins et créons ensemble quelque chose d'extraordinaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Démarrer un projet
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`/${locale}/portfolio`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}