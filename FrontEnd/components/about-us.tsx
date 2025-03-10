import Image from "next/image"

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Event Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "Technical Lead",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Sponsorship Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="about" className="py-20 bg-[#131e36]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-[#0f1729] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">
              HakSprint'25
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Meet the team behind HakSprint'25 and learn about our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-[#EEEEEE]/70 mb-4">
              HakSprint'25 was founded with a simple yet powerful mission: to foster innovation, collaboration, and
              technological advancement through immersive hackathon experiences.
            </p>
            <p className="text-[#EEEEEE]/70 mb-4">
              We believe that when passionate individuals come together with the right resources and mentorship, they
              can create solutions that address real-world challenges and shape the future of technology.
            </p>
            <p className="text-[#EEEEEE]/70">
              Since our inception, we've hosted successful hackathons, supported thousands of participants, and
              witnessed the birth of numerous startups from our events.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff8c]/20 to-[#00b36b]/20 rounded-lg blur-xl"></div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Hackathon participants"
              width={800}
              height={600}
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#0f1729] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-[#EEEEEE]/5 group"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/10 group-hover:to-[#00b36b]/10 transition-all duration-700 z-10"></div>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-[#00ff8c]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs

