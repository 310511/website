'use client'

import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-4xl font-bold text-primary mb-2">150+</h4>
            <p className="text-lg text-secondary">Trusted by Experts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-4xl font-bold text-primary mb-2">15</h4>
            <p className="text-lg text-secondary">Quality Assured</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-4xl font-bold text-primary mb-2">★★★★★</h4>
            <p className="text-lg text-secondary">Customer Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 