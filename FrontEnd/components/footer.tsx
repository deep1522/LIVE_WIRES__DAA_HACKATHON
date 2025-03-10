import { Rocket } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#0f1729] pt-16 pb-8 border-t border-[#EEEEEE]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-[#00ff8c] font-bold text-2xl">
                HACK<span className="text-white">SPRINT'25</span>
              </span>
            </div>
            <p className="text-[#EEEEEE]/70 mb-4">
              The ultimate hackathon experience for innovators, creators, and problem-solvers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00ff8c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00ff8c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00ff8c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#register" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Sponsor Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Participant Handbook
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Login</h4>
            <div className="space-y-3">
              <Link
                href="/login/student"
                className="flex items-center gap-2 text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors"
              >
                <span className="bg-[#131e36] p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
                Student Login
              </Link>
              <Link
                href="/login/staff"
                className="flex items-center gap-2 text-[#EEEEEE]/70 hover:text-[#00f2ff] transition-colors"
              >
                <span className="bg-[#131e36] p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </span>
                Staff Login
              </Link>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-lg mb-4">Subscribe</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#131e36] border border-[#EEEEEE]/10 rounded-l-lg px-4 py-2 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00f2ff] w-full"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#00f2ff] to-[#a15dff] hover:opacity-90 text-white font-medium py-2 px-4 rounded-r-lg transition-all"
                >
                  <Rocket size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-[#EEEEEE]/10 pt-8 text-center">
          <p className="text-[#EEEEEE]/50 text-sm">
            &copy; {new Date().getFullYear()} HakSprint'25. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

