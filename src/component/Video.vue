<script>
import { ref } from 'vue';

export default {
  setup() {
    const hero8 = ref({
      judulhero8_video: 'Video',
    });

    const hero8video = ref({
      video_hero8: { url: '/path/to/video.mp4' },
      judul_video8: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
      deskripsi_video_8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
      text_kanan_video8: 'Sport',
      text_kiri_video8: 'Sep.24.2024',
    });

    const hero8VideoData = ref([
      {
        video_berita_hero8: { url: '/path/to/other_video.mp4' },
        judul_berita_hero8_video: 'M 4.8 Earthquake in Bali September 21, 2024: Analysis of up to 26 Damaged Buildings',
        title_berita_tengah_hero8: 'An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.An earthquake occurred in the Gianyar region of Bali September 21, 2024.',
        title_berita_bawah_kanan_hero8: 'Sport',
        title_berita_bawah_kiri_hero8: 'Sep.24.2024',
      },
    ]);

    const showMore = ref(false);

    const toggleText = () => {
      showMore.value = !showMore.value;
    };

    return {
      hero8,
      hero8video,
      hero8VideoData,
      showMore,
      toggleText,
    };
  },
};
</script>

<template>
    <section class="container lg:max-w-[1200px] mx-auto pt-[74px]">
        <div class="grid grid-cols-2 md:grid-cols-2">
            <div class="flex gap-1 flex-wrap">
                <p class="text-[32px] md:text-[40px] font-semibold text-black">
                    {{ hero8.judulhero8_video || '.' }}
                </p>
                <p class="text-[32px] md:text-[40px] font-semibold text-red-600">News
                </p>
            </div>
            <div class="flex justify-end items-center py-[6px]">
                <div class="w-[150px] h-[49px] flex items-center justify-center">
                    <p class="text-black text-[16px] pr-[8px]">See All</p>
                    <img src="/svg/panah-kanan.svg" alt="Arrow Icon" />
                </div>
            </div>
        </div>

        <div class="flex gap-[12px] flex-wrap">
            <div class="border-[4px] w-[180px] sm:w-[244px] border-black mt-4"></div>
            <div class="border-[4px] w-[24px] sm:w-[32px] border-black mt-4"></div>
            <div class="border-[4px] w-[24px] sm:w-[32px] border-black mt-4"></div>
        </div>
  
        <div class="flex ">
          <div class="gap-[20px] mt-[37px] justify-center items-start">
            <div v-for="(item, index) in hero8VideoData" :key="index" class="flex gap-[20px]">
              <div class="flex video-wrapper" style="position: relative; width: 238px;">
                <video
                  controls
                  width="238px"
                  style="display: block; cursor: pointer;"
                  :src="item.video_berita_hero8.url"
                >
                  Browser Anda tidak mendukung elemen video.
                </video>
                <div class="overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 50px; color: white; display: flex; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.5); border-radius: 50%; width: 20px; height: 20px; transition: opacity 0.3s;">
                  :arrow_forward:
                </div>
              </div>
  
              <div class="w-[342px]">
                <h1 class="leading-[24px] text-[20px] font-bold text-[#050810] my-[12px]">
                  {{ item.judul_berita_hero8_video }}
                </h1>
                <p class="leading-[22px] text-[#8B919E] font-bricolage">
                  {{ item.title_berita_tengah_hero8.substring(0, 100) }}...
                  <span v-if="showMore">{{ item.title_berita_tengah_hero8.substring(100) }}</span>
                  <a href="javascript:void(0);" @click="toggleText">{{ showMore ? 'Read Less' : 'Read More' }}</a>
                </p>
                <div class="flex justify-between">
                  <p>{{ item.title_berita_bawah_kanan_hero8 }}</p>
                  <p>{{ item.title_berita_bawah_kiri_hero8 }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="w-[100%]">
            <div class="flex video-wrapper" style="position: relative; width: 100%; height: 495px;">
              <video controls width="100%" preload="auto" style="display: block; cursor: pointer;" :src="hero8video.video_hero8.url">
                Browser Anda tidak mendukung elemen video.
              </video>
              <div class="overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 50px; color: white; display: flex; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.5); border-radius: 50%; width: 73px; height: 73px; transition: opacity 0.3s;">
                :arrow_forward:
              </div>
            </div>
            <div class="w-100%">
              <h1 class="leading-[24px] text-[20px] font-bold text-[#050810] my-[12px]">
                {{ hero8video.judul_video8 }}
              </h1>
              <p class="leading-[22px] text-[#8B919E] font-bricolage">
                {{ hero8video.deskripsi_video_8.substring(0, 100) }}...
                <span v-if="showMore">{{ hero8video.deskripsi_video_8.substring(100) }}</span>
                <a href="javascript:void(0);" @click="toggleText">{{ showMore ? 'Read Less' : 'Read More' }}</a>
              </p>
              <div class="flex justify-between">
                <p>{{ hero8video.text_kanan_video8 }}</p>
                <p>{{ hero8video.text_kiri_video8 }}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  </template>