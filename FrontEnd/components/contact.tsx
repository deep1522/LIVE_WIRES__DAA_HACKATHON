import { Mail, Linkedin, Twitter, MessageSquare } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f1729]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-[#131e36] text-[#00ff8c] py-1 px-4 rounded-full text-sm font-medium">Reach Out</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff8c] to-[#00b36b]">Touch</span>
          </h2>
          <p className="text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Have questions or need more information? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#131e36] p-3 rounded-lg mr-4 border border-[#EEEEEE]/5">
                  <Mail className="text-[#00ff8c]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-[#EEEEEE]/70">info@haksprint.com</p>
                  <p className="text-[#EEEEEE]/70">support@haksprint.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#131e36] p-3 rounded-lg mr-4 border border-[#EEEEEE]/5">
                  <MessageSquare className="text-[#00ff8c]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Join Our Community</h4>
                  <p className="text-[#EEEEEE]/70 mb-2">Connect with fellow participants and mentors</p>
                  <a
                    href="#"
                    className="inline-block bg-[#5865F2] hover:bg-[#5865F2]/90 text-white font-medium py-2 px-4 rounded-md transition-all text-sm"
                  >
                    Join Discord Server
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#131e36] p-3 rounded-full hover:bg-[#00ff8c]/20 transition-all border border-[#EEEEEE]/5"
                  >
                    <Twitter className="text-[#00ff8c]" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#131e36] p-3 rounded-full hover:bg-[#00ff8c]/20 transition-all border border-[#EEEEEE]/5"
                  >
                    <Linkedin className="text-[#00ff8c]" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#131e36] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ff8c]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#131e36] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#131e36] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#EEEEEE]/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[#131e36] border border-[#EEEEEE]/10 rounded-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#00ff8c] to-[#00b36b] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

