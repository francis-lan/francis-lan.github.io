<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>





<template>
  
  <div class="container">
    <div class="top-bar">
    <router-link to="/" style="color: black;align-self: center;">Home</router-link> 
    
    <router-link to="/food" style="color:black;align-self:center;">Food</router-link>
    <router-link to="/map" style="color:black;align-self:center;">Map</router-link>

    </div>
    <div>
      <RouterView />
    </div>
  </div> 
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  top:0;
  left:0;
}

</style>