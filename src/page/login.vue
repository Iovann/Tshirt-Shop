
<template>
  <section>
        <div class="row justify-content-center align-items-center vh-100 w-100">
            <div class="col-lg-3 shadow-lg rounded-5 p-5">
              <form>
              <p class="text-center fw-bold display-6">Login</p>
              <!-- Email input -->
              <div class="form-floating mb-4">
                <input type="email" id="floatingInput" class="form-control" />
                <label class="form-label" for="floatingInput">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-floating mb-4">
                <input type="password" id="floatingPassword" class="form-control" />
                <label class="form-label" for="floatingPassword">Password</label>
              </div>

              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                    <label class="form-check-label" for="form2Example34"> Remember me </label>
                  </div>
                </div>

                <div class="col">
                  <!-- Simple link -->
                  <a href="">Forgot password?</a>
                </div>
              </div>

              <!-- Submit button -->
              <p type="button" class="btn btn-success bg-green2 w-100 fw-bolder">Sign in</p>

              <!-- Register buttons -->
              <div class="text-center">
                <p>Not a member? <br><a href="" class="me-3">Register</a> <a class="">or sign up with:</a></p>
                <button  data-mdb-ripple-init type="button" class="btn rounded-circle px-2 py-2 bg-green2 mx-1">
                  <img src="/src/assets/icons/github.svg" alt="">
                </button>

                <button  data-mdb-ripple-init type="button" class="btn rounded-circle px-2 py-2 bg-green2 mx-1">
                  <img src="/src/assets/icons/google.svg" alt="">
                </button>

                <button  data-mdb-ripple-init type="button" class="btn rounded-circle px-2 py-2 bg-green2 mx-1">
                  <img src="/src/assets/icons/twitter.svg" alt="">
                </button>

                <button  data-mdb-ripple-init type="button" class="btn rounded-circle px-2 py-2 bg-green2 mx-1">
                  <img src="/src/assets/icons/facebook.svg" alt="">
                </button>
              </div>
            </form>
            </div>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

.bg-green2:hover{
  background-color: #2EBB77 !important;
}
</style>