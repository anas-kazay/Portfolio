import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const developmentTechnologies = [
    { icon: <FaJava className="text-7xl text-orange-400" />, name: "Java" },
    { icon: <FaNodeJs className="text-7xl text-green-400" />, name: "Node.js" },
    {
      icon: <SiMongodb className="text-7xl text-green-500" />,
      name: "MongoDB",
    },
    {
      icon: <SiTailwindcss className="text-7xl text-cyan-400" />,
      name: "Tailwind CSS",
    },
    {
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      name: "React",
    },
    { icon: <FaAngular className="text-7xl text-red-400" />, name: "Angular" },
    {
      icon: <SiSpring className="text-7xl text-green-400" />,
      name: "Spring Boot",
    },
    { icon: <SiMysql className="text-7xl text-blue-400" />, name: "MySQL" },
    {
      icon: <SiPostgresql className="text-7xl text-blue-400" />,
      name: "PostgreSQL",
    },
  ];

  const devopsTechnologies = [
    { icon: <FaGitAlt className="text-7xl text-orange-400" />, name: "Git" },
    { icon: <FaDocker className="text-7xl text-blue-400" />, name: "Docker" },
    {
      icon: <SiKubernetes className="text-7xl text-blue-500" />,
      name: "Kubernetes",
    },
    { icon: <FaLinux className="text-7xl text-gray-400" />, name: "Linux" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Development Technologies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-10"
      >
        {developmentTechnologies.map((technology, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index / 2)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4"
          >
            {technology.icon}
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 text-white text-sm transition-opacity">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* DevOps Technologies */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-3xl"
      >
        DevOps Tools
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {devopsTechnologies.map((technology, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index / 2)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4"
          >
            {technology.icon}
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 text-white text-sm transition-opacity">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
