<template>
  <div>
    <navigationBar/>
    <section class="pb-5" id="service_detail">
        <div class="container-fluid p-5 " style="background-color: #F3F3F3;">
            <div class="container">
                <p class="h1 text-center">Service Detail</p>
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link to="/" class="text-decoration-underline text-dark fw-bolder link-offset-1-hover">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Service  Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>

    <section class="container py-5 px-3 px-lg-0 " id="Hero">
        <div class="row justify-content-lg-between justify-content-center align-items-center">
            <div class="col-lg-5">
                <img src="../assets/service détail/hero.svg" alt="" class="img-fluid">
            </div>
            <div class="col-lg-6 py-5 py-lg-0 text-center text-lg-start">
                <span class="btn rounded-pill" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Design your own</span> <br>
                
                <div class="row pb-3 text-lg-start text-center">
                    <div class="col-lg-8 py-3 ">
                        <p class="h2">You’ve got the ideas, we’ve got the tools</p>
                        <p class="fw-lighter">
                            T-shirt Printing for Everyone. Get a headstart with free design
                            templates you can customize in a few clicks.
                        </p>
                    </div>
                    <div class="col-lg-9 col-10 text-start ">
                        <p class="align-items-center fw-bold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);"> Top quality prints using the latest technology </p>
                        <p class="align-items-center fw-bold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);"> Mix and match colors, sizes, and designs </p>
                        <p class="align-items-center fw-bold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Fast and free standard shipping</p>
                        <p class="align-items-center fw-bold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);"> Customer happiness guarantee </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container" id="logo">
        <div class="row justify-content-lg-evenly justify-content-center">
            <div class="col-lg-4">
                <div class="row align-items-center justify-content-center ">
                    <div class="col-3"><img src="../assets/service détail/top_quality.svg" alt="" class="img-fluid"></div>
                    <div class="col-9">
                        <h4 class="fw-bold">Top Quality</h4>
                        <p class="fw-lighter fs-6 ">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="row align-items-center justify-content-center ">
                    <div class="col-3"><img src="../assets/service détail/mix_and_match.svg" alt="" class="img-fluid"></div>
                    <div class="col-9">
                        <h4 class="fw-bold">Mix and match</h4>
                        <p class="fw-lighter fs-6 ">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="row align-items-center justify-content-center ">
                    <div class="col-3"><img src="../assets/service détail/shipping_worldwide.svg" alt="" class="img-fluid"></div>
                    <div class="col-9">
                        <h4 class="fw-bold">Shipping worldwide</h4>
                        <p class="fw-lighter fs-6 ">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container py-5 px-3 px-lg-0" id="tshirt_made">

        <div class="row justify-content-lg-between justify-content-center">
            <div class=" col-lg-6 justify-content-center justify-content-lg-start text-lg-start text-center">
                <span class="btn rounded-pill mb-3" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Design your own</span> <br>
                <h4>T-shirt printing made easy.</h4>
                <p class="fw-lighter py-3">You’ve got the idea, we’ve got the tools—design your custom clothing with our free design assets:</p>
                
                <div class="row justify-content-between ">
                    <div class="col-md-6">
                        <p class="h6 fw-bold"><img src="../assets/service détail/font_library.svg" alt="" class="px-3 py-3 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Font Library</p>
                        <p class="fw-lighnt fs-6">Lorem ipsum det, consec tetur duisnec fringi det, consec</p>
                    </div>
                    <div class="col-md-6">
                        <p class="h6 fw-bold"><img src="../assets/service détail/quick_designs.svg" alt="" class="px-3 py-3 me-2 rounded-circle" style="background-color: rgba(180, 121, 217, 0.15);">Quicks Designs</p>
                        <p class="fw-lighnt fs-6">Lorem ipsum det, consec tetur duisnec fringi det, consec</p>
                    </div>
                </div>
                <div class="row justify-content-between ">
                    <div class="col-md-6">
                        <p class="h6 fw-bold"><img src="../assets/service détail/free_icons.svg" alt="" class="px-3 py-3 me-2 rounded-circle" style="background-color: rgba(253, 234, 228, 1);">Free Icons, Graphics</p>
                        <p class="fw-lighnt fs-6">Lorem ipsum det, consec tetur duisnec fringi det, consec</p>
                    </div>
                    <div class="col-md-6">
                        <p class="h6 fw-bold"><img src="../assets/service détail/free_images.svg" alt="" class="px-3 py-3 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Free images</p>
                        <p class="fw-lighnt fs-6">Lorem ipsum det, consec tetur duisnec fringi det, consec</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-5 mt-3 mt-lg-0">
                <div class="row justify-content-between ">
                    <div class="col-6">
                        <img src="../assets/service détail/tshirt_mockup.svg" alt="" class="img-fluid mb-3">
                        <img src="../assets/service détail/mockup_3.svg" alt="" class="img-fluid rounded-4 mb-3">
                    </div>
                    <div class="col-6">
                        <img src="../assets/service détail/tshirt_mockup_blanc.svg" alt="" class="img-fluid mb-3 mt-4 ">
                        <img src="../assets/service détail/mockup_teespace.svg" alt="" class="img-fluid rounded-4 ">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container py-5 px-4 px-lg-0" id="how_it_work">
        <div class="text-center py-5 ">
            <span class="btn rounded-pill mb-3" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">How it Work</span> <br>
            <h2 class="fw-bold">T-shirt printing made easy.</h2>
        </div>
    </section>

    <section class="container">
        <div class="row justify-content-center ">
            <div class="col-lg-3 px-0  text-center">
                <button class="bg-success border-0  text-white px-3 py-2 fw-bold rounded-circle">1</button>
                <p class="h5 fw-bold">Add your shirt design</p>
                <p class="fw-lighter">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi det, consec tetur adipiscing eli</p>
                <p class="text-success fw-bold me-1">Explore more <img src="../assets/service détail/arrow.svg" alt=""> </p>
            </div>
            <div class="col-1 d-none d-lg-block px-0 "><img src="../assets/service détail/liaison_sup.svg" alt="" class="img-fluid"></div>
            <div class="col-lg-3 text-center">
                <button class="shadow-lg border-0  text-success fw-bolder  px-3 py-2 fw-bold rounded-circle">2</button>
                <p class="h5 fw-bold">Add your shirt design</p>
                <p class="fw-lighter">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi det, consec tetur adipiscing eli</p>
                <p class="text-success fw-bold me-1">Explore more <img src="../assets/service détail/arrow.svg" alt=""> </p>
            </div>
            <div class="col-1 d-none d-lg-block pt-4"><img src="../assets/service détail/liaison_inf.svg" alt="" class="img-fluid"></div>
            <div class="col-lg-3 text-center">
                <button class="shadow-lg border-0  text-success fw-bolder  px-3 py-2 fw-bold rounded-circle">3</button>
                <p class="h5 fw-bold">Add your shirt design</p>
                <p class="fw-lighter">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi det, consec tetur adipiscing eli</p>
                <p class="text-success fw-bold me-1">Explore more <img src="../assets/service détail/arrow.svg" alt=""> </p>
            </div>
        </div>
    </section>

    <section class="container-fluid py-5 " id="arcodeon" style="background-color: #F3F3F3;"> 
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-4 text-center text-lg-start">
                    <span class="btn rounded-pill mb-3" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Support</span> <br>
                    <p class="h2 fw-bold mb-3 lh-base">Frequently asked questions</p>
                    <p class="fw-lighter">You’ve got the idea, we’ve got the tools—design your custom clothing with our free design assets:</p>
                    <p class="text-uppercase align-items-center mb-3"> <img src="../assets/service détail/any_questions.svg" alt="" class="me-2"> Any questions</p>
                    <h2 class="fw-bold">hello@teespace.com</h2>   
                </div>

                <div class="col-lg-7">

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 "  data-bs-toggle="collapse" data-bs-target="#Acc" :class="{ 'bg-green2 text-white' :Open[0] === true}" @click="Open[0] = !Open[0]" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">How does product customization work?</p> 
                            <span class=""  v-if="Open[0] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[0] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc">
                            To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                            start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            <br>  
                            To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc2" :class="{ 'bg-green2 text-white' :Open[1] === true }" @click="Open[1] = !Open[1]" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Printing Services</p> 
                            <span class=""  v-if="Open[1] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[1] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc2">
                            To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                            start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            <br>  
                            To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc3" :class="{ 'bg-green2 text-white' :Open[2] === true }" @click="Open[2] = !Open[2]" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">What products can I customize?</p> 
                            <span class=""  v-if="Open[2] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[2] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc3">
                            To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                            start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            <br>  
                            To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc4" :class="{ 'bg-green2 text-white' :Open[3] === true }" @click="Open[3] = !Open[3]" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">How are your T-shirts printed?</p> 
                            <span class=""  v-if="Open[3] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[3] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc4">
                            To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                            start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            <br>  
                            To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc5" :class="{ 'bg-green2 text-white' :Open[3] === true }" @click="Open[4] = !Open[4]" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Can I order a personalized gift?</p> 
                            <span class=""  v-if="Open[3] === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="Open[3] === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc5">
                            To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                            start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            <br>  
                            To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container px-3 px-lg-0 py-5" id="before">
        <div class="row align-items-center justify-content-evenly">
            <div class="col-lg-3 text-center text-lg-start mb-5 mb-md-0">
                <span class="btn rounded-pill mb-3" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Testimonials</span> <br>
                <p class="h2 fw-bold mb-3 lh-base">What People Are Saying</p>
                <p class="fw-lighter">We provide support for more than 15K+ Businesses.</p>
                <span class="btn btn-lg btn-success py-2 rounded-4">Shop Now<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>           
            </div>
            <div class="col-lg-7 col-10">
                <div class="row justify-content-evenly">
                    <div class="col-md-5 p-3 shadow-lg rounded-3">
                        <p class="h4 fw-bold  ">
                            Print shirts for yourself or youronline business
                        </p>
                        <p>
                            “For all your printing prerequisites.
                            Offer to make and print their
                            pamphlets, business cards,
                            solicitations, & occasion programs.”
                        </p>
                        <div class="row align-items-center justify-content-center text-center text-lg-start">
                            <div class="col-md-3 me-2">
                                <img src="../assets/service détail/anna_lukomska.svg" alt="">
                            </div>
                            <div class="col-md-7 justify-content-between ">
                                <p class="fw-lighter"> by <span class="fw-semibold">Anna lukomska</span> <br> / Orlando, FL</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 p-3 shadow-lg rounded-3">
                        <p class="h4 fw-bold  ">
                            Design shirts for yourself or your works
                        </p>
                        <p>
                            “For all your printing prerequisites.
                            Business cards, solicitations, &
                            occasion programs offer to make and
                            print their pamphlets .”
                        </p>
                        <div class="row align-items-center justify-content-center text-center text-lg-start">
                            <div class="col-md-3 me-2 ">
                                <img src="../assets/service détail/harry_shoulder.svg" alt="">
                            </div>
                            <div class="col-md-7 justify-content-between ">
                                <p class="fw-lighter"> by <span class="fw-semibold">Harry Shoulder</span> <br> / Landmark, NY</p>
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
import navigationBar from "../components/navbar.vue";
import secondfooter from "../components/secondfooter.vue"
export default {
    name: 'service_detail',
    components: {
        navigationBar,
        secondfooter,
    },

    data() {
        return {
            Open:[false, false, false, false, false],
        }
    }
}
</script>

<style>
    .bg-green{
        background-color: #2EBB77 !important;
    }
</style>