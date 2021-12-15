<template>
  <div>
    <!-- Filter nach Preisklasse -->
    <v-toolbar dense elevation="4" color="red" class="pb-10" fixed>
      <v-select
        v-model="preisklasse"
        :items="preisklassen"
        label="Filter nach Preis"
        dense
        @change="filterPreisklasse(preisklasse)"
      ></v-select>
    </v-toolbar>
    <!-- ENDE -->

    <!-- CLUB CARD -->
    <v-col cols="12" v-for="c in filterClubs" v-bind:key="c.id">
      <v-card color="#385F73" dark>
        <!-- Club Name -->
        <v-card-title class="text-h5 mb-4">{{ c.name }}</v-card-title>

        <!-- Öffnungszeiten & Adresse-->
        <v-card-subtitle
          ><span class="font-weight-bold">Address:</span> {{ c.address }}
          <br /><span class="font-weight-bold">Öffnungszeiten:</span>
          {{ c.opening_hours }}
        </v-card-subtitle>

        <!-- Bewertung -->
        <v-dialog
          transition="dialog-top-transition"
          persistent
          max-width="600px"
        >
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
                v-bind="attrs"
                v-on="on"
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
        <!-- Bewertungen - ENDE -->

        <!-- Club Infos -->
        <v-card-text
          ><span class="font-weight-bold">Preis:</span> {{ c.price }}
          <br /><span class="font-weight-bold">Musik:</span> {{ c.music }}
          <br /><span class="font-weight-bold">Tel. </span>{{ c.phone_number }}
          <br /><span class="font-weight-bold">Website:</span> <br />{{
            c.website
          }}
        </v-card-text>
        <!-- Club Infos ENDE -->

        <!-- Bewertung erstellen -->
        <v-card-actions>
          <v-dialog
            transition="dialog-top-transition"
            persistent
            max-width="600px"
          >
            <!-- Bewertung erstellen - Button -->
            <template v-slot:activator="{ on, attrs }">
              <!-- Den Club Filtern -->
              <div v-bind="attrs" v-on="on" text @click="filterBewertung(c.id)">
                <!-- onclick sollen alle Bewertungen angezeigt werden -->
                <v-btn>Bewerten</v-btn>
              </div>
            </template>
            <!-- Bewertung erstellen - Button ENDE -->

            <!-- Bewertung erstellen - Form -->
            <template v-slot:default="dialogCB">
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

                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialogCB = false"
                        >
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
                            )
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
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mdiCloseThick } from '@mdi/js';
export default {
  props: {
    events: Array,
    clubs: Array,
    bewertungen: Array,
  },
  data() {
    return {
      ClubsBewertungen: '',
      dialog: false,
      dialogCB: false,
      mdiCloseThick: mdiCloseThick,
      filterClubs: '',
      preisklassen: ['Alle', 'Günstig', 'Normal', 'Teuer'],
      preisklasse: '',
      bewertungStars: '',
      bewertungBeschreibung: '',
    };
  },
  methods: {
    filterBewertung(id) {
      this.ClubsBewertungen = this.bewertungen.filter((b) => b.lokal_id == id);
      console.log(this.ClubsBewertungen);
    },
    filterPreisklasse(pk) {
      if (pk != 'Alle') {
        if (pk == 'Günstig')
          this.filterClubs = this.clubs.filter((c) => c.price.length === 1);
        else if (pk == 'Normal')
          this.filterClubs = this.clubs.filter((c) => c.price.length === 2);
        else if (pk == 'Teuer')
          this.filterClubs = this.clubs.filter((c) => c.price.length === 3);
      } else this.filterClubs = this.clubs;
    },
    createBewertung(beschreibung, rating, lokalId) {
      this.dialogCB = false;
      console.log(beschreibung, rating, lokalId);
    },
  },
  created() {
    this.filterClubs = this.clubs;
  },
};
</script>
