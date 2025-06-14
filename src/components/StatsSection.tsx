'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stats = [
    {
      value: 150,
      suffix: '+',
      label: 'Trusted by Experts',
      icon: '👨‍⚕️'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Quality Assured',
      icon: '✨'
    },
    {
      value: 5,
      suffix: '★',
      label: 'Customer Satisfaction',
      icon: '⭐'
    }
  ];

  return (
    <section ref={ref} className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-20">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30"
        style={{ opacity, scale }}
      />
      <div className="container relative z-10">
        <motion.h2 
          className="text-center mb-16 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <motion.h4 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {stat.value}{stat.suffix}
              </motion.h4>
              <p className="text-lg text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 