"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

const SaaSPage = () => {
  const [faqOpen, setFaqOpen] = useState([false, false, false]);
  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <div className="min-h-screen bg-gradient-bg text-white font-sans">
      {/* Navbar */}
      <motion.nav className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-80 glass p-4 flex justify-between items-center"
        initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-xl font-bold text-gradient">SaaSBrand</span>
        <ul className="flex space-x-6">
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </motion.nav>
      
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center space-y-8">
        <h1 className="text-6xl md:text-7xl font-bold text-gradient">Transform Your Workflow</h1>
        <p className="text-lg md:text-2xl text-gray-400">Join countless others who are boosting productivity with our software.</p>
        <div className="flex space-x-4">
          <button className="px-8 py-4 bg-cyan-500/70 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:scale-105 transition">Get Started</button>
          <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-600/10 transition">Learn More</button>
        </div>
      </header>

      {/* Trusted Logos Section */}
      <section className="py-20 bg-zinc-900/10">
        <h2 className="text-2xl font-semibold mb-8 text-center">Trusted by:</h2>
        <div className="flex justify-evenly items-center space-x-8">
          <Image src="/logo1.svg" alt="Logo1" width={120} height={60} />
          <Image src="/logo2.svg" alt="Logo2" width={120} height={60} />
          <Image src="/logo3.svg" alt="Logo3" width={120} height={60} />
          <Image src="/logo4.svg" alt="Logo4" width={120} height={60} />
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Features That Stand Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div key={i} className="bg-zinc-800/30 glass p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}>
              <h3 className="text-xl font-semibold mb-2">Feature Title {i}</h3>
              <p className="text-gray-400">This feature helps you with something amazing.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Achievements</h2>
          <div className="flex justify-around">
            {['100K+', '1M+', '10K+'].map((stat, i) => (
              <motion.div key={i} className="flex flex-col items-center"
                whileInView={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                <div className="text-5xl font-bold text-gradient mb-2">{stat}</div>
                <p className="text-gray-400">{['Users', 'Downloads', 'Reviews'][i]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4 md:px-16 bg-zinc-900/10">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
        <div className="flex space-x-8 overflow-x-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-none w-80 bg-zinc-800/30 glass p-6 rounded-2xl shadow-lg">
              <p>"This software has transformed my entire workflow!"</p>
              <p className="mt-4 text-gray-400">- User {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          {['Basic', 'Popular', 'Premium'].map((tier, i) => (
            <div key={i} className={clsx(
              'p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4',
              { 'bg-gradient-to-r from-cyan-700 to-purple-700': tier === 'Popular', 'bg-zinc-800/30': tier !== 'Popular' }
            )}>
              <h3 className="text-xl font-semibold">{tier}</h3>
              <p className="text-4xl font-bold text-gradient">${[19, 49, 99][i]}</p>
              <ul className="space-y-2">
                {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <Check className="mr-2 text-cyan-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-cyan-500/70 text-white rounded-lg shadow-xl shadow-cyan-500/30 hover:scale-105 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-t from-zinc-950 via-zinc-900/10 to-transparent">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {['How do I start?', 'What is the price?', 'Is support available?'].map((question, i) => (
            <div key={i} className="p-6 bg-zinc-800/30 glass rounded-lg">
              <div className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(i)}>
                <h3 className="text-lg font-semibold">{question}</h3>
                <ArrowRight className={clsx('transition-transform', { 'rotate-90': faqOpen[i] })} />
              </div>
              <AnimatePresence>
                {faqOpen[i] && (
                  <motion.p className="mt-4 text-gray-400"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, non.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 text-center bg-cyan-700">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
        <p className="mb-8 text-lg">Join thousands of others and get started today.</p>
        <button className="px-10 py-4 bg-white text-cyan-700 rounded-full font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-zinc-900 text-center text-sm text-gray-500">
        <p>© 2023 SaaSBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SaaSPage;
