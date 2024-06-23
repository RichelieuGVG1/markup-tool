<script setup lang="ts">
import Logo from '@/shared/assets/icons/logo.svg'
import { routes } from '@/shared/const/routes'
import { getHStack } from '@/shared/lib/helpers/getHStack'
import { links } from '../const/links'
import AppLink from '@/shared/ui/TextViews/AppLink/AppLink.vue'
import { NavbarProfile } from '@/features/CurrentProfile'
import { useUserStore } from '@/entities/User'
import { computed } from 'vue'
import { isMobile } from 'mobile-device-detect'

const userStore = useUserStore()

defineProps({
  username: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: ''
  },
  profilePic: {
    type: String,
    default: '/src/shared/assets/icons/defaultPfp.png'
  }
})

const navLinks = computed(() => {
  if (userStore.userData) {
    if (userStore.userData.is_admin) {
      return links
    } else {
      return links.filter((link) => !link.isAdmin)
    }
  }
  return []
})
</script>

<template>
  <nav :class="[getHStack({ gap: '30', justify: isMobile ? 'center' : 'between' }), 'navbar']">
    <router-link
      :class="[getHStack({ align: 'center', justify: 'center' })]"
      :to="routes.projects()"
    >
      <Logo class="logo" />
    </router-link>
    <template v-if="!isMobile">
      <ul :class="getHStack({ gap: '50' })">
        <li v-for="(link, index) in navLinks" :key="index" class="link">
          <AppLink weight="500" :to="link.to">{{ link.title }}</AppLink>
        </li>
      </ul>
      <NavbarProfile :username="username" :role="role" :profilePic="profilePic" />
    </template>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/mixins';

.logo {
  width: 170px;
  height: 35px;
  cursor: pointer;

  @include mobile {
    width: 140px;
  }
}
.link {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--text-color);
    transition: 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--text-color);
  }
}

.navbar {
  position: fixed;
  background: var(--gray-secondary);
  width: 100%;
  height: var(--navbar-height);
  padding: 0 80px;
  z-index: var(--navbar-z-index);
  @include mobile {
    height: var(--mobile-navbar-height);
  }
}
</style>
