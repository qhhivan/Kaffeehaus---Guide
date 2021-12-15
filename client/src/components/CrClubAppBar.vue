<template>
  <v-card  flat tile>
    <v-toolbar>
      <!-- Überschrift -->
      <v-toolbar-title class="mr-16 ml-4">Admin - Club</v-toolbar-title>

      <!-- Neues Event erstellen -->
      <v-dialog transition="dialog-top-transition" persistent max-width="600px">
        <!-- Button Event Erstellen -->
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" text class="ml-16">
            <v-btn color="primary" outlined right>+</v-btn>
          </div>
        </template>

        <!-- Form zum Erstellen -->
        <template v-slot:default="dialog">
          <v-card>
            <!-- Überschrift -->
            <v-card-title>
              <span class="text-h5">Bearbeiten</span>
            </v-card-title>
            <!--  -->

            <!-- FORM -->
            <v-card-text>
              <v-container>
                <v-row>
                  <!-- Event Name -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Club Name"
                      required
                      v-model="newClub.name"
                    ></v-text-field>
                  </v-col>

                  <!-- Event Datum -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Musik"
                      required
                      v-model="newClub.music"
                    ></v-text-field>
                  </v-col>

                  <!-- Event - Uhrzeit -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Adresse"
                      required
                      v-model="newClub.address"
                    ></v-text-field>
                  </v-col>

                  <!-- Event - Beschreibung -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Öffnungszeiten"
                      required
                      v-model="newClub.opening_hours"
                    ></v-text-field>
                  </v-col>

                  <!-- Event - Club -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Tel."
                      v-model="newClub.phone_number"
                    ></v-text-field>
                  </v-col>
                  <!-- Price -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Preis"
                      v-model="newClub.price"
                    ></v-text-field>
                  </v-col>
                  <!-- Webseite -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Webseite"
                      v-model="newClub.website"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <!--  -->

            <!-- Save/Close -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- Close -->
              <v-btn color="blue darken-1" text @click="dialog.value = false">
                Close
              </v-btn>

              <!-- Save -->
              <v-btn color="blue darken-1" text @click="addEvent()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-toolbar>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    clubs: Array,
  },
  data() {
    return {
      dialog: false,
      newClub: {
        music: 'Dragana',
        opening_hours: 'Uvjek',
        phone_number: '123456789',
        price: '$',
        website: 'NIX',
        address: 'U PM',
        name: 'DM SAT',
      },
    };
  },
  methods: {
    async addEvent() {
      // AXIOS CALL
      try {
        await axios.post('http://localhost:3000/clubs', {
          address: this.newEvent.address,
          website: this.newEvent.website,
          music: this.newEvent.music,
          phoneNumber: this.newEvent.phone_number,
          price: this.newEvent.price,
          openingHours: this.newEvent.opening_hours,
        });
        return true;
      } catch (error) {
        console.log(error.message);
      }
    },
    // function welche mir die LokalID liefert
    filterClubID(name) {
      //   this.newEvent.lokalId = this.clubs.filter((c) => c.name == name)[0].id;
      return this.clubs.filter((c) => c.name == name)[0].id;
      //   console.log(this.newEvent.lokalId);
    },
  },
};
</script>
