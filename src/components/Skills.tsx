import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "Angular", level: 90, color: "from-red-500 to-red-600" },
        { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 88, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 92, color: "from-orange-500 to-orange-600" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "C#", level: 75, color: "from-purple-500 to-purple-600" },
        { name: "MySQL", level: 80, color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, color: "from-gray-600 to-gray-700" },
        { name: "Power BI", level: 70, color: "from-yellow-600 to-yellow-700" },
        { name: "Cypress", level: 75, color: "from-teal-500 to-teal-600" },
        { name: "GitHub Copilot", level: 80, color: "from-indigo-500 to-indigo-600" }
      ]
    }
  ];

  const certifications = [
    "Angular",
    "Javascript",
    "Typescript",
    "HTML&CSS",
    "Cypress",
    "Docker",
    "git"
  ];

  const languages = [
    { name: "Kannada", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Limited Working" },
    { name: "Telugu", level: "Limited Working" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technical skills and expertise developed through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications and Languages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Certifications</h3>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg text-center hover:border-purple-300 transition-all duration-300"
                >
                  <span className="text-slate-700 text-sm font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg"
                >
                  <span className="text-slate-700 font-medium">{lang.name}</span>
                  <span className="text-blue-600 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;