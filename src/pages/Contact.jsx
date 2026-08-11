import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — just simulate a successful submission
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div>

      {/* Page Header */}
      <section className="bg-[#F5F0FA]/50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            Contact Us
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D2A6D] leading-tight">
            We're Here to Help
          </h1>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Have a question or need guidance choosing the right care plan? Reach out — our team
            responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      {/* Contact Content */}
<section className="py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
    <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg border border-[#F0E8FA] p-8 md:p-10">

      <div className="space-y-8">

        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-[#6B3FA0]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-[#3D2A6D] mb-2">
              Phone
            </h4>
            <p className="text-gray-500">
              +91 98765 43210
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100"></div>

        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-[#6B3FA0]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-[#3D2A6D] mb-2">
              Email
            </h4>
            <p className="text-gray-500">
              support@eldercare.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100"></div>

        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[#6B3FA0]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-[#3D2A6D] mb-2">
              Address
            </h4>
            <p className="text-gray-500">
              123 Wellness Street,<br />
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100"></div>

        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-[#6B3FA0]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-[#3D2A6D] mb-2">
              Support Hours
            </h4>
            <p className="text-gray-500">
              24×7 — We're Always Available
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default Contact