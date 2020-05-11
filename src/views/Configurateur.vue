<template>
    <!-- CONFIGURATEUR -->
 <div class="container">
    <!-- HEADER / LOGO -->
    <TheHeader />
    <!-- CAR PREVIEW / COULEURS -->
    <section class="configurator">
    <!-- CAR PREVIEW -->
        <CarPreview />
        <ChooseColor />
    </section>
    <!-- SPECIFICITES TECHNIQUES -->
    <Specifications />
    <!-- BOUTON COMMANDER -->
    <OrderButton />

</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import CarPreview from '../components/CarPreview.vue'
import ChooseColor from '../components/ChooseColor.vue'
import Specifications from '../components/Specifications.vue'
import OrderButton from '../components/OrderButton.vue'
import store from '../store.js'

export default {
  name: 'Configurateur',
  components: {
    TheHeader,
    CarPreview,
    ChooseColor,
    Specifications,
    OrderButton
  },
  data () {
    return {
      porsche: store.porsche
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  color: #000000;
}

.container {
  height: 100vh;
  margin: 0px auto;
  max-width: 375px;
  //border: 1px solid red;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.divider-10 {
  margin: 5px 0;
}

@media only screen and (min-width: 500px) {
.container {
  height: initial;
  margin: 50px auto;
}
}
</style>