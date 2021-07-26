<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Product" />
    <!-- Container-fluid starts-->
    <div
      :class="
        filtered
          ? 'container-fluid product-wrapper sidebaron'
          : 'container-fluid product-wrapper'
      "
    >
      <div class="product-grid">
        <div class="feature-products">
          <div class="row">
            <div class="col-md-6 products-total">
              <div class="square-product-setting d-inline-block">
                <a class="icon-grid grid-layout-view" @click="gridView()">
                  <feather type="grid"></feather>
                </a>
              </div>
              <div class="square-product-setting d-inline-block">
                <a class="m-0 icon-grid list-layout-view" @click="listView()">
                  <feather type="list"></feather>
                </a>
              </div>
              <span
                class="d-none-productlist filter-toggle"
                @click="collapseFilter()"
              >
                <h6 class="mb-0">
                  Filters
                  <span class="ml-2">
                    <feather type="chevron-down" class="middle"></feather>
                  </span>
                </h6>
              </span>
              <div class="grid-options d-inline-block">
                <ul>
                  <li @click="grid2()">
                    <a class="product-2-layout-view">
                      <span class="line-grid line-grid-1 bg-primary"></span>
                      <span class="line-grid line-grid-2 bg-primary"></span>
                    </a>
                  </li>
                  <li @click="grid3()">
                    <a href="#" class="product-3-layout-view">
                      <span class="line-grid line-grid-3 bg-primary"></span>
                      <span class="line-grid line-grid-4 bg-primary"></span>
                      <span class="line-grid line-grid-5 bg-primary"></span>
                    </a>
                  </li>
                  <li @click="grid4()">
                    <a href="#" class="product-4-layout-view">
                      <span class="line-grid line-grid-6 bg-primary"></span>
                      <span class="line-grid line-grid-7 bg-primary"></span>
                      <span class="line-grid line-grid-8 bg-primary"></span>
                      <span class="line-grid line-grid-9 bg-primary"></span>
                    </a>
                  </li>
                  <li @click="grid6()">
                    <a href="#" class="product-6-layout-view">
                      <span class="line-grid line-grid-10 bg-primary"></span>
                      <span class="line-grid line-grid-11 bg-primary"></span>
                      <span class="line-grid line-grid-12 bg-primary"></span>
                      <span class="line-grid line-grid-13 bg-primary"></span>
                      <span class="line-grid line-grid-14 bg-primary"></span>
                      <span class="line-grid line-grid-15 bg-primary"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-right pull-right">
                <span class="mr-2 f-w-600"
                  >Showing Products 1 - {{ filterProduct.length }} Results</span
                >
                <div
                  class="select2-drpdwn-product select-options d-inline-block"
                >
                  <select
                    class="form-control btn-square"
                    name="select"
                    @change="onChangeSort($event)"
                  >
                    <option>Order Product By</option>
                    <option value="a-z">Alphabetically, A-Z</option>
                    <option value="z-a">Alphabetically, Z-A</option>
                    <option value="low">price, low to high</option>
                    <option value="high">price, high to low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="product-sidebar">
                <div class="filter-section">
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0 f-w-600">
                        Filters
                        <span class="pull-right" @click="collapseFilter()">
                          <i class="fa fa-chevron-down toggle-data"></i>
                        </span>
                      </h6>
                    </div>
                    <Slider
                      @allFilters="allfilter"
                      @priceVal="pricefilterArray"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9 col-sm-12">
              <form>
                <div class="m-0 form-group">
                  <input
                    class="form-control"
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search.."
                  />
                  <i class="fa fa-search"></i>
                </div>
              </form>
              <div class="col-sm-12">
                <div v-if="filterProduct.length == 0">
                  <div class="text-center search-not-found">
                    <!-- <img src="@/assets/images/empty-search.jpg" alt class="second-search" /> -->
                    <p>
                      Sorry, We didn't find any results matching this search
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="product-wrapper-grid"
          :class="listViewEnable ? 'list-view' : ''"
        >
          <div class="row">
            <div
              :class="[
                col2
                  ? 'col-md-6'
                  : col3
                  ? 'col-lg-4 col-md-6'
                  : col4
                  ? 'col-xl-4 col-md-6'
                  : col6
                  ? 'col-xl-2 col-lg-4 col-md-6'
                  : list
                  ? 'col-xl-12'
                  : 'col-xl-3 col-md-6',
              ]"
              v-for="(patient, index) in resultQuery"
              :key="index"
            >
              <div class="card custom-card">
                <div class="card-profile">
                  <img
                    class="rounded-circle"
                    :src="patient.image"
                    style="height: 101px; width:101px; object-fit:cover"
                    alt=""
                  />
                </div>
                <div class="mt-1 text-center profile-details">
                  <h4>{{patient.name}}</h4>
                  <h6>Patient</h6>
                  <button
                    @click="
                      () =>
                        $router.push({
                          name: 'user-account',
                          params: { id: patient.id },
                        })
                    "
                    class="mb-3 btn btn-squre btn-outline-primary-2x"
                  >
                    View Profile
                  </button>
                </div>
                <div class="card-footer row">
                  <div class="col-6 col-sm-6">
                    <h6>Gender</h6>
                    <h3 class="counter">
                      {{patient.gender}}
                    </h3>
                  </div>
                  <div class="col-6 col-sm-6">
                    <h6>Age</h6>
                    <h3>
                      {{patient.age}} years
                    </h3>
                  </div>
                  <!-- <div class="col-4 col-sm-4">
                    <h6>Gender</h6>
                    <h3><span class="counter">96</span>M</h3>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  <script>
