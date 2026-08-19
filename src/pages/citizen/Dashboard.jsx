// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { X, Clock, CheckCircle2, Loader2, CircleDot } from 'lucide-react'
// import { getSession } from '../../data/db'
// import { getCitizenById } from '../../data/citizens'
// import { createRequest, getRequestsByCitizen } from '../../data/requests'
// import serviceCategories from '../../data/serviceCategories'

// const statusStyles = {
//   Pending: { bg: 'bg-orange-50', text: 'text-[#F0854D]', icon: Clock },
//   Accepted: { bg: 'bg-blue-50', text: 'text-blue-600', icon: CircleDot },
//   'In Progress': { bg: 'bg-[#6B3FA0]/10', text: 'text-[#6B3FA0]', icon: Loader2 },
//   Completed: { bg: 'bg-green-50', text: 'text-green-600', icon: CheckCircle2 },
// }

// function StatusBadge({ status }) {
//   const style = statusStyles[status] || statusStyles.Pending
//   const Icon = style.icon
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
//     >
//       <Icon className="w-3.5 h-3.5" />
//       {status}
//     </span>
//   )
// }

// function CitizenDashboard() {
//   const navigate = useNavigate()
//   const [citizen, setCitizen] = useState(null)
//   const [requests, setRequests] = useState([])
//   const [activeCategory, setActiveCategory] = useState(null)
//   const [note, setNote] = useState('')
//   const [justSubmitted, setJustSubmitted] = useState(false)

//   useEffect(() => {
//     const session = getSession()
//     if (!session || session.role !== 'citizen') {
//       navigate('/login')
//       return
//     }
//     const record = getCitizenById(session.id)
//     if (!record) {
//       navigate('/login')
//       return
//     }
//     setCitizen(record)
//     setRequests(getRequestsByCitizen(record.id))
//   }, [navigate])

//   const refreshRequests = (citizenId) => {
//     setRequests(getRequestsByCitizen(citizenId))
//   }

//   const handleRaiseRequest = (e) => {
//     e.preventDefault()
//     if (!citizen || !activeCategory) return
//     createRequest({
//       citizenId: citizen.id,
//       category: activeCategory.name,
//       note,
//     })
//     refreshRequests(citizen.id)
//     setNote('')
//     setActiveCategory(null)
//     setJustSubmitted(true)
//     setTimeout(() => setJustSubmitted(false), 3000)
//   }

//   if (!citizen) return null

//   const firstName = citizen.fullName?.split(' ')[0] || 'there'
//   const activeCount = requests.filter((r) => r.status !== 'Completed').length

//   return (
//     <div className="min-h-[80vh] bg-[#F5F0FA]/30 py-12 md:py-16">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
//           <div>
//             <p className="text-sm font-medium text-[#F0854D] mb-1">Welcome back</p>
//             <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
//               Hello, {firstName}
//             </h1>
//           </div>

//           <div className="flex gap-3">
//             <div className="bg-white rounded-2xl shadow-sm px-5 py-3 min-w-[130px]">
//               <p className="text-xs text-gray-400 mb-0.5">Your Plan</p>
//               <p className="text-sm font-semibold text-[#3D2A6D]">
//                 {citizen.plan?.name || 'Not selected'}
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl shadow-sm px-5 py-3 min-w-[130px]">
//               <p className="text-xs text-gray-400 mb-0.5">Active Requests</p>
//               <p className="text-sm font-semibold text-[#3D2A6D]">{activeCount}</p>
//             </div>
//           </div>
//         </div>

//         {!citizen.plan && (
//           <div className="bg-white rounded-2xl shadow-sm p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <p className="text-sm text-gray-500">
//               You haven't chosen a care plan yet. Pick one to unlock full support.
//             </p>
//             <button
//               onClick={() => navigate('/citizen/select-plan')}
//               className="px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity shrink-0"
//             >
//               Choose a Care Plan
//             </button>
//           </div>
//         )}

//         {justSubmitted && (
//           <div className="mb-6 px-5 py-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium">
//             Request sent — a caretaker or nurse will pick it up shortly.
//           </div>
//         )}

