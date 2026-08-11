import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Check, Clock, Upload } from 'lucide-react'
import aboutImage from '../../assets/images/about.png'

const skillOptions = [
  'Companion Care', 'Personal Care', 'Nursing Care', 'Dementia Care',
  'Post-Surgery Care', 'Physiotherapy', 'Medication Assistance', '24x7 Live-in Care',
]

const stepLabels = ['Personal Details', 'Experience & Skills', 'Availability & Documents']

function Register() {
  const location = useLocation()
  const mobile = location.state?.mobile || ''

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    address: '',
    city: '',
    experience: '',
    qualification: '',
    skills: [],
    availability: '',
    documentName: '',
  })

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }))
  }

  const handleNext = (e) => {
    e.preventDefault()
    setStep((prev) => prev + 1)
  }

  const handleBack = () => setStep((prev) => prev - 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Caretaker registration submitted:', { mobile, ...formData, status: 'pending_approval' })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F0FA]/40 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[#F0854D]/10 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8 text-[#F0854D]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
            Waiting for Approval
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Thanks, {formData.fullName.split(' ')[0] || 'there'}! Your application has been
            submitted successfully.
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
    <div className="min-h-[80vh] bg-[#F5F0FA]/30 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* Left: illustration / context panel */}
        <div className="hidden lg:block lg:col-span-2 sticky top-24">
          <div
            className="relative w-full aspect-square overflow-hidden mb-6"
            style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
          >
            <img src={aboutImage} alt="Caretaker" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-2">
            Join Our Caretaker Team
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Tell us about your experience and skills — our team will review your application and
            get you started.
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
                          isComplete || isActive
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
                    Experience & Skills
                  </h2>
                  <p className="text-sm text-gray-400">
                    Help us understand your professional background.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      value={formData.experience}
                      onChange={(e) => updateField('experience', e.target.value)}
                     
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                      Qualification
                    </label>
                    <input
                      type="text"
                      value={formData.qualification}
                      onChange={(e) => updateField('qualification', e.target.value)}
                      placeholder="e.g. GNM, B.Sc Nursing"
                     
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-2">
                    Skills / Care Specialties
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skillOptions.map((skill) => (
                      <label
                        key={skill}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                          formData.skills.includes(skill)
                            ? 'border-[#6B3FA0] bg-[#6B3FA0]/5 text-[#3D2A6D]'
                            : 'border-gray-200 text-gray-500'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => toggleSkill(skill)}
                          className="accent-[#6B3FA0]"
                        />
                        {skill}
                      </label>
                    ))}
                  </div>
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
                    Availability & Documents
                  </h2>
                  <p className="text-sm text-gray-400">Final step before we review your profile.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                    Availability
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => updateField('availability', e.target.value)}
                    
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30 bg-white"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full-time (24x7 Live-in)</option>
                    <option value="part-time-day">Part-time — Day shifts</option>
                    <option value="part-time-night">Part-time — Night shifts</option>
                    <option value="weekends">Weekends only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                    Upload Documents (ID Proof / Certificates)
                  </label>
                  <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-lg py-8 cursor-pointer hover:border-[#6B3FA0]/40 transition-colors">
                    <Upload className="w-6 h-6 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      {formData.documentName || 'Click to upload a file'}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => updateField('documentName', e.target.files[0]?.name || '')}
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-1.5">
                    Demo mode — file isn't actually uploaded anywhere yet.
                  </p>
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
                    Submit Application
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

export default Register