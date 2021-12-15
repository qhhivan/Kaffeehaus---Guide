<template>
  <div>
    <!-- Filter nach Preisklasse -->
    <v-toolbar dense elevation="4" color="red" class="pb-10" fixed>
      <v-select
        v-model="preisklasse"
        :items="preisklassen"
        label="Filter nach Preis"
        dense
        @change="filterPreisklasse(preisklasse)"
      ></v-select>
    </v-toolbar>
    <!-- ENDE -->

    <!-- CLUB CARD -->
    <v-col cols="12" v-for="c in filterClubs" v-bind:key="c.id">
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
        <BewertungenDialog :c="c" :clubs="clubs" :bewertungen="bewertungen" />
        <!-- Bewertungen - ENDE -->

        <!-- Club Infos -->
        <v-card-text
          ><span class="font-weight-bold">Preis:</span> {{ c.price }}
          <br /><span class="font-weight-bold">Musik:</span> {{ c.music }}
          <br /><span class="font-weight-bold">Tel. </span>{{ c.phone_number }}
          <br /><span class="font-weight-bold">Website:</span> <br />{{
            c.website
          }}
        </v-card-text>
        <!-- Club Infos ENDE -->

        <!-- Bewertung erstellen -->
        <v-card-actions>
          <CrBewertungCardsDialog :c="c" />
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import CrBewertungCardsDialog from '@/components/CrBewertungCardsDialog.vue';
import BewertungenDialog from '@/components/BewertungenDialog.vue';

export default {
  props: {
    events: Array,
    clubs: Array,
    bewertungen: Array,
  },
  components: {
    CrBewertungCardsDialog,
    BewertungenDialog,
  },
  data() {
    return {
      filterClubs: '',
      preisklassen: ['Alle', 'Günstig', 'Normal', 'Teuer'],
      preisklasse: '',
    };
  },
  methods: {
    filterPreisklasse(pk) {
      if (pk != 'Alle') {
        if (pk == 'Günstig')
          this.filterClubs = this.clubs.filter((c) => c.price.length === 1);
        else if (pk == 'Normal')
          this.filterClubs = this.clubs.filter((c) => c.price.length === 2);
        else if (pk == 'Teuer')
          this.filterClubs = this.clubs.filter((c) => c.price.length === 3);
      } else this.filterClubs = this.clubs;
    },
  },
  created() {
    this.filterClubs = this.clubs;
  },
};
</script>
