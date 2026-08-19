// // import { useEffect, useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { Heart, LogOut, Users, MessageCircle, ClipboardList } from 'lucide-react'
// // import { getSession, clearSession } from '../../data/db'
// // import { getCaretakerById } from '../../data/caretakers'
// // import { getAllCitizens } from '../../data/citizens'
// // import { getRequestsByCitizen, updateRequestStatus } from '../../data/requests'

// // function Dashboard() {
// //   const navigate = useNavigate()
// //   const [caretaker, setCaretaker] = useState(null)
// //   const [assignedCitizens, setAssignedCitizens] = useState([])
// //   const [requestsByCitizen, setRequestsByCitizen] = useState({})

// //   useEffect(() => {
// //     const session = getSession()
// //     if (!session || session.role !== 'caretaker') {
// //       navigate('/login')
// //       return
// //     }
// //     const record = getCaretakerById(session.id)
// //     if (!record) {
// //       navigate('/login')
// //       return
// //     }
// //     setCaretaker(record)

// //     const citizens = getAllCitizens().filter((c) => c.assignedCaretakerId === record.id)
// //     setAssignedCitizens(citizens)

// //     const requestsMap = {}
// //     citizens.forEach((c) => {
// //       requestsMap[c.id] = getRequestsByCitizen(c.id)
// //     })
// //     setRequestsByCitizen(requestsMap)
// //   }, [navigate])

// //   const handleSignOut = () => {
// //     clearSession()
// //     navigate('/login')
// //   }

// //   const handleUpdateStatus = (requestId, citizenId, status) => {
// //     updateRequestStatus(requestId, status)
// //     setRequestsByCitizen((prev) => ({
// //       ...prev,
// //       [citizenId]: getRequestsByCitizen(citizenId),
// //     }))
// //   }

// //   if (!caretaker) return null

// //   const firstName = caretaker.fullName?.split(' ')[0] || caretaker.profile?.fullName?.split(' ')[0] || 'there'
// //   const totalRequests = Object.values(requestsByCitizen).flat().length
// //   const pendingRequests = Object.values(requestsByCitizen).flat().filter((r) => r.status === 'pending').length

// //   return (
// //     <div className="min-h-screen bg-[#FAFAFB]">
// //       <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
// //         <div className="flex items-center gap-2">
// //           <Heart className="w-6 h-6 text-[#F0854D]" fill="currentColor" />
// //           <span className="font-bold text-[#3D2A6D]">
// //             Elder<span className="text-[#F0854D]">Care</span>
// //           </span>
// //         </div>
// //         <button
// //           onClick={handleSignOut}
// //           className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
// //         >
// //           <LogOut className="w-4 h-4" />
// //           Sign Out
// //         </button>
// //       </header>

// //       <main className="max-w-5xl mx-auto px-6 py-10">
// //         <h1 className="text-2xl font-semibold text-[#3D2A6D] mb-1">Welcome back, {firstName} 👋</h1>
// //         <p className="text-sm text-gray-400 mb-8">Here's what's happening with your assigned households.</p>

// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
// //           <div className="bg-white rounded-xl border border-gray-100 p-5">
// //             <div className="w-10 h-10 rounded-lg bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
// //               <Users className="w-5 h-5 text-[#6B3FA0]" />
// //             </div>
// //             <p className="text-2xl font-semibold text-[#3D2A6D]">{assignedCitizens.length}</p>
// //             <p className="text-xs text-gray-400 mt-1">Assigned Households</p>
// //           </div>
// //           <div className="bg-white rounded-xl border border-gray-100 p-5">
// //             <div className="w-10 h-10 rounded-lg bg-[#F0854D]/10 flex items-center justify-center mb-4">
// //               <ClipboardList className="w-5 h-5 text-[#F0854D]" />
// //             </div>
// //             <p className="text-2xl font-semibold text-[#3D2A6D]">{totalRequests}</p>
// //             <p className="text-xs text-gray-400 mt-1">Total Requests</p>
// //           </div>
// //           <div className="bg-white rounded-xl border border-gray-100 p-5">
// //             <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
// //               <ClipboardList className="w-5 h-5 text-orange-500" />
// //             </div>
// //             <p className="text-2xl font-semibold text-[#3D2A6D]">{pendingRequests}</p>
// //             <p className="text-xs text-gray-400 mt-1">Pending Requests</p>
// //           </div>
// //         </div>

// //         <h2 className="text-lg font-semibold text-[#3D2A6D] mb-4">Assigned Households</h2>

