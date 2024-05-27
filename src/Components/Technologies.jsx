import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { motion } from "framer-motion";

const inconVariants = (duration) => ({
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
  const technologies = [
    <FaNodeJs className="text-7xl text-green-400" />,
    <SiMongodb className="text-7xl text-green-500" />,
    <SiTailwindcss className="text-7xl text-cyan-400" />,
    <RiReactjsLine className="text-7xl text-cyan-400" />,
    <FaAngular className="text-7xl text-red-400" />,
    <SiSpring className="text-7xl text-green-400" />,
    <SiMysql className="text-7xl text-blue-400" />,
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
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={index}
            variants={inconVariants(2.5 + index / 2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {technology}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
