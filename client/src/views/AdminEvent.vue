<template>
  <div>
    <!-- Appbar -->
    <v-col cols="12">
      <v-card color="grey lighten-4" flat tile>
        <v-toolbar>
          <v-toolbar-title>Admin - Events</v-toolbar-title>
          <v-dialog
            transition="dialog-top-transition"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }" :search="events.title">
              <!-- Den Club Filtern -->
              <div v-bind="attrs" v-on="on" text>
                <!-- onclick sollen alle Bewertungen angezeigt werden -->

                <v-btn color="grey" right>New Events</v-btn>
              </div>

              <!--  -->
            </template>
            <template v-slot:default="dialogCE">
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
                          label="Eventname"
                          required
                          v-model="newEvent.title"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Datum"
                          required
                          v-model="newEvent.date"
                        ></v-text-field>
                        <!--  -->
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="e.date"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="newEvent.date"
                              label="Picker in menu"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <!-- <v-date-picker v-model="e.date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(e.date)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker> -->
                        </v-menu>
                        <!--  -->
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Uhrzeit"
                          required
                          v-model="newEvent.time"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Beschreibung"
                          required
                          v-model="newEvent.description"
                        ></v-text-field>
                      </v-col>
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
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogCE.value = false"
                  >
                    Close
                  </v-btn>
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

    <!--  -->
    <!-- Es soll ein Formular sein mit schon ausgefühlten Daten von dem Event -->

    <!-- Event Title -->
    <!-- Event Beschreibung -->
    <!-- Event Uhrzeit -->
    <!-- Event Datum -->
    <!-- Event lokal_id -->
    <!-- Event Music -->

    <!-- Ganz Unten soll ein Del. und ein Save Button stehen -->

    <!-- Delete Event -->
    <!-- Save/ Update --UpdateEvents -->
    <v-col cols="12" v-for="e in events" v-bind:key="e.id">
      <v-dialog transition="dialog-top-transition" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }" :search="events.title">
          <!-- Den Club Filtern -->
          <div v-bind="attrs" v-on="on" text>
            <!-- onclick sollen alle Bewertungen angezeigt werden -->

            <v-card color="#385F73" dark>
              <!-- Club Name -->
              <v-card-title class="text-h5">{{ e.title }}</v-card-title>

              <!-- Datum und Uhrzeit -->
              <v-card-subtitle>{{ e.date }} {{ e.time }}</v-card-subtitle>

              <!-- Club beschreibung -->
              <v-card-subtitle
                >Beschreibung:{{ e.description }}</v-card-subtitle
              >
              <v-btn v-bind="attrs" v-on="on" text @click="filterClub(e.name)">
                {{ e.name }}
              </v-btn>

              <!-- Club Name -->
              <!-- Wenn man hier auf den Club drückt wird man weitergeleitet zu den Club Infos -->
              <!-- <v-btn text>{{ e.name }}</v-btn> -->

              <!-- DIALOG -->
            </v-card>
          </div>

          <!--  -->
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
                      label="Eventname"
                      required
                      :value="e.title"
                      v-model="e.title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Datum"
                      required
                      :value="e.date"
                      v-model="e.date"
                    ></v-text-field>
                    <!--  -->
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="e.date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="e.date"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="e.date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(e.date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <!--  -->
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Uhrzeit"
                      required
                      :value="e.time"
                      v-model="e.time"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Beschreibung"
                      required
                      :value="e.description"
                      v-model="e.description"
                    ></v-text-field>
                  </v-col>
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
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog.value = false">
                Close
              </v-btn>
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
