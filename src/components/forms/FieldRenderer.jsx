const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3FA0]/30'

function FieldRenderer({ field, value, onChange }) {
  const { id, label, type, note, options, optional } = field

  const setValue = (v) => onChange(id, v)

  const toggleMulti = (option) => {
    const current = Array.isArray(value) ? value : []
    const next = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option]
    setValue(next)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-[#3D2A6D] mb-1.5">
        {label}
        {optional && <span className="text-gray-400 font-normal"> (optional)</span>}
      </label>
      {note && <p className="text-xs text-gray-400 mb-1.5">{note}</p>}

      {type === 'text' && (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          className={inputClass}
        />
      )}

      {type === 'phone' && (
        <input
          type="tel"
          value={value || ''}
          onChange={(e) => setValue(e.target.value.replace(/\D/g, '').slice(0, 10))}
          className={inputClass}
        />
      )}

      {type === 'number' && (
        <input
          type="number"
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          className={inputClass}
        />
      )}

      {type === 'date' && (
        <input
          type="date"
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          className={inputClass}
        />
      )}

      {type === 'time' && (
        <input
          type="time"
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          className={inputClass}
        />
      )}

      {type === 'textarea' && (
        <textarea
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          rows={3}
          className={`${inputClass} resize-none`}
        />
      )}

      {type === 'dropdown' && (
        <select
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          className={`${inputClass} bg-white`}
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}

      {type === 'yesno' && (
        <div className="flex gap-3">
          {['Yes', 'No'].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setValue(opt)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                value === opt
                  ? 'bg-[#6B3FA0] text-white border-[#6B3FA0]'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#6B3FA0]/40'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {(type === 'multiselect' || type === 'checklist') && (
        <div className="grid grid-cols-2 gap-2">
          {options.map((opt) => {
            const current = Array.isArray(value) ? value : []
            const isChecked = current.includes(opt)
            return (
              <label
                key={opt}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm cursor-pointer transition-colors ${
                  isChecked
                    ? 'border-[#6B3FA0] bg-[#6B3FA0]/5 text-[#3D2A6D]'
                    : 'border-gray-200 text-gray-500'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleMulti(opt)}
                  className="accent-[#6B3FA0]"
                />
                {opt}
              </label>
            )
          })}
        </div>
      )}

      {type === 'file' && (
  <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-lg py-6 cursor-pointer hover:border-[#6B3FA0]/40 transition-colors">
    <span className="text-sm text-gray-400 text-center px-2">
      {value || 'Click to upload a file'}
    </span>
    <input
      type="file"
      className="hidden"
      onChange={(e) => setValue(e.target.files[0]?.name || '')}
    />
  </label>
)}

    </div>
  )
}

export default FieldRenderer