<script>
import HeroPopuler from './components/HeroPopuler.vue';
import NotFound from './components/NotFound.vue';
export default {
    components:{
        HeroPopuler:HeroPopuler,
        NotFound:NotFound
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
            
            <NotFound/>
            
        </main>
        <footer id="site-footer">
            <div class="footer-wrapper">
                <div>Footer Area</div>
            </div>
        </footer>
    </div>
</template>

<style scoped="scoped"></style>