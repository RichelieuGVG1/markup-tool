<script setup lang="ts">
import AppCard from '@/shared/ui/AppCard/AppCard.vue'
import classes from './ProjectCard.module.scss'
import { getHStack } from '@/shared/lib/helpers/getHStack'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import { projectCardIconMapper } from '../../const/projectsListConsts'
import type { PropType } from 'vue'
import type { Project } from '../../model/types/project'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import ArrowIcon from '@/shared/assets/icons/arrow_right.svg'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'

import { routes } from '@/shared/const/routes'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
})
</script>

<template>
  <AppCard
    padding-vertical="0"
    padding-horizontal="0"
    :class="[classes.task, getHStack({ justify: 'between', align: 'center' })]"
  >
    <HStack align="stretch" max justify="between">
      <HStack :class="classes.mobile_text" gap="8">
        <!--        <component :is="projectCardIconMapper[project.answer_type]" :class="classes.icon" />-->
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
      <AppButton
        button-tag="link"
        size="custom"
        border-radius="custom-radius"
        :class="classes.mobile_btn"
        :to="routes.project_welcome(project.ID.toString())"
      >
        <ArrowIcon width="12" height="15" />
      </AppButton>
    </HStack>
  </AppCard>
</template>

<style scoped lang="scss"></style>
