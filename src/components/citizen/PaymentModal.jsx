import { useState } from 'react'
import { CreditCard, Lock, Check } from 'lucide-react'

function PaymentModal({ plan, onPay }) {
  const [processing, setProcessing] = useState(false)

  const handlePay = (e) => {
    e.preventDefault()
    setProcessing(true)
    setTimeout(() => {
      onPay()
    }, 1200)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded-[32px] shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-6 h-6 text-[#6B3FA0]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">Complete Payment</h2>
          <p className="text-sm text-gray-400">
            {plan.name} — ₹{plan.price.toLocaleString()}/month
          </p>
        </div>

        <form onSubmit={handlePay} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Card Number</label>
            <input
              type="text"
              defaultValue="4242 4242 4242 4242"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Expiry</label>
              <input
                type="text"
                defaultValue="12/28"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">CVV</label>
              <input
                type="text"
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
            {processing ? 'Processing...' : (
              <>
                <Check className="w-4 h-4" /> Pay ₹{plan.price.toLocaleString()}
              </>
            )}
          </button>
        </form>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-5">
          <Lock className="w-3.5 h-3.5" /> Simulated payment — no real transaction occurs.
        </p>
      </div>
    </div>
  )
}

export default PaymentModal