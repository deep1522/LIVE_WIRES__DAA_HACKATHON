"use client"

import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f1729]/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="text-[#00ff8c] font-bold text-2xl">
              HACK<span className="text-white">SPRINT'25</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Large Screens (1000px+) */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {["features", "highlights", "register", "faq", "about", "contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-[#EEEEEE] hover:text-[#00ff8c] transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login/student"
                  className="bg-[#131e36] border border-[#00ff8c] hover:bg-[#00ff8c]/10 text-[#00ff8c] px-4 py-2 rounded-md transition-all"
                >
                  Student Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login/staff"
                  className="bg-[#00ff8c] hover:bg-[#00ff8c]/90 text-[#0f1729] px-4 py-2 rounded-md transition-all"
                >
                  Staff Login
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Medium Screens (750px-1000px) */}
          <div className="hidden md:flex lg:hidden items-center">
            <div className="flex items-center space-x-4 mr-4">
              {["features", "highlights", "register", "faq"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-[#EEEEEE] hover:text-[#00ff8c] transition-colors text-sm"
                  whileHover={{ y: -2 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login/student"
                  className="bg-[#131e36] border border-[#00ff8c] hover:bg-[#00ff8c]/10 text-[#00ff8c] px-3 py-1.5 rounded-md transition-all text-sm"
                >
                  Student
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login/staff"
                  className="bg-[#00ff8c] hover:bg-[#00ff8c]/90 text-[#0f1729] px-3 py-1.5 rounded-md transition-all text-sm"
                >
                  Staff
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#00ff8c] rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 bg-[#131e36] rounded-lg overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-4 space-y-4">
                {["features", "highlights", "register", "faq", "about", "contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="block text-[#EEEEEE] hover:text-[#00ff8c] py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ))}
                <div className="pt-4 space-y-3 border-t border-[#EEEEEE]/10">
                  <Link
                    href="/login/student"
                    className="block w-full bg-[#0f1729] border border-[#00ff8c] hover:bg-[#00ff8c]/10 text-[#00ff8c] text-center py-2 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Login
                  </Link>
                  <Link
                    href="/login/staff"
                    className="block w-full bg-[#00ff8c] hover:bg-[#00ff8c]/90 text-[#0f1729] text-center py-2 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Staff Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

