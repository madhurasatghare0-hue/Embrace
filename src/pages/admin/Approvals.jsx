import { useState, useEffect } from 'react'
import { Check, X, Clock, Copy, CheckCheck } from 'lucide-react'
import { getAllCaretakers, approveCaretaker, rejectCaretaker } from '../../data/caretakers'

function CredentialsBadge({ caretaker }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`User ID: ${caretaker.userId}  Password: ${caretaker.password}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-lg">
      <span>ID: {caretaker.userId}</span>
      <span className="text-green-300">|</span>
      <span>Pass: {caretaker.password}</span>
      <button onClick={handleCopy} className="ml-1 text-green-600 hover:text-green-800">
        {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  )
}

function Approvals() {
  const [caretakers, setCaretakers] = useState([])
  const [filter, setFilter] = useState('pending')

  const refresh = () => setCaretakers(getAllCaretakers())

  useEffect(() => {
    refresh()
  }, [])

  const handleApprove = (id) => {
    approveCaretaker(id)
    refresh()
  }

  const handleReject = (id) => {
    rejectCaretaker(id)
    refresh()
  }

  const filtered = caretakers.filter((c) => {
    if (filter === 'all') return true
    return c.status === filter
  })

  const counts = {
    pending: caretakers.filter((c) => c.status === 'pending').length,
    approved: caretakers.filter((c) => c.status === 'approved').length,
    rejected: caretakers.filter((c) => c.status === 'rejected').length,
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#3D2A6D] mb-1">Caretaker Approvals</h1>
      <p className="text-sm text-gray-400 mb-6">Review and approve caretaker applications.</p>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'pending', label: `Pending (${counts.pending})` },
          { id: 'approved', label: `Approved (${counts.approved})` },
          { id: 'rejected', label: `Rejected (${counts.rejected})` },
          { id: 'all', label: 'All' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === tab.id
                ? 'bg-[#6B3FA0] text-white'
                : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
          <p className="text-sm text-gray-400">No caretakers in this category.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
          {filtered.map((caretaker) => {
            const profile = caretaker.profile || {}
            return (
              <div
                key={caretaker.id}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0] shrink-0">
                    {(caretaker.fullName || profile.fullName || '?').charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3D2A6D]">
                      {caretaker.fullName || profile.fullName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {caretaker.mobile} · {profile.qualification || 'No qualification listed'}
                    </p>
                    {profile.elderlyCareYears && (
                      <p className="text-xs text-gray-400">
                        {profile.elderlyCareYears} yrs eldercare experience
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {caretaker.status === 'pending' && (
                    <>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#F0854D] text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        Pending
                      </span>
                      <button
                        onClick={() => handleReject(caretaker.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
                      >
                        <X className="w-4 h-4" /> Reject
                      </button>
                      <button
                        onClick={() => handleApprove(caretaker.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] hover:opacity-90 transition-opacity"
                      >
                        <Check className="w-4 h-4" /> Approve
                      </button>
                    </>
                  )}

                  {caretaker.status === 'approved' && <CredentialsBadge caretaker={caretaker} />}

                  {caretaker.status === 'rejected' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-medium">
                      <X className="w-3.5 h-3.5" />
                      Rejected
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Approvals