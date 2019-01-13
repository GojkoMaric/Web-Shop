<template>
  <div>
    <div class="row container">
        <p class='col-md-1 small-font margin-bottom-0'>NL</p>
        <p class='col-md-3 small-font margin-bottom-0'>login / sign up</p>
        <p class='col-md-4 title text-center text-bold' style="margin-bottom: 0">every.day.counts</p>
        <span class="col-md-2"></span>
        <p class='col-md-1 small-font text-right margin-bottom-0'><i class="fas fa-heart"></i> 0</p>
        <p class='col-md-1 small-font text-right margin-bottom-0'><i class="fas fa-shopping-bag"></i> 0</p>
    </div>
    <div class="row container">
      <span class='col-2'></span>
      <span class='col-8 text-center'>
        <span style="margin-right: 10px"><i class="fas fa-home"></i></span>
        <span style="margin-right: 10px">women</span>        
        <span style="margin-right: 10px">men</span>
        <span>experience</span>
      </span>
      <p class='col-2 text-right'><i class="fas fa-search"></i> search</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .title {
   font-size: 2em;
 }

 .small-font {
   font-size: small;
 }

 .margin-bottom-0 {
   margin-bottom: 0;
   padding-top: 15px
 }

 .text-bold {
   font-weight: bold;
 }
</style>