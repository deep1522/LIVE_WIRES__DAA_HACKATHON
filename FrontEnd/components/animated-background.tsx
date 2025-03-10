"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const gradients = [
  "linear-gradient(to right bottom, rgba(0, 255, 140, 0.1), rgba(0, 179, 107, 0.1))",
  "linear-gradient(to left bottom, rgba(0, 179, 107, 0.1), rgba(0, 255, 140, 0.1))",
  "linear-gradient(to right top, rgba(0, 255, 140, 0.1), rgba(0, 179, 107, 0.1))",
  "linear-gradient(to left top, rgba(0, 179, 107, 0.1), rgba(0, 255, 140, 0.1))",
]

export default function AnimatedBackground() {
  const [currentGradient, setCurrentGradient] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f1729]"></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Animated gradient background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGradient}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ background: gradients[currentGradient] }}
        />
      </AnimatePresence>

      {/* Floating orbs */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#00ff8c]"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              filter: "blur(70px)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

