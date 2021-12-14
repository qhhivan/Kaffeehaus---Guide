<template>
  <div>
    <!-- Oben soll es ein Filtern und ein Sortieren nach geben -->
    <!-- Filtern nach 
        - Öffnungszeiten
        - Musik
        - Bezirk
        - Preisklasse
        
        Mehreres geht auch
         -->

    <!-- Sortieren nach ist Optional (wenn es ohne Datenbank geht) -->
    <!-- Sortieren nach 
        - Preisklasse
        - Öffnungszeiten
        - Name -->

    <!-- Comp. Card -->
    <!-- Es werden alle Clubs (Name, Address, Preisklasse, Öffnungszeiten) angezeigt sortiert nach bewertung -->

    <!-- Ganz unten soll eine Navbar sein wo man Zwischen Events und Clubs switschen kann -->
    <ClubCards :clubs="clubs" :bewertungen="bewertungen"/>
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