// //         {assignedCitizens.length === 0 ? (
// //           <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
// //             <p className="text-sm text-gray-400">No households assigned to you yet.</p>
// //           </div>
// //         ) : (
// //           <div className="space-y-4">
// //             {assignedCitizens.map((citizen) => {
// //               const requests = requestsByCitizen[citizen.id] || []
// //               return (
// //                 <div key={citizen.id} className="bg-white rounded-xl border border-gray-100 p-5">
// //                   <div className="flex items-center justify-between mb-4">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-10 h-10 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
// //                         {(citizen.fullName || citizen.profile?.fullName || '?').charAt(0)}
// //                       </div>
// //                       <div>
// //                         <p className="text-sm font-semibold text-[#3D2A6D]">
// //                           {citizen.fullName || citizen.profile?.fullName}
// //                         </p>
// //                         <p className="text-xs text-gray-400">
// //                           {citizen.mobile} · {citizen.plan?.name || citizen.selectedPlan?.name || 'No plan'}
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <button
// //                       onClick={() => navigate(`/caretaker/chat/${citizen.id}`)}
// //                       className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-[#6B3FA0] border border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
// //                     >
// //                       <MessageCircle className="w-4 h-4" /> Chat
// //                     </button>
// //                   </div>

// //                   {requests.length === 0 ? (
// //                     <p className="text-xs text-gray-400">No requests from this household yet.</p>
// //                   ) : (
// //                     <div className="space-y-2">
// //                       {requests.map((req) => (
// //                         <div
// //                           key={req.id}
// //                           className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2.5"
// //                         >
// //                           <div>
// //                             <p className="text-sm font-medium text-[#3D2A6D]">{req.category}</p>
// //                             {req.note && <p className="text-xs text-gray-400">{req.note}</p>}
// //                           </div>
// //                           <select
// //                             value={req.status}
// //                             onChange={(e) => handleUpdateStatus(req.id, citizen.id, e.target.value)}
// //                             className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white focus:outline-none"
// //                           >
// //                             <option value="pending">Pending</option>
// //                             <option value="accepted">Accepted</option>
// //                             <option value="in_progress">In Progress</option>
// //                             <option value="completed">Completed</option>
// //                           </select>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   )
// // }

// // export default Dashboard















// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Heart, LogOut, Users, MessageCircle, ClipboardList, Phone, Bell, History } from 'lucide-react'
// import { getSession, clearSession } from '../../data/db'
// import { getCaretakerById } from '../../data/caretakers'
// import { getAllCitizens } from '../../data/citizens'
// import { getRequestsByCitizen, updateRequestStatus } from '../../data/requests'

// function Dashboard() {
//   const navigate = useNavigate()
//   const [caretaker, setCaretaker] = useState(null)
//   const [assignedCitizens, setAssignedCitizens] = useState([])
//   const [requestsByCitizen, setRequestsByCitizen] = useState({})
//   const [activeTab, setActiveTab] = useState('households') // 'households' | 'history' | 'emergency'

//   useEffect(() => {
//     const session = getSession()
//     if (!session || session.role !== 'caretaker') {
//       navigate('/login')
//       return
//     }
//     const record = getCaretakerById(session.id)
//     if (!record) {
//       navigate('/login')
//       return
//     }
//     setCaretaker(record)

//     const citizens = getAllCitizens().filter((c) => c.assignedCaretakerId === record.id)
//     setAssignedCitizens(citizens)

//     const requestsMap = {}
//     citizens.forEach((c) => {
//       requestsMap[c.id] = getRequestsByCitizen(c.id)
//     })
//     setRequestsByCitizen(requestsMap)
//   }, [navigate])

//   const handleSignOut = () => {
//     clearSession()
//     navigate('/login')
//   }

//   const handleUpdateStatus = (requestId, citizenId, status) => {
//     updateRequestStatus(requestId, status)
//     setRequestsByCitizen((prev) => ({
//       ...prev,
//       [citizenId]: getRequestsByCitizen(citizenId),
//     }))
//   }

//   if (!caretaker) return null

//   const firstName = caretaker.fullName?.split(' ')[0] || caretaker.profile?.fullName?.split(' ')[0] || 'there'
//   const allRequests = Object.entries(requestsByCitizen).flatMap(([citizenId, reqs]) =>
//     reqs.map((r) => ({ ...r, citizenId }))
//   )
//   const totalRequests = allRequests.length
//   const pendingRequests = allRequests.filter((r) => r.status === 'pending').length
//   const completedRequests = allRequests.filter((r) => r.status === 'completed')
//   const notifications = allRequests
//     .filter((r) => r.status === 'pending')
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

//   const getCitizenName = (citizenId) => {
//     const citizen = assignedCitizens.find((c) => c.id === citizenId)
//     return citizen?.fullName || citizen?.profile?.fullName || 'Unknown'
//   }

