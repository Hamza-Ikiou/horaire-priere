<template>
  <v-app>
    <v-main>
      <Header />
      <Horaires />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import Horaires from "@/views/Horaires.vue";
</script>
