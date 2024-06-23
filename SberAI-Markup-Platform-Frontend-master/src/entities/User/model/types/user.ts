export interface User {
  ID: number
  completed_tasks: number
  email: string
  reg_date: string
  first_name: string
  last_name: string
  is_admin: boolean
}

export interface UserState {
  userData: User | null
  mounted?: boolean
  isLoading: boolean
}
