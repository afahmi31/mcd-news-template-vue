<script>
export default {
    data() {
        return {
            cards: [
                {
                    title:
                        'Remind Members of Parliament, Chief Justice: Your Oath Contains Responsibility to the Nation...',
                    image: '/images/komeng2.png',
                    date: 'Sep.24.2024',
                    author: 'Politcs',
                },
                {
                    title: 'Suhandinata Cup 2024: Indonesia wins over Macau in first match',
                    image: '/images/indonesia.png',
                    date: 'Sep.24.2024',
                    author: 'Sport',
                },
                {
                    title:
                        'Police in Blitar City Invited to Improve Kasatkamling to Deal with Disasters',
                    image: '/images/paloh.png',
                    date: 'Sep.24.2024',
                    author: 'Politcs',
                },
                {
                    title:
                        "Pertamina's non-subsidized fuel prices will decrease again as of October 2024, here's why",
                    image: '/images/prabowo.png',
                    date: 'Sep.24.2024',
                    author: 'Business',
                },
            ],
        };
    },
};
</script>

<template>
    <section class="container lg:max-w-[1200px] mx-auto pt-[74px] px-[24px] md:px-0">
        <!-- Header -->
        <div class="grid grid-cols-2 md:grid-cols-2">
            <div class="flex gap-1 flex-wrap">
                <h1 class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold text-black">Populer</h1>
                <h1 class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold text-red-600">News</h1>
            </div>
            <div class="flex justify-end items-center py-[6px]">
                <div class=" flex items-center justify-center">
                    <p class="text-black text-[16px] pr-[8px]">See All</p>
                    <img src="/svg/panah-kanan.svg" alt="Arrow Icon" />
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="flex gap-[12px] flex-wrap">
            <div class="border-[2px] w-[81px] md:w-[244px] border-black mt-2"></div>
            <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
            <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 ">
            <div v-for="card in cards" :key="card.title" class="">
                <img :src="card.image" alt="image" class="w-[full] h-auto" />
                <div class="flex mt-2 justify-between">
                    <div class="border-l-4 border-black ">
                        <p class="ml-[10px] text-[14px] leading-[14px] md:text-[16px] md:leading-[16px] font-bold font-poppins text-[#002E40]">{{ card.author }}</p>
                    </div class="">
                    <p class="text-[12px] mx-[10px] leading-[12px]  text-[#002E40] font-poppins">{{ card.date }}</p>
                </div>
                <p class="text-[12px] leading-[15.6px] md:text-[20px] md:leading-[26px] font-semibold text-[#1D1717] pt-[12px] md:pt-[14px]">{{ card.title }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
