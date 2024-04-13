<template>
    <div class="card col-xl-4 col-lg-5 col-sm-8 col-12 justify-content-center position-relative border-0">
          <div class="cardclass rounded-4 d-flex justify-content-center align-items-center" :style="change" :class="{'soldout' :card.inventory === false}" style="transition: background-size 0.6s ease-in-out;">
            <span class="py-5 px-4 rounded-circle text-white sold fw-bolder " v-if="card.inventory === false">
                Sold Out
            </span>             
          </div>
          <div class="card-body">
              <span class="position-absolute top-0 ">
                  <span class="btn btn-success text-white py-2 px-3 mt-3">!Sale</span><br>
                  <span class="btn text-white py-2 px-3 mt-1" style="background-color: rgb(180, 121, 217); margin-top: 18%;"> New</span>
              </span>
                      
              <p class="text-center fw-bold mt-3 card-title">{{ card.name }}</p>
              <p class="text-center">
                          <span class="fw-bold">${{ card.price }}</span>
              </p>
              <p class="text-center align-items-center ">
                  <span class=""> <img src="../assets/icons/point noir.svg" alt=""></span>
                  <span class="mx-3"> <img src="../assets/icons/point marron.svg" alt=""></span>
                  <span class="align-self-center">+3</span>
              </p>
          </div>
      </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  export default {
      name: 'presentCard',
     props: {
       card: Object,
     },
     setup(props){
      const change = computed(() => {
          return {
            backgroundImage: `url(${props.card.image})`
          }
        }
      )

      return {
        change
      }
     }
  }
  </script>
  
  <style>
  .cardclass {
  min-height: 450px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
}

.cardclass:hover {
  background-size: 130%;
}
  .sold{
    background-color: rgba(0, 0, 0, 0.5) ;
  }

  .soldout{
    filter: brightness(0.5) ;
  }
  </style>