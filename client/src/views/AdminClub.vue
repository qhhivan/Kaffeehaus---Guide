<template>
  <div>
    <CrClubAppBar />
    <v-col cols="12" v-for="c in clubs" v-bind:key="c.id">
      <!-- Wenn man auf eine Card drauf clickt kann man diese Updaten -->
      <UpdClubDialog :c="c" />
    </v-col>
  </div>
</template>

<script>
import UpdClubDialog from '@/components/UpdClubDialog.vue';
import CrClubAppBar from '@/components/CrClubAppBar.vue';

export default {
  props: {
    clubs: Array,
  },
  components: {
    UpdClubDialog,
    CrClubAppBar,
  },
};
</script>
