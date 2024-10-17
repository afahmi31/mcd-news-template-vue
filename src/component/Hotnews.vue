<script>
export default {

}
</script>

<template>
    <section class="container lg:max-w-[1200px] mx-auto">
        <div class="pt[71px]">
            <div class="text-center flex gap-[7px] justify-center items-center">
                <div class=" h-[2px] border-[2px] md:w-[491px] w-[99px] border-black mt-4"></div>
                <h1 class="text-[32px] md:text-[40px] font-semibold text-black">Hot</h1>
                <h1 class="text-[32px] md:text-[40px] font-semibold text-red-600">News</h1>
                <div class="h-[2px] border-[2px] md:w-[491px] w-[99px] border-black mt-4"></div>
            </div>
        </div>
        <div class=" grid grid-cols-1 lg:grid-cols-2 gap-4 pt-[33px]">
            <!-- Large image on the left -->
            <div class="relative">
                <img src="/images/speed.jpeg" alt="Main News" class="w-[375px] h-[272px] md:w-[590px] md:h-[588px] object-cover">
                <div class="absolute p-4 bottom-0">
                    <h2 class="text-[16px] leading-[18.08px] md:text-[30px] md:leading-[33.9px] font-bold text-white">Record Breaking, IShowSpeed Reaches 1
                        Million Steaming Views in
                        Jakarta, Indonesia!</h2>
                    <div class="flex items-start justify-between">
                        <div class="border-l-4 border-yellow-500 pl-2">
                            <p class="font-medium text-white text-[16px] leading-[16px] font-poppins">Populer</p>
                        </div>
                        <p class="hidden md:block text-[16px] leading-[16px] text-white font-poppins ml-4">Sep.24.2024</p>
                    </div>
                </div>
            </div>
            <!-- Second image -->
            <div class="flex flex-wrap px-[24px] md:px-0">
                <div class="relative">
                    <img src="/images/puan.jpeg" alt="News 2" class="w-[375px] h-[193px] md:w-[590px] md:h-[290px] object-cover">
                    <div class="absolute p-4 bottom-[10px]">
                        <h2 class="text-[16px] leading-[18.08px] md:text-[24px] md:leading-[27.12px] font-bold text-white ">
                            Record Breaking, IShowSpeed Reaches 1 Million Steaming Views
                            in Jakarta, Indonesia!</h2>
                        <div class="flex items-start justify-between">
                            <div class="border-l-4 border-yellow-500 pl-2">
                                <p class="font-medium text-white text-[16px] leading-[16px] font-poppins">Populer</p>
                            </div>
                            <p class="hidden md:block text-[16px] leading-[16px] text-white font-poppins ml-4">Sep.24.2024</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between gap-4 pt-[20px]">
                    <div class="relative w-[50%]">
                        <img src="/images/komeng1.jpeg" alt="News 3" class="w-[178px] h-[167px] md:w-[285px] md:h-[278px] object-cover">
                        <div class="absolute p-2 bottom-[10px]">
                            <h2 class="text-[12px] leading-[12.6px] md:text-[16px] md:leading-[18.08px] font-bold text-white">Rice
                                Prices in Indonesia are High but Farmers' Income is Low,
                                What's the Cause?</h2>
                            <div class="flex items-start justify-between">
                            <div class="border-l-4 border-yellow-500 pl-2">
                                <p class="font-medium text-white text-[16px] leading-[16px] font-poppins">Populer</p>
                            </div>
                            <p class="hidden md:block text-[12px] leading-[16px] text-white font-poppins ml-4">Sep.24.2024</p>
                        </div>
                        </div>
                    </div>
                    <div class="relative w-[50%]">
                        <img src="/images/emas.png" alt="News 4" class="w-[178px] h-[167px] md:w-[285px] md:h-[278px] object-cover">
                        <div class="absolute p-2 bottom-[10px]">
                            <h2 class="text-[12px] leading-[12.6px] md:text-[16px] md:leading-[18.08px] font-bold text-white">
                                Record Breaking, IShowSpeed Reaches 1 Million Steaming Views
                                in Jakarta, Indonesia!</h2>
                            <div class="flex items-start justify-between">
                            <div class="border-l-4 border-yellow-500 pl-2">
                                <p class="font-medium text-white text-[16px] leading-[16px] font-poppins">Populer</p>
                            </div>
                            <p class="hidden md:block text-[12px] leading-[16px] text-white font-poppins ml-4">Sep.24.2024</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped="scoped"></style>