//   return (
//     <div className="min-h-screen bg-[#FAFAFB]">
//       <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Heart className="w-6 h-6 text-[#F0854D]" fill="currentColor" />
//           <span className="font-bold text-[#3D2A6D]">
//             Elder<span className="text-[#F0854D]">Care</span>
//           </span>
//         </div>
//         <div className="flex items-center gap-4">
//           {pendingRequests > 0 && (
//             <div className="relative">
//               <Bell className="w-5 h-5 text-gray-400" />
//               <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#F0854D] text-white text-[9px] font-bold flex items-center justify-center">
//                 {pendingRequests}
//               </span>
//             </div>
//           )}
//           <button
//             onClick={handleSignOut}
//             className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
//           >
//             <LogOut className="w-4 h-4" />
//             Sign Out
//           </button>
//         </div>
//       </header>

//       <main className="max-w-5xl mx-auto px-6 py-10">
//         <h1 className="text-2xl font-semibold text-[#3D2A6D] mb-1">Welcome back, {firstName} 👋</h1>
//         <p className="text-sm text-gray-400 mb-8">Here's what's happening with your assigned households.</p>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//           <div className="bg-white rounded-xl border border-gray-100 p-5">
//             <div className="w-10 h-10 rounded-lg bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
//               <Users className="w-5 h-5 text-[#6B3FA0]" />
//             </div>
//             <p className="text-2xl font-semibold text-[#3D2A6D]">{assignedCitizens.length}</p>
//             <p className="text-xs text-gray-400 mt-1">Assigned Households</p>
//           </div>
//           <div className="bg-white rounded-xl border border-gray-100 p-5">
//             <div className="w-10 h-10 rounded-lg bg-[#F0854D]/10 flex items-center justify-center mb-4">
//               <ClipboardList className="w-5 h-5 text-[#F0854D]" />
//             </div>
//             <p className="text-2xl font-semibold text-[#3D2A6D]">{totalRequests}</p>
//             <p className="text-xs text-gray-400 mt-1">Total Requests</p>
//           </div>
//           <div className="bg-white rounded-xl border border-gray-100 p-5">
//             <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
//               <ClipboardList className="w-5 h-5 text-orange-500" />
//             </div>
//             <p className="text-2xl font-semibold text-[#3D2A6D]">{pendingRequests}</p>
//             <p className="text-xs text-gray-400 mt-1">Pending Requests</p>
//           </div>
//         </div>

//         {/* Notification Center */}
//         {notifications.length > 0 && (
//           <div className="bg-white rounded-xl border border-gray-100 p-5 mb-8">
//             <div className="flex items-center gap-2 mb-4">
//               <Bell className="w-4 h-4 text-[#F0854D]" />
//               <h2 className="text-sm font-semibold text-[#3D2A6D]">New Requests</h2>
//             </div>
//             <div className="space-y-2">
//               {notifications.slice(0, 5).map((n) => (
//                 <div
//                   key={n.id}
//                   className="flex items-center justify-between bg-orange-50/60 rounded-lg px-4 py-2.5"
//                 >
//                   <p className="text-sm text-[#3D2A6D]">
//                     <span className="font-medium">{getCitizenName(n.citizenId)}</span> requested{' '}
//                     <span className="font-medium">{n.category}</span>
//                   </p>
//                   <span className="text-xs text-gray-400 shrink-0 ml-3">
//                     {new Date(n.createdAt).toLocaleTimeString()}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Tabs */}
//         <div className="flex gap-2 mb-6">
//           {[
//             { id: 'households', label: 'Assigned Households', icon: Users },
//             { id: 'history', label: 'Task History', icon: History },
//             { id: 'emergency', label: 'Emergency Contacts', icon: Phone },
//           ].map((tab) => {
//             const Icon = tab.icon
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   activeTab === tab.id
//                     ? 'bg-[#6B3FA0] text-white'
//                     : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 {tab.label}
//               </button>
//             )
//           })}
//         </div>

//         {/* Assigned Households tab */}
//         {activeTab === 'households' && (
//           assignedCitizens.length === 0 ? (
//             <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
//               <p className="text-sm text-gray-400">No households assigned to you yet.</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {assignedCitizens.map((citizen) => {
//                 const requests = (requestsByCitizen[citizen.id] || []).filter(
//                   (r) => r.status !== 'completed'
//                 )
//                 return (
//                   <div key={citizen.id} className="bg-white rounded-xl border border-gray-100 p-5">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
//                           {(citizen.fullName || citizen.profile?.fullName || '?').charAt(0)}
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-[#3D2A6D]">
//                             {citizen.fullName || citizen.profile?.fullName}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {citizen.mobile} · {citizen.plan?.name || citizen.selectedPlan?.name || 'No plan'}
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => navigate(`/caretaker/chat/${citizen.id}`)}
//                         className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-[#6B3FA0] border border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
//                       >
//                         <MessageCircle className="w-4 h-4" /> Chat
//                       </button>
//                     </div>

