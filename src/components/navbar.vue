<script setup="setup">

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
                        <img src="../assets/logo.svg" alt="logo">
                    </a>
                </div>
                <div class="button-wrapper">
                    <a href="#" class="bg-white px-[20px] py-[15px] rounded-[5px] font-bricolage">
                        Register Now
                    </a>
                </div>
            </div>
        </div>
        <div class="container mx-auto flex items-center justify-between">
            <ul class="flex">
                <li class="list-item"><a href="#">Hot News</a></li>
                <li class="list-item"><a href="#">Natural Disaster</a></li>
                <li class="list-item"><a href="#">Politic</a></li>
                <li class="list-item"><a href="#">Business</a></li>
                <li class="list-item"><a href="#">Sport</a></li>
                <li class="list-item"><a href="#">Education</a></li>
                <li class="list-item"><a href="#">Accident</a></li>
            </ul>
            <div class="search-wrapper flex px-[12px] py-[10px] gap-[5px] border border-gray-300 rounded-[5px]">
                <img src="../assets/search.svg" alt="search">
                <input class="w-full outline-none" type="text" placeholder="Search">
            </div>
        </div>
    </nav>
</template>