//         {/* Service categories */}
//         <section className="mb-12">
//           <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">Request a Service</h2>
//           <p className="text-sm text-gray-500 mb-6">
//             Pick a category and we'll route it to an available caretaker or nurse.
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {serviceCategories.map((category) => {
//               const Icon = category.icon
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category)}
//                   className="bg-white rounded-2xl shadow-sm p-5 text-left hover:shadow-md hover:-translate-y-0.5 transition-all group"
//                 >
//                   <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-4 group-hover:bg-[#6B3FA0] transition-colors">
//                     <Icon className="w-5 h-5 text-[#6B3FA0] group-hover:text-white transition-colors" />
//                   </div>
//                   <p className="text-sm font-semibold text-[#3D2A6D] leading-tight">
//                     {category.name}
//                   </p>
//                 </button>
//               )
//             })}
//           </div>
//         </section>

//         {/* My requests */}
//         <section>
//           <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">My Requests</h2>
//           <p className="text-sm text-gray-500 mb-6">Track the status of everything you've raised.</p>

//           {requests.length === 0 ? (
//             <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
//               <p className="text-sm text-gray-400">
//                 No requests yet — pick a category above to raise your first one.
//               </p>
//             </div>
//           ) : (
//             <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
//               {requests.map((request) => (
//                 <div
//                   key={request.id}
//                   className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
//                 >
//                   <div>
//                     <p className="text-sm font-semibold text-[#3D2A6D]">{request.category}</p>
//                     {request.note && (
//                       <p className="text-xs text-gray-400 mt-0.5">{request.note}</p>
//                     )}
//                     <p className="text-xs text-gray-300 mt-1">
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                   <StatusBadge status={request.status} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </div>

//       {/* Raise-request modal */}
//       {activeCategory && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
//           <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 md:p-8 relative">
//             <button
//               onClick={() => setActiveCategory(null)}
//               className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
//               <activeCategory.icon className="w-5 h-5 text-[#6B3FA0]" />
//             </div>

//             <h3 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
//               Request {activeCategory.name}
//             </h3>
//             <p className="text-sm text-gray-400 mb-6">{activeCategory.description}</p>

//             <form onSubmit={handleRaiseRequest} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
//                   Add details (optional)
//                 </label>
//                 <textarea
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                   rows={3}
//                   placeholder="e.g. Preferred time, specific needs..."
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30 resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
//               >
//                 Send Request
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CitizenDashboard















import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Clock, CheckCircle2, Loader2, CircleDot } from 'lucide-react'
import { getSession } from '../../data/db'
import { getCitizenById } from '../../data/citizens'
import { getCaretakerById } from '../../data/caretakers'
import { createRequest, getRequestsByCitizen } from '../../data/requests'
import serviceCategories from '../../data/serviceCategories'
import plans from '../../data/plans'

const statusStyles = {
  Pending: { bg: 'bg-orange-50', text: 'text-[#F0854D]', icon: Clock },
  Accepted: { bg: 'bg-blue-50', text: 'text-blue-600', icon: CircleDot },
  'In Progress': { bg: 'bg-[#6B3FA0]/10', text: 'text-[#6B3FA0]', icon: Loader2 },
  Completed: { bg: 'bg-green-50', text: 'text-green-600', icon: CheckCircle2 },
}

function StatusBadge({ status }) {
  const style = statusStyles[status] || statusStyles.Pending
  const Icon = style.icon
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {status}
    </span>
  )
}

