// // import { getCollection, saveCollection, generateId } from './db'

// // const KEY = 'caretakers'

// // export function getAllCaretakers() {
// //   return getCollection(KEY)
// // }

// // export function getCaretakerById(id) {
// //   return getAllCaretakers().find((c) => c.id === id) || null
// // }

// // export function getCaretakerByMobile(mobile) {
// //   return getAllCaretakers().find((c) => c.mobile === mobile) || null
// // }

// // export function getCaretakerByUserId(userId) {
// //   return getAllCaretakers().find((c) => c.userId === userId) || null
// // }

// // export function getPendingCaretakers() {
// //   return getAllCaretakers().filter((c) => c.status === 'pending')
// // }

// // export function getApprovedCaretakers() {
// //   return getAllCaretakers().filter((c) => c.status === 'approved')
// // }

// // export function createCaretaker(data) {
// //   const caretakers = getAllCaretakers()
// //   const newCaretaker = {
// //     id: generateId('caretaker'),
// //     fullName: data.fullName || '',
// //     mobile: data.mobile || '',
// //     email: data.email || '',
// //     status: 'pending',
// //     userId: null,
// //     password: null,
// //     assignedCitizenId: null,
// //     createdAt: new Date().toISOString(),
// //     profile: { ...data },
// //   }
// //   caretakers.push(newCaretaker)
// //   saveCollection(KEY, caretakers)
// //   return newCaretaker
// // }

// // export function updateCaretaker(id, updates) {
// //   const caretakers = getAllCaretakers()
// //   const index = caretakers.findIndex((c) => c.id === id)
// //   if (index === -1) return null
// //   caretakers[index] = { ...caretakers[index], ...updates }
// //   saveCollection(KEY, caretakers)
// //   return caretakers[index]
// // }

// // export function approveCaretaker(id) {
// //   const userId = `CT${String(Math.floor(1000 + Math.random() * 9000))}`
// //   const password = Math.random().toString(36).slice(2, 8)
// //   return updateCaretaker(id, { status: 'approved', userId, password })
// // }

// // export function rejectCaretaker(id) {
// //   return updateCaretaker(id, { status: 'rejected' })
// // }

// // export function verifyCaretakerLogin(userId, password) {
// //   const caretaker = getCaretakerByUserId(userId)
// //   if (!caretaker || caretaker.password !== password) return null
// //   return caretaker
// // }








// import { getCollection, saveCollection, generateId } from './db'

// const KEY = 'caretakers'

// export function getAllCaretakers() {
//   return getCollection(KEY)
// }

// export function getCaretakerById(id) {
//   return getAllCaretakers().find((c) => c.id === id) || null
// }

// export function getCaretakerByMobile(mobile) {
//   const normalizedMobile = String(mobile || '').trim()

//   return (
//     getAllCaretakers().find(
//       (c) => String(c.mobile || '').trim() === normalizedMobile
//     ) || null
//   )
// }

// export function getCaretakerByUserId(userId) {
//   const normalizedUserId = String(userId || '')
//     .trim()
//     .toUpperCase()

//   return (
//     getAllCaretakers().find(
//       (c) =>
//         String(c.userId || '')
//           .trim()
//           .toUpperCase() === normalizedUserId
//     ) || null
//   )
// }

// export function getPendingCaretakers() {
//   return getAllCaretakers().filter((c) => c.status === 'pending')
// }

// export function getApprovedCaretakers() {
//   return getAllCaretakers().filter((c) => c.status === 'approved')
// }

// export function createCaretaker(data) {
//   const caretakers = getAllCaretakers()

//   const newCaretaker = {
//     id: generateId('caretaker'),
//     fullName: data.fullName || '',
//     mobile: data.mobile || '',
//     email: data.email || '',
//     status: 'pending',
//     userId: null,
//     password: null,
//     assignedCitizenId: null,
//     createdAt: new Date().toISOString(),
//     profile: { ...data },
//   }

//   caretakers.push(newCaretaker)
//   saveCollection(KEY, caretakers)

//   return newCaretaker
// }

// export function updateCaretaker(id, updates) {
//   const caretakers = getAllCaretakers()
//   const index = caretakers.findIndex((c) => c.id === id)

//   if (index === -1) return null

//   caretakers[index] = {
//     ...caretakers[index],
//     ...updates,
//   }

//   saveCollection(KEY, caretakers)

//   return caretakers[index]
// }

// export function approveCaretaker(id) {
//   // No longer generates random credentials — caretaker set their own at registration
//   return updateCaretaker(id, { status: 'approved' })
// }

// export function verifyCaretakerLogin(userId, password) {
//   const trimmedId = (userId || '').trim()
//   const trimmedPassword = (password || '').trim()

