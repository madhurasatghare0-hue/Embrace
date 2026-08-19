import { getCollection, saveCollection, generateId } from './db'

const KEY = 'chatMessages'

function conversationId(citizenId, caretakerId) {
  return `${citizenId}__${caretakerId}`
}

export function getMessages(citizenId, caretakerId) {
  const all = getCollection(KEY)
  const convoId = conversationId(citizenId, caretakerId)
  return all.filter((m) => m.conversationId === convoId)
}

export function sendMessage({ citizenId, caretakerId, senderRole, text }) {
  const all = getCollection(KEY)
  const message = {
    id: generateId('msg'),
    conversationId: conversationId(citizenId, caretakerId),
    senderRole, // 'citizen' | 'caretaker'
    text,
    createdAt: new Date().toISOString(),
  }
  all.push(message)
  saveCollection(KEY, all)
  return message
}