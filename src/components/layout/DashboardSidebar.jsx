import { Heart, LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function DashboardSidebar({ navItems, activeId, onNavigate, onSignOut, subtitle = 'Care with Heart' }) {
  const location = useLocation()

  return (
    <aside className="fixed top-4 left-4 bottom-4 w-64 bg-gradient-to-b from-[#F1EAFB] to-[#FEF0E7] rounded-3xl shadow-sm flex flex-col z-30">
      <div className="flex items-center gap-2 px-6 py-6">
        <div>
          <p className="font-bold text-[#2E2249] leading-tight">
            Embrace<span className="text-[#F0854D]">Care</span>
          </p>
          <p className="text-[11px] text-gray-500 leading-tight">{subtitle}</p>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.href
            ? location.pathname === item.href
            : activeId === item.id

          const className = `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            isActive
              ? 'bg-white text-[#6B3FA0] shadow-sm'
              : 'text-gray-500 hover:bg-white/60'
          }`

          const content = (
            <>
              <Icon className="w-[18px] h-[18px]" />
              {item.label}
              {item.badge > 0 && !isActive && (
                <span className="ml-auto text-[10px] font-bold bg-[#F0854D] text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </>
          )

          if (item.href) {
            return (
              <Link key={item.id} to={item.href} className={className}>
                {content}
              </Link>
            )
          }

          return (
            <button key={item.id} onClick={() => onNavigate(item.id)} className={className}>
              {content}
            </button>
          )
        })}
      </nav>

      <div className="p-3 border-t border-white/60 shrink-0">
        <button
          onClick={onSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-white/60"
        >
          <LogOut className="w-[18px] h-[18px]" /> Sign Out
        </button>
      </div>
    </aside>
  )
}

export default DashboardSidebar