import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getSession } from '../../data/db'
import { getCitizenById, setCitizenPlan } from '../../data/citizens'
import plans from '../../data/plans'

function CitizenSelectPlan() {
  const navigate = useNavigate()
  const [citizen, setCitizen] = useState(null)
  const [selectingId, setSelectingId] = useState(null)

  useEffect(() => {
    const session = getSession()
    if (!session || session.role !== 'citizen') {
      navigate('/login')
      return
    }
    const record = getCitizenById(session.id)
    if (!record) {
      navigate('/login')
      return
    }
    setCitizen(record)
  }, [navigate])

  const handleSelectPlan = (plan) => {
    if (!citizen) return
    setSelectingId(plan.id)
    setCitizenPlan(citizen.id, {
      id: plan.id,
      name: plan.name,
      maxHouses: plan.maxHouses,
    })
    // brief pause so the selected state is visible before navigating away
    setTimeout(() => navigate('/citizen/dashboard'), 400)
  }

  if (!citizen) return null

  const firstName = citizen.fullName?.split(' ')[0] || 'there'

  return (
    <div className="min-h-[80vh] bg-[#F5F0FA]/30 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-[#F0854D] mb-2">Almost there, {firstName}</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D] mb-3">
            Choose Your Care Plan
          </h1>
          <p className="text-sm text-gray-500">
            Every plan includes a dedicated caretaker and full access to our service categories.
            The difference is how many households your caretaker looks after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isSelecting = selectingId === plan.id
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'shadow-lg ring-2 ring-[#6B3FA0] md:-translate-y-3'
                    : 'shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#8B4FC7] to-[#F0854D]">
                    Most Popular
                  </span>
                )}

                <div className="w-12 h-12 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#6B3FA0]" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.tagline}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#6B3FA0] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan)}
                  disabled={selectingId !== null}
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-opacity disabled:opacity-70 ${
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

export default CitizenSelectPlan