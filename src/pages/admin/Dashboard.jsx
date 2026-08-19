// import {
//   Users, HeartHandshake, ClipboardList, ClipboardCheck, ArrowUp, ArrowDown,
//   Clock, UserPlus, CalendarPlus, BarChart3, Star,
// } from 'lucide-react'
// import {
//   LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell,
//   BarChart, Bar, XAxis, YAxis, Tooltip,
// } from 'recharts'
// import {
//   dashboardStats, bookingOverview, bookingsByService,
//   citizensByAge, bookingsStatus, topCaretakers, recentActivity,
// } from '../../data/adminDashboard'
// import heroImage from '../../assets/images/about.png'

// const iconMap = { Users, HeartHandshake, ClipboardList, ClipboardCheck }

// const colorMap = {
//   purple: { bg: 'bg-[#6B3FA0]/10', text: 'text-[#6B3FA0]', line: '#6B3FA0' },
//   orange: { bg: 'bg-[#F0854D]/10', text: 'text-[#F0854D]', line: '#F0854D' },
//   blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', line: '#3F6FBF' },
//   pink: { bg: 'bg-pink-500/10', text: 'text-pink-500', line: '#D9527A' },
// }

// function StatCard({ stat }) {
//   const Icon = iconMap[stat.icon]
//   const colors = colorMap[stat.color]
//   const sparkData = stat.sparkline.map((v, i) => ({ i, v }))

//   return (
//     <div className={`rounded-xl p-5 ${colors.bg}`}>
//       <div className="flex items-center justify-between mb-3">
//         <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center`}>
//           <Icon className={`w-5 h-5 ${colors.text}`} />
//         </div>
//       </div>
//       <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
//       <p className="text-2xl font-semibold text-[#3D2A6D] mb-2">{stat.value}</p>
//       <div className="flex items-center justify-between">
//         <span className={`flex items-center gap-1 text-xs font-medium ${
//           stat.trend === 'up' ? 'text-green-600' : 'text-red-500'
//         }`}>
//           {stat.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
//           {stat.change} vs last week
//         </span>
//         <div className="w-16 h-8">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={sparkData}>
//               <Line type="monotone" dataKey="v" stroke={colors.line} strokeWidth={2} dot={false} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   )
// }

// function DonutCard({ title, data, filter }) {
//   const total = data.reduce((sum, d) => sum + d.value, 0)
//   return (
//     <div className="bg-white rounded-xl border border-gray-100 p-5">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-sm font-semibold text-[#3D2A6D]">{title}</h2>
//         {filter && (
//           <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
//             {filter}
//           </span>
//         )}
//       </div>
//       <div className="flex items-center gap-4">
//         <div className="relative w-32 h-32 shrink-0">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie data={data} dataKey="value" innerRadius={38} outerRadius={58} paddingAngle={2}>
//                 {data.map((entry) => (
//                   <Cell key={entry.name} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//             <span className="text-xs text-gray-400">Total</span>
//             <span className="text-lg font-semibold text-[#3D2A6D]">{total}</span>
//           </div>
//         </div>
//         <div className="flex-1 space-y-2">
//           {data.map((entry) => (
//             <div key={entry.name} className="flex items-center justify-between text-xs">
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
//                 {entry.name}
//               </span>
//               <span className="font-medium text-[#3D2A6D]">
//                 {entry.value} ({((entry.value / total) * 100).toFixed(1)}%)
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// function Dashboard() {
//   return (
//     <div>
//       {/* Welcome banner */}
//       <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-[#FDE9DC] to-[#F5E3F5] p-6 flex items-center justify-between gap-6">
//         <div>
//           <h1 className="text-2xl font-semibold text-[#3D2A6D] mb-1">
//             Good Morning, Admin! 👋
//           </h1>
//           <p className="text-sm text-gray-500">
//             Let's make today a <span className="text-[#F0854D] font-medium">better day</span> for our elders.
//           </p>
//         </div>
//         <div className="hidden lg:block bg-white/80 backdrop-blur rounded-xl px-5 py-4 max-w-xs shrink-0">
//           <p className="text-sm text-[#3D2A6D] italic leading-snug">
//             "Care is not just what we do, it's who we are."
//           </p>
//         </div>
//       </div>

//       {/* Stat cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {dashboardStats.map((stat) => (
//           <StatCard key={stat.label} stat={stat} />
//         ))}
//       </div>

