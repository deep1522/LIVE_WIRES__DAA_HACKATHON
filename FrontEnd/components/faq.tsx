"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I participate in HakSprint'25?",
      answer:
        "Registration is simple! Click the 'Register Now' button, fill out the form with your details, and choose whether you're participating solo or as a team. Once registered, you'll receive a confirmation email with further instructions.",
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "While some coding experience is beneficial, we welcome participants of all skill levels. We have tracks suitable for beginners and provide mentorship throughout the event. What's most important is your enthusiasm and willingness to learn!",
    },
    {
      question: "What are the eligibility criteria?",
      answer:
        "The hackathon is open to students, professionals, and enthusiasts aged 18 and above. You'll need a laptop, internet connection, and the passion to build something amazing. International participants are welcome!",
    },
    {
      question: "What's the event schedule?",
      answer:
        "The hackathon runs for 48 hours, starting on Friday at 6 PM and ending on Sunday at 6 PM. Opening ceremony begins at 5 PM on Friday, followed by team formation, workshops, coding sessions, mentorship, and finally presentations and awards on Sunday evening.",
    },
    {
      question: "What tools and technologies are allowed?",
      answer:
        "You're free to use any programming language, framework, or library. We encourage the use of open-source tools. You can also leverage APIs, cloud services, and hardware components as needed for your project.",
    },
    {
      question: "Is there a participation fee?",
      answer:
        "No, participation is completely free! We believe in making innovation accessible to everyone. All you need to bring is your laptop, charger, and creative ideas.",
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer:
        "All projects must be built during the hackathon. You can come with ideas and plans, but the actual coding and development should start only after the official kickoff. Pre-existing projects are not eligible for submission.",
    },
    {
      question: "How are the winners selected?",
      answer:
        "Projects will be judged based on innovation, technical complexity, design, impact, and presentation quality. Our panel of judges includes industry experts, sponsors, and tech leaders who will evaluate each submission fairly.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="faq" className="py-20 bg-[#0f1729]/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-2">
            <span className="bg-[#131e36] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">
              Questions
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Find answers to common questions about HakSprint'25.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-[#EEEEEE]/10 pb-4 last:border-b-0"
              variants={itemVariants}
            >
              <motion.button
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleQuestion(index)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="text-[#00ff8c]" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#EEEEEE]/70 pb-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[#EEEEEE]/70 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            className="text-[#00ff8c] hover:underline font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact our support team
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

