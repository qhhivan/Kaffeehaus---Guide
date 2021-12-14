<template>
  <div>
    <!-- Es soll ein Formular sein mit schon ausgefühlten Daten von dem einen CLub -->

    <!-- Club Name -->
    <!-- Club Address -->
    <!-- Club Website -->
    <!-- Club Music -->
    <!-- Club Tel. -->
    <!-- Club Preisklasse -->
    <!-- Club Öffnungszeit -->

    <!-- Ganz Unten soll ein Del. und ein Save Button stehen -->

    <!-- Delete Club -->
    <!-- Save/ Update -- UpdateClub -->
    <v-col cols="12" v-for="c in clubs" v-bind:key="c.id">
      <v-dialog transition="dialog-top-transition" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <!-- Den Club Filtern -->
          <div v-bind="attrs" v-on="on" text>
            <!-- onclick sollen alle Bewertungen angezeigt werden -->

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

              <!-- Den Club Filtern -->
              <!-- onclick sollen alle Bewertungen angezeigt werden -->
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

              <!--  -->

              <!-- Club beschreibung -->
              <v-card-text
                ><span class="font-weight-bold">Preis:</span> {{ c.price }}
                <br /><span class="font-weight-bold">Musik:</span>
                {{ c.music }} <br /><span class="font-weight-bold">Tel. </span
                >{{ c.phone_number }} <br /><span class="font-weight-bold"
                  >Website:</span
                >
                <br />{{ c.website }}
              </v-card-text>

              <!-- Club beschreibung -->
              <v-card-text class="mt-0"
                ><v-btn depressed color="error" @click="deleteClub(c.id)">
                  Delete
                </v-btn></v-card-text
              >
            </v-card>
          </div>
        </template>
        <template v-slot:default="dialog">
          <!--  -->
          <!-- Überschrift -->

          <v-card>
            <v-card-title>
              <span class="text-h5">Bearbeiten</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Name"
                      required
                      :value="c.name"
                      v-model="c.name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Adresse"
                      required
                      :value="c.address"
                      v-model="c.address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Öffnungszeiten"
                      required
                      :value="c.opening_hours"
                      v-model="c.opening_hours"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Musik"
                      required
                      :value="c.music"
                      v-model="c.music"
                    ></v-text-field> </v-col
                  ><v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Preis"
                      required
                      :value="c.price"
                      v-model="c.price"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Telefonnummer"
                      required
                      :value="c.phone_number"
                      v-model="c.phone_number"
                    ></v-text-field> </v-col
                  ><v-col cols="12" sm="6" md="4">
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
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog.value = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="updateClub(c)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    deleteClub(id) {
      console.log(`Delete Club ${id}`);
    },
    updateClub(club) {
      console.log(club);
    },
  },
};
</script>