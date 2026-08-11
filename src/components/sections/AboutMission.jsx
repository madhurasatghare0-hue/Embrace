import { Heart, Target, Eye, Users2 } from 'lucide-react'
import aboutImage from '../../assets/images/about.png'

const missionItems = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver compassionate care that enhances quality of life at home.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: "To become India's most trusted elder care companion.",
  },
  {
    icon: Users2,
    title: 'Why We Started',
    description: "To bridge the gap between families' needs and quality care at home.",
  },
]

function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F6] py-12 md:py-16">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Orange Glow */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-orange-200/30 blur-[120px]" />

        {/* Purple Glow */}
        <div className="absolute top-20 right-[-120px] w-[520px] h-[520px] rounded-full bg-purple-200/30 blur-[150px]" />

        {/* Bottom Gradient */}
        <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full bg-gradient-to-r from-orange-100/40 via-white to-purple-100/40 blur-[130px]" />

        {/* White Glow */}
        <div className="absolute left-1/3 top-1/3 w-[450px] h-[450px] rounded-full bg-white/60 blur-[120px]" />

        {/* Decorative Blobs */}
        <div className="absolute top-12 left-1/2 w-32 h-32 rounded-full bg-[#F8D6C3]/30 blur-3xl" />

        <div className="absolute bottom-16 right-20 w-44 h-44 rounded-full bg-[#D9C7FF]/20 blur-3xl" />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">

        {/* Left Image */}
        <div className="relative flex justify-center lg:justify-start">

          <div
            className="relative w-full max-w-sm aspect-square overflow-hidden shadow-[0_30px_80px_rgba(107,63,160,0.15)]"
            style={{
              borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%',
            }}
          >
            <img
              src={aboutImage}
              alt="Grandfather and granddaughter"
              className="w-full h-full object-cover"
            />
          </div>

          

        </div>

        {/* Right Content */}
        <div>

          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#6B3FA0]">
            About Us
          </p>

          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold leading-tight text-[#38245D]">
            More Than Care,
            <br />
            We Build{' '}
            <span className="text-[#F0854D]">
              Relationships
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-xl">
            At ElderCare, we believe every senior deserves to live with
            <span className="font-semibold text-[#38245D]">
              {' '}dignity, comfort, and love
            </span>.
            Our mission is to provide professional care and heartfelt support
            to seniors and their families.
          </p>

{/* Mission Cards */}
<div className="mt-8 grid grid-cols-3 gap-4">

  {missionItems.map((item) => {
    const Icon = item.icon

    return (
      <div
        key={item.title}
        className="
          bg-white/80
          backdrop-blur-xl
          rounded-2xl
          p-4
          shadow-[0_10px_25px_rgba(107,63,160,0.08)]
          border border-white/50
          hover:-translate-y-1
          hover:shadow-[0_15px_35px_rgba(107,63,160,0.12)]
          transition-all
          duration-300
        "
      >
        {/* Icon */}
        <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-3">
          <Icon className="w-4 h-4 text-[#6B3FA0]" strokeWidth={2} />
        </div>

        {/* Title */}
        <h4 className="text-sm font-semibold text-[#38245D] mb-1.5 leading-snug">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    )
  })}

</div>

          <button className="mt-10 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
            Read More →
          </button>

        </div>

      </div>

    </section>
  )
}

export default AboutMission