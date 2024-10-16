<script>
import Navbar from './components/Navbar.vue';
import Footer from  './components/Footer.vue';


export default{
    components :{
        Navbar : Navbar,
        FooterSectio : Footer
    },
data(){
  return {
      menus: [
              {
                link : '#',
                name : 'Natural Disaste',
                  subMenu: [
                      {
                          title: 'sport',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'Business',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'politics',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'politics',
                          subItem: [
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'bussines',
                          subItem: [
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                  ]
              },
              {
                link : '#',
                name : 'Politic',
                subMenu: [
                      {
                          title: 'sport',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'politics',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'Education',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                  ]
              },
              {
                link : '#',
                name : 'Business',
                subMenu: [
                      {
                          title: 'sport',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'politics',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'bussines',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                  ]
              },
              {
                link : '#',
                name : 'Sport',
                subMenu: [
                      {
                          title: 'sport',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'politics',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'bussines',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                  ]
              },
              {
                link : '#',
                name : 'Education',
                subMenu: [
                      {
                          title: 'sport',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'politics',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'bussines',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                  ]
              },
              {
                link : '#',
                name : 'Accident',
                subMenu: [
                      {
                          title: 'sport',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'politics',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                      {
                          title: 'bussines',
                          subItem: [
                              {
                                  image : '/image1.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image2.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image3.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                              {
                                  image : '/image4.png',
                                  desc : 'Riot breaks out after Persib Bandung vs Persija Jakarta match, supporters enter the field',
                                  category : 'sport',
                                  date : 'sep.24.2024'
                              },
                          ]
                      },
                  ]
              },
          ]
  }
},
    }
</script>

<template>
    <header id="site-header">
        <Navbar :p_menus="menus"/>    
    </header>
    <main>

    </main>
    <footer>
        <FooterSectio/> 
    </footer>
</template>

<style scoped="scoped"></style>