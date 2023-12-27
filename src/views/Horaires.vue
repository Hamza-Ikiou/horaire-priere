<template>
  <v-container fluid="true">
    <SearchBar/>
    <v-row>
      <v-col cols="auto" md="8">
        <HoraireList/>
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

</script>

<style scoped>

</style>