import { Check, ArrowRight } from 'lucide-react'

function RegistrationSuccessModal({ firstName, onContinue }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded-[32px] shadow-2xl max-w-md w-full p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7137c8] to-[#ff641f] flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-white" strokeWidth={3} />
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
          Welcome, {firstName}!
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Your registration is complete. Next, let's find the right care plan for you.
        </p>
        <button
          onClick={onContinue}
          className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Choose a Care Plan <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default RegistrationSuccessModal