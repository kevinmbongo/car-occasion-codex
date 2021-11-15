<template>
  <div id="app" class="grid">
    <header class="bg-red-900 col-span-12">Header</header>
    <nav class="bg-blue-800 col-span-4">Nav</nav>
    <main class="bg-green-800 col-span-8">Main</main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
nav {
  height: calc(100vh - 24px);
}
</style>
