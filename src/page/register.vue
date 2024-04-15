<template>
    <section>
          <div class="row justify-content-center align-items-center vh-100 w-100">
              <div class="col-lg-3 shadow-lg rounded-5 p-5">
                <form>
                    <p class="text-center fw-bold display-6">Sign Up</p>
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">First Name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </div>
                    </div>

                    <!-- Email input -->
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>

                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-center my-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label" for="form2Example33">
                        Subscribe to our newsletter
                        </label>
                    </div>

                    <!-- Submit button -->
                    <p type="button" class="btn bg-green2 text-white fw-bold btn-block w-100  mb-4">Sign up</p>

                    <!-- Register buttons -->
                    <div class="text-center">
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