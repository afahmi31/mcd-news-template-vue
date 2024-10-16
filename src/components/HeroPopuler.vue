<script>
    export default {
        data() {
            return {
                Cards: [
                    { 
                        img: '/images/komeng.png',
                        kategori: 'Politics',
                        date: 'Sep.24.2024',
                        title: 'Komeng s Expression Shouted Uhuy Inside the House of Representatives Building'
                    },
                    { 
                        img: '/images/timnas.png',
                        kategori: 'Sport',
                        date: 'Sep.24.2024',
                        title: 'Indonesia vs Yemen U-20: Garuda faces toughest test yet'
                    },
                    { 
                        img: '/images/mansur.png',
                        kategori: 'Politics',
                        date: 'Sep.24.2024',
                        title: 'Surya Paloh confirms Saan Mustopa as House Leader: We Congratulate'
                    },
                    { 
                        img: '/images/bowo.png',
                        kategori: 'Business',
                        date: 'Sep.24.2024',
                        title: 'Rp90 trillion Bekasi-Tangerang sea wall project awaits Prabowo s blessing'
                    },
                ]
            }
        }
    }
</script>

<template>
    <section class="container mx-auto">
        <main>
            <div class=" flex justify-between mt-[40px] ">
                    <h1 class="text-[18px] lg:text-[40px]">Populer<span class="text-[18px] lg:text-[40px] text-[#ff0000]"> News </span> </h1>
                    <a href="#"  class="border bg-none lg:bg-black flex py-[15px] px-[30px]">
                        <p class=" text-none text-[12px] lg:text-[16px] lg:text-white flex items-center mr-[8px]  ">
                            See All</p>
                        <img src="" alt="ICON">
                    </a>
            </div>
            <div class="flex gap-[20px] mb-[20px] w-[189px]   ">
            <div class="border-2 lg:border-4 border-black w-[244px]"></div>
            <div class="border-2 lg:border-4 border-black w-[32px]"></div>
            <div class="border-2 lg:border-4 border-black w-[32px]"></div>
            </div>
            <div class=" grid grid-cols-2 lg:grid-flow-col justify-items-center gap-[20px] ">
                <div v-for="card in Cards" :key="card.title">
                    <div :class="['card', card.kategori.toLowerCase(), 'w-[154px] lg:w-[220px] xl:w-[280px]']">
                        <img :src="card.img" alt="image">
                        <div class="category flex justify-between">
                            <p class=" text-[14px] lg:text-[16px] ml-[10px] font-bold font-bricolage text-[#002E40]">{{ card.kategori }}</p>
                            <p class="text-[12px] text-[#002E40] font-bricolage leading-[24px]">{{ card.date }}</p>
                        </div> 
                        <p class="text-[12px] lg:text-[20px] font-semibold leading-[130%] text-[#1D1717] font-bricolage">{{ card.title }}</p> 
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<style scoped>
.sport .category{
    border-left:4px solid red ;
}
.politics .category{
    border-left:4px solid blue ;
}
.business .category{
    border-left:4px solid gray ;
}
</style>
