import { Link } from 'react-router-dom'
import {
  HeartHandshake, Stethoscope, Brain, Bandage, Activity,
  HandHeart, Home as HomeIcon, Pill, Utensils, ShieldCheck,
} from 'lucide-react'

const services = [
  {
    id: 'companion-care',
    icon: HeartHandshake,
    title: 'Companion Care',
    description: 'Emotional support and companionship for seniors who enjoy conversation, shared activities, and someone to spend time with.',
  },
  {
    id: 'personal-care',
    icon: HandHeart,
    title: 'Personal Care',
    description: 'Assistance with daily activities like bathing, dressing, grooming, and mobility — delivered with dignity and respect.',
  },
  {
    id: 'nursing-care',
    icon: Stethoscope,
    title: 'Nursing Care',
    description: 'Professional nursing support including health monitoring, wound care, and coordination with doctors.',
  },
  
  {
    id: 'post-surgery-care',
    icon: Bandage,
    title: 'Post-Surgery Care',
    description: 'Dedicated recovery support and rehabilitation assistance to help your loved one heal safely at home.',
  },
  {
    id: 'physiotherapy',
    icon: Activity,
    title: 'Physiotherapy',
    description: 'In-home physiotherapy sessions to help maintain mobility, strength, and independence.',
  },
  
  {
    id: 'bedridden-care',
    icon: HandHeart,
    title: 'Bedridden Care',
    description: 'Attentive, round-the-clock support for seniors who require full-time bedside assistance.',
  },
  {
    id: 'live-in-care',
    icon: HomeIcon,
    title: '24x7 Live-in Care',
    description: 'A dedicated caretaker residing in the home to provide round-the-clock support and companionship.',
  },
  {
    id: 'meal-preparation',
    icon: Utensils,
    title: 'Meal Preparation',
    description: 'Nutritious, personalized meals prepared fresh, accounting for dietary needs and preferences.',
  },
  {
    id: 'medication-assistance',
    icon: Pill,
    title: 'Medication Assistance',
    description: 'Timely reminders and careful management to ensure medications are never missed.',
  },
]

function Services() {
  return (
    <div>

      {/* Page Header */}
      <section className=" py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            Our Services
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D2A6D] leading-tight">
            Care for Every Need
          </h1>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            From companionship to specialized nursing, explore our full range of elder care
            services — each delivered with training, trust, and heart.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow scroll-mt-24"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#6B3FA0]" />
                </div>
                <h3 className="font-semibold text-[#3D2A6D] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>
                
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2A1B4D] to-[#6B3FA0] text-white text-center py-14 px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              Talk to our care team and we'll help you find the right plan for your family.
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3.5 rounded-full bg-white text-[#3D2A6D] font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services










