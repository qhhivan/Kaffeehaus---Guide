<template>
  <div>
    <!-- APP-BAR -->
    <!-- Create Event -->
    <CrEventAppBar :clubs="clubs" />

    <!-- Event Updaten -->
    <!-- COMP UPDATE EVENT DIALOG -->
    <v-col cols="12" v-for="e in events" v-bind:key="e.id">
      <UpdEventDialog :e="e" />
    </v-col>
  </div>
</template>

<script>
import UpdEventDialog from '@/components/UpdEventDialog.vue';
import CrEventAppBar from '@/components/CrEventAppBar.vue';
export default {
  props: {
    events: Array,
    clubs: Array,
  },
  components: {
    UpdEventDialog,
    CrEventAppBar,
  },
};
</script>
