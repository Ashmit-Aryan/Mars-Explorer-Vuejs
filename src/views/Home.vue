<template>
<div id="Home">
  
   <div class="main">Select A Rover
    <router-link to="/picture/Curiosity">
     <curiosity/>
    </router-link>
    
    <router-link to="/picture/Opportunity">
     <opportunity/>
    </router-link>
    
    <router-link to="/picture/Spirit">
     <spirit/>
    </router-link>
    
  </div>
  <div id="fullscreen"></div>
</div>
</template>

<script>
import Curiosity from '../components/Curiosity'
import Opportunity from '../components/Opportunity'
import Spirit from '../components/Spirit'

export default {
  name:'Home',
  components:{
    Curiosity,
    Opportunity,
    Spirit
  }
}
</script>

<style scoped>
.main{
  color: rgb(0, 0, 0);
  font-size: 50px;
  margin: 50px;
  padding: 20px;
  font-family: monospace;
  font-weight: bolder;
}
 @media screen and (max-width: 800px) {
    .main{
      margin:0px ;
      padding: 0px;
    }
 }
</style>
