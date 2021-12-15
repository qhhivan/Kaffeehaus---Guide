<template>
  <v-dialog transition="dialog-top-transition" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }" :search="events.title">
      <div v-bind="attrs" v-on="on" text>
        <v-card color="primary" dark>
          <!-- Event Name -->
          <v-card-title class="text-h5">{{ e.title }}</v-card-title>

          <!-- Datum und Uhrzeit -->
          <v-card-subtitle
            >{{ e.date.substring(0, 9) }}
            {{ e.time.substring(0, 5) }}</v-card-subtitle
          >

          <!-- Event Beschreibung -->
          <v-card-subtitle>Beschreibung:{{ e.description }}</v-card-subtitle>

          <v-row
            ><v-btn readonly class="ml-3">
              {{ e.name }}
            </v-btn></v-row
          >
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

          <v-btn
            color="error"
            @click="deleteEvent(e.event_id), (dialog.value = false)"
            text
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
            @click="updateClub(e), (dialog.value = false)"
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
    e: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async updateClub(event) {
      console.log(event);
      try {
        await axios.patch(`http://localhost:3000/events/${event.event_id}`, {
          title: event.title,
          description: event.description,
          time: event.time,
          date: event.date,
          lokal_id: event.lokal_id,
        });
      } catch (error) {
        console.log(error.message);
      }
    },
    async deleteEvent(id) {
      console.log(`Delete Event ${id}`);
      try {
        axios.delete(`http://localhost:3000/events/${id}`);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
