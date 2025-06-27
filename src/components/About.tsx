import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Angular, HTML, CSS, JavaScript, TypeScript"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Database",
      description: "MySQL, C#, RESTful APIs"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack Solutions",
      description: "End-to-end application development"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Modern Tools",
      description: "Git, Power BI, Cypress Testing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                I am a passionate Full Stack Developer with a strong focus on building robust and efficient applications. 
                Currently working as an Associate Software Engineer at Bosch Global Software Technologies, I specialize in 
                developing dynamic and reusable widgets using Angular as part of the CNC HMI team.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                My expertise spans across front-end technologies like HTML, CSS, JavaScript, and TypeScript, along with 
                Angular for dynamic UI development. I also have experience with SQL for database management and Cypress 
                for end-to-end testing.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I thrive in collaborative environments and have experience working in agile teams, delivering high-quality 
                code and seamless user experiences. My goal is to continue growing as a developer while contributing to 
                innovative projects that make a real impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;