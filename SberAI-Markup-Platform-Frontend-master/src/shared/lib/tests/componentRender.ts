import { render } from '@testing-library/vue'
import type { Component } from 'vue'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
// eslint-disable-next-line fsd-architecture-plugin/layer-imports
import { configurableRoutes } from '@/app/providers/router'

const router = createRouter({
  history: createWebHistory(),
  routes: configurableRoutes
})

export function componentRender(component: Component, initialState = {}, props = {}) {
  // const wrapper = mount(component, {
  //   global: {
  //     plugins: [
  //       createTestingPinia({
  //         initialState,
  //         createSpy: vi.fn,
  //         stubActions: true
  //       }),
  //       router
  //     ]
  //   },
  //   stubs: ['router-link', 'router-view'],
  //   props
  // })
  return render(component, {
    global: {
      plugins: [
        createTestingPinia({
          initialState,
          createSpy: vi.fn,
          stubActions: false
        }),
        router
      ]
    },
    props
  })
}
