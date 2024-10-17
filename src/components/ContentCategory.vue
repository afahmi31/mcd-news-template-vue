<script>
    export default{
        props : ['content']
    }
</script>

<template>
    <div class="container mx-auto mt-[40px]">
        <div class="md:flex block justify-between md:gap-[20px] md:mb-[80px] mb-[40px]">
            <div class="lg:w-[895px] md:w-[490px]" v-if="content">
                <div v-for="item in content" class="flex flex-col gap-[14px]">
                    <div v-for="value in item.content1">
                        <figure class="flex pb-[14px] border-b border-black border-opacity-30">
                            <img class="lg:max-w-[388px] md:max-w-[250px] max-w-[110px] object-cover" :src="value.image" alt="image">
                          <figcaption class="py-[23px] pr-[26px] ml-[34px] font-bricolage">
                            <p 
                                class="lg:text-[20px] lg:leading-[20px] text-[14px] leading-[14px]"
                                :class="value.category.replace(/\s+/g, '').toLowerCase()">
                                    {{ value.category }}
                            </p>
                            <h2 class="lg:mt-[20px] mt-[10px] lg:leading-[30px] text-[14px] leading-[20px] font-bold text-black">{{ value.title }}</h2>
                            <p class=" hidden lg:block text-[18px] leading-[27px] text-categoryText mt-[10px]">{{ value.desc }} <span><a :href="value.link" class="text-blue-500">read more.....</a></span></p>
                          </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="mt-[40px] md:mt-0">
                <div class="mb-[21px]">
                    <p class="text-[24px] leading-[28.8px] font-semibold mb-[13px]">Populer <span class="text-red-500">News</span></p>
                    <div class="flex gap-[12px] mt-[13px]">
                        <div class="border-2 border-black md:w-[60%] w-[30%]"></div>
                        <div class="border-2 border-black md:w-[20%] w-[10%]"></div>
                        <div class="border-2 border-black md:w-[20%] w-[10%]"></div>
                    </div>
                </div>
                <div v-if="content">
                    <div v-for="value in content" class="flex flex-col md:gap-[20px] gap-[10px]">
                        <div v-for="item in value.popular" class="md:border-b md:border-black md:border-opacity-30 md:pb-[20px] pb-[10px]">
                            <figure class="relative">
                                <img class="lg:max-w-[285px] md:max-w-[205px] w-full object-cover" :src="item.image" alt="image">
                                <figcaption class="absolute bottom-0 px-[8px] bg-black bg-opacity-40 h-full w-full flex">
                                    <div class="mt-auto">
                                        <p class="lg:text-[16px] lg:leading-[19.2px] sm:text-[14px] sm:leading-[14.7px] md:text-[12px] md:leading-[12px] font-semibold font-bricolage text-white">{{ item.title }}</p>
                                        <div class="pb-[10px] lg:mt-[16px] mt-[8.5px]">
                                            <p class="lg:text-[14px] lg:leading-[14px] md:text-[10px] md:leading-[10px] sm:text-[12px] sm:leading-[12px] text-white" :class="item.category.replace(/\s+/g, '').toLowerCase()">{{ item.category }}</p>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .badminton{
        padding-left: 15px;
        border-left: 4px solid blue;
    }
    .football{
        padding-left: 15px;
        border-left: 4px solid red;
    }
    .vollyball{
        padding-left: 15px;
        border-left: 4px solid #00FFF2;
    }
    .g-esport{
        padding-left: 15px;
        border-left: 4px solid #FFA600;
    }
</style>