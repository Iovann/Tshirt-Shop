<template>
  <div>
    <div class="container-fluid px-0 mb-0 d-none d-lg-block py-4" id="pub" style="background-color: #F9F9F9">
        <div class="container">
            <div class="row align-items-center justify-content-between ">
                <div class="text-center col-md-2">
                    <p class="row justify-content-between mb-0 ">
                        <span class="col-2"><img src="../assets/our team/Twitter-grey.svg" alt=""></span>
                        <span class="col-2"><img src="../assets/our team/facebook grey.svg" alt=""></span>
                        <span class="col-2"><img src="../assets/our team/instagram grey.svg" alt=""></span>
                        <span class="col-2"><img src="../assets/our team/youtube.svg" alt=""></span>
                    </p>
                </div>
                <div class="col-md-5 px-0 d-flex justify-content-center py-2 py-md-0">
                    <img src="../assets/icons/fire.svg" alt=""/>
                    <span class="ms-md-3 fw-semibold align-self-center "> Free shipping on all U.S. orders $50+</span>
                </div>
                <div class="col-4 col-lg-2 d-flex justify-content-lg-end justify-content-center px-0  py-2 py-md-0">
                    <span class="bg-white btn fw-bold me-2 rounded-2">Login</span>
                    <span class="bg-black text-white btn fw-bold px-2 rounded-2">Sign Up</span>
                </div>
            </div>
        </div>
    </div>

        <nav class="navbar navbar-expand-xl bg-body-tertiary d-none d-xl-flex py-0 justufy-content-xxl-between">
            <div class="container">
                <div class="d-none d-xl-flex col-4 col-xxl-3 justify-content-center justify-content-xl-start">
                    <navtext/>
                </div>
                <div class="d-flex col-2">
                    <a class="navbar-brand me-5" href="#"><img src="../assets/images/logo-black.png.svg" alt=""></a>  
                </div>
                <div class="d-lg-flex mx-0 d-none col-3">

                        <img src="../assets/our team/search.svg" alt="" class="me-3 mt-2 ">
                        <img src="../assets/our team/account.svg" alt="" class="me-3 mt-2">
                        <button type="button" class="btn position-relative rounded-circle me-3 " style="background-color: #F3F3F3;">
                            <img src="../assets/our team/étoile.svg" alt="">
                            <span class="position-absolute top-0 start-100 translate-middle bg-success border border-light rounded-circle">
                                <span class="badge text-white">0</span>
                            </span>
                        </button>
                        <button type="button" class="btn position-relative rounded-circle" style="background-color: #F3F3F3;">
                            <img src="../assets/icons/shop.svg" alt="">
                            <span class="position-absolute top-0 start-100 translate-middle bg-success border border-light rounded-circle">
                                <span class="badge text-white">0</span>
                            </span>
                        </button>
                        <div class="ms-2 ">
                            <button class="btn btn-light shadow-sm btn-lg d-none d-xxl-inline">Let's Talk</button>
                        </div>
                </div>
            </div>
        </nav>
        <!-- navbar --md -->
        <nav class="navbar navbar-expand-xl bg-body-tertiary d-flex d-xl-none py-0 ">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/images/logo-black.png.svg" alt="">
                </a>
                <button class="navbar-toggler text-end " type="button" data-bs-toggle="collapse" data-bs-target="#Dropdown" aria-controls="Dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="Dropdown">
                    <navtext/>
                </div>    
            </div>
        </nav>
  </div>
</template>

<script>
import navtext from '../components/Home1/navtext.vue'
export default {
    name : 'navigationBar',

    components:
    {
        navtext,
       
    },
}
</script>

<style>

</style>