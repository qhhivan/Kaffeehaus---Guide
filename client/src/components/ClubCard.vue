<template>
  <!-- DIE DATEN MÜSSEN ÜBERGEBEN WERDEN -->

  <div>
    <v-card color="#385F73" dark>
        <!-- Club Name -->
        <v-card-title class="text-h5">{{ e.title }}</v-card-title>

        <!-- Datum und Uhrzeit -->
        <v-card-subtitle>{{ e.date }} {{ e.time }}</v-card-subtitle>

        <!-- Club beschreibung -->
        <v-card-subtitle>{{ e.description }}</v-card-subtitle>

        <!-- Club Name -->
        <v-card-actions>
          <!-- Wenn man hier auf den Club drückt wird man weitergeleitet zu den Club Infos -->
          <v-btn text>{{ e.name }}</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
