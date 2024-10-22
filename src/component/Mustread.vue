<script>
import { ref } from 'vue';

export default {
    setup() {
        const mustread = ref({
            judul_must: 'Must',
            judul_read: 'Read',
            image_tengah: { url: '/images/tengah.png' },
            image_tengah_sm: { url: '/images/tengah1.png' },
            judul_text_tengah: 'Jokowi warns to be careful exporting sea sand, only sediment is allowed',
            judul_text_tengah_kecil: 'Populer',
            text_tengah: 'Sep.24.2024',
            image_kiri: { url: '/images/kiri.png' },
            judul_text_kiri: 'Meeting of DPD Leadership Election Heats up, Sultan Argues with La Nyalla',
            desciption_text_kiri: 'An earthquake occurred in the Gianyar region of Bali An earthquake occurred in the Gianyar region of Bali in the Gianyar region of Bali in the Gianyar region of Bali in the Gianyar region of September 21, 21, 2024.',
            text_judul_kecil_kiri: 'Football',
            text_kiri: 'Sep.24.2024',
            image_kanan1: { url: '/images/kanan1.png' },
            judul_kecil_kanan1: 'Football',
            text_kanan1: 'Sep.24.2024',
            description_text_kanan1: 'This is the list of 10 names that passed the KPK candidates, Johan Budi failed',
            image_kanan2: { url: '/images/kanan2.png' },
            judul_kecil_kanan2: 'Football',
            text_kanan2: 'Sep.24.2024',
            description_text_kanan2: 'Puan Maharani becomes Speaker of the House again'
        });

        const resourcesSvg = ref('/svg/panah-kanan.svg');

        const readMoreText = ref(false);

        const toggleReadMore = () => {
            readMoreText.value = !readMoreText.value;
        };

        return {
            mustread,
            resourcesSvg,
            readMoreText,
            toggleReadMore
        };
    }
};
</script>

