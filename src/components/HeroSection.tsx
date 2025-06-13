'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Precision Care for Every Step
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary mb-8"
          >
            Orthopedic Solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
          >
            <h3>Reliable Braces and Supports</h3>
            <p className="text-lg text-secondary mb-6">
              Professional-grade orthopedic braces and supports for optimal recovery and comfort.
            </p>
            <Link href="/services" className="btn">
              Shop Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="card"
          >
            <h3>Mobility Aids for Recovery</h3>
            <p className="text-lg text-secondary mb-6">
              Advanced mobility solutions designed to support your journey to better health.
            </p>
            <Link href="/gallery" className="btn">
              Explore More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 