<template>
  <div>
    <ClubCards :clubs="clubs" :bewertungen="bewertungen" @refresh="$emit('refresh')"/>
  </div>
</template>

<script>
import ClubCards from '@/components/ClubCards.vue';
export default {
  components: {
    ClubCards,
  },
  props: {
    events: {
      type: Array,
    },
    clubs: {
      type: Array,
    },
    bewertungen: {
      type: Array,
    }
  },
  data() {
    return {
      club: '',
      dialog: false,
    };
  },
  methods: {
    // filterClub(name) {
    //   // Der Club wird gefiltert

    //   // console.log(name);
    //   // console.log(this.clubs);
    //   this.club = this.clubs.filter((c) => c.name == name)[0];
    //   console.log(this.club);
    //   // console.log(Math.round(this.club.avg));
    // },
  },
};
</script>

<style lang="scss" scoped></style>
