import { getCollection, saveCollection, generateId } from './db'

const KEY = 'citizens'

export function getAllCitizens() {
  return getCollection(KEY)
}

export function getCitizenById(id) {
  return getAllCitizens().find((c) => c.id === id) || null
}

export function getCitizenByMobile(mobile) {
  return getAllCitizens().find((c) => c.mobile === mobile) || null
}

export function createCitizen(data) {
  const citizens = getAllCitizens()
  const newCitizen = {
    id: generateId('citizen'),
    fullName: data.fullName || '',
    mobile: data.mobile || '',
    email: data.email || '',
    selectedPlan: null,
    assignedCaretakerId: null,
    status: 'active',
    createdAt: new Date().toISOString(),
    profile: { ...data },
  }
  citizens.push(newCitizen)
  saveCollection(KEY, citizens)
  return newCitizen
}

export function updateCitizen(id, updates) {
  const citizens = getAllCitizens()
  const index = citizens.findIndex((c) => c.id === id)
  if (index === -1) return null
  citizens[index] = { ...citizens[index], ...updates }
  saveCollection(KEY, citizens)
  return citizens[index]
}

export function setCitizenPlan(id, planName) {
  return updateCitizen(id, { selectedPlan: planName })
}

export function assignCaretakerToCitizen(citizenId, caretakerId) {
  return updateCitizen(citizenId, { assignedCaretakerId: caretakerId })
}