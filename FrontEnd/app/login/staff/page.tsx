"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function StaffLogin() {
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

  return (
    <div className="min-h-screen bg-[#0f1729] flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <motion.div
          className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-[#00ff8c] rounded-full filter blur-[150px] opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-[#00b36b] rounded-full filter blur-[150px] opacity-10"
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <motion.div className="w-full max-w-md" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <Link
              href="/"
              className="inline-flex items-center text-[#00ff8c] hover:text-[#00ff8c]/80 mb-8 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Staff Login</h1>
            <p className="text-[#EEEEEE]/70">Access the HackSprint'25 admin panel</p>
          </motion.div>

          <motion.div
            className="bg-[#131e36] p-8 rounded-xl shadow-lg border border-[#EEEEEE]/5"
            variants={itemVariants}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ff8c] transition-all"
                  placeholder="staff@hacksprint.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-[#EEEEEE]/70">
                    Password
                  </label>
                  <a href="#" className="text-xs text-[#00ff8c] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ff8c] transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 rounded border-[#EEEEEE]/10 bg-[#0f1729] text-[#00ff8c] focus:ring-[#00ff8c] focus:ring-offset-0"
                />
                <label htmlFor="remember" className="text-sm text-[#EEEEEE]/70">
                  Remember me
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>
            </form>

            <motion.div className="mt-6 text-center" variants={itemVariants}>
              <p className="text-sm text-[#EEEEEE]/70">Staff access only. Contact admin for credentials.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        className="py-4 text-center text-[#EEEEEE]/50 text-sm relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        &copy; {new Date().getFullYear()} HackSprint'25. All rights reserved.
      </motion.footer>
    </div>
  )
}

