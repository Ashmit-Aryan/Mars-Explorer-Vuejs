<template>
  <div class="rover_detail">
    <b-list-group style="font-family:monospace; font-weight:bolder; color:black; font-size:20px;">
     <b-list-group-item>Name:-{{ Detail.name }}</b-list-group-item>
     <b-list-group-item>Launch Date:-{{ Detail.launch_date }}</b-list-group-item>
     <b-list-group-item>Landing Date:-{{ Detail.landing_date }}</b-list-group-item>
     <b-list-group-item>Max Date:-{{ Detail.max_date }}</b-list-group-item>
     <b-list-group-item>Max Sol:-{{ Detail.max_sol }}</b-list-group-item>
     <b-list-group-item>Total Photos:-{{ Detail.total_photos }}</b-list-group-item>
     <b-list-group-item>Status:-{{ Detail.status }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Rover Detail',
  props:{
    Detail:{ 
        type: Object,
        default: function() {
         return {};
      }}
  },
  data:function(){
    return{
    }
  }
  ,
  method:{
    
  }
}
</script>

<style>

</style>