<template>
  <v-card>
    <v-card-title class="title align">
      <p class="font-weight-bold text-uppercase">
        Horaires de prière à
        <span> {{ville}} </span>
      </p>
      <v-btn variant="text" append-icon="mdi-calendar">
        {{dateToDisplay}}
        <v-dialog v-model="calendar" activator="parent" width="auto">
          <v-card>
            <v-card-title>
              Choisissez un mois
            </v-card-title>
            <v-card-text>
              <v-date-picker-months></v-date-picker-months>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="toggleCalendar">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-card-title>

    <v-card-text>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

  let dateToDisplay = '';
  let calendar = ref(false);
  let ville = 'Montpellier';

  function toggleCalendar() {
    calendar.value = !calendar.value;
  }

  onBeforeMount(() => {
    const date = new Date();
    dateToDisplay = date.toLocaleDateString('fr-FR', { month: 'long'}) + " " + date.getFullYear()
  })
</script>

<style scoped>
  p {
    font-family: Gotham medium, sans-serif;
  }

  span {
    font-size: 1.5rem;
  }

  .title {
    color: white;
    background-color: #3b6149;
  }

  .align{
    display: flex;
    justify-content: space-between;
  }
</style>