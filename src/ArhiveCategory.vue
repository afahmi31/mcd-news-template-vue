<script>
import Hero from './components/HeroCategory.vue'

export default {
 components:{
  Hero : Hero
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
          <Hero/>
        </main>
        <footer id="site-footer">
            <div class="footer-wrapper">
                <div>Footer Area</div>
            </div>
        </footer>
    </div>
</template>
<style scoped="scoped"></style>