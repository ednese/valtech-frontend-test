<script setup lang="ts">
import { ref } from 'vue'
import Card from './components/Card.vue';
import CountryCard from './components/CountryCard.vue';

const items = ref([
  {
    city: 'venice',
    country: 'italy',
    image: '/images/venice.jpeg',
    description: "Known for its romantic canals and historic architecture."
  },
  {
    city: 'berlin',
    country: 'germany',
    image: '/images/berlin.jpeg',
    description: "A dynamic and creative city with a modern vibe, known for its cultural diversity and historical significance."
  },
  {
    city: 'barcelona',
    country: 'spain',
    image: '/images/barcelona.jpeg',
    description: " vibrant city with unique architecture, lively street life, and a rich cultural scene."
  },
  {
    city: 'paris',
    country: 'france',
    image: '/images/paris.jpeg',
    description: "The City of Light, celebrated for its art, fashion, and iconic landmarks."
  },
  {
    city: 'amsterdam',
    country: 'netherlands',
    image: '/images/amsterdam.jpeg',
    description: "Famous for its picturesque canals, historic buildings, and liberal atmosphere."
  },
  {
    city: 'london',
    country: 'united kingdom',
    image: '/images/london.jpeg',
    description: "A global metropolis with a rich history, diverse culture, and iconic landmarks."
  },
])
</script>

<template>
  <Card
    mainCard
    class="main-card"
    image="/images/valtech.jpg"
    title="valtech_"
    tag="front-end"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />
  <div class="grid">
    <CountryCard
      v-for="item in items"
      :key="item.city"
      :image="item.image"
      :city="item.city"
      :country="item.country"
      :description="item.description"
    />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@100;300;400;500;700&display=swap');

.grid {
  display: grid;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  grid-template-columns: repeat(4, 1fr);
}

.grid .card {
  grid-column: span 1;
}

.grid .card:first-child, .grid .card:last-child {
  grid-column: span 2;
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid .card:first-child, .grid .card:last-child {
    grid-column: span 1;
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 375px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card.main-card {
  height: 512px;
}
</style>
