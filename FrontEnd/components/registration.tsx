"use client"

import { useState } from "react"
import { Rocket, Users, User } from "lucide-react"
import { motion } from "framer-motion"

const Registration = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    participationType: "",
    teamName: "",
    totalMembers: "",
    teammateEmails: [""],
    experience: "",
    interests: [],
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name === "agreeTerms") {
        setFormData({ ...formData, [name]: checked })
      } else {
        // Handle interests checkboxes
        const updatedInterests = [...formData.interests]
        if (checked) {
          updatedInterests.push(value)
        } else {
          const index = updatedInterests.indexOf(value)
          if (index > -1) {
            updatedInterests.splice(index, 1)
          }
        }
        setFormData({ ...formData, interests: updatedInterests })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleTeammateEmailChange = (index, value) => {
    const updatedEmails = [...formData.teammateEmails]
    updatedEmails[index] = value
    setFormData({ ...formData, teammateEmails: updatedEmails })
  }

  const addTeammateEmail = () => {
    setFormData({
      ...formData,
      teammateEmails: [...formData.teammateEmails, ""],
    })
  }

  const removeTeammateEmail = (index) => {
    const updatedEmails = [...formData.teammateEmails]
    updatedEmails.splice(index, 1)
    setFormData({ ...formData, teammateEmails: updatedEmails })
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would submit the form data to a server here
    console.log("Form submitted:", formData)
    // Move to confirmation step
    nextStep()
  }

  const remainingSpots = 47 // This would be dynamic in a real application

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  }

  return (
    <section id="register" className="py-20 bg-[#0f1729]/80 backdrop-blur-sm relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-5"></div>
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-block mb-2">
            <span className="bg-[#131e36] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">Join Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Register for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">
              HakSprint'25
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Secure your spot in the ultimate hackathon experience and showcase your innovation.
          </p>
          <div className="mt-4 inline-block bg-[#131e36] px-4 py-2 rounded-full text-sm">
            <span className="text-[#00ff8c] font-bold">{remainingSpots}</span> spots remaining!
          </div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-[#131e36] rounded-xl shadow-xl overflow-hidden border border-[#EEEEEE]/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Progress Bar */}
          <div className="bg-[#0f1729] p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#EEEEEE]/70">Registration Progress</span>
              <span className="text-xs text-[#EEEEEE]/70">{step < 4 ? `Step ${step} of 3` : "Complete"}</span>
            </div>
            <div className="w-full bg-[#0f1729] rounded-full h-2 border border-[#EEEEEE]/5">
              <motion.div
                className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="p-6 md:p-8">
            {step === 1 && (
              <motion.div key="step1" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <h3 className="text-xl font-bold mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ff8c]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <h3 className="text-xl font-bold mb-6">Team Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">Participation Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        className={`border ${formData.participationType === "individual" ? "border-[#00ff8c]" : "border-[#EEEEEE]/10"} rounded-lg p-4 cursor-pointer transition-all bg-[#0f1729]`}
                        onClick={() => setFormData({ ...formData, participationType: "individual" })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="individual"
                            name="participationType"
                            value="individual"
                            checked={formData.participationType === "individual"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor="individual" className="cursor-pointer flex items-center">
                            <User size={18} className="mr-2 text-[#00ff8c]" />
                            Individual
                          </label>
                        </div>
                      </motion.div>

                      <motion.div
                        className={`border ${formData.participationType === "team" ? "border-[#00ff8c]" : "border-[#EEEEEE]/10"} rounded-lg p-4 cursor-pointer transition-all bg-[#0f1729]`}
                        onClick={() => setFormData({ ...formData, participationType: "team" })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="team"
                            name="participationType"
                            value="team"
                            checked={formData.participationType === "team"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor="team" className="cursor-pointer flex items-center">
                            <Users size={18} className="mr-2 text-[#00ff8c]" />
                            Team
                          </label>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {formData.participationType === "team" && (
                    <>
                      <div>
                        <label htmlFor="teamName" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                          Team Name
                        </label>
                        <input
                          type="text"
                          id="teamName"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleChange}
                          className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                        />
                      </div>

                      <div>
                        <label htmlFor="totalMembers" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                          Total Members
                        </label>
                        <select
                          id="totalMembers"
                          name="totalMembers"
                          value={formData.totalMembers}
                          onChange={handleChange}
                          className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                        >
                          <option value="">Select team size</option>
                          <option value="2">2 members</option>
                          <option value="3">3 members</option>
                          <option value="4">4 members</option>
                          <option value="5">5 members</option>
                        </select>
                      </div>

                      {formData.totalMembers && Number.parseInt(formData.totalMembers) > 1 && (
                        <div>
                          <label className="block text-sm font-medium text-[#EEEEEE]/70 mb-2">Teammate Emails</label>
                          {formData.teammateEmails.map((email, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-2 mb-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => handleTeammateEmailChange(index, e.target.value)}
                                placeholder={`Teammate ${index + 1} email`}
                                className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                              />
                              {index > 0 && (
                                <motion.button
                                  type="button"
                                  onClick={() => removeTeammateEmail(index)}
                                  className="bg-[#0f1729] border border-red-500/30 text-red-500 p-2 rounded-lg hover:bg-red-500/10"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  &times;
                                </motion.button>
                              )}
                            </motion.div>
                          ))}
                          {formData.teammateEmails.length < Number.parseInt(formData.totalMembers) - 1 && (
                            <motion.button
                              type="button"
                              onClick={addTeammateEmail}
                              className="text-[#00ff8c] text-sm flex items-center mt-2"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              + Add another teammate
                            </motion.button>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-[#0f1729] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="bg-transparent border border-[#EEEEEE]/30 text-[#EEEEEE] font-medium py-2 px-6 rounded-md transition-all hover:bg-[#EEEEEE]/5"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                onSubmit={handleSubmit}
                key="step3"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-xl font-bold mb-6">Interests & Confirmation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#EEEEEE]/70 mb-3">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "AI/Machine Learning",
                        "Web Development",
                        "Mobile Apps",
                        "Game Development",
                        "Blockchain",
                        "IoT",
                        "Cybersecurity",
                        "Data Science",
                      ].map((interest, idx) => (
                        <motion.div
                          key={interest}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <input
                            type="checkbox"
                            id={interest.replace(/\s+/g, "")}
                            name="interests"
                            value={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor={interest.replace(/\s+/g, "")} className="text-sm">
                            {interest}
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-[#EEEEEE]/70">
                        I agree to the{" "}
                        <a href="#" className="text-[#00f2ff] hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#00f2ff] hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="bg-transparent border border-[#EEEEEE]/30 text-[#EEEEEE] font-medium py-2 px-6 rounded-md transition-all hover:bg-[#EEEEEE]/5"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all flex items-center gap-2"
                    disabled={!formData.agreeTerms}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Rocket size={18} />
                    Complete Registration
                  </motion.button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                className="text-center py-8"
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00ff8c]/20 to-[#00b36b]/20 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                >
                  <Rocket size={32} className="text-[#00ff8c]" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Registration Complete!
                </motion.h3>
                <motion.p
                  className="text-[#EEEEEE]/70 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Thank you for registering for HakSprint'25! We've sent a confirmation email to{" "}
                  <span className="text-[#00ff8c]">{formData.email}</span> with all the details.
                </motion.p>
                <motion.div
                  className="bg-[#0f1729] p-4 rounded-lg inline-block border border-[#EEEEEE]/5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm">
                    Your registration ID:{" "}
                    <span className="font-mono font-medium">HS-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </p>
                </motion.div>
                <motion.div
                  className="mt-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href="#"
                    className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Discord Community
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Registration

