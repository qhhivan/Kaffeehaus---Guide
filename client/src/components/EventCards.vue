<template>
  <div>
    <v-col cols="12" v-for="e in events" v-bind:key="e.id">
      <v-card color="#385F73" dark>
        <!-- Club Name -->
        <v-card-title class="text-h5">{{ e.title }}</v-card-title>

        <!-- Datum und Uhrzeit -->
        <v-card-subtitle>{{ e.date }} {{ e.time }}</v-card-subtitle>

        <!-- Club beschreibung -->
        <v-card-subtitle>Beschreibung:{{ e.description }}</v-card-subtitle>

        <!-- Club Name -->
        <v-card-actions>
          <!-- Wenn man hier auf den Club drückt wird man weitergeleitet zu den Club Infos -->
          <!-- <v-btn text>{{ e.name }}</v-btn> -->

          <!-- DIALOG -->
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" text @click="filterClub(e.name)">
                {{ e.name }}
              </v-btn>
            </template>
            <!--  -->
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ club.name }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <!--  -->

                  <!-- Rating -->
                  <v-row
                    ><v-rating
                      :value="Math.round(club.avg)"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="30"
                    ></v-rating
                  ></v-row>

                  <v-row class="my-4 text-subtitle-1">
                    <span class="font-weight-bold">Address</span>

                    <v-card-text>{{ club.address }}</v-card-text>
                  </v-row>

                  <!-- Öffnungszeiten -->
                  <v-row class="my-4 text-subtitle-1">
                    <span class="font-weight-bold">Öffnungszeiten: </span>
                    {{ club.opening_hours }}
                  </v-row>

                  <!-- Musik -->
                  <v-row class="my-4 text-subtitle-1">
                    <span class="font-weight-bold">Musik:</span>
                    <v-card-text>{{ club.music }}</v-card-text>
                  </v-row>

                  <!-- Price -->
                  <v-row class="my-4 text-subtitle-1">
                    <span class="font-weight-bold">Preis:</span>
                    {{ club.price }}
                  </v-row>

                  <!-- Telefonnummer -->
                  <v-row class="my-4 text-subtitle-1">
                    <span class="font-weight-bold">Tel.</span>
                    {{ club.phone_number }}
                  </v-row>

                  <!-- WEBSITE -->
                  <v-row class="my-4 text-subtitle-1">
                    <span class="font-weight-bold">Webseite</span>
                  </v-row>
                  <v-row>
                    {{ club.website }}
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#385F73" text> Close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    events: Array,
    clubs: Array,
  },
  data() {
    return {
      club: '',
      dialog: false,
    };
  },
  methods: {
    filterClub(name) {
      // Der Club wird gefiltert

      // console.log(name);
      // console.log(this.clubs);
      this.club = this.clubs.filter((c) => c.name == name)[0];
      console.log(this.club);
      // console.log(Math.round(this.club.avg));
    },
  },
};
</script>

<style lang="scss" scoped></style>
