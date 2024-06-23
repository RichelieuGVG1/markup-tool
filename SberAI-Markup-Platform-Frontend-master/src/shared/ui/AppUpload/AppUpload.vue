<script setup lang="ts">
import UploadIcon from '@/shared/assets/icons/upload.svg'


const emit = defineEmits(['update:modelValue']);
defineProps({
  multiple: {
    type: Boolean,
    default: false
  }
});

const updateInput = (event: any) => {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <label class="file-input">
    <div class="input-container">
      <input
          @input="updateInput"
          :multiple="multiple"
          placeholder="Загрузить"
      />
    </div>
  </label>
</template>


<style scoped>
.file-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
}

.file-input input {
  border-radius: 63px;
  border: 3px dashed var(--accent-color);
  background: transparent;
  height: 84px;
  width: 427px;
  align-items: center;
}

.file-input input::placeholder{
  color: var(--accent-color);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}

</style>
