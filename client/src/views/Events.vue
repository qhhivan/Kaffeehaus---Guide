<template>
  <div>
    <EventCards :events="events" :clubs="clubs"/>
  </div>
</template>

<script>
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
  data() {
    return {
      dialog: false,
      club: [],
    };
  },
  components: {
    EventCards,
  },
  
};
</script>

<style lang="scss" scoped></style>
