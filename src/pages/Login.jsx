// import { useState } from 'react'
// import {
//   UserRound,
//   HeartHandshake,
//   ShieldCheck,
//   Heart,
//   Send,
//   Lock,
//   ShieldCheck as ShieldIcon,
//   HandHeart,
//   Clock,
//   ArrowLeft,
// } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { setSession } from '../data/db'
// import logo from '../assets/images/login.png'
// import { verifyCaretakerLogin } from '../data/caretakers'

// const roles = [
//   { id: 'citizen', icon: UserRound, title: 'Login as Citizen' },
//   { id: 'caretaker', icon: HeartHandshake, title: 'Login as Caretaker' },
//   { id: 'admin', icon: ShieldCheck, title: 'Login as Admin' },
// ]



// function HeroPanel() {
//   const badges = [
//     { icon: HandHeart, label: 'Trusted\nCaregivers' },
//     { icon: ShieldIcon, label: 'Safe &\nSecure' },
//     { icon: Clock, label: '24x7\nSupport' },
//   ]

//   return (
//     <div className="max-w-md">
//       <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
//         Care that
//         <br />
//         feels like
//         <br />
//         <span className="text-[#F0854D]">family</span>{' '}
//       </h1>
//       <p className="text-white/90 text-sm md:text-base max-w-[280px] mb-8 drop-shadow-sm">
//         Compassionate care, trusted support, and peace of mind — every step of the way.
//       </p>

//       <div className="flex gap-3">
//         {badges.map(({ icon: Icon, label }) => (
//           <div
//             key={label}
//             className="flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow-sm"
//           >
//             <div className="w-8 h-8 rounded-full bg-[#F5F0FA] flex items-center justify-center">
//               <Icon className="w-4 h-4 text-[#6B3FA0]" />
//             </div>
//             <p className="text-[11px] font-medium text-[#3D2A6D] text-center leading-tight whitespace-pre-line">
//               {label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// /* ---------- Login forms ---------- */

// function AdminLoginForm() {
//   const navigate = useNavigate()
//   const [userId, setUserId] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Admin login attempt:', { userId, password })
//     navigate('/admin')
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div>
//         <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">User ID</label>
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//       >
//         Sign In
//       </button>
//     </form>
//   )
// }

// function CaretakerCredentialsLogin() {
//   const navigate = useNavigate()
//   const [userId, setUserId] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const caretaker = verifyCaretakerLogin(userId, password)
//     if (!caretaker) {
//       setError('Invalid User ID or Password.')
//       return
//     }
//     setError('')
//     setSession('caretaker', caretaker.id)
//     navigate('/caretaker/dashboard')
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div>
//         <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">User ID</label>
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="e.g. CT4821"
//           className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//         />
//         {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
//       </div>
//       <button
//         type="submit"
//         className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//       >
//         Sign In
//       </button>
//     </form>
//   )
// }

// function OtpLoginFlow({ navigateTo, demoOtp }) {
//   const navigate = useNavigate()
//   const [step, setStep] = useState('mobile')
//   const [mobile, setMobile] = useState('')
//   const [otp, setOtp] = useState('')
//   const [error, setError] = useState('')

//   const handleMobileSubmit = (e) => {
//     e.preventDefault()
//     setError('')
//     setStep('otp')
//   }

//   const handleOtpSubmit = (e) => {
//     e.preventDefault()
//     navigate(navigateTo)
//   }

//   if (step === 'mobile') {
//     return (
//       <form onSubmit={handleMobileSubmit} className="space-y-5">
//         <div>
//           <p className="text-sm text-gray-400">Enter your mobile number to receive OTP</p>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Mobile Number</label>
//           <div className="flex items-center gap-2">
//             <span className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 bg-gray-50">
//               +91
//             </span>
//             <input
//               type="tel"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
//               placeholder="98765 43210"
//               className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//             />
//           </div>
//           {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//         >
//           Send OTP
//           <Send className="w-4 h-4" />
//         </button>
        
//       </form>
//     )
//   }

//   function CaretakerLoginFlow() {
//   const [mode, setMode] = useState('new') // 'new' | 'approved'

//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-2 mb-6 bg-gray-50 rounded-xl p-1">
//         <button
//           onClick={() => setMode('new')}
//           className={`py-2 rounded-lg text-xs font-medium transition-colors ${
//             mode === 'new' ? 'bg-white shadow-sm text-[#6B3FA0]' : 'text-gray-400'
//           }`}
//         >
//           New Caretaker
//         </button>
//         <button
//           onClick={() => setMode('approved')}
//           className={`py-2 rounded-lg text-xs font-medium transition-colors ${
//             mode === 'approved' ? 'bg-white shadow-sm text-[#6B3FA0]' : 'text-gray-400'
//           }`}
//         >
//           Already Approved
//         </button>
//       </div>

//       {mode === 'new' ? (
//         <OtpLoginFlow navigateTo="/register/caretaker" demoOtp="2222" />
//       ) : (
//         <CaretakerCredentialsLogin />
//       )}
//     </div>
//   )
// }

