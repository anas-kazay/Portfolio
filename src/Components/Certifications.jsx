import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificates = [
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM",
    },
    {
      title: "Database Design",
      issuer: "Oracle",
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
    },
  ];

  return (
    <div className="border-b pb-4 border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }} // Comes from below
            transition={{ duration: 0.5, delay: index * 0.2 }} // Adds delay for each certification
            className="mr-4 mb-6 p-4 bg-neutral-900 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-white">{cert.title}</h2>
            <p className="mt-2 text-purple-900">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
