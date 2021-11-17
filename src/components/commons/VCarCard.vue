<template>
  <article class="bg-blue-800 my-5">
    <h3>{{ brand }}</h3>
    <h4>{{ model }}</h4>
    <img :src="image" :alt="model" />
  </article>
</template>

<script>
export default {
  name: 'VCarCard',

  props: {
    brand: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
}
</script>