<template>
    <section class="pt-[30px] md:pt-[40px]">
        <div class="container lg:max-w-[1200px] mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-2 px-[24px] md:px-0">
                <div class="flex gap-1 flex-wrap">
                    <h1
                        class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold font-bricolage text-black">
                        {{ mustread.judul_must || '.' }}
                    </h1>
                    <h1
                        class="text-[18px] leading-[21.6px] md:text-[40px] md:leading-[48px] font-semibold font-bricolage text-red-600">
                        {{ mustread.judul_read || '.' }}
                    </h1>
                </div>
                <div class="flex justify-end items-center">
                    <div class=" flex items-center justify-center">
                        <p class="text-black text-[12] leading-[14.4px] md:text-[18px] md:leading-[21.6px] font-bricolage pr-[8px]">See All</p>
                        <img class="w-[14px] h-[9.44px] md:w-[27.7px] md:h-[16.51px]" src="/svg/panah-kanan.svg" alt="Arrow Icon" />
                    </div>
                    </div>
                </div>

                <div class="flex gap-[12px] flex-wrap px-[24px] md:px-0">
                    <div class="border-[2px] w-[81px] md:w-[244px] border-black mt-2"></div>
                    <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
                    <div class="border-[2px] w-[26px] md:w-[32px] border-black mt-2"></div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-12 gap-[20px] mt-[20px]">
                    <!-- bagian kiri -->
                    <div class=" order-2  col-span-6 md:col-span-3 items-center pl-[24px] md:px-0 ">
                        <div class="w-full h-auto">
                            <img :src="mustread.image_kiri.url" alt="image" class="w-full h-auto" />
                            
                            <h2
                                class="text-[16px] leading-[20.8px] md:text-[20px] md:leading-[26px] font-semibold font-bricolage mt-3">
                                {{ mustread.judul_text_kiri || '.' }}
                            </h2>
                            <div class="border-t-2 border-gray-500 my-2"></div>
                            <p id="readMoreText"
                                class="text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] font-inter overflow-hidden transition-all duration-300 ease-in-out"
                                :class="readMoreText ? 'max-h-full' : 'max-h-[4.5rem]'">
                                {{ mustread.desciption_text_kiri || '.' }}
                            </p>

                            <button id="readMoreBtn"
                                class=" text-blue-500 font-semibold hover:underline focus:outline-none"
                                @click="toggleReadMore">
                                {{ readMoreText ? 'Read Less' : 'Read More' }}
                            </button>
                            <div class="flex justify-between mt-[14px]">
                                <div class="border-l-4 border-black">
                                    <p
                                        class="ml-[10px] text-[14px] leading-[14px] md:text-[16px] md:leading-[16px] font-bold font-bricolage text-[#002E40]">
                                        {{ mustread.text_judul_kecil_kiri || '.' }}
                                    </p>
                                </div>
                                <p class="text-[12px] leading-[12px] text-[#002E40] font-bricolage">
                                    {{ mustread.text_kiri || '.' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- bagian tengah -->
                    <div class=" order-1 md:order-2 col-span-12 md:col-span-6 relative">
                        <img :src="mustread.image_tengah.url" alt="image" class="w-full h-full object-cover" />
                        <div class="absolute p-4 bottom-0">
                            <h2
                                class="md:text-[32px] md:leading-[113%] sm:text-lg font-bold text-white font-bricolage ">
                                {{ mustread.judul_text_tengah || '.' }}
                            </h2>
                            <div class="flex items-start justify-between mt-[14px]">
                                <div class="border-l-4 border-yellow-500 pl-2">
                                    <p class="font-medium text-white text-sm sm:text-base font-bricolage">
                                        {{ mustread.judul_text_tengah_kecil || '.' }}
                                    </p>
                                </div>
                                <p class="text-sm sm:text-base text-white font-bricolage leading-6 ml-4">
                                    {{ mustread.text_tengah || '.' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- bagian kanan -->
                    <div class=" order-2  col-span-6 md:col-span-3 space-y-4 pr-[24px] md:px-0">
                        <div class="w-[153px] h-[213px] md:w-full md:h-auto">
                            <img :src="mustread.image_kanan1.url" alt="image"
                                class="w-[153px] h-[95px] md:w-full md:h-full object-cover" />
                            <div class="flex  justify-between mt-[14px]">
                                <div class="border-l-4 border-black">
                                    <p
                                        class="ml-[10px] text-[14px] leading-[14px] md:text-[16px] md:leading-[16px] font-bold font-bricolage text-[#002E40]">
                                        {{ mustread.judul_kecil_kanan1 }}
                                    </p>
                                </div>
                                <p class=" text-[12px] leading-[12px] text-[#002E40] font-bricolage">
                                    {{ mustread.text_kanan1 }}
                                </p>
                            </div>
                            <h2
                                class="text-[14px] leading-[18.2px] md:text-[20px] md:leading-[26px] font-semibold text-[#1D1717] font-bricolage mt-[12px]">
                                {{ mustread.description_text_kanan1 }}
                            </h2>
                        </div>
                        <div class="border-t-2 border-gray-500 my-2"></div>
                        <div class="w-[153px] h-[213px] md:w-full md:h-auto">
                            <img :src="mustread.image_kanan2.url" alt="image"
                                class="w-[153px] h-[95px] md:w-full md:h-full object-cover" />
                            <div class="flex justify-between mt-[14px]">
                                <div class="border-l-4 border-black">
                                    <p
                                        class="ml-[10px] text-[14px] leading-[14px] md:text-[16px] md:leading-[16px] font-bold font-bricolage text-[#002E40]">
                                        {{ mustread.judul_kecil_kanan2 }}
                                    </p>
                                </div>
                                <p class=" text-[12px] leading-[12px] text-[#002E40] font-bricolage">
                                    {{ mustread.text_kanan2 }}
                                </p>
                            </div>
                            <h2
                                class="text-[14px] leading-[18.2px] md:text-[20px] md:leading-[26px] font-semibold text-[#1D1717] font-bricolage mt-[12px]">
                                {{ mustread.description_text_kanan2 }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>