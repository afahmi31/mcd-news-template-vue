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
  <section class="container lg:max-w-[1200px] mx-auto pt-[74px]">
    <!-- Header -->
    <div class="grid grid-cols-2 md:grid-cols-2">
      <div class="flex gap-1 flex-wrap">
        <p class="text-[32px] md:text-[40px] font-semibold text-black">Lastest</p>
        <p class="text-[32px] md:text-[40px] font-semibold text-red-600">News</p>
      </div>
      <div class="flex justify-end items-center py-[6px]">
        <div class="border-2 border-black w-[150px] h-[49px] flex items-center justify-center bg-black">
          <p class="text-white text-[16px] pr-[8px]">See All</p>
          <img src="" alt="Arrow Icon" />
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="flex gap-[12px] flex-wrap">
      <div class="border border-[4px] w-[180px] sm:w-[244px] border-black mt-4"></div>
      <div class="border border-[4px] w-[24px] sm:w-[32px] border-black mt-4"></div>
      <div class="border border-[4px] w-[24px] sm:w-[32px] border-black mt-4"></div>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      <div v-for="card in cards" :key="card.title" class="w-[285px]">
        <img :src="card.image" alt="image" class="w-full h-auto object-cover" />
        <div class="category flex justify-between py-2">
          <p class="ml-[10px] font-bold text-[#002E40]">{{ card.author }}</p>
          <p class="text-[12px] text-[#002E40] leading-[24px]">{{ card.date }}</p>
        </div>
        <p class="text-[20px] font-semibold leading-[130%] text-[#1D1717]">{{ card.title }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
