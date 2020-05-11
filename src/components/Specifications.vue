<template>
    <div>
        <section class="spec-section">
            <div class="spec">
                <p>{{ porsche.puissance }}<span>ch</span></p>
                <p>Puissance</p>
            </div>
            <div class="spec">
                <p>{{ porsche.vitesseMax }}<span>km/h</span></p>
                <p>Vitesse <br>maximale</p>
            </div>
            <div class="spec">
                <p>{{ porsche.accelTemps }}<span>s</span></p>
                <p>0-100 <br>km/h</p>
            </div>
        </section>
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
.spec-section {
  display: flex;
  justify-content: space-around;
  padding: 25px;
  border-top: 1px solid #DFDFDF;
  border-bottom: 1px solid #DFDFDF;
  margin-top: 25px;
  .spec {
    text-align: center;
    p:nth-of-type(1) {
      font-size: 1.5em;
      font-weight: 500;
      margin-bottom: 20px;
      span {
        font-size: 1rem;
        font-weight: 300;
      }
    }
    p:nth-of-type(2) {
      font-size: 0.875em;
      font-weight: 500;
      color: #9E9E9E;
    }
  }
}
</style>