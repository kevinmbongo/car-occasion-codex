<template>
  <main class="bg-background p-10">
    <v-car-card
      v-for="car in carList"
      :key="car.id"
      :infos-list="car.infosList"
      :image="car.image"
    />
  </main>
</template>

<script>
import VCarCard from '@/components/commons/VCarCard'

export default {
  name: 'TheMainLayout',

  components: { VCarCard },

  props: {
    carList: {
      type: Array,
      required: true,
    },
  },
}
</script>
