<template lang="html" >
    <div class="bg-white">

        <div class="nav z-50">
            <nav class="relative px-4 py-4 flex justify-between items-center " style="background-color: #28245C;"> <img :src="require('./assets/Logo Qualify Di scroll pertama.png')" class="w-40" />
                <a class="text-3xl font-bold leading-none" href="#">
                    <!-- <img src="assets/Logo.png"
                        class="logo-background h-6 mr-3 sm:h-9 background-image: url('assets/Logo.png');"
                        alt="Kimia Farma Logo" /> -->
                </a>

                <ul
                    class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

                    <li><a class="text-sm  hover:text-blue-500 text-white  rounded md:bg-transparent " href="#appList">App
                            List</a></li>

                    <li><a class="text-sm hover:text-blue-500 text-white" href="#slider">Most Visited</a></li>
                    <li class="text-gray-300">

                    </li>
                    <li><a class="text-sm hover:text-blue-500 text-white" href="#about">About Us</a></li>



                </ul>

        <div>
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button
                @click="show = !show"
                class="flex items-center p-2 text-indigo-100  rounded-md"
              >
                <span class="mr-4">Nanti Yang Login Di Sini</span>
                <svg
                  class="w-5 h-5 text-indigo-100 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                v-show="show"
                class="
          absolute
          right-0
          py-2
          mt-2
          bg-indigo-500
          rounded-md
          shadow-xl
          w-44
        "
              >
                <router-link
                  to="/"
                  class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
                >
                  Dropdown List 1
                </router-link>
                <router-link
                  to="/"
                  class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
                >
                  Dropdown List 2
                </router-link>
                <router-link
                  to="/"
                  class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
                >
                  Dropdown List 3
                </router-link>
              </div>
            </div>
          </div>




                
            </nav>
            <div class="navbar-menu relative z-50 hidden">
                <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav
                    class="fixed top-0 left-0 bottom-0 flex flex-col w-56 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto rounded-xl">
                    <div class="flex items-center mb-8">
                        <center>
                            <a class="mr-auto text-3xl font-bold leading-none" href="#">
                                <!-- <img src="assets/Tanpa background untuk slide pertama/Logo Qualify Di scroll pertama.png"
                                    class="logo-background h-10 mr-3 sm:h-9 background-image: url('assets/Logo.png');"
                                    alt="Kimia Farma Logo" /> -->
                            </a>
                        </center>


                    </div>
                    
                    <div>
                        <ul>
                            <li class="mb-1">
                                <a href="#appList"
                                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">App
                                    List</a>
                            </li>
                            <li class="mb-1">
                                <a href="#slider"
                                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Most
                                    Visited</a>
                            </li>
                            <li class="mb-1">
                                <a href="#about"
                                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">About
                                    Us</a>
                            </li>


                        </ul>
                    </div>

                </nav>
            </div>
        </div>
        <div class="img">
            <img :src ="require('./assets/Background Landing Page.png')" class="xl:h-min-auto max-w-full w-screen sm:w-screen -mt-1   md:w-screen  object-cover"
                alt="..." />
            <center>
                <div class="qualify">

                    <img class="sm:h-16 xl:h-20"  :src="require('./assets/Logo Qualify Di scroll pertama.png')" alt="Logo Qualify">

                    <span
                        class="font xl:text-xl sm:text-[13px] sm:justify-center md:text-[19px]  text-white flex items-center justify-center  place-items-center">Qualify
                        is an Integrated Manufacturing Quality Platform
                    </span>
                    <br>
                    <span
                        class="font xl:text-2xl sm:text-[13px] sm:justify-center md:text-[19px] sm:-mt-2  text-white flex items-center justify-center place-items-center">
                        Suatu platform terintegrasi untuk menjalankan aktivitas pengelolaan, pemantauan dan <br> pemastian
                        sistem jaminan
                        mutu di SBU
                        Manufaktur di Kimia Farma, suatu produk dari <br> Tim Manufacturing System & Control di Kimia Farma
                        Plant Banjaran
                    </span>
                    <div class="  flex items-center justify-center  place-items-center">
                        <div class="">
                            <picture class="">
                                <img class="sm:h-16 xl:h-40" :src="require('./assets/EBR pic Tanpa background.png')" />
                            </picture>
                        </div>
                        <div class="">
                            <picture class="">
                                <img class="sm:h-16 xl:h-40" :src="require('./assets/EBR pic Tanpa background.png')" />
                            </picture>
                        </div>
                        <div class="">
                            <picture class=" ">
                                <img class="sm:h-16 xl:h-40" :src="require('./assets/LMS pic Tanpa Background.png')" />
                            </picture>
                        </div>
                        <div class="">
                            <picture class="">
                                <img class="sm:h-16 xl:h-40" :src="require('./assets/LIMS Tanpa Background.png')" />
                            </picture>
                        </div>
                    </div>



                </div>
            </center>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 sm:mt-10 xl:mt-48 items-center justify-center  place-items-center "
            id="appList">
            <div class="p-4 m-8 xl:w-80 bg-white shadow-md rounded-xl border border-gray-400 hover:bg-yellow-500 sm:w-60 ">
                <center>
                    <picture class="rounded-lg block">
                        <img class="sm:h-40" :src="require('./assets/Animasi di Card/Background animasi EBR.png')" />
                    </picture>
                </center>

                <h1 class="font mt-4 mb-2 text-xl font-bold text-center">EBR</h1>
                <p class="font text-sm text-[#28245C] text-center">
                    (Electronic Batch Record)
                </p>
                <center><a href="http://192.168.1.14/"><button
                            class="items-center hover:bg-blue-700 text-white  py-2 px-12 rounded content-center"
                            style="background-color: #28245C; align-items: center;">
                            Login
                        </button></a></center>
            </div>
            <div class="p-4 m-8 xl:w-80 bg-white shadow-md rounded-xl border border-gray-400 hover:bg-yellow-500 sm:w-56">
                <center>
                    <picture class="rounded-lg block">
                        <img class="sm:h-40" :src="require('./assets/Animasi di Card/Background QMS.png')" />
                    </picture>
                </center>

                <h1 class="font mt-4 mb-2 text-xl font-bold text-center">QMS</h1>
                <p class="font text-sm text-[#28245C] text-center">
                    (Quality Management System)
                </p>
                <center><a href="login.html"><button
                            class="font items-center hover:bg-blue-700 text-white  py-2 px-12 rounded content-center"
                            style="background-color: #28245C; align-items: center;">
                            Login
                        </button></a></center>
            </div>
            <div class="p-4 m-8 xl:w-80 bg-white shadow-md rounded-xl border border-gray-400 hover:bg-yellow-500 sm:w-60">
                <center>
                    <picture class="rounded-lg block">
                        <img class="sm:h-40" :src="require('./assets/Animasi di Card/Background LMS.png')" />
                    </picture>
                </center>

                <h1 class="font mt-4 mb-2 text-xl font-bold text-center">LMS</h1>
                <p class="font text-sm text-[#28245C] text-center">
                    (Learning Management System)
                </p>
                <center><a href="login.html"><button
                            class="font items-center hover:bg-blue-700 text-white  py-2 px-12 rounded content-center"
                            style="background-color: #28245C; align-items: center;">
                            Login
                        </button></a></center>
            </div>
        </div>
        <center>
            <div class="justify-self-center  justify-center   place-content-center place-items-center" id="appList">

                <div
                    class="p-4 m-8 xl:w-80 bg-white shadow-md rounded-xl border border-gray-400 hover:bg-yellow-500 sm:w-60">
                    <center>
                        <picture class="rounded-lg block">
                            <img class="sm:h-40" :src="require('./assets/Animasi di Card/Background LIMS.png')" />
                        </picture>
                    </center>

                    <h1 class="font mt-4 mb-2 text-xl font-bold text-center">LIMS</h1>
                    <p class="font text-sm text-[#28245C] text-center">
                        (Laboratory Information Management System)
                    </p>
                    <center><a href="login.html"><button
                                class="font items-center hover:bg-blue-700 text-white  py-2 px-12 rounded content-center"
                                style="background-color: #28245C; align-items: center;">
                                Login
                            </button></a></center>
                </div>

            </div>
        </center>



        



    <div class="container mx-auto">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- Slide 1 -->
                <div class="swiper-slide">
                       <div class="text-center py-4" style="color: #28245C;">
                        <h1 class="text-2xl font-semibold">EBR</h1>
                        <h3 class="text-xl font-semibold">(Electronic Batch Record)</h3>

                        <div class="container mx-auto p-4 flex flex-wrap">
                          <div class="w-full lg:w-1/2 p-4 lg:order-1">
                            <h2 class="text-xl font-semibold" style="color: #28245C;">EBR</h2>
                            <p style="color: #28245C;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, corrupti hic ratione at cum officia aperiam. Quaerat ut doloribus vero necessitatibus, nobis omnis eveniet quam molestias, molestiae sapiente in?</p>
                          </div>
                         
                            <div class="w-full lg:w-1/2 p-4 lg:order-2">
                                 <center>
                               <img src="./assets/EBR pic Tanpa background.png" class="h-56" alt="Slide 1" />
                               </center>
                              </div>
                          
                        </div>
                      </div>

                    </div>
                <!-- Slide 2 -->
                <div class="swiper-slide">
                   <div class="text-center py-4" style="color: #28245C;">
                    <h1 class="text-2xl font-semibold">QMS</h1>
                    <h3 class="text-xl font-semibold">(Quality Manajement System)</h3>

                    <div class="container mx-auto p-4 flex flex-wrap">
                      <div class="w-full lg:w-1/2 p-4 lg:order-1">
                        <h2 class="text-xl font-semibold" style="color: #28245C;">EBR</h2>
                        <p style="color: #28245C;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, corrupti hic ratione at cum officia aperiam. Quaerat ut doloribus vero necessitatibus, nobis omnis eveniet quam molestias, molestiae sapiente in?</p>
                      </div>
                      <div class="w-full lg:w-1/2 p-4 lg:order-2">
                         <center>
                                   <img src="./assets/QMS pic Tanpa background.png" class="h-56" alt="Slide 1" />
                                   </center>
                      </div>
                    </div>
                  </div>

                </div>

                 <div class="swiper-slide">
                   <div class="text-center py-4" style="color: #28245C;">
                    <h1 class="text-2xl font-semibold">LMS</h1>
                    <h3 class="text-xl font-semibold">(Learning Manajement System)</h3>

                    <div class="container mx-auto p-4 flex flex-wrap">
                      <div class="w-full lg:w-1/2 p-4 lg:order-1">
                        <h2 class="text-xl font-semibold" style="color: #28245C;">EBR</h2>
                        <p style="color: #28245C;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, corrupti hic ratione at cum officia aperiam. Quaerat ut doloribus vero necessitatibus, nobis omnis eveniet quam molestias, molestiae sapiente in?</p>
                      </div>
                      <div class="w-full lg:w-1/2 p-4 lg:order-2">
                          <center>
                                   <img src="./assets/LMS pic Tanpa Background.png" class="h-56" alt="Slide 1" />
                                   </center>
                      </div>
                    </div>
                  </div>

                </div>

                 <div class="swiper-slide">
                       <div class="text-center py-4" style="color: #28245C;">
                        <h1 class="text-2xl font-semibold">LIMS</h1>
                        <h3 class="text-xl font-semibold">(Lab Information Manajement System)</h3>

                        <div class="container mx-auto p-4 flex flex-wrap">
                          <div class="w-full lg:w-1/2 p-4 lg:order-1">
                            <h2 class="text-xl font-semibold" style="color: #28245C;">EBR</h2>
                            <p style="color: #28245C;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, corrupti hic ratione at cum officia aperiam. Quaerat ut doloribus vero necessitatibus, nobis omnis eveniet quam molestias, molestiae sapiente in?</p>
                          </div>
                          <div class="w-full lg:w-1/2 p-4 lg:order-2">
                             <center>
                                   <img src="./assets/LIMS Tanpa Background.png" class="h-56" alt="Slide 1" />
                                   </center>
                          </div>
                        </div>
                      </div>

                    </div>

                <!-- Add more slides as needed -->

            </div>

           
        </div>
    </div>
















        <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1  items-center justify-center  place-items-center"
            id="about">

            <div class="img">
                <img :src="require('./assets/Background about us.png')" class="h-48  mt-14 " alt="..." />

            </div>
            <div class="p-4 m-8 w-80 bg-white  rounded-xl   ">

                <h1 class="font mt-4 mb-2  font-bold text-center font-mono xl:text-5xl sm:text-2xl" style="color: #28245C;">
                    About
                    Us</h1>
                <p class="font text-sm text-[#28245C] text-justify" style="color: #28245C;">
                    (Electronic Batch Record) <br>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto accusamus perferendis incidunt,
                    nesciunt expedita praesentium mollitia voluptates aliquid. Saepe quam maxime consequuntur sit incidunt
                    ab a adipisci expedita provident hic!
                </p>

            </div>

        </div>
        <footer class=" about p-4 bg-white sm:p-6 dark:bg-gray-900 relative w-full" style="background-color: #28245C;">
            <div class="md:flex md:justify-between">

                <div class="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 xl:ml-48">

                    <div>

                        <img :src="require('./assets/Logo Qualify Di scroll pertama.png')" alt="" class="xl:h-16 xl:w-64 xl:mt-11 xl:-ml-28 sm:mt-20">
                    </div>
                    <div>
                        <h2 id="Address" class="font mt-6 text-sm font-semibold text-white  dark:text-white">Alamat
                            Kantor</h2><br>
                        <p class="font text-white">XH6V+CWF, Batukarut, Kec. Arjasari,<br> Kabupaten Bandung, Jawa Barat<br>
                            40379
                        </p>
                    </div>

                    <div>
                        <h2 class="font mt-6 text-sm font-semibold text-white dark:text-white">Hubungi Kami</h2>
                        <div
                            class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/KimiaFarmaCare/?locale=id_ID"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <img :src="require('./assets/icon/Facebook.png')" alt="" class="xl:w-4 xl:mt-1 sm:w-3">

                            </a>
                            <a href="https://www.instagram.com/kimiafarma.ind/"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                                <img :src="require('./assets/icon/Instagram.png')" alt="" class="xl:w-6 xl:mt-1 sm:w-3 md:-ml-6 xl:-ml-1">

                            </a>
                            <a href="https://twitter.com/KimiaFarmaOS"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img :src="require('./assets/icon/gmailr.png')" alt="" class="xl:w-6 xl:mt-1 sm:w-3 sm:-ml-7">

                            </a>

                            <a href="https://twitter.com/KimiaFarmaOS"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img :src="require('./assets/icon/TikTok.png')" alt="" class="xl:w-6 xl:mt-1 sm:w-3 xl:-ml-10">

                            </a>


                            <a href="https://twitter.com/KimiaFarmaOS"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img :src="require('./assets/icon/Twitter.png')" alt="" class="xl:w-6 xl:-mt-10 sm:w-3 xl:ml-6 sm:-ml-7">

                            </a>

                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-5">
                <p class="font text-white text-center">Copyright © 2023 By Manufacturing System Control Kimia Farma Plant
                    Banjaran
                </p>

            </div>

        </footer>
    </div>
</template>


<script>

import 'vueperslides/dist/vueperslides.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export default {
     mounted() {
  
    const swiper = new Swiper('.swiper-container', {
      
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    swiper.on('slideChange', () => {
      console.log('slide changed');
    });
  },
   
    data() {
        return {
            show: false,
           
        };
    }
};
</script>

<style scoped>
@import 'swiper/swiper-bundle.css';
/* Gaya CSS tambahan sesuai kebutuhan Anda */
.slide-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.sub-div {
  margin-bottom: 5px;
}
.qualify{
    margin-top:-550px;
}
</style>



