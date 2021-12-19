<template>
  <nav
    class="bg-paper md:fixed bottom-0 text-black rounded-bl-3xl rounded-tr-3xl"
  >
    <the-header />

    <article class="grid gap-y-3 px-7">
      <section class="grid grid-cols-12 gap-x-5 gap-y-2">
        <div class="col-span-12">
          <h4>Cars</h4>
        </div>
        <div class="col-span-6">
          <FormulateInput
            v-model="selectedBrand"
            :options="brandList"
            type="select"
            placeholder="Select brand"
            label="Brand"
            @input="handleFilterChange"
          />
        </div>
        <div class="col-span-6">
          <FormulateInput
            v-model="selectedModels"
            :options="modelsList"
            type="select"
            placeholder="Select models"
            label="models"
            @input="handleFilterChange"
          />
        </div>
      </section>

      <section class="grid grid-cols-12 gap-x-5 gap-y-2">
        <div class="col-span-12">
          <h4>Prices</h4>
        </div>

        <div class="col-span-6">
          <FormulateInput
            v-model="pricesMin"
            type="number"
            label="Minimum"
            @input="handleFilterChange"
          />
        </div>
        <div class="col-span-6">
          <FormulateInput
            v-model="pricesMax"
            type="number"
            label="Maximum"
            @input="handleFilterChange"
          />
        </div>
      </section>

      <section class="grid grid-cols-12 gap-x-5 gap-y-2">
        <div class="col-span-12">
          <h4>Selected energy</h4>
        </div>
        <div class="col-span-6">
          <FormulateInput
            v-model="selectedEnergy"
            :options="energyList"
            type="radio"
            @input="handleFilterChange"
          />
        </div>
      </section>

      <section class="grid grid-cols-12 gap-x-5 gap-y-2">
        <div class="col-span-12">
          <h4>Years</h4>
        </div>

        <div class="col-span-6">
          <FormulateInput
            v-model="yearsMin"
            type="number"
            label="From"
            @input="handleFilterChange"
          />
        </div>
        <div class="col-span-6">
          <FormulateInput
            v-model="yearsMax"
            type="number"
            label="To"
            @input="handleFilterChange"
          />
        </div>
      </section>

      <section class="grid grid-cols-12 gap-x-5 gap-y-2">
        <div class="col-span-12">
          <h4>Kilometers</h4>
        </div>

        <div class="col-span-6">
          <FormulateInput
            v-model="kilometersMin"
            type="number"
            label="Minimum"
            @input="handleFilterChange"
          />
        </div>
        <div class="col-span-6">
          <FormulateInput
            v-model="kilometersMax"
            type="number"
            label="Maximum"
            @input="handleFilterChange"
          />
        </div>
      </section>
    </article>
  </nav>
</template>

<script>
import TheHeader from '@/components/core/TheHeader'

export default {
  name: 'TheNav',
  components: { TheHeader },
  props: {
    brandListFilters: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    selectedBrand: '',
    brandList: {
      suzuki: 'Suzuki',
      peugeot: 'Peugeot',
      renault: 'Renault',
      citroen: 'Citroen',
      nissan: 'Nissan',
      ford: 'Ford',
      hyundai: 'Hyundai',
      volkswagen: 'Volkswagen',
      mercedes: 'Mercedes',
      ds: 'DS',
    },
    selectedModels: '',
    modelsList: {
      vitara: 'Vitara',
      ignis: 'Ignis',
      berlingo: 'Berlingo',
      clio: 'Clio',
      capture: 'Capture',
      astra: 'Astra',
      corsa: 'Corsa',
      c4: 'C4',
    },
    pricesMin: 1000,

    pricesMax: 50000,

    selectedEnergy: '',
    energyList: {
      essence: 'Gasoiline',
      diesel: 'Diesel',
      hybride: 'Hybrid',
      electric: 'Electric',
    },

    yearsMin: 2000,
    yearsMax: 2021,

    kilometersMin: 0,
    kilometersMax: 1000000,
  }),
  methods: {
    handleFilterChange() {
      const userFilters = {
        selectedBrand: this.selectedBrand,
        selectedModels: this.selectedModels,
        pricesMin: this.pricesMin,
        pricesMax: this.pricesMax,
        selectedEnergy: this.selectedEnergy,
        yearsMin: this.yearsMin,
        yearsMax: this.yearsMax,
        kilometersMin: this.kilometersMin,
        kilometersMax: this.kilometersMax,
      }

      this.$emit('filter-change', userFilters)
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  height: 100vh;
}

@screen md {
  nav {
    width: 400px;
  }
}
</style>
