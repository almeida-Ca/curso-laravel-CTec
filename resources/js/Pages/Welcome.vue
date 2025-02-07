<script setup>
import * as weljs from "./welcome";


</script>

<template>
    <center>O Valor é : {{ weljs.valor }}</center>
    <br>
    <center>

        <button class="btn btn-danger" @click="weljs.funMenos">Menos</button>
        <br><br>
        <button class="btn btn-primary" @click="weljs.funMais">Mais</button>

    </center>



</template>

<style></style>
