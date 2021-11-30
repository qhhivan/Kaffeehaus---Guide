<template>
  <div class="mx-5">
    <div
      class="d-flex flex-wrap mb-6 justify-center align-stretch"
      color="grey lighten-2"
    >
      <div v-for="car in cars" :key="car.id" outlined tile class="ma-3">
        <EventCard :car="car" @buy="buyACar($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventCards',

  components: {
    EventCard,
  },

  props: {
    events: Array,
  },
};
</script>

<style lang="scss" scoped></style>
