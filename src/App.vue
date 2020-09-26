<template>
  <div id="main">
   <div >
     <b-navbar variant="faded" type="dark" >
      <b-navbar-brand tag="h1" class="mb-0" style="font-size: 40px;" >Mars Explorer</b-navbar-brand>
     </b-navbar>

   </div>
   <div class="fullscreen">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {

}
</script>

<style scoped>
#main{
  color: black;
  text-align: center;
  font-family: monospace;
  background-color: transparent;
  width:100%;
  background-image: url("./assets/mars.jpg");
  margin-top: 0%;
  background-repeat:no-repeat;
  height: 100%;
  widows: 100%;
  background-position: center;
  background-size: cover;
}
</style>
