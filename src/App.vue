<script>
import Hotnews from "./component/Hotnews.vue";
import Lastest from "./component/Lastest.vue";
import Mustread from "./component/Mustread.vue";
import Populer from "./component/populer.vue";
import Vidio from "./component/Video.vue";

export default {
  components: {
    Hotnews: Hotnews,
    Lastest: Lastest,
    Mustread: Mustread,
    Populer: Populer,
    Vidio: Vidio,
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
      <Mustread />
      <Populer />
      <Vidio />
    </main>
    <footer id="site-footer">
      <div class="footer-wrapper">
        <div>Footer Area</div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
