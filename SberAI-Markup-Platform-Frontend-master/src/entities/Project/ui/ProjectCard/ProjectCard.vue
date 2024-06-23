<script setup lang="ts">
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import AppCard from '@/shared/ui/AppCard/AppCard.vue'
import type { PropType } from 'vue'
import type { Project } from '../../model/types/project'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import { getHStack } from '@/shared/lib/helpers/getHStack'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import { routes } from '@/shared/const/routes'
import classes from './ProjectCard.module.scss'
import { projectCardIconMapper } from '../../const/projectsListConsts'
import { isMobile } from 'mobile-device-detect'
import ProjectCardMobile from './ProjectCardMobile.vue'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
})
</script>

<template>
  <ProjectCardMobile v-if="isMobile" :project="project" />
  <AppCard
    v-else
    padding-horizontal="25"
    padding-vertical="25"
    :class="[classes.task, getHStack({ justify: 'between', align: 'center' })]"
  >
    <HStack gap="30" align="start">
      <!--      <component :is="projectCardIconMapper[project.answer_type]" :class="classes.icon" />-->
      <VStack gap="10" align="start" :class="classes.text_info">
        <HStack gap="10">
          <AppText weight="700">{{ project.title }}</AppText>
          <AppText variant="secondary" weight="700">#{{ project.code }}</AppText>
        </HStack>
        <AppText size="s" class="task-description">
          {{ project.description }}
        </AppText>
      </VStack>
    </HStack>
    <VStack gap="16">
      <AppButton
        class="begin-btn"
        button-tag="link"
        :to="routes.project_welcome(project.ID.toString())"
        >Приступить</AppButton
      >
      <AppText size="s" variant="secondary"
        >Выполнено задач: {{ project.completed_tasks.length }}</AppText
      >
    </VStack>
  </AppCard>
</template>
