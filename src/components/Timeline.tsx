import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  type: 'experience' | 'education';
}

const Timeline: React.FC<TimelineProps> = ({ items, type }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12 last:mb-0"
        >
          {/* Timeline Dot */}
          <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

          {/* Content Card */}
          <motion.div
            whileHover={{ scale: 1.02, x: 10 }}
            className="ml-16 p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-slate-200 hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-lg font-semibold text-blue-600">{item.organization}</p>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
                  {item.period}
                </span>
                <p className="text-slate-500 text-sm mt-1">{item.location}</p>
              </div>
            </div>

            <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>

            {item.highlights && (
              <div className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;