<template>
<div class="colors-section">
    <h2>Choisissez la couleur</h2>
<div class="colors">
    <img v-for="variante in porsche.variantes" :key="variante.id" :src="variante.imageCouleur" :alt="variante.nomCouleur" @mouseover="changeVoitureInfo(variante.imageVoiture, variante.nomCouleur, variante.enStock)">
</div>
<p>{{ porsche.nomCouleur }}<span> De Série</span></p>
<p><span>{{ porsche.disponibleText }}</span></p>
</div>
</template>

<script>
import store from '../store.js'
export default {
    data () {
    return {
      porsche: store.porsche
    }
  },
  methods: {
    changeVoitureInfo(imageVoiture, nomCouleur, enStock) {
        this.porsche.image = imageVoiture
        this.porsche.nomCouleur = nomCouleur
        if(!enStock) {
        this.porsche.stock = false
        this.porsche.disponibleText = 'Modèle non disponible'
        } else {
            this.porsche.stock = true
            this.porsche.disponibleText = null
        }
    }
  }
}
</script>

<style lang="scss" scoped>
  .colors-section {
    h2 {
      font-size: 1.375em;
      font-weight: 500;
      text-align: center;
    }
    .colors {
      margin: 10px 0 15px 0;
      text-align: center;
      img {
        max-width: 38px;
        margin: 0 5px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    p {
      font-size: 0.875em;
      font-weight: 500;
      text-align: center;
      letter-spacing: normal;
      span {
        color: #9E9E9E;
      }
    }
  }
</style>