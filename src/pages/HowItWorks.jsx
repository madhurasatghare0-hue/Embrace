import HowItWorksSection from '../components/sections/HowItWorks'

function HowItWorksPage() {
  return (
    <div>

      {/* Page Header */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            How It Works
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D2A6D] leading-tight">
            Your Care Journey, Step by Step
          </h1>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            From choosing a service to receiving compassionate care — here's exactly what to
            expect when you partner with ElderCare.
          </p>
        </div>
      </section>

      
      <HowItWorksSection hideHeading />
    </div>
  )
}

export default HowItWorksPage