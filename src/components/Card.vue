<template>
  <div class="card" :style="{ backgroundImage: `url(${image})` }">
    <h4>{{ tag }}</h4>
    <h1 v-if="mainCard">{{ title }}</h1>
    <h2 v-else>{{ title }}</h2>
    <p v-if="paragraph">{{ paragraph }}</p>
    <div v-if="description" class="content">
      <p>{{ description }}</p>
      <a :href="`https://www.google.com/search?q=${title}`" target="_blank">Explore More</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mainCard?: boolean
  image: string
  title: string
  tag: string
  paragraph?: string
  description?: string
}>()
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  text-align: center;
  min-height: 256px;
  border-radius: 0.5rem;
  width: 100%;
  object-fit: cover;
  background-position: center;
}

.card:after {
  content: "";
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background: rgba(0,0,0,0.5);
  pointer-events: none;
}

.card:hover:after {
  background: rgba(0,0,0,0.6);
}

.card .content {
  opacity: 0;
}

.card:hover .content {
  opacity: 1;
}

img {
  max-width: 100%;
  position: absolute;
  height: auto;
  filter: brightness(.5);
}

h1 {
  font-weight: 700;
  font-size: 4rem;
}

h2 {
  font-weight: 500;
  font-size: 2rem;
}

h4 {
  font-weight: 300;
  font-size: 1rem;
}

p {
  padding: 0 1rem;
  max-width: 40rem;
}

h1, h2, h4, p, a {
  z-index: 1;
  color: white;
  margin: 0;
}

h2, h4 {
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.content p {
  max-width: 16rem;
}

.content a {
  text-decoration: none;
  padding: 0.5rem;
  color: white;
  border: solid white 1px;
  width: fit-content;
}
</style>
