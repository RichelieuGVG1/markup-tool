export enum TaskServerErrors {
  NO_TASK_AVAILABLE = 'errNoTasksAvailable',
  ANSWER_OPTION_DOES_NOT_EXISTS = 'errAnswerOptionDoesNotExist',
  TASK_NOT_RESERVED_FOR_USER = 'errTaskNotReservedForUser',
  NO_ACCESS_TO_TASK = 'errNoAccessToTask',
  TASK_NOT_FOUND = 'errTaskNotFound'
}

export const taskErrorsMapper: Record<TaskServerErrors, string> = {
  [TaskServerErrors.NO_TASK_AVAILABLE]: 'Вы выполнили все задания в этом проекте!',
  [TaskServerErrors.ANSWER_OPTION_DOES_NOT_EXISTS]: 'Не существует такого ответа',
  [TaskServerErrors.TASK_NOT_RESERVED_FOR_USER]: 'Задача не зарезервирована',
  [TaskServerErrors.NO_ACCESS_TO_TASK]: 'Нет доступа к задаче',
  [TaskServerErrors.TASK_NOT_FOUND]: 'Задача не найдена'
}
