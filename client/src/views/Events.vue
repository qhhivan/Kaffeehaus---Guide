<template>
  <div>
    <!-- Oben soll es ein Filtern und ein Sortieren nach geben -->
    <!-- Filtern nach 
        - Datum
        - Titel (Nicht genauer sondern zB 'Happy H')
        - Musik        
        Mehreres geht auch
         -->

    <!-- Sortieren nach ist Optional (wenn es ohne Datenbank geht) -->
    <!-- Sortieren nach 
    - Datum -->

    <!-- Comp. Card -->

    <v-col cols="12" v-for="e in events" v-bind:key="e.id">
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
          <!-- <v-btn text>{{ e.name }}</v-btn> -->

          <!--  -->
          <!-- <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" text>
                {{ e.name }}
              </v-btn>
            </template> -->
            <!--  -->
            
          <!-- </v-dialog> -->
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
    },
    clubs: {
      type: Array,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
