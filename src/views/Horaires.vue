<template>
  <v-container fluid="true">
    <SearchBar @update-filter="setUpFilteredVille"/>
    <v-row>
      <v-col cols="auto" md="8">
        <HoraireList :ville="filteredVille" :date="date"/>
      </v-col>
      <v-col cols="auto" md="4">
        <HoraireActuelle :date="date" :horaires-actuelles="store.getters.getHorairesDuJour.timings"/>
      </v-col>
      <v-col cols="auto" md="4">
        <QiblaDirection/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SearchBar from "@/components/SearchBar.vue";
import HoraireActuelle from "@/components/HoraireActuelle.vue";
import HoraireList from "@/components/HoraireList.vue";
import QiblaDirection from "@/components/QiblaDirection.vue";
import {ref} from "vue";
import store from "@/store";

  let date = new Date();
  let filteredVille = ref(store.getters.getDefaultLocalisation);

  function setUpFilteredVille(ville) {
    filteredVille.value = ville;
    store.dispatch('fetchHoraires', ville);
  }

</script>

<style scoped>

</style>