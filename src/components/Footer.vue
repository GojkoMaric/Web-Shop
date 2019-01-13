<template>
  <div class='container'>
    <div class="row">
      <div class='col padding'>
          <p class='small-font bold margin-bottom'>help</p>
          <p class='small-font bold margin-bottom'>about us</p>
          <p class='small-font bold margin-bottom'>privacy policy</p>
          <p class='small-font bold margin-bottom'>terms & conditions</p>
      </div>
      <div class='col padding'>
        <p class='footer-middle-text'>Donec sed odio dui. Donec ullamper nulla non metus auctor fringilla.</p>
        <input placeholder="Your emailadress" class="witdh-100">
        <div class="margin-top">
          <button class='btn btn-sm btn-style bold small-font margin-inline'>WOMEN ></button>
          <button class='btn btn-sm btn-style bold small-font margin-inline'>MEN ></button>
          <button class='btn btn-sm btn-style bold small-font margin-inline'>BOTH ></button>
        </div>
      </div>
      <div class='col text-center padding'>
          <p>place icon</p>
          <p class='small-font margin-bottom'>33G King's Rd, London</p>
          <p class='small-font'>++44 20 7730 6787</p>
          <a class='bold small-font' href="#">MORE INFORMATION ></a>
      </div>
    </div>
    <div class="row footer padding-top-left">
        <p class='white-color'>Copyrights</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .small-font {
   font-size: small;
 }

 .bold {
   font-weight: bold
 }

 .footer {
   background-color: rgb(0,45,71);
 }

 .footer-middle-text {
  font-size: x-small;
  font-weight: bold;
 }

 .white-color {
  color: #fff !important;
 }

 .margin-bottom {
   margin-bottom: 0%
 }

 .padding {
   padding: 1em;
 }

 .padding-top-left {
  padding-top: 1%;
  padding-left: 1%;
 }

 .witdh-100 {
   width: 100%;
 }

 .btn-style {
  background-color: rgb(0,45,71);
  color: #fff !important;
  border-radius: 0;
  width: 29%;
 }

 .margin-top {
   margin-top: 2%;
 }

 .margin-inline {
  margin-left: 2%;
  margin-right: 2%;
 }
</style>