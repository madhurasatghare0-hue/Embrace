import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Care Packages', href: '/care-packages' },
  { label: 'Contact Us', href: '/contact' },
]

const services = [
  { label: 'Companion Care', href: '/services#companion-care' },
  { label: 'Nursing Care', href: '/services#nursing-care' },
  { label: 'Dementia Care', href: '/services#dementia-care' },
  { label: 'Post-Surgery Care', href: '/services#post-surgery-care' },
  { label: 'Medication Assistance', href: '/services#medication-assistance' },
  { label: '24x7 Live-in Care', href: '/services#live-in-care' },
]

function Footer() {
  return (
    <footer className="bg-[#2A1B4D] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo + description + socials */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-7 h-7 text-orange-400" fill="currentColor" />
            <div>
              <div className="font-serif text-2xl font-bold leading-none">
                <span className="text-white">Embrace</span>
                <span className="text-[#F0854D]">Care</span>
              </div>
              <div className="text-xs text-gray-400 tracking-wide">Care with Heart</div>
            </div>
          </Link>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Compassionate elder care services at home. Peace of mind for you, happiness for them.
          </p>
          <div className="flex items-center gap-3 mt-5">
  <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
    <FaFacebookF className="w-4 h-4" />
  </a>
  <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
    <FaInstagram className="w-4 h-4" />
  </a>
  <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
    <FaTwitter className="w-4 h-4" />
  </a>
  <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
    <FaLinkedinIn className="w-4 h-4" />
  </a>
</div>
          
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-gray-300 hover:text-[#F0854D] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.href}>
                <Link to={service.href} className="text-sm text-gray-300 hover:text-[#F0854D] transition-colors">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <Phone className="w-4 h-4 mt-0.5 text-[#F0854D] shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <Mail className="w-4 h-4 mt-0.5 text-[#F0854D] shrink-0" />
              support@eldercare.com
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 mt-0.5 text-[#F0854D] shrink-0" />
              123 Wellness Street, Mumbai, India
            </li>
          </ul>
          <Link
            to="/get-started"
            className="inline-block mt-5 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© 2026 Embrace Care. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer