<template>
  <div class="curiosity">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.curiosity{
    background-image: url("../assets/curiosity.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;
    border: black solid 10px ;
    border-radius: 20px;
    margin-bottom: 20px;
    }
    @media screen and (max-width: 800px) {
    .curiosity{
      height: 200px;
    }
  }
</style>