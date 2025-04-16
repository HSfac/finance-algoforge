'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  id,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-200px' }}
      variants={sectionVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedItem = ({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      variants={childVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 