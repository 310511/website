'use client'

import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card bg-white"
          >
            <p className="text-lg italic text-secondary mb-4">
              "Cooter's orthopedic devices transformed my recovery journey. Highly recommend their quality and customer service!"
            </p>
            <p className="font-semibold text-primary">- Rajesh Kumar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card bg-white"
          >
            <p className="text-lg italic text-secondary mb-4">
              "The braces from Cooter provided excellent support and comfort during my rehabilitation. Truly a game changer!"
            </p>
            <p className="font-semibold text-primary">- Anita Singh</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 