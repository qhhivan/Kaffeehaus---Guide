<template>
  <!-- <v-bottom-navigation fixed app :value="value" color="primary" background-color="red"
    shift
      >
      <v-btn :to="'/events'">
        <span>Events</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn disabled>
        <span>Logo</span>
        <v-icon>LOGO</v-icon>
      </v-btn>

      <v-btn :to="'/clubs'">
        <span>Club</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  <v-bottom-navigation
    background-color="blue-grey"
    fixed
    class="pa-3"
    height="70"
  >
    <v-btn :to="'/events'">
      <img src="../../public/img/calendar.png" width="35" height="35" />
    </v-btn>

    <!-- LOGO -->
    <div>
      <img src="../../public/img/Logo.png" alt="Logo" width="85" height="85" />
    </div>

    <v-btn :to="'/clubs'">
      <!-- <span>Club</span> -->

      <img src="../../public/img/glass-cocktail.png" width="35" height="35" />
    </v-btn>
  </v-bottom-navigation>
</template>
