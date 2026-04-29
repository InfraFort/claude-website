export interface Service {
  id: string
  name: string
  description: string
  price: string
  duration?: string
}

// ─────────────────────────────────────────────────────────────
// EDIT THIS ARRAY to add, remove, or update services and pricing.
// Each service needs: id, name, description, price, and optional duration.
// ─────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 'gel-nails',
    name: 'Gel Nails',
    description: 'Long-lasting, high-shine gel application with flawless finish and chip-resistant durability.',
    price: 'From €45',
    duration: '60 min',
  },
  {
    id: 'french-nails',
    name: 'French Tips',
    description: 'Timeless elegance with perfectly sculpted white tips and a natural pink base.',
    price: 'From €50',
    duration: '75 min',
  },
  {
    id: 'custom-design',
    name: 'Custom Nail Art',
    description: 'Bespoke hand-painted designs, foils, gems, and intricate patterns tailored to your vision.',
    price: 'From €60',
    duration: '90 min',
  },
  {
    id: 'gel-extensions',
    name: 'Gel Extensions',
    description: 'Sculpted gel extensions for added length and strength with a natural look.',
    price: 'From €65',
    duration: '90 min',
  },
  {
    id: 'manicure',
    name: 'Luxury Manicure',
    description: 'Full pampering treatment including cuticle care, shaping, massage, and polish.',
    price: 'From €35',
    duration: '45 min',
  },
  {
    id: 'nail-repair',
    name: 'Nail Repair & Infill',
    description: 'Expert repair of broken nails and seamless infill for maintained perfection.',
    price: 'From €30',
    duration: '30 min',
  },
]
