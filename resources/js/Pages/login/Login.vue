<script setup>
import * as Login from "./Login";

</script>

<template>
  <br><br><br><br><br><br><br><br><br>
  <center>
    <div class="login-container">
      <h2 class="text-center mb-4">Login</h2>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="Login.email.value" placeholder="Enter your email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="Login.senha.value" placeholder="Enter your password">
      </div>
      <div class="d-grid">
        <button @click="Login.login" type="submit" class="btn btn-primary btn-block">Login</button>
      </div>
      <div class="mt-3 text-center">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  </center>

</template>

<style scoped>
body,
html {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>