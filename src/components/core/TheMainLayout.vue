<template>
  <main class="bg-background pl-16 pr-10 py-5 min-h-screen">
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
import '@/assets/global.scss'

export default {
  name: 'TheMain',

  components: { VCarCard },

  props: {
    carList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
@screen md {
  main {
    margin-left: 400px;
    min-height: 100vh;
  }
}
</style>
