// import { useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { Check, Clock, Upload } from 'lucide-react'
// import aboutImage from '../../assets/images/about.png'

// const skillOptions = [
//   'Companion Care', 'Personal Care', 'Nursing Care', 'Dementia Care',
//   'Post-Surgery Care', 'Physiotherapy', 'Medication Assistance', '24x7 Live-in Care',
// ]

// const stepLabels = ['Personal Details', 'Experience & Skills', 'Availability & Documents']

// function Register() {
//   const location = useLocation()
//   const mobile = location.state?.mobile || ''

//   const [step, setStep] = useState(1)
//   const [submitted, setSubmitted] = useState(false)
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     age: '',
//     address: '',
//     city: '',
//     experience: '',
//     qualification: '',
//     skills: [],
//     availability: '',
//     documentName: '',
//   })

//   const updateField = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const toggleSkill = (skill) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills: prev.skills.includes(skill)
//         ? prev.skills.filter((s) => s !== skill)
//         : [...prev.skills, skill],
//     }))
//   }

//   const handleNext = (e) => {
//     e.preventDefault()
//     setStep((prev) => prev + 1)
//   }

//   const handleBack = () => setStep((prev) => prev - 1)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Caretaker registration submitted:', { mobile, ...formData, status: 'pending_approval' })
//     setSubmitted(true)
//   }

//   if (submitted) {
//     return (
//       <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F0FA]/40 py-16 px-4">
//         <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 text-center">
//           <div className="w-16 h-16 rounded-full bg-[#F0854D]/10 flex items-center justify-center mx-auto mb-5">
//             <Clock className="w-8 h-8 text-[#F0854D]" />
//           </div>
//           <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
//             Waiting for Approval
//           </h2>
//           <p className="text-sm text-gray-500 mb-2">
//             Thanks, {formData.fullName.split(' ')[0] || 'there'}! Your application has been
//             submitted successfully.
//           </p>
//           <p className="text-sm text-gray-500 mb-8">
//             Our admin team will review your details and documents. You'll be able to sign in with
//             a User ID and Password once your account is approved.
//           </p>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0854D]/10 text-[#F0854D] text-sm font-medium">
//             <Clock className="w-4 h-4" />
//             Status: Pending Approval
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-[80vh] bg-[#F5F0FA]/30 py-12 md:py-16">
//       <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

//         {/* Left: illustration / context panel */}
//         <div className="hidden lg:block lg:col-span-2 sticky top-24">
//           <div
//             className="relative w-full aspect-square overflow-hidden mb-6"
//             style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
//           >
//             <img src={aboutImage} alt="Caretaker" className="w-full h-full object-cover" />
//           </div>
//           <h3 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
//             Join Our Caretaker Team
//           </h3>
//           <p className="text-sm text-gray-500 leading-relaxed">
//             Tell us about your experience and skills — our team will review your application and
//             get you started.
//           </p>
//         </div>

//         {/* Right: form card */}
//         <div className="lg:col-span-3">
//           <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">

//             {/* Step progress */}
//             <div className="flex items-center gap-3 mb-8">
//               {stepLabels.map((label, index) => {
//                 const stepNumber = index + 1
//                 const isActive = stepNumber === step
//                 const isComplete = stepNumber < step
//                 return (
//                   <div key={label} className="flex-1">
//                     <div className="flex items-center gap-2 mb-2">
//                       <div
//                         className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
//                           isComplete || isActive
//                             ? 'bg-[#6B3FA0] text-white'
//                             : 'bg-gray-100 text-gray-400'
//                         }`}
//                       >
//                         {isComplete ? <Check className="w-4 h-4" /> : stepNumber}
//                       </div>
//                       <span
//                         className={`text-xs font-medium hidden sm:block ${
//                           isActive || isComplete ? 'text-[#3D2A6D]' : 'text-gray-400'
//                         }`}
//                       >
//                         {label}
//                       </span>
//                     </div>
//                     <div
//                       className={`h-1 rounded-full ${
//                         isComplete || isActive ? 'bg-[#6B3FA0]' : 'bg-gray-100'
//                       }`}
//                     />
//                   </div>
//                 )
//               })}
//             </div>

//             {step === 1 && (
//               <form onSubmit={handleNext} className="space-y-5">
//                 <div>
//                   <h2 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
//                     Personal Details
//                   </h2>
//                   <p className="text-sm text-gray-400">Tell us a bit about yourself.</p>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) => updateField('fullName', e.target.value)}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => updateField('email', e.target.value)}
                     
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                       Age
//                     </label>
//                     <input
//                       type="number"
//                       value={formData.age}
//                       onChange={(e) => updateField('age', e.target.value)}
                      
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.address}
//                     onChange={(e) => updateField('address', e.target.value)}
                    
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">City</label>
//                   <input
//                     type="text"
//                     value={formData.city}
//                     onChange={(e) => updateField('city', e.target.value)}
                    
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//                 >
//                   Continue
//                 </button>
//               </form>
//             )}

