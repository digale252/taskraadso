import React from 'react';
import { LuSearch } from 'react-icons/lu';

const DomainSearch = () => {
  const extensions = [
    { ext: '.com', price: '$9.95' },
    { ext: '.co', price: '$7.95' },
    { ext: '.info', price: '$2.95' },
    { ext: '.net', price: '$5.95' },
    { ext: '.store', price: '$2.95' },
  ];

  return (
    <section className="relative z-30 -mt-10 md:-mt-16 px-6 md:px-12 lg:px-24 pb-14 md:pb-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 dark:border-white/10 bg-[#fafafa] dark:bg-[#0f0f0f] shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-4 md:p-6">
          <div className="w-full rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] px-2 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="yourdomain.com"
              className="flex-1 bg-transparent px-4 md:px-6 py-2 text-base md:text-lg text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
            />
            <button className="rounded-full bg-primary text-black font-bold text-xs md:text-sm px-6 md:px-8 py-3 hover:bg-black hover:text-primary transition-colors flex items-center gap-2">
              <LuSearch size={16} />
              SEARCH
            </button>
          </div>

          <div className="mt-5 pt-5 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 text-center">
            {extensions.map((item) => (
              <div key={item.ext} className="rounded-2xl md:rounded-full px-3 py-2 bg-white dark:bg-[#131313] border border-gray-100 dark:border-white/10">
                <span className="text-primary font-extrabold text-base">{item.ext}</span>
                <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSearch;
