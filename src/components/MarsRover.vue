<template>
  <div id="MarsRover" >
      <b-img-lazy class="img-src" :src="MarsPhoto.img_src"></b-img-lazy>
      <div class="photo-id">
          Photo ID:{{ MarsPhoto.id }} 
      </div>
      <br>
      <div class="sol">
          Sol: {{ MarsPhoto.sol }}
      </div>
      <br>
        <div class="earth-date">
          Earth Date: {{ MarsPhoto.earth_date }}
      </div>
      <br>
       <div class="camera">
          Camera: {{ MarsPhoto.camera.full_name }}({{ MarsPhoto.camera.name }})
      </div>
  </div>
</template>

<script>
export default {
    name:'Mars Rover',
    props:{
        MarsPhoto:{ 
        type: Object,
        default: function() {
         return {};
      }}
    },
    data(){
    return{
        
    }
  }
}
</script>

<style scoped>
#MarsRover{
    margin: 20px;
    font-family: monospace;
    font-weight: bolder;   
}
div{
    font-family: monospace;
    font-weight: bolder;
    font-size: 30px;
    color: rgb(255, 255, 255);
   
}
.photo-id{
 margin-top: 10px;
 margin-left: 400px;
 margin-right: 400px;
 border-bottom: black solid 10px;
}
.sol{
     margin-left: 400px;
 margin-right: 400px;
 border-bottom: black solid 10px;
}
.earth-date{
     margin-left:400px;
 margin-right: 400px;
 border-bottom:black solid 10px;
}
.camera{
     margin-left: 400px;
 margin-right: 400px;
 border-bottom: black solid 10px;
}
.img-src{
    height:500px;
    width: 500px;
}
@media screen and (max-width:800px) {
    .img-src{
        height: 200px;
        width: 200px;
    }
    .photo-id{
 margin-top: 5px;
     margin-left: 50px;
 margin-right: 50px;
 border-bottom: black solid 10px;
}
.sol{
     margin-left: 50px;
 margin-right: 50px;
 border-bottom: black solid 10px;
}
.earth-date{
     margin-left: 50px;
 margin-right: 50px;
 border-bottom:black solid 10px;
}
.camera{
     margin-left: 50px;
 margin-right: 50px;
 border-bottom: black solid 10px;
}
    
}
</style>