function CitizenDashboard() {
  const navigate = useNavigate()
  const [citizen, setCitizen] = useState(null)
  const [caretaker, setCaretaker] = useState(null)
  const [requests, setRequests] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [note, setNote] = useState('')
  const [justSubmitted, setJustSubmitted] = useState(false)

  useEffect(() => {
    const session = getSession()
    if (!session || session.role !== 'citizen') {
      navigate('/login')
      return
    }
    const record = getCitizenById(session.id)
    if (!record) {
      navigate('/login')
      return
    }
    setCitizen(record)
    setRequests(getRequestsByCitizen(record.id))
    if (record.assignedCaretakerId) {
      setCaretaker(getCaretakerById(record.assignedCaretakerId))
    }
  }, [navigate])

  const refreshRequests = (citizenId) => {
    setRequests(getRequestsByCitizen(citizenId))
  }

  const handleRaiseRequest = (e) => {
    e.preventDefault()
    if (!citizen || !activeCategory) return
    createRequest({
      citizenId: citizen.id,
      caretakerId: activeCategory.id === 'complaint' ? null : citizen.assignedCaretakerId,
      category: activeCategory.name,
      note,
      targetRole: activeCategory.id === 'complaint' ? 'admin' : 'caretaker',
    })
    refreshRequests(citizen.id)
    setNote('')
    setActiveCategory(null)
    setJustSubmitted(true)
    setTimeout(() => setJustSubmitted(false), 3000)
  }

  if (!citizen) return null

  const firstName = citizen.fullName?.split(' ')[0] || citizen.profile?.fullName?.split(' ')[0] || 'there'
  const activeCount = requests.filter((r) => r.status !== 'Completed').length

  return (
    <div className="min-h-[80vh] bg-[#F5F0FA]/30 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-medium text-[#F0854D] mb-1">Welcome back</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2A6D]">
              Hello, {firstName}
            </h1>
          </div>

          <div className="flex gap-3">
            <div className="bg-white rounded-2xl shadow-sm px-5 py-3 min-w-[130px]">
              <p className="text-xs text-gray-400 mb-0.5">Your Plan</p>
              <p className="text-sm font-semibold text-[#3D2A6D]">
                {citizen.plan?.name || 'Not selected'}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm px-5 py-3 min-w-[130px]">
              <p className="text-xs text-gray-400 mb-0.5">Active Requests</p>
              <p className="text-sm font-semibold text-[#3D2A6D]">{activeCount}</p>
            </div>
          </div>
        </div>

        {!citizen.plan && (
          <div className="bg-white rounded-2xl shadow-sm p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              You haven't chosen a care plan yet. Pick one to unlock full support.
            </p>
            <button
              onClick={() => navigate('/citizen/select-plan')}
              className="px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity shrink-0"
            >
              Choose a Care Plan
            </button>
          </div>
        )}

        {caretaker && (
          <div className="bg-white rounded-2xl shadow-sm p-5 mb-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
                {(caretaker.fullName || caretaker.profile?.fullName || '?').charAt(0)}
              </div>
              <div>
                <p className="text-xs text-gray-400">Your Assigned Caretaker</p>
                <p className="text-sm font-semibold text-[#3D2A6D]">
                  {caretaker.fullName || caretaker.profile?.fullName}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/citizen/chat')}
              className="px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
            >
              Open Chat
            </button>
          </div>
        )}

        {citizen.plan && (() => {
  const planDetails = plans.find((p) => p.id === citizen.plan.id)
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-gray-400">Your Care Plan</p>
          <p className="text-lg font-semibold text-[#3D2A6D]">{citizen.plan.name}</p>
        </div>
        <span className="text-sm font-semibold text-[#F0854D]">
          {citizen.plan.price === 0 ? 'Free' : `₹${citizen.plan.price?.toLocaleString()}/mo`}
        </span>
      </div>
      {planDetails?.features && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {planDetails.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B3FA0] mt-1.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})()}

        {justSubmitted && (
          <div className="mb-6 px-5 py-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium">
            Request sent — a caretaker or nurse will pick it up shortly.
          </div>
        )}

        {/* Service categories */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">Request a Service</h2>
          <p className="text-sm text-gray-500 mb-6">
            Pick a category and we'll route it to an available caretaker or nurse.
          </p>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"> */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    if (category.external) {
                      window.open('https://www.uber.com', '_blank')
                      return
                    }
                    setActiveCategory(category)
                  }}
                  className="bg-white rounded-2xl shadow-sm p-5 text-left hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-4 group-hover:bg-[#6B3FA0] transition-colors">
                    <Icon className="w-5 h-5 text-[#6B3FA0] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-[#3D2A6D] leading-tight">
                    {category.name}
                  </p>
                </button>
              )
            })}
          </div>
        </section>

        {/* My requests */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#3D2A6D] mb-1">My Requests</h2>
          <p className="text-sm text-gray-500 mb-6">Track the status of everything you've raised.</p>

          {requests.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
              <p className="text-sm text-gray-400">
                No requests yet — pick a category above to raise your first one.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#3D2A6D]">{request.category}</p>
                    {request.note && (
                      <p className="text-xs text-gray-400 mt-0.5">{request.note}</p>
                    )}
                    <p className="text-xs text-gray-300 mt-1">
                      {new Date(request.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <StatusBadge status={request.status} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Raise-request modal */}
      {activeCategory && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 md:p-8 relative">
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
              <activeCategory.icon className="w-5 h-5 text-[#6B3FA0]" />
            </div>

            <h3 className="font-serif text-xl font-bold text-[#3D2A6D] mb-1">
              Request {activeCategory.name}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{activeCategory.description}</p>

            <form onSubmit={handleRaiseRequest} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
                  Add details (optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="e.g. Preferred time, specific needs..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CitizenDashboard