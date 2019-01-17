import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      cart: [],
      products: []
    },
    mutations: {
        addProducts (state, product) {
            console.log('state', state.cart, 'produt', product)
            state.cart.push(product)
        },
        removeProducts (state, product) {
            state.cart = state.cart.filter(cartProduct => cartProduct != product);
        },
        removeAllProducts(state) {
            state.cart = [];
        }
    },
    getters: {
        cart: state => state.cart
    }
  })