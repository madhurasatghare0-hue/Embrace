// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Heart, Phone, Menu, X } from 'lucide-react'

// const navLinks = [
//   { label: 'Home', href: '/' },
//   { label: 'About Us', href: '/about' },
//   { label: 'Services', href: '/services' },
//   { label: 'Care Packages', href: '/care-packages' },
//   { label: 'How It Works', href: '/how-it-works' },
//   { label: 'Blog', href: '/blog' },
//   { label: 'Contact Us', href: '/contact' },
// ]

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-white/0 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <div>
//             <div className="font-serif text-2xl font-bold leading-none">
//               <span className="text-[#3D2A6D]">Embrace</span>
//               {/* <span className="text-[#F0854D]">Care</span> */}
//             </div>
//             <div className="text-xs text-gray-500 tracking-wide">Care with Heart</div>
//           </div>
//         </Link>

//         {/* Desktop Nav Links */}
//         <nav className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               to={link.href}
//               className="text-sm font-medium text-gray-700 hover:text-[#6B3FA0] transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Right side: phone + CTA */}
//         <div className="hidden lg:flex items-center gap-4">

//           <Link
//             to="/login"
//             className="px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity shadow-md"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           className="lg:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile menu panel */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-t border-white/40 px-4 py-4 flex flex-col gap-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               to={link.href}
//               className="text-sm font-medium text-gray-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Link
//             to="/login"
//             className="mt-2 text-center px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D]"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Get Started
//           </Link>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar









import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Care Packages', href: '/care-packages' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Glass Navbar */}
      <div
        className="
          w-full
          bg-white/55
          backdrop-blur-xl
          backdrop-saturate-150
          border-b
          border-white/50
          shadow-[0_4px_25px_rgba(61,42,109,0.08)]
        "
      >

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="h-[66px] flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div>
                <div className="font-serif text-2xl font-bold leading-none">
                  <span className="text-[#3D2A6D]">
                    Embrace
                  </span>
                  <span className="text-[#F0854D]">Care</span>
                </div>

                <div className="text-xs text-gray-500 tracking-wide">
                  Care with Heart
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-[#6B3FA0]
                    transition-colors
                    duration-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: CTA */}
            <div className="hidden lg:flex items-center gap-4">

              <Link
                to="/login"
                className="
                  px-5
                  py-2.5
                  rounded-full
                  text-white
                  text-sm
                  font-semibold
                  bg-gradient-to-r
                  from-[#8B4FC7]
                  to-[#F0854D]
                  hover:opacity-90
                  transition-opacity
                  shadow-md
                "
              >
                Get Started
              </Link>

            </div>

            {/* Mobile hamburger */}
            <button
              className="
                lg:hidden
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                bg-white/40
                backdrop-blur-md
                border
                border-white/50
                text-[#3D2A6D]
              "
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

          {/* Mobile menu panel */}
          {isMobileMenuOpen && (
            <div
              className="
                lg:hidden
                bg-white/50
                backdrop-blur-2xl
                backdrop-saturate-150
                border-t
                border-white/40
                px-4
                py-4
                flex
                flex-col
                gap-4
              "
            >

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-[#6B3FA0]
                    transition-colors
                  "
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/login"
                className="
                  mt-2
                  text-center
                  px-5
                  py-2.5
                  rounded-full
                  text-white
                  text-sm
                  font-semibold
                  bg-gradient-to-r
                  from-[#8B4FC7]
                  to-[#F0854D]
                "
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
              >
                Get Started
              </Link>

            </div>
          )}

        </div>

      </div>
    </header>
  )
}

export default Navbar










