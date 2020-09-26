<template>
  <div id="picture">
    <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-input
      style="margin-left:20px;"
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Enter Sol"
      type="number"
      required
      v-model="sol">
    </b-input>
    <b-button @click.prevent="fetchMarsData" variant="info">Search</b-button>
  </b-form>
  <MarsRover :MarsPhoto="MarsPhotos" :key="MarsPhotos" v-for="MarsPhotos in photo"/>
  <fab
  position="bottom-right"
  :actions="fabAction"
  @OpenBottomSheet="Open"
  >
  </fab>
  <swipeable-bottom-sheet ref="swipeableBottomSheet">
   <div id="nav-bar">
     <b-navbar variant="light" type="light" >
      <b-navbar-brand tag="h1" class="mb-0" >{{ $route.params.roverName }}  Rover Manifest</b-navbar-brand>
     </b-navbar>
   </div>
    <rover-detail :Detail="manifests"/>
    <b-button style="width:200px; height:50px; margin:10px;" @click="Close" variant="success">Close</b-button>
  </swipeable-bottom-sheet>
  </div>  
</template>

<script>
import RoverDetail from '../components/RoverDetail'
import { SwipeableBottomSheet } from 'vue-swipeable-bottom-sheet'
import fab from 'vue-fab'
import MarsRover from '../components/MarsRover'
export default {
  name:"Picture",
  components:{
    MarsRover,
    fab,
    SwipeableBottomSheet,
    RoverDetail
  }
  ,
  data:function() {
   return {
    sol: "",
    photo: [],
    manifests: {},
    baseUrl:"https://api.nasa.gov/mars-photos/api/v1/",
    fabAction:[
      {
        name: 'OpenBottomSheet',
        icon: 'info'
      }
    ]
  }
 },
 mounted(){
   this.$refs.swipeableBottomSheet.setState("close")
 },
 methods:{
   fetchMarsData: function(){
     fetch(`${this.baseUrl}rovers/${this.$route.params.roverName}/photos?sol=${this.sol}&api_key=ZVNr0BqSereBHqTrF2YkTXqvXs3EW7UW1NwQl2b1`,{
       method: 'get'
     }).then(response =>{
       return response.json()
     }).then(jsonData =>{
       this.photo = jsonData.photos
     })
   },
   RoverManifestation:function(){
     fetch(`${this.baseUrl}manifests/${this.$route.params.roverName}?api_key=ZVNr0BqSereBHqTrF2YkTXqvXs3EW7UW1NwQl2b1`,{
       method: 'get'
     }).then(response => {
       return response.json()
     }).then(jsonData =>{
       this.manifests = jsonData.photo_manifest
     })
  },
  Open:function(){
    this.$refs.swipeableBottomSheet.setState("open")
    this.RoverManifestation()
  },
  Close:function(){
    this.$refs.swipeableBottomSheet.setState("close")
  }
 }
}
</script>

<style scoped>
#picture{
  background-image: url("../assets/mars.jpg");
  color: rgb(1, 255, 255);
  margin-top: 0%;
  background-repeat:round;
  height: 100%;
  widows: 100%;
}
.mb-0{
  font-weight: bolder;
  font-size: 50px;
}
@media screen and (max-width:800px){
  .mb-0{
    font-size: 20px;
  }
}
</style>