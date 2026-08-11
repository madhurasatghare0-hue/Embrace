import { getCollection, saveCollection, generateId } from './db'

const KEY = 'requests'

export function getAllRequests() {
  return getCollection(KEY)
}

export function getRequestsByCitizen(citizenId) {
  return getAllRequests().filter((r) => r.citizenId === citizenId)
}

export function getRequestsByCaretaker(caretakerId) {
  return getAllRequests().filter((r) => r.caretakerId === caretakerId)
}

export function createRequest(data) {
  const requests = getAllRequests()
  const newRequest = {
    id: generateId('request'),
    citizenId: data.citizenId,
    caretakerId: data.caretakerId || null,
    category: data.category || '',
    notes: data.notes || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
  requests.push(newRequest)
  saveCollection(KEY, requests)
  return newRequest
}

export function updateRequestStatus(id, status) {
  const requests = getAllRequests()
  const index = requests.findIndex((r) => r.id === id)
  if (index === -1) return null
  requests[index] = { ...requests[index], status }
  saveCollection(KEY, requests)
  return requests[index]
}