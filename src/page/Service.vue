<template>
  <div class="service">
    <navigationBar/>

    <section class="pb-5" id="service">
        <div class="container-fluid p-5 " style="background-color: #F3F3F3;">
            <div class="container">
                <p class="h1 text-center">Services</p>
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link to="/" class="text-decoration-underline text-dark fw-bolder link-offset-1-hover">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>

    <p class="text-center text-uppercase align-items-center "><img src="../assets/service/goutte vert.svg" alt="" class="me-3"> All the features you need</p>
    <p class="h1 text-center mt-3 fw-bold ">Fast and Quality Service</p>
    
    <section class="container my-5" id="logo">
        <div class="row justify-content-sm-between justify-content-center">
            <div class="col-lg-3 col-sm-5 text-center rounded-3 my-2 col-10 " :class="{'bg-green2 text-white my-0' :hover1 === true}" @mouseenter="hover1 = true" @mouseleave="hover1 = false">
                <img src="../assets/service/T-shirt_vert.svg" alt="" v-if="hover1 === false">
                <img src="../assets/service/T-shirt_blanc.svg" alt="" v-if="hover1 === true">
                <h4 class="mt-4">Printing Service</h4>
                <p class="fw-lighter">
                    Lorem ipsum det, cowec tetur duis nec
                    fringi det, consec t eturlagix
                </p>
            </div>
            <div class="col-lg-3 col-sm-5 text-center rounded-3 my-2 col-10 " :class="{'bg-green2 text-white' :hover2 === true}" @mouseenter="hover2 = true" @mouseleave="hover2 = false">
                <img src="../assets/service/digital_cup.svg" alt="" v-if="hover2 === false"><br>
                <img src="../assets/service/digit_cup.svg" alt="" v-if="hover2 === true">
                <h4 class="mt-4">Digital Scanning</h4>
                <p class="fw-lighter">
                    Lorem ipsum det, cowec tetur duis nec
                    fringi det, consec t eturlagix
                </p>
            </div>
            <div class="col-lg-3 col-sm-5 text-center  rounded-3 my-2 col-10 " :class="{'bg-green2 text-white' :hover3 === true}" @mouseenter="hover3 = true" @mouseleave="hover3 = false">
                <img src="../assets/service/epingle.svg" alt="" class="mb-2" v-if="hover3 === false"><br>
                <img src="../assets/service/epingle_.svg" alt="" class="mb-2" v-if="hover3 === true">
                <h4 class="mt-4">Design Services</h4>
                <p class="fw-lighter">
                    Lorem ipsum det, cowec tetur duis nec
                    fringi det, consec t eturlagix
                </p>
            </div>
            <div class="col-lg-3 col-sm-5 text-center rounded-3 my-2 col-10 " :class="{'bg-green2 text-white' :hover4 === true}" @mouseenter="hover4 = true" @mouseleave="hover4 = false">
                <img src="../assets/service/print_vert.svg" alt="" v-if="hover4 === false"><br>
                <img src="../assets/service/print_blanc.svg" alt="" v-if="hover4 === true">
                <h4 class="mt-4">Copying Services</h4>
                <p class="fw-lighter">
                    Lorem ipsum det, cowec tetur duis nec
                    fringi det, consec t eturlagix
                </p>
            </div>
        </div>
    </section>

    <p class="text-center py-3">
        <span class="btn rounded-pill" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Quality Service</span> <br>
    </p>

    <section class="container">
        <p class="text-center text-capitalize h1 fw-bold ">
            T-shirt Printing for Everyone
        </p>
        
        <div class="row justify-content-center  justify-content-lg-evenly py-5 ">
            <div class="col-xl-3 col-md-5 col-10 card px-2 border-0 mb-5" >
                <div class="rounded-4 border border-1 bg-white">
                    <img src="../assets/service/graphic_design_service.svg" class="img-fluid rounded-top-4 card-img-top" alt="...">
                    <div class="card-body text-center ">
                        <h5 class="card-title fw-bold ">Graphic Design Services</h5>
                        <p class="card-text fw-lighter ">
                            What’s more, we do it right! A full administration
                            printing background. Print shirts for yourself or your
                            online business
                        </p>
                        <button class="btn btn-lg fw-bold rounded-4 px-5 " style="background-color: #F3F3F3;">Get Started Now</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-5 col-10 card px-2 border-0 mb-5" >
                <div class="rounded-4 border border-1 bg-white">
                    <img src="../assets/service/printing_services.svg" class="img-fluid rounded-top-4 card-img-top" alt="...">
                    <div class="card-body text-center ">
                        <h5 class="card-title fw-bold ">Printing Services</h5>
                        <p class="card-text fw-lighter ">
                            What’s more, we do it right! A full administration
                            printing background. Print shirts for yourself or your
                            online business
                        </p>
                        <button class="btn btn-lg fw-bold rounded-4 px-5 " style="background-color: #F3F3F3;">Create Your Own</button>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-5 col-10 card px-2 border-0 mb-5" >
                <div class="rounded-4 border border-1 bg-white">
                    <img src="../assets/service/POD_online.svg" class="img-fluid rounded-top-4 card-img-top" alt="...">
                    <div class="card-body text-center ">
                        <h5 class="card-title fw-bold ">POD for online stores</h5>
                        <p class="card-text fw-lighter ">
                            What’s more, we do it right! A full administration
                            printing background. Print shirts for yourself or your
                            online business
                        </p>
                        <button class="btn btn-lg fw-bold rounded-4 px-5 " style="background-color: #F3F3F3;">Print for Yourself</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid py-5" id="energy" style="background-color: #F3F3F3;">
        <div class="container py-5">
            <p class="text-center text-uppercase align-items-center "><img src="../assets/service/energy_vert.svg" alt="" class="me-3">Fast and Quality Service</p>
            
            <div class="col-12">
                <div class="row justify-content-center">
                    <p class="col-lg-5 col-10 text-center h1 fw-bold">
                        Print shirts for yourself or your online business
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <img src="../assets/service/energy_pos.svg" alt="" class="img-fluid">
                </div>

                <div class="col-lg-5">

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " ref ="first"  data-bs-toggle="collapse" data-bs-target="#Acc" :class="{ 'bg-green2 text-white' :Open[0] === true}" @click="Open[0] = !Open[0], gestion('Acc')" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Graphic Design Services</p> 
                            <span class=""  v-if="Open[0] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[0] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc">
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " ref ="open2" data-bs-toggle="collapse" data-bs-target="#Acc2" :class="{ 'bg-green2 text-white' :Open[1] === true }" @click="Open[1] = !Open[1], gestion('Acc2')" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Printing Services</p> 
                            <span class=""  v-if="Open[1] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[1] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc2">
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " ref ="open3" data-bs-toggle="collapse" data-bs-target="#Acc3" :class="{ 'bg-green2 text-white' :Open[2] === true }" @click="Open[2] = !Open[2], gestion('Acc3')" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">POD for online stores</p> 
                            <span class=""  v-if="Open[2] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[2] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc3">
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " ref ="open4" data-bs-toggle="collapse" data-bs-target="#Acc4" :class="{ 'bg-green2 text-white' :Open[3] === true }" @click="Open[3] = !Open[3], gestion('Acc4')" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Branding & white-label printing</p> 
                            <span class=""  v-if="Open[3] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[3] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc4">
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid py-5 my-5 " id="T-shirt">
        <div class="row justify-content-center">
            <p class="text-center h1 fw-bold">T-shirt printing made easy.</p>
            <p class="col-lg-5 col-10 text-center">
                Let us show you how your product come to life.
            </p>
        </div>
        <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5">
                        <div class="row">
                            <div class="col-11 col-md-9 d-md-flex text-center text-md-start  align-items-center">
                                <button class="bg-success border-0  text-white px-3 py-2 fw-bold rounded-circle">1</button>
                                <p class="fw-bold ps-2 pt-3 ">Choose from 412 custom products in our catalog</p>
                            </div>
                            <div class="col-11 col-md-10 d-md-flex text-center text-md-start  align-items-center ">
                                <button class="shadow-lg text-success border-0 px-3 py-2 fw-bold rounded-circle">2</button>
                                <p class="fw-bold ps-2 pt-3 ">Customize your design with graphics, text or your own uploaded images.</p>
                            </div>
                            <div class="col-11 col-md-10 d-md-flex text-center text-md-start  align-items-center">
                                <button class="shadow-lg text-success border-0 px-3 py-2 fw-bold rounded-circle">3</button>
                                <p class="fw-bold ps-2 pt-3 ">Order prints by selecting your preferred Tshirt size, style, and quantity.</p>
                            </div>
                            <div class="col-11 col-md-9 d-md-flex text-center text-md-start  align-items-center">
                                <button class="shadow-lg text-success border-0 px-3 py-2 fw-bold rounded-circle">4</button>
                                <p class="fw-bold ps-2 pt-3 ">Get your order sent to your door with free standard shipping.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 order-first order-lg-last ">
                        <img src="../assets/service/made easy.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
    </section>

    <section class="container-fluid mb-5 " style="background-color: #F3F3F3;">
        <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-4 text-start ps-4 pt-3">
                <p class="display-6 fw-bold ">
                    Why customize products with TeeSpace?
                </p>
                <p class="fw-lighter">
                    Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet duis necgi det, con
                </p>
                <span class="btn btn-success py-3 rounded-4 w-50 mt-3 d-none d-xl-block">Shop Now<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
            </div>

            <div class="col-xl-7 ps-lg-5">
                <div class="row justify-content-evenly">
                    <div class=" col-lg-4  p-3  shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card1">
                        <img src="../assets/service/T-shirt_vert.svg" alt="" class="w-25">
                        <p class="fw-bold fs-6">Printing Services</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4  p-3 shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card2">
                        <img src="../assets/icons/high_quality.svg" alt="" class="w-25" >
                        <p class="fw-bold fs-6">Copying Services</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4  p-3 shadow-lg rounded-3 my-3 w-25 mx-2 text-center text-lg-start" id="customization-card3">
                        <img src="../assets/service/digital_cup.svg" alt="" class="w-25" >
                        <p class="fw-bold fs-6">Digital Scanning</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class="  col-lg-4  p-3 shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card4">
                        <img src="../assets/service/epingle.svg" alt="" class="w-25">
                        <p class="fw-bold fs-6">Branding & white-label printing</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4   p-3 shadow-lg rounded-3 my-3 w-25 mx-2  text-center text-lg-start" id="customization-card5">
                        <img src="../assets/service/moniteur_vert.svg" alt="" class="w-25 mb-4">
                        <p class="fw-bold fs-6">Design Services</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4 col-9   p-3 shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card6">
                        <img src="../assets/service/corde_a_linge.svg" alt="" class="w-25 mb-4">
                        <p class="fw-bold fs-6">POD for online stores</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <span class="btn btn-success py-3 px-0 rounded-4 w-50 mt-3 d-block d-xl-none">Shop Now<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                    <div class="row mt-4 position-relative ">
                        <div class="d-block d-md-none row text-center mt-3 order-last">
                            <h2 class="mb-3">Create your own <br> custom products online!</h2>
                            <span class="text-start mb-3 d-block text-center">Free and easy way to bring <br> your ideas to life</span>
                            <span class="btn btn-success py-2 px-0 rounded-4 w-75 mt-3 ">Order Custom Shirts<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                        </div> 
                        <img src="../assets/icons/createyourproduct.svg" alt="">
                        <div class="d-md-block d-none mx-auto w-75 position-absolute ps-5 top-0 mt-sm-4 mt-lg-0 pt-lg-0 mt-3 pt-sm-2 mt-xl-3 pt-xl-3 ps-3 ">
                            <h2 class="mb-3">Create your own<br>custom products online!</h2>
                            <p class="text-start mb-3">Free and easy way to bring your ideas to life </p>
                            <span class="btn btn-success pt-1 px- px-lg-2  rounded-4">Order Custom Shirts<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <secondfooter/>

  </div>
