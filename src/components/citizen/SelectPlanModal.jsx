import { Check } from 'lucide-react'
import plans from '../../data/plans'

function SelectPlanModal({ onSelect, selectingId }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 py-8 z-50 overflow-y-auto">
      <div className="bg-white rounded-[32px] shadow-2xl max-w-4xl w-full p-6 md:p-10 my-auto">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-sm font-medium text-[#F0854D] mb-2">Almost there</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3D2A6D] mb-2">
            Choose Your Care Plan
          </h2>
          <p className="text-sm text-gray-500">
            Every plan includes a dedicated caretaker and full access to our service categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isSelecting = selectingId === plan.id
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl p-6 flex flex-col border ${
                  plan.highlighted ? 'shadow-lg ring-2 ring-[#6B3FA0] border-transparent' : 'border-gray-100'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#8B4FC7] to-[#F0854D]">
                    Most Popular
                  </span>
                )}

                <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#6B3FA0]" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{plan.tagline}</p>
                <p className="text-xl font-bold text-[#3D2A6D] mb-4">
                  {plan.price === 0 ? 'Free' : `₹${plan.price.toLocaleString()}/mo`}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 text-[#6B3FA0] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelect(plan)}
                  disabled={selectingId !== null}
                  className={`w-full px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity disabled:opacity-70 ${
                    plan.highlighted
                      ? 'text-white bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90'
                      : 'text-[#6B3FA0] border-2 border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5'
                  }`}
                >
                  {isSelecting ? 'Selected ✓' : `Choose ${plan.name.replace(' Plan', '')}`}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectPlanModal