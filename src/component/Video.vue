<script>
import { ref } from 'vue';

export default {
  setup() {
    const hero8video = ref({
      judul_video8: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
      deskripsi_video_8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024',
      text_kanan_video8: 'Sport',
      text_kiri_video8: 'Sep.24.2024',
    });

    const hero8VideoData = ref([
      {
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
        title_berita_bawah_kanan_hero8: 'Sport',
        title_berita_bawah_kiri_hero8: 'Sep.24.2024',
      },
      {
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
        title_berita_bawah_kanan_hero8: 'Sport',
        title_berita_bawah_kiri_hero8: 'Sep.24.2024',
      },
      {
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
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
  <section class="py-[30px] md:py-[40px]">
    <div class="container lg:max-w-[1200px] mx-auto">
      <!-- Header -->
      <div class="grid grid-cols-2 md:grid-cols-2 px-[24px] md:px-0">
        <div class="flex gap-1 flex-wrap">
          <p
            class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold font-bricolage text-black">
            Video</p>
          <p
            class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold font-bricolage text-red-600">
            News</p>
        </div>
        <div class="flex justify-end items-center">
          <div class="flex items-center justify-center">
            <p class="text-black text-[12] leading-[14.4px] md:text-[18px] md:leading-[21.6px] font-bricolage pr-[8px]">
              See All</p>
            <img class="w-[14px] h-[9.44px] md:w-[27.7px] md:h-[16.51px]" src="/svg/panah-kanan.svg" alt="Arrow Icon" />
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="flex gap-[12px] flex-wrap px-[24px] md:px-0">
        <div class="border-[2px] w-[81px] md:w-[244px] border-black mt-2"></div>
        <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
        <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
      </div>

      <!-- Video Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[24px] md:pt-[20px]">
        <!-- Multiple Videos (Desktop View) -->
        <div class="space-mb-6 order-2 md:order-1 px-[24px] md:px-0">
          <div v-for="(item, index) in hero8VideoData" :key="index"
            class="Element flex gap-4 items-center justify-center"
            :class="{ 'no-border': index === hero8VideoData.length - 1 }">
            <div class="relative w-[50%] md:w-[200px]">
              <iframe class="w-full h-auto" src="https://www.youtube.com/embed/BM_G2T8dNzU?si=ZEwLGGoksZbyJTcT"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="w-[50%] md:w-[342px] md:h-[160px]">
              <h2
                class="pt-[22.5px] text-[14px] leading-[20px] md:text-[20px] md:leading-[24px] font-bold text-black font-bricolage">
                {{ item.judul_berita_hero8_video }}</h2>
              <!-- <div class="hidden md:block">
                <p id="readMoreText"
                  class="mt-[12px] text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] font-bricolage overflow-hidden transition-all duration-300 ease-in-out"
                  :class="readMoreText ? 'max-h-full' : 'max-h-[1.5rem]'">{{ item.title_berita_tengah_hero8 }}</p>
                <button id="readMoreBtn"
                  class="text-blue-500 font-bricolage font-semibold hover:underline focus:outline-none"
                  @click="toggleReadMore">{{ readMoreText ? 'Read Less' : 'Read More' }}</button>
              </div> -->
              <div class="flex items-start justify-between pt-[36px]">
                <div class="border-l-4 border-yellow-500 pl-2">
                  <p class="font-medium text-black text-[16px] leading-[16px] font-bricolage">{{
                    hero8video.text_kanan_video8 }}</p>
                </div>
                <p class=" text-[16px] leading-[16px] text-black font-bricolage ml-4">{{
                  hero8video.text_kiri_video8 }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Video (Desktop View) -->
        <div class="relative order-1">
          <iframe class="w-full h-auto aspect-video object-cover"
            src="https://www.youtube.com/embed/BM_G2T8dNzU?si=ZEwLGGoksZbyJTcT" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
          <div class="mt-[34px] px-[24px] md:px-[8px]">
            <h2 class=" text-[20px] leading-[24px] font-bricolage font-bold text-black">{{ hero8video.judul_video8 }}
            </h2>
            <!-- <p id="readMoreText"
              class="mt-[12px] text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] font-bricolage overflow-hidden transition-all duration-300 ease-in-out"
              :class="readMoreText ? 'max-h-full' : 'max-h-[1.5rem]'">{{ hero8video.deskripsi_video_8 }}</p>
            <button id="readMoreBtn"
              class="text-blue-500 font-bricolage font-semibold hover:underline focus:outline-none"
              @click="toggleReadMore">{{ readMoreText ? 'Read Less' : 'Read More' }}</button> -->
            <div class="">
              <div class="flex items-start justify-between pt-[36px]">
                <div class="border-l-4 border-yellow-500 pl-2">
                  <p class="font-medium text-black text-[16px] leading-[16px] font-bricolage">{{
                    hero8video.text_kanan_video8 }}</p>
                </div>
                <p class=" text-[16px] leading-[16px] text-black font-bricolage ml-4">{{
                  hero8video.text_kiri_video8 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.Element {
  border-bottom: 2px solid #0000004D;
  padding-bottom: 10px;
  /* Tambahkan jarak bawah */
  padding-top: 10px;
  /* Tambahkan jarak atas */
}

/* Gaya untuk item terakhir (tanpa border) */
.Element.no-border {
  border-bottom: none;
}

</style>
