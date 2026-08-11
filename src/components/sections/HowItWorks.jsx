// // import { MousePointerClick, ClipboardList, Users, CalendarCheck, HeartHandshake, Bell } from 'lucide-react'

// // const steps = [
// //   {
// //     number: 1,
// //     icon: MousePointerClick,
// //     title: 'Choose Service',
// //     description: 'Select the care service that fits your needs.',
// //     bg: 'bg-[#D9C7FF]',
// //     color: 'text-[#6B3FA0]',
// //   },
// //   {
// //     number: 2,
// //     icon: ClipboardList,
// //     title: 'Share Your Needs',
// //     description: "Tell us about your loved one's care requirements.",
// //     bg: 'bg-[#FBD9BC]',
// //     color: 'text-[#F0854D]',
// //   },
// //   {
// //     number: 3,
// //     icon: Users,
// //     title: 'We Match',
// //     description: 'We match you with the best care plan.',
// //     bg: 'bg-[#C5E8D1]',
// //     color: 'text-[#3F9B5C]',
// //   },
// //   {
// //     number: 4,
// //     icon: CalendarCheck,
// //     title: 'Schedule Visit',
// //     description: 'Confirm the schedule at your convenience.',
// //     bg: 'bg-[#C7DCFF]',
// //     color: 'text-[#3F6FBF]',
// //   },
// //   {
// //     number: 5,
// //     icon: HeartHandshake,
// //     title: 'Receive Care',
// //     description: 'Our caregiver provides professional care.',
// //     bg: 'bg-[#FBC9D3]',
// //     color: 'text-[#D9527A]',
// //   },
// //   {
// //     number: 6,
// //     icon: Bell,
// //     title: 'Stay Updated',
// //     description: 'Get regular updates and reports.',
// //     bg: 'bg-[#D9C7FF]',
// //     color: 'text-[#6B3FA0]',
// //   },
// // ]

// // function HowItWorks() {
// //   return (
// //     <section className="py-12 md:py-16">
// //       <div className="max-w-7xl mx-auto px-4 md:px-8">

// //         <div className="text-center max-w-xl mx-auto mb-14">
// //           <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
// //             How It Works
// //           </p>
// //           <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
// //             Simple Steps, Better Care
// //           </h2>
// //         </div>

// //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 relative">
// //           {steps.map((step) => {
// //             const Icon = step.icon
// //             return (
// //               <div key={step.number} className="flex flex-col items-center text-center relative">
// //                 <div className={`relative w-16 h-16 rounded-full ${step.bg} flex items-center justify-center`}>
// //                   <Icon className={`w-6 h-6 ${step.color}`} />
// //                   <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#3D2A6D] text-white text-xs font-bold flex items-center justify-center">
// //                     {step.number}
// //                   </span>
// //                 </div>
// //                 <h4 className="mt-4 font-semibold text-sm text-[#3D2A6D]">{step.title}</h4>
// //                 <p className="mt-1.5 text-xs text-gray-400 leading-relaxed max-w-[140px]">
// //                   {step.description}
// //                 </p>
// //               </div>
// //             )
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default HowItWorks

















// import { MousePointerClick, ClipboardList, Users, CalendarCheck, HeartHandshake, Bell } from 'lucide-react'
// import aboutImage from '../../assets/images/about.png'

// const steps = [
//   {
//     number: 1,
//     icon: MousePointerClick,
//     title: 'Choose Service',
//     description: 'Select the care service that fits your needs.',
//     bg: 'bg-[#D9C7FF]',
//     color: 'text-[#6B3FA0]',
//   },
//   {
//     number: 2,
//     icon: ClipboardList,
//     title: 'Share Your Needs',
//     description: "Tell us about your loved one's care requirements.",
//     bg: 'bg-[#FBD9BC]',
//     color: 'text-[#F0854D]',
//   },
//   {
//     number: 3,
//     icon: Users,
//     title: 'We Match',
//     description: 'We match you with the best care plan.',
//     bg: 'bg-[#C5E8D1]',
//     color: 'text-[#3F9B5C]',
//   },
//   {
//     number: 4,
//     icon: CalendarCheck,
//     title: 'Schedule Visit',
//     description: 'Confirm the schedule at your convenience.',
//     bg: 'bg-[#C7DCFF]',
//     color: 'text-[#3F6FBF]',
//   },
//   {
//     number: 5,
//     icon: HeartHandshake,
//     title: 'Receive Care',
//     description: 'Our caregiver provides professional care.',
//     bg: 'bg-[#FBC9D3]',
//     color: 'text-[#D9527A]',
//   },
// ]

// function HowItWorks() {
//   return (
//     <section className="py-12 md:py-16 bg-[#FDF8F4]">
//       <div className="max-w-4xl mx-auto px-4 md:px-8">

//         <div className="text-center max-w-xl mx-auto mb-16">
//           <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
//             How It Works
//           </p>
//           <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
//             Simple Steps, Better Care
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Center dashed line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#D9C7FF] -translate-x-1/2" />

//           <div className="flex flex-col gap-14">
//             {steps.map((step, index) => {
//               const Icon = step.icon
//               const isEven = index % 2 === 1

//               return (
//                 <div
//                   key={step.number}
//                   className={`flex items-center gap-6 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
//                 >
//                   {/* Text card */}
//                   <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-left`}>
//                     <h4 className="font-semibold text-[#3D2A6D] text-lg">{step.title}</h4>
//                     <p className="mt-1.5 text-sm text-gray-500 leading-relaxed max-w-sm md:ml-auto">
//                       {step.description}
//                     </p>
//                   </div>

