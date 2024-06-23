<script setup lang="ts">
import AppText from '../../../../shared/ui/TextViews/AppText/AppText.vue'
import HStack from '../../../../shared/ui/Stack/HStack/HStack.vue'
import { routes } from '@/shared/const/routes'
import { getHStack } from '@/shared/lib/helpers/getHStack'
import { useUserStore } from '@/entities/User'

const props = defineProps({
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
    default: ''
  }
})

const userStore = useUserStore()
</script>

<template>
  <router-link :to="routes.userAccount()" :class="getHStack({ gap: '10' })">
    <div>
      <AppText weight="600">{{ userStore.getUserFullName }}</AppText>
      <AppText size="s" variant="secondary" align="right">{{ userStore.getTextRole }}</AppText>
    </div>
    <img class="pfp" src="@/shared/assets/icons/defaultPfp.png" />
  </router-link>
</template>

<style scoped>
.pfp {
  border-radius: 50%;
  height: 45px;
  width: 45px;
  vertical-align: middle;
  display: inline-block;
}
</style>
