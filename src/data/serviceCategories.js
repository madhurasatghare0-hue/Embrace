// import {
//   ShoppingCart,
//   Car,
//   Stethoscope,
//   UserRound,
//   HeartPulse,
//   Pill,
//   Utensils,
//   Users,
//   Dumbbell,
//   Siren,
// } from 'lucide-react'


// const serviceCategories = [
//   { id: 'groceries', name: 'Groceries', icon: ShoppingCart, description: 'Shopping & delivery for daily essentials' },
//   { id: 'transport', name: 'Transport', icon: Car, description: 'Rides to appointments, errands, or visits' },
//   { id: 'medical', name: 'Medical Assistance', icon: Stethoscope, description: 'Wound care, vitals checks, general assistance' },
//   { id: 'doctor', name: 'Doctor Consultation', icon: UserRound, description: 'Schedule or accompany a doctor visit' },
//   { id: 'nursing', name: 'Nursing Care', icon: HeartPulse, description: 'Skilled nursing support at home' },
//   { id: 'medication', name: 'Medication Management', icon: Pill, description: 'Reminders, refills, and dosage tracking' },
//   { id: 'companion', name: 'Companion Care', icon: Users, description: 'Company, conversation, and daily support' },
//   { id: 'physiotherapy', name: 'Physiotherapy', icon: Dumbbell, description: 'Mobility and recovery exercises' },
//   { id: 'meals', name: 'Meal Preparation', icon: Utensils, description: 'Home-cooked, diet-appropriate meals' },
//   { id: 'emergency', name: 'Emergency Assistance', icon: Siren, description: 'Urgent, time-sensitive help' },
// ]

// export default serviceCategories











import {
  ShoppingCart,
  Car,
  Stethoscope,
  UserRound,
  HeartPulse,
  Pill,
  Utensils,
  Users,
  Dumbbell,
  Siren,
  MessageSquareWarning,
} from 'lucide-react'


const serviceCategories = [
  { id: 'groceries', name: 'Groceries', icon: ShoppingCart, description: 'Shopping & delivery for daily essentials' },
  { id: 'transport', name: 'Transport', icon: Car, description: 'Rides to appointments, errands, or visits', external: true },
  { id: 'medical', name: 'Medical Assistance', icon: Stethoscope, description: 'Wound care, vitals checks, general assistance' },
  { id: 'doctor', name: 'Doctor Consultation', icon: UserRound, description: 'Schedule or accompany a doctor visit' },
  { id: 'nursing', name: 'Nursing Care', icon: HeartPulse, description: 'Skilled nursing support at home' },
  { id: 'medication', name: 'Medication Management', icon: Pill, description: 'Reminders, refills, and dosage tracking' },
  { id: 'physiotherapy', name: 'Physiotherapy', icon: Dumbbell, description: 'Mobility and recovery exercises' },
  { id: 'meals', name: 'Meal Preparation', icon: Utensils, description: 'Home-cooked, diet-appropriate meals' },
  { id: 'emergency', name: 'Emergency Assistance', icon: Siren, description: 'Urgent, time-sensitive help' },
  { id: 'complaint', name: 'Complaint / Feedback', icon: MessageSquareWarning, description: 'Raise a concern or share feedback with our admin team' },
]

export default serviceCategories