//   // Lenient for now: match by userId only if provided, otherwise allow any non-empty login
//   const caretaker = getAllCaretakers().find(
//     (c) => c.status === 'approved' && (c.profile?.userId || c.userId) === trimmedId
//   )

//   if (caretaker) return caretaker


//   const anyApproved = getAllCaretakers().find((c) => c.status === 'approved')
//   return anyApproved || null
// }

// export function rejectCaretaker(id) {
//   return updateCaretaker(id, {
//     status: 'rejected',
//   })
// }











// import { getCollection, saveCollection, generateId } from './db'

// const KEY = 'caretakers'

// export function getAllCaretakers() {
//   return getCollection(KEY)
// }

// export function getCaretakerById(id) {
//   return getAllCaretakers().find((c) => c.id === id) || null
// }

// export function getCaretakerByMobile(mobile) {
//   return getAllCaretakers().find((c) => c.mobile === mobile) || null
// }

// export function getCaretakerByUserId(userId) {
//   return getAllCaretakers().find((c) => c.userId === userId) || null
// }

// export function getPendingCaretakers() {
//   return getAllCaretakers().filter((c) => c.status === 'pending')
// }

// export function getApprovedCaretakers() {
//   return getAllCaretakers().filter((c) => c.status === 'approved')
// }

// export function createCaretaker(data) {
//   const caretakers = getAllCaretakers()
//   const newCaretaker = {
//     id: generateId('caretaker'),
//     fullName: data.fullName || '',
//     mobile: data.mobile || '',
//     email: data.email || '',
//     status: 'pending',
//     userId: null,
//     password: null,
//     assignedCitizenId: null,
//     createdAt: new Date().toISOString(),
//     profile: { ...data },
//   }
//   caretakers.push(newCaretaker)
//   saveCollection(KEY, caretakers)
//   return newCaretaker
// }

// export function updateCaretaker(id, updates) {
//   const caretakers = getAllCaretakers()
//   const index = caretakers.findIndex((c) => c.id === id)
//   if (index === -1) return null
//   caretakers[index] = { ...caretakers[index], ...updates }
//   saveCollection(KEY, caretakers)
//   return caretakers[index]
// }

// export function approveCaretaker(id) {
//   const userId = `CT${String(Math.floor(1000 + Math.random() * 9000))}`
//   const password = Math.random().toString(36).slice(2, 8)
//   return updateCaretaker(id, { status: 'approved', userId, password })
// }

// export function rejectCaretaker(id) {
//   return updateCaretaker(id, { status: 'rejected' })
// }

// export function verifyCaretakerLogin(userId, password) {
//   const caretaker = getCaretakerByUserId(userId)
//   if (!caretaker || caretaker.password !== password) return null
//   return caretaker
// }








import { getCollection, saveCollection, generateId } from './db'
import { getAllCitizens } from './citizens'

const KEY = 'caretakers'

export function getAllCaretakers() {
  return getCollection(KEY)
}

export function getCaretakerById(id) {
  return getAllCaretakers().find((c) => c.id === id) || null
}

export function getCaretakerByMobile(mobile) {
  const normalizedMobile = String(mobile || '').trim()

  return (
    getAllCaretakers().find(
      (c) => String(c.mobile || '').trim() === normalizedMobile
    ) || null
  )
}

export function findAvailableCaretaker(maxHouses) {
  const approved = getApprovedCaretakers()
  const citizens = getAllCitizens()

  for (const caretaker of approved) {
    const assignedCount = citizens.filter((c) => c.assignedCaretakerId === caretaker.id).length
    if (assignedCount < maxHouses) {
      return caretaker
    }
  }
  return null
}

export function getCaretakerByUserId(userId) {
  const normalizedUserId = String(userId || '')
    .trim()
    .toUpperCase()

  return (
    getAllCaretakers().find(
      (c) =>
        String(c.userId || '')
          .trim()
          .toUpperCase() === normalizedUserId
    ) || null
  )
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

  caretakers[index] = {
    ...caretakers[index],
    ...updates,
  }

  saveCollection(KEY, caretakers)

  return caretakers[index]
}

export function approveCaretaker(id) {
  // No longer generates random credentials — caretaker set their own at registration
  return updateCaretaker(id, { status: 'approved' })
}

export function verifyCaretakerLogin(userId, password) {
  const trimmedId = (userId || '').trim()
  const trimmedPassword = (password || '').trim()

  // Lenient for now: match by userId only if provided, otherwise allow any non-empty login
  const caretaker = getAllCaretakers().find(
    (c) => c.status === 'approved' && (c.profile?.userId || c.userId) === trimmedId
  )

  if (caretaker) return caretaker


  const anyApproved = getAllCaretakers().find((c) => c.status === 'approved')
  return anyApproved || null
}

export function rejectCaretaker(id) {
  return updateCaretaker(id, {
    status: 'rejected',
  })
}