//                   {/* Icon badge (center) */}
//                   <div className="relative shrink-0 z-10">
//                     <div className={`w-16 h-16 rounded-full ${step.bg} flex items-center justify-center ring-4 ring-white`}>
//                       <Icon className={`w-6 h-6 ${step.color}`} />
//                     </div>
//                     <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#3D2A6D] text-white text-xs font-bold flex items-center justify-center">
//                       {step.number}
//                     </span>
//                   </div>

//                   {/* Empty spacer to balance the row on desktop */}
//                   <div className="flex-1 hidden md:block" />
//                 </div>
//               )
//             })}

//             {/* Final step: photo card */}
//             <div className="flex items-center gap-6 md:flex-row-reverse">
//               <div className="flex-1 text-left">
//                 <h4 className="font-semibold text-[#3D2A6D] text-lg">Stay Updated</h4>
//                 <p className="mt-1.5 text-sm text-gray-500 leading-relaxed max-w-sm">
//                   Get regular updates and reports on your loved one's care.
//                 </p>
//               </div>

//               <div className="relative shrink-0 z-10">
//                 <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
//                   <img src={aboutImage} alt="Family receiving care update" className="w-full h-full object-cover" />
//                 </div>
//               </div>

//               <div className="flex-1 hidden md:block" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HowItWorks

















import {
  MousePointerClick,
  ClipboardList,
  Users,
  CalendarCheck,
  HeartHandshake,
} from "lucide-react";

import caregiver from "../../assets/images/caregiver1.jpg";
import family from "../../assets/images/family1.jpg";

const steps = [
  {
    title: "Choose a Care Service",
    description:
      "Browse our home care services and select the care plan that best matches your loved one's needs.",
    icon: MousePointerClick,
    image: caregiver,
  },
  {
    title: "Share Your Requirements",
    description:
      "Tell us about medical conditions, daily routines and preferences so we can understand your requirements.",
    icon: ClipboardList,
  },
  {
    title: "Perfect Caregiver Match",
    description:
      "We carefully match you with an experienced caregiver based on skills, experience and personality.",
    icon: Users,
  },
  {
    title: "Schedule the Visit",
    description:
      "Choose a convenient date and time. Your caregiver arrives prepared and on schedule.",
    icon: CalendarCheck,
  },
  {
    title: "Receive Compassionate Care",
    description:
      "Your loved one receives safe, professional and compassionate care while you receive regular updates.",
    icon: HeartHandshake,
    image: family,
  },
];

function HowItWorks({ hideHeading = false }) {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F8] py-12 md:py-16">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-32 top-0 w-96 h-96 rounded-full bg-orange-100 blur-[130px]" />

        <div className="absolute -right-20 top-40 w-[420px] h-[420px] rounded-full bg-purple-100 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-72 rounded-full bg-gradient-to-r from-orange-50 via-white to-purple-50 blur-[130px]" />

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14">

  {!hideHeading && (
    <>
      <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
        How It Works
      </p>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
        Your Care Journey
      </h2>
    </>
  )}

  <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
    A simple process designed to make finding compassionate elder
    care effortless for every family.
  </p>

</div>

        {/* Journey */}

        <div className="relative">

          {/* Curved SVG */}

          <svg
  className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[400px]"
  viewBox="0 0 400 900"
  preserveAspectRatio="none"
>
  <path
    d="M200 30
       C60 90 60 160 200 220
       S340 350 200 420
       S60 550 200 620
       S340 780 200 870"
    stroke="#C77CE9"
    strokeWidth="2"
    strokeDasharray="8 8"
    fill="none"
  />
</svg>

          <div className="space-y-16">

            {steps.map((step, index) => {

              const Icon = step.icon;
              const left = index % 2 === 0;

              return (

                <div
                  key={step.title}
                  className={`flex items-center ${
                    left
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } flex-col gap-10`}
                >

                  {/* Card */}

                  <div className="w-full lg:w-[42%]">

                    <div className="relative bg-white rounded-[28px] shadow-xl p-8 border border-purple-50">

                      <div className="flex items-center gap-4 mb-6">

                        <div className="w-14 h-14 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center">
                        <Icon className="text-[#6B3FA0]" size={24} />
                        </div>

                        <div>

                          <span className="text-sm font-semibold text-[#6B3FA0]">

                            Step {index + 1}

                          </span>

                          <h3 className="text-2xl font-bold text-[#3D2A6D]">

                            {step.title}

                          </h3>

                        </div>

                      </div>

                      <p className="text-gray-500 leading-8">

                        {step.description}

                      </p>

                    </div>

                  </div>

                  {/* Center Avatar */}

                  <div className="relative z-10">

                    {step.image ? (

                      <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-br from-[#F0854D] to-[#6B3FA0] shadow-2xl">

                        <img
                          src={step.image}
                          alt=""
                          className="rounded-full w-full h-full object-cover"
                        />

                      </div>

                    ) : (

                      <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-purple-100">

                        <Icon
                          className="text-[#6B3FA0]"
                          size={34}
                        />

                      </div>

                    )}

                  </div>

                  {/* Empty */}

                  <div className="hidden lg:block w-[42%]" />

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;