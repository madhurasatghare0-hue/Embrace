import { Users, ShieldCheck, Wallet, HeartHandshake, RefreshCcw, Siren, PhoneCall } from 'lucide-react'
import coupleImage from '../../assets/images/hero.png'

const benefits = [
  { icon: Users, label: 'Verified & Trained Staff' },
  { icon: ShieldCheck, label: 'Safe & Secure' },
  { icon: Wallet, label: 'Affordable Plans' },
  { icon: HeartHandshake, label: 'Personalized Care' },
  { icon: RefreshCcw, label: 'Regular Updates' },
  { icon: Siren, label: 'Emergency Support' },
]

function BenefitsAndEmergency() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left: Benefits */}
        <div className="bg-[#F5F0FA]/50 rounded-3xl p-8 md:p-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#3D2A6D] leading-snug mb-6">
            Benefits That
            <br />
            Bring Peace of Mind
          </h3>

          <div className="rounded-2xl overflow-hidden mb-8 max-h-56">
            <img
              src={coupleImage}
              alt="Elderly couple at home"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-y-6 gap-x-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.label} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-2">
                    <Icon className="w-4 h-4 text-[#6B3FA0]" />
                  </div>
                  <p className="text-xs text-gray-500 leading-tight">{benefit.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Emergency Support */}
        <div className="relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#2A1B4D] to-[#6B3FA0] text-white flex flex-col justify-between overflow-hidden">

          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative">
            <h3 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6">
              Emergency Support
              <br />
              Whenever You Need
            </h3>

            <ul className="space-y-3">
              {['24/7 Emergency Assistance', 'Trained Care Professionals', 'Quick Response Team'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#F0854D] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="relative mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#3D2A6D] font-semibold w-fit hover:bg-gray-100 transition-colors">
            <PhoneCall className="w-4 h-4" />
            Call Emergency
          </button>

          <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-red-500/90 flex items-center justify-center shadow-lg">
            <Siren className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsAndEmergency