<template>
  <v-card>
    <v-card-title class="title">
      {{ dateToDisplay }}
    </v-card-title>

    <v-card-text>
        <div class="align" v-for="(value, key) in horairesActuelles" :key="key">
          <p>{{ key }}</p>
          <span>{{ value }}</span>
        </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

  const props = defineProps(['date', 'horairesActuelles']);
  let dateToDisplay = ref('');

  onBeforeMount(() => {
    dateToDisplay = props.date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  })
</script>

<style scoped>
  .title {
    color: white;
    background-color: #3b6149;
    margin-bottom: 10px;
  }

  .align{
    display: flex;
    justify-content: space-between;
  }

  span {
    color: #c09d77;
  }

  p, span {
    font-size: 1.5rem;
    margin: 10px;
  }
</style>