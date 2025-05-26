'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TimelineItem {
  year: string;
  title: string;
  description?: string;
  image?: string;
}

interface TimelineRevealProps {
  items: TimelineItem[];
  className?: string;
}

export function TimelineReveal({ items, className = '' }: TimelineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ['start end', 'end start'] 
  });
  
  const lineHeight = useTransform(
    scrollYProgress, 
    [0, 1], 
    ['0%', '100%']
  );

  return (
    <div ref={containerRef} className={cn('relative py-12 md:py-24', className)}>
      {/* Timeline line that grows as you scroll */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-100">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-primary-700" 
          style={{ height: lineHeight }}
        />
      </div>
      
      <div className="relative z-10 space-y-20 md:space-y-32">
        {items.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  
  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={itemRef}
      className={cn(
        "relative flex items-start gap-8 md:gap-0",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Year Badge on the timeline */}
      <motion.div 
        className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
      >
        <Badge 
          className="h-8 w-auto text-sm rounded-full px-3 bg-white border border-primary-500 text-primary-900 font-bold"
        >
          {item.year}
        </Badge>
      </motion.div>
      
      {/* Content Card */}
      <motion.div 
        className={cn(
          "flex-1 md:w-1/2", 
          isEven ? "md:pr-12" : "md:pl-12",
          "pl-12 md:pl-0"
        )}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card 
          className={cn(
            "p-6 md:p-8 overflow-hidden transition-all duration-500 border-0",
            "bg-gradient-to-br from-gray-50 to-white",
            "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]",
            isHovered && "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] scale-[1.02]"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              {item.title}
            </h3>
            
            {item.description && (
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            )}
          </motion.div>
        </Card>
      </motion.div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block md:flex-1" />
    </div>
  );
}
