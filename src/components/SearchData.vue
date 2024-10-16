<script>
export default {
    data() {
        return {
            Elements: [
                { 
                    img: '/images/komeng.png',
                    kategori: 'Politics',
                    date: 'Sep.24.2024',
                    title: 'Ada mama di balik medali emas Richie Duta Ricardo ',
                    dest: 'Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI...',
                    showFullText: false // Tambahkan properti ini
                },
                { 
                    img: '/images/timnas.png',
                    kategori: 'Sport',
                    date: 'Sep.24.2024',
                    title: 'Ada mama di balik medali emas Richie Duta Ricardo ',
                    dest: 'Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXIPebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI...',
                    showFullText: false
                },
                { 
                    img: '/images/mansur.png',
                    kategori: 'Politics',
                    date: 'Sep.24.2024',
                    title: 'Ada mama di balik medali emas Richie Duta Ricardo ',
                    dest: 'Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXIPebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI...',
                    showFullText: false
                },
                { 
                    img: '/images/bowo.png',
                    kategori: 'Business',
                    date: 'Sep.24.2024',
                    title: 'Ada mama di balik medali emas Richie Duta Ricardo ',
                    dest: 'Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI Pebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXIPebulu tangkis Jawa Tengah Richie Duta Ricardo mengembalikan kok saat bertanding melawan pebulu tangkis Jakarta Rizki Dwi Cahyo pada final bulu tangkis beregu putra PON XXI...',
                    showFullText: false
                },
            ]
        }
    },
    methods: {
        toggleText(Element) {
            Element.showFullText = !Element.showFullText;
        }
    }
}
</script>

<template>
    <main class="container mx-auto cursor-all-scroll">
        <div>
            <h1 class="text-[28px] text-black font-bold font font-darkerGrotesque mb-[64px] ml-[20px]">Search results: “badminton” found in 6097 documents</h1>
        </div>
        <div class="justify-items-center ">
            <div v-for="Element in Elements" :key="Element.title">
                <div :class="['Element', Element.kategori.toLowerCase(), 'flex gap-[34px]']">
                    <div class="w-[300px] ">
                        <img :src="Element.img" alt="image">
                    </div>
                    <div class="w-[777px]">
                        <div class="flex justify-between">
                            <div class="category">
                                <p class=" ml-4 text-[14px] lg:text-[16px] font-bold font-bricolage text-[#002E40] ">{{ Element.kategori }}</p>
                            </div>
                            <p class="text-[12px] text-[#002E40] font-bricolage leading-[24px]">{{ Element.date }}</p>
                        </div>
                        <p class="text-[12px] lg:text-[20px] mt-[40px] mb-[21px] font-semibold leading-[130%] text-[#1D1717] font-bricolage">{{ Element.title }}</p> 
                        
                        <!-- Konten Dest -->
                        <p class="text-[12px] lg:text-[18px] mt-[23px] text-[#8B919E] leading-[27px]  font-bricolage">
                            <!-- Tampilkan teks penuh atau potong sesuai state -->
                            {{ Element.showFullText ? Element.dest : (Element.dest.slice(0, 150) + '...') }}
                        </p>
                        
                        <!-- Tombol Read More -->
                        <button class="text-[#002E40] text-[12px] lg:text-[16px] font-bold underline mt-2" @click="toggleText(Element)">
                            {{ Element.showFullText ? 'Read Less' : 'Read More' }}
                        </button>
                    </div>
                </div>
                <div class="border-b my-[14px]"></div>
            </div>
        </div>
        
    </main>
</template>

<style scoped>
.sport .category {
    border-left: 4px solid red ;
}
.politics .category {
    border-left: 4px solid blue;
}
.business .category {
    border-left: 4px solid gray;
}
</style>
