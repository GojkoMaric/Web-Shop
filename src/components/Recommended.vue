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
            <a @click="openModal(product)" class="link-style">Add to cart</a>
          </div>
        </div>
    </div>
    <div>
      <!-- Modal Component -->
      <b-modal 
        ref="addToCartModal" 
        title="Add To Cart" 
        hide-footer>
        <div class="text-center">
          <img :src=currentProduct.image_url width="100%" height="100%" alt="">
          <p class="bold">{{currentProduct.name}} - {{currentProduct.price}}$</p>
          <div class="row justify-content">
            <p>Quantity: </p>
            <input v-model="currentProduct.quantity" type="number" class="width-10 height-input margin-left">
          </div>
          <p class="text-right bold">Total Price: 
            <span v-if=currentProduct.quantity>{{currentProduct.price * currentProduct.quantity}}</span>
            <span v-else>0</span>
          </p>
          <div class="text-right">
            <a @click="addToCart(currentProduct)" class="underline bold">Add to cart</a>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      products: [],
      currentProduct: {}
    }
  },
  methods: {
    openModal: function(product) {
      this.$refs.addToCartModal.show();
      this.currentProduct = product;
    },
    addToCart: function(currentProduct) {
      this.$refs.addToCartModal.hide();
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

.margin-left {
  margin-left: 1%;
}

a {
  cursor: pointer;
}

.width-10 {
  width: 10%
}

.height-input {
  height: 1.5em;
}

.justify-content {
  justify-content: center;
}

.underline {
  text-decoration: underline;
}

.bold {
  font-weight: bold;
}
</style>