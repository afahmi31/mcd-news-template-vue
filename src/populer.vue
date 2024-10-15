<script setup="setup">

const data = ref([
    { image: '/images/komeng.png', text: 'Text 2' },
    { image: '/images/timnas.png', text: 'Text 1' },
    { image: '/images/mansur.png', text: 'Text 3' },
    { image: '/images/bowo.png', text: 'Text 3' },
]);

</script>

<template>
    <div id="site">
        <header id="site-header">
            <div class="navigation-wrapper">
                <div>Header Area</div>
            </div>
        </header>
        <main id="site-main">
            ini populer
        </main>
        <footer id="site-footer">
            <div class="footer-wrapper">
                <div>Footer Area</div>
            </div>
        </footer>
    </div>
</template>

<style scoped="scoped"></style>