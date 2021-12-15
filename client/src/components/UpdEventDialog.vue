<template>
  <v-dialog transition="dialog-top-transition" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }" :search="events.title">
      <div v-bind="attrs" v-on="on" text>
        <v-card color="#385F73" dark>
          <!-- Event Name -->
          <v-card-title class="text-h5">{{ e.title }}</v-card-title>

          <!-- Datum und Uhrzeit -->
          <v-card-subtitle>{{ e.date }} {{ e.time }}</v-card-subtitle>

          <!-- Event Beschreibung -->
          <v-card-subtitle>Beschreibung:{{ e.description }}</v-card-subtitle>
          <v-btn readonly>
            {{ e.name }}
          </v-btn>
        </v-card>
      </div>
      <!-- Dialog Card Ende -->

      <!-- Form Update  -->
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>
          <span class="text-h5">Bearbeiten</span>
        </v-card-title>
        <!-- Überschrift -->

        <!-- FORM UPDATE -->
        <v-card-text>
          <v-container>
            <v-row>
              <!-- NAME -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Eventname"
                  required
                  :value="e.title"
                  v-model="e.title"
                ></v-text-field>
              </v-col>

              <!-- DATUM -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Datum"
                  required
                  :value="e.date"
                  v-model="e.date"
                ></v-text-field>
              </v-col>

              <!-- UHRZEIT -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Uhrzeit"
                  required
                  :value="e.time"
                  v-model="e.time"
                ></v-text-field>
              </v-col>

              <!-- BESCHREIBUNG -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Beschreibung"
                  required
                  :value="e.description"
                  v-model="e.description"
                ></v-text-field>
              </v-col>

              <!-- CLUB NAME -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Club"
                  readonly
                  :value="e.name"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <!--  -->

        <!-- Close/Save -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Close -->
          <v-btn color="blue darken-1" text @click="dialog.value = false">
            Close
          </v-btn>

          <!-- Save -->
          <v-btn color="blue darken-1" text @click="updateClub(e)">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    updateClub(event) {
      console.log(event);
    },
  },
};
</script>
