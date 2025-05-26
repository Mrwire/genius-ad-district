'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';

interface GroupCompany {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  icon: string;
  color: string;
  image?: string;
}

interface GroupShowcaseProps {
  title: string;
  subtitle: string;
  companies: GroupCompany[];
  className?: string;
}

export function GroupShowcase({
  title,
  subtitle,
  companies,
  className = '',
}: GroupShowcaseProps) {
  const [activeCompany, setActiveCompany] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const handleCompanyClick = (id: string) => {
    setActiveCompany(activeCompany === id ? null : id);
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        'py-16 md:py-32 relative overflow-hidden',
        className
      )}
    >
      {/* Background design elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-500 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-500 to-transparent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Cards des entreprises du groupe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                type: "spring",
              }}
            >
              <Card 
                className={cn(
                  "h-full overflow-hidden transition-all duration-500 cursor-pointer backdrop-blur-sm",
                  "border border-gray-100 hover:border-gray-200",
                  activeCompany === company.id 
                    ? "shadow-2xl scale-[1.02]" 
                    : "shadow-lg hover:shadow-xl",
                  "bg-white/80"
                )}
                onClick={() => handleCompanyClick(company.id)}
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 w-12 h-12 rounded-lg flex items-center justify-center text-2xl" 
                    style={{ backgroundColor: company.color + '15' }}
                  >
                    {company.icon}
                  </div>
                  <CardTitle className="text-2xl">{company.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{company.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-gray-800 hover:text-primary-600 hover:bg-transparent"
                  >
                    <span>En savoir plus</span> 
                    <Plus size={16} className="ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Zone détaillée qui apparaît lorsqu'une entreprise est sélectionnée */}
        <AnimatePresence>
          {activeCompany && (
            <motion.div
              key={activeCompany}
              className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {companies
                .filter((company) => company.id === activeCompany)
                .map((company) => (
                  <div key={company.id} className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 md:p-10">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" 
                            style={{ backgroundColor: company.color + '15' }}
                          >
                            {company.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{company.name}</h3>
                        </div>
                        <div className="prose prose-gray">
                          <p className="text-gray-600 leading-relaxed">
                            {company.longDescription || company.description}
                          </p>
                          <Button className="mt-6" size="sm">
                            Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative min-h-[300px]"
                    >
                      {company.image ? (
                        <Image
                          src={company.image}
                          alt={company.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-gray-100"
                          style={{ backgroundColor: company.color + '10' }}
                        >
                          <span className="text-6xl opacity-30">{company.icon}</span>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
