<template>
  <div>
    <div class="container height-500px prevent-overflow padding-0">
      <div class='height-500 text-center' style="background-size: 100% 100%; background-image:url('https://images.unsplash.com/photo-1484502249930-e1da807099a5?ixlib=rb-1.2.1');">
        <span class='text-in-picture inline-block-text'>
          <span class='white-color main-text inline-block-text'>TODAY</span>
          <span class='white-color inline-block-text ont-size-xx-large'>SHOP OUR NEW ARRIVALS</span>
        </span>
      </div>
    </div>
    <div class="container height-500px">
      <div class="row h-100">
        <div class="col prevent-overflow padding-0">
          <div class='text-center height-500'
            style="background-image:url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)">
            <span class='text-in-picture white-color banner-text'>shop women</span>
            </div>
        </div>
        <div class="col padding-0">
          <div class='text-center height-500 padding-0'
            style="background-image:url(https://images.pexels.com/photos/1282316/pexels-photo-1282316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          >
            <span class="text-in-picture white-color banner-text">shop men</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main-text {
  font-size: 110px;
  letter-spacing: 9px;
  line-height: 30px;
 }

 .banner-text {
  font-size: -webkit-xxx-large;
 }

 .pictures-with-text {
   line-height: 500px;
 }

 .text-in-picture {
   vertical-align: middle;
   line-height: normal;
 }

 .height-500 {
   line-height: 500px;
 }

 .height-500px {
   height: 500px;
 }

 .white-color {
   color: white !important;
 }

 .prevent-overflow {
   overflow: hidden;
 }

 .inline-block-text {
  display: inline-block;
  width: 100%;
 }

 .padding-0 {
   padding: 0;
 }

 .font-size-xx-large {
  font-size: xx-large;
 }
</style>