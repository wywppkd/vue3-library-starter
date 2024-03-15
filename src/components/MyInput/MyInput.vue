<template>
  <input @change="handleChange" :value="props.value" class="red" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  value: number;
}>();
const emit = defineEmits<{
  (e: 'change', value: number): void;
}>();

const handleChange = (e: Event) => {
  const value = Number((e.target as HTMLInputElement).value);
  if (!value) return;
  emit('change', value);
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
