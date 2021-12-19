<template>
  <div id="app">
    <the-nav
      :brand-list-filters="brandListFilters"
      @filter-change="carFilter"
    />

    <the-main-layout :car-list="filterCarList" />

    <the-footer />
  </div>
</template>

<script>
import TheNav from '@/components/core/TheNav'
import TheFooter from '@/components/core/TheFooter'
import TheMainLayout from '@/components/core/TheMainLayout'

export default {
  name: 'App',

  components: { TheMainLayout, TheFooter, TheNav },

  data: () => ({
    brandListFilters: [
      {
        id: 1,
        name: 'Citroen',
        announcement: 236,
      },
      {
        id: 2,
        name: 'Peugeot',
        announcement: 179,
      },
      {
        id: 3,
        name: 'Renault',
        announcement: 196,
      },
      {
        id: 4,
        name: 'Volkswagen',
        announcement: 78,
      },
    ],

    filterCarList: [],
    filterPricesList: [],
  }),

  computed: {
    carlist() {
      const carsDataBase = Array(100)
        .fill(null)
        .map((item, index) => {
          const { brand, model, image } = this.getRandomBrand()

          return {
            id: index,
            infosList: {
              brand: brand,
              model: model,
              price: this.getRandomPrice(),
              energy: this.getRandomEnergy(),
              year: this.getRandomYears(),
              kilometer: this.getRandomKilometers(),
            },
            image: image,
          }
        })
      return carsDataBase
    },
  },

  created() {
    this.filterCarList = this.carlist
    this.filterPricesList = this.carlist
  },

  methods: {
    getRandomPrice() {
      return Math.floor(Math.random() * (50000 - 10000))
    },

    getRandomYears() {
      return Math.floor(Math.random() * (2021 - 1970) + 1970)
    },

    getRandomKilometers() {
      return Math.floor(Math.random() * (250000 - 999))
    },

    getRandomEnergy() {
      const energyList = ['Gasoiline', 'Diesel', 'Hybrid', 'Electric']
      const randomEnergy =
        energyList[Math.floor(Math.random() * energyList.length)]

      return randomEnergy
    },

    getRandomBrand() {
      const modelList = {
        Suzuki: [
          {
            modelName: 'Swift',
            image:
              'data:images/jpeg;base64,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',
          },
          {
            modelName: 'Vitara',
            image:
              'https://cdn.drivek.it/configurator-covermobile/cars/it/768/SUZUKI/VITARA/39191_SUV-5-PORTE/suzuki-vitara-hybrid-cover-mobile.jpg',
          },
        ],
        Peugeot: [
          {
            modelName: '508 II',
            image:
              'https://www.blog-moteur.com/wp-content/uploads/2021/03/Peugeot-308-2021-Bleu-3.jpeg',
          },
          {
            modelName: '308 III',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2021_-_Peugeot_308_III_%28C%29_-_80.jpg/1200px-2021_-_Peugeot_308_III_%28C%29_-_80.jpg',
          },
        ],
        Renault: [
          {
            modelName: 'Clio 5',
            image:
              'https://fautomobiles.fr/photos/REF1778_067D6BB7444D4CB9AE91644E07C15D70.jpeg',
          },
          {
            modelName: 'Talismen',
            image:
              'https://auto.cdn-rivamedia.com/photos/annonce/big/renault-talisman-16-dci-160ch-energy-initiale-paris-edc-126770995.jpg',
          },
        ],
        Citroen: [
          {
            modelName: 'Ë-C4',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQHheC9i8SJIwtOlFvgGQiL_fZd2eoq1VQQ&usqp=CAU',
          },
          {
            modelName: 'C5 X',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ljffNPOQEG-Y3dKSTEJOoSE5mQCLhg6vNmgf5RLj8929khGOzvzHk8akPd_kqBu9m8w&usqp=CAU',
          },
        ],
        Nissan: [
          {
            modelName: 'Juke',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxsRaHFDSp0U-eOS0uEUa_i_ZjKTiDs2NTxYewVHX8LKbxlsS6txLMYXf3gaejc8n10s&usqp=CAU',
          },
          {
            modelName: 'Micra',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKmpkRxE40bamxXszCZzr5jXnMRRsrMiSdg&usqp=CAU',
          },
        ],
        Ford: [
          {
            modelName: 'focus',
            image:
              'https://maxton-design.fr/fre_pl_Rajouts-Des-Bas-De-Caisse-Pour-Ford-Focus-ST-ST-Line-Mk4-8945_1.jpg',
          },
          {
            modelName: 'fiesta',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4i_oT2SRr4IdgxsAJfF3qlV7heRZKFOQxMA&usqp=CAU',
          },
        ],
        Hyundai: [
          {
            modelName: 'Tucson',
            image:
              'data:image/jpeg;base64,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',
          },
          {
            modelName: 'Ioniq 5',
            image:
              'https://cdn.motor1.com/images/mgl/2gmZg/s1/2022-hyundai-ioniq-5.jpg',
          },
        ],
        Volkswagen: [
          {
            modelName: 'golf 8',
            image:
              'https://www.turbo.fr/sites/default/files/styles/content_img/public/2019-12/IMG_3507.JPG?itok=WVCi4_is',
          },
          {
            modelName: 'Tiguan',
            image:
              'https://feassets.bymycar.fr/vo/4/123060/0/volkswagen-tiguan-allspace-20-tdi-190-dsg7-4motion-occasion-2020-orange.jpg',
          },
        ],
        Mercedes: [
          {
            modelName: 'Classe S',
            image: 'https://i.ytimg.com/vi/BRGUmykIUxk/maxresdefault.jpg',
          },
          {
            modelName: 'Classe A',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3krztt_iPKeXtyWlG5oT7SXD2iB6IU-HbDA&usqp=CAU',
          },
        ],
        DS: [
          {
            modelName: 'DS 9',
            image:
              'https://www.automobile-magazine.fr/asset/cms/840x394/171609/config/120409/sans-titre-1.jpg',
          },
          {
            modelName: 'DS 4',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvS9LC1qOPJMjaY4CM1UHEvN5heyoAKh-GstqNi-MqAq9__3ARqKKVKmbjMM9hooto5E&usqp=CAU',
          },
        ],
      }

      const energyList = [
        'Suzuki',
        'Peugeot',
        'Renault',
        'Citroen',
        'Nissan',
        'Ford',
        'Hyundai',
        'Volkswagen',
        'Mercedes',
        'DS',
      ]

      const randomBrand =
        energyList[Math.floor(Math.random() * energyList.length)]

      return {
        brand: randomBrand,
        model:
          modelList[randomBrand][
            Math.floor(Math.random() * modelList[randomBrand].length)
          ].modelName,
        image:
          modelList[randomBrand][
            Math.floor(Math.random() * modelList[randomBrand].length)
          ].image,
      }
    },

    carFilter(userFilters) {
      this.filterCarList = this.carlist.filter((car) => {
        if (!userFilters.selectedModels)
          return (
            car.infosList.brand.toLowerCase() ===
            userFilters.selectedBrand.toLowerCase()
          )
        else {
          return (
            car.infosList.brand.toLowerCase() ===
              userFilters.selectedBrand.toLowerCase() &&
            car.infosList.model.toLowerCase() ===
              userFilters.selectedModels.toLowerCase()
          )
        }
      })
    },

    pricesFilter(userFilters) {
      this.filterPricesList = this.carlist.filter(
        (car) =>
          car.infosList.price >= userFilters.pricesMin &&
          car.infosList.price <= userFilters.pricesMax
      )
    },
  },
}
</script>
