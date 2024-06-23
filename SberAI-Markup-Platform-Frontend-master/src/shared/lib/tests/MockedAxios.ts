import axios, { type AxiosStatic } from 'axios'
import { vi } from 'vitest'
import type { MockedFunctionDeep } from '@vitest/spy'
vi.mock('axios', async () => {
  const actual = await vi.importActual<typeof import('axios')>('axios')

  const mockAxios = {
    ...actual,
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: vi.fn(),
        post: vi.fn()
      }))
    }
  }

  return mockAxios
})
const mockedAxios = vi.mocked(axios, true)

export class TestAsync {
  api: MockedFunctionDeep<AxiosStatic>
  constructor() {
    this.api = mockedAxios
  }
}
