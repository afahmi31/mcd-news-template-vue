<script>
    export default {
        props: ['p_menus'],
        data() {
            return {
            activeSubMenu: null,
            };
        },
        mounted() {
            // Set activeSubMenu ke submenu pertama (jika ada submenu)
            if (this.p_menus && this.p_menus.length > 0 && this.p_menus[0].subMenu && this.p_menus[0].subMenu.length > 0) {
            this.activeSubMenu = this.p_menus[0].subMenu[0].title; // Set submenu pertama sebagai aktif
            }
        },
        methods: {
            toggleSubMenu(subMenuTitle) {
            if (this.activeSubMenu === subMenuTitle) {
                this.activeSubMenu = null; // Menyembunyikan jika diklik lagi
            } else {
                this.activeSubMenu = subMenuTitle; // Menampilkan submenu yang baru diklik
            }
            console.log("clicked:", subMenuTitle);
            },
        },
    };         
</script>
<template>
    <nav class="">
        <div class="w-full bg-black">
            <div class="container mx-auto flex items-center justify-between py-[20px]">
                <div class="icon-wrapper flex gap-[10px]">
                    <div class="nav-icon">
                        <a href="https://www.linkedin.com">
                            <img src="../assets/linkedin.svg" alt="linkedin-icon">
                        </a>
                    </div>
                    <div class="nav-icon">
                        <a href="https://www.facebook.com">
                            <img src="../assets/facebook.svg" alt="facebook-icon">
                        </a>
                    </div>
                    <div class="nav-icon">
                        <a href="https://www.instagram.com">
                            <img src="../assets/instagram.svg" alt="instagram-icon">
                        </a>
                    </div>
                    <div class="nav-icon">
                        <a href="https://www.linkedin.com">
                            <img src="../assets/linkedin.svg" alt="linkedin-icon">
                        </a>
                    </div>
                </div>
                <div class="logo-wrapper">
                    <a href="#">
                         <p class=" font-bricolage text-[20px] text-white leading-[24px] md:text-[40px] md:leading-p[48px]">LWK</p>
                    </a>
                </div>
                <div class="button-wrapper">
                    <a href="#" class="bg-white md:px-[20px] md:py-[15px] py-[8px] px-[10.5px] text-[12px] rounded-[5px] font-bricolage">
                        Register Now
                    </a>
                </div>
            </div>
        </div>
        <div class="container mx-auto flex items-center justify-between py-[11.5px] lg:py-0 gap-[24px] md:gap-0">
            <div v-if="p_menus" class="hidden md:block">
                <ul class="menu flex gap-[5px]">
                    <li
                        v-for="value in p_menus"
                        :key="value.name"
                        class="group lg:px-[20px] lg:py-[23px] px-[10px] py-[13px] hover:bg-listNav hover:bg-opacity-10 hover:font-bold hover:text-listNav cursor-pointer text-garyText font-bricolage text-[10px] lg:text-[12px] xl:text-[16px] ease-in-out duration-500">
                        <a href="#">{{ value.name }}</a>
                        <ul
                        class="subMenu absolute hidden group-hover:block lg:mt-[23px] lg:w-[265px] border-r-2 border-gray-200 py-[29.5px]"
                        v-if="value.subMenu">
                        <li
                            v-for="item in value.subMenu"
                            :key="item.title"
                            class="py-[9px] border-b border-gray-200 lg:w-[161px] " :class="activeSubMenu === item.title ? 'bg-listNav bg-opacity-10':'' ">
                            <p @click.prevent="toggleSubMenu(item.title)">
                            {{ item.title }}
                            </p>
                            <div
                            v-if="activeSubMenu === item.title"
                            class="absolute top-0 left-full border-l border-gray-200 px-4 py-2 w-[200px] flex gap-[24px]">
                            <div v-for="subItem in item.subItem" class="">
                                <figure class="w-[203px]">
                                <img :src="subItem.image" alt="coba" />
                                <p class="text-black font-normal">{{ subItem.desc }}</p>
                                </figure>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="search-wrapper flex lg:px-[12px] lg:py-[10px] md:px-[7px] md:py-[5px] py-[10px] px-[12px] gap-[5px] border border-gray-300 rounded-[5px] w-full lg:max-w-[285px] md:max-w-[185px]">
                <img src="../assets/search.svg" alt="search">
                <input class="w-full outline-none" type="text" placeholder="Search">
            </div>
            <div class="mobileMenu md:hidden">
                <img src="../assets/hamburger.svg" alt="hamburger">
            </div>
        </div>
    </nav>
</template>