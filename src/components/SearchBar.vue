<template>
  <v-row class="background">
    <v-col cols="12">
      <p class="font-weight-bold text-uppercase">
        Horaires de prière et direction de la qibla à
        <span> {{ville}} </span>
      </p>
    </v-col>

    <v-col cols="12">
      <v-text-field
          v-model="ville"
          prepend-inner-icon="mdi-map-marker"
          clear-icon="mdi-close-circle"
          :clearable="true"
          label="Ville"
          type="text"
      >
        <template v-slot:append-inner>
          <v-btn color="#c09d77" @click="search">Recherche</v-btn>
        </template>

      </v-text-field>
    </v-col>
  </v-row>
</template>

<script setup>
  let ville = 'Montpellier';

  function search() {
    console.log(ville);
  }

</script>

<style scoped>
  p {
    font-family: Gotham medium, sans-serif;
  }

  span {
    font-size: 1.5rem;
    color: #c09d77;
  }
</style>