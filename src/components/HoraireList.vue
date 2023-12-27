<template>
  <v-card>
    <v-card-title class="title align">
      <p class="font-weight-bold text-uppercase">
        Horaires de prière à
        <span> {{ville}} </span>
      </p>
      <v-btn variant="text" append-icon="mdi-calendar">
        {{dateToDisplay}}
      </v-btn>
    </v-card-title>

    <v-card-text>

    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

  let dateToDisplay = ref('');
  let prop = defineProps(['ville']);

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