</template>

<script>
import{computed} from 'vue'
import navigationBar from "../components/navbar.vue"
import secondfooter from "../components/secondfooter.vue"
export default {
    name : 'ServicePage',
    components:
    {
        navigationBar,
        secondfooter,
    },
    data() {
        return {
            Open:[false, false, false, false],
            selectors:["Acc", "Acc2", "Acc3", "Acc4"],
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
        }
    },

       methods:{
        gestion(selector){
            for (let i=0; i < this.selectors.length; i++ ) {
                if(this.selectors[i] !== selector)
                {
                    if(this.Open[i] === true)
                    {
                        el = document.getElementById(selector);
                        
                        // $('#Acc').click()
                        // this.$refs.first.click()
                        console.log(selector)
                    }
                }
            }
        }
        // move(selector) {

        //     const element  = document.querySelector(selector)
        //     if (element.classList.contains("d-none")) {
        //         let height = element.style.height
        //         let interval = setInterval(() => {
        //         if (height === 0) {
        //             clearInterval(interval);
        //         } else {
        //             element.style.height = parseInt(element.style.height) - 10 + "px";
        //         }
        //         }, 50);
        //     } 
        //     else {
        //         element.style.height = "0px";
        //         let height = element.scrollHeight;
        //         element.style.display = "";
        //         element.style.height = "0px";

        //         let interval = setInterval(() => {
        //         if (element.style.height === height + "px") {
        //             clearInterval(interval);
        //         } else {
        //             element.style.height = parseInt(element.style.height) + 10 + "px";
        //         }

        //         }, 50);
        //     }
        // }
    }
}

</script>

<style>
@media (max-width: 769px) {
    
    #customization-card1,
    #customization-card2,
    #customization-card3,
    #customization-card4,
    #customization-card5,
    #customization-card6
    {
        width: 75% !important;
    }
}

.cardhover{
    transform: scale(1.05);
}

.bg-green{
    background-color: rgba(46, 187, 119, 0.8) !important;
}

.bg-green2{
    background-color: #2EBB77;
}
.rotate{
    transform: rotate(180deg);
}
</style>