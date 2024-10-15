<script setup="setup">
const { createApp, ref } = Vue;

createApp({
  setup() {
    const message = ref("Hello vue!");
    return {
      message,
    };
  },
}).mount("#app");
</script>

<template>
  <div id="site">
    <header id="site-header">
      <div class="navigation-wrapper">
        <div>Header Area</div>
      </div>
    </header>
    <main id="site-main">ini homepage</main>
    <footer id="site-footer">
      <div class="footer-wrapper">
        <div>Footer Area</div>
      </div>
    </footer>
  </div>
</template>

<style scoped="scoped"></style>
