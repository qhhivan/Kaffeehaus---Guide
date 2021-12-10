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
  <v-bottom-navigation background-color="blue-grey" shift fixed>
    <v-btn :to="'/events'">
      <span>Events</span>

      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <!-- LOGO -->
    <div>
      <v-icon>mdi-music-note</v-icon>
    </div>

    <v-btn :to="'/clubs'">
      <span>Club</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script></script>
