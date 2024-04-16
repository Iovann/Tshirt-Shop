<template>
    <section>
        <navigationBar/>

        <section class="py-5" id="service">
            <div class="container-fluid p-5 " style="background-color: #F3F3F3;">
                <div class="container">
                    <p class="h1 text-center">Blog</p>
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link to="/" class="text-decoration-underline text-dark fw-bolder link-offset-1-hover">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

            <button class="btn ms-5 d-inline d-xl-none border-0 mb-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <img src="../assets/shop/sidebar.svg" alt="" class="side">
          </button>
          
        <div class="offcanvas offcanvas-start  d-lg-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h2 class="fw-bold">Search</h2>
                <div class="d-flex position-relative ">
                    <input type="text" class="form-control position-relative" placeholder="Search...">
                            <button class="btn border-0 " id="loupe" type="submit">
                        <img src="../assets/blog/search.svg" alt="">
                    </button>
                </div>
                    <h2 class="fw-bold pb-3 pt-5">Categories</h2>
                    <div class="row py-3 ">
                        <div class="col-12 mb-3  d-flex justify-content-between">
                            <span class="fw-lighter">Design Services</span>
                            <span class="fw-bold">6</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">HaruTheme</span>
                            <span class="fw-bold">4</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">Print Company</span>
                            <span class="fw-bold">3</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">Print Shop</span>
                            <span class="fw-bold">3</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">Uncategorized</span>
                            <span class="fw-bold">5</span>
                        </div>
                    </div>
                    <h2 class="fw-bold pb-3 pt-3">Latest Posts</h2>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside1.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Design Services</p>
                            <p class="fw-bold">What make you beautiful with us</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside2.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Design Services, HaruTheme</p>
                            <p class="fw-bold">Mirum est notare quem littera gothica</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside3.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Design Services, HaruTheme</p>
                            <p class="fw-bold">Ut wisi enim ad minim veniam</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside4.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">HaruTheme</p>
                            <p class="fw-bold">How to make a T-shirt design online</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside5.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Print Company</p>
                            <p class="fw-bold">Let say it your way</p>
                        </div>                        
                    </div>

                    <div class="d-flex justify-content-center">
                        <img src="../assets/blog/shop_now.svg" alt="" class="img-fluid">
                    </div>

                    <h2 class="fw-bold pb-3 pt-5">Tags</h2>

                    <div class="flex-wrap">
                        <p>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">company</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Design Services</span><br>
                        </p>
                        <p class="flex-wrap">
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">HaruTheme</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Pricom</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Print</span><br>
                        </p>
                        <p class="flex-wrap">
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Printing</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Printshop</span>
                        </p>
                    </div>
            </div>
        </div>

        <section class="container"  id="page_complete">
            <div class="row">
                <div class="col-lg-3 d-none d-lg-block">
                    <h2 class="fw-bold">Search</h2>
                    <div class="d-flex">
                        <input type="text" class="form-control position-relative" placeholder="Search...">
                        <button class="btn border border-star-0" type="submit">
                            <img src="../assets/blog/search.svg" alt="">
                        </button>
                    </div>
                    <h2 class="fw-bold pb-3 pt-5">Categories</h2>
                    <div class="row py-3 ">
                        <div class="col-12 mb-3  d-flex justify-content-between">
                            <span class="fw-lighter">Design Services</span>
                            <span class="fw-bold">6</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">HaruTheme</span>
                            <span class="fw-bold">4</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">Print Company</span>
                            <span class="fw-bold">3</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">Print Shop</span>
                            <span class="fw-bold">3</span>
                        </div>
                        <div class="col-12 mb-3 d-flex justify-content-between">
                            <span class="fw-lighter">Uncategorized</span>
                            <span class="fw-bold">5</span>
                        </div>
                    </div>
                    <h2 class="fw-bold pb-3 pt-3">Latest Posts</h2>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside1.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Design Services</p>
                            <p class="fw-bold">What make you beautiful with us</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside2.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Design Services, HaruTheme</p>
                            <p class="fw-bold">Mirum est notare quem littera gothica</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside3.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Design Services, HaruTheme</p>
                            <p class="fw-bold">Ut wisi enim ad minim veniam</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside4.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">HaruTheme</p>
                            <p class="fw-bold">How to make a T-shirt design online</p>
                        </div>                        
                    </div>

                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../assets/blog/aside5.svg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8 px-0 ">
                            <p class="fw-lighter mb-0 ">Print Company</p>
                            <p class="fw-bold">Let say it your way</p>
                        </div>                        
                    </div>

                    <div class="d-flex justify-content-center">
                        <img src="../assets/blog/shop_now.svg" alt="" class="img-fluid">
                    </div>

                    <h2 class="fw-bold pb-3 pt-5">Tags</h2>

                    <div class="flex-wrap">
                        <p>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">company</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Design Services</span><br>
                        </p>
                        <p class="flex-wrap">
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">HaruTheme</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Pricom</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Print</span><br>
                        </p>
                        <p class="flex-wrap">
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Printing</span>
                            <span class="fw-lighter rounded-4 p-2" style="background-color: #F3F3F3;">Printshop</span>
                        </p>
                    </div>
                </div>
                <div class="col-lg-9 px-4 pb-5 mb-5">
                    <div class="row">
                        <div class="col-lg-6 px-3 pt-3 ">
                            <p class="text-center"><img src="../assets/blog/teespace1.svg" alt="" class="img-fluid"></p>
                            <span class="px-2 py-1 rounded-4" style="background-color: #F3F3F3; color:rgba(46, 187, 119, 1);">Design Services</span>
                            <p class="h5 fw-bolder py-3">
                                <img src="../assets/blog/star.svg" alt="" class="mb-2 img-fluid">
                                <span class="ms-2">Make yourself happy with our T-shirt customer designer</span>
                            </p>
                            <p class="fw-lighter">
                                August 20, 2022 --- by <span class="fw-bold"> admin</span>
                                <span class="ms-5 ps-3 ">
                                    <img src="../assets/blog/star.svg" alt="" class="img-fluid">
                                    <span class="ps-2 fw-semibold" style="color: rgba(46, 187, 119, 1);">Sticky</span>
                                </span>
                            </p>
                            <p class="fw-lighter mb-4">
                                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                rhoncus, volutpat nunc sit amet, facilisiulum sceleris que...
                            </p>
                            <router-link :to="{name:'Blog_Detail', params: {title:'Make yourself happy with our T-shirt customer designer'}}" class="btn btn-lg text-white px-4 fw-semibold " style="background-color: rgba(46, 187, 119, 1);">Read More</router-link>
                        </div>

                        <div class="col-lg-6 ps-3 pt-3 ">
                            <p class="text-center"><img src="../assets/blog/teespace2.svg" alt="" class="img-fluid"></p>
                            <span class="px-2 py-1 rounded-4" style="background-color: #F3F3F3; color:rgba(46, 187, 119, 1);">Print Company</span>
                            <span class="px-2 py-1 rounded-4 ms-2" style="background-color: #F3F3F3; color:rgba(46, 187, 119, 1);">Print Shop</span>
                            <p class="h5 fw-bolder py-3">
                                <span class="ms-2">Are you ready to make it awesome with us?</span>
                            </p>
                            <p class="fw-lighter">
                                August 20, 2022 --- by <span class="fw-bold"> admin</span>
                            </p>
                            <p class="fw-lighter mb-4">
                                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                rhoncus, volutpat nunc sit amet, facilisiulum sceleris que...
                            </p>
                            <router-link :to="{name:'Blog_Detail', params: {title:'Are you ready to make it awesome with us?'}}" class="btn btn-lg text-white px-4 fw-semibold " style="background-color: rgba(46, 187, 119, 1);">Read More</router-link>
                        </div>

                        <div class="col-lg-6 ps-3 pt-4 ">
                            <p class="text-center"><img src="../assets/blog/teespace3.svg" alt="" class="img-fluid"></p>
                            <span class="px-2 py-1 rounded-4" style="background-color: #F3F3F3; color:rgba(46, 187, 119, 1);">Print Company</span>
                            <p class="h5 fw-bolder py-3">
                                <span class="ms-2">The best custom T-shirt designer WordPress theme</span>
                            </p>
                            <p class="fw-lighter">
                                August 20, 2022 --- by <span class="fw-bold"> admin</span>
                            </p>
                            <p class="fw-lighter mb-4">
                                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                rhoncus, volutpat nunc sit amet, facilisiulum sceleris que...
                            </p>
                            <router-link :to="{name:'Blog_Detail', params: {title:'The best custom T-shirt designer WordPress theme'}}" class="btn btn-lg text-white px-4 fw-semibold " style="background-color: rgba(46, 187, 119, 1);">Read More</router-link>
                        </div>
                        
                        <div class="col-lg-6 ps-3 pt-4 ">
                            <p class="text-center"><img src="../assets/blog/teespace4.svg" alt="" class="img-fluid"></p>
                            <span class="px-2 py-1 rounded-4" style="background-color: #F3F3F3; color:rgba(46, 187, 119, 1);">Print Shop</span>
                            <p class="h5 fw-bolder py-3">
                                <span class="ms-2">We can make your work better</span>
                            </p>
                            <p class="fw-lighter">
                                August 20, 2022 --- by <span class="fw-bold"> admin</span>
                            </p>
                            <p class="fw-lighter mb-4">
                                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                rhoncus, volutpat nunc sit amet, facilisiulum sceleris que...
                            </p>
                            <router-link :to="{name:'Blog_Detail', params: {title:'We can make your work better'}}" class="btn btn-lg text-white px-4 fw-semibold " style="background-color: rgba(46, 187, 119, 1);">Read More</router-link>
                        </div>

                        <div class="col-lg-6 ps-3 pt-4 ">
                            <p class="text-center"><img src="../assets/blog/teespace4.svg" alt="" class="img-fluid"></p>
                            <span class="px-2 py-1 rounded-4" style="background-color: #F3F3F3; color:rgba(46, 187, 119, 1);">Print Company</span>
                            <p class="h5 fw-bolder py-3">
                                <span class="ms-2">Let say it your way</span>
                            </p>
                            <p class="fw-lighter">
                                August 20, 2022 --- by <span class="fw-bold"> admin</span>
                            </p>
                            <p class="fw-lighter mb-4">
                                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                rhoncus, volutpat nunc sit amet, facilisiulum sceleris que...
                            </p>
                            <router-link :to="{name:'Blog_Detail', params: {title:'Let say it your way'}}" class="btn btn-lg text-white px-4 fw-semibold " style="background-color: rgba(46, 187, 119, 1);">Read More</router-link>
                        </div>

                        <div class="col-lg-6 ps-3 pt-4 ">
                            <p class=" rounded-3 my-2 p-3 ps-0" style="background-color: #F3F3F3;">
                                <span class="p-3 rounded-start-3 " style="background-color: rgba(46, 187, 119, 1);"> <img src="../assets/blog/link.svg" alt=""></span>
                                <span class="fw-semibold text-decoration-underline text-uppercase ms-3 ">harutheme</span>
                            </p>
                            <p class="fw-lighter">
                                August 20, 2022 --- by <span class="fw-bold"> admin</span>
                            </p>
                            <p class="h5 fw-bolder py-3">
                                <span class="ms-2">How to make a T-shirt design online</span>
                            </p>
                            <p class="fw-lighter mb-4">
                                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                rhoncus, volutpat nunc sit amet, facilisiulum sceleris que...
                            </p>
                            <router-link :to="{name:'Blog_Detail', params: {title:'How to make a T-shirt design online'}}" class="btn btn-lg text-white px-4 fw-semibold " style="background-color: rgba(46, 187, 119, 1);">Read More</router-link>
                        </div>
                    </div>
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
    name: 'blogPage',
    components: {
        navigationBar,
        firstfooter,
    }
}
</script>

<style>
#loupe{
  position: absolute;
  left: 89%;
}
</style>