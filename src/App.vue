<template>
  <div class="container">
    <Header />
    <Main />
    <Banners />
    <Recommended />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Banners from './components/Banners'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Recommended from './components/Recommended'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Banners,
    Footer,
    Header,
    Main,
    Recommended,
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
body * {
  color: rgb(0,45,71);
}
</style>
