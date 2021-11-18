<template>
  <article class="bg-paper my-16 rounded-3xl">
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-5">
        <img
          class="relative rounded-3xl object-cover w-full h-full -top-5 right-5"
          :src="image"
          :alt="infosList.brand"
        />
      </div>
      <div class="col-span-7 my-auto py-6 px-16">
        <div class="col-span-12 mb-3">
          <h2 class="text-4xl">{{ infosList.brand }} {{ infosList.models }}</h2>
        </div>
        <div
          v-for="(info, index) in infos"
          :key="info.value + index"
          class="grid grid-cols-12 py-1"
        >
          <div class="col-span-6">
            <h4>{{ info.title }}</h4>
          </div>

          <div class="col-span-6">
            <p>{{ info.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VCarCard',

  props: {
    infosList: {
      type: Object,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },

  computed: {
    infos() {
      const keys = Object.keys(this.infosList)
      const values = Object.values(this.infosList)

      const translations = {
        brand: 'Marque :',
        models: 'Modèle :',
        prices: 'Prix :',
        energy: 'Énergie :',
        years: 'Année :',
        kilometers: 'Kilomètrage :',
      }

      return keys.map((key, index) => ({
        title: translations[key],
        value: values[index],
      }))
    },
  },
}
</script>

<style scoped>
article {
  @apply transition-all duration-200 ease-in-out;
}

article:hover {
  @apply transform scale-105 transition-all duration-300 ease-in-out cursor-pointer;
}
</style>
