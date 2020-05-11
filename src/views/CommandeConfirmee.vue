<template>
<div class="container">
<TheHeader />
<div class="msg-notice">
    <p>Nous vous remercions pour votre commande.</p>
</div>
</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
export default {
    components: {
        TheHeader
    }
}
</script>

<style lang="scss" scoped>
.msg-notice {
    text-align: center;
    padding: 150px 50px;
    p {
        letter-spacing: 0.1em;
        font-size: 1.125em;
        font-weight: 300;
        color: #9E9E9E;
        text-transform: uppercase;;
    }
}
</style>