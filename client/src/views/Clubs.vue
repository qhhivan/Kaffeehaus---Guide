<template>
  <div>
    <!-- Oben soll es ein Filtern und ein Sortieren nach geben -->
    <!-- Filtern nach 
        - Öffnungszeiten
        - Musik
        - Bezirk
        - Preisklasse
        
        Mehreres geht auch
         -->

    <!-- Sortieren nach ist Optional (wenn es ohne Datenbank geht) -->
    <!-- Sortieren nach 
        - Preisklasse
        - Öffnungszeiten
        - Name -->

    <!-- Comp. Card -->
    <!-- Es werden alle Clubs (Name, Address, Preisklasse, Öffnungszeiten) angezeigt sortiert nach bewertung -->

    <!-- Ganz unten soll eine Navbar sein wo man Zwischen Events und Clubs switschen kann -->
    <v-card>
      <v-card-title>
        <span class="text-h5">Club Name</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <!--  -->
          <v-row class="my-4 text-subtitle-1"> Adtresse </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-card-text>Adresse</v-card-text>
            </v-col>
          </v-row>

          <!-- Öffnungszeiten -->
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-card-text>Öffnungszeiten</v-card-text>
            </v-col>
          </v-row>

          <!-- Rating -->
          <v-row
            ><v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating
          ></v-row>

          <!-- Musik -->
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-card-text>Musik</v-card-text>
            </v-col>
          </v-row>

          <!-- Price -->
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-card-text>Preis: </v-card-text>
            </v-col>
          </v-row>

          <!-- Telefonnummer -->
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-card-text>Tel. </v-card-text>
            </v-col>
          </v-row>

          <!-- WEBSITE -->
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-card-text>Adresse</v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#385F73" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
