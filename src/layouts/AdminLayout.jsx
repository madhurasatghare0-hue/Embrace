import { Outlet, Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Users, HeartHandshake, ClipboardCheck, ClipboardList,
  CreditCard, FileText, Megaphone, LogOut, Heart,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { label: 'Citizens', icon: Users, href: '/admin/citizens' },
  { label: 'Caretakers', icon: HeartHandshake, href: '/admin/caretakers' },
  { label: 'Approvals', icon: ClipboardCheck, href: '/admin/approvals' },
  { label: 'Bookings', icon: ClipboardList, href: '/admin/bookings' },
  { label: 'Payments', icon: CreditCard, href: '/admin/payments' },
  { label: 'Reports', icon: FileText, href: '/admin/reports' },
  { label: 'CMS', icon: Megaphone, href: '/admin/cms' },
]

function AdminLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#FAFAFB] flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <Heart className="w-6 h-6 text-[#F0854D]" fill="currentColor" />
          <div>
            <div className="font-bold text-[#3D2A6D] leading-none">
              Embrace<span className="text-[#F0854D]">Care</span>
            </div>
            <div className="text-[10px] text-gray-400">Admin Panel</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#6B3FA0]/10 text-[#6B3FA0]'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-[#3D2A6D]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <div className="text-sm text-gray-400">Welcome back, Admin</div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout