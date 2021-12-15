<template>
  <v-bottom-navigation
    background-color="blue-grey"
    fixed
    class="pa-3"
    height="70"
  >
    <!-- Events -->
    <v-btn :to="'/events'" class="blue-grey">
      <img src="../../public/img/calendar.png" width="35" height="35" />
    </v-btn>

    <!-- LOGO -->
    <div class="blue-grey">
      <img src="../../public/img/Logo.png" alt="Logo" width="85" height="85" />
    </div>

    <v-btn :to="'/clubs'" class="blue-grey">
      <!-- Clubs -->
      <img src="../../public/img/glass-cocktail.png" width="35" height="35" />
    </v-btn>
  </v-bottom-navigation>
</template>
