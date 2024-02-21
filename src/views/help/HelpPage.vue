<template lang="html" >
    <div class="bg-white">

        <div class="nav z-50">
            <nav class="relative px-4 py-4 flex justify-between items-center " style="background-color: #28245C;"> <img :src="require('./assets/Logo.png')" class="w-10" />
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

                

    <div id="app">
          <button v-if="isMobileOrTablet" @click="showSidebar = !showSidebar" class="mobile-sidebar-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
          <div v-show="showSidebar" class="fixed inset-y-0 left-0 z-50 bg-white shadow-xl w-64 overflow-y-auto">
            <div class="p-4">
              <button @click="showSidebar = !showSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              </div>
                <div class="p-4">
                    <a href="#appList" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">App List</a>
                    <a href="#slider" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Most Visited</a>
                    <a href="#about" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">About Us</a>
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


                </nav>
            </div>
        </div>
        
     

     <div class="container mx-auto">
        <div class="md:grid md:grid-cols-2 md:gap-4">
          <div class="font-bold py-2 px-4 m-2 w-80  sm:mx-auto sm:text-center xl:ml-28">
            <div class="w-48 p-2  xl:mt-7 border-4 rounded-md">
                <div class="relative inline-block w-full">
            <div @click="toggleDropdown" class="flex items-center cursor-pointer">
              <span class="text-blue-800 mr-2 w-full">{{ selectedOption }}</span>
              
            </div>
            <div v-if="isOpen" class="absolute bg-white xl:-ml-1 w-full border border-gray-300 shadow-md mt-2 xl:ml-14 sm:ml-14">
              <a href="#" class="flex items-center px-4 py-2 text-blue-800 hover:bg-blue-200" @click="selectOption('Profile Saya')">
                <img :src="require('./assets/icon/Profile disabled.png')" class="w-4 h-4 mr-2 fill-current text-blue-800">
                  <!-- Ganti ikon untuk Option 1 -->
                  
               Profile Saya
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-blue-800 hover:bg-blue-200" @click="selectOption('Change Password')">
                 <img :src="require('./assets/icon/Ganti pasword disabled.png')" class="w-4 h-4 mr-2 fill-current text-blue-800">
                Change Password
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-blue-800 hover:bg-blue-200" @click="selectOption('Logout')">
                 <img :src="require('./assets/icon/Pusat bantuan DIsabled.png')" class="w-4 h-4 mr-2 fill-current text-blue-800">

                Pusat Bantuan
              </a>
            </div>
          </div>
            </div>
        </div>


        <div class="py-2 px-4 m-2 xl:-ml-14 sm:ml-64 md:-ml-5 md:-mt-10">
         <div>
         <div class="mt-16">
                    <span class="font text-3xl font-bold" style="color: #28245C;">FAQ</span>
                </div>
         <div class="-ml-14 ">
            <div class="mt-5">
                  <button v-on:click="show1 = !show1" class="font  text-2xl" style="color: #28245C;">
                    Q: Apa Itu Qualify
                  </button>
                  <transition name="fade">
                    <p v-if="show1" class="font mt-2 space-y-2 px-7 sm:w-80 text-justify" style="color: #28245C;">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam veniam ipsa voluptatum fuga commodi optio atque ullam eos id, libero autem quis explicabo, quia velit facere sit itaque eveniet.</p>
                  </transition>
                </div>
                 <div class="mt-5">
                  <button v-on:click="show2 = !show2" class="font text-2xl" style="color: #28245C;">
                    Q: Makna Qualify
                  </button>
                  <transition name="fade">
                    <p v-if="show2" class="font mt-2 space-y-2 px-7 sm:w-80 text-justify" style="color: #28245C;"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum minima aperiam natus dolorum nobis praesentium magni sint animi, exercitationem perspiciatis, maxime consectetur inventore ipsam, laudantium saepe. Magnam, laboriosam magni.</p>
                  </transition>
                </div>
                <div class="mt-5">
                      <button v-on:click="show3 = !show3" class="font text-2xl" style="color: #28245C;">
                        Q: Tujuan Landing Page Qualify
                      </button>
                      <transition name="fade">
                        <p v-if="show3" class="font mt-2 space-y-2 px-7 sm:w-80 text-justify" style="color: #28245C;">   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum minima aperiam natus dolorum nobis
                            praesentium magni sint animi, exercitationem perspiciatis, maxime consectetur inventore ipsam, laudantium saepe.
                            Magnam, laboriosam magni.</p>
                      </transition>
                    </div>
                     <div class="mt-5 mb-6">
                      <button v-on:click="show4 = !show4" class="font  text-2xl" style="color: #28245C;">
                        Q: Apa Saja Yang Ada Di Qualify
                      </button>
                      <transition name="fade">
                        <p v-if="show4" class="font mt-2 space-y-2 px-7 sm:w-80 text-justify" style="color: #28245C;"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum minima aperiam natus dolorum nobis
                            praesentium magni sint animi, exercitationem perspiciatis, maxime consectetur inventore ipsam, laudantium saepe.
                            Magnam, laboriosam magni..</p>
                      </transition>
                    </div>
         </div>
         <div class="md:w-2/3 mb-7 sm:mt-5">
                    <a href="../public/index.html">
                        <button
                            class="font shadow sm:w-48 ml-6 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                            type="button" style="background-color: #28245C;">
                            Kembali
                        </button></a>
                </div>
       </div>
            </div>
          




        
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
           if (window.innerWidth <= 768) {
            this.showSidebar = true;
        }
    },

    data() {
        return {
            show: false,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
              username: '',
                showSidebar: false,
                isDesktop: false,
            password: '',
             isOpen: false,
            selectedOption: 'Navigasi Profile',

        };
    },
    created() {
        this.isMobileOrTablet = window.innerWidth < 1024; // Assuming tablet and mobile have width less than 1024px
        window.addEventListener('resize', this.handleResize);
    },
   
      methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
         handleResize() {
            this.isMobileOrTablet = window.innerWidth < 1024;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isOpen = false;
        },
    },
    watch: {
        showSidebar(val) {
            if (!val) {
                document.body.classList.remove('overflow-hidden');
            } else {
                document.body.classList.add('overflow-hidden');
            }
        }
    }
};
</script>

<style scoped>
@import 'swiper/swiper-bundle.css';
.sidebar {
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

/* Styles for main content */
.main-content {
  margin-left: 200px; /* Adjust according to sidebar width */
  padding: 20px;
}

/* Styles for mobile sidebar toggle */
.mobile-sidebar-toggle {
  display: none; /* Hide by default */
}

/* Show mobile sidebar toggle on smaller screens */
@media (max-width: 1023px) {
  .mobile-sidebar-toggle {
    display: block;
  }
}
.sub-div {
    margin-bottom: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active di bawah versi 2.1.8 */ {
  opacity: 0;
}


.qualify {
    margin-top: -550px;
}

.bg-image {
  background-image: url('assets/Logo Background Login.png'); /* Ganti dengan path gambar sesuai kebutuhan */
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



