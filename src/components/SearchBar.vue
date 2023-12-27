<template>
  <v-row class="background">
    <v-col cols="12">
      <p class="font-weight-bold text-uppercase">
        Horaires de prière et direction de la qibla à
        <span> {{ ville }} </span>
      </p>
    </v-col>

    <v-col cols="12">
      <v-text-field
          v-model="input"
          prepend-inner-icon="mdi-map-marker"
          clear-icon="mdi-close-circle"
          :clearable="true"
          label="Ville"
          type="text"
          @click:clear="resetHoraires"
      >
        <template v-slot:append-inner>
          <v-btn color="#c09d77" @click="search">Recherche</v-btn>
        </template>

      </v-text-field>
    </v-col>
  </v-row>
</template>

<script setup>
  import {ref} from "vue";
  import store from "@/store";

  let ville = ref('Montpellier');
  let input = ref('');
  const emit = defineEmits(['search']);

  function search() {
    if (!input.value || input.value.trim().length === 0) {
      ville.value = store.getters.getDefaultLocalisation;
    } else {
      ville.value = input.value;
      store.dispatch('fetchHoraires', ville.value);
    }
    emit('updateFilter', ville.value);
  }

  function resetHoraires() {
    ville.value = store.getters.getDefaultLocalisation;
    store.dispatch('fetchHoraires');
    emit('updateFilter', ville.value);
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