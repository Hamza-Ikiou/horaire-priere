<template>
  <v-card>
    <v-card-title class="title">
      <p class="font-weight-bold text-uppercase">
        Direction de la qibla depuis
        <span> {{ ville }} </span>
      </p>
    </v-card-title>
    <v-img src="../assets/compass.png" width="300px" class="image">
      <v-img src="../assets/pointer.png" width="300px" :style="{rotate: `${qiblaDirection}deg`}"></v-img>
    </v-img>
    <p class="degree">{{ qiblaDirection }}°</p>
  </v-card>
</template>

<script setup>
  let prop = defineProps(['ville', 'qiblaDirection']);
</script>

<style scoped>
  .title {
    color: white;
    background-color: #3b6149;
  }

  .image, .degree {
    display: flex;
    justify-content: center;
  }

  .image {
    margin: 20px auto;
  }

  .degree {
    font-size: 2.5rem;
    font-weight: bold;
    color: #c09d77;
  }
</style>