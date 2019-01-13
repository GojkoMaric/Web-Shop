<template>
  <div class='height-250px h-100'>
    <p class='text-center font-x-large'>free delivery & returns on UK orders</p>
    <div class="row">
      <div class="col">
        <img :src="imageFirst" alt="" height="100%" width="100%">
      </div>
      <div class="col">
        <p class="text-bold font-large top-padding">Today - Love dresses</p>
        <p class="font-medium">Donec sed odio dui. Donec ullam corper nulla non metus auctor fring illa. Vestbulum id ligula.</p>
        <a href="#" class="link-style text-bold">READ MORE ></a>
      </div>
      <div class="col">
        <img :src="imageSecond" alt="" height="100%" width="100%">
      </div>
      <div class="col">
        <p class="text-bold font-large top-padding">The everyday bag</p>
        <p class="font-medium">Donec sed odio dui. Donec ullam corper nulla non metus auctor fring illa. Vestbulum id ligula.</p>
        <a href="#" class="link-style text-bold">READ MORE ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banners',
  computed: {
    imageFirst () {
      return require('@/assets/banner-image-1.png')
    },
    imageSecond () {
      return require('@/assets/banner-image-2.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.height-250px {
  height: 250px;
}

.font-x-large {
  font-size: x-large;
}

.font-large {
  font-size: large;
}

.font-medium {
  font-size: medium;
}

.text-bold {
  font-weight: bold;
}

.top-padding {
  padding-top: 20%;
}

.link-style {
    font-size: small;
    text-decoration: none;
}
</style>