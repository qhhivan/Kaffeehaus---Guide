<template>
  <v-container>
    <v-bottom-navigation fixed app>
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
    </v-bottom-navigation>
  </v-container>
</template>
<script>

</script>
