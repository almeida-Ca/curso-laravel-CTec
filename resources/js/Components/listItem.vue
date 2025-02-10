<template>
    <div class="card flex justify-center" v-if="visible">
      <Dialog modal header="Edit Profile" :style="{ width: '25rem' }">
        <p>{{ message }}</p>
        <Button label="Close" style="width: 60px; height: 30px; border: 2px solid ;" @click="closeModal"/>
      </Dialog>
    </div>
</template>

<script setup>
  import { ref } from "vue";
  import { defineProps, defineEmits } from "vue";
  import { Dialog, Button } from "primevue";
  
  //Definindo props visible recebida do componente pai
  const props = defineProps({
    message: String,
    visible: Boolean
  });


  //Declarando o evento close para emitir quando o modal for fechado
  const emit = defineEmits(['close']);

  //Funcao para emitir o evento close para o pai
  const closeModal = () => {
    emit('close');
  }


</script>

  



<style scoped>

</style>