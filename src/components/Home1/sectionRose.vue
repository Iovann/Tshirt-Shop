<template>
      <div class="container-fluid p-0 zone-rose" id="zone-rose" style="max-width: 97%;">
        <div class="row justify-content-center justify-content-xl-between">
            <div class="col-md-3 ps-0 d-none d-lg-block"> 
                    <p class="text-center"><img src="../../assets/images/belive.png" alt="" class="img-fluid rounded-4"></p>
                    <div class="d-flex justify-content-between">
                        <p class="text-start py-5"><img src="../../assets/images/earth.png" alt="" class=" rounded-4"></p>
                        <p class="text-end align-self-end mb-0 d-none d-xl-block"><img src="../../assets/images/fesse.png" alt="" class="mx-5 pt-5 mt-5 rounded-4"></p>
                    </div>
            </div>
            <div class="col-md-6 align-self-center ">
                <div class="row justify-content-center lh-lg fw-bold display-5 ">
                    <p class="col-lg-9 text-center ">
                        Enjoy up your vacations in the best T-shirts
                    </p>
                </div>
                <p class="text-center mb-3 fw-lighter">T-shirts that keep you moving.</p>
                <p class="text-center">
                    <span class="btn btn-success py-3 rounded-4 me-2">Shop Now<img src="../../assets/icons/arrow_white.svg" alt="" class="ps-2"></span>
                    <span class="btn btn-light fw-semibold py-3 rounded-4 ms-2">Contact Us<img src="../../assets/icons/arrow black.svg" alt="" class="ps-2"></span>
                </p>
            </div>
            <div class="col-md-3 pe-0 d-none d-md-block">
                <p class="ps-5 ms-5 d-none d-xxl-block"><img src="../../assets/images/fille_pleur.png" alt="" class="rounded-4 d-lg-none d-xl-block" style="width: 35%;" id="pleur"></p>
                <p class=" d-none d-md-block text-end"><img src="../../assets/images/souriante.png" alt="" class="rounded-4"></p>
                <p class="d-none d-md-block ps-5 mb-0"><img src="../../assets/images/feel_good.png" alt="" class="rounded-4"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'section_rose',
}
</script>

<style>

@media (max-width: 769px) {
    #zone-rose
    {
        width: 93%;
    }
}
</style>