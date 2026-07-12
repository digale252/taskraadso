import React from 'react';
import { motion } from 'framer-motion';
import { LuShieldCheck, LuClock3, LuCpu, LuHeadphones, LuSparkles } from 'react-icons/lu';

const FeatureCard = ({ item, delay = 0, floatDelay = 0 }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ y: [0, -6, 0] }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        opacity: { duration: 0.45, delay },
        y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
        scale: { duration: 0.2 },
      }}
      className="group rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#0f0f0f] p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_45px_rgba(243,199,21,0.18)] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-2">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300">
        {item.description}
      </p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const leftCards = [
    {
      icon: LuCpu,
      title: 'Tailored Tech Solutions',
      description: 'We build software that matches your business needs, not a one-size-fits-all solution.',
    },
    {
      icon: LuClock3,
      title: 'Fast & Reliable Delivery',
      description: 'We deliver on time with clear communication and quality results you can trust.',
    },
  ];

  const rightCards = [
    {
      icon: LuShieldCheck,
      title: 'Security & Quality First',
      description: 'Your project is built with strong security and clean quality standards from day one.',
    },
    {
      icon: LuHeadphones,
      title: 'Long-Term Support',
      description: 'We stay with you after launch and provide ongoing support and improvements.',
    },
  ];

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Why Choose RaadsoTech
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
            We combine experience, speed, and support to help your business grow with confidence.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            {leftCards.map((card, idx) => (
              <FeatureCard key={card.title} item={card} delay={idx * 0.08} floatDelay={idx * 0.35} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -7, 0] }}
            whileHover={{ y: -12, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              scale: { duration: 0.25 },
              y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            }}
            className="relative mx-auto w-full max-w-[320px] lg:w-[320px] rounded-[2rem] border border-primary/30 bg-gradient-to-b from-primary to-[#e6bb12] text-black p-8 shadow-[0_20px_60px_rgba(243,199,21,0.35)]"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-black/10 blur-2xl pointer-events-none"></div>
            <div className="w-14 h-14 rounded-2xl bg-black text-primary flex items-center justify-center mb-6 shadow-lg">
              <LuSparkles size={26} />
            </div>
            <h3 className="text-2xl font-extrabold mb-3">
              Raadso Advantage
            </h3>
            <p className="text-sm leading-relaxed text-black/80 mb-6">
              We give you practical digital solutions that improve speed, security, and business results.
            </p>
            <div className="rounded-2xl bg-white/75 border border-white/60 px-4 py-3">
              <p className="text-xs font-bold tracking-wide uppercase text-black/70">Trusted Local Partner</p>
              <p className="text-base font-extrabold mt-1">Somalia & East Africa</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {rightCards.map((card, idx) => (
              <FeatureCard key={card.title} item={card} delay={idx * 0.08 + 0.15} floatDelay={idx * 0.35 + 0.2} />
            ))}
          </div>

          <div className="hidden lg:block absolute left-[31%] top-1/2 -translate-y-1/2 w-[8%] h-px bg-gradient-to-r from-primary/20 to-primary"></div>
          <div className="hidden lg:block absolute right-[31%] top-1/2 -translate-y-1/2 w-[8%] h-px bg-gradient-to-l from-primary/20 to-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
