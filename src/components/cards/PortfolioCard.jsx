import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import Badge from '../ui/Badge';

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f0f0f] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(243,199,21,0.14)] transition-all duration-500 h-full flex flex-col"
    >
      <div className="rounded-3xl overflow-hidden relative h-56 border border-gray-100 dark:border-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute left-4 bottom-4">
            <Badge className="bg-primary text-black text-[0.65rem] font-extrabold tracking-wider px-3 py-1 rounded-full">
              {item.category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col flex-1 rounded-3xl bg-[#fcfcfc] dark:bg-[#121212] border border-gray-100 dark:border-white/10 p-5 mt-4">
          <div>
            <h3 className="text-2xl font-extrabold text-black dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 line-clamp-3">
              {item.description}
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div>
                <p className="text-xs font-extrabold text-black dark:text-white uppercase">Year</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{item.year || '2025'}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold text-black dark:text-white uppercase">Industry</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{item.industry || item.category}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold text-black dark:text-white uppercase">Direction</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{item.direction || 'Project Delivery'}</p>
              </div>
            </div>
          </div>

          <button className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary text-black font-bold py-3 hover:bg-black hover:text-primary transition-colors">
            Full Project <LuArrowUpRight size={17} />
          </button>
        </div>
    </motion.div>
  );
};

export default PortfolioCard;
