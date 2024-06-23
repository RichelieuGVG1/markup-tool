<script setup lang="ts">
import AppCard from '@/shared/ui/AppCard/AppCard.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import type { User } from '../../model/types/user'
import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar.vue'
import testImg from '@/shared/assets/icons/defaultPfp.png'

interface UserCardProps {
  user: User
}

defineProps<UserCardProps>()
</script>

<template>
  <AppCard class="user-card" padding-vertical="25" padding-horizontal="25">
    <HStack gap="24">
      <AppAvatar :src="testImg" :size="70" />
      <VStack align="start">
        <AppText weight="700">{{ user.first_name }} {{ user.last_name }}</AppText>
        <AppText size="s" variant="secondary">{{ user.is_admin ? 'Админ' : 'Разметчик' }}</AppText>
        <AppText size="s" variant="secondary">ID: {{ user.ID }}</AppText>
      </VStack>
    </HStack>
  </AppCard>
</template>

<style scoped lang="scss"></style>
