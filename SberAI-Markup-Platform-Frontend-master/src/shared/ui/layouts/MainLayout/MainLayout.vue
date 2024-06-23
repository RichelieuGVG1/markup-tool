<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { isMobile } from 'mobile-device-detect'
const route = useRoute()

defineProps({
  navbar: {
    type: Object,
    required: true
  }
})
const contentCondition = computed(() => {
  return !(route.meta.customLayout || (route.meta.customMobileNavbar && isMobile))
})
</script>

<template>
  <component :is="navbar" v-if="!route.meta.customLayout" />
  <div :class="{ content: contentCondition }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.content {
  margin-top: var(--navbar-height);
  padding-top: 60px;
  padding-bottom: 60px;

  @include mobile {
    margin-top: var(--mobile-navbar-height);
    padding-top: 25px;
    padding-bottom: calc(var(--mobile-navbar-height) + 20px);
  }
}
</style>