//             {step === 2 && (
//               <form onSubmit={handleNext} className="space-y-5">
//                 <div>
//                   <h2 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
//                     Experience & Skills
//                   </h2>
//                   <p className="text-sm text-gray-400">
//                     Help us understand your professional background.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                       Years of Experience
//                     </label>
//                     <input
//                       type="number"
//                       value={formData.experience}
//                       onChange={(e) => updateField('experience', e.target.value)}
                     
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                       Qualification
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.qualification}
//                       onChange={(e) => updateField('qualification', e.target.value)}
//                       placeholder="e.g. GNM, B.Sc Nursing"
                     
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#3D2A6D] mb-2">
//                     Skills / Care Specialties
//                   </label>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {skillOptions.map((skill) => (
//                       <label
//                         key={skill}
//                         className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm cursor-pointer transition-colors ${
//                           formData.skills.includes(skill)
//                             ? 'border-[#6B3FA0] bg-[#6B3FA0]/5 text-[#3D2A6D]'
//                             : 'border-gray-200 text-gray-500'
//                         }`}
//                       >
//                         <input
//                           type="checkbox"
//                           checked={formData.skills.includes(skill)}
//                           onChange={() => toggleSkill(skill)}
//                           className="accent-[#6B3FA0]"
//                         />
//                         {skill}
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     className="px-6 py-3 rounded-full font-semibold text-[#6B3FA0] border-2 border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="submit"
//                     className="flex-1 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </form>
//             )}

//             {step === 3 && (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <h2 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
//                     Availability & Documents
//                   </h2>
//                   <p className="text-sm text-gray-400">Final step before we review your profile.</p>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                     Availability
//                   </label>
//                   <select
//                     value={formData.availability}
//                     onChange={(e) => updateField('availability', e.target.value)}
                    
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30 bg-white"
//                   >
//                     <option value="">Select availability</option>
//                     <option value="full-time">Full-time (24x7 Live-in)</option>
//                     <option value="part-time-day">Part-time — Day shifts</option>
//                     <option value="part-time-night">Part-time — Night shifts</option>
//                     <option value="weekends">Weekends only</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                     Upload Documents (ID Proof / Certificates)
//                   </label>
//                   <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-lg py-8 cursor-pointer hover:border-[#6B3FA0]/40 transition-colors">
//                     <Upload className="w-6 h-6 text-gray-400" />
//                     <span className="text-sm text-gray-400">
//                       {formData.documentName || 'Click to upload a file'}
//                     </span>
//                     <input
//                       type="file"
//                       className="hidden"
//                       onChange={(e) => updateField('documentName', e.target.files[0]?.name || '')}
//                     />
//                   </label>
//                   <p className="text-xs text-gray-400 mt-1.5">
//                     Demo mode — file isn't actually uploaded anywhere yet.
//                   </p>
//                 </div>

//                 <div className="flex gap-3 pt-2">
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     className="px-6 py-3 rounded-full font-semibold text-[#6B3FA0] border-2 border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="submit"
//                     className="flex-1 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//                   >
//                     Submit Application
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register













import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Check, Clock } from 'lucide-react'
import aboutImage from '../../assets/images/about.png'
import { createCaretaker } from '../../data/caretakers'
import { caretakerRegistrationSections } from '../../data/caretakerRegistrationConfig'
import FieldRenderer from '../../components/forms/FieldRenderer'

