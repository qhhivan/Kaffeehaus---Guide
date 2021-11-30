<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
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
  },

  created() {
    this.getClubs();
    this.getEvents();
  },
};
</script>
