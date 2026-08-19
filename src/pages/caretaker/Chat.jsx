import { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'
import { getSession } from '../../data/db'
import { getCaretakerById } from '../../data/caretakers'
import { getCitizenById } from '../../data/citizens'
import { getMessages, sendMessage } from '../../data/chat'

function Chat() {
  const navigate = useNavigate()
  const { citizenId } = useParams()
  const [caretaker, setCaretaker] = useState(null)
  const [citizen, setCitizen] = useState(null)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const bottomRef = useRef(null)

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

    const citizenRecord = getCitizenById(citizenId)
    setCitizen(citizenRecord)
    if (citizenRecord) {
      setMessages(getMessages(citizenRecord.id, record.id))
    }
  }, [navigate, citizenId])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!text.trim() || !citizen || !caretaker) return
    sendMessage({
      citizenId: citizen.id,
      caretakerId: caretaker.id,
      senderRole: 'caretaker',
      text: text.trim(),
    })
    setMessages(getMessages(citizen.id, caretaker.id))
    setText('')
  }

  if (!caretaker || !citizen) return null

  const citizenName = citizen.fullName || citizen.profile?.fullName || 'Citizen'

  return (
    <div className="min-h-screen bg-[#F5F0FA]/30 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/caretaker/dashboard')} className="text-gray-400 hover:text-[#6B3FA0]">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full bg-[#6B3FA0]/10 flex items-center justify-center text-sm font-semibold text-[#6B3FA0]">
          {citizenName.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#3D2A6D]">{citizenName}</p>
          <p className="text-xs text-gray-400">{citizen.mobile}</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-2xl mx-auto w-full">
        {messages.length === 0 && (
          <p className="text-center text-sm text-gray-400 mt-10">
            No messages yet — say hello to {citizenName.split(' ')[0]} 👋
          </p>
        )}
        <div className="space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.senderRole === 'caretaker' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                  m.senderRole === 'caretaker'
                    ? 'bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white rounded-br-sm'
                    : 'bg-white text-gray-700 rounded-bl-sm shadow-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <form onSubmit={handleSend} className="border-t border-gray-100 bg-white p-4 flex gap-3 max-w-2xl mx-auto w-full">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30"
        />
        <button
          type="submit"
          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B4FC7] to-[#F0854D] text-white flex items-center justify-center shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}

export default Chat