//       {/* Booking Overview + Bookings by Service */}
//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
//         <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 p-5">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-sm font-semibold text-[#3D2A6D]">Booking Overview</h2>
//             <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">This Week</span>
//           </div>
//           <div className="flex items-center gap-4 mb-2 text-xs text-gray-500">
//             <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#6B3FA0]" /> New Bookings</span>
//             <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F0854D]" /> Completed Bookings</span>
//           </div>
//           <div className="h-56">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={bookingOverview}>
//                 <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="newBookings" stroke="#6B3FA0" strokeWidth={2.5} dot={{ r: 3 }} />
//                 <Line type="monotone" dataKey="completed" stroke="#F0854D" strokeWidth={2.5} dot={{ r: 3 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="lg:col-span-2">
//           <DonutCard title="Bookings by Service" data={bookingsByService} />
//         </div>
//       </div>

//       {/* Age group + status + top caretakers + activity */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white rounded-xl border border-gray-100 p-5">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-sm font-semibold text-[#3D2A6D]">Citizens by Age Group</h2>
//             <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">This Week</span>
//           </div>
//           <div className="h-48">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={citizensByAge}>
//                 <XAxis dataKey="group" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
//                 <Tooltip />
//                 <Bar dataKey="count" radius={[6, 6, 0, 0]}>
//                   {citizensByAge.map((entry, i) => (
//                     <Cell key={entry.group} fill={['#6B3FA0', '#F0854D', '#D9527A', '#3F6FBF'][i % 4]} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <DonutCard title="Bookings Status" data={bookingsStatus} />

//         <div className="bg-white rounded-xl border border-gray-100 p-5">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-sm font-semibold text-[#3D2A6D]">Top Caretakers</h2>
//             <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">This Week</span>
//           </div>
//           <div className="space-y-3">
//             {topCaretakers.map((c) => (
//               <div key={c.id} className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
//                     {c.name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-[#3D2A6D]">{c.name}</p>
//                     <p className="text-xs text-gray-400">{c.bookings} Bookings</p>
//                   </div>
//                 </div>
//                 <span className="flex items-center gap-1 text-xs font-medium text-[#3D2A6D]">
//                   <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
//                   {c.rating}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity + Quick Actions */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl border border-gray-100 p-5">
//           <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">Recent Activity</h2>
//           <div className="space-y-4">
//             {recentActivity.map((activity) => (
//               <div key={activity.id} className="flex items-start gap-3">
//                 <div className="w-7 h-7 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center shrink-0 mt-0.5">
//                   <Clock className="w-3.5 h-3.5 text-[#6B3FA0]" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#3D2A6D] leading-snug">{activity.text}</p>
//                   <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-xl border border-gray-100 p-5">
//           <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">Quick Actions</h2>
//           <div className="grid grid-cols-2 gap-3">
//             <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#6B3FA0]/10 text-[#6B3FA0] text-sm font-medium hover:bg-[#6B3FA0]/20 transition-colors">
//               <UserPlus className="w-4 h-4" /> Add Citizen
//             </button>
//             <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#F0854D]/10 text-[#F0854D] text-sm font-medium hover:bg-[#F0854D]/20 transition-colors">
//               <UserPlus className="w-4 h-4" /> Add Caretaker
//             </button>
//             <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-500/10 text-blue-600 text-sm font-medium hover:bg-blue-500/20 transition-colors">
//               <CalendarPlus className="w-4 h-4" /> New Booking
//             </button>
//             <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/10 text-green-600 text-sm font-medium hover:bg-green-500/20 transition-colors">
//               <BarChart3 className="w-4 h-4" /> View Reports
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

















