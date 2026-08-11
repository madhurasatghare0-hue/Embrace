export const dashboardStats = [
  { label: 'Total Citizens', value: 248, change: '+18.2%', trend: 'up', icon: 'Users', color: 'purple',
    sparkline: [20, 25, 22, 30, 28, 35, 40] },
  { label: 'Total Caretakers', value: 87, change: '+12.5%', trend: 'up', icon: 'HeartHandshake', color: 'orange',
    sparkline: [10, 14, 12, 18, 20, 22, 28] },
  { label: 'Active Bookings', value: 34, change: '+7.6%', trend: 'up', icon: 'ClipboardList', color: 'blue',
    sparkline: [15, 18, 16, 20, 19, 24, 26] },
  { label: 'Pending Approvals', value: 6, change: '-14.3%', trend: 'down', icon: 'ClipboardCheck', color: 'pink',
    sparkline: [12, 10, 11, 9, 8, 7, 6] },
]

export const bookingOverview = [
  { day: 'Aug 1', newBookings: 70, completed: 45 },
  { day: 'Aug 2', newBookings: 85, completed: 55 },
  { day: 'Aug 3', newBookings: 65, completed: 40 },
  { day: 'Aug 4', newBookings: 90, completed: 60 },
  { day: 'Aug 5', newBookings: 88, completed: 58 },
  { day: 'Aug 6', newBookings: 78, completed: 50 },
  { day: 'Aug 7', newBookings: 110, completed: 68 },
]

export const bookingsByService = [
  { name: 'Post-Surgery Care', value: 38, color: '#F0854D' },
  { name: 'Physiotherapy', value: 29, color: '#6B3FA0' },
  { name: '24x7 Live-in Care', value: 27, color: '#3F6FBF' },
  { name: 'Doctor Visits', value: 18, color: '#D9527A' },
  { name: 'Other Services', value: 16, color: '#3F9B5C' },
]

export const citizensByAge = [
  { group: '0-40', count: 18 },
  { group: '41-60', count: 64 },
  { group: '61-80', count: 112 },
  { group: '80+', count: 54 },
]

export const bookingsStatus = [
  { name: 'Confirmed', value: 18, color: '#6B3FA0' },
  { name: 'Pending', value: 8, color: '#F0854D' },
  { name: 'Cancelled', value: 5, color: '#D9527A' },
  { name: 'Completed', value: 3, color: '#3F9B5C' },
]

export const topCaretakers = [
  { id: 1, name: 'Anjali Nair', bookings: 24, rating: 4.9 },
  { id: 2, name: 'Ramesh Verma', bookings: 18, rating: 4.8 },
  { id: 3, name: 'Sunita Sharma', bookings: 16, rating: 4.7 },
]

export const recentActivity = [
  { id: 1, text: 'New citizen registration — Priya Sharma', time: '2 hours ago', color: 'purple' },
  { id: 2, text: 'Booking confirmed — Ramesh Kumar with caretaker Anjali Nair', time: '5 hours ago', color: 'orange' },
  { id: 3, text: 'Caretaker application submitted — Suresh Iyer', time: '1 day ago', color: 'blue' },
  { id: 4, text: 'Payment received — (Gold Plan)', time: '1 day ago', color: 'green' },
]