<template>
    <div>
        <ul>
            <h2>Votre choix</h2>
            <br>
            <li>Modèle : <span>{{ porsche.modele }}</span></li>
            <li>Couleur : <span>{{ porsche.nomCouleur }}</span></li>
            <br>
            <h2>Spécifications</h2>
            <br>
            <li>Puissance : <span>{{ porsche.puissance }}</span></li>
            <br>
            <li>Vitesse maximale : <span>{{ porsche.vitesseMax }}</span></li>
            <br>
            <li>Temps d'accélération de 0 à 100km/h : <span>{{ porsche.accelTemps }}s</span></li>
        </ul>
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
div {
    padding: 25px 30px;
    background-color: #EEEEEE;
    border-top: 1px solid #DFDFDF;
    border-bottom: 1px solid #DFDFDF;
ul {
    font-size: 0.875rem;
    font-weight: 500;
    list-style: none;
    h2 {
        font-size: 0.875rem;
        font-weight: 500;
        text-decoration: underline;
    }
    li {
        span {
            color: #9E9E9E;
        }
    }
}
}

</style>