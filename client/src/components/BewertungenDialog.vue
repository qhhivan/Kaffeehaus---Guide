<template>
  <v-dialog transition="dialog-top-transition" persistent max-width="600px">
    <!-- Wenn man auf diese clickt werden einem alle Bewertungen angezeigt -->
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" text @click="filterBewertung(c.id)">
        <span class="ml-4">Bewertungen</span>
        <v-rating
          :value="Math.round(c.avg)"
          color="amber"
          dense
          half-increments
          readonly
          size="20"
          class="ml-4"
        ></v-rating>
      </div>
    </template>
    <!-- ENDE -->

    <!-- Content -->
    <template v-slot:default="dialog">
      <v-card>
        <!-- Close Button -->
        <v-btn
          icon
          class="float-right mb-4 ml-10"
          @click="dialog.value = false"
          rounded
        >
          <v-icon>{{ mdiCloseThick }}</v-icon>
        </v-btn>
        <!-- ENDE -->

        <!-- Bewertungen - Überschrift -->
        <v-card-title>
          <span class="text-h7 mb-5">Bewertungen</span>
        </v-card-title>
        <!-- ENDE -->

        <!-- Bewertungen - Body -->
        <v-card-text>
          <v-card v-for="b in ClubsBewertungen" v-bind:key="b.id">
            <!-- Bewertungen - Rating -->
            <v-row
              ><v-rating
                :value="Math.round(b.stars)"
                color="amber"
                dense
                half-increments
                readonly
                size="25"
                class="ml-6 mt-4"
              ></v-rating
            ></v-row>

            <!-- Bewertungen - Beschreibung -->
            <v-row class="my-4 mx-auto text-subtitle-1">
              <span class="font-weight-bold ml-4">Beschreibung</span>
              <v-card-text>{{ b.description }}</v-card-text>
            </v-row>
          </v-card>
        </v-card-text>
        <v-spacer></v-spacer>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mdiCloseThick } from '@mdi/js';

export default {
  props: {
    c: Object,
    clubs: Array,
    bewertungen: Array,
  },

  data() {
    return {
      ClubsBewertungen: '',
      dialog: false,
      mdiCloseThick: mdiCloseThick,
      
    };
  },
  methods: {
    filterBewertung(id) {
      this.ClubsBewertungen = this.bewertungen.filter((b) => b.lokal_id == id);
      console.log(this.ClubsBewertungen);
    },
  },
};
</script>
