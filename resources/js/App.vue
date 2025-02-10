<template>
  
  <h1>Bem-vindo à minha aplicação Vue!</h1>
  <p>Clique no Botao para receber uma mensagem</p>
  <Button label="Clique" style="width: 60px; height: 30px; border: 2px solid ;" @click="openModal"/>
  <ListItem :visible="isModalOpen" @close="closeModal"/>

</template>



<script setup>

  import { ref, reactive } from 'vue';
  import ListItem from './Components/listItem.vue';
  import Button from 'primevue/button';
  import { Dialog } from 'primevue';

  const mensagemDoPai = "Olá filho";
  const isModalOpen = ref(false);


  //Funcao para abrir o modal
  const openModal = () => {
    isModalOpen.value = true;
  }

  //Funcao para fechar o modal
  const closeModal = () => {
    isModalOpen.value = false;
  }


</script>

<style scoped>

  h1 {
    color: #42b983;
  }

</style>