export default {
    porsche: {
        marque: 'Porsche',
        modele: '911 Carrera',
        puissance: 385,
        vitesseMax: 293,
        accelTemps: 4,
        image: require('@/assets/img/cars/porsche-blanc.jpg'),
        nomCouleur: 'Blanc Nacré',
        stock: true,
        disponibleText: null,
        variantes: [
        {
          id: 1,
          nomCouleur: 'Blanc Nacré',
          imageCouleur: require('@/assets/img/colors/couleur-blanc.png'),
          imageVoiture: require('@/assets/img/cars/porsche-blanc.jpg'),
          enStock: true
        },
        {
          id: 2,
          nomCouleur: 'Noir Sombre',
          imageCouleur: require('@/assets/img/colors/couleur-noir.png'),
          imageVoiture: require('@/assets/img/cars/porsche-noir.jpg'),
          enStock: true
        },
        {
          id: 3,
          nomCouleur: 'Rouge Sang',
          imageCouleur: require('@/assets/img/colors/couleur-sang.png'),
          imageVoiture: require('@/assets/img/cars/porsche-rouge.jpg'),
          enStock: false
        },
        {
          id: 4,
          nomCouleur: 'Pure Or',
          imageCouleur: require('@/assets/img/colors/couleur-jaune.png'),
          imageVoiture: require('@/assets/img/cars/porsche-jaune.jpg'),
          enStock: true
        }
      ]
      }
}