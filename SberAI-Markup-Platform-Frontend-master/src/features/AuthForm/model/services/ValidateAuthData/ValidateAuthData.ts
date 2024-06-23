import type { LoginForm, RegisterForm } from '../../types/authState'
import { ValidationErrors } from '../../../const/const'

export const ValidateAuthData = (formData: RegisterForm | LoginForm) => {
  // const { first_name, last_name, password, email } = formData
  if (!Object.values(formData).every((el) => el)) {
    return [ValidationErrors.NO_DATA]
  }

  const errors: ValidationErrors[] = []

  if (!formData.email.includes('@')) {
    errors.push(ValidationErrors.INCORRECT_EMAIL)
  }
  if (formData.password.length < 6) {
    errors.push(ValidationErrors.MIN_LENGTH_PASS)
  }
  return errors
}
