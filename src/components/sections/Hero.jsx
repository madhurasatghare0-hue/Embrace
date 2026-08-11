import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg.png'
import {
  Heart,
  Phone,
  Users,
  ShieldCheck,
  Clock3,
  Award,
  Star
} from 'lucide-react'

import heroImage from '../../assets/images/hero.png'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F6]">

  {/* Background Image */}
  <div className="absolute inset-0">

    <img
      src={heroBg}
      alt=""
      className="w-full h-full object-cover"
    />

    {/* Soft White Overlay */}
    <div className="absolute inset-0 bg-white/35" />

  </div>

  {/* Decorative Blobs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* Left Orange Glow */}
    <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-orange-200/25 blur-[50px]" />

    {/* Right Purple Glow */}
    <div className="absolute top-10 right-[-120px] w-[520px] h-[520px] rounded-full bg-purple-700/20 blur-[50px]" />

    {/* Bottom Glow */}
    <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full bg-gradient-to-r from-orange-100/40 via-white/20 to-purple-200/40 blur-[120px]" />

    {/* Extra White Glow */}
    <div className="absolute left-1/3 top-1/2 w-[500px] h-[500px] rounded-full bg-white/40 blur-[120px]" />

  </div>

<div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 lg:pt-50 pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-white border border-purple-100 px-4 py-2 rounded-full shadow-sm">

              <Star
                size={16}
                className="text-yellow-500"
                fill="currentColor"
              />

              <span className="text-sm font-semibold text-[#6B3FA0]">
                Trusted Home Care
              </span>

            </div>

            <h1 className="mt-6 text-5xl lg:text-6xl leading-tight font-bold font-serif text-[#38245D]">

              Care That Feels

              <br />

              <span className="text-[#6B3FA0]">
                Like Family
              </span>

              

            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-500 max-w-xl">

              Professional caregivers providing compassionate,
              personalized elder care at home with dignity,
              comfort and peace of mind for every family.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#F0854D] text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
              >
                Explore Services
              </Link>

              <Link
                to="/about"
                className="px-8 py-4 rounded-full bg-white border border-purple-200 text-[#6B3FA0] font-semibold shadow-md hover:bg-purple-50 transition"
              >
                Learn More
              </Link>

            </div>

           

           

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Decorative Layer */}

            <div className="absolute rotate-6 w-[92%] h-full rounded-[60px] bg-gradient-to-br from-purple-200 to-orange-100" />

            {/* Image */}

            <div className="relative overflow-hidden rounded-[60px] shadow-[0_35px_90px_rgba(107,63,160,0.18)] w-full max-w-lg">

              <img
                src={heroImage}
                alt=""
                className="w-full object-cover"
              />

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-14 bg-white rounded-[35px] shadow-[0_20px_70px_rgba(0,0,0,0.08)] grid grid-cols-2 md:grid-cols-5 overflow-hidden">

          {[
            {
              icon:<Users size={30}/>,
              value:'10K+',
              label:'Families'
            },
            {
              icon:<ShieldCheck size={30}/>,
              value:'2500+',
              label:'Caregivers'
            },
            {
              icon:<Award size={30}/>,
              value:'98%',
              label:'Satisfaction'
            },
            {
              icon:<Clock3 size={30}/>,
              value:'24/7',
              label:'Support'
            },
            {
              icon:<Heart size={30}/>,
              value:'100%',
              label:'Compassion'
            }

          ].map((item,index)=>(

            <div
              key={index}
              className="p-8 text-center border-r last:border-r-0 border-gray-100 hover:bg-purple-50 transition"
            >

              <div className="text-[#6B3FA0] flex justify-center mb-4">

                {item.icon}

              </div>

              <h3 className="text-3xl font-bold text-[#38245D]">

                {item.value}

              </h3>

              <p className="text-gray-500 mt-2">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Hero






















// import { Link } from 'react-router-dom'
// import { Heart, Phone, Users, ShieldCheck, Clock3, Award, Star } from 'lucide-react'
// import heroImage from '../../assets/images/hero.png'
// import heroBackground from '../../assets/images/hero-bg.png'

// export default function Hero() {
//   const stats = [
//     { icon:<Users size={22}/>, value:'10,000+', label:'Families Served'},
//     { icon:<ShieldCheck size={22}/>, value:'2,500+', label:'Care Professionals'},
//     { icon:<Award size={22}/>, value:'50+', label:'Cities Covered'},
//     { icon:<Clock3 size={22}/>, value:'24/7', label:'Support'},
//     { icon:<Heart size={22}/>, value:'98%', label:'Happy Families'},
//   ];

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <div className="absolute inset-0">
//         <img src={heroBackground} className="w-full h-full object-cover" alt="" />
//         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-white/15"/>
//         <div className="absolute inset-0 bg-[#fff8f4]/20"/>
//       </div>

//       <div className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full bg-orange-200/30 blur-[120px]" />
//       <div className="absolute -right-32 top-0 w-[500px] h-[500px] rounded-full bg-violet-300/30 blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//              <h1 className=" font-serif font-bold text-[#38245D] leading-[1.05] text-[44px] md:text-[56px] lg:text-[68px] max-w-[620px]">
//               Care That Feels
//               <br/>
//               <span className="text-[#6B3FA0]">Like Family</span>
//             </h1>

//             <p className="mt-8 max-w-xl text-lg text-slate-600 leading-8">
//               Professional elder care services at home. Peace of mind for you,
//               happiness for them.
//             </p>

//             <div className="mt-10 flex gap-5 flex-wrap">
//               <Link to="/services" className="rounded-full px-8 py-4 bg-gradient-to-r from-violet-700 to-orange-400 text-white font-semibold shadow-xl">
//                 Explore Services
//               </Link>
//               <Link to="/about" className="rounded-full px-8 py-4 bg-white border border-violet-200 shadow-lg text-violet-700 font-semibold">
//                 Learn More
//               </Link>
//             </div>
//           </div>

//           <div className="relative flex justify-center lg:justify-end">
//             <div className="absolute w-[560px] h-[560px] rounded-full bg-violet-400/20 blur-3xl"/>
//             <div className="relative w-[520px] h-[520px]">
//               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400/30 to-orange-200/30 scale-110"/>
//               <div className="absolute inset-2 rounded-full border-4 border-white"/>
//               <div className="absolute inset-5 rounded-full overflow-hidden shadow-2xl">
//                 <img src={heroImage} className="w-full h-full object-contain" alt="Caregiver"/>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-20 rounded-[32px] bg-white/80 backdrop-blur-xl shadow-2xl grid md:grid-cols-5 grid-cols-2 overflow-hidden">
//           {stats.map((s,i)=>(
//             <div key={i} className="p-8 text-center border-r last:border-r-0 border-slate-100">
//               <div className="flex justify-center text-violet-700 mb-3">{s.icon}</div>
//               <h3 className="font-bold text-2xl text-[#38245D]">{s.value}</h3>
//               <p className="text-sm text-slate-500 mt-2">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }









