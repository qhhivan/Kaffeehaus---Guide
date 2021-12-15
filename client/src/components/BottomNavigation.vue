<template>
  <v-bottom-navigation
    background-color="white"
    fixed
    border="top"
    border-color="#272727"
    border-style="solid"
    class="pa-3"
    height="70"
  >
    <!-- Events -->
    <v-btn :to="'/'" color="white">
      <img src="../../public/img/calendar.png" width="35" height="35" />
    </v-btn>

    <!-- LOGO -->
    <div color="white" >
      <img src="../../public/img/Logo.png" alt="Logo" width="45" height="45" class="mx-10"/>
    </div>

    <v-btn :to="'/clubs'" color="white" >
      <!-- Clubs -->
      <img src="../../public/img/glass-cocktail.png" width="35" height="35" />
    </v-btn>
  </v-bottom-navigation>
</template>
