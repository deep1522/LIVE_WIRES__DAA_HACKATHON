import Image from "next/image"

const Sponsors = () => {
  const sponsors = [
    {
      tier: "Platinum",
      companies: [
        { name: "TechCorp", logo: "/placeholder.svg?height=80&width=150" },
        { name: "InnovateLabs", logo: "/placeholder.svg?height=80&width=150" },
      ],
    },
    {
      tier: "Gold",
      companies: [
        { name: "CodeMasters", logo: "/placeholder.svg?height=60&width=120" },
        { name: "DevSolutions", logo: "/placeholder.svg?height=60&width=120" },
        { name: "CloudNine", logo: "/placeholder.svg?height=60&width=120" },
      ],
    },
    {
      tier: "Silver",
      companies: [
        { name: "ByteWorks", logo: "/placeholder.svg?height=50&width=100" },
        { name: "QuantumTech", logo: "/placeholder.svg?height=50&width=100" },
        { name: "NexGen", logo: "/placeholder.svg?height=50&width=100" },
        { name: "FutureSoft", logo: "/placeholder.svg?height=50&width=100" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-[#131e36]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-[#0f1729] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">Our Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Supported by leading companies in the tech industry.
          </p>
        </div>

        <div className="space-y-12">
          {sponsors.map((tier, index) => (
            <div key={index} className="text-center">
              <h3 className="inline-block text-xl font-bold mb-8 border-b-2 border-[#00ff8c] pb-2">
                {tier.tier} Sponsors
              </h3>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {tier.companies.map((company, i) => (
                  <div
                    key={i}
                    className="bg-[#0f1729] p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 border border-[#EEEEEE]/5 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8c]/0 to-[#00ff8c]/0 group-hover:from-[#00ff8c]/5 group-hover:to-[#00b36b]/5 transition-all duration-700"></div>
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={150}
                      height={80}
                      className="h-auto max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-transparent border-2 border-[#00ff8c] text-[#00ff8c] hover:bg-[#00ff8c]/10 font-medium py-2 px-6 rounded-md transition-all"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors

