export type BadgeColor = 'sky' | 'ocean' | 'emerald' | 'orange' | 'purple' | 'blue' | 'red' | 'amber' | 'cyan'

export type Technology = {
  id: string
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge: string
  badgeColor: BadgeColor
}