//                     {requests.length === 0 ? (
//                       <p className="text-xs text-gray-400">No active requests from this household.</p>
//                     ) : (
//                       <div className="space-y-2">
//                         {requests.map((req) => (
//                           <div
//                             key={req.id}
//                             className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2.5"
//                           >
//                             <div>
//                               <p className="text-sm font-medium text-[#3D2A6D]">{req.category}</p>
//                               {req.note && <p className="text-xs text-gray-400">{req.note}</p>}
//                             </div>
//                             <select
//                               value={req.status}
//                               onChange={(e) => handleUpdateStatus(req.id, citizen.id, e.target.value)}
//                               className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white focus:outline-none"
//                             >
//                               <option value="pending">Pending</option>
//                               <option value="accepted">Accepted</option>
//                               <option value="in_progress">In Progress</option>
//                               <option value="completed">Completed</option>
//                             </select>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )
//               })}
//             </div>
//           )
//         )}

//         {/* Task History tab */}
//         {activeTab === 'history' && (
//           completedRequests.length === 0 ? (
//             <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
//               <p className="text-sm text-gray-400">No completed tasks yet.</p>
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
//               {completedRequests.map((req) => (
//                 <div key={req.id} className="p-4 flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-[#3D2A6D]">
//                       {req.category} — {getCitizenName(req.citizenId)}
//                     </p>
//                     {req.note && <p className="text-xs text-gray-400">{req.note}</p>}
//                     <p className="text-xs text-gray-300 mt-0.5">
//                       {new Date(req.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                   <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600">
//                     Completed
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )
//         )}

//         {/* Emergency Contacts tab */}
//         {activeTab === 'emergency' && (
//           <div className="space-y-4">
//             <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-red-600">ElderCare Emergency Line</p>
//                 <p className="text-xs text-red-400">Available 24/7 for critical situations</p>
//               </div>
              
//                 <a href="tel:+911800123456"
//                 className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors"
//               >
//                 <Phone className="w-4 h-4" /> Call Now
//               </a>
//             </div>

//             {assignedCitizens.length === 0 ? (
//               <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
//                 <p className="text-sm text-gray-400">No households assigned yet.</p>
//               </div>
//             ) : (
//               assignedCitizens.map((citizen) => {
//   const emergencyContact =
//     citizen.profile?.emergencyContact ||
//     citizen.profile?.emergencyContactName ||
//     'Not provided'

//   return (
//     <div
//       key={citizen.id}
//       className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between"
//     >
//       <div>
//         <p className="text-sm font-semibold text-[#3D2A6D]">
//           {citizen.fullName || citizen.profile?.fullName}
//         </p>

//         <p className="text-xs text-gray-400">
//           Emergency contact: {emergencyContact}
//         </p>
//       </div>

//       <a
//         href={`tel:${citizen.mobile}`}
//         className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-[#6B3FA0] border border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
//       >
//         <Phone className="w-4 h-4" />
//         Call Household
//       </a>
//     </div>
//   )
// })
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   )
// }

// export default Dashboard






























import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Heart, LayoutDashboard, Users, ClipboardList, MessageCircle, History, Phone, Bell,
  User, LogOut, Search, ChevronDown, Pill, Car, HeartHandshake, CheckCircle2,
} from 'lucide-react'
import { PieChart, Pie, Cell } from 'recharts'
import { getSession, clearSession } from '../../data/db'
import { getCaretakerById } from '../../data/caretakers'
import { getAllCitizens } from '../../data/citizens'
import { getRequestsByCitizen, updateRequestStatus } from '../../data/requests'
import DashboardSidebar from '../../components/layout/DashboardSidebar'

const CATEGORY_META = {
  'Medical Services': { icon: Pill, color: '#6B3FA0', bg: '#F1EAFB' },
  Transport: { icon: Car, color: '#F0854D', bg: '#FEF0E7' },
  'Complaint / Feedback': { icon: HeartHandshake, color: '#E85D75', bg: '#FDEAEE' },
}
const DEFAULT_META = { icon: ClipboardList, color: '#3B6FE0', bg: '#E9F1FF' }

const STATUS_META = {
  pending: { label: 'Pending', bg: '#FEF0E7', color: '#C9752E' },
  accepted: { label: 'Accepted', bg: '#E9F1FF', color: '#3B6FE0' },
  in_progress: { label: 'In Progress', bg: '#E9F1FF', color: '#3B6FE0' },
  completed: { label: 'Completed', bg: '#E9F9F1', color: '#22A06B' },
}

