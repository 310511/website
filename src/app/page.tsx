import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Stats Section */}
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

      {/* Testimonials Section */}
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
    </div>
  );
}
