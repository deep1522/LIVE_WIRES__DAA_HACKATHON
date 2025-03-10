import { Code, Users, Award, Briefcase, Rocket } from "lucide-react"
import React from "react"

const EventHighlights = () => {
  const highlights = [
    {
      icon: <Code size={32} className="text-[#00f2ff]" />,
      title: "Workshops & Bootcamps",
      description:
        "Intensive skill-building sessions led by industry experts on AI, blockchain, cloud computing, and more.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    },
    {
      icon: <Rocket size={32} className="text-[#00f2ff]" />,
      title: "Live Coding Challenges",
      description: "Test your skills in real-time competitions with peers and win instant prizes.",
      tech: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
    },
    {
      icon: <Users size={32} className="text-[#00f2ff]" />,
      title: "Mentorship Sessions",
      description: "One-on-one guidance from tech leaders to help refine your ideas and implementation.",
      mentors: ["15+ Senior Engineers", "10+ Product Managers", "5+ Design Experts"],
    },
    {
      icon: <Briefcase size={32} className="text-[#00f2ff]" />,
      title: "Demo & Pitch Presentations",
      description: "Showcase your project to judges, investors, and fellow participants.",
      criteria: ["Innovation", "Technical Complexity", "Design", "Impact", "Presentation"],
    },
    {
      icon: <Award size={32} className="text-[#00f2ff]" />,
      title: "Award Ceremony",
      description: "Celebration of outstanding projects with prizes worth over $50,000.",
      prizes: ["Grand Prize: $20,000", "Category Winners: $5,000 each", "Audience Choice: $3,000"],
    },
  ]

  return (
    <section id="highlights" className="py-20 bg-[#131e36]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-[#0f1729] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">
              What to Expect
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">
              Highlights
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Experience these exciting activities throughout the hackathon weekend.
          </p>
        </div>

        <div className="space-y-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-[#0f1729] rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-[#EEEEEE]/5 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/5 group-hover:to-[#00b36b]/5 transition-all duration-700"></div>
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                  <div className="bg-[#131e36] p-4 rounded-lg border border-[#EEEEEE]/5">
                    {React.cloneElement(highlight.icon, { className: "text-[#00ff8c]" })}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-[#EEEEEE]/70 mb-4">{highlight.description}</p>

                  {highlight.tech && (
                    <div>
                      <h4 className="text-sm font-semibold text-[#00ff8c] mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {highlight.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-[#131e36] text-xs px-3 py-1 rounded-full border border-[#EEEEEE]/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {highlight.mentors && (
                    <div>
                      <h4 className="text-sm font-semibold text-[#00ff8c] mb-2">Mentors Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {highlight.mentors.map((mentor, i) => (
                          <span
                            key={i}
                            className="bg-[#131e36] text-xs px-3 py-1 rounded-full border border-[#EEEEEE]/5"
                          >
                            {mentor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {highlight.criteria && (
                    <div>
                      <h4 className="text-sm font-semibold text-[#00ff8c] mb-2">Judging Criteria</h4>
                      <div className="flex flex-wrap gap-2">
                        {highlight.criteria.map((criterion, i) => (
                          <span
                            key={i}
                            className="bg-[#131e36] text-xs px-3 py-1 rounded-full border border-[#EEEEEE]/5"
                          >
                            {criterion}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {highlight.prizes && (
                    <div>
                      <h4 className="text-sm font-semibold text-[#00ff8c] mb-2">Prize Pool</h4>
                      <div className="flex flex-wrap gap-2">
                        {highlight.prizes.map((prize, i) => (
                          <span
                            key={i}
                            className="bg-[#131e36] text-xs px-3 py-1 rounded-full border border-[#EEEEEE]/5"
                          >
                            {prize}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventHighlights

