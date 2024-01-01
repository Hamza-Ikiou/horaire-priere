<template>
  <v-divider :thickness="3" class="border-opacity-100" color="#3b6149"></v-divider>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn class="mx-4" variant="text" icon="mdi-linkedin" href="https://www.linkedin.com/in/hamza-ikiou-a26ab2130/" target="_blank"></v-btn>
      <v-btn class="mx-4" variant="text" icon="mdi-github" href="https://github.com/Hamza-Ikiou" target="_blank"></v-btn>
    </div>

    <v-divider></v-divider>

    <div class="pt-0">
      Application faite avec <strong>Vuetify</strong> et <strong>Vue.js</strong> par <strong>Hamza Ikiou</strong>
    </div>
    <div class="pt-0">
      Cette version fonctionne sur les horaires de prière en <strong>France</strong>. La version <strong>internationale</strong> est en cours de développement.
    </div>
    <div class="pt-0">
      Les données sont récupérées depuis l'API <a href="https://aladhan.com" target="_blank">https://aladhan.com</a>.
    </div>
  </v-footer>
</template>

<script setup>

</script>

<style scoped>

</style>