import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abdiwahab A. Elmi, PhD",
      role: "Managing Director, Bravo",
      image: "/img/testimonial1.png",
      text: "RaadsoTech helped us grow with quality web and digital services. Their team understood our needs and delivered practical solutions on time."
    },
    {
      id: 2,
      name: "Eng. Mohamed Mohamud",
      role: "SIMAD University",
      image: "/img/testimonial1.png",
      text: "RaadsoTech played a key role in our event branding and digital experience. Communication was clear and the final result was excellent."
    },
    {
      id: 3,
      name: "Eng. Mohamed Hagi",
      role: "Director of Cybersecurity, NCA",
      image: "/img/testimonial1.png",
      text: "Their team delivered professionally with creativity and strong attention to detail. We were very satisfied with the service and support."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary text-sm font-bold uppercase mb-2 tracking-widest">
              What our customers say about us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
              Testimonials
            </h2>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111111] px-6 pt-6 pb-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(243,199,21,0.14)] transition-all duration-300 h-full min-h-[360px] flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5 text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} size={14} />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic leading-8 text-[15px] text-justify flex-1">
                "{test.text}"
              </p>

              <div className="border-t border-gray-100 dark:border-white/10 my-6"></div>

              <div className="flex items-center gap-3">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-white/10"
                />
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-[#1f2937] dark:text-white">
                    {test.name}
                  </h4>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
