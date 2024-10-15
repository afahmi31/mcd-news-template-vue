<script>
import Hotnews from "./component/Hotnews.vue";
import Lastest from "./component/Lastest.vue";

export default {
  components: {
    Hotnews: Hotnews,
    Lastest: Lastest,
  }
}
</script>

<template>
  <div id="site">
    <header id="site-header">
      <div class="navigation-wrapper">
        <div>Header Area</div>
      </div>
    </header>
    <main id="site-main">
      <Hotnews />
      <Lastest />
    </main>
    <footer id="site-footer">
      <div class="footer-wrapper">
        <div>Footer Area</div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
