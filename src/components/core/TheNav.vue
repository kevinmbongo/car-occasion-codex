<template>
  <nav class="bg-blue-800 bottom-0 md:fixed">
    <article>
      <section>
        <div v-for="brand in brandListFilters" :key="brand.id">
          <input type="checkbox" name="scales" />
          <label> {{ brand.name }} </label>
          <i> ({{ brand.announcement }})</i>
        </div>
      </section>

      <section>
        <select id="" name="">
          <option value="">pro</option>
          <option value="">particulier</option>
        </select>
      </section>
    </article>
  </nav>
</template>

<script>
export default {
  name: 'VNav',

  props: {
    brandListFilters: {
      type: Array,
      required: true,
    },
  },
}
</script>
