<script>
    export default {
        props: ['p_menus'],
        data() {
            return {
                activeMenu : null,
                activeSubMenu: null,
                activeMenuMobile : false,
                activeSubMenuMobile: null,
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
                    this.activeSubMenu = null; 
                } else {
                    this.activeSubMenu = subMenuTitle;
                }
            },
            toggleMenu(menuTitle){
                if(this.activeMenu === menuTitle){
                    this.activeMenu = null;
                }else{
                    this.activeMenu = menuTitle;
                }
            },
            toggleMenuMobile(){
                this.activeMenuMobile = !this.activeMenuMobile
            },
            toggleSubMenuMobile(subMenuMobileTitle) {
                if (this.activeSubMenuMobile === subMenuMobileTitle) {
                    this.activeSubMenuMobile = null; 
                } else {
                    this.activeSubMenuMobile = subMenuMobileTitle;
                }
            },
        },
    };         
</script>
<template>
    <nav class="">
        <!-- black navbar -->
        <div class="w-full bg-black">
            <div class="container mx-auto flex items-center justify-between py-[20px]">
                <div class="icon-wrapper flex gap-[5px] md:gap-[10px]">
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
                    <a href="#" class="bg-white md:px-[20px] md:py-[15px] py-[8px] px-[10.5px] text-[12px] md:text-[16px] rounded-[5px] font-bricolage">
                        Register Now
                    </a>
                </div>
            </div>
        </div>
        <div class="container mx-auto flex items-center justify-between py-[11.5px] lg:py-0 gap-[24px] md:gap-0  bg-white">
            <!-- menu dekstop -->
            <div v-if="p_menus" class="hidden md:block ">
                <ul class="menu flex">
                    <li class="group lg:px-[20px] lg:py-[23px] px-[10px] py-[13px] bg-listNav bg-opacity-10 font-bold text-listNav cursor-pointer font-bricolage text-[10px] lg:text-[12px] xl:text-[16px] ease-in-out duration-500">
                        <!-- hot news -->
                        <a href="#">Hot News</a>
                        <div class="absolute hidden group-hover:flex mt-[23px] w-full gap-[24px] px-[44.5px] items-center justify-center pl-[21px] py-[29.5px] left-0 bg-white">
                            <figure class=" lg:w-[203px] md:w-[130px]">
                                <img src="/image1.png" alt="image" />
                                <figcaption class="mt-2">
                                    <p class="text-black font-normal leading-[14.4px] lg:text-[12px] md:text-[10px]">Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field</p>
                                    <div class="flex justify-between font-normal mt-[10px]">
                                        <p class="text-black">politics</p>
                                        <p class="text-dateText">sep.24.2024</p>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure class=" lg:w-[203px] md:w-[130px]">
                                <img src="/image1.png" alt="image" />
                                <figcaption class="mt-2">
                                    <p class="text-black font-normal leading-[14.4px] lg:text-[12px] md:text-[10px]">Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field</p>
                                    <div class="flex justify-between font-normal mt-[10px]">
                                        <p class="text-black">politics</p>
                                        <p class="text-dateText">sep.24.2024</p>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure class=" lg:w-[203px] md:w-[130px]">
                                <img src="/image1.png" alt="image" />
                                <figcaption class="mt-2">
                                    <p class="text-black font-normal leading-[14.4px] lg:text-[12px] md:text-[10px]">Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field</p>
                                    <div class="flex justify-between font-normal mt-[10px]">
                                        <p class="text-black">politics</p>
                                        <p class="text-dateText">sep.24.2024</p>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure class=" lg:w-[203px] md:w-[130px]">
                                <img src="/image1.png" alt="image" />
                                <figcaption class="mt-2">
                                    <p class="text-black font-normal leading-[14.4px] lg:text-[12px] md:text-[10px]">Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field</p>
                                    <div class="flex justify-between font-normal mt-[10px]">
                                        <p class="text-black">politics</p>
                                        <p class="text-dateText">sep.24.2024</p>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure class=" lg:w-[203px] md:w-[130px]">
                                <img src="/image1.png" alt="image" />
                                <figcaption class="mt-2">
                                    <p class="text-black font-normal leading-[14.4px] lg:text-[12px] md:text-[10px]">Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field</p>
                                    <div class="flex justify-between font-normal mt-[10px]">
                                        <p class="text-black">politics</p>
                                        <p class="text-dateText">sep.24.2024</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </li>   
                    <li
                        v-for="value in p_menus"
                        :key="value.name"
                        :class="[
                            activeMenu === value.name ? 'border-b-4 border-[#12B04B] z-[1]':'',
                            value.name.replace(/\s+/g, '').toLowerCase()
                        ]"
                        @click.prevent = "toggleMenu(value.name)"
                        class="group lg:px-[20px] lg:py-[23px] px-[10px] py-[13px] hover:bg-listNav hover:bg-opacity-10 hover:font-bold hover:text-listNav cursor-pointer text-garyText font-bricolage text-[10px] lg:text-[12px] xl:text-[16px] ease-in-out duration-500">
                        <a href="#">{{ value.name }}</a>
                        <!-- sub menu -->
                        <ul
                        :class="activeMenu === 'hot news' ? 'hidden':''"
                        class="subMenu absolute hidden group-hover:block mt-[23px] w-full h-[50%] bg-white border-r-2 border-gray-200 pl-[21px] py-[29.5px] left-0"
                        v-if="value.subMenu">
                        <li
                            v-for="item in value.subMenu" :key="item.title"
                            class="py-[9px] pl-[21px] border-b border-gray-200 lg:w-[161px] w-[120px]" :class="activeSubMenu === item.title ? 'bg-listNav bg-opacity-10':'' ">
                                <p @click.prevent="toggleSubMenu(item.title)">
                                {{ item.title }}
                                </p>
                            <div
                            v-if="activeSubMenu === item.title"
                            class="absolute top-0 left-[200px] px-4 py-2 w-[200px] flex lg:gap-[24px] md:gap-[14px]  bg-white">
                            <!-- sub item -->
                            <div v-for="(subItem, index) in item.subItem" class="">
                                <figure class="lg:w-[203px] md:w-[130px]">
                                    <img :src="subItem.image" alt="coba" />
                                    <figcaption class="category mt-2">
                                        <p class="text-black font-normal leading-[14.4px] lg:text-[12px] md:text-[10px]">{{ subItem.desc }}</p>
                                        <div class="flex justify-between font-normal mt-[10px]">
                                            <p :class="subItem.category.replace(/\s+/g, '').toLowerCase()" class="text-black">{{ subItem.category }}</p>
                                            <p class="text-dateText">{{ subItem.date }}</p>
                                        </div>
                                    </figcaption>
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
            <!-- mobile -->
            <div class="md:hidden">
                <div @click.prevent="toggleMenuMobile()">
                    <img class="w-[25px]" src="../assets/hamburger.svg" alt="hamburger">
                </div>
                <div
                v-show="activeMenuMobile"
                class="menu-mobile absolute left-0 w-full py-[15px]">
                    <ul class="" v-if="p_menus">
                        <li 
                        :class="activeSubMenuMobile === menu.name ? 'bg-listNav bg-opacity-10 text-listNav font-bold font-bricolage' : ''"
                        class="py-[9px] pl-[8px] border-b font-bricolage"
                        v-for="menu in p_menus"
                        @click.prevent="toggleSubMenuMobile(menu.name)"
                        ><a href="">{{ menu.name }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.hotnews{
    background-color: #12B04B1A;
    color : #12B04B;
    font-weight: 700;
}
.category .sport{
    padding-left: 15px; 
    border-left: 4px solid blue;
}
.category .business{
    padding-left: 15px; 
    border-left: 4px solid rgb(6, 174, 3);
}
.category .politics{
    padding-left: 15px; 
    border-left: 4px solid red;
}
</style>