import { defineStore } from 'pinia'
import type { UsersListState } from '../types/usersListState'

export const useUsersListStore = defineStore('usersList', {
  state: (): UsersListState => ({
    users: [
      {
        ID: 3,
        first_name: 'test',
        last_name: 'lasr',
        is_admin: false,
        email: '',
        reg_date: '',
        completed_tasks: 1
      },
      {
        ID: 5,
        first_name: 'test2',
        last_name: 'lasr',
        is_admin: false,
        email: '',
        reg_date: '',
        completed_tasks: 1
      },
      {
        ID: 6,
        first_name: 'test3',
        last_name: 'lasr',
        is_admin: false,
        email: '',
        reg_date: '',
        completed_tasks: 1
      },
      {
        ID: 7,
        first_name: 'test44',
        last_name: 'lasr',
        is_admin: false,
        email: '',
        reg_date: '',
        completed_tasks: 1
      }
    ],
    searchQuery: ''
  })
})
