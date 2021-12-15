<template>
  <v-dialog transition="dialog-top-transition" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" text>
        <!-- Club Cards - Alle Clubs werden angezeigt -->
        <v-card color="primary" dark>
          <!-- Club Name -->
          <v-card-title class="text-h5 mb-4">{{ c.name }}</v-card-title>

          <!-- Öffnungszeiten & Adresse-->
          <v-card-subtitle
            ><span class="font-weight-bold">Address:</span> {{ c.address }}
            <br /><span class="font-weight-bold">Öffnungszeiten:</span>
            {{ c.opening_hours }}
          </v-card-subtitle>

          <!-- Bewertung -->
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

          <!-- Club Infos -->
          <v-card-text
            ><span class="font-weight-bold">Preis:</span> {{ c.price }}
            <br /><span class="font-weight-bold">Musik:</span> {{ c.music }}
            <br /><span class="font-weight-bold">Tel. </span
            >{{ c.phone_number }} <br /><span class="font-weight-bold"
              >Website:</span
            >
            <br />{{ c.website }}
          </v-card-text>
        </v-card>
      </div>
    </template>
    <!-- CLUB CARD - ENDE    -->

    <!-- UPDATE DIALOG -->
    <template v-slot:default="dialog">
      <v-card>
        <!-- Überschrift -->
        <v-card-title>
          <span class="text-h5">Bearbeiten</span>
        </v-card-title>

        <!-- UPDATE FORM -->
        <v-card-text>
          <v-container>
            <v-row>
              <!-- Name -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Name"
                  required
                  :value="c.name"
                  v-model="c.name"
                ></v-text-field>
              </v-col>

              <!-- Adresse -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Adresse"
                  required
                  :value="c.address"
                  v-model="c.address"
                ></v-text-field>
              </v-col>

              <!-- Öffnungszeiten -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Öffnungszeiten"
                  required
                  :value="c.opening_hours"
                  v-model="c.opening_hours"
                ></v-text-field>
              </v-col>

              <!-- Musik -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Musik"
                  required
                  :value="c.music"
                  v-model="c.music"
                ></v-text-field>
              </v-col>

              <!-- Preis -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Preis"
                  required
                  :value="c.price"
                  v-model="c.price"
                ></v-text-field>
              </v-col>

              <!-- Tel. -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Telefonnummer"
                  required
                  :value="c.phone_number"
                  v-model="c.phone_number"
                ></v-text-field>
              </v-col>

              <!-- Webseite -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Webseite"
                  required
                  :value="c.website"
                  v-model="c.website"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <!-- CARD FORM ENDE -->

        <!-- SAVE/CLOSE -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Delete -->
          <v-btn
            depressed
            color="error"
            text
            @click="deleteClub(c.id), (dialog.value = false)"
          >
            Delete
          </v-btn>
          <!-- Close -->
          <v-btn color="blue darken-1" text @click="dialog.value = false">
            Close
          </v-btn>

          <!-- Save -->
          <v-btn
            color="blue darken-1"
            text
            @click="updateClub(c), (dialog.value = false)"
          >
            Save
          </v-btn>
        </v-card-actions>
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
    };
  },
  methods: {
    async deleteClub(id) {
      console.log(`Delete Club ${id}`);
      try {
        axios.delete(`http://localhost:3000/clubs/${id}`);
      } catch (error) {
        console.log(error.message);
      }
    },
    async updateClub(club) {
      console.log(club);
      try {
        await axios.patch(`http://localhost:3000/clubs/${club.id}`, {
          address: club.address,
          website: club.website,
          music: club.music,
          phone_number: club.phone_number,
          price: club.price,
          name: club.name,
          opening_hours: club.opening_hours,
        });
        return true;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
