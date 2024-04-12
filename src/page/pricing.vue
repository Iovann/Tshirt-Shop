<template>
  <section>
    <navigationBar/>
    <section class="pb-5" id="service">
        <div class="container-fluid p-5 " style="background-color: #F3F3F3;">
            <div class="container">
                <p class="h1 text-center">Pricing Plans</p>
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link to="/" class="text-decoration-underline text-dark fw-bolder link-offset-1-hover">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page"> Pricing Plans</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>

    <section class="container py-5">
        <div class="row align-items-center justify-content-between" id="pricingPlans">
            <div class="col-xl-4 text-center text-xl-start bg-white  ">
                <p class="text-uppercase mb-2  align-items-center"> <img src="../assets/pricing/flag.svg" alt="" class="me-2"> Choose a Plan</p>
                <h1 class="fw-bolder">Simple pricing for everyone</h1>
                <p class="text-lighter mt-3">
                    T-shirt Printing for Everyone. Get a head start
                    with free design templates you can
                    customize in a few clicks.
                </p>
                <p class="text-success me-2 fw-bolder my-3"> Lean More <img src="../assets/pricing/arrow.svg" alt=""> </p>
            </div>

            <div class="col-xl-7 p-3" id="pricingPlans2">
                <div class="row shadow-lg rounded-4 py-3 px-2 bg-white ">
                    <div class="col-md-7">
                        <h2  class="fw-bold text-center">What’s inside</h2>
                        <p class="align-items-center fw-semibold mt-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Full access to all features</p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Mix and match colors, sizes, and designs</p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Fast and free standard shipping</p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Customer happiness guarantee </p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Use on unlimited projects </p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Mix and match colors, sizes, and designs </p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">No credit card required</p>
                        <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Friendly supports </p>
                        <p class="btn btn-lg text-white  fw-bold w-100 d-none d-xl-block" style="background-color: rgba(46, 187, 119, 1);">Get Started</p>
                    </div>

                    <div class="col-md-5 text-center text-md-start mt-4 mt-xl-0">
                       <div class="mb-4">
                        <h4 class="fw-bold">Access to update</h4>
                        <p class="fw-lighter pb-2 pt-1 ">Updates come to the email.</p>

                        <span>
                            <ul class="nav nav-pills nav-fill gap-3 p-1 small bg-grey rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active rounded-6 text-dark fw-semibold rounded-pill" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">3 mounths</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link rounded-6 text-dark fw-semibold rounded-pill" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Forever</button>
                                </li>
                            </ul>
                        </span>
                       </div>
                        
                        <div class="py-4">
                            <h4 class="fw-bold">Lifetime license</h4>
                            <p class="fw-lighter pb-2 pt-1 ">Lorem ipsum det, radipiscing</p>
                            <span>
                                <ul class="nav nav-pills nav-fill gap-3 p-1 small bg-grey rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active rounded-6 text-dark fw-semibold rounded-pill" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Personal</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link rounded-6 text-dark fw-semibold rounded-pill" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Corporate</button>
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div class="pt-4">
                            <h1 class="fs-1 fw-bolder ms-3">$68 <sub class=" ps-2 fw-lighter text-decoration-line-through fs-5 ">$88</sub>  </h1>
                        </div>
                        
                    </div>
                    <div class="text-center my-3 ">
                        <p class="btn btn-lg text-white  fw-bold w-75 text-center d-xl-none" style="background-color: rgba(46, 187, 119, 1);">Get Started</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="container-fluid my-5 py-5" style="background-color: rgba(180, 121, 217, 0.15);">
        <p class="text-center h1 fw-bold"> Simple pricing foreveryone</p>
        <p class="text-center text-lighter">Choose a plan and get started</p>
       
        <div class="container">
            <div class="row justify-content-xl-evenly justify-content-center ">
                <div class="col-lg-3 col-md-5 mb-3 mb-lg-0  col-9   bg-white px-4 rounded-4 mx-0 mx-md-4 mx-xl-0" id="mar6">
                    <p class="h5 fw-bold  text-center py-4">Personnal</p>
                    <p class="h1 fw-bold text-center pb-3">$12.99 <span class="fw-lighter fs-6">/user</span></p>
                    <hr>
                    <p class="align-items-center fw-semibold mt-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Free licensed icons</p>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Fast and free standard shipping</p>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">No credit card required</p>
                    <p class="align-items-center fw-semibold mb-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Friendly supports</p>
                    <p class="text-center btn btn-lg w-100 fw-bold" style="background-color: rgba(46, 187, 119, 0.1);">Get Started</p>
                </div>
            
                <div class="col-lg-3 col-md-5 mb-3 mb-lg-0  col-9 position-relative  bg-white px-4 rounded-4 mx-0 mx-md-4 mx-xl-0">
                    <p class="h5 fw-bold  text-center pt-5 pb-3 mt-3">Professional</p>
                    <p class="h1 fw-bold text-center pb-3">$59.99 <span class="fw-lighter fs-6">/team</span></p>
                    <hr>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Full access to all features</p>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Fast and free standard shipping</p>
                    <p class="align-items-center fw-semibold mt-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">No credit card required</p>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Use on unlimited projects</p>
                    <p class="align-items-center fw-semibold mb-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Team collaboration feature.</p>
                    <p class="align-items-center fw-semibold mb-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Friendly supports</p>
                    <p class="text-center btn btn-lg btn-success w-100 fw-bold">Get Started</p>
                    <button class="btn btn-dark text-white fw-bold position-absolute top-0 end-0 me-2 mt-2 px-3">Popular</button>
                </div>

                <div class="col-lg-3 col-md-5 mb-3 mb-lg-0  col-9  bg-white px-4 rounded-4 mx-0 mx-md-4 mx-xl-0" id="mar5">
                    <p class="h5 fw-bold  text-center py-4">Enterprise</p>
                    <p class="h1 fw-bold text-center pb-3">$99.99 <span class="fw-lighter fs-6">/team</span></p>
                    <hr>
                    <p class="align-items-center fw-semibold mt-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">All features in Pro Plan.</p>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Use on unlimited projects</p>
                    <p class="align-items-center fw-semibold"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Team collaboration feature.</p>
                    <p class="align-items-center fw-semibold mb-4"> <img src="../assets/service détail/check.svg" alt="" class="px-1 py-2 me-2 rounded-circle" style="background-color: rgba(17, 177, 150, 0.15);">Friendly supports</p>
                    <p class="text-center btn btn-lg w-100 fw-bold" style="background-color: rgba(46, 187, 119, 0.1);">Get Started</p>
                </div>
            </div>
        </div>  
    </section>


    <section class="container py-5" id="radio">
        <div class="row justify-content-lg-between justify-content-center">
            <div class="col-lg-5">
                <p class="text-center"><img src="../assets/pricing/before_footer.svg" alt="" class="img-fluid"></p>
                <p class="h2 fw-bold text-center">Choose a plan & get started</p>
                <p class="text-center fw-lighter">
                    Printing organization mottos While the Internet might assume
                    control of numerous parts of printing, a few things are as yet
                    favored on paper.
                </p>
            </div>
            <div class="col-lg-6 ">
                <form action="">
                    <div class="form-check rounded-4 mb-4 py-3" :class="{ 'border border-1 border-success shadow-lg' : isChecked ==='first' }">
                        <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='first' v-model="isChecked">
                        <label class="form-check-label row justify-content-between" for="flexRadioDefault1">
                            <div class="col-lg-1 col-5 h4">Starter</div>
                            <div class="col-xl-3 col-7 fw-bolder text-end">$37 <span class="fw-lighter">/ month</span></div>
                            <div class="col-xl-9">Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus varius nunc, dapibus condimentum</div>
                        </label>
                    </div>

                    <div class="form-check shadow-sm   rounded-4 mb-4 py-3 " :class="{ 'border border-1 border-success shadow-lg': isChecked ==='second'}">
                        <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1 " value='second'  v-model="isChecked">
                        <label class="form-check-label row justify-content-between" for="flexRadioDefault1">
                            <div class="col-lg-1 col-5 h4">Standard</div>
                            <div class="col-xl-3 col-7 fw-bolder text-end">$67 <span class="fw-lighter">/ month</span></div>
                            <div class="col-xl-9">Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus varius nunc, dapibus condimentum</div>
                        </label>
                    </div>

                    <div class="form-check shadow-sm  rounded-4 mb-4 py-3" :class="{ 'border border-1 border-success shadow-lg' : isChecked ==='third'} ">
                        <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='third'  v-model="isChecked">
                        <label class="form-check-label row justify-content-between" for="flexRadioDefault1">
                            <div class="col-lg-1 col-5 h4">Pro</div>
                            <div class="col-xl-3 col-7 fw-bolder text-end">$99 <span class="fw-lighter">/ month</span></div>
                            <div class="col-xl-9">Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus varius nunc, dapibus condimentum</div>
                        </label>
                    </div>

                    <button class="text-center btn btn-lg w-100 fw-bold text-white" :class="{'disabled' :isChecked === null}" type="submit" style="background-color: rgba(46, 187, 119, 1);">Purchase Now</button>
                </form>
            </div>
        </div>
    </section>
    <firstfooter/>
  </section>
</template>

<script>
import navigationBar from "../components/navbar.vue";
import firstfooter from "../components/Home1/footer.vue";
export default {
    name:"pricing_plan",
    components: {
        navigationBar,
        firstfooter,
    },

    data() {
        return {
            isChecked: null,
        }
}
}
</script>

<style>

    #pricingPlans
    {
        background-image:url(../assets/grand_cercle.svg);
        background-repeat: no-repeat;
        background-position: top right;
    }    

    #pricingPlans2
    {
        background-image: url(../assets/pricing/petit_cercle.svg);
        background-repeat: no-repeat;
        background-position: bottom left;
    }
    #mar5,
    #mar6{
        margin-top: 8%;
    }

    .bg-grey
    {
        background-color: #d8d4d4!important;
    }

</style>