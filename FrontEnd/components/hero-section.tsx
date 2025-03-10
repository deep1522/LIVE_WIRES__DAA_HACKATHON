"use client"

import { useState, useEffect } from "react"
import { Rocket, Zap } from "lucide-react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const hackathonDate = new Date("2025-03-15T09:00:00")
    const difference = +hackathonDate - +new Date()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <motion.div
        className="container mx-auto px-4 md:px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c] to-[#00b36b] blur-xl opacity-30 rounded-full"></div>
            <span className="relative bg-[#131e36] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium inline-block">
              March 15-17, 2025
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">
              HackSprint'25
            </span>
            <br />
            <span className="relative">
              Code. Create. Conquer.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,9 150,5 T300,5" fill="none" stroke="#00ff8c" strokeWidth="2" />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 text-[#EEEEEE]/90 max-w-3xl mx-auto">
            Join the most futuristic hackathon experience and transform your ideas into reality.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 text-center">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#131e36] p-3 md:p-6 rounded-xl border border-[#EEEEEE]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/10 group-hover:to-[#00b36b]/10 transition-all duration-700"></div>
                <div className="text-2xl md:text-4xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs md:text-sm text-[#EEEEEE]/70">Days</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#131e36] p-3 md:p-6 rounded-xl border border-[#EEEEEE]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/10 group-hover:to-[#00b36b]/10 transition-all duration-700"></div>
                <div className="text-2xl md:text-4xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs md:text-sm text-[#EEEEEE]/70">Hours</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#131e36] p-3 md:p-6 rounded-xl border border-[#EEEEEE]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/10 group-hover:to-[#00b36b]/10 transition-all duration-700"></div>
                <div className="text-2xl md:text-4xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs md:text-sm text-[#EEEEEE]/70">Minutes</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#131e36] p-3 md:p-6 rounded-xl border border-[#EEEEEE]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/10 group-hover:to-[#00b36b]/10 transition-all duration-700"></div>
                <div className="text-2xl md:text-4xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs md:text-sm text-[#EEEEEE]/70">Seconds</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#register"
              className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-3 px-8 rounded-md text-lg transition-all transform flex items-center justify-center gap-2 shadow-lg shadow-[#00ff8c]/20"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Rocket size={20} />
              Register Now
            </motion.a>
            <motion.a
              href="/login/student"
              className="bg-[#131e36] border border-[#00ff8c] text-[#00ff8c] hover:bg-[#00ff8c]/10 font-medium py-3 px-8 rounded-md text-lg transition-all flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Zap size={20} />
              Student Login
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

