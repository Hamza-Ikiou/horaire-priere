<template>
  <v-card>
    <v-card-title class="title">
      {{dateToDisplay}}
    </v-card-title>

    <v-card-text>

    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

  const props = defineProps(['date']);
  let dateToDisplay = ref('');

  onBeforeMount(() => {
    dateToDisplay = props.date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  })
</script>

<style scoped>
  .title {
    color: white;
    background-color: #3b6149;
  }
</style>