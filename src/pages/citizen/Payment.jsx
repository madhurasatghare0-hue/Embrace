import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreditCard, Lock, Check } from 'lucide-react'
import { getSession } from '../../data/db'
import { setCitizenPlan, assignCaretakerToCitizen } from '../../data/citizens'
import { findAvailableCaretaker } from '../../data/caretakers'

function Payment() {
  const location = useLocation()
  const navigate = useNavigate()
  const plan = location.state?.plan

  const [processing, setProcessing] = useState(false)

  if (!plan) {
    navigate('/citizen/select-plan')
    return null
  }

  const handlePay = (e) => {
    e.preventDefault()
    setProcessing(true)

    setTimeout(() => {
      const session = getSession()
      setCitizenPlan(session.id, {
        id: plan.id,
        name: plan.name,
        maxHouses: plan.maxHouses,
        price: plan.price,
      })

      const caretaker = findAvailableCaretaker(plan.maxHouses)
      if (caretaker) {
        assignCaretakerToCitizen(session.id, caretaker.id)
      }

      navigate('/citizen/dashboard')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#F5F0FA]/30 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-6 h-6 text-[#6B3FA0]" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">Complete Payment</h1>
          <p className="text-sm text-gray-400">
            {plan.name} — ₹{plan.price.toLocaleString()}/month
          </p>
        </div>

        <form onSubmit={handlePay} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Card Number</label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              defaultValue="4242 4242 4242 4242"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Expiry</label>
              <input
                type="text"
                placeholder="12/28"
                defaultValue="12/28"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">CVV</label>
              <input
                type="text"
                placeholder="123"
                defaultValue="123"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {processing ? (
              'Processing...'
            ) : (
              <>
                <Check className="w-4 h-4" /> Pay ₹{plan.price.toLocaleString()}
              </>
            )}
          </button>
        </form>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-5">
          <Lock className="w-3.5 h-3.5" /> This is a simulated payment — no real transaction occurs.
        </p>
      </div>
    </div>
  )
}

export default Payment