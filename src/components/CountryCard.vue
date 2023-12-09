<template>
  <Card
    :image="image"
    :title="city"
    :tag="country"
    :description="description"
  />
</template>

<script setup lang="ts">
import Card from '../components/Card.vue';

defineProps<{
  image: string
  city: string
  country: string
  description: string
}>()
</script>

<style scoped>
h2, h3 {
  text-transform: uppercase;
}
</style>
