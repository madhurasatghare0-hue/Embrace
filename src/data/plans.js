import { Award, Star, Crown } from 'lucide-react'

// maxHouses = how many households a single caretaker on this plan is
// responsible for. Lower number = more dedicated attention.
const plans = [
  {
    id: 'silver',
    name: 'Silver Plan',
    tagline: 'Reliable, well-rounded everyday care',
    icon: Award,
    maxHouses: 5,
    caretakersAssigned: 1,
    features: [
      'Caretaker shared across up to 5 households',
      '1 dedicated caretaker assigned to you',
      'Access to all 10 service categories',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    tagline: 'More attention, faster response',
    icon: Star,
    maxHouses: 3,
    caretakersAssigned: 1,
    highlighted: true,
    features: [
      'Caretaker shared across up to 3 households',
      '1 dedicated caretaker assigned to you',
      'Access to all 10 service categories',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Plan',
    tagline: 'A caretaker focused on you alone',
    icon: Crown,
    maxHouses: 1,
    caretakersAssigned: 1,
    features: [
      'Caretaker assigned to your household only',
      '1 dedicated caretaker assigned to you',
      'Access to all 10 service categories',
    ],
  },
]

export default plans