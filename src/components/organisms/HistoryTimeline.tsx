'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/atoms/Card';

interface TimelineItem {
  year: string;
  title: string;
  description?: string;
}

interface HistoryTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function HistoryTimeline({ items, className = '' }: HistoryTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Ligne de la timeline */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div 
            key={index}
            className="relative flex gap-6 md:gap-12"
          >
            <div className="hidden md:block md:flex-1"></div>
            
            {/* Point sur la timeline */}
            <div className="absolute left-0 top-4 -ml-1 h-3 w-3 rounded-full bg-primary-600 md:left-1/2 md:-ml-1.5"></div>
            
            <motion.div 
              className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                {item.description && (
                  <p className="text-gray-600">{item.description}</p>
                )}
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
