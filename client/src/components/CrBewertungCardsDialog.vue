<template>
  <v-dialog transition="dialog-top-transition" persistent max-width="600px">
    <!-- Bewertung erstellen - Button -->
    <template v-slot:activator="{ on, attrs }">
      <!-- Den Club Filtern -->
      <div v-bind="attrs" v-on="on" text>
        <!-- onclick sollen alle Bewertungen angezeigt werden -->
        <v-btn>Bewerten</v-btn>
      </div>
    </template>
    <!-- Bewertung erstellen - Button ENDE -->

    <!-- Bewertung erstellen - Form -->
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>
          <span class="text-h7 mb-5">Clubs bewerten</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <!-- Bewertung erstellen - Rating -->

            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Bewerte von 0-5 Sternen"
                  required
                  hide-details
                  single-line
                  type="number"
                  v-model="bewertungStars"
                ></v-text-field>
              </v-col>
              <!-- Bewertung erstellen - Rating  ENDE-->

              <!-- Bewertung erstellen - Beschreibung -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Beschreibung"
                  v-model="bewertungBeschreibung"
                  clearable
                ></v-text-field>
              </v-col>
              <!-- Bewertung erstellen - Beschreibung ENDE -->

              <!--  -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- Bewertung erstellen - Close -->

                <v-btn color="blue darken-1" text @click="dialog.value = false">
                  Close
                </v-btn>

                <!-- Bewertung erstellen - Save -->
                <v-btn
                  color="blue darken-1"
                  text
                  @click="
                    createBewertung(
                      bewertungStars,
                      bewertungBeschreibung,
                      c.id,
                    ),
                      (dialog.value = false)
                  "
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-card-text>
        <v-spacer></v-spacer>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    c: Object,
  },
  data() {
    return {
      dialog: false,
      bewertungStars: '3',
      bewertungBeschreibung: 'TEST',
    };
  },
  methods: {
    async createBewertung(rating, beschreibung, lokalId) {
      console.log(beschreibung, rating, lokalId);
      try {
        await axios.post('http://localhost:3000/bewertung', {
          stars: rating,
          description: beschreibung,
          lokal_id: lokalId,
        });
        return true;
      } catch (error) {
        console.log(error.message);
      }
    },

    
  },
};
</script>
