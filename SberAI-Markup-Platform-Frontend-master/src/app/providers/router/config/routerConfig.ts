import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { AppRoutes, routes } from '@/shared/const/routes'
import { useUserStore } from '@/entities/User'

import { ProjectWelcome, ProjectTask, TaskPage } from '@/pages/TaskPage'

export const configurableRoutes: RouteRecordRaw[] = [
  {
    path: routes.main(),
    name: AppRoutes.MAIN,
    redirect: routes.auth()
  },
  {
    path: routes.auth(),
    name: AppRoutes.AUTH,
    component: () => import('@/pages/AuthPage'),
    meta: {
      customLayout: true
    }
  },
  {
    path: routes.users(),
    name: AppRoutes.USERS,
    component: () => import('@/pages/UsersPage')
  },
  {
    path: routes.projects(),
    name: AppRoutes.PROJECTS,
    component: () => import('@/pages/ProjectsPage')
  },
  {
    path: routes.project(':id'),
    name: AppRoutes.PROJECT,
    component: TaskPage,
    children: [
      {
        path: routes.project_welcome(':id'),
        name: AppRoutes.PROJECT_WELCOME,
        component: ProjectWelcome
      },
      {
        path: routes.project_task(':id'),
        name: AppRoutes.PROJECT_TASK,
        component: ProjectTask,
        meta: {
          customMobileNavbar: true
        }
      }
    ]
  },
  {
    path: routes.userAccount(),
    name: AppRoutes.USER_ACCOUNT,
    component: () => import('@/pages/ProfilePage')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage')
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: configurableRoutes
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()
  if (!userStore.mounted) await userStore.initAuthData()

  if (!userStore.userData && to.name !== AppRoutes.AUTH) {
    return { name: AppRoutes.AUTH }
  } else if (userStore.userData && to.name === AppRoutes.AUTH) {
    return { name: AppRoutes.PROJECTS }
  }
})
