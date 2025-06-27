import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const Education = () => {
  const education = [
    {
      title: "Bachelor of Technology - Computer Science",
      organization: "REVA University",
      period: "August 2019 - August 2023",
      location: "Bengaluru, Karnataka, India",
      description: "Completed comprehensive computer science program with focus on software engineering, algorithms, and modern web technologies.",
      highlights: [
        "Specialized in full-stack web development and software engineering",
        "Published research paper on 'Knee osteoarthritis detection and severity prediction using CNN'",
        "Participated in various technical workshops and coding competitions",
        "Developed multiple projects using modern web technologies",
        "Maintained strong academic performance throughout the program"
      ]
    },
    {
      title: "Science Pre-University Course",
      organization: "Alva's College, Moodabidri",
      period: "June 2017 - March 2019",
      location: "Karnataka, India",
      description: "Completed pre-university education with focus on Science stream, building strong foundation in mathematics and physics.",
      highlights: [
        "Achieved excellent academic performance in science subjects",
        "Developed strong analytical and problem-solving skills",
        "Participated in various science exhibitions and competitions",
        "Built foundation for engineering and technology studies"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <Timeline items={education} type="education" />
      </div>
    </section>
  );
};

export default Education;