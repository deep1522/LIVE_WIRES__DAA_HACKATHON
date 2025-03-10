"use client"

import React, { useRef } from "react"
import { Code, Users, Award, Briefcase, Rocket, Zap } from "lucide-react"
import { motion, useInView } from "framer-motion"

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Code size={40} className="text-[#00f2ff]" />,
      title: "Cutting-Edge Challenges",
      description: "Tackle real-world problems using the latest technologies in AI, blockchain, and cloud computing.",
    },
    {
      icon: <Users size={40} className="text-[#00f2ff]" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals from leading tech companies throughout the hackathon.",
    },
    {
      icon: <Award size={40} className="text-[#00f2ff]" />,
      title: "Valuable Prizes",
      description:
        "Win from a substantial prize pool including cash rewards, internship opportunities, and tech gadgets.",
    },
    {
      icon: <Briefcase size={40} className="text-[#00f2ff]" />,
      title: "Career Opportunities",
      description: "Connect with recruiters and potential employers looking for innovative talent and fresh ideas.",
    },
    {
      icon: <Rocket size={40} className="text-[#00f2ff]" />,
      title: "Launch Your Ideas",
      description:
        "Transform your concepts into working prototypes with the potential for future development and funding.",
    },
    {
      icon: <Zap size={40} className="text-[#00f2ff]" />,
      title: "Skill Enhancement",
      description: "Boost your technical and soft skills through intensive collaboration and problem-solving.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="features" className="py-20 bg-[#0f1729]/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-2">
            <span className="bg-[#131e36] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">Why Join Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">Future</span>{" "}
            of Hackathons
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            HakSprint'25 offers a unique platform to innovate, collaborate, and showcase your skills.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#131e36] rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-[#EEEEEE]/5 group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/5 group-hover:to-[#00b36b]/5 transition-all duration-700"></div>
              <div className="relative z-10">
                <motion.div
                  className="mb-6 bg-[#0f1729] p-4 rounded-lg inline-block"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {React.cloneElement(feature.icon, { className: "text-[#00ff8c]" })}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#EEEEEE]/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

