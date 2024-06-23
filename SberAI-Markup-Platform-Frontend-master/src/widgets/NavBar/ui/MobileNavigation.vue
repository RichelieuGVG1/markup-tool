<script setup lang="ts">
import { getHStack } from '@/shared/lib/helpers/getHStack'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import { useUserStore } from '@/entities/User'
import { mobileNavigationLinks } from '../const/links'
import { computed } from 'vue'
import { getVStack } from '@/shared/lib/helpers/getVStack'
const userStore = useUserStore()

const navLinks = computed(() => {
  if (userStore.userData) {
    if (userStore.userData.is_admin) {
      return mobileNavigationLinks
    } else {
      return mobileNavigationLinks.filter((link) => !link.isAdmin)
    }
  }
  return []
})
</script>

<template>
  <nav :class="['mobile-nav', getHStack({ justify: 'center', gap: '50' })]">
    <router-link
      v-for="link in navLinks"
      :class="[getVStack({ gap: '4', align: 'center' })]"
      active-class="active_link"
      :to="link.to"
      :key="link.title"
    >
      <component class="icon" :is="link.icon" />
      <AppText class="text" variant="secondary">{{ link.title }}</AppText>
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
.mobile-nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: var(--navbar-z-index);

  background: var(--gray-secondary);
  height: var(--mobile-navbar-height);
}

.icon {
  color: var(--text-color-secondary);
}

.active_link {
  .icon,
  .text {
    color: var(--accent-color);
  }
}
</style>
