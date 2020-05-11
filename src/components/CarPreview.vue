<template>
<div>
  <div class="car-preview">
      <img :src="porsche.image" :alt="porsche.nomCouleur">
  </div>
  <h1>{{ porsche.marque }} {{ porsche.modele }}</h1>
</div>
</template>

<script>
import store from '../store.js'
export default {
    data () {
    return {
      porsche: store.porsche
    }
  }
}
</script>

<style lang="scss" scoped>
.configurator {
  h1 {
    font-size: 0.875em; //0.8125em;
    text-transform: uppercase;
    font-weight: 300;
    color: #9E9E9E;
    letter-spacing: 0.10em;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
  }
}
.car-preview {
margin-top: 10px;
display: flex;
justify-content: center;
img {
    max-width: 310px;
}
}
</style>