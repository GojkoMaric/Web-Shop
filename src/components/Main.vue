<template>
  <div>
    <div class="container height-500px prevent-overflow padding-0">
      <div class='height-500 text-center' style="background-size: 100% 100%;" :style="{ backgroundImage: `url('${imageFirst}')` }">
        <span class='text-in-picture inline-block-text'>
          <span class='white-color main-text inline-block-text'>TODAY</span>
          <span class='white-color inline-block-text ont-size-xx-large'>SHOP OUR NEW ARRIVALS</span>
        </span>
      </div>
    </div>
    <div class="container height-500px padding-0">
      <div class="row h-100 margin-0">
        <div class="col prevent-overflow padding-0">
          <div class='text-center height-500'
            style="background-size: 100% 100%;" :style="{ backgroundImage: `url('${imageSecond}')` }">
            <span class='text-in-picture white-color banner-text'>shop women</span>
            </div>
        </div>
        <div class="col prevent-overflow padding-0">
          <div class='text-center height-500 padding-0'
            style="background-size: 100% 100%;" :style="{ backgroundImage: `url('${imageThird}')` }"
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
  name: 'Main',
  computed: {
    imageFirst () {
      return require('@/assets/main-image-1.png')
    },
    imageSecond () {
      return require('@/assets/main-image-2.png')
    },
    imageThird () {
      return require('@/assets/main-image-3.png')
    },
  }
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

 .margin-0 {
   margin: 0;
 }
</style>