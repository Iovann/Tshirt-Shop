<template>
    
    <section>
        <navigationBar/>
        <section class="py-5" id="service">
            <div class="container-fluid p-5 " style="background-color: #F3F3F3;">
                <div class="container">
                    <p class="h1 text-center">FAQs</p>
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link to="/" class="text-decoration-underline text-dark fw-bolder link-offset-1-hover">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">FAQs</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

        <section class="container justify-content-center ">
            <p class="text-center h1 fw-bold">Frequently asked questions</p>
            <p class="text-center fw-lighter">Let us show you how your product come to life.</p>

                    <div class="accordion accordion-flush w-75 mx-auto py-5 " id="accordionFlushExample">
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" :class="{ 'bg-green2 text-white' :open1 === true }" @click="open1 = !open1, open2 = false, open3 = false, open4 = false" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <span class="fw-semibold">How does product customization work?</span>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>
                                        To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                        start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…    
                                    </p>
                                    <p>
                                        To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                                    text. For some of our T-shirts, reverse side printing is also available.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" :class="{ 'bg-green2 text-white' :open2 === true }" @click="open2 = !open2, open1 = false, open3 = false, open4 = false" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <span class="fw-semibold">What products can I customize?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>
                                        To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                        start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…    
                                    </p>
                                    <p>
                                        To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                                    text. For some of our T-shirts, reverse side printing is also available.
                                    </p>
                                </div>                        
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" :class="{ 'bg-green2 text-white' :open3 === true }" @click="open3 = !open3, open1 = false, open2 = false, open4 = false" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <span class="fw-semibold">How are your T-shirts printed?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>
                                        To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                        start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…    
                                    </p>
                                    <p>
                                        To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                                    text. For some of our T-shirts, reverse side printing is also available.
                                    </p>
                                </div>                       
                            </div>
                        </div>

                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" :class="{ 'bg-green2 text-white' :open4 === true }" @click="open4 = !open4, open2 = false, open3 = false, open1 = false" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                <span class="fw-semibold">What is the best T-shirt material?</span> 
                            </button>
                            </h2>
                            <div id="flush-collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>
                                        To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                        start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…    
                                    </p>
                                    <p>
                                        To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                                    text. For some of our T-shirts, reverse side printing is also available.
                                    </p>
                                </div>                       
                            </div>
                        </div>
                    </div>
        </section>

        <section class="container-fluid py-5 " id="arcodeon" style="background-color: #F3F3F3;"> 
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-4 text-center text-lg-start">
                    <span class="btn rounded-pill mb-3" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Support</span> <br>
                    <p class="h2 fw-bold mb-3 lh-base">Frequently asked questions</p>
                    <p class="fw-lighter">You’ve got the idea, we’ve got the tools—design your custom clothing with our free design assets:</p>
                    <p class="text-uppercase align-items-center mb-3"> <img src="../assets/service détail/any_questions.svg" alt="" class="me-2"> Any questions</p>
                    <h2 class="fw-bold">hello@teespace.com</h2>   
                </div>

                <div class="col-lg-7">
                    
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 "  data-bs-toggle="collapse" data-bs-target="#Acc" :class="{ 'bg-green2 text-white' :open5 === true}" @click="open5 = !open5" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">How does product customization work?</p> 
                            <span class=""  v-if="open5 === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="open5 === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
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
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc2" :class="{ 'bg-green2 text-white' :open6 === true }" @click="open6 = !open6" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Printing Services</p> 
                            <span class=""  v-if="open6 === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="open6 === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
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
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc3" :class="{ 'bg-green2 text-white' :open7 === true }" @click="open7 = !open7" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">What products can I customize?</p> 
                            <span class=""  v-if="open7 === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="open7 === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
                        </div>
                        <div class="collapse pt-3 px-3" id="Acc3">
                            To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                            start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            <br>  
                            To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like
                            text. For some of T-shirts, reverse side printing is also available.
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc4" :class="{ 'bg-green2 text-white' :open8 === true }" @click="open8 = !open8" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">How are your T-shirts printed?</p> 
                            <span class=""  v-if="open8 === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="open8 === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
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
                        <div class="d-flex justify-content-between align-items-center px-3 shadow-sm py-1 " data-bs-toggle="collapse" data-bs-target="#Acc5" :class="{ 'bg-green2 text-white' :open9 === true }" @click="open9 = !open9" alt="">
                            <p class="fw-bold fs-6 mb-0 py-2">Can I order a personalized gift?</p> 
                            <span class=""  v-if="open9 === false"><img src="../assets/service/arrow.svg"></span>
                            <span class="" v-if="open9 === true"><img src="../assets/service/white_arrow.svg" alt=""></span>
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
        
    <section class="container py-5">
        
        <p class="text-center fw-bold text-uppercase align-items-center pt-5"><img src="../assets/service détail/question.svg" alt="" class="me-3">Support 24/7</p>
        <p class="text-center fw-bold h1">Frequently asked questions</p>
        
        <div class="row py-5">
            <div class="col-lg-6 ps-2">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item mb-4" >
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open10 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2">How did my package ship?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open10" @click="open10 = !open10" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdOne" aria-expanded="false" aria-controls="flush-collapseThreeOne">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open10 = !open10" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdOne" aria-expanded="false" aria-controls="flush-collapseThreeOne">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapseThirdOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve
                                done that, start your creation and make sure that your final design is at least 220 PPI so it won’t be
                                pixelated when printed…
                            </div>                       
                        </div>
                    </div>

                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open11 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2">What products can I customize?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open11" @click="open11 = !open11" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdTwo" aria-expanded="false" aria-controls="flush-collapseThirdTwo">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open11 = !open11" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdTwo" aria-expanded="false" aria-controls="flush-collapseThirdTwo">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapseThirdTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            </div>                       
                        </div>
                    </div>

                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open12 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2">How long will my package take to arrive?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open12" @click="open12 = !open12" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdThree" aria-expanded="false" aria-controls="flush-collapseThirdThree">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open12 = !open12" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdThree" aria-expanded="false" aria-controls="flush-collapseThirdThree">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapseThirdThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            </div>                       
                        </div>
                    </div>

                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open13 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2">What are business days?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open13" @click="open13 = !open13" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdFour" aria-expanded="false" aria-controls="flush-collapseThirdFour">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open13 = !open13" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirdFour" aria-expanded="false" aria-controls="flush-collapseThirdFour">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapseThirdFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 pe-2">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open14 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2">What is the best T-shirt material?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open14" @click="open14 = !open14" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthOne" aria-expanded="false" aria-controls="flush-collapsefourth-One">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open14 = !open14" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthOne" aria-expanded="false" aria-controls="flush-collapsefourth-One">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapsefourthOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve
                                done that, start your creation and make sure that your final design is at least 220 PPI so it won’t be
                                pixelated when printed…
                            </div>                       
                        </div>
                    </div>

                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open15 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2">How long will my package take to arrive?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open15" @click="open15 = !open15" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthTwo" aria-expanded="false" aria-controls="flush-collapsefourthTwo">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open15 = !open15" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthTwo" aria-expanded="false" aria-controls="flush-collapsefourthTwo">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapsefourthTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            </div>                       
                        </div>
                    </div>

                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open16 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2" >How are your T-shirts printed?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open16" @click="open16 = !open16" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthThree" aria-expanded="false" aria-controls="flush-collapsefourthThree">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open16 = !open16" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthThree" aria-expanded="false" aria-controls="flush-collapsefourthThree">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapsefourthThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            </div>                       
                        </div>
                    </div>

                    <div class="accordion-item mb-4">
                        <div class="d-flex justify-content-between" :class="{ 'bg-green2 text-white' :open17 === true }">
                            <p class="fw-bold ps-4 fs-6 mb-0 py-2" >Can I order a personalized gift?</p> 
                            <button class="collapsed border-0 bg-white  me-3 border-0 py-0" v-if="!open17" @click="open17 = !open17" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthFour" aria-expanded="false" aria-controls="flush-collapsefourthFour">
                                <span><img src="../assets/service détail/plus.svg" alt=""></span>
                            </button>
                            <button class="collapsed border-0  me-3 bg-green-subtle border-0 py-0" v-else @click="open17 = !open17" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourthFour" aria-expanded="false" aria-controls="flush-collapsefourthFour">
                                <span><img src="../assets/service détail/moins.svg" alt=""></span>
                            </button>
                        </div>
        
                        <div id="flush-collapsefourthFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that,
                                start your creation your final design is at least 220 PPI so it won’t be pixelated when printed…  
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>


    <section class="py-5 text-white container-fluid" id="banner">

        <div class="container text-center text-lg-start ">
            <div class="row justify-content-lg-between justify-content-center  align-items-center">
                <div class="col-lg-6 p-5 " id="bannerfirstpart">
                    <p class="h1 fw-bold ">Enjoy up your vacations in the best T-shirts</p>
                    <p>T-shirts that keep you moving.</p>

                    <div class="row justify-content-center justify-content-md-start">
                        <div class="col-md-6">
                            <button class="btn btn-light rounded-3 fw-bold px-4 py-3 ">Shop Now <img src="../assets/service détail/black_arrow.svg" class="ms-2" alt=""></button>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                            <button class="btn btn-light rounded-3 fw-bold px-4 py-3 ">Contact Us <img src="../assets/service détail/black_arrow.svg" class="ms-2" alt=""></button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" id="bannersecondpart py-4">
                    <img src="../assets/service détail/banniere_verte.svg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
    <firstfooter/>
    </section>
</template>

<script>
// import Accordion from 'primevue/accordion';
// import AccordionTab from 'primevue/accordiontab';
import navigationBar from "../components/navbar.vue";
import firstfooter from "../components/Home1/footer.vue";
export default {
    name:"FAQ",
    components: {
        navigationBar,
        firstfooter,
    },
    data() {
    return {
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
        open8: false,
        open9: false,
        open10: false,
        open11: false,
        open12: false,
        open13: false,
        open14: false,
        open15: false,
        open16: false,
        open17: false,
    };
  },
}
</script>

<style>
#banner{
    background-color: rgba(100, 203, 154, 0.9);
    background-image: url(../assets/grand_cercle.svg);
    background-repeat: no-repeat;
    background-position:bottom left -8% ;
}
#bannerfirstpart{
    background-image: url(../assets/pricing/petit_cercle.svg);
    background-repeat: no-repeat;
    background-position: right  top 0%;
}

.bg-green{
    background-color: rgba(46, 187, 119, 0.6) !important;
}
.bg-green-subtle{
    background-color: rgba(46, 187, 119, 0.1) !important;
}

.bouton-rotation {
  transform: rotate(180deg) !important;
  transition: transform 0.2s ease-in-out;
}
</style>