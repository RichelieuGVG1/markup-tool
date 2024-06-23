import type { User } from '@/entities/User'
import { $api } from '@/shared/api/api'

export default class AuthService {
  static async login(email: string, password: string) {
    return $api.post<User>('users/login', { email, password })
  }
  static async registration(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    return $api.post<User>('users/create', { email, password, first_name, last_name })
  }
  static async logout() {
    return $api.post('users/logout')
  }
}
