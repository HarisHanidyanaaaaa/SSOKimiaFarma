<template lang="html" >
    <div class="bg-white">

        <div class="nav z-50">
            <nav class="relative px-4 py-4 flex justify-between items-center " style="background-color: #28245C;"> <img
                    :src="require('./assets/Logo Qualify Di scroll pertama.png')" class="w-40" />
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
        
     
      
        
           


        <div class="content">
          
             <div class="flex justify-center items-center h-screen ">
                    <div class="bg-image"></div>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                
                        <input v-model="username" class="shadow-xl appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="username" type="text" placeholder="Username">
                    </div>
                    <div class="mb-6">
               
                        <input v-model="password" class="shadow-xl appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="password" type="password" placeholder="Password">
                    </div>
                        <div class="flex items-center mb-4 ">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="font w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="font ml-2 text-sm font-medium text-black dark:text-black">Remember Me</label>
                </div>
                    <div class="flex items-center justify-between">
                        <button class="font shadow  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button" style="background-color:#FF8C00;">
                           Masuk
                        </button>
             
                    </div>
                     <div class="mt-5">
                            <button class="font shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button" style="background-color: #28245C;">
                             Kembali
                            </button>
             
                        </div>
                </form>
            </div>
            </div>





        
        <footer class=" about p-4 bg-white sm:p-6 dark:bg-gray-900 relative w-full" style="background-color: #28245C;">
            <div class="md:flex md:justify-between">

                <div class="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 xl:ml-48">

                    <div>

                        <img :src="require('./assets/Logo Qualify Di scroll pertama.png')" alt=""
                            class="xl:h-16 xl:w-64 xl:mt-11 xl:-ml-28 sm:mt-20">
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
                                <img :src="require('./assets/icon/Instagram.png')" alt=""
                                    class="xl:w-6 xl:mt-1 sm:w-3 md:-ml-6 xl:-ml-1">

                            </a>
                            <a href="https://twitter.com/KimiaFarmaOS"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img :src="require('./assets/icon/gmailr.png')" alt=""
                                    class="xl:w-6 xl:mt-1 sm:w-3 sm:-ml-7">

                            </a>

                            <a href="https://twitter.com/KimiaFarmaOS"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img :src="require('./assets/icon/TikTok.png')" alt=""
                                    class="xl:w-6 xl:mt-1 sm:w-3 xl:-ml-10">

                            </a>


                            <a href="https://twitter.com/KimiaFarmaOS"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img :src="require('./assets/icon/Twitter.png')" alt=""
                                    class="xl:w-6 xl:-mt-10 sm:w-3 xl:ml-6 sm:-ml-7">

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
              username: '',
            password: '',

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

.qualify {
    margin-top: -550px;
}

.bg-image {
  background-image: url('./assets/Logo Background Login.png'); /* Ganti dengan path gambar sesuai kebutuhan */
  background-size: cover;
  background-position: right;
  width: 30%;
  height: 70vh;
}

.content {
  text-align: center;
  color: #fff; /* Warna teks sesuai kebutuhan */
}
</style>