function Register() {
  const location = useLocation()
  const navigate = useNavigate()
  const mobile = location.state?.mobile || ''

  const [stepIndex, setStepIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [caretaker, setCaretaker] = useState(null)
  const [formData, setFormData] = useState({})

  const currentSection = caretakerRegistrationSections[stepIndex]
  const isLastStep = stepIndex === caretakerRegistrationSections.length - 1

  const updateField = (fieldId, value) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }))
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (!isLastStep) setStepIndex((prev) => prev + 1)
  }

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex((prev) => prev - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCaretaker = createCaretaker({ mobile, ...formData })
    setCaretaker(newCaretaker)
    setSubmitted(true)
  }

  if (submitted) {
    const firstName = caretaker?.fullName?.split(' ')[0] || caretaker?.profile?.fullName?.split(' ')[0] || 'there'

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F0FA]/40 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[#F0854D]/10 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8 text-[#F0854D]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
            Waiting for Approval
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Thanks, {firstName}! Your application has been submitted successfully.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Our admin team will review your details and documents. You'll be able to sign in with
            a User ID and Password once your account is approved.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0854D]/10 text-[#F0854D] text-sm font-medium">
            <Clock className="w-4 h-4" />
            Status: Pending Approval
          </div>
        </div>
      </div>
    )
  }

 return (
  <div className="min-h-screen bg-[#fffafc]">
    <div className="relative max-w-[1320px] mx-auto px-5 sm:px-7 lg:px-8 pt-12 pb-7 lg:pt-14 lg:pb-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">

        {/* LEFT SIDE */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
          <div className="max-w-[520px] mx-auto lg:mx-0">

            {/* IMAGE */}
            <div className="relative flex justify-center mb-6">
              <div
                className="relative w-[78%] aspect-square overflow-hidden shadow-[0_18px_45px_rgba(74,48,113,0.14)]"
                style={{
                  borderRadius: '48% 52% 50% 50% / 45% 44% 56% 55%',
                }}
              >
                <img
                  src={aboutImage}
                  alt="Caretaker"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3d276d]/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center lg:text-left px-4 lg:px-5">
              <h1 className="font-serif text-3xl md:text-[38px] xl:text-[42px] font-bold text-[#30235c] leading-[1.1]">
                Join Our <span className="text-[#ef6730]">Care Team</span>
              </h1>

              <p className="mt-3 text-gray-500 text-sm md:text-[15px] leading-6 max-w-[460px] mx-auto lg:mx-0">
                Share your experience, skills and availability to become a
                trusted part of our caregiving team.
              </p>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[700px] bg-white rounded-[28px] shadow-[0_15px_45px_rgba(61,42,109,0.10)] h-[calc(100vh-110px)] max-h-[850px] flex flex-col overflow-hidden">

            {/* ================= FIXED TOP ================= */}
            <div className="shrink-0 px-5 sm:px-7 pt-7 sm:pt-8 bg-white z-20">

              {/* COMPACT HORIZONTAL STEPPER */}
              <div className="mb-4 w-full">
                <div className="flex items-start w-full">
                  {caretakerRegistrationSections.map((section, index) => {
                    const isActive = index === stepIndex
                    const isComplete = index < stepIndex
                    const isLast =
                      index === caretakerRegistrationSections.length - 1

                    return (
                      <div
                        key={section.id}
                        className="flex items-start flex-1 min-w-0"
                      >
                        {/* STEP */}
                        <div className="flex flex-col items-center flex-1 min-w-0">
                         <div
  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
    isComplete
      ? 'bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white shadow-md'
      : isActive
      ? 'bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white shadow-md scale-105'
      : 'bg-white text-gray-400 border-2 border-gray-200'
  }`}
>
  {isComplete ? (
    <Check className="w-4 h-4" />
  ) : (
    index + 1
  )}
</div>

                          {/* SINGLE LINE COMPACT TITLE */}
                          <span
                            title={section.title}
                            className={`mt-1.5 w-full px-1 text-[9px] sm:text-[10px] font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis ${
                              isActive
                                ? 'text-[#7138c5]'
                                : isComplete
                                ? 'text-[#3D2A6D]'
                                : 'text-gray-400'
                            }`}
                          >
                            {section.title}
                          </span>
                        </div>

                        {/* CONNECTOR */}
                        {!isLast && (
                          <div className="w-5 sm:w-8 shrink-0 mt-[17px] border-t-2 border-dashed border-gray-200" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>


              {/* COMPACT CURRENT STEP HEADING */}
              <div className="pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-[#30235c] leading-tight">
                      {currentSection.title}
                    </h2>

                    <p className="mt-1 text-xs md:text-sm text-gray-400 leading-relaxed">
                      {currentSection.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-[10px] sm:text-xs font-semibold text-[#7138c5] bg-[#f5effb] px-3 py-1.5 rounded-full">
                    {stepIndex + 1}/{caretakerRegistrationSections.length}
                  </span>
                </div>

                <div className="mt-2.5 w-8 h-[3px] rounded-full bg-gradient-to-r from-[#7138c5] to-[#ff641f]" />
              </div>
            </div>


            {/* ================= SCROLLABLE FORM ONLY ================= */}
            <div className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-7 py-5">
              <form
                id="caretaker-registration-form"
                onSubmit={isLastStep ? handleSubmit : handleNext}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {currentSection.fields.map((field) => {
                    const isFullWidth =
                      field.fullWidth ||
                      field.type === 'textarea' ||
                      field.type === 'file'

                    return (
                      <div
                        key={field.id}
                        className={isFullWidth ? 'md:col-span-2' : ''}
                      >
                        <FieldRenderer
                          field={field}
                          value={formData[field.id]}
                          onChange={updateField}
                        />
                      </div>
                    )
                  })}
                </div>
              </form>
            </div>


            {/* ================= FIXED BOTTOM ================= */}
            <div className="shrink-0 bg-white border-t border-gray-100 px-5 sm:px-7 py-4 z-20">
  <div className="flex gap-3">
    
    {/* BACK */}
    {stepIndex > 0 && (
      <button
        type="button"
        onClick={handleBack}
        className="h-[56px] min-w-[120px] px-6 rounded-full font-semibold text-[#6736b9] border-2 border-[#6736b9]/20 bg-white hover:bg-[#f8f3ff] transition-all flex items-center justify-center"
      >
        ← Back
      </button>
    )}

    {/* NEXT / SUBMIT */}
    <button
      type="submit"
      form="caretaker-registration-form"
      className="h-[56px] flex-1 flex items-center justify-center gap-2 px-6 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
    >
      <span>
        {isLastStep ? 'Submit Application' : 'Continue'}
      </span>

      <span className="text-lg transition-transform">
        →
      </span>
    </button>
  </div>

  <div className="flex items-center justify-center gap-2 mt-3 text-gray-400">
    <span className="text-[11px] sm:text-xs">
      Your application information is safe and secure.
    </span>
  </div>
</div>

          </div>
        </div>

      </div>
    </div>
  </div>
)
}

export default Register