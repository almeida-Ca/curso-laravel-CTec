<template>
 

  <div>
    <h1>Bem-vindo à minha aplicação Vue!</h1>
    <p>{{ message }}</p>
  </div>

  



</template>

<script setup>

  import { ref, reactive } from 'vue';
  import ListItem from './Components/listItem.vue';

  const message = ref('Bem-vindo')


</script>

<style scoped>

  h1 {
    color: #42b983;
  }

</style>