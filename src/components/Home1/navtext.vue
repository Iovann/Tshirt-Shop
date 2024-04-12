<template>   
      <ul class="navbar-nav text-center align-items-center ">
        <li class="nav-item dropdown">
          <router-link to="/" class="active nav-link fw-semibold text-center text-lg-start text-success">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle fw-semibold"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TeeSpace
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/service" class="dropdown-item text-center text-lg-start ">Service</router-link></li>
            <li><router-link to="/service_detail" class="dropdown-item text-center text-lg-start ">Service Détails</router-link></li>
            <li class="ps-3 text-center text-lg-start"><router-link to="/our_team" class="text-decoration-none text-dark text-center text-lg-start ">Our Team</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle fw-semibold"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/ShopVueCompo" class="dropdown-item text-center text-lg-start ">Shop</router-link></li>
            <li><router-link to="/pricing" class="dropdown-item text-center text-lg-start " >Pricing</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle fw-semibold"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/Blog" class="dropdown-item text-center text-lg-start " >Blog</router-link></li>
            <li><router-link to="/Blog_Detail" class="dropdown-item text-center text-lg-start "  >Blog Détail</router-link></li>
            <!-- <li><router-link to="" class="dropdown-item" >Something else here</router-link></li> -->
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle fw-semibold"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/AboutVue" class="dropdown-item text-center text-lg-start ">About</router-link></li>
            <li><router-link to="/faq" class="dropdown-item text-center text-lg-start " >FAQs</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <img src="../../assets/icons/search.svg" alt="" class="btn">
        </li>
      </ul>
</template>

<script>
export default {
    name: "navtextCompo",
}
</script>

<style>

</style>