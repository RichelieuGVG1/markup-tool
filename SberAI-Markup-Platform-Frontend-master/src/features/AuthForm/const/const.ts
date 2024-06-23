export enum AuthForm {
  LOGIN,
  REGISTER
}

export enum ValidationErrors {
  NO_DATA = 'NO_DATA',
  MIN_LENGTH_PASS = 'MIN_LENGTH_PASS',
  INCORRECT_EMAIL = 'INCORRECT_EMAIL',
  INCORRECT_EMAIL_OR_PASS = 'errIncorrectEmailOrPassword',
  USER_ALREADY_REGISTERED = 'errUserAlreadyRegistered'
}

export const validationErrorsMapper: Record<ValidationErrors, string> = {
  [ValidationErrors.NO_DATA]: 'Заполните все поля',
  [ValidationErrors.MIN_LENGTH_PASS]: 'Пароль должен быть не менее 6 символов',
  [ValidationErrors.INCORRECT_EMAIL]: 'Неверный email',
  [ValidationErrors.INCORRECT_EMAIL_OR_PASS]: 'Неверное имя пользователя или пароль',
  [ValidationErrors.USER_ALREADY_REGISTERED]: 'Пользователь с такой почтой уже зарегистрирован'
}

export enum ResponseError {
  INCORRECT_EMAIL_OR_PASSWORD = 'Incorrect email or password'
}

export const ErrorMessage: Record<string, string> = {}
