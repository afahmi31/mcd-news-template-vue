<script>
import Hero from './components/HeroCategory.vue'
import Content from './components/ContentCategory.vue'
export default {
 components:{
  Hero : Hero,
  Content : Content
 },
 data(){
    return{
      content : [
        {
          content1 : [
            {
              title : 'Indonesian junior badminton team hunts for achievements at the World Championship',
              image : '/image-category1.png',
              link: '#',
              category : 'Badminton',
              desc : 'Indonesia young badminton team claims to be ready to hunt for achievements at the 2024 Junior World Championship in Nanchang, China, which will be held starting next week'
            },
            {
              title : 'Shin Tae-Yong calls up 27 names to face Bahrain and China',
              image : '/image-category2.png',
              link: '#',
              category : 'Football',
              desc : 'Indonesia young badminton team claims to be ready to hunt for achievements at the 2024 Junior World Championship in Nanchang, China, which will be held starting next week'
            },
            {
              title : 'Megawati Hangestri Pertiwi Golden Moment: Winning Proliga and PON 2024, Now Chasing Title in South Korea',
              image : '/image-category3.png',
              link: '#',
              category : 'Volly Ball',
              desc : 'Indonesia young badminton team claims to be ready to hunt for achievements at the 2024 Junior World Championship in Nanchang, China, which will be held starting next week'
            },
            {
              title : 'Final results of PON XXI esports: Jakarta overall champion',
              image : '/image-category4.png',
              link: '#',
              category : 'G-Esport',
              desc : 'Indonesia young badminton team claims to be ready to hunt for achievements at the 2024 Junior World Championship in Nanchang, China, which will be held starting next week'
            },
          ],
          popular : [
          {
            image : '/imagePopular1.jpeg',
            title : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
            category : 'Football'
          },
          {
            image : '/imagePopular2.jpeg',
            title : 'Four Indonesian representatives will fight in the quarterfinals of the Macau Open',
            category : 'Badminton'
          },
          {
            image : '/imagePopular3.jpeg',
            title : 'Full Schedule of the Round of 16 of the 2024 National Police Chief Volleyball Cup, September 25-29, 2024',
            category : 'Volly Ball'
          },
          {
            image : '/imagePopular4.jpeg',
            title : 'Three Indonesian teams qualify for the FFWS SEA 2024 Fall Grand Finals',
            category : 'G-Esport'
          },
        ]
        }
      ],
    }
 }
}
</script>

<template>
    <div id="site">
        <header id="site-header">
            <div class="navigation-wrapper">
                <div>Header Area</div>
            </div>
        </header>
        <main id="site-main">
          <Hero/>
          <Content :content="content" />
        </main>
        <footer id="site-footer">
            <div class="footer-wrapper">
                <div>Footer Area</div>
            </div>
        </footer>
    </div>
</template>
<style scoped="scoped"></style>