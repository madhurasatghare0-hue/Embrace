import { ShieldCheck, Award, Crown } from 'lucide-react'

const plans = [
  {
    id: 'silver',
    name: 'Silver Plan',
    tagline: 'Shared caretaker support for everyday needs.',
    icon: ShieldCheck,
    maxHouses: 5,
    price: 2499,
    isPremium: false,
    highlighted: false,
    features: [
      '1 Caretaker assigned',
      'Shared across up to 5 households',
      'Access to all request categories',
      'Community group chat',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    tagline: 'More attention, faster response times.',
    icon: Award,
    maxHouses: 3,
    price: 3499,
    isPremium: true,
    highlighted: true,
    features: [
      '1 Caretaker assigned',
      'Shared across up to 3 households',
      'Priority request handling',
      'Private + group chat access',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Plan',
    tagline: 'A caretaker dedicated to your household alone.',
    icon: Crown,
    maxHouses: 1,
    price: 4999,
    isPremium: true,
    highlighted: false,
    features: [
      '1 dedicated Caretaker',
      'Just 1 household per caretaker',
      'Fastest response priority',
      'Private chat + emergency line',
    ],
  },
]

export default plans