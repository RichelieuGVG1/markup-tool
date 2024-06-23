import { routes } from '@/shared/const/routes'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ProjectsIcon from '@/shared/assets/icons/projects.svg'
import UsersIcon from '@/shared/assets/icons/users.svg'

export interface NavigationLink {
  title: string
  to: string
  isAdmin?: boolean
}

interface MobileNavigationLink extends NavigationLink {
  icon: string
}

export const links: NavigationLink[] = [
  {
    title: 'Проекты',
    to: routes.projects()
  },
  {
    title: 'Создать',
    to: routes.createTaskAuto(),
    isAdmin: true
  },
  {
    title: 'Пользователи',
    to: routes.users(),
    isAdmin: true
  }
]

export const mobileNavigationLinks: MobileNavigationLink[] = [
  {
    title: 'Пользователи',
    to: routes.users(),
    isAdmin: true,
    icon: UsersIcon
  },
  {
    title: 'Проекты',
    to: routes.projects(),
    icon: ProjectsIcon
  },
  {
    title: 'Профиль',
    to: routes.userAccount(),
    icon: ProfileIcon
  }
]