const NAV_ITEMS = [
  { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'households', label: 'Assigned Households', icon: Users },
  { id: 'requests', label: 'Requests', icon: ClipboardList },
  { id: 'chat', label: 'Chat Support', icon: MessageCircle },
  { id: 'history', label: 'Task History', icon: History },
  { id: 'emergency', label: 'Emergency Contacts', icon: Phone },
]

function initials(name) {
  return (name || '?').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

function Sparkline({ color, seed = 0 }) {
  const paths = [
    'M0,20 C10,18 20,10 30,12 C40,14 50,6 60,8 C70,10 80,2 90,4 L100,2',
    'M0,18 C12,20 22,8 32,10 C42,12 52,4 62,6 C72,8 82,14 92,10 L100,12',
    'M0,14 C10,10 20,16 30,12 C40,8 50,14 60,6 C70,2 80,8 90,4 L100,6',
    'M0,20 C10,16 20,18 30,10 C40,4 50,10 60,4 C70,0 80,6 90,2 L100,4',
  ]
  return (
    <svg viewBox="0 0 100 24" className="w-full h-6" preserveAspectRatio="none">
      <path d={paths[seed % paths.length]} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function StatCard({ icon: Icon, cardBg, iconColor, label, value, sub, sparkColor, seed }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: cardBg }}>
      <div className="w-11 h-11 rounded-xl bg-white/70 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" style={{ color: iconColor }} />
      </div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-3xl font-bold text-[#2E2249] my-1">{value}</p>
      <p className="text-xs text-gray-400 mb-3">{sub}</p>
      <Sparkline color={sparkColor} seed={seed} />
    </div>
  )
}

function citizenName(citizen) {
  return citizen?.fullName || citizen?.profile?.fullName || 'Unknown'
}

function citizenCondition(citizen) {
  const conditions = citizen?.profile?.chronicIllnesses
  if (Array.isArray(conditions) && conditions.length > 0) return conditions[0]
  return citizen?.profile?.medicalConditions || 'No conditions listed'
}

function citizenAge(citizen) {
  return citizen?.profile?.age || citizen?.age || '—'
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [caretaker, setCaretaker] = useState(null)
  const [citizens, setCitizens] = useState([])
  const [requestsByCitizen, setRequestsByCitizen] = useState({})
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const session = getSession()
    if (!session || session.role !== 'caretaker') {
      navigate('/login')
      return
    }
    const record = getCaretakerById(session.id)
    if (!record) {
      navigate('/login')
      return
    }
    setCaretaker(record)

    const assigned = getAllCitizens().filter((c) => c.assignedCaretakerId === record.id)
    setCitizens(assigned)

    const map = {}
    assigned.forEach((c) => {
      map[c.id] = getRequestsByCitizen(c.id)
    })
    setRequestsByCitizen(map)
  }, [navigate])

  const handleSignOut = () => {
    clearSession()
    navigate('/login')
  }

  const handleUpdateStatus = (requestId, citizenId, status) => {
    updateRequestStatus(requestId, status)
    setRequestsByCitizen((prev) => ({ ...prev, [citizenId]: getRequestsByCitizen(citizenId) }))
  }

  if (!caretaker) return null

  const firstName = caretaker.fullName?.split(' ')[0] || caretaker.profile?.fullName?.split(' ')[0] || 'there'

  const allRequests = Object.entries(requestsByCitizen).flatMap(([citizenId, reqs]) =>
    reqs.map((r) => ({ ...r, citizenId }))
  )
  const pendingRequests = allRequests.filter((r) => r.status === 'pending')
  const completedRequests = allRequests.filter((r) => r.status === 'completed')
  const inProgressRequests = allRequests.filter((r) => r.status === 'in_progress' || r.status === 'accepted')

  const notifications = [...pendingRequests]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)
    .map((r) => ({
      id: r.id,
      icon: (CATEGORY_META[r.category] || DEFAULT_META).icon,
      color: (CATEGORY_META[r.category] || DEFAULT_META).color,
      text: `New ${r.category} request from ${citizenName(citizens.find((c) => c.id === r.citizenId))}`,
      time: new Date(r.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      unread: true,
    }))

  const recentRequests = [...allRequests]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6)

  const taskOverview = [
    { name: 'Pending', value: pendingRequests.length, color: '#6B3FA0' },
    { name: 'In Progress', value: inProgressRequests.length, color: '#F0854D' },
    { name: 'Completed', value: completedRequests.length, color: '#22A06B' },
  ].filter((t) => t.value > 0)
  const taskTotal = taskOverview.reduce((s, t) => s + t.value, 0) || 1

  const categoryCounts = {}
  allRequests.forEach((r) => {
    categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1
  })
  const categoryTotals = Object.entries(categoryCounts).map(([name, value]) => ({
    name,
    value,
    color: (CATEGORY_META[name] || DEFAULT_META).color,
  }))
  const categoryMax = Math.max(1, ...categoryTotals.map((c) => c.value))

  return (
    <div className="min-h-screen bg-[#F7F7FB] flex">
    <div className="w-[272px] shrink-0" />
     <DashboardSidebar
      navItems={NAV_ITEMS.map((item) => ({
        ...item,
        badge: item.id === 'requests' ? pendingRequests.length : 0,
      }))}
      activeId={active}
      onNavigate={setActive}
      onSignOut={handleSignOut}
      subtitle="Care with Heart"
    />

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="flex items-center justify-between px-8 py-5">
        <div>
          <p className="text-sm text-gray-400">Welcome back, {firstName}</p>
        </div>
          <div className="flex items-center gap-5">
            <button className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600">
              <Search className="w-4 h-4" />
            </button>
            <button className="relative w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600">
              <Bell className="w-4 h-4" />
              {pendingRequests.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F0854D] text-white text-[9px] font-bold flex items-center justify-center">
                  {pendingRequests.length}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
                {initials(caretaker.fullName || caretaker.profile?.fullName)}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[#2E2249] leading-tight">
                  {caretaker.fullName || caretaker.profile?.fullName}
                </p>
                <p className="text-xs text-gray-400 leading-tight">Caretaker</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        <main className="px-8 pb-10 space-y-6">

          {/* OVERVIEW */}
          {active === 'overview' && (
  <>
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#F1EAFB] to-[#FEF0E7] p-6 flex items-center justify-between gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2E2249] mb-1">
          Good Morning, {firstName}! 👋
        </h1>
        <p className="text-sm text-gray-500">
          Let's make today a <span className="text-[#F0854D] font-medium">better day</span> for your households.
        </p>
      </div>
      <div className="hidden lg:block bg-white/70 backdrop-blur rounded-xl px-5 py-4 max-w-xs shrink-0">
        <p className="text-sm text-[#2E2249] italic leading-snug">
          "Care is not just what we do, it's who we are."
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    <StatCard icon={Users} cardBg="#F1EAFB" iconColor="#6B3FA0" label="Assigned Households" value={citizens.length} sub="Families under your care" sparkColor="#6B3FA0" seed={0} />
    <StatCard icon={ClipboardList} cardBg="#FEF0E7" iconColor="#F0854D" label="Total Requests" value={allRequests.length} sub="All time requests" sparkColor="#F0854D" seed={1} />
    <StatCard icon={ClipboardList} cardBg="#E9F1FF" iconColor="#3B6FE0" label="Pending Requests" value={pendingRequests.length} sub="Require your action" sparkColor="#3B6FE0" seed={2} />
    <StatCard icon={CheckCircle2} cardBg="#FDEAEE" iconColor="#E85D75" label="Completed Tasks" value={completedRequests.length} sub="All time" sparkColor="#E85D75" seed={3} />
    </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_0.85fr] gap-5 items-start">
                {/* Assigned households */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-[#2E2249]">Assigned Households</h2>
                    <button
                      onClick={() => setActive('households')}
                      className="text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-3 py-1.5 hover:bg-gray-50"
                    >
                      View All
                    </button>
                  </div>
                  {citizens.length === 0 ? (
                    <p className="text-sm text-gray-400 py-6 text-center">No households assigned yet.</p>
                  ) : (
                    <div className="space-y-1">
                      {citizens.map((c) => (
                        <div key={c.id} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                          <div className="w-10 h-10 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-xs font-semibold text-[#6B3FA0] shrink-0">
                            {initials(citizenName(c))}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-[#2E2249] truncate">{citizenName(c)}</p>
                            <p className="text-xs text-gray-400">{citizenAge(c)} yrs · {c.mobile}</p>
                          </div>
                          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0" style={{ background: '#F1EAFB', color: '#6B3FA0' }}>
                            {citizenCondition(c)}
                          </span>
                          <a href={`tel:${c.mobile}`} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#6B3FA0] shrink-0">
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent requests */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-[#2E2249]">Recent Requests</h2>
                    <button
                      onClick={() => setActive('requests')}
                      className="text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-3 py-1.5 hover:bg-gray-50"
                    >
                      View All
                    </button>
                  </div>
                  {recentRequests.length === 0 ? (
                    <p className="text-sm text-gray-400 py-6 text-center">No requests yet.</p>
                  ) : (
                    <div className="space-y-1">
                      {recentRequests.map((r) => {
                        const meta = CATEGORY_META[r.category] || DEFAULT_META
                        const Icon = meta.icon
                        const status = STATUS_META[r.status] || STATUS_META.pending
                        return (
                          <div key={r.id} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: meta.bg }}>
                              <Icon className="w-4 h-4" style={{ color: meta.color }} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-[#2E2249] truncate">{r.category}</p>
                              <p className="text-xs text-gray-400 truncate">{citizenName(citizens.find((c) => c.id === r.citizenId))}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[11px] text-gray-400 mb-1">{new Date(r.createdAt).toLocaleDateString()}</p>
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: status.bg, color: status.color }}>
                                {status.label}
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Notifications + Chat support */}
                <div className="space-y-5">
                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h2 className="font-semibold text-[#2E2249] mb-4">Notifications</h2>
                    {notifications.length === 0 ? (
                      <p className="text-xs text-gray-400 text-center py-4">No new notifications.</p>
                    ) : (
                      <div className="space-y-3">
                        {notifications.map((n) => {
                          const Icon = n.icon
                          return (
                            <div key={n.id} className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: n.color + '1A' }}>
                                <Icon className="w-3.5 h-3.5" style={{ color: n.color }} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-[#2E2249] leading-snug">{n.text}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5">{n.time}</p>
                              </div>
                              {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-[#F0854D] mt-1.5 shrink-0" />}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h2 className="font-semibold text-[#2E2249] text-sm mb-4">Chat Support</h2>
                    {citizens.length === 0 ? (
                      <p className="text-xs text-gray-400 text-center py-2 mb-4">No households to chat with yet.</p>
                    ) : (
                      <div className="space-y-3 mb-4">
                        {citizens.slice(0, 3).map((c) => (
                          <button
                            key={c.id}
                            onClick={() => navigate(`/caretaker/chat/${c.id}`)}
                            className="flex items-center gap-2.5 w-full text-left"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#F0854D]/10 flex items-center justify-center text-[10px] font-semibold text-[#F0854D] shrink-0">
                              {initials(citizenName(c))}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-[#2E2249] truncate">{citizenName(c)}</p>
                              <p className="text-[11px] text-gray-400 truncate">Tap to view conversation</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                    <button
                      onClick={() => setActive('chat')}
                      className="w-full bg-gradient-to-r from-[#6B3FA0] to-[#F0854D] text-white text-sm font-medium rounded-full py-2.5 flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" /> Open Chat
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_0.85fr] gap-5 items-start">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h2 className="font-semibold text-[#2E2249] mb-4">Task Overview</h2>
                  {taskOverview.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-6">No tasks yet.</p>
                  ) : (
                    <div className="flex items-center gap-6">
                      <div className="relative w-32 h-32 shrink-0">
                        <PieChart width={128} height={128}>
                          <Pie data={taskOverview} dataKey="value" innerRadius={40} outerRadius={62} paddingAngle={2} stroke="none">
                            {taskOverview.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                          </Pie>
                        </PieChart>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <p className="text-[10px] text-gray-400">Total</p>
                          <p className="text-lg font-bold text-[#2E2249]">{taskTotal}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm flex-1">
                        {taskOverview.map((t) => (
                          <div key={t.name} className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: t.color }} />
                            <span className="text-gray-500 flex-1">{t.name}</span>
                            <span className="font-semibold text-[#2E2249]">{t.value}</span>
                            <span className="text-xs text-gray-400 w-10 text-right">({Math.round((t.value / taskTotal) * 100)}%)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h2 className="font-semibold text-[#2E2249] mb-5">Requests by Category</h2>
                  {categoryTotals.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-6">No requests yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {categoryTotals.map((c) => (
                        <div key={c.name} className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 w-24 shrink-0 truncate">{c.name}</span>
                          <div className="flex-1 h-2.5 rounded-full bg-gray-50">
                            <div className="h-full rounded-full" style={{ width: `${(c.value / categoryMax) * 100}%`, background: c.color }} />
                          </div>
                          <span className="text-xs font-semibold text-[#2E2249] w-5 text-right">{c.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h2 className="font-semibold text-[#2E2249] mb-1">Emergency Contact</h2>
                  <p className="text-xs text-gray-400 mb-4">Need immediate help?</p>
                  <div className="bg-[#FDEAEE] rounded-xl p-4 text-center mb-4">
                    <p className="text-[11px] font-medium text-[#E85D75] mb-1">Call Emergency Helpline</p>
                    <a href="tel:+911800123456" className="flex items-center justify-center gap-2 text-lg font-bold text-[#E85D75] mb-1">
                      <Phone className="w-4 h-4" /> 1800 123 4567
                    </a>
                    <p className="text-[11px] text-[#E85D75]/70">Available 24/7</p>
                  </div>
                  <button
                    onClick={() => setActive('emergency')}
                    className="w-full border border-gray-200 rounded-full py-2 text-sm font-medium text-gray-500 flex items-center justify-center gap-1.5 hover:bg-gray-50"
                  >
                    <Users className="w-4 h-4" /> View All Contacts
                  </button>
                </div>
              </div>
            </>
          )}

          {/* HOUSEHOLDS */}
          {active === 'households' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h2 className="font-semibold text-[#2E2249] mb-4">Assigned Households</h2>
              {citizens.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">No households assigned yet.</p>
              ) : (
                <div className="space-y-1">
                  {citizens.map((c) => (
                    <div key={c.id} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                      <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0] shrink-0">
                        {initials(citizenName(c))}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#2E2249]">{citizenName(c)}</p>
                        <p className="text-xs text-gray-400">
                          {citizenAge(c)} yrs · {c.mobile} · {c.plan?.name || c.selectedPlan?.name || 'No plan'}
                        </p>
                      </div>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0" style={{ background: '#F1EAFB', color: '#6B3FA0' }}>
                        {citizenCondition(c)}
                      </span>
                      <button
                        onClick={() => navigate(`/caretaker/chat/${c.id}`)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-[#6B3FA0] border border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 shrink-0"
                      >
                        <MessageCircle className="w-4 h-4" /> Chat
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* REQUESTS */}
          {active === 'requests' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h2 className="font-semibold text-[#2E2249] mb-4">All Requests</h2>
              {allRequests.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">No requests yet.</p>
              ) : (
                <div className="space-y-1">
                  {[...allRequests].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((r) => {
                    const meta = CATEGORY_META[r.category] || DEFAULT_META
                    const Icon = meta.icon
                    return (
                      <div key={r.id} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: meta.bg }}>
                          <Icon className="w-5 h-5" style={{ color: meta.color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-[#2E2249]">{r.category}</p>
                          <p className="text-xs text-gray-400">
                            {citizenName(citizens.find((c) => c.id === r.citizenId))} · {new Date(r.createdAt).toLocaleString()}
                          </p>
                          {r.note && <p className="text-xs text-gray-400 mt-0.5">{r.note}</p>}
                        </div>
                        <select
                          value={r.status}
                          onChange={(e) => handleUpdateStatus(r.id, r.citizenId, e.target.value)}
                          className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white focus:outline-none shrink-0"
                        >
                          <option value="pending">Pending</option>
                          <option value="accepted">Accepted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* CHAT */}
          {active === 'chat' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h2 className="font-semibold text-[#2E2249] mb-4">Chat Support</h2>
              {citizens.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">No households to chat with yet.</p>
              ) : (
                <div className="space-y-1">
                  {citizens.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => navigate(`/caretaker/chat/${c.id}`)}
                      className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 w-full text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#F0854D]/10 flex items-center justify-center text-sm font-semibold text-[#F0854D] shrink-0">
                        {initials(citizenName(c))}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#2E2249]">{citizenName(c)}</p>
                        <p className="text-xs text-gray-400">Tap to view conversation</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* HISTORY */}
          {active === 'history' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h2 className="font-semibold text-[#2E2249] mb-4">Task History</h2>
              {completedRequests.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">No completed tasks yet.</p>
              ) : (
                <div className="space-y-1">
                  {completedRequests.map((r) => (
                    <div key={r.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-[#2E2249]">
                          {r.category} — {citizenName(citizens.find((c) => c.id === r.citizenId))}
                        </p>
                        <p className="text-xs text-gray-400">{new Date(r.createdAt).toLocaleString()}</p>
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600">Completed</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* EMERGENCY */}
          {active === 'emergency' && (
            <div className="space-y-4">
              <div className="bg-[#FDEAEE] rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#E85D75]">ElderCare Emergency Line</p>
                  <p className="text-xs text-[#E85D75]/70">Available 24/7 for critical situations</p>
                </div>
                
                  <a href="tel:+911800123456"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#E85D75] hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>

              {citizens.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                  <p className="text-sm text-gray-400">No households assigned yet.</p>
                </div>
              ) : (
                citizens.map((c) => (
                  <div key={c.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#2E2249]">{citizenName(c)}</p>
                      <p className="text-xs text-gray-400">
                        Emergency contact: {c.profile?.emergencyContactName || c.profile?.emergencyContact || 'Not provided'}
                      </p>
                    </div>
                    
                      <a href={`tel:${c.mobile}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-[#6B3FA0] border border-[#6B3FA0]/30 hover:bg-[#6B3FA0]/5 transition-colors"
                    >
                      <Phone className="w-4 h-4" /> Call Household
                    </a>
                  </div>
                ))
              )}
            </div>
          )}

          <footer className="flex items-center justify-between text-xs text-gray-400 pt-2">
            <p>© 2026 ElderCare. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}


