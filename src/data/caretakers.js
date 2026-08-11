import { getCollection, saveCollection, generateId } from './db'

const KEY = 'caretakers'

export function getAllCaretakers() {
  return getCollection(KEY)
}

export function getCaretakerById(id) {
  return getAllCaretakers().find((c) => c.id === id) || null
}

export function getCaretakerByMobile(mobile) {
  return getAllCaretakers().find((c) => c.mobile === mobile) || null
}

export function getCaretakerByUserId(userId) {
  return getAllCaretakers().find((c) => c.userId === userId) || null
}

export function getPendingCaretakers() {
  return getAllCaretakers().filter((c) => c.status === 'pending')
}

export function getApprovedCaretakers() {
  return getAllCaretakers().filter((c) => c.status === 'approved')
}

export function createCaretaker(data) {
  const caretakers = getAllCaretakers()
  const newCaretaker = {
    id: generateId('caretaker'),
    fullName: data.fullName || '',
    mobile: data.mobile || '',
    email: data.email || '',
    status: 'pending',
    userId: null,
    password: null,
    assignedCitizenId: null,
    createdAt: new Date().toISOString(),
    profile: { ...data },
  }
  caretakers.push(newCaretaker)
  saveCollection(KEY, caretakers)
  return newCaretaker
}

export function updateCaretaker(id, updates) {
  const caretakers = getAllCaretakers()
  const index = caretakers.findIndex((c) => c.id === id)
  if (index === -1) return null
  caretakers[index] = { ...caretakers[index], ...updates }
  saveCollection(KEY, caretakers)
  return caretakers[index]
}

export function approveCaretaker(id) {
  const userId = `CT${String(Math.floor(1000 + Math.random() * 9000))}`
  const password = Math.random().toString(36).slice(2, 8)
  return updateCaretaker(id, { status: 'approved', userId, password })
}

export function rejectCaretaker(id) {
  return updateCaretaker(id, { status: 'rejected' })
}

export function verifyCaretakerLogin(userId, password) {
  const caretaker = getCaretakerByUserId(userId)
  if (!caretaker || caretaker.password !== password) return null
  return caretaker
}