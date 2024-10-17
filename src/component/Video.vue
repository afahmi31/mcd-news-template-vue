<script>
import { ref } from 'vue';

export default {
  setup() {
    const hero8video = ref({
      video_hero8: { url: '/video/Believer.mp4', thumbnail: '/img/Believer-thumb.jpg' },
      judul_video8: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
      deskripsi_video_8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024',
      text_kanan_video8: 'Sport',
      text_kiri_video8: 'Sep.24.2024',
    });

    const hero8VideoData = ref([
      {
        video_berita_hero8: { url: '/video/Thunder.mp4', thumbnail: '/img/thumb1.jpg' },
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
        title_berita_bawah_kanan_hero8: 'Sport',
        title_berita_bawah_kiri_hero8: 'Sep.24.2024',
      },
      {
        video_berita_hero8: { url: '/video/video2.mp4', thumbnail: '/img/thumb2.jpg' },
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
        title_berita_bawah_kanan_hero8: 'Sport',
        title_berita_bawah_kiri_hero8: 'Sep.24.2024',
      },
      {
        video_berita_hero8: { url: '/video/video3.mp4', thumbnail: '/img/thumb3.jpg' },
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
        title_berita_bawah_kanan_hero8: 'Sport',
        title_berita_bawah_kiri_hero8: 'Sep.24.2024',
      },
    ]);

    const readMoreText = ref(false);

    const toggleReadMore = () => {
      readMoreText.value = !readMoreText.value;
    };

    return {
      hero8video,
      hero8VideoData,
      readMoreText,
      toggleReadMore
    };
  },
};
</script>

<template>
  <section class="container lg:max-w-[1200px] mx-auto pt-[74px]">
    <div class="grid grid-cols-2 md:grid-cols-2 px-[24px] md:px-0">
            <div class="flex gap-1 flex-wrap">
                <p class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold text-black">video</p>
                <p class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold text-red-600">News</p>
            </div>
            <div class="flex justify-end items-center py-[6px]">
                <div class="flex items-center justify-center">
                    <p class="text-black text-[16px] pr-[8px]">See All</p>
                    <img src="/svg/panah-kanan.svg" alt="Arrow Icon" />
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="flex gap-[12px] flex-wrap px-[24px] md:px-0">
            <div class="border-[2px] w-[81px] md:w-[244px] border-black mt-2"></div>
            <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
            <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
        </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Main Video (Mobile View) -->
      <div class="relative block md:hidden">
        <video :src="hero8video.video_hero8.url" controls class="w-[375px] h-[272px]"></video>
        <div class="flex flex-col justify-center w-full mx-auto mt-2 px-[24px] md:px-0">
          <div class="flex justify-between items-start">
            <div class="border-l-4 border-yellow-500 pl-2">
              <span class="text-sm text-gray-500">
                {{ hero8video.text_kanan_video8 || '.' }}
              </span>
            </div>
            <span class="text-sm text-gray-500">
              {{ hero8video.text_kiri_video8 || '.' }}
            </span>
          </div>
          <h2 class="text-[20px] leading-[24px] font-bold text-black mt-[10px]">{{ hero8video.judul_video8 }}</h2>
          <p id="readMoreText"
            class="text-[16px] leading-[22px] font-inter overflow-hidden transition-all duration-300 ease-in-out mt-2"
            :class="readMoreText ? 'max-h-full' : 'max-h-[1.5rem]'">{{ hero8video.deskripsi_video_8 }}</p>
          <button id="readMoreBtn" class="text-blue-500 font-semibold hover:underline focus:outline-none text-left"
            @click="toggleReadMore">
            {{ readMoreText ? 'Read Less' : 'Read More' }}
          </button>
        </div>
      </div>

      <!-- List of Smaller Videos (Mobile View) -->
      <div class="space-y-6 block md:hidden w-full mx-auto px-[24px] md:px-0">
        <div v-for="(item, index) in hero8VideoData" :key="index" class="flex gap-4">
          <div class="relative">
            <video :src="item.video_berita_hero8.url" controls class="w-[154px] h-[130px]"></video>
          </div>
          <div class="flex flex-col justify-center w-[153px] h-[130px] ">
            <div class="flex items-start justify-between">
              <div class="border-l-4 border-yellow-500 pl-2">
                <span class="text-sm text-gray-500">{{ item.title_berita_bawah_kanan_hero8 }}</span>
              </div>
              <span class="text-sm text-gray-500">{{ item.title_berita_bawah_kiri_hero8 }}</span>
            </div>
            <h2 class="text-[14px] leading-[20px] font-bold text-black mt-[10px]">{{ item.judul_berita_hero8_video }}</h2>
          </div>
        </div>
      </div>

      <!-- Multiple Videos (Desktop View) -->
      <div class="space-y-6 hidden md:block">
        <div v-for="(item, index) in hero8VideoData" :key="index" class="flex gap-4 items-center justify-center">
          <div class="relative w-[180px] md:w-[200px]">
            <video :src="item.video_berita_hero8.url" controls class="md:w-[238px] md:h-[228px] mb-0"></video>
          </div>
          <div class="md:w-[342px] md:h-[160px] ">
            <h2 class="md:text-[20px] md:leading-[24px] font-bold text-black">{{ item.judul_berita_hero8_video }}</h2>
            <p id="readMoreText"
              class="text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] font-inter overflow-hidden transition-all duration-300 ease-in-out"
              :class="readMoreText ? 'max-h-full' : 'max-h-[1.5rem]'">{{ item.title_berita_tengah_hero8 }}</p>
            <button id="readMoreBtn" class="text-blue-500 font-semibold hover:underline focus:outline-none"
              @click="toggleReadMore">
              {{ readMoreText ? 'Read Less' : 'Read More' }}
            </button>
            <div class="flex justify-between text-sm text-gray-500">
              <span>{{ item.title_berita_bawah_kanan_hero8 }}</span>
              <span>{{ item.title_berita_bawah_kiri_hero8 }}</span>
            </div>
            <div class="border-t-2 border-gray-500 my-2"></div>
          </div>
        </div>
      </div>

      <!-- Main Video (Desktop View) -->
      <div class="relative hidden md:block">
        <video :src="hero8video.video_hero8.url" controls class="w-full h-auto"></video>
        <div class="mt-4">
          <h2 class="text-[20px] leading-[24px] font-bold text-black">{{ hero8video.judul_video8 }}</h2>
          <p id="readMoreText"
            class="text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] font-inter overflow-hidden transition-all duration-300 ease-in-out"
            :class="readMoreText ? 'max-h-full' : 'max-h-[1.5rem]'">{{ hero8video.deskripsi_video_8 }}</p>
          <button id="readMoreBtn" class="text-blue-500 font-semibold hover:underline focus:outline-none"
            @click="toggleReadMore">
            {{ readMoreText ? 'Read Less' : 'Read More' }}
          </button>
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ hero8video.text_kanan_video8 }}</span>
            <span>{{ hero8video.text_kiri_video8 }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom styles jika diperlukan */
</style>
