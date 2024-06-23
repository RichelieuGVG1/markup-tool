import type { User } from '@/entities/User'

export interface UsersListState {
  users: User[]
  searchQuery: string
}
