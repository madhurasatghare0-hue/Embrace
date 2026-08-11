import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import aboutImage from '../../assets/images/about.png'
import { createCitizen } from '../../data/citizens'
import { setSession } from '../../data/db'

const careServiceOptions = [
  'Companion Care', 'Personal Care', 'Nursing Care', 'Dementia Care',
  'Post-Surgery Care', 'Physiotherapy', 'Medication Assistance', '24x7 Live-in Care',
]

const stepLabels = ['Personal Details', 'Emergency & Medical', 'Preferred Services']

function CitizenRegister() {
  const location = useLocation()
  const navigate = useNavigate()
  const mobile = location.state?.mobile || ''

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    address: '',
    city: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    medicalConditions: '',
    preferredServices: [],
  })

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      preferredServices: prev.preferredServices.includes(service)
        ? prev.preferredServices.filter((s) => s !== service)
        : [...prev.preferredServices, service],
    }))
  }

  const handleNext = (e) => {
    e.preventDefault()
    setStep((prev) => prev + 1)
  }

  const handleBack = () => setStep((prev) => prev - 1)

  const handleSubmit = (e) => {
  e.preventDefault()
  const newCitizen = createCitizen({ mobile, ...formData })
  setSession('citizen', newCitizen.id)
  setSubmitted(true)
}

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F0FA]/40 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mx-auto mb-5">
            <Check className="w-8 h-8 text-[#6B3FA0]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
            Registration Complete!
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Welcome to ElderCare, {formData.fullName.split(' ')[0] || 'there'}. Next, let's find
            the right care plan for you.
          </p>
          <button
          onClick={() => navigate('/citizen/select-plan')}
          className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
        >
          Choose a Care Plan
        </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] bg-[#F5F0FA]/30 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* Left: illustration / context panel */}
        <div className="hidden lg:block lg:col-span-2 sticky top-24">
          <div
            className="relative w-full aspect-square overflow-hidden mb-6"
            style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
          >
            <img src={aboutImage} alt="Family" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
            Let's Get to Know You
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Just a few details help us match you with the right caretaker and care plan for your
            needs.
          </p>
        </div>

        {/* Right: form card */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">

            {/* Step progress */}
            <div className="flex items-center gap-3 mb-8">
              {stepLabels.map((label, index) => {
                const stepNumber = index + 1
                const isActive = stepNumber === step
                const isComplete = stepNumber < step
                return (
                  <div key={label} className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                          isComplete
                            ? 'bg-[#6B3FA0] text-white'
                            : isActive
                            ? 'bg-[#6B3FA0] text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {isComplete ? <Check className="w-4 h-4" /> : stepNumber}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:block ${
                          isActive || isComplete ? 'text-[#3D2A6D]' : 'text-gray-400'
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    <div
                      className={`h-1 rounded-full ${
                        isComplete || isActive ? 'bg-[#6B3FA0]' : 'bg-gray-100'
                      }`}
                    />
                  </div>
                )
              })}
            </div>

            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-5">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
                    Personal Details
                  </h2>
                  <p className="text-sm text-gray-400">Tell us a bit about yourself.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => updateField('age', e.target.value)}
                      
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-5">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
                    Emergency Contact & Medical Info
                  </h2>
                  <p className="text-sm text-gray-400">
                    This helps caretakers respond quickly if needed.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyName}
                    onChange={(e) => updateField('emergencyName', e.target.value)}
                    
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => updateField('emergencyPhone', e.target.value)}
                      
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                      Relation
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyRelation}
                      onChange={(e) => updateField('emergencyRelation', e.target.value)}
                      
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                    Known Medical Conditions (optional)
                  </label>
                  <textarea
                    value={formData.medicalConditions}
                    onChange={(e) => updateField('medicalConditions', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30 resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 rounded-full font-semibold text-[#6B3FA0] border-2 border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
                    Preferred Care Services
                  </h2>
                  <p className="text-sm text-gray-400">Select all that apply.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careServiceOptions.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                        formData.preferredServices.includes(service)
                          ? 'border-[#6B3FA0] bg-[#6B3FA0]/5 text-[#3D2A6D]'
                          : 'border-gray-200 text-gray-500'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.preferredServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="accent-[#6B3FA0]"
                      />
                      {service}
                    </label>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 rounded-full font-semibold text-[#6B3FA0] border-2 border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
                  >
                    Complete Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitizenRegister














// import { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import {
//   Check,
//   Heart,
//   ShieldCheck,
//   Clock3,
//   UsersRound,
//   ArrowRight,
//   LockKeyhole,
// } from 'lucide-react'

// import aboutImage from '../../assets/images/about.png'
// import { createCitizen } from '../../data/citizens'
// import { setSession } from '../../data/db'
// import { registrationSections } from '../../data/registrationConfig'
// import FieldRenderer from '../../components/forms/FieldRenderer'

// function CitizenRegister() {
//   const location = useLocation()
//   const navigate = useNavigate()

//   const mobile = location.state?.mobile || ''

//   const [stepIndex, setStepIndex] = useState(0)
//   const [submitted, setSubmitted] = useState(false)
//   const [citizen, setCitizen] = useState(null)
//   const [formData, setFormData] = useState({})

//   const currentSection = registrationSections[stepIndex]
//   const isLastStep =
//     stepIndex === registrationSections.length - 1

//   const updateField = (fieldId, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [fieldId]: value,
//     }))
//   }

//   const handleNext = (e) => {
//     e.preventDefault()

//     if (!isLastStep) {
//       setStepIndex((prev) => prev + 1)
//     }
//   }

//   const handleBack = () => {
//     if (stepIndex > 0) {
//       setStepIndex((prev) => prev - 1)
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const newCitizen = createCitizen({
//       mobile,
//       ...formData,
//     })

//     setSession('citizen', newCitizen.id)
//     setCitizen(newCitizen)
//     setSubmitted(true)
//   }

//   /* =========================================================
//      REGISTRATION COMPLETE
//   ========================================================= */

//   if (submitted) {
//     const firstName =
//       citizen?.fullName?.split(' ')[0] ||
//       citizen?.profile?.fullName?.split(' ')[0] ||
//       'there'

//     return (
//       <div className="min-h-screen bg-[#fffafc] flex items-center justify-center px-5 py-16">

//         {/* Background decoration */}
//         <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#eadbff] blur-3xl opacity-60" />

//         <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#ffe1d4] blur-3xl opacity-60" />

//         <div className="relative w-full max-w-xl">

//           <div className="bg-white rounded-[32px] shadow-[0_20px_70px_rgba(61,42,109,0.12)] p-8 md:p-12 text-center">

//             {/* Success icon */}
//             <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#7137c8] to-[#ff641f] flex items-center justify-center shadow-lg">
//               <Check
//                 className="w-10 h-10 text-white"
//                 strokeWidth={3}
//               />
//             </div>

//             {/* Badge */}
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-[#6B3FA0] text-sm font-semibold mb-5">
//               <Heart className="w-4 h-4 fill-current" />
//               Registration Complete
//             </span>

//             <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#30235c] mb-4">
//               Welcome, {firstName}!
//             </h1>

//             <p className="text-gray-500 leading-relaxed mb-8">
//               Your registration with ElderCare has been successfully
//               completed. Next, let's find the right care plan for you.
//             </p>

//             <button
//               onClick={() => navigate('/citizen/select-plan')}
//               className="
//                 w-full
//                 px-6 py-4
//                 rounded-full
//                 text-white
//                 font-bold
//                 bg-gradient-to-r
//                 from-[#7137c8]
//                 via-[#a23dc0]
//                 to-[#ff641f]
//                 hover:shadow-xl
//                 hover:scale-[1.01]
//                 transition-all
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//               "
//             >
//               Choose a Care Plan

//               <ArrowRight className="w-5 h-5" />
//             </button>

//           </div>
//         </div>
//       </div>
//     )
//   }

//   /* =========================================================
//      MAIN REGISTRATION PAGE
//   ========================================================= */

//   return (
//     <div className="min-h-screen bg-[#fffafc] relative">

//       {/* =====================================================
//           BACKGROUND DECORATIONS
//       ===================================================== */}

//       <div className="absolute top-16 left-[5%] w-4 h-4 bg-[#ff8b55] rounded-full opacity-80 pointer-events-none" />

//       <div className="absolute top-40 left-[35%] w-10 h-10 rounded-full bg-[#eadcf8] opacity-80 pointer-events-none" />

//       <div className="absolute top-[45%] right-[-55px] w-40 h-40 rounded-full bg-[#eadcff] opacity-70 pointer-events-none" />

//       <div className="absolute bottom-[-80px] right-[8%] w-60 h-60 rounded-full bg-[#eadcff] opacity-60 blur-sm pointer-events-none" />

//       <div className="absolute bottom-[20%] left-[8%] w-5 h-5 rounded-full bg-[#f6c8ec] pointer-events-none" />

//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <div className="relative max-w-[1320px] mx-auto px-5 sm:px-7 lg:px-8 py-7 lg:py-8">

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">

//           {/* =================================================
//               LEFT SIDE
//           ================================================= */}

//           <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">

//             <div className="max-w-[570px] mx-auto lg:mx-0">

//               {/* =============================================
//                   IMAGE AREA
//               ============================================= */}

//               <div className="relative flex justify-center mb-8">

//                 {/* Outer circle */}
//                 <div className="
//                   absolute
//                   top-5
//                   left-1/2
//                   -translate-x-1/2
//                   w-[82%]
//                   aspect-square
//                   rounded-full
//                   border-[5px]
//                   border-white
//                   pointer-events-none
//                 " />

//                 {/* Purple decorative circle */}
//                 <div className="
//                   absolute
//                   top-10
//                   right-[8%]
//                   w-10
//                   h-10
//                   rounded-full
//                   bg-[#eadcf8]
//                 " />

                

               

//                 {/* =========================================
//                     MAIN IMAGE
//                 ========================================= */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     w-[82%]
//                     aspect-square
//                     overflow-hidden
//                     shadow-[0_18px_45px_rgba(74,48,113,0.14)]
//                   "
//                   style={{
//                     borderRadius:
//                       '48% 52% 50% 50% / 45% 44% 56% 55%',
//                   }}
//                 >

//                   <img
//                     src={aboutImage}
//                     alt="ElderCare family"
//                     className="w-full h-full object-cover"
//                   />

//                   <div className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-[#3d276d]/10
//                     to-transparent
//                     pointer-events-none
//                   " />

//                 </div>

    

              

                  


               

//               </div>

//               {/* =============================================
//                   LEFT HEADING
//               ============================================= */}

//               <div className="text-center lg:text-left px-4 lg:px-6">

//                 <h1 className="
//                   font-serif
//                   text-3xl
//                   md:text-4xl
//                   xl:text-[44px]
//                   font-bold
//                   text-[#30235c]
//                   leading-tight
//                 ">
//                   Let’s Get to Know{' '}
//                   <span className="text-[#ef6730]">
//                     You
//                   </span>
//                 </h1>

//                 <p className="
//                   mt-4
//                   text-gray-500
//                   text-sm
//                   md:text-base
//                   leading-7
//                   max-w-[480px]
//                   mx-auto
//                   lg:mx-0
//                 ">
//                   Just a few details help us match you with
//                   the right caretaker and care plan for your
//                   needs.
//                 </p>

//               </div>

//               {/* =============================================
//                   BENEFITS
//               ============================================= */}

//               <div className="
//                 grid
//                 grid-cols-3
//                 gap-3
//                 mt-8
//                 px-1
//               ">

//                 {/* Trusted Care */}
//                 <div className="text-center">

//                   <div className="
//                     mx-auto
//                     w-14
//                     h-14
//                     rounded-full
//                     bg-white
//                     shadow-[0_8px_25px_rgba(88,53,137,0.09)]
//                     flex
//                     items-center
//                     justify-center
//                     mb-3
//                   ">
//                     <ShieldCheck
//                       className="w-7 h-7 text-[#7439c5]"
//                       strokeWidth={1.8}
//                     />
//                   </div>

//                   <h3 className="text-xs md:text-sm font-bold text-[#30235c]">
//                     Trusted Care
//                   </h3>

//                   <p className="mt-1 text-[11px] md:text-xs text-gray-400 leading-5">
//                     Verified & trained
//                     <br />
//                     caregivers
//                   </p>

//                 </div>

//                 {/* Personalized Care */}
//                 <div className="text-center">

//                   <div className="
//                     mx-auto
//                     w-14
//                     h-14
//                     rounded-full
//                     bg-white
//                     shadow-[0_8px_25px_rgba(88,53,137,0.09)]
//                     flex
//                     items-center
//                     justify-center
//                     mb-3
//                   ">
//                     <UsersRound
//                       className="w-7 h-7 text-[#ff6933]"
//                       strokeWidth={1.8}
//                     />
//                   </div>

//                   <h3 className="text-xs md:text-sm font-bold text-[#30235c]">
//                     Personalized
//                     <br />
//                     Care Plans
//                   </h3>

//                   <p className="mt-1 text-[11px] md:text-xs text-gray-400 leading-5">
//                     Tailored for your
//                     <br />
//                     unique needs
//                   </p>

//                 </div>

//                 {/* 24/7 Support */}
//                 <div className="text-center">

//                   <div className="
//                     mx-auto
//                     w-14
//                     h-14
//                     rounded-full
//                     bg-white
//                     shadow-[0_8px_25px_rgba(88,53,137,0.09)]
//                     flex
//                     items-center
//                     justify-center
//                     mb-3
//                   ">
//                     <Clock3
//                       className="w-7 h-7 text-[#7439c5]"
//                       strokeWidth={1.8}
//                     />
//                   </div>

//                   <h3 className="text-xs md:text-sm font-bold text-[#30235c]">
//                     24/7 Support
//                   </h3>

//                   <p className="mt-1 text-[11px] md:text-xs text-gray-400 leading-5">
//                     We’re here for
//                     <br />
//                     you, always
//                   </p>

//                 </div>

//               </div>

//             </div>
//           </div>

//           {/* =================================================
//               RIGHT SIDE
//           ================================================= */}

//           <div className="lg:col-span-7 flex justify-center lg:sticky lg:top-[88px] self-start">

//             <div className="
//               relative
//               w-full
//               max-w-[700px]
//               max-h-[calc(100vh-105px)]
//               bg-white
//               rounded-[28px]
//               shadow-[0_15px_45px_rgba(61,42,109,0.10)]
//               p-5
//               sm:p-6
//               md:p-7
//               xl:p-8
//               overflow-x-hidden
//               overflow-y-auto
//               scrollbar-thin
//             ">

//               {/* =============================================
//                   DECORATIVE HEART
//               ============================================= */}

//               <div className="
//                 absolute
//                 top-32
//                 right-8
//                 hidden
//                 xl:block
//                 pointer-events-none
//               ">

                

//                 <div className="
//                   absolute
//                   left-7
//                   top-10
//                   w-20
//                   h-8
//                   border-b-2
//                   border-dashed
//                   border-[#ff9d73]
//                   rounded-full
//                   rotate-[-10deg]
//                 " />

//               </div>

//               {/* Bottom decoration */}
//               <div className="
//                 absolute
//                 -bottom-20
//                 -right-20
//                 w-56
//                 h-56
//                 bg-[#f0e6fb]
//                 rounded-full
//                 opacity-60
//                 pointer-events-none
//               " />

//               <div className="relative z-10">

//                 {/* =========================================
//                     STEP PROGRESS
//                 ========================================= */}

//                 <div className="
//                   mb-7
//                   overflow-x-auto
//                   pb-2
//                   scrollbar-thin
//                 ">

//                   <div className="
//                     flex
//                     items-center
//                     w-max
//                     min-w-full
//                   ">

//                     {registrationSections.map(
//                       (section, index) => {

//                         const isActive =
//                           index === stepIndex

//                         const isComplete =
//                           index < stepIndex

//                         return (
//                           <div
//                             key={section.id}
//                             className="
//                               flex
//                               items-center
//                               flex-1
//                               min-w-max
//                               last:flex-none
//                             "
//                           >

//                             {/* Number circle */}
//                             <div
//                               className={`
//                                 relative
//                                 z-10
//                                 w-10
//                                 h-10
//                                 rounded-full
//                                 flex
//                                 items-center
//                                 justify-center
//                                 shrink-0
//                                 font-semibold
//                                 transition-all
//                                 duration-300

//                                 ${
//                                   isActive
//                                     ? `
//                                       bg-[#7138c5]
//                                       text-white
//                                       shadow-[0_8px_20px_rgba(113,56,197,0.25)]
//                                     `
//                                     : isComplete
//                                     ? `
//                                       bg-[#7138c5]
//                                       text-white
//                                     `
//                                     : `
//                                       bg-white
//                                       text-gray-400
//                                       border-2
//                                       border-gray-200
//                                     `
//                                 }
//                               `}
//                             >

//                               {isComplete ? (
//                                 <Check
//                                   className="w-5 h-5"
//                                   strokeWidth={3}
//                                 />
//                               ) : (
//                                 index + 1
//                               )}

//                             </div>

//                             {/* Label */}
//                             <div className="ml-3 mr-3">

//                               <span
//                                 className={`
//                                   text-xs
//                                   font-medium
//                                   whitespace-nowrap

//                                   ${
//                                     isActive ||
//                                     isComplete
//                                       ? 'text-[#6734bd]'
//                                       : 'text-gray-400'
//                                   }
//                                 `}
//                               >
//                                 {section.title}
//                               </span>

//                             </div>

//                             {/* Connector */}
//                             {index <
//                               registrationSections.length -
//                                 1 && (
//                               <div className="
//                                 flex-1
//                                 min-w-[45px]
//                                 mx-2
//                               ">

//                                 <div className="
//                                   h-1
//                                   rounded-full
//                                   bg-gray-100
//                                   overflow-hidden
//                                 ">

//                                   <div
//                                     className={`
//                                       h-full
//                                       rounded-full
//                                       transition-all
//                                       duration-500

//                                       ${
//                                         isComplete
//                                           ? `
//                                             w-full
//                                             bg-gradient-to-r
//                                             from-[#7438c7]
//                                             to-[#ef6530]
//                                           `
//                                           : 'w-0'
//                                       }
//                                     `}
//                                   />

//                                 </div>

//                               </div>
//                             )}

//                           </div>
//                         )
//                       }
//                     )}

//                   </div>

//                 </div>

//                 {/* =========================================
//                     CURRENT STEP TITLE
//                 ========================================= */}

//                 <div className="mb-6">

//                   <h2 className="
//                     font-serif
//                     text-2xl
//                     md:text-3xl
//                     font-bold
//                     text-[#30235c]
//                   ">
//                     {currentSection.title}
//                   </h2>

//                   <p className="
//                     mt-2
//                     text-sm
//                     md:text-base
//                     text-gray-400
//                   ">
//                     {currentSection.description}
//                   </p>

//                   <div className="
//                     mt-4
//                     w-12
//                     h-1
//                     rounded-full
//                     bg-gradient-to-r
//                     from-[#7138c5]
//                     to-[#ff641f]
//                   " />

//                 </div>

//                 {/* =========================================
//                     FORM
//                 ========================================= */}

//                 <form
//                   onSubmit={
//                     isLastStep
//                       ? handleSubmit
//                       : handleNext
//                   }
//                   className="space-y-4"
//                 >

//                   <div className="
//                     grid
//                     grid-cols-1
//                     md:grid-cols-2
//                     gap-x-5
//                     gap-y-4
//                   ">

//                     {currentSection.fields.map(
//                       (field) => {

//                         const isFullWidth =
//                           field.fullWidth ||
//                           field.type === 'textarea' ||
//                           field.type === 'address'

//                         return (
//                           <div
//                             key={field.id}
//                             className={
//                               isFullWidth
//                                 ? 'md:col-span-2'
//                                 : ''
//                             }
//                           >

//                             <FieldRenderer
//                               field={field}
//                               value={
//                                 formData[field.id]
//                               }
//                               onChange={
//                                 updateField
//                               }
//                             />

//                           </div>
//                         )
//                       }
//                     )}

//                   </div>

//                   {/* =========================================
//                       BUTTONS
//                   ========================================= */}

//                   <div className="
//                     flex
//                     gap-3
//                     pt-4
//                   ">

//                     {stepIndex > 0 && (
//                       <button
//                         type="button"
//                         onClick={handleBack}
//                         className="
//                           px-7
//                           py-4
//                           rounded-full
//                           font-semibold
//                           text-[#6736b9]
//                           border-2
//                           border-[#6736b9]/20
//                           bg-white
//                           hover:bg-[#f8f3ff]
//                           transition-all
//                         "
//                       >
//                         Back
//                       </button>
//                     )}

//                     <button
//                       type="submit"
//                       className="
//                         group
//                         flex-1
//                         px-5
//                         py-3.5
//                         rounded-full
//                         text-white
//                         font-bold
//                         bg-gradient-to-r
//                         from-[#7034c7]
//                         via-[#a83cbc]
//                         to-[#ff641f]
//                         shadow-[0_8px_20px_rgba(126,55,190,0.18)]
//                         hover:shadow-[0_12px_25px_rgba(126,55,190,0.25)]
//                         hover:scale-[1.005]
//                         transition-all
//                         flex
//                         items-center
//                         justify-center
//                         gap-3
//                       "
//                     >

//                       <span>
//                         {isLastStep
//                           ? 'Complete Registration'
//                           : 'Continue'}
//                       </span>

//                       <ArrowRight
//                         className="
//                           w-5
//                           h-5
//                           group-hover:translate-x-1
//                           transition-transform
//                         "
//                       />

//                     </button>

//                   </div>

//                 </form>

//                 {/* =========================================
//                     SECURITY MESSAGE
//                 ========================================= */}

//                 <div className="
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   mt-7
//                   text-gray-400
//                 ">

//                   <LockKeyhole className="w-4 h-4" />

//                   <span className="text-xs md:text-sm">
//                     Your information is safe and secure with us.
//                   </span>

//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default CitizenRegister