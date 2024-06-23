export type ConnectionToProjectErrors =
  | 'errProjectNotFound'
  | 'errAlreadyInProject'
  | 'errNoAccessToTheProject'
  | 'errWrongPassword'

export const connectionErrMapper: Record<ConnectionToProjectErrors, string> = {
  errProjectNotFound: 'Проект не найден',
  errAlreadyInProject: 'Вы уже присоединились к данному проекту',
  errNoAccessToTheProject: 'Нет доступа к данному проекту',
  errWrongPassword: 'Неверный пароль'
}
