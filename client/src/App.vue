<template>
  <v-app>
    <v-main>
      <router-view
        :events="allEvents"
        :clubs="allClubs"
        :bewertungen="allBewertungen"
        class="mb-15"
      />
    </v-main>

    <BottomNavigation />
  </v-app>
</template>

<script>
import axios from 'axios';

// COMP
import BottomNavigation from '@/components/BottomNavigation.vue';

export default {
  name: 'App',
  components: {
    BottomNavigation,
  },

  data: () => ({
    allClubs: [],
    oneClub: [],
    allEvents: [],
    allBewertungen: [],
  }),
  methods: {
    // Das mit dem ENV machen wie in PWA Übung 2
    // Get Data
    //

    // getClubs,
    async getClubs() {
      try {
        const { data } = await axios.get(`http://localhost:3000/clubs`);
        this.allClubs = data;
        console.log(this.allClubs);
      } catch (error) {
        console.log(error.message);
      }
    },
    // getEvents,
    async getEvents() {
      try {
        const { data } = await axios.get(`http://localhost:3000/events`);
        this.allEvents = data;
        console.log(this.allEvents);
      } catch (error) {
        console.log(error.message);
      }
    },
    // getClub,
    async getClub(id) {
      try {
        const { data } = await axios.get(`http://localhost:3000/clubs/${id}`);
        this.oneClub = data;
        console.log(this.oneClub);
      } catch (error) {
        console.log(error.message);
      }
    },
    // getEvent,

    // getBewertungen,
    async getBewertungen() {
      try {
        const { data } = await axios.get(`http://localhost:3000/bewertungen`);
        this.allBewertungen = data;
        console.log(this.allBewertungen);
      } catch (error) {
        console.log(error.message);
      }
    },
  },

  created() {
    this.getClubs();
    this.getEvents();
    this.getBewertungen();
  },
};
</script>
