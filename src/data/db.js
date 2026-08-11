const STORAGE_PREFIX = 'eldercare_'

export function getCollection(key) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error(`Failed to read collection "${key}" from storage:`, err)
    return []
  }
}

export function saveCollection(key, data) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data))
  } catch (err) {
    console.error(`Failed to save collection "${key}" to storage:`, err)
  }
}

export function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export function seedIfEmpty(key, seedData) {
  const existing = getCollection(key)
  if (existing.length === 0 && seedData?.length) {
    saveCollection(key, seedData)
    return seedData
  }
  return existing
}

// Simple session helper — tracks which role + id is "logged in" right now.
export function setSession(role, id) {
  try {
    localStorage.setItem(STORAGE_PREFIX + 'session', JSON.stringify({ role, id }))
  } catch (err) {
    console.error('Failed to save session:', err)
  }
}

export function getSession() {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + 'session')
    return raw ? JSON.parse(raw) : null
  } catch (err) {
    console.error('Failed to read session:', err)
    return null
  }
}

export function clearSession() {
  localStorage.removeItem(STORAGE_PREFIX + 'session')
}