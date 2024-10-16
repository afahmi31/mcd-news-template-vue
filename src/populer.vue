<script>
import SearchData from './components/SearchData.vue';
export default {
    components:{
        SearchData:SearchData
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
            <SearchData/>
        </main>
        <footer id="site-footer">
            <div class="footer-wrapper">
                <div>Footer Area</div>
            </div>
        </footer>
    </div>
</template>

<style scoped="scoped"></style>