// import { Outlet, Link, useLocation } from 'react-router-dom'
// import {
//   LayoutDashboard,
//   Users,
//   HeartHandshake,
//   ClipboardCheck,
//   ClipboardList,
//   CreditCard,
//   FileText,
//   Megaphone,
//   LogOut,
//   Heart,
//   Search,
//   Bell,
//   ChevronDown,
// } from 'lucide-react'

// const navItems = [
//   { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
//   { label: 'Citizens', icon: Users, href: '/admin/citizens' },
//   { label: 'Caretakers', icon: HeartHandshake, href: '/admin/caretakers' },
//   { label: 'Approvals', icon: ClipboardCheck, href: '/admin/approvals' },
//   { label: 'Bookings', icon: ClipboardList, href: '/admin/bookings' },
//   { label: 'Payments', icon: CreditCard, href: '/admin/payments' },
//   { label: 'Reports', icon: FileText, href: '/admin/reports' },
//   { label: 'CMS', icon: Megaphone, href: '/admin/cms' },
// ]

// function AdminLayout() {
//   const location = useLocation()

//   return (
//     <div className="min-h-screen bg-[#F7F7FB] flex">

//       {/* ================= SIDEBAR ================= */}
//       <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col shrink-0">

//         {/* Logo */}
//         <div className="flex items-center gap-2 px-6 py-6">
//           <Heart
//             className="w-7 h-7 text-[#F0854D]"
//             fill="currentColor"
//           />

//           <div>
//             <p className="font-bold text-[#2E2249] leading-tight">
//               Embrace<span className="text-[#F0854D]">Care</span>
//             </p>

//             <p className="text-[11px] text-gray-400 leading-tight">
//               Care with Heart
//             </p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-3 space-y-1">
//           {navItems.map((item) => {
//             const Icon = item.icon

//             const isActive =
//               item.href === '/admin'
//                 ? location.pathname === '/admin'
//                 : location.pathname.startsWith(item.href)

//             return (
//               <Link
//                 key={item.href}
//                 to={item.href}
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
//                   isActive
//                     ? 'bg-[#6B3FA0]/10 text-[#6B3FA0]'
//                     : 'text-gray-500 hover:bg-gray-50 hover:text-[#3D2A6D]'
//                 }`}
//               >
//                 <Icon className="w-[18px] h-[18px]" />

//                 <span>{item.label}</span>
//               </Link>
//             )
//           })}
//         </nav>

//         {/* Sign Out */}
//         <div className="px-3 py-5 border-t border-gray-100">
//           <Link
//             to="/login"
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
//           >
//             <LogOut className="w-[18px] h-[18px]" />
//             <span>Sign Out</span>
//           </Link>
//         </div>
//       </aside>

//       {/* ================= MAIN AREA ================= */}
//       <div className="flex-1 min-w-0 min-h-screen flex flex-col">

//         {/* ================= TOPBAR ================= */}
//         <header className="h-[92px] px-10 flex items-center justify-between shrink-0">

//           <p className="text-base text-gray-400">
//             Welcome back, Admin
//           </p>

//           <div className="flex items-center gap-3">

//             {/* Search */}
//             <button
//               className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#6B3FA0] hover:border-[#6B3FA0]/20 transition-colors"
//             >
//               <Search className="w-5 h-5" />
//             </button>

//             {/* Notification */}
//             <button
//               className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#6B3FA0] hover:border-[#6B3FA0]/20 transition-colors"
//             >
//               <Bell className="w-5 h-5" />
//             </button>

//             {/* Admin Profile */}
//             <button className="flex items-center gap-3 ml-1">
//               <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
//                 A
//               </div>

//               <span className="text-sm text-gray-500">
//                 Admin
//               </span>

//               <ChevronDown className="w-4 h-4 text-gray-400" />
//             </button>

//           </div>
//         </header>

//         {/* ================= PAGE CONTENT ================= */}
//         <main className="flex-1 px-10 pb-6 overflow-y-auto">
//           <Outlet />
//         </main>

//         {/* ================= FOOTER ================= */}
//         <footer className="px-10 py-5 flex items-center justify-between text-xs text-gray-400 shrink-0">
//           <p>© 2026 EmbraceCare. All rights reserved.</p>

//           <div className="flex items-center gap-5">
//             <button className="hover:text-[#6B3FA0] transition-colors">
//               Privacy Policy
//             </button>

//             <button className="hover:text-[#6B3FA0] transition-colors">
//               Terms of Service
//             </button>
//           </div>
//         </footer>

//       </div>
//     </div>
//   )
// }

// export default AdminLayout











import { Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, HeartHandshake, ClipboardCheck, ClipboardList,
  CreditCard, FileText, Megaphone,
} from 'lucide-react'
import DashboardSidebar from '../components/layout/DashboardSidebar'
import { clearSession } from '../data/db'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { id: 'citizens', label: 'Citizens', icon: Users, href: '/admin/citizens' },
  { id: 'caretakers', label: 'Caretakers', icon: HeartHandshake, href: '/admin/caretakers' },
  { id: 'approvals', label: 'Approvals', icon: ClipboardCheck, href: '/admin/approvals' },
  { id: 'bookings', label: 'Bookings', icon: ClipboardList, href: '/admin/bookings' },
  { id: 'payments', label: 'Payments', icon: CreditCard, href: '/admin/payments' },
  { id: 'reports', label: 'Reports', icon: FileText, href: '/admin/reports' },
  { id: 'cms', label: 'CMS', icon: Megaphone, href: '/admin/cms' },
]

function AdminLayout() {
  const navigate = useNavigate()

  const handleSignOut = () => {
    clearSession()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-[#FAFAFB] flex">
      <DashboardSidebar
        navItems={navItems}
        onSignOut={handleSignOut}
        subtitle="Admin Panel"
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <div className="text-sm text-gray-400">Welcome back, Admin</div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout