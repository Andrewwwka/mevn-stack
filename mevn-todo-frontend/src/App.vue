<template>
  <div id="app" class="container">
    <h1>MEVN To-do List</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