import { useEffect, useState } from 'react'
import {
  Users,
  HeartHandshake,
  ClipboardList,
  ClipboardCheck,
  ArrowUp,
  ArrowDown,
  Clock,
  UserPlus,
  CalendarPlus,
  BarChart3,
  Home as HomeIcon,
  ShoppingCart,
  Car,
  Pill,
  AlertTriangle,
  LayoutDashboard,
  CreditCard,
  FileText,
  Megaphone,
  LogOut,
  Heart,
  CheckCircle2,
  XCircle,
  Search,
  UserCheck,
} from 'lucide-react'
import {
  LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts'
import { getAllCitizens } from '../../data/citizens'
import { getAllCaretakers } from '../../data/caretakers'
import { getRequestsByCitizen } from '../../data/requests'
import DashboardSidebar from '../../components/layout/DashboardSidebar'

const colorMap = {
  purple: { bg: 'bg-[#6B3FA0]/10', text: 'text-[#6B3FA0]', line: '#6B3FA0' },
  orange: { bg: 'bg-[#F0854D]/10', text: 'text-[#F0854D]', line: '#F0854D' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', line: '#3F6FBF' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-500', line: '#D9527A' },
}

const CATEGORY_META = {
  Medical: { icon: Pill, color: '#6B3FA0' },
  Housing: { icon: HomeIcon, color: '#3F6FBF' },
  Grocery: { icon: ShoppingCart, color: '#22A06B' },
  Transport: { icon: Car, color: '#F0854D' },
  Complaint: { icon: AlertTriangle, color: '#D9527A' },
}
const DEFAULT_CATEGORY_COLOR = '#6B3FA0'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'citizens', label: 'Citizens', icon: Users },
  { id: 'caretakers', label: 'Caretakers', icon: HeartHandshake },
  { id: 'approvals', label: 'Approvals', icon: ClipboardCheck },
  { id: 'bookings', label: 'Bookings', icon: ClipboardList },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'cms', label: 'CMS', icon: Megaphone },
]

const STATUS_META = {
  pending: { label: 'Pending', color: '#F0854D' },
  accepted: { label: 'Accepted', color: '#3F6FBF' },
  in_progress: { label: 'In Progress', color: '#3F6FBF' },
  completed: { label: 'Completed', color: '#22A06B' },
}

const DAY_MS = 24 * 60 * 60 * 1000

function getTime(item, field = 'createdAt') {
  const t = new Date(item?.[field]).getTime()
  return Number.isFinite(t) ? t : null
}

// Count items created in the last 7 days vs the 7 days before that.
function weekTrend(items, field = 'createdAt') {
  const now = Date.now()
  let current = 0
  let prev = 0
  items.forEach((it) => {
    const t = getTime(it, field)
    if (t === null) return
    if (t >= now - DAY_MS * 7) current++
    else if (t >= now - DAY_MS * 14) prev++
  })
  if (prev === 0) {
    return current > 0
      ? { label: `+${current} this week`, trend: 'up' }
      : { label: 'No change', trend: 'up' }
  }
  const pct = Math.round(((current - prev) / prev) * 100)
  return { label: `${pct >= 0 ? '+' : ''}${pct}% vs last week`, trend: pct >= 0 ? 'up' : 'down' }
}

// Daily counts for the last `days` days, oldest first — used for sparklines/trend chart.
function dailySeries(items, days = 8, field = 'createdAt') {
  const now = Date.now()
  const buckets = Array.from({ length: days }, (_, i) => {
    const dayStart = now - (days - 1 - i) * DAY_MS
    return { start: Math.floor(dayStart / DAY_MS) * DAY_MS, count: 0 }
  })
  items.forEach((it) => {
    const t = getTime(it, field)
    if (t === null) return
    const dayKey = Math.floor(t / DAY_MS) * DAY_MS
    const bucket = buckets.find((b) => b.start === dayKey)
    if (bucket) bucket.count++
  })
  return buckets.map((b) => b.count)
}

