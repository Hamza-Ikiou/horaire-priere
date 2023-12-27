<template>
  <v-card>
    <v-card-title class="title align">
      <p class="font-weight-bold text-uppercase">
        Horaires de prière à
        <span> {{ville}} </span>
      </p>
      <div class="align">
        <p>{{dateToDisplay}}</p>
        &nbsp;
        <v-icon icon="mdi-calendar"></v-icon>
      </div>
    </v-card-title>

    <v-card-text>

    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

  let dateToDisplay = ref('');
  let prop = defineProps(['ville', 'date']);

  onBeforeMount(() => {
    dateToDisplay = prop.date.toLocaleDateString('fr-FR', { month: 'long'}) + " " + prop.date.getFullYear()
  })
</script>

<style scoped>

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