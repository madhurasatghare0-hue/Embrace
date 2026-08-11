import {
  Users, HeartHandshake, ClipboardList, ClipboardCheck, ArrowUp, ArrowDown,
  Clock, UserPlus, CalendarPlus, BarChart3, Star,
} from 'lucide-react'
import {
  LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts'
import {
  dashboardStats, bookingOverview, bookingsByService,
  citizensByAge, bookingsStatus, topCaretakers, recentActivity,
} from '../../data/adminDashboard'
import heroImage from '../../assets/images/about.png'

const iconMap = { Users, HeartHandshake, ClipboardList, ClipboardCheck }

const colorMap = {
  purple: { bg: 'bg-[#6B3FA0]/10', text: 'text-[#6B3FA0]', line: '#6B3FA0' },
  orange: { bg: 'bg-[#F0854D]/10', text: 'text-[#F0854D]', line: '#F0854D' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', line: '#3F6FBF' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-500', line: '#D9527A' },
}

function StatCard({ stat }) {
  const Icon = iconMap[stat.icon]
  const colors = colorMap[stat.color]
  const sparkData = stat.sparkline.map((v, i) => ({ i, v }))

  return (
    <div className={`rounded-xl p-5 ${colors.bg}`}>
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
      <p className="text-2xl font-semibold text-[#3D2A6D] mb-2">{stat.value}</p>
      <div className="flex items-center justify-between">
        <span className={`flex items-center gap-1 text-xs font-medium ${
          stat.trend === 'up' ? 'text-green-600' : 'text-red-500'
        }`}>
          {stat.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {stat.change} vs last week
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
          <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
            {filter}
          </span>
        )}
      </div>
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
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      {/* Welcome banner */}
      <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-[#FDE9DC] to-[#F5E3F5] p-6 flex items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-[#3D2A6D] mb-1">
            Good Morning, Admin! 👋
          </h1>
          <p className="text-sm text-gray-500">
            Let's make today a <span className="text-[#F0854D] font-medium">better day</span> for our elders.
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
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Booking Overview + Bookings by Service */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#3D2A6D]">Booking Overview</h2>
            <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">This Week</span>
          </div>
          <div className="flex items-center gap-4 mb-2 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#6B3FA0]" /> New Bookings</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F0854D]" /> Completed Bookings</span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bookingOverview}>
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="newBookings" stroke="#6B3FA0" strokeWidth={2.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="completed" stroke="#F0854D" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2">
          <DonutCard title="Bookings by Service" data={bookingsByService} />
        </div>
      </div>

      {/* Age group + status + top caretakers + activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#3D2A6D]">Citizens by Age Group</h2>
            <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">This Week</span>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={citizensByAge}>
                <XAxis dataKey="group" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {citizensByAge.map((entry, i) => (
                    <Cell key={entry.group} fill={['#6B3FA0', '#F0854D', '#D9527A', '#3F6FBF'][i % 4]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <DonutCard title="Bookings Status" data={bookingsStatus} />

        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#3D2A6D]">Top Caretakers</h2>
            <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">This Week</span>
          </div>
          <div className="space-y-3">
            {topCaretakers.map((c) => (
              <div key={c.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3D2A6D]">{c.name}</p>
                    <p className="text-xs text-gray-400">{c.bookings} Bookings</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-[#3D2A6D]">
                  <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                  {c.rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#6B3FA0]" />
                </div>
                <div>
                  <p className="text-sm text-[#3D2A6D] leading-snug">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-[#3D2A6D] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#6B3FA0]/10 text-[#6B3FA0] text-sm font-medium hover:bg-[#6B3FA0]/20 transition-colors">
              <UserPlus className="w-4 h-4" /> Add Citizen
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#F0854D]/10 text-[#F0854D] text-sm font-medium hover:bg-[#F0854D]/20 transition-colors">
              <UserPlus className="w-4 h-4" /> Add Caretaker
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-500/10 text-blue-600 text-sm font-medium hover:bg-blue-500/20 transition-colors">
              <CalendarPlus className="w-4 h-4" /> New Booking
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/10 text-green-600 text-sm font-medium hover:bg-green-500/20 transition-colors">
              <BarChart3 className="w-4 h-4" /> View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