import { mapGetters, mapActions, mapState } from "vuex";
import Slider from "@/components/ui/filterbar";

export default {
  name: "Product",
  components: {
    Slider,
  },
  data() {
    return {
      quickViewProduct: [],
      searchQuery: null,
      counter: 1,
      priceArray: [],
      allfilters: [],
      items: [],
      filtered: false,
      col2: false,
      col3: false,
      col4: true,
      col6: false,
      listViewEnable: false,
      list: false,
    };
  },
  computed: {
    ...mapGetters({
      filterProduct: "products/filterProducts",
      tags: "products/setTags",
    }),
    ...mapState({
      getPatients: (state) => state.patients.patients,
    }),
    resultQuery() {
      if (this.searchQuery) {
        const result = this.getPatients.filter(
          (item) =>
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            item.ward
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            item.state.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        if (result.length > 0) {
          return result;
        }
        return [];
      }
      return this.getPatients;
    },
  },
  created() {
    this.getAllPatients();
  },
  methods: {
    ...mapActions({
      getAllPatients: "patients/getAllPatients",
    }),
    //For getting image path
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },

    // For Order By
    onChangeSort(event) {
      this.$store.dispatch("products/sortProducts", event.target.value);
    },

    //Filter by Category, Brand, Color
    allfilter(selectedVal) {
      this.allfilters = selectedVal;
      this.$store.dispatch("products/setTags", selectedVal);
    },

    collapseFilter() {
      this.filtered = !this.filtered;
    },

    //Price Filter
    pricefilterArray(item) {
      this.$store.dispatch("products/priceFilter", item);
    },

    //Add to cart
    addToCart: function (product, qty) {
      product.quantity = qty ? qty : 1;
      this.$store.dispatch("products/addToCart", product);
    },

    //Quick View
    quickView: function (product) {
      this.modalShow = true;
      return (this.quickViewProduct = product);
    },
    quickViewClose: function () {
      this.modalShow = false;
    },

    //Quantity increment Decrement
    increment() {
      if (this.counter < this.quickViewProduct.stock) this.counter++;
    },

    decrement() {
      if (this.counter > 1) this.counter--;
    },

    //Grid changes
    grid2() {
      this.col2 = true;
      this.col3 = false;
      this.col4 = false;
      this.col6 = false;
      this.listViewEnable = false;
    },
    grid3() {
      this.col2 = false;
      this.col3 = true;
      this.col4 = false;
      this.col6 = false;
      this.listViewEnable = false;
    },
    grid4() {
      this.col2 = false;
      this.col3 = false;
      this.col4 = true;
      this.col6 = false;
      this.listViewEnable = false;
    },
    grid6() {
      this.col2 = false;
      this.col3 = false;
      this.col4 = false;
      this.col6 = true;
      this.listViewEnable = false;
    },
    listView() {
      this.listViewEnable = true;
      this.list = true;
      this.col2 = false;
      this.col3 = false;
      this.col4 = false;
      this.col6 = false;
    },
    gridView() {
      this.listViewEnable = false;
      this.col4 = true;
    },
  },
};
</script>
