<template>
  <section>
    <navigationBar/>
    <section class="py-5" id="service">
            <div class="container-fluid p-5 " style="background-color: #F3F3F3;">
                <div class="container">
                    <p class="h1 text-center">Shop</p>
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                          <li class="breadcrumb-item"><router-link to="/" class="text-decoration-underline text-dark fw-bolder link-offset-1-hover">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

          <button class="btn ms-5 d-inline d-lg-none border-0 mb-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <img src="../assets/shop/sidebar.svg" alt="" class="side">
          </button>

      <div class="offcanvas offcanvas-start  d-xl-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <h2 class="fw-bold">Search</h2>
                  <div class="d-flex position-relative ">
                      <input type="text" v-model="search" class="form-control position-relative" placeholder="Search...">
                      <button class="btn border-0 " id="loupe" type="submit">
                          <img src="../assets/blog/search.svg" alt="">
                      </button>
                  </div>
                  <h2 class="fw-bold pb-3 pt-5">Product categories</h2>
                  <div class="row py-3 ">
                      <div class="col-12 mb-3  d-flex justify-content-between" @click="filterByCategorie('hoodie')">
                          <span class="fw-lighter point link-offset-2-hover ">Hoodie</span>
                          <span class="fw-bold">{{ filterByNbre('hoodie') }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between"  @click="filterByCategorie('kids')">
                          <span class="fw-lighter point link-offset-2-hover ">Kids</span>
                          <span class="fw-bold">{{ filterByNbre('kids') }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('long sleeve')">
                          <span class="fw-lighter point link-offset-2-hover ">Long Sleeves</span>
                          <span class="fw-bold">{{ filterByNbre('long sleeve') }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('design')">
                          <span class="fw-lighter point link-offset-2-hover ">Product Designer</span>
                          <span class="fw-bold">{{ filterByNbre("design") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('sweat')">
                          <span class="fw-lighter point link-offset-2-hover ">Sweater</span>
                          <span class="fw-bold">{{ filterByNbre("sweat") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('tshirt')">
                          <span class="fw-lighter point link-offset-2-hover ">T-Shirt</span>
                          <span class="fw-bold">{{ filterByNbre("tshirt") }}</span>
                      </div>
                  </div>
                  <h2 class="fw-bold pb-3 pt-3">Filter by price</h2>
                 
                  <input type="range" class="form-range" min="10" max="160" step="5" v-model="rangeValue">
                  
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fw-bolder">PRICE : ${{ rangeValue }}</span>
                      <button class="btn text-dark fw-bold" :class="{'disabled' :rangeValue === 0 }" style="background-color: #F3F3F3;">FILTER</button>
                    </div>
                  <h2 class="fw-bold pb-3 pt-5">Filter by Color</h2>
                  
                  <div class="row py-3 ">
                    <div class="col-12 mb-3  d-flex justify-content-between" @click="filterByColor('black')">
                          <span class="fw-lighter"><img src="../assets/shop/btn_black.svg" alt="" class="me-2"> Black</span>
                          <span class="fw-bold">{{ filterByCol("black") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('brown')">
                          <span class="fw-lighter"><img src="../assets/shop/btn_brown.svg" alt="" class="me-2"> Brown</span>
                          <span class="fw-bold">{{ filterByCol("brown") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('red')">
                        <span class="fw-lighter"><img src="../assets/shop/btn_red.svg" alt="" class="me-2"> Red</span>
                          <span class="fw-bold">{{ filterByCol("red") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('white')">
                        <span class="fw-lighter"><img src="../assets/shop/btn_white.svg" alt="" class="me-2"> White</span>
                          <span class="fw-bold">{{ filterByCol("white") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('yellow')">
                        <span class="fw-lighter"><img src="../assets/shop/btn_yellow.svg" alt="" class="me-2"> Yellow</span>
                          <span class="fw-bold">{{ filterByCol("yellow") }}</span>
                      </div>
                  </div>

                  <h2 class="fw-bold pb-3 pt-5">Stock status</h2>

                  <form action="">
                    <div class="form-check mb-2 ">
                      <input class="form-check-input" type="radio" value="" id="flex1" >
                      <label class="form-check-label fw-lighter " for="flex1"> On sale</label>
                    </div>

                    <div class="form-check mb-2 ">
                      <input class="form-check-input" type="radio" value="" id="flex2" >
                      <label class="form-check-label fw-lighter " for="flex2">  Sold Out</label>
                    </div>
                  </form>

                  <h2 class="fw-bold pb-3 pt-5">Product tags</h2>

                  <div class="row">
                    <div class="col-12 d-flex  align-items-center">
                      <span class="px-2 pt-1  me-3  rounded-2 " style="background-color: #F3F3F3;">Designer</span>
                      <span class="px-2 pt-1  me-3  rounded-2 " style="background-color: #F3F3F3;">Kids</span>
                      <span class="px-2 pt-1  me-3  rounded-2 " style="background-color: #F3F3F3;">T-shirt</span>
                    </div>
                    <div class="col-4 mt-3 ">
                      <span class="p-2 rounded-2 " style="background-color: #F3F3F3;">Woman</span>
                    </div>
                  </div>

          </div>
      </div>

    <section class="container">
      <div class="row">
        <div class="col-3 pe-4 pb-5 d-none d-xl-block ">
          <h2 class="fw-bold">Search</h2>
          <div class="d-flex position-relative ">
              <input type="text" v-model="search" class="form-control position-relative" placeholder="Search...">
                      <button class="btn border-0 " id="loupe" type="submit">
                  <img src="../assets/blog/search.svg" alt="">
              </button>
          </div>
          <h2 class="fw-bold pb-3 pt-5">Product categories</h2>
                  <div class="row py-3 ">
                      <div class="col-12 mb-3  d-flex justify-content-between" @click="filterByCategorie('hoodie')">
                          <span class="fw-lighter point link-offset-2-hover ">Hoodie</span>
                          <span class="fw-bold">{{ filterByNbre('hoodie') }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between"  @click="filterByCategorie('kids')">
                          <span class="fw-lighter point link-offset-2-hover ">Kids</span>
                          <span class="fw-bold">{{ filterByNbre('kids') }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('long sleeve')">
                          <span class="fw-lighter point link-offset-2-hover ">Long Sleeves</span>
                          <span class="fw-bold">{{ filterByNbre('long sleeve') }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('design')">
                          <span class="fw-lighter point link-offset-2-hover ">Product Designer</span>
                          <span class="fw-bold">{{ filterByNbre("design") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('sweat')">
                          <span class="fw-lighter point link-offset-2-hover ">Sweater</span>
                          <span class="fw-bold">{{ filterByNbre("sweat") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByCategorie('tshirt')">
                          <span class="fw-lighter point link-offset-2-hover ">T-Shirt</span>
                          <span class="fw-bold">{{ filterByNbre("tshirt") }}</span>
                      </div>
                  </div>
                  <h2 class="fw-bold pb-3 pt-3">Filter by price</h2>
                 
                  <input type="range" class="form-range" min="5" max="45" step="5" v-model="rangeValue">
                  
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fw-bolder">PRICE : ${{ rangeValue }}</span>
                      <button class="btn text-dark fw-bold " :class="{'disabled' :rangeValue === 0 }"   @click="filterByPrice" style="background-color: #F3F3F3;">FILTER</button>
                    </div>
                  <h2 class="fw-bold pb-3 pt-5">Filter by Color</h2>
                  
                  <div class="row py-3 ">
                      <div class="col-12 mb-3  d-flex justify-content-between" @click="filterByColor('black')">
                          <span class="fw-lighter"><img src="../assets/shop/btn_black.svg" alt="" class="me-2"> Black</span>
                          <span class="fw-bold">{{ filterByCol("black") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('brown')">
                          <span class="fw-lighter"><img src="../assets/shop/btn_brown.svg" alt="" class="me-2"> Brown</span>
                          <span class="fw-bold">{{ filterByCol("brown") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('red')">
                        <span class="fw-lighter"><img src="../assets/shop/btn_red.svg" alt="" class="me-2"> Red</span>
                          <span class="fw-bold">{{ filterByCol("red") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('white')">
                        <span class="fw-lighter"><img src="../assets/shop/btn_white.svg" alt="" class="me-2"> White</span>
                          <span class="fw-bold">{{ filterByCol("white") }}</span>
                      </div>
                      <div class="col-12 mb-3 d-flex justify-content-between" @click="filterByColor('yellow')">
                        <span class="fw-lighter"><img src="../assets/shop/btn_yellow.svg" alt="" class="me-2"> Yellow</span>
                          <span class="fw-bold">{{ filterByCol("yellow") }}</span>
                      </div>
                  </div>

                  <h2 class="fw-bold pb-3 pt-5">Stock status</h2>

                  <form action="">
                    <input type="radio" name="option" id="option1" class="me-2" v-model="isChecked1" @click="filterByStatus1">
                    <label for="option1 fw-semi-bold"> On sale</label>
                    <br>
                    <input type="radio" name="option" id="option2" class="me-2" v-model="isChecked2" @click="filterByStatus2">
                    <label for="option2 fw-semi-bold"> Sold Out</label>
                  </form>

                  <h2 class="fw-bold pb-3 pt-5">Product tags</h2>

                  <div class="row">
                    <div class="col-12 d-flex  align-items-center">
                      <span class="px-2 pt-1  me-3  rounded-2 " style="background-color: #F3F3F3;">Designer</span>
                      <span class="px-2 pt-1  me-3  rounded-2 " style="background-color: #F3F3F3;">Kids</span>
                      <span class="px-2 pt-1  me-3  rounded-2 " style="background-color: #F3F3F3;">T-shirt</span>
                    </div>
                    <div class="col-4 mt-3 ">
                      <span class="p-2 rounded-2 " style="background-color: #F3F3F3;">Woman</span>
                    </div>
                  </div>

          </div>

        <div class="col-xl-9">
          <div v-if="data_Card.length === 0">
            <p class="display-4 fw-bolder text-center">
              Aucun article trouvé
            </p>
          </div>
          <div v-else>
            <!-- <card_Row :tabcard = "data_Card"/> -->

            <div class="">
              <card_Row :tabcard = "getPaginatedData()"/>

              <nav class="d-flex justify-content-center my-5">
                <li class="page-item"><a class="border-0 page-link rounded-circle" @click="goToNextPage">Previous</a></li>
                <ul class="pagination pagination-circle">
                  <li class="page-item" v-for="pageNumber in npd" :key="pageNumber" @click="currentPage = pageNumber"><a class="border-0 page-link rounded-circle">{{ pageNumber }}</a></li>
                </ul>
              </nav>
            </div>
          </div>
          </div>

      </div>
    </section>
        
    <firstfooter/>
  </section>
</template>

<script>
// import
import {ref, onMounted, watch, computed} from "vue"
import info from "../BDD"
import card_Row from "../components/card_row.vue"
import navigationBar from "../components/navbar.vue";
import firstfooter from "../components/Home1/footer.vue";
export default {
    name: 'ShopVueCompo',
    components: {
        card_Row,
        navigationBar,
        firstfooter,
    },
    data() {
    return {
      rangeValue: 0,
      colorFilter:null,
      originalDataCard: [],
      isChecked1:false,
      isChecked2:false,
      currentPage: 1,
      itemsPerPage: 9,
      npd: ref(0)
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    getPaginatedData() {
      const page = this.data_Card.length
      this.npd = Math.ceil(page/9)
      console.log (this.npd)
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const data = this.data_Card.slice(startIndex, endIndex)
      return data
    },

    goToNextPage(){
      if (currentPage < Math.ceil(originalDataCard.length / itemsPerPage)) {
        currentPage++; // Mettre à jour currentPage avant de récupérer les données
        data_Card.value = getPaginatedData();
      }
    },

    goToPreviousPage(){
      if (currentPage > 1) {
        currentPage--; // Mettre à jour currentPage avant de récupérer les données
        data_Card.value = getPaginatedData();
      }
    },

    filterByPrice() {
      const maxPrice = this.rangeValue;
      // Filtrer les cartes en fonction de la valeur de la plage de prix
      let filteredData = this.originalDataCard;
      if (this.colorFilter) {
        filteredData = filteredData.filter(card => card.color === this.colorFilter);
      }
      this.data_Card = filteredData.filter(card => card.price <= maxPrice);
    },

    filterByColor(color) {
      // Filtrer les cartes en fonction de la couleur spécifiée
      this.colorFilter = color;
      let filteredData = this.originalDataCard;
      if (this.colorFilter) {
        filteredData = filteredData.filter(card => card.color === this.colorFilter);
      }
      // Appliquer le filtre de prix uniquement si une plage de prix a été sélectionnée
      if (this.rangeValue > 0) {
        this.data_Card = filteredData.filter(card => card.price <= this.rangeValue);
      } else {
        this.data_Card = filteredData;
      }
    },
    filterByStatus1() {
        if (this.isChecked1) {
            this.data_Card = this.originalDataCard.filter(card => card.inventory === true);
        }
    },
    filterByStatus2() {
        if (this.isChecked2) {
            this.data_Card = this.originalDataCard.filter(card => card.inventory === false);
        }
    },

    filterByCategorie(categorie){
      this.data_Card = this.originalDataCard.filter(card => card.categorie === categorie)
    },

    filterByNbre(categorie){
      let nbr = ref([])
      nbr.value = this.originalDataCard.filter(card => card.categorie === categorie)
      return nbr.value.length
    },

    filterByCol(color){
      let nbre = ref([])
      nbre.value = this.originalDataCard.filter(card => card.color === color)
      return nbre.value.length
    }
  },
       

        mounted(){
            // Initialiser les données originales avec toutes les données de la base de données
            this.originalDataCard = info.map(card => ({ ...card }));
            // Copier les données originales dans data_card pour afficher tous les articles par défaut
            // this.data_Card = info
            // this.data_Card = this.getPaginatedData(); 
          },
  setup() {
    class Card {
      constructor(name, image, categorie, color, price, inventory) {
        this.image = image;
        this.categorie = categorie;
        this.color = color;
        this.price = price;
        this.inventory = inventory;
        this.name = name;
      }
    }

    let data_Card = ref([]);

    const makeCard = () => {
      for (const card of info) {
        const newCard = new Card(card.name, card.image, card.categorie, card.color, card.price, card.inventory);
        data_Card.value.push(newCard);
      }
    };
    onMounted(makeCard);

    let page = ref()
    const pageData = computed(()=>{
      page.value = Math.ceil(getPaginatedData.length / 9)
      return page
    })

  let search = ref('')
    watch(search, (new_value)=>{
      console.log(new_value)
      let tab = info.filter(card => card.name.toLowerCase().includes(new_value.toLowerCase()));
      data_Card.value = [...tab];
    })
    return {
      data_Card,
      search,
      pageData
    };
  }
}
</script>

<style>
#loupe{
  position: absolute;
  left: 87%;
}
.point{
  cursor: pointer;
}

.point:hover{
  text-decoration: underline;
  text-decoration-color: gray;
}
.side{
  width: 180%;
}
</style>