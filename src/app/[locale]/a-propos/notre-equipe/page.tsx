import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Linkedin, Mail, Award, Users, Briefcase, Rocket } from 'lucide-react';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  return {
    title: 'Notre Équipe - Gamius',
    description: "Rencontrez l'équipe passionnée de Gamius. Des experts créatifs, techniques et stratégiques unis par la passion de l'excellence.",
    openGraph: {
      title: 'Notre Équipe - Gamius',
      description: "Rencontrez l'équipe passionnée de Gamius.",
      type: 'website',
      locale: locale,
      url: `/${locale}/a-propos/notre-equipe`,
    },
  };
}

interface TeamMember {
  name: string;
  role: string;
  department: string;
  description: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

interface Department {
  name: string;
  icon: any;
  color: string;
  description: string;
  members: TeamMember[];
}

export default async function TeamPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const departments: Department[] = [
    {
      name: "Direction & Stratégie",
      icon: Briefcase,
      color: "from-blue-500 to-purple-600",
      description: "Vision stratégique et leadership d'excellence",
      members: [
        {
          name: "Ahmed Bennis",
          role: "CEO & Fondateur",
          department: "Direction",
          description: "Visionnaire créatif avec plus de 25 ans d'expérience dans l'industrie créative et événementielle.",
        },
        {
          name: "Sarah Alami",
          role: "Directrice Générale",
          department: "Direction",
          description: "Experte en gestion d'entreprise et développement stratégique, pilote de la croissance de Gamius.",
        },
        {
          name: "Karim Tazi",
          role: "Directeur Commercial",
          department: "Commercial",
          description: "Leader commercial avec une expertise approfondie du marché marocain et africain.",
        },
      ]
    },
    {
      name: "Création & Design",
      icon: Award,
      color: "from-pink-500 to-orange-600",
      description: "L'âme créative qui donne vie aux idées",
      members: [
        {
          name: "Leila Benkirane",
          role: "Directrice Artistique",
          department: "Création",
          description: "Créative passionnée, spécialiste en branding et design d'expérience.",
        },
        {
          name: "Youssef El Idrissi",
          role: "Lead Designer UI/UX",
          department: "Digital",
          description: "Expert en design d'interface et expérience utilisateur, créateur d'expériences digitales innovantes.",
        },
        {
          name: "Amina Fassi",
          role: "Motion Designer Senior",
          department: "Création",
          description: "Spécialiste en animation et effets visuels, transforme les concepts en œuvres visuelles captivantes.",
        },
        {
          name: "Mehdi Chakir",
          role: "3D Artist",
          department: "Création",
          description: "Artiste 3D talentueux, créateur d'univers immersifs et de visualisations photoréalistes.",
        },
      ]
    },
    {
      name: "Production & Technique",
      icon: Users,
      color: "from-green-500 to-teal-600",
      description: "L'excellence technique au service de la création",
      members: [
        {
          name: "Hassan Moussaoui",
          role: "Technical Manager",
          department: "Production",
          description: "Expert technique avec 15 ans d'expérience en production et manufacturing.",
        },
        {
          name: "Rachid Benjelloun",
          role: "Workshop Manager",
          department: "Production",
          description: "Gestionnaire d'atelier expérimenté, garant de la qualité et des délais de production.",
        },
        {
          name: "Fatima Zahra Berrada",
          role: "Quality Control Manager",
          department: "Production",
          description: "Responsable qualité rigoureuse, assure l'excellence de chaque réalisation.",
        },
        {
          name: "Omar Tahiri",
          role: "Chef d'équipe Welding",
          department: "Production",
          description: "Spécialiste en soudure et métallerie, expert en structures complexes.",
        },
      ]
    },
    {
      name: "Digital & Innovation",
      icon: Rocket,
      color: "from-purple-500 to-blue-600",
      description: "Pionnier de la transformation digitale",
      members: [
        {
          name: "Sophia Amrani",
          role: "Head of Digital",
          department: "Digital",
          description: "Stratège digital innovante, architecte de solutions technologiques avant-gardistes.",
        },
        {
          name: "Amine Kabbaj",
          role: "Lead Developer",
          department: "Digital",
          description: "Développeur full-stack expert, créateur de solutions web et mobiles performantes.",
        },
        {
          name: "Nadia El Mansouri",
          role: "Data Analyst",
          department: "Digital",
          description: "Experte en analyse de données et insights, optimise les performances digitales.",
        },
        {
          name: "Khalid Senhaji",
          role: "DevOps Engineer",
          department: "Digital",
          description: "Spécialiste infrastructure et déploiement, garant de la stabilité des systèmes.",
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-600/20 dark:to-blue-600/20" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Notre Équipe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des talents passionnés unis par la même vision : créer l'extraordinaire. 
              Découvrez les visages qui font la force de Gamius.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Collaborateurs", value: "100+", icon: Users },
              { label: "Expertises", value: "20+", icon: Award },
              { label: "Années d'expérience moyenne", value: "8", icon: Briefcase },
              { label: "Projets en équipe", value: "1000+", icon: Rocket }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
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

      {/* Culture Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Notre Culture d'Équipe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Collaboration",
                description: "Nous croyons en la force du collectif. Chaque projet est le fruit d'une synergie entre tous les départements.",
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "Innovation",
                description: "L'innovation est dans notre ADN. Nous encourageons la créativité et l'expérimentation continue.",
                color: "from-purple-500 to-pink-600"
              },
              {
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque projet, avec une attention méticuleuse aux détails.",
                color: "from-green-500 to-teal-600"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments & Team Members */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Nos Départements
          </h2>
          
          {departments.map((dept, deptIndex) => {
            const Icon = dept.icon;
            return (
              <div key={deptIndex} className="mb-20">
                {/* Department Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${dept.color} text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {dept.description}
                    </p>
                  </div>
                </div>

                {/* Team Members Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {dept.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Avatar Placeholder */}
                      <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${dept.color} flex items-center justify-center text-white text-2xl font-bold`}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      
                      {/* Member Info */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-3">
                          {member.role}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {member.description}
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center gap-3">
                          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                            <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                            <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Rejoignez notre équipe
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nous sommes toujours à la recherche de talents passionnés pour rejoindre l'aventure Gamius.
          </p>
          <a
            href={`/${locale}/careers`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Voir nos offres d'emploi
          </a>
        </div>
      </section>
    </div>
  );
}