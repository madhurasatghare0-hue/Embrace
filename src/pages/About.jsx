import { Link } from 'react-router-dom'
import { Target, Eye, Users2, HandHeart, ShieldCheck, Sparkles, Clock3 } from 'lucide-react'
import aboutImage from '../assets/images/about.png'
import heroImage from '../assets/images/hero.png'

const missionItems = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver compassionate, professional care that enhances the quality of life for seniors, right in the comfort of their own homes.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: "To become India's most trusted elder care companion — known for reliability, warmth, and genuine human connection.",
  },
  {
    icon: Users2,
    title: 'Why We Started',
    description: 'We saw the gap between what families need and what quality care actually looks like — and set out to close it.',
  },
]

const values = [
  { icon: HandHeart, label: 'Compassion' },
  { icon: ShieldCheck, label: 'Integrity' },
  { icon: Clock3, label: 'Reliability' },
  { icon: Sparkles, label: 'Respect' },
]

function About() {
  return (
    <div>

      {/* Page Header */}
      <section className="bg-[#F5F0FA]/50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            About Us
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D2A6D] leading-tight">
            We Care Like Family
          </h1>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            ElderCare was built on one simple belief: every senior deserves dignity, comfort, and
            genuine companionship — and every family deserves peace of mind.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-sm aspect-square overflow-hidden"
              style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
            >
              <img src={aboutImage} alt="Family moment" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D] leading-tight mb-6">
              More Than Care,
              <br />
              We Build <span className="text-[#F0854D]">Relationships</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              ElderCare began with a simple observation: families wanted the best for their aging
              parents and grandparents, but finding trustworthy, trained, compassionate care was
              harder than it should be.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Today, we connect thousands of families with verified caretakers across the country
              — combining professional training with the warmth of someone who truly cares.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Why We Started */}
      <section className="py-12 md:py-16 bg-[#F5F0FA]/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
              What Drives Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
              Mission, Vision & Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {missionItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#6B3FA0]" />
                  </div>
                  <h4 className="font-semibold text-[#3D2A6D] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.label} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#F0854D]/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#F0854D]" />
                  </div>
                  <p className="text-sm font-medium text-[#3D2A6D]">{value.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2A1B4D] to-[#6B3FA0] text-white text-center py-14 px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Ready to Find the Right Care?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              Let us connect you with a trusted caretaker who treats your family like their own.
            </p>
            <Link
              to="/services"
              className="inline-block px-7 py-3.5 rounded-full bg-white text-[#3D2A6D] font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About