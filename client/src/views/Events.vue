<template>
  <div>
    <EventCards :events="events" :clubs="clubs"/>
  </div>
</template>

<script>
// Import Components
import EventCards from '@/components/EventCards.vue';

export default {
  props: {
    events: {
      type: Array,
    },
    clubs: {
      type: Array,
    },
  },
  components: {
    EventCards,
  },
  
};
</script>
