<template>
  <div v-if="cart.length">
    <div class="row container border-bottom">
      <p class="col-10">Product</p>
      <p class="col-1">Quantity</p>
      <p class="col-1">Price</p>
    </div>
    <div class="row container border-bottom" v-for="product in cart" :key="product.id">
      <img :src=product.image_url width="100%" height="100%" alt="" class="col-1">
      <div class="col-9">
        <p>{{product.name}}</p>
        <p>
          <span @click="editCartProduct" class="button-dec cart-buttons">edit</span>
          <span @click="removeCartProduct(product)" class="margin-left button-dec cart-buttons">remove</span>
        </p>
      </div>
      <p class="col-1">
        <span v-if="!editQuantity">{{product.quantity}}</span>
        <span v-else>
          <input min="1" class="width-100" v-model="product.quantity" :placeholder="product.quantity">
        </span>
        </p>
      <p class="col-1">{{totalPrice(product.quantity, product.price)}}$</p>
    </div>
    <div class="row container border-bottom">
        <div class="col-6">
            <p class="margin-bottom-0">Have a voucher code?</p>
            <p>fill in your code</p>
        </div>
        <div class="col-5">
            <p class="margin-bottom-0">Subtotal</p>
            <p>Indication delivery cost</p>
            <p>Order total</p>
        </div>
      <div class="col-1">
          <p class="margin-bottom-0">$ {{totalCartPrice}}</p>
          <p>$ 0</p>
          <p>$ {{totalCartPrice}}</p>
      </div>
    </div>
    <div class="row container border-bottom">
      <div class="col-6">
        <p>Order shipped within 1 business day</p>
        <p>30-day return guarantee</p>
      </div>
      <p class="col-4">We accept:</p>
      <button class="col-2 btn-style btn text-bold" @click="checkout">SECURE CHECKOUT ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data: () => ({
    editQuantity: false
  }),
  methods: {
    editCartProduct() {
      this.editQuantity = !this.editQuantity;
    },
    removeCartProduct(currentProduct) {
      this.$store.commit('removeProducts', currentProduct);
    },
    checkout() {
      this.$store.commit('removeAllProducts');
    },
    totalPrice(quantity, price) {
      return quantity*price;
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalCartPrice() {
      var result = 0;
      this.$store.state.cart.forEach(product => {
        result += (product.quantity * product.price);
      });
      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .text-bold {
   font-weight: bold;
 }

 .border-bottom {
    border-bottom-width: 1px;
    border-bottom-color: #aaa;
    border-bottom-style: solid;
 }

 .btn-style {
    background-color: rgb(0,45,71);
    color: #fff !important;
    border-radius: 0;
    width: 29%;
    font-size: 15px;
 }

 .cart-buttons {
   text-decoration-line: underline;
   color: #222;
   cursor: pointer;
 }

 .margin-left {
  margin-left: 5%;
 }

 .button-dec {
  text-decoration-color: #222;
  text-decoration-line: underline;
 }

 .width-100 {
   width: 100%;
 }
</style>