//   return (
//     <form onSubmit={handleOtpSubmit} className="space-y-5">
//       <div>
//         <p className="text-sm text-gray-500 mb-4">
//           OTP sent to <span className="font-medium text-[#3D2A6D]">+91 {mobile}</span>.{' '}
//           <button
//             type="button"
//             onClick={() => setStep('mobile')}
//             className="text-[#6B3FA0] font-medium hover:underline"
//           >
//             Change
//           </button>
//         </p>
//         <p className="text-xs text-gray-400 mb-4 bg-gray-50 rounded-lg px-3 py-2">
//           Demo mode: use OTP <span className="font-semibold">{demoOtp}</span>
//         </p>
//         <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Enter OTP</label>
//         <input
//           type="text"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
//           placeholder="4-digit OTP"
//           className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
//         />
//         {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
//       </div>
//       <button
//         type="submit"
//         className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//       >
//         Verify & Continue
//       </button>
//     </form>
//   )
// }

// /* ---------- Login card (right column) ---------- */

// function LoginCard() {
//   const [activeRole, setActiveRole] = useState('citizen')
//   const activeRoleData = roles.find((r) => r.id === activeRole)

//   return (
//     <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[460px] p-6">
//       <div className="text-center mb-6">
        
//         <h1 className="font-serif text-[30px] font-bold text-[#3D2A6D] mb-2 leading-tight">Sign In to Embrace</h1>
//         <p className="text-sm text-gray-400">We're here to care for your loved ones</p>
//       </div>

//       {/* Tab selector */}
//       <div className="grid grid-cols-3 gap-2 mb-6 bg-[#F5F0FA]/60 rounded-2xl p-1.5">
//         {roles.map((role) => {
//           const Icon = role.icon
//           const isActive = activeRole === role.id
//           return (
//             <button
//               key={role.id}
//               onClick={() => setActiveRole(role.id)}
//               className={`flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs font-medium transition-colors ${
//                 isActive
//                   ? 'bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white shadow-sm'
//                   : 'text-gray-500 hover:bg-white'
//               }`}
//             >
//               <Icon className="w-5 h-5" />
//               {role.id.charAt(0).toUpperCase() + role.id.slice(1)}
//             </button>
//           )
//         })}
//       </div>

//       {/* Form content */}
//       <div>
//   <div className="text-center mb-8">
//     <h2 className="font-serif text-3xl font-bold text-[#3D2A6D] mb-2">
//       {activeRoleData.title}
//     </h2>

//     <p className="text-gray-500 text-base">
//       {activeRole === 'admin'
//         ? 'Sign in with your admin credentials.'
//         : 'Enter your mobile number to receive OTP'}
//     </p>
//   </div>

//   {activeRole === 'admin' && <AdminLoginForm />}
//   {activeRole === 'citizen' && (
//     <OtpLoginFlow navigateTo="/register/citizen" demoOtp="1111" />
//   )}
//   {activeRole === 'caretaker' && <CaretakerLoginFlow />}
// </div>

      
//     </div>
//   )
// }

// /* ---------- Page ---------- */

// function Login() {
//   return (
//     <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-10">

//       {/* Full-page background image */}
//       <div className="absolute inset-0">
//         <img
//           src={logo}
//           alt="ElderCare"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />
//       </div>

//       {/* Back to Home */}
//       <Link
//         to="/"
//         className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur text-sm font-medium text-[#3D2A6D] hover:bg-white transition-colors shadow-sm"
//       >
//         <ArrowLeft className="w-4 h-4" />
//         Back to Home
//       </Link>

//       <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         <div className="hidden lg:flex justify-start pl-4">
//           <HeroPanel />
//         </div>
//         <div className="flex justify-center lg:justify-end">
//           <LoginCard />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Login
















