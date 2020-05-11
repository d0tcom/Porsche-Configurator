<template>
<div class="container">
  <TheHeader />
  <section class="configurator">
    <CarPreview />
  </section>
  <YourCommand />
  <div class="btn-section">
    <router-link :to="{ name: 'CommandeConfirmee' }">
      <button class="btn order">Confirmer</button>
    </router-link>
    <div class="divider-10"></div>
    <router-link :to="{ name: 'Configurateur' }">
      <button class="btn cancel">Revenir en arrière</button>
    </router-link>
  </div>
</div>
</template>

<script>
import store from '../store.js'
import TheHeader from '../components/TheHeader.vue'
import CarPreview from '../components/CarPreview.vue'
import YourCommand from '../components/YourCommand.vue'

export default {
  components: {
    TheHeader,
    CarPreview,
    YourCommand
  },
  data () {
    return {
      porsche: store.porsche
    }
  }
}
</script>