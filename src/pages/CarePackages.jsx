import { Link } from 'react-router-dom'
import { Check, Star, ShieldCheck, Award, Crown } from 'lucide-react'

const packages = [
  {
    name: 'Silver Plan',
    price: '₹2,499',
    icon: ShieldCheck,
    description: 'Shared caretaker support for everyday needs.',
    highlight: false,
    features: [
      '1 Caretaker assigned',
      'Shared across up to 5 households',
      'Access to all request categories',
      'Community group chat',
    ],
    buttonText: 'Choose Silver',
  },
  {
    name: 'Gold Plan',
    price: '₹3,499',
    icon: Award,
    description: 'More attention, faster response times.',
    highlight: true,
    features: [
      '1 Caretaker assigned',
      'Shared across up to 3 households',
      'Priority request handling',
      'Private + group chat access',
    ],
    buttonText: 'Choose Gold',
  },
  {
    name: 'Platinum Plan',
    price: '₹4,999',
    icon: Crown,
    description: 'A caretaker dedicated to your household alone.',
    highlight: false,
    features: [
      '1 dedicated Caretaker',
      'Just 1 household per caretaker',
      'Fastest response priority',
      'Private chat + emergency line',
    ],
    buttonText: 'Choose Platinum',
  },
]


function CarePackages() {
  return (
    <div>
      {/* Page Header */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            Care Packages
          </p>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D2A6D] leading-tight">
            Choose the Right Plan
          </h1>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Flexible care packages designed to fit every family's needs and budget — upgrade or
            adjust anytime.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-[#2A1B4D] to-[#6B3FA0] text-white shadow-xl scale-[1.02]'
                  : 'bg-white shadow-sm'
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 rounded-full bg-[#F0854D] text-white text-xs font-semibold">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Most Popular
                </span>
              )}

              <h3
                className={`font-semibold text-lg mb-1 ${
                  pkg.highlight ? 'text-white' : 'text-[#3D2A6D]'
                }`}
              >
                {pkg.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className={`text-3xl font-bold ${
                    pkg.highlight ? 'text-white' : 'text-[#3D2A6D]'
                  }`}
                >
                  {pkg.price}
                </span>

                <span
                  className={`text-sm ${
                    pkg.highlight ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {pkg.duration}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  pkg.highlight ? 'text-white/70' : 'text-gray-400'
                }`}
              >
                {pkg.hours} of care
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        pkg.highlight
                          ? 'text-[#F0854D]'
                          : 'text-[#6B3FA0]'
                      }`}
                    />

                    <span
                      className={
                        pkg.highlight ? 'text-white/90' : 'text-gray-500'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CarePackages