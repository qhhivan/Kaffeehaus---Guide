<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <!-- Überschrift -->
      <v-toolbar-title>Admin - Events</v-toolbar-title>

      <!-- Neues Event erstellen -->
      <v-dialog transition="dialog-top-transition" persistent max-width="600px">
        <!-- Button Event Erstellen -->
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" text>
            <v-btn color="grey" right>+</v-btn>
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
                      v-model="newEvent.name"
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
export default {
  props: {
    clubs: Array,
  },
  data() {
    return {
      dialog: false,
      newEvent: {
        lokalId: '',
        date: '',
        description: '',
        title: '',
        time: '',
        name: '',
      },
    };
  },
  methods: {
    addEvent() {
        // AXIOS CALL
        
      this.newEvent.lokalId = this.filterClubID(this.newEvent.name);
      console.log(this.newEvent.lokalId);
      console.log(this.newEvent.date);
      console.log(this.newEvent.description);
      console.log(this.newEvent.title);
      console.log(this.newEvent.time);
      console.log(this.newEvent.name);
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
