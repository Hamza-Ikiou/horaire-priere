<template>
  <v-container fluid="true">
    <SearchBar @update-filter="setUpFilteredVille"/>
    <v-row>
      <v-col cols="auto" md="8">
        <HoraireList :ville="filteredVille"/>
      </v-col>
      <v-col cols="auto" md="4">
        <HoraireActuelle/>
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

  let filteredVille = ref('Montpellier');

  function setUpFilteredVille(ville) {
    filteredVille.value = ville;
  }

</script>

<style scoped>

</style>