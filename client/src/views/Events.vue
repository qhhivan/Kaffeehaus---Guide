<template>
  <div>
    <!-- Oben soll es ein Filtern und ein Sortieren nach geben -->
    <!-- Filtern nach 
        - Datum
        - Titel (Nicht genauer sondern zB 'Happy H')
        - Musik        
        Mehreres geht auch
         -->

    <!-- Sortieren nach ist Optional (wenn es ohne Datenbank geht) -->
    <!-- Sortieren nach 
    - Datum -->

    <!-- Comp. Card -->

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
