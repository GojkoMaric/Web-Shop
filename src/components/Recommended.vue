<template>
  <div>
    <div class='text-center padding-top'>
      <p class="font-size-x-large">Recommended for you</p>
    </div>
    <div class="h-100 row">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="text-center">
            <img :src=product.image_url width="100%" height="100%" alt="">
            <p class="margin-bottom-0">{{product.name}} - {{product.price}}$</p>
            <a class="link-style">Add to cart</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      products: []
    }
  },
  mounted () {
    axios
      .get('http://api.clothes-shop.devbox21.com')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => console.log(error));
  },
  name: 'Recommended'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-size-x-large {
  font-size: x-large;
}

.padding-top {
  padding-top: 2%;
}

.link-style {
  text-decoration: underline;
  font-size: small;
}

.margin-bottom-0 {
  margin-bottom: 0;
}

a {
  cursor: pointer;
}
</style>