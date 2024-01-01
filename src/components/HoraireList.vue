<template>
  <v-card>
    <v-card-title class="title align">
      <p class="font-weight-bold text-uppercase">
        Horaires de prière à
        <span> {{ ville }} </span>
      </p>
      <div class="align">
        <p>{{ dateToDisplay }}</p>
        &nbsp;
        <v-icon icon="mdi-calendar"></v-icon>
      </div>
    </v-card-title>

    <v-card-text>
      <v-table class="table">
        <thead>
          <tr>
            <th></th>
            <th class="font-weight-bold" v-for="(value, key) in store.getters.getHorairesDuJour.timings" :key="key">
              {{ key }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(value, key) in horairesMensuellles" :key="key" :class="checkRowToday(value.date.gregorian.date)">
            <td class="firstTd">{{ dateForTable(value.date.readable) }}</td>
            <td>{{ value.timings.Fajr }}</td>
            <td>{{ value.timings.Dhuhr }}</td>
            <td>{{ value.timings.Asr }}</td>
            <td>{{ value.timings.Maghrib }}</td>
            <td>{{ value.timings.Isha }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import store from "@/store";

  let dateToDisplay = ref('');
  let prop = defineProps(['ville', 'date', 'horairesMensuellles']);

  onBeforeMount(() => {
    dateToDisplay = prop.date.toLocaleDateString('fr-FR', { month: 'long'}) + " " + prop.date.getFullYear()
  })

  function dateForTable(date) {
    let dateToFormat = new Date(date)
    return dateToFormat.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short'});
  }

  function checkRowToday(item) {
    let today = new Date();
    let day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let month = today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
    let date = day + "-" + month + "-" + today.getFullYear();
    if (item === date) {
      return 'customRow';
    }
  }

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

  tr {
    font-size: 1.5rem;
  }

  td {
    font-size: 1.3rem;
    color: #c09d77;
  }

  .firstTd {
    color: black;
  }

  .customRow {
    box-shadow: 0 0 10px #087233;
  }
</style>