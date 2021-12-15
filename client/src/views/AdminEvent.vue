<template>
  <div>
    <!-- APPBAR -->
    <v-col cols="12">
      <v-card color="grey lighten-4" flat tile>
        <v-toolbar>
          <!-- Überschrift -->
          <v-toolbar-title>Admin - Events</v-toolbar-title>

          <!-- Neues Event erstellen -->
          <v-dialog
            transition="dialog-top-transition"
            persistent
            max-width="600px"
          >
            <!-- Button Event Erstellen -->
            <template v-slot:activator="{ on, attrs }" :search="events.title">
              <div v-bind="attrs" v-on="on" text>
                <v-btn color="grey" right>+</v-btn>
              </div>
            </template>

            <!-- Form zum Erstellen -->
            <template v-slot:default="dialogCE">
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
                          label="Eventname"
                          required
                          v-model="newEvent.title"
                        ></v-text-field>
                      </v-col>

                      <!-- Event Datum -->
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Datum"
                          required
                          v-model="newEvent.date"
                        ></v-text-field>
                      </v-col>

                      <!-- Event - Uhrzeit -->
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Uhrzeit"
                          required
                          v-model="newEvent.time"
                        ></v-text-field>
                      </v-col>

                      <!-- Event - Beschreibung -->
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Beschreibung"
                          required
                          v-model="newEvent.description"
                        ></v-text-field>
                      </v-col>

                      <!-- Event - Club -->
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Club"
                          readonly
                          :value="newEvent.name"
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
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogCE.value = false"
                  >
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
        </v-toolbar>
      </v-card>
    </v-col>
    <!-- APPBAR - ENDE -->

    <!-- Dialog - Events Card  -->
    <v-col cols="12" v-for="e in events" v-bind:key="e.id">
      <!-- Event Updaten -->
      <v-dialog transition="dialog-top-transition" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }" :search="events.title">
          <div v-bind="attrs" v-on="on" text>
            <v-card color="#385F73" dark>
              <!-- Event Name -->
              <v-card-title class="text-h5">{{ e.title }}</v-card-title>

              <!-- Datum und Uhrzeit -->
              <v-card-subtitle>{{ e.date }} {{ e.time }}</v-card-subtitle>

              <!-- Event Beschreibung -->
              <v-card-subtitle
                >Beschreibung:{{ e.description }}</v-card-subtitle
              >
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
      club: '',
      menu: false,
      dialogCE: false,
    };
  },
  methods: {
    deleteClub(id) {
      console.log(`Delete Event ${id}`);
    },
    updateClub(event) {
      console.log(event);
    },
    filterClub(name) {
      this.club = this.clubs.filter((c) => c.name == name)[0];
      console.log(this.club);
    },
  },
};
</script>
