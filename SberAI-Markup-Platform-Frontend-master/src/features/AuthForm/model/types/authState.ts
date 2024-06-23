import { ValidationErrors } from '../../const/const'

export interface AuthState {
  loginForm: LoginForm
  registerForm: RegisterForm
  isLoading: boolean
  error: string | null
  validationErrors: ValidationErrors[]
}

export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  email: string
  password: string
  first_name: string
  last_name: string
}

export interface RegisterFormState {
  form: RegisterForm
  isLoading: boolean
}