import { useState } from 'react'
import {
  UserRound,
  HeartHandshake,
  ShieldCheck,
  Send,
  ShieldCheck as ShieldIcon,
  HandHeart,
  Clock,
  ArrowLeft,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { setSession } from '../data/db'
import logo from '../assets/images/login.png'
import { verifyCaretakerLogin } from '../data/caretakers'

const roles = [
  { id: 'citizen', icon: UserRound, title: 'Login as Citizen' },
  { id: 'caretaker', icon: HeartHandshake, title: 'Login as Caretaker' },
  { id: 'admin', icon: ShieldCheck, title: 'Login as Admin' },
]

function HeroPanel() {
  const badges = [
    { icon: HandHeart, label: 'Trusted\nCaregivers' },
    { icon: ShieldIcon, label: 'Safe &\nSecure' },
    { icon: Clock, label: '24x7\nSupport' },
  ]

  return (
    <div className="max-w-md">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
        Care that
        <br />
        feels like
        <br />
        <span className="text-[#F0854D]">family</span>{' '}
      </h1>
      <p className="text-white/90 text-sm md:text-base max-w-[280px] mb-8 drop-shadow-sm">
        Compassionate care, trusted support, and peace of mind — every step of the way.
      </p>

      <div className="flex gap-3">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#F5F0FA] flex items-center justify-center">
              <Icon className="w-4 h-4 text-[#6B3FA0]" />
            </div>
            <p className="text-[11px] font-medium text-[#3D2A6D] text-center leading-tight whitespace-pre-line">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Login forms ---------- */

function AdminLoginForm() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Admin login attempt:', { userId, password })
    navigate('/admin')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">User ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
      >
        Sign In
      </button>
    </form>
  )
}

function CaretakerCredentialsLogin() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const caretaker = verifyCaretakerLogin(userId, password)
    if (!caretaker) {
      setError('Invalid User ID or Password.')
      return
    }
    setError('')
    setSession('caretaker', caretaker.id)
    navigate('/caretaker/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">User ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="e.g. CT4821"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
        />
        {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
      >
        Sign In
      </button>
    </form>
  )
}

function OtpLoginFlow({ navigateTo, demoOtp }) {
  const navigate = useNavigate()
  const [step, setStep] = useState('mobile')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  const handleMobileSubmit = (e) => {
    e.preventDefault()
    setError('')
    setStep('otp')
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    navigate(navigateTo)
  }

  if (step === 'mobile') {
    return (
      <form onSubmit={handleMobileSubmit} className="space-y-5">
        <div>
          <p className="text-sm text-gray-400">Enter your mobile number to receive OTP</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Mobile Number</label>
          <div className="flex items-center gap-2">
            <span className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 bg-gray-50">
              +91
            </span>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="98765 43210"
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
            />
          </div>
          {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
        >
          Send OTP
          <Send className="w-4 h-4" />
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleOtpSubmit} className="space-y-5">
      <div>
        <p className="text-sm text-gray-500 mb-4">
          OTP sent to <span className="font-medium text-[#3D2A6D]">+91 {mobile}</span>.{' '}
          <button
            type="button"
            onClick={() => setStep('mobile')}
            className="text-[#6B3FA0] font-medium hover:underline"
          >
            Change
          </button>
        </p>
        
        <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">Enter OTP</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
          placeholder="4-digit OTP"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
        />
        {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
      >
        Verify & Continue
      </button>
    </form>
  )
}

function CaretakerLoginFlow() {
  const [mode, setMode] = useState('new') // 'new' | 'approved'

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 mb-6 bg-gray-50 rounded-xl p-1">
        <button
          onClick={() => setMode('new')}
          className={`py-2 rounded-lg text-xs font-medium transition-colors ${
            mode === 'new' ? 'bg-white shadow-sm text-[#6B3FA0]' : 'text-gray-400'
          }`}
        >
          New Caretaker
        </button>
        <button
          onClick={() => setMode('approved')}
          className={`py-2 rounded-lg text-xs font-medium transition-colors ${
            mode === 'approved' ? 'bg-white shadow-sm text-[#6B3FA0]' : 'text-gray-400'
          }`}
        >
          Already Approved
        </button>
      </div>

      {mode === 'new' ? (
        <OtpLoginFlow navigateTo="/register/caretaker" demoOtp="2222" />
      ) : (
        <CaretakerCredentialsLogin />
      )}
    </div>
  )
}

/* ---------- Login card (right column) ---------- */

function LoginCard() {
  const [activeRole, setActiveRole] = useState('citizen')
  const activeRoleData = roles.find((r) => r.id === activeRole)

  return (
    <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[460px] p-6">
      <div className="text-center mb-6">
        <h1 className="font-serif text-[30px] font-bold text-[#3D2A6D] mb-2 leading-tight">
          Sign In to Embrace
        </h1>
        <p className="text-sm text-gray-400">We're here to care for your loved ones</p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6 bg-[#F5F0FA]/60 rounded-2xl p-1.5">
        {roles.map((role) => {
          const Icon = role.icon
          const isActive = activeRole === role.id
          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white shadow-sm'
                  : 'text-gray-500 hover:bg-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {role.id.charAt(0).toUpperCase() + role.id.slice(1)}
            </button>
          )
        })}
      </div>

      <div>
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-[#3D2A6D] mb-2">
            {activeRoleData.title}
          </h2>
          <p className="text-gray-500 text-base">
            {activeRole === 'admin'
              ? 'Sign in with your admin credentials.'
              : 'Enter your mobile number to receive OTP'}
          </p>
        </div>

        {activeRole === 'admin' && <AdminLoginForm />}
        {activeRole === 'citizen' && (
          <OtpLoginFlow navigateTo="/register/citizen" demoOtp="1111" />
        )}
        {activeRole === 'caretaker' && <CaretakerLoginFlow />}
      </div>
    </div>
  )
}

/* ---------- Page ---------- */

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-10">
      <div className="absolute inset-0">
        <img src={logo} alt="ElderCare" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />
      </div>

      <Link
        to="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur text-sm font-medium text-[#3D2A6D] hover:bg-white transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="hidden lg:flex justify-start pl-4">
          <HeroPanel />
        </div>
        <div className="flex justify-center lg:justify-end">
          <LoginCard />
        </div>
      </div>
    </div>
  )
}

export default Login