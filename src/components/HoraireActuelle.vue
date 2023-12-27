<template>
  <v-card>
    <v-card-title class="title">
      {{ dateToDisplay }}
    </v-card-title>

    <v-card-text>
        <div class="align" v-for="item in items" :key="item.title">
          <p>{{ item.title }}</p>
          <span>{{ item.time }}</span>
        </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

  const props = defineProps(['date', 'horairesActuelles']);
  let dateToDisplay = ref('');

  const items = [
    { title: 'Sobh (Fajr)', time: '05:00'},
    { title: 'Chorouq', time: '05:00'},
    { title: 'Dhohr', time: '13:00'},
    { title: 'Asr', time: '17:00'},
    { title: 'Maghrib', time: '20:00'},
    { title: 'Isha', time: '22:00'},
  ]

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