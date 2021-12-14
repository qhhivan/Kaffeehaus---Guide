<template>
  <div>
    <v-col cols="12" v-for="c in clubs" v-bind:key="c.id">
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

        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <!-- Den Club Filtern -->
            <div v-bind="attrs" v-on="on" text @click="filterBewertung(c.id)">
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
            </div>
          </template>
          <!--  -->
          <!-- Überschrift -->

          <v-card>
            <v-card-title>
              <span class="text-h7 mb-5">Bewertungen</span>
            </v-card-title>
            <v-card-text>
              <!-- CARD Bewertungen -->
              <v-card v-for="b in ClubsBewertungen" v-bind:key="b.id" class="my-auto">
                <!-- Rating -->
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

                <v-row class="my-4 mx-auto text-subtitle-1">
                  <span class="font-weight-bold ml-4">Beschreibung</span>

                  <v-card-text>{{ b.description }}</v-card-text>
                </v-row>
              </v-card>
            </v-card-text>
          </v-card>
          <v-spacer></v-spacer>
          <v-btn color="#385F73" text> Close </v-btn>
        </v-dialog>
        <!--  -->

        <!-- Club beschreibung -->
        <v-card-text
          ><span class="font-weight-bold">Preis:</span> {{ c.price }}
          <br /><span class="font-weight-bold">Musik:</span> {{ c.music }}
          <br /><span class="font-weight-bold">Tel. </span>{{ c.phone_number }}
          <br /><span class="font-weight-bold">Website:</span> <br />{{
            c.website
          }}
        </v-card-text>

        <!-- Club beschreibung -->
        <v-card-text class="mt-0"></v-card-text>

        <!-- Club Name -->
      </v-card>
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
    filterBewertung(id) {
      // Der Club wird gefiltert

      // console.log(id);
      // console.log(this.bewertungen);
      this.ClubsBewertungen = this.bewertungen.filter((b) => b.lokal_id == id);
      console.log(this.ClubsBewertungen);
      // console.log(Math.round(this.club.avg));
    },
  },
};
</script>

<style lang="scss" scoped></style>
