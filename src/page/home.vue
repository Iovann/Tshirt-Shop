<template>
<div class="">
    <div class="container-fluid alert px-0 mb-0 d-none d-lg-block py-0" :class="{'d-lg-none' :close === true}" id="pub" style="background-color: rgba(46, 187, 119, 0.3);">
           <div class="container">
                <div class="row align-items-center justify-content-between ">
                    <div class="col-lg-8  px-0 d-flex justify-content-end py-md-0">
                        <img src="../assets/icons/fire.svg" alt=""/>
                        <span class="ms-md-3 fw-semibold align-self-center "> Free shipping on all U.S. orders $50+</span>
                        <span class="bg-white btn fw-bold ms-4 rounded-4 py-1 my-1">Shop now</span>
                    </div>
                    <div class="col-lg-4 px-0 justify-content-end d-flex" @click="close = true">
                        <img src="../assets/icons/croix.svg" alt="" class="ps-2">
                    </div>
                </div>
           </div>
    </div>
    <div class="container-fluid" style="background-color: #F9F9F9">
        <nav class="navbar navbar-expand-lg bg-body-tertiary container">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/logo-black.png.svg" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" row collapse navbar-collapse d-lg-flex justify-content-between" id="navbarNavDropdown">
                <div class="col-1"></div>
                <div class="d-flex col-lg-5 justify-content-center">
                    <navtextCompo/>
                </div>
                <div class="d-lg-flex col-lg-3 align-items-center mx-0 px-0 d-none justify-content-end">
                    <button type="button" class="btn position-relative rounded-circle me-4" style="background-color: #F3F3F3;">
                        <img src="../assets/icons/shop.svg" alt="">
                        <span class="position-absolute top-0 start-100 translate-middle bg-success border border-light rounded-circle">
                            <span class="badge text-white">0</span>
                        </span>
                    </button>
                    <p class="me-2">
                        <span class="fw-lighter">HOTLINE</span><br>
                        <span class="fw-semibold">00 1900 8188</span>
                    </p>
                    <span class="bg-black text-white btn fw-bold px-2 rounded-2">Sign Up</span>
                </div>
            </div>
        </nav>
    </div>
    <!-- section Hero -->
    <div class="container py-5">
        <div class="row justify-content-between align-items-center ">
            <div class="col-lg-5 col-xl-4 text-center text-lg-start">
                <span class="btn rounded-pill" style="color: purple; background-color: rgba(180, 121, 217, 0.15);">Create your own</span> <br>
                <span class="display-4 fw-bolder lh-base">Make the most of  printing</span>
                <p class="my-4">What’s more, we do it right! A full administration printing background. Print shirts for yourself or your online business</p>
                <div class="row align-items-center ">
                    <div class="col-5">
                        <span class="btn btn-success py-3 rounded-4">Shop Now<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                    </div>
                    <div class="col-5">
                        <span class="">How We Work <img src="../assets/images/Link.svg" alt="" class="ms-2"></span>
                    </div>
                </div>

                <div class="row align-items-center my-5 text-center">
                    <div class="col-lg-4">
                        <p class="fw-bold display-4 text-center mb-0" id="four">4k+</p>
                        <p class="text-center fw-lighter">Collections</p>
                    </div>
                    <div class="col-lg-1 pe-0 d-none d-lg-block ">
                        <img src="../assets/icons/line.svg" alt="">
                    </div>
                    <div class="col-lg-7 px-0 ">
                        <p class="fw-bold display-4 text-center mb-0 ">9k+</p>
                        <p class="text-center fw-lighter">items trusted to deliver</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-7 col-xl-8 order-first order-lg-last">
                <img src="../assets/images/hero_section.svg" alt="" class="img-fluid">
            </div>
        </div>
    </div>

    <!-- section logo -->
    <div class="container-fluid py-5 mb-5 " style="background-color: #F3F3F3;">
        <div class="container">
            <div class="row text_center">
            <div class="col-12">
                <div class="row justify-content-center">
                    <p class="col-lg-5 col-10 text-center fw-semibold">
                    “We've got custom T-shirts in a range of fits and sizes, so
                    everyone can wear your brand or message.”
                     </p>
                </div>
            </div>
          <div class="col-12 ">
            <div class="row justify-content-center text-center">
                <div class="col-lg-12  justify-content-between pt-5">
                    <div class="row flex-wrap justify-content-between  ">
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <img src="../assets/images/spotify.svg" alt="">
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6 ">
                            <img src="../assets/images/feedly.svg" alt="">
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <img src="../assets/images/lattice.svg" alt="">
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <img src="../assets/images/hopin.svg" alt="">
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <img src="../assets/images/upwork.svg" alt="">
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <img src="../assets/images/hopin.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>

    <!-- Section create -->

    <div class="container py-5 ">
        <p class="h2 text-center mb-3">How to create custom shirts</p>
        <div class="row justify-content-center lh-lg">
            <p class="col-lg-5 col-10  text-center fw-lighter">
                Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
                cowec tetopak ec tetur duis necgi
            </p>
        </div>

        <div class="row align-items-center justify-content-between my-4">
            <div class="col-lg-5 text-center">
                <img src="../assets/images/add_shirt_design.svg" alt="" class="img-fluid">
            </div>
            <div class="col-1 justify-content-between d-none d-xl-block">
                <p class="text-center"><button class="shadow-lg border-0 fw-bolder bg-white   px-3 py-2  rounded-circle">1</button></p>
            </div>
            <div class="col-lg-5 text-center">
                <p class="text-center fw-bold fs-4">Add your shirt design</p>
                <p class="fs-5">
                        Lorem ipsum det, cowec tetur duis nec fringi det,
                        consec t eturlagix adipiscing eliet, cowec tetopak nec
                        fringi det adipiscing
                </p>
            </div>
        </div>

        <div class="row align-items-center justify-content-between my-4">
            <div class="col-lg-5 text-center">
                <p class="text-center fw-bold fs-4">Add your shirt design</p>
                <p class="fs-5">
                        Lorem ipsum det, cowec tetur duis nec fringi det,
                        consec t eturlagix adipiscing eliet, cowec tetopak nec
                        fringi det adipiscing
                </p>
            </div>
            <div class="col-1 justify-content-between d-none d-xl-block">
                <p class="text-center"><button class="shadow-lg border-0 fw-bolder bg-white  px-3 py-2  rounded-circle">2</button></p>
            </div>
            <div class="col-lg-5 text-center order-lg-last order-first">
                <img src="../assets/images/custom_artwork.svg" alt="" class="img-fluid">
            </div>
        </div>

        <div class="row align-items-center justify-content-between my-4">
            <div class="col-lg-5 text-center">
                <img src="../assets/images/enjoy_product.svg" alt="" class="img-fluid">
            </div>
            <div class="col-1 justify-content-between d-none d-xl-block">
                <p class="text-center"><button class="shadow-lg border-0 fw-bolder bg-white   px-3 py-2  rounded-circle">3</button></p>
            </div>
            <div class="col-lg-5 text-center">
                <p class="text-center fw-bold fs-4">Add your shirt design</p>
                <p class="fs-5">
                        Lorem ipsum det, cowec tetur duis nec fringi det,
                        consec t eturlagix adipiscing eliet, cowec tetopak nec
                        fringi det adipiscing
                </p>
            </div>
        </div>
    </div>

    <div class="container-fluid p-3" style="background-color: #F3F3F3;">
        <div class="container">
            <div class="row align-items-center justify-content-evenly">
                <div class="col-lg-6">
                    <img src="../assets/images/element.svg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-4 text-center text-lg-start mt-5 mt-lg-0">
                    <p class="display-6 fw-bold">Free and easy way to bring your ideas to life</p>
                    <p class="mb-4">Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet, cowec tetopak</p>
                    <p><span class="btn btn-success text-white rounded-4 px-4 py-3">Get Started</span></p>
                </div>
            </div>
            <p class="display-5 fw-bold text-center pt-5">T-shirt printing made easy.</p>
            <div class="row justify-content-center">
                    <p class="col-lg-5 col-10 text-center">
                        Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
                        adipiscing eliet, cowec tetopak
                     </p>
            </div>
            
            <div class="row my-5">
                <div class="col-lg-4">
                    <p class="fw-bold mb-5 ps-4">Premium quality custom t-shirts</p>
                    <div class="shadow-lg rounded-4 p-4  mb-5">
                        <p class="fw-bold">Easy to create & customize</p>
                        <p>
                            Lorem ipsum det, cowec tetur duis necgi det, consec t
                            eturlagix adipiscing eliet
                        </p>
                    </div>
                    <p class=" fw-bold mb-5 ps-4 ">Thousands of free templates</p>
                    <p class=" fw-bold mb-5 ps-4 ">Free standard shipping</p>
                </div>
                <div class="col-lg-8">
                    <img src="../assets/images/tablist.svg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>

    <div class="container py-5">
        <p class="h2 text-center mb-3">Our picks for you</p>
        <div class="row justify-content-center lh-lg">
            <p class="col-lg-5 col-10 text-center fw-lighter">
                Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
                adipiscing eliet, cowec tetopak
            </p>
        </div>

        <div class="row justify-content-between ">
           
            <div class="card col-lg-3 col-md-6 position-relative border-0" :class="{'shadow-lg  cardhover' :card1 === true}"  @mouseenter="card1 = true" @mouseleave="card1 = false" style="transition:700ms ease-in-out;">
                <img src="../assets/images/soldout.svg" class="rounded-3" :class="{'ombre' :card1 === true}"  alt="...">
                <div class="card-body" :class="{'mt-4' :card1 === true}">
                    <p class="text-center" v-if="card1 === true">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-half-stroke-solid.svg" alt="" class="img-fluid" style="width: 10%;">
                    </p>
                    <span class="btn btn-success text-white py-2 px-3 position-absolute top-0 mt-3">-26%</span>
                    <p class="text-center fw-bold mt-3 card-title" v-if="card1 === false">Premium Crewneck Sweatshirt</p>
                    <p class="text-center">
                        <span class="text-success">$29.00</span>
                        <span class="text-decoration-line-through ms-3"> $39.00</span>
                    </p>
                </div>
                <div class="text-center position-absolute" v-if="card1 === true" style="top :40%; left:35%;">
                    <span class="btn btn-dark">Add To Cart</span>
                </div>
            </div>

            <div class="card col-lg-3 col-md-6 position-relative border-0" :class="{'shadow-lg  cardhover' :card2 === true}"  @mouseenter="card2 = true" @mouseleave="card2 = false" style="transition:700ms ease-in-out;">
                <img src="../assets/images/cotontee.svg" class="rounded-3" :class="{'ombre' :card2 === true}" alt="...">
                <div class="card-body" >
                    <p class="text-center" v-if="card2 === true">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                    </p>
                   <span class="position-absolute top-0 ">
                    <span class="btn btn-success text-white py-2 px-3 mt-3">!Sale</span><br>
                    <span class="btn text-white py-2 px-3 mt-1" style="background-color: rgb(180, 121, 217); margin-top: 18%;"> New</span>
                   </span>
                    
                    <p class="text-center fw-bold mt-3 card-title" v-if="card2 === false">Midweight Cotton Tee</p>
                    <p class="text-center">
                        <span class="fw-bold">$26.00 - $29.00</span>
                    </p>
                    <p class="text-center align-items-center ">
                        <span class=""> <img src="../assets/icons/point noir.svg" alt=""></span>
                        <span class="mx-3"> <img src="../assets/icons/point marron.svg" alt=""></span>
                        <span class="align-self-center">+3</span>
                    </p>
                </div>
                <div class="text-center position-absolute" v-if="card2 === true" style="top :40%; left:35%;">
                    <span class="btn btn-dark">Add To Cart</span>
                </div>
            </div>

            <div class="card col-lg-3 col-md-6 position-relative border-0" :class="{'shadow-lg  cardhover' :card3 === true}"  @mouseenter="card3 = true" @mouseleave="card3 = false" style="transition:700ms ease-in-out;">
                <img src="../assets/images/sleevetee.svg" class="rounded-3" :class="{'ombre' :card3 === true}" alt="...">
                <div class="card-body" :class="{'mt-4' :card3 === true}">
                    <span class="position-absolute top-0 ">
                        <span class="btn btn-success text-white py-2 px-3 mt-3">!Sale</span><br>
                        <span class="btn text-white py-2 px-3 mt-1" style="background-color: rgb(180, 121, 217); margin-top: 18%;"> New</span>
                    </span>
                    <p class="text-center" v-if="card3 === true">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                    </p>
                    <p class="text-center fw-bold mt-3 card-title" v-if="card3 === false">Youth Short Sleeve Tee</p>
                    <p class="text-center">
                        <span class="fw-bold">$26.00 - $29.00</span>
                    </p>
                    <p class="text-center align-items-center ">
                        <span class=""> <img src="../assets/icons/point noir.svg" alt=""></span>
                        <span class="mx-3"> <img src="../assets/icons/point marron.svg" alt=""></span>
                        <span class="align-self-center">+3</span>
                    </p>
                </div>
                <div class="text-center position-absolute" v-if="card3 === true" style="top :40%; left:35%;">
                    <span class="btn btn-dark">Add To Cart</span>
                </div>
            </div>

            <div class="card col-lg-3 col-md-6 position-relative border-0" :class="{'shadow-lg  cardhover' :card4 === true}"  @mouseenter="card4 = true" @mouseleave="card4 = false" style="transition:700ms ease-in-out;">
                <img src="../assets/images/jerseytee.svg" class="rounded-3" :class="{'ombre' :card4 === true}"  alt="...">
                <div class="card-body">
                    <p class="text-center" v-if="card4 === true">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                        <img src="../assets/icons/star-solid .svg" alt="" class="img-fluid" style="width: 10%;">
                    </p>
                    <span class="btn text-white py-2 px-3 position-absolute top-0 mt-3" style="background-color: orange;">Hot</span>
                    <p class="text-center fw-bold mt-3 card-title">Fine Jersey Tee</p>
                    <p class="text-center">
                        <span class="fw-bold">$31.00</span>
                    </p>
                </div>
                <div class="text-center position-absolute" v-if="card4 === true" style="top :40%; left:35%;">
                    <span class="btn btn-dark">Add To Cart</span>
                </div>
            </div>
        </div>
    </div>
    <CreateClothes/>
    
    <div class="container py-5" style="background-color: #F3F3F3;">
        <div class="row justify-content-between align-items-center">
            <div class="col-md-1 d-none d-md-block">

            </div>
            <div class="col-xl-4 text-center text-xl-start mx-auto  mx-xl-0">
                <p class="display-6 fw-bold ">
                    Why customize products with TeeSpace?
                </p>
                <p class="fw-lighter">
                    Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet duis necgi det, con
                </p>
                <span class="btn btn-success py-3 rounded-4 w-50 mt-3 d-none d-xl-block">View All Features<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
            </div>

            <div class="col-xl-7 ps-lg-5">
                <div class="row justify-content-evenly">
                    <div class=" col-lg-4  p-3  shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card1">
                        <img src="../assets/icons/dollar.svg" alt="" class="w-25">
                        <p class="fw-bold fs-6">NO Die & plate charges</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4  p-3 shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card2">
                        <img src="../assets/icons/high_quality.svg" alt="" class="w-25" >
                        <p class="fw-bold fs-6">High quality offset printing</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4  p-3 shadow-lg rounded-3 my-3 w-25 mx-2 text-center text-lg-start" id="customization-card3">
                        <img src="../assets/icons/securepaiement.svg" alt="" class="w-25" >
                        <p class="fw-bold fs-6">Secure payment</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class="  col-lg-4  p-3 shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card4">
                        <img src="../assets/icons/customize.svg" alt="" class="w-25">
                        <p class="fw-bold fs-6">Custom size & style</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4   p-3 shadow-lg rounded-3 my-3 w-25 mx-2  text-center text-lg-start" id="customization-card5">
                        <img src="../assets/icons/fast_free_delivery.svg" alt="" class="w-25">
                        <p class="fw-bold fs-6">Fast & free delivery</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <div class=" col-lg-4 col-9   p-3 shadow-lg rounded-3 my-3 w-25 text-center text-lg-start" id="customization-card6">
                        <img src="../assets/icons/minimum_order.svg" alt="" class="w-25">
                        <p class="fw-bold fs-6">Low minimum order quantity</p>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con</p>
                    </div>
                    <span class="btn btn-success py-3 px-0 rounded-4 w-50 mt-3 d-block d-xl-none">View All Features<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                    <div class="row mt-4 position-relative ">
                        <div class="d-block d-md-none row text-center mt-3 order-last">
                            <h2 class="mb-3">Create your own<br>custom products online!</h2>
                            <span class="text-start mb-3 d-block text-center">Free and easy way to bring <br> your ideas to life</span>
                            <span class="btn btn-success py-2 px-0 rounded-4 w-75 mt-3 ">Order Custom Shirts<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                        </div> 
                        <img src="../assets/icons/createyourproduct.svg" alt="">
                        <div class="d-md-block d-none mx-auto w-75 position-absolute ps-5 top-0 mt-sm-4 mt-lg-0 pt-lg-2 mt-5 pt-sm-2 mt-xl-3 pt-xl-3 ps-3 ">
                            <h2 class="mb-3">Create your own<br>custom products online!</h2>
                            <p class="text-start mb-3">Free and easy way to bring your ideas to life </p>
                            <span class="btn btn-success py-2 px-0 rounded-4">Order Custom Shirts<img src="../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-5 ">
        <p class="h1 text-center mb-3">More resources</p>
        <div class="row justify-content-center lh-lg">
            <p class="col-lg-5 col-10 text-center fw-lighter">
                Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec tetopak
            </p>
        </div>

        <div class="row justify-content-between py-4">
            <div class="col-xl-6 pt-4">
                <div class="row align-items-center ">
                    <div class="col-md-6 text-center">
                        <img src="../assets/images/acticel.svg" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-6 py-4 text-center text-lg-start ">
                        <span class="text-lg-start text-success p-2 rounded-4 fw-semibold mb-5" style="background-color: #F3F3F3;">Design Services</span>
                        <p class="h5 fw-bold py-2">Make yourself happy with our T-shirt customer…</p>
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/icons/avatar.svg" alt="">
                            </div>
                            <div class="col-md-7">
                                <p class="fw-lighter"> by <span class="fw-semibold">admin</span> <br> August 20, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 pt-4">
                <div class="row align-items-center ">
                    <div class="col-md-6 text-center">
                        <img src="../assets/images/acticel_1.svg" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-6 py-4 text-center text-lg-start ">
                        <span class="text-success p-2 rounded-4 fw-semibold mb-5" style="background-color: #F3F3F3;">Print Company</span>
                        <span class="text-success p-2 rounded-4 fw-semibold mb-5 ms-2" style="background-color: #F3F3F3;">Print Shop</span>
                        <p class="h4 fw-bold py-2">Are you ready to make it awesome with us</p>
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/icons/avatar.svg" alt="">
                            </div>
                            <div class="col-md-7">
                                <p class="fw-lighter"> by <span class="fw-semibold">admin</span> <br> August 20, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <p class="h1 text-center my-3">What People Are Saying</p>
        <div class="row justify-content-center lh-lg">
            <p class="col-lg-5 col-10 text-center fw-lighter">
                We provide support for more than 15K+ Businesses.
            </p>
        </div>

        <div class="row justify-content-evenly autoplay" id="autoplay">
            <div class="card col-10 col-md-8 my-3 my-lg-0 col-lg-3 p-4 border-0 text-center rounded-4 shadow-lg">
                <div class="row">
                    <div class="col-4">
                        <img src="../assets/images/dean.svg" alt="" >
                    </div>
                    <div class="col-7 align-self-end ">
                        <p class="fw-lighter"><span class="fw-bold">Dean D.</span> Director</p>
                    </div>
                </div>
                <div class="row">
                    <p class="fw-semibold">
                        “ Great quality products - Flags,
                        programs for exceptional capacities,
                        birthday, and occasion welcome are
                        largely still mainstream on paper.”
                    </p>
                </div>
            </div>

            <div class="card col-10 col-md-8 my-3 my-lg-0 col-lg-3 p-4 border-0 text-center rounded-4 shadow-lg">
                <div class="row">
                    <div class="col-4">
                        <img src="../assets/images/christian.svg" alt="" >
                    </div>
                    <div class="col-7 align-self-end ">
                        <p class="fw-lighter"><span class="fw-bold">Cristian L.</span> Manager</p>
                    </div>
                </div>
                <div class="row">
                    <p class="fw-semibold">
                        “ Best services ever - Flags, programs
                        for exceptional capacities, birthday,
                        and are largely still mainstream on
                        paper occasion welcome.”
                    </p>
                </div>
            </div>

            <div class="card col-10 col-md-8 my-3 my-lg-0 col-lg-3 p-4 border-0 text-center rounded-4 shadow-lg">
                <div class="row">
                    <div class="col-4">
                        <img src="../assets/images/leonel.svg" alt="" >
                    </div>
                    <div class="col-7 align-self-end ">
                        <p class="fw-lighter"><span class="fw-bold">Lionel R.</span> Designer</p>
                    </div>
                </div>
                <div class="row">
                    <p class="fw-semibold">
                        “ Top noth support - Flags, programs
                        for, birthday, and occasion welcome
                        are largely still mainstream on paper
                        exceptional capacities.”
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid justify-content-center d-flex" style="background-color: rgba(180, 121, 217, 0.15);">
        <div class="" style="max-width: 2560px">
            <section_rose/>
        </div>
    </div>

    <div class="container py-4">
        <div class="row justify-content-sm-between justify-content-center  ">
            <span class="fw-bold col-4 col-sm-2">Facebook</span>
            <span class="fw-bold col-4 col-sm-2">Twitter</span>
            <span class="fw-bold col-4 col-sm-2">Instagram</span>
            <span class="fw-bold col-4 col-sm-2">Youtube</span>
            <span class="fw-bold col-4 col-sm-2">Pinterest</span>
        </div>
    </div>

    <footerCompo/>
</div>
</template>

<script>
import { onMounted } from 'vue';
import navtextCompo from '../components/Home1/navtext.vue'; 
import CreateClothes from '../components/Home1/create.vue';
import footerCompo from '../components/Home1/footer.vue'
import section_rose from '../components/Home1/sectionRose.vue';
export default {
   name:'HomeCompo',
   components: {
    navtextCompo,
    CreateClothes,
    footerCompo,
    section_rose,
   },
   data(){
    return{
     card1: false,   
     card2: false,   
     card3: false,   
     card4: false,
     close: false,   
    }
   },
   methods:{
    animateValue(obj, start, end, duration) {
        const cible = getElementById(obj) 
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            cible.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
   },
   
}
</script>

<style>

.cardhover{
    transform: scale(1.05);
}

.ombre{
    filter: brightness(0.5);
}
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
    
</style>