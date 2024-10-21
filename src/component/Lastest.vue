<script>
export default {
    data() {
        return {
            cards: [
                {
                    title:
                        'Remind Members of Parliament, Chief Justice: Your Oath Contains Responsibility to the Nation...',
                    image: '/images/rapat.png',
                    date: 'Sep.24.2024',
                    author: 'Politcs',
                },
                {
                    title: 'Suhandinata Cup 2024: Indonesia wins over Macau in first match',
                    image: '/images/badminton.png',
                    date: 'Sep.24.2024',
                    author: 'Sport',
                },
                {
                    title:
                        'Police in Blitar City Invited to Improve Kasatkamling to Deal with Disasters',
                    image: '/images/rapat2.png',
                    date: 'Sep.24.2024',
                    author: 'Disaster',
                },
                {
                    title:
                        "Pertamina's non-subsidized fuel prices will decrease again as of October 2024, here's why",
                    image: '/images/pom.png',
                    date: 'Sep.24.2024',
                    author: 'Business',
                },
                {
                    title:
                        'Things not to do when playing basketball, can be a violation',
                    image: '/images/basket.png',
                    date: 'Sep.24.2024',
                    author: 'Sport',
                },
                {
                    title:
                        'Officially Become DPD Member, Komeng Will Push for National Comedy Day',
                    image: '/images/komeng.png',
                    date: 'Sep.24.2024',
                    author: 'Politcs',
                },
                {
                    title:
                        'Kurnia’s Story, Vocational School Graduate Working on Luxury Cruise Ship, Salary Dozen Million Rupiahs',
                    image: '/images/education.png',
                    date: 'Sep.24.2024',
                    author: 'Education',
                },
                {
                    title:
                        'Boyolali Police Chief’s Car Accident on Kandeman Toll Road, Driver-Attendant Killed',
                    image: '/images/jaring.png',
                    date: 'Sep.24.2024',
                    author: 'Accident',
                },
            ],
        };
    },
};
</script>

<template>
    <section class="pt-[30px] md:pt-[40px]">
        <div class="container lg:max-w-[1200px] mx-auto px-[24px] md:px-0">
            <div class="grid grid-cols-2 md:grid-cols-2 ">
                <div class="flex gap-1 flex-wrap">
                    <h1
                        class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold font-bricolage text-black">
                        Lastest</h1>
                    <h1
                        class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold font-bricolage text-red-600">
                        News</h1>
                </div>
                <div class="flex justify-end items-center">
                    <div class="flex items-center justify-center">
                        <p
                            class="text-black text-[12] leading-[14.4px] md:text-[18px] md:leading-[21.6px] font-bricolage pr-[8px]">
                            See All</p>
                        <img class="w-[14px] h-[9.44px] md:w-[27.7px] md:h-[16.51px]" src="/svg/panah-kanan.svg"
                            alt="Arrow Icon" />
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
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5">
                <div v-for="card in cards" :key="card.title" class="flex flex-col">
                    <img :src="card.image" alt="image" class="w-full h-auto md:w-[285px] md:h-[291px]" />

                    <div class="hidden md:block mt-3">
                        <div class="flex justify-between">
                            <div class="border-l-4 border-black">
                                <p class="ml-2 text-[14px] md:text-[16px] font-bold text-[#002E40]">{{ card.author }}
                                </p>
                            </div>
                            <p class="text-[12px] text-[#002E40]">{{ card.date }}</p>
                        </div>
                        <p class="text-[12px] md:text-[20px] font-semibold text-[#1D1717] mt-3">
                            {{ card.title }}
                        </p>
                    </div>
                    <div class=" md:hidden h-full flex flex-col justify-around ">
                        <p class="text-[12px] font-semibold text-[#1D1717] my-3">
                            {{ card.title }}
                        </p>
                        <div class="flex justify-between items-center mt-auto">
                            <div class="border-l-4 border-black">
                                <p class="ml-2 text-[14px] font-bold text-[#002E40]">
                                    {{ card.author }}
                                </p>
                            </div>
                            <p class="text-[12px] text-[#002E40]">{{ card.date }}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<style scoped></style>
