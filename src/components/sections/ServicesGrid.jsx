import { Link } from 'react-router-dom'
import { HeartHandshake, Stethoscope, Brain, Bandage, Pill, Home as HomeIcon, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: HeartHandshake,
    title: 'Companion Care',
    description: 'Emotional support and companionship.',
    href: '/services#companion-care',
  },
  {
    icon: Stethoscope,
    title: 'Nursing Care',
    description: 'Professional nursing and health monitoring.',
    href: '/services#nursing-care',
  },
  {
    icon: Brain,
    title: 'Dementia Care',
    description: 'Specialized care for memory related conditions.',
    href: '/services#dementia-care',
  },
  {
    icon: Bandage,
    title: 'Post-Surgery Care',
    description: 'Recovery support and rehabilitation.',
    href: '/services#post-surgery-care',
  },
  {
    icon: Pill,
    title: 'Medication Assistance',
    description: 'Timely reminders and medication management.',
    href: '/services#medication-assistance',
  },
  {
    icon: HomeIcon,
    title: '24x7 Live-in Care',
    description: 'Round-the-clock care in the comfort of home.',
    href: '/services#live-in-care',
  },
]

function ServicesGrid() {
  return (
    <section className="py-12 md:py-16 bg-[#F5F0FA]/40">
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
            Care for Every Need
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#6B3FA0]" />
                </div>
                <h3 className="font-semibold text-[#3D2A6D] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#6B3FA0]/30 text-[#6B3FA0] hover:bg-[#6B3FA0] hover:text-white transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid










