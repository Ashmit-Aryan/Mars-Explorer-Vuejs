<template>
  <div class="spirit">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spirit{
    background-image: url("../assets/spirit.png");
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
    .spirit{
      height: 200px;
    }
  }
</style>