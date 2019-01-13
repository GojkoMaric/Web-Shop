<template>
  <div>
    <div class="row container">
        <p class='col-md-1 small-font margin-bottom-0'>NL</p>
        <p class='col-md-3 small-font margin-bottom-0'>login / sign up</p>
        <p class='col-md-4 title text-center text-bold' style="margin-bottom: 0">every.day.counts</p>
        <span class="col-md-2"></span>
        <p class='col-md-1 small-font text-right margin-bottom-0'>logo1</p>
        <p class='col-md-1 small-font text-right margin-bottom-0'>logo2</p>
    </div>
    <div class="row container">
      <span class='col-2'></span>
      <span class='col-8 text-center'>
        <span style="margin-right: 10px">logo3</span>
        <span style="margin-right: 10px">women</span>
        <span style="margin-right: 10px">men</span>
        <span>experience</span>
      </span>
      <!-- <v-icon>fas fa-lock</v-icon> -->
      <p class='col-2 text-right'>search</p>
      <!-- <span class="glyphicon glyphicon-search" aria-hidden="true"></span> -->
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