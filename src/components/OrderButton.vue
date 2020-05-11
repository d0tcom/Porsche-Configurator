<template>
<div class="btn-section">
    <router-link v-if="porsche.stock" :to="{ name: 'Recapitulatif' }">
    <button class="btn order">Commander</button>
    </router-link>
    <button v-if="!porsche.stock" disabled="disabled" class="btn order disabled" >Commander</button>
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

<style lang="scss">
.btn-section {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 25px;
  .btn {
    width: 100%;
    border-style: none;
    padding: 16px 40px;
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    transition: border .3s;
  &.order {
    background: linear-gradient(180deg, #6289AD 0%, #7AA2C7 100%);
  }
  &.cancel {
    background: linear-gradient(180deg, #CE5858 0%, #DC7A7A 100%);
  }
  &:hover {
    cursor: pointer;
  }
  &.disabled {
    cursor: not-allowed;
    background: none;
    background-color: grey;
  }
  }
}
</style>