function timeAgo(dateStr) {
  const t = new Date(dateStr).getTime()
  if (!Number.isFinite(t)) return ''
  const diff = Date.now() - t
  const hrs = Math.floor(diff / (60 * 60 * 1000))
  if (hrs < 1) return 'Just now'
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? '' : 's'} ago`
  const days = Math.floor(hrs / 24)
  return `${days} day${days === 1 ? '' : 's'} ago`
}

function StatCard({ icon: Icon, color, label, value, change, trend, sparkline }) {
  const colors = colorMap[color]
  const sparkData = sparkline.map((v, i) => ({ i, v }))
  return (
    <div className={`rounded-xl p-5 ${colors.bg}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-[#3D2A6D] mb-2">{value}</p>
      <div className="flex items-center justify-between">
        <span className={`flex items-center gap-1 text-xs font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
          {trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {change}
        </span>
        <div className="w-16 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparkData}>
              <Line type="monotone" dataKey="v" stroke={colors.line} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function DonutCard({ title, data, filter }) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-[#3D2A6D]">{title}</h2>
        {filter && (
          <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">{filter}</span>
        )}
      </div>
      {total === 0 ? (
        <p className="text-sm text-gray-400 text-center py-8">No data yet.</p>
      ) : (
        <div className="flex items-center gap-4">
          <div className="relative w-32 h-32 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" innerRadius={38} outerRadius={58} paddingAngle={2}>
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-gray-400">Total</span>
              <span className="text-lg font-semibold text-[#3D2A6D]">{total}</span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {data.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-gray-500">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                  {entry.name}
                </span>
                <span className="font-medium text-[#3D2A6D]">
                  {entry.value} ({((entry.value / total) * 100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Dashboard() {
  const [active, setActive] = useState('dashboard')

  const [citizens, setCitizens] = useState([])
  const [caretakers, setCaretakers] = useState([])
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const allCitizens = getAllCitizens()

    setCitizens(allCitizens)
    setCaretakers(getAllCaretakers())

    setRequests(
      allCitizens.flatMap((c) =>
        getRequestsByCitizen(c.id).map((r) => ({
          ...r,
          citizenId: c.id,
        }))
      )
    )
  }, [])


  function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-[#3D2A6D]">
        {title}
      </h1>

      <p className="text-sm text-gray-400 mt-1">
        {subtitle}
      </p>
    </div>
  )
}

function EmptyPage({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 min-h-[400px] flex flex-col items-center justify-center text-center p-8">
      <div className="w-16 h-16 rounded-2xl bg-[#6B3FA0]/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-[#6B3FA0]" />
      </div>

      <h2 className="text-xl font-semibold text-[#2E2249]">
        {title}
      </h2>

      <p className="text-sm text-gray-400 mt-2 max-w-sm">
        {description}
      </p>
    </div>
  )
}

  const pendingCaretakers = caretakers.filter((c) => c.status === 'pending')
  const activeBookings = requests.filter((r) => r.status !== 'completed')

  const citizenTrend = weekTrend(citizens)
  const caretakerTrend = weekTrend(caretakers)
  const bookingTrend = weekTrend(requests)

  const dashboardStats = [
    {
      icon: Users, color: 'purple', label: 'Total Citizens', value: citizens.length,
      change: citizenTrend.label, trend: citizenTrend.trend, sparkline: dailySeries(citizens),
    },
    {
      icon: HeartHandshake, color: 'orange', label: 'Total Caretakers', value: caretakers.length,
      change: caretakerTrend.label, trend: caretakerTrend.trend, sparkline: dailySeries(caretakers),
    },
    {
      icon: ClipboardList, color: 'blue', label: 'Active Bookings', value: activeBookings.length,
      change: bookingTrend.label, trend: bookingTrend.trend, sparkline: dailySeries(requests),
    },
    {
      icon: ClipboardCheck, color: 'pink', label: 'Pending Approvals', value: pendingCaretakers.length,
      change: 'Awaiting review', trend: pendingCaretakers.length > 0 ? 'down' : 'up',
      sparkline: dailySeries(pendingCaretakers),
    },
  ]

  // Booking Overview: new requests vs. requests now completed, by creation day (last 7 days)
  const bookingOverview = Array.from({ length: 7 }, (_, i) => {
    const dayStart = Math.floor((Date.now() - (6 - i) * DAY_MS) / DAY_MS) * DAY_MS
    const dayEnd = dayStart + DAY_MS
    const dayReqs = requests.filter((r) => {
      const t = getTime(r)
      return t !== null && t >= dayStart && t < dayEnd
    })
    return {
      day: new Date(dayStart).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      newBookings: dayReqs.length,
      completed: dayReqs.filter((r) => r.status === 'completed').length,
    }
  })

  // Bookings by Service (category)
  const categoryNames = [...new Set(requests.map((r) => r.category))]
  const bookingsByService = categoryNames
    .map((name) => ({
      name,
      value: requests.filter((r) => r.category === name).length,
      color: (CATEGORY_META[name] || {}).color || DEFAULT_CATEGORY_COLOR,
    }))
    .sort((a, b) => b.value - a.value)

  
  const ageBuckets = { '0-40': 0, '41-60': 0, '61-80': 0, '80+': 0, Unknown: 0 }
  citizens.forEach((c) => {
    const age = Number(c.profile?.age ?? c.age)
    if (!Number.isFinite(age)) ageBuckets.Unknown++
    else if (age <= 40) ageBuckets['0-40']++
    else if (age <= 60) ageBuckets['41-60']++
    else if (age <= 80) ageBuckets['61-80']++
    else ageBuckets['80+']++
  })
  const citizensByAge = Object.entries(ageBuckets)
    .filter(([, count]) => count > 0)
    .map(([group, count]) => ({ group, count }))

  // Bookings Status
  const bookingsStatus = Object.entries(STATUS_META)
    .map(([key, meta]) => ({
      name: meta.label,
      value: requests.filter((r) => r.status === key).length,
      color: meta.color,
    }))
    .filter((s) => s.value > 0)

  // Top Caretakers, ranked by number of requests handled across their assigned households
  const topCaretakers = caretakers
    .map((ct) => {
      const households = citizens.filter((c) => c.assignedCaretakerId === ct.id)
      const householdIds = new Set(households.map((c) => c.id))
      const bookings = requests.filter((r) => householdIds.has(r.citizenId)).length
      const name = ct.fullName || ct.profile?.fullName || 'Unnamed'
      return { id: ct.id, name, bookings }
    })
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 5)

  // Recent Activity, merged from citizens, caretakers, and completed requests
  const recentActivity = [
    ...citizens.map((c) => ({
      id: `citizen-${c.id}`,
      text: `New citizen registration — ${c.fullName || c.profile?.fullName || 'Unknown'}`,
      time: c.createdAt,
    })),
    ...caretakers.map((ct) => ({
      id: `caretaker-${ct.id}`,
      text: `Caretaker application ${ct.status === 'pending' ? 'submitted' : ct.status} — ${ct.fullName || ct.profile?.fullName || 'Unknown'}`,
      time: ct.createdAt,
    })),
    ...requests
      .filter((r) => r.status === 'completed')
      .map((r) => {
        const citizen = citizens.find((c) => c.id === r.citizenId)
        return {
          id: `request-${r.id}`,
          text: `${r.category} request completed — ${citizen?.fullName || citizen?.profile?.fullName || 'Unknown'}`,
          time: r.createdAt,
        }
      }),
  ]
    .filter((a) => getTime(a, 'time') !== null)
    .sort((a, b) => getTime(b, 'time') - getTime(a, 'time'))
    .slice(0, 6)

  return (
  <div className="min-h-screen bg-[#F7F7FB] flex">
  <div className="w-[272px] shrink-0" />

    <DashboardSidebar
  navItems={NAV_ITEMS.map((item) => ({
    ...item,
    badge: item.id === 'approvals' ? pendingCaretakers.length : 0,
  }))}
  activeId={active}
  onNavigate={setActive}
  onSignOut={() => (window.location.href = '/login')}
  subtitle="Admin Panel"
/>

    <div className="flex-1 min-w-0 flex flex-col">

      {/* Topbar */}
      <header className="h-[76px] bg-white border-b border-gray-100 px-8 flex items-center justify-between shrink-0">
        <div>
          <p className="text-sm text-gray-400">
            Welcome back, Admin
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#6B3FA0]">
            <Search className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-bold text-[#6B3FA0]">
              A
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-[#2E2249]">
                Admin
              </p>
              <p className="text-[11px] text-gray-400">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">

        {active === 'dashboard' && (
          <div>

            {/* Welcome banner */}
            <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-[#FDE9DC] to-[#F5E3F5] p-6 flex items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl font-semibold text-[#3D2A6D] mb-1">
                  Good Morning, Admin! 👋
                </h1>

                <p className="text-sm text-gray-500">
                  Let's make today a{' '}
                  <span className="text-[#F0854D] font-medium">
                    better day
                  </span>{' '}
                  for our elders.
                </p>
              </div>

              <div className="hidden lg:block bg-white/80 backdrop-blur rounded-xl px-5 py-4 max-w-xs shrink-0">
                <p className="text-sm text-[#3D2A6D] italic leading-snug">
                  "Care is not just what we do, it's who we are."
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {dashboardStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Booking Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
              <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-[#3D2A6D]">
                    Booking Overview
                  </h2>

                  <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                    This Week
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#6B3FA0]" />
                    New Bookings
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F0854D]" />
                    Completed Bookings
                  </span>
                </div>

                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bookingOverview}>
                      <XAxis
                        dataKey="day"
                        tick={{ fontSize: 11, fill: '#9CA3AF' }}
                        axisLine={false}
                        tickLine={false}
                      />

                      <YAxis
                        tick={{ fontSize: 11, fill: '#9CA3AF' }}
                        axisLine={false}
                        tickLine={false}
                        allowDecimals={false}
                      />

                      <Tooltip />

                      <Line
                        type="monotone"
                        dataKey="newBookings"
                        stroke="#6B3FA0"
                        strokeWidth={2.5}
                        dot={{ r: 3 }}
                      />

                      <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="#F0854D"
                        strokeWidth={2.5}
                        dot={{ r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="lg:col-span-2">
                <DonutCard
                  title="Bookings by Service"
                  data={bookingsByService}
                />
              </div>
            </div>

            {/* Other charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-[#3D2A6D]">
                    Citizens by Age Group
                  </h2>
                </div>

                {citizensByAge.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-8">
                    No citizens yet.
                  </p>
                ) : (
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={citizensByAge}>
                        <XAxis
                          dataKey="group"
                          tick={{ fontSize: 11, fill: '#9CA3AF' }}
                          axisLine={false}
                          tickLine={false}
                        />

                        <YAxis
                          tick={{ fontSize: 11, fill: '#9CA3AF' }}
                          axisLine={false}
                          tickLine={false}
                          allowDecimals={false}
                        />

                        <Tooltip />

                        <Bar
                          dataKey="count"
                          radius={[6, 6, 0, 0]}
                        >
                          {citizensByAge.map((entry, i) => (
                            <Cell
                              key={entry.group}
                              fill={
                                [
                                  '#6B3FA0',
                                  '#F0854D',
                                  '#D9527A',
                                  '#3F6FBF',
                                  '#9CA3AF',
                                ][i % 5]
                              }
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

              <DonutCard
                title="Bookings Status"
                data={bookingsStatus}
              />

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">
                  Top Caretakers
                </h2>

                {topCaretakers.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-8">
                    No caretakers yet.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {topCaretakers.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
                            {c.name.charAt(0)}
                          </div>

                          <p className="text-sm font-medium text-[#3D2A6D]">
                            {c.name}
                          </p>
                        </div>

                        <span className="text-xs font-medium text-[#3D2A6D]">
                          {c.bookings} Bookings
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Recent Activity + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">
                  Recent Activity
                </h2>

                {recentActivity.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-8">
                    Nothing to show yet.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-[#6B3FA0]" />
                        </div>

                        <div>
                          <p className="text-sm text-[#3D2A6D]">
                            {activity.text}
                          </p>

                          <p className="text-xs text-gray-400 mt-0.5">
                            {timeAgo(activity.time)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">
                  Quick Actions
                </h2>

                <div className="grid grid-cols-2 gap-3">

                  <button
                    onClick={() => setActive('citizens')}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#6B3FA0]/10 text-[#6B3FA0] text-sm font-medium hover:bg-[#6B3FA0]/20"
                  >
                    <UserPlus className="w-4 h-4" />
                    Add Citizen
                  </button>

                  <button
                    onClick={() => setActive('caretakers')}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#F0854D]/10 text-[#F0854D] text-sm font-medium hover:bg-[#F0854D]/20"
                  >
                    <UserPlus className="w-4 h-4" />
                    Add Caretaker
                  </button>

                  <button
                    onClick={() => setActive('bookings')}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-500/10 text-blue-600 text-sm font-medium hover:bg-blue-500/20"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    New Booking
                  </button>

                  <button
                    onClick={() => setActive('reports')}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/10 text-green-600 text-sm font-medium hover:bg-green-500/20"
                  >
                    <BarChart3 className="w-4 h-4" />
                    View Reports
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            CITIZENS
        ====================================================== */}
        {active === 'citizens' && (
          <div>
            <PageHeader
              title="Citizens"
              subtitle="Manage all registered citizens"
            />

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {citizens.length === 0 ? (
                <p className="text-center text-gray-400 py-12">
                  No citizens registered yet.
                </p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {citizens.map((citizen) => {
                    const name =
                      citizen.fullName ||
                      citizen.profile?.fullName ||
                      'Unknown Citizen'

                    return (
                      <div
                        key={citizen.id}
                        className="flex items-center justify-between gap-4 p-5 hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 text-[#6B3FA0] flex items-center justify-center font-semibold">
                            {name.charAt(0).toUpperCase()}
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-[#2E2249]">
                              {name}
                            </h3>

                            <p className="text-xs text-gray-400 mt-1">
                              {citizen.mobile || 'No mobile number'}
                            </p>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                          Active
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================
            CARETAKERS
        ====================================================== */}
        {active === 'caretakers' && (
          <div>
            <PageHeader
              title="Caretakers"
              subtitle="Manage caretaker accounts and assignments"
            />

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {caretakers.length === 0 ? (
                <p className="text-center text-gray-400 py-12">
                  No caretakers found.
                </p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {caretakers.map((caretaker) => {
                    const name =
                      caretaker.fullName ||
                      caretaker.profile?.fullName ||
                      'Unnamed Caretaker'

                    return (
                      <div
                        key={caretaker.id}
                        className="flex items-center justify-between gap-4 p-5 hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#F0854D]/10 text-[#F0854D] flex items-center justify-center font-semibold">
                            {name.charAt(0).toUpperCase()}
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-[#2E2249]">
                              {name}
                            </h3>

                            <p className="text-xs text-gray-400 mt-1">
                              {caretaker.mobile || caretaker.email || 'No contact'}
                            </p>
                          </div>
                        </div>

                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          caretaker.status === 'pending'
                            ? 'bg-orange-50 text-[#F0854D]'
                            : 'bg-green-50 text-green-600'
                        }`}>
                          {caretaker.status || 'Active'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================
            APPROVALS
        ====================================================== */}
        {active === 'approvals' && (
          <div>
            <PageHeader
              title="Pending Approvals"
              subtitle="Review caretaker applications awaiting approval"
            />

            <div className="space-y-3">
              {pendingCaretakers.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-green-500 mb-3" />
                  <h3 className="font-semibold text-[#2E2249]">
                    All caught up!
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    There are no pending approvals.
                  </p>
                </div>
              ) : (
                pendingCaretakers.map((caretaker) => {
                  const name =
                    caretaker.fullName ||
                    caretaker.profile?.fullName ||
                    'Unnamed Caretaker'

                  return (
                    <div
                      key={caretaker.id}
                      className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between"
                    >
                      <div>
                        <h3 className="font-semibold text-[#2E2249]">
                          {name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Awaiting approval
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-lg bg-green-50 text-green-600 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 inline mr-1" />
                          Approve
                        </button>

                        <button className="px-4 py-2 rounded-lg bg-red-50 text-red-500 text-sm font-medium">
                          <XCircle className="w-4 h-4 inline mr-1" />
                          Reject
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}

        {/* =====================================================
            BOOKINGS
        ====================================================== */}
        {active === 'bookings' && (
          <div>
            <PageHeader
              title="Bookings"
              subtitle="View and manage all service requests"
            />

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {requests.length === 0 ? (
                <p className="text-center text-gray-400 py-12">
                  No bookings found.
                </p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {requests.map((request) => {
                    const citizen = citizens.find(
                      (c) => c.id === request.citizenId
                    )

                    const citizenName =
                      citizen?.fullName ||
                      citizen?.profile?.fullName ||
                      'Unknown Citizen'

                    return (
                      <div
                        key={request.id}
                        className="p-5 flex items-center justify-between gap-4 hover:bg-gray-50"
                      >
                        <div>
                          <h3 className="text-sm font-semibold text-[#2E2249]">
                            {request.category || 'Service Request'}
                          </h3>

                          <p className="text-xs text-gray-400 mt-1">
                            {citizenName}
                          </p>
                        </div>

                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#6B3FA0]/10 text-[#6B3FA0]">
                          {STATUS_META[request.status]?.label || request.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================
            PAYMENTS
        ====================================================== */}
        {active === 'payments' && (
          <EmptyPage
            icon={CreditCard}
            title="Payments"
            description="Payment management and transaction history will appear here."
          />
        )}

        {/* =====================================================
            REPORTS
        ====================================================== */}
        {active === 'reports' && (
          <div>
            <PageHeader
              title="Reports"
              subtitle="System insights and performance reports"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-sm text-gray-400">Total Citizens</p>
                <p className="text-3xl font-bold text-[#3D2A6D] mt-2">
                  {citizens.length}
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-sm text-gray-400">Total Caretakers</p>
                <p className="text-3xl font-bold text-[#F0854D] mt-2">
                  {caretakers.length}
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-sm text-gray-400">Total Bookings</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {requests.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            CMS
        ====================================================== */}
        {active === 'cms' && (
          <EmptyPage
            icon={Megaphone}
            title="Content Management"
            description="Manage announcements, banners and website content here."
          />
        )}

      </main>

  
    </div>
  </div>
)
}

export default Dashboard