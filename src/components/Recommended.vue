<template>
  <div>
    <div class='text-center padding-top'>
      <p class="font-size-x-large">Recommended for you</p>
    </div>
    <div class="h-100 row">
      <div class="col text-center">
        <div>
          <img src="https://assets.academy.com/mgen/69/20017969.jpg?wid=250&hei=250" width="100%" height="100%" alt="">
          <p class="margin-bottom-0">Title - 100$</p>
          <a href="#" class="link-style">Add to cart</a>
        </div>
      </div>
      <div class="col text-center">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVkw4FYYpqDGKV8pOolXlYjbNH-_Y1tPkxOLn6TrMNMSX-bXtIQ" width="100%" height="100%" alt="">
          <p class="margin-bottom-0">Title - 100$</p>
          <a href="#" class="link-style">Add to cart</a>
        </div>
      </div>
      <div class="col text-center">
        <div>
          <img src="https://assets.academy.com/mgen/69/20017969.jpg?wid=250&hei=250" width="100%" height="100%" alt="">
          <p class="margin-bottom-0">Title - 100$</p>
          <a href="#" class="link-style">Add to cart</a>
        </div>
      </div>
      <div class="col text-center">
        <div>
          <img src="https://assets.academy.com/mgen/69/20017969.jpg?wid=250&hei=250" width="100%" height="100%" alt="">
          <p class="margin-bottom-0">Title - 100$</p>
          <a href="#" class="link-style">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    // cors issue => http://api.clothes-shop.devbox21.com/
    // works fine => https://jsonplaceholder.typicode.com/photos

    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => console.log(response.data));
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
</style>