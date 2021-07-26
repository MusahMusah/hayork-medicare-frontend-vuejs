<template>
  <div class="left-filter">
    <div class="card-body filter-cards-view animate-chk">
      <div class="product-filter">
        <h6 class="f-w-600">By Age Group</h6>
        <div class="mt-0 checkbox-animated">
          <label
            class="d-block"
            v-for="(category, index) in categoryByAge"
            :key="index"
          >
            <input
              @change="appliedFilter(category)"
              :value="category"
              v-model="applyFilter"
              class="checkbox_animated"
              :id="category"
              type="checkbox"
            />{{ category | capitalize }} years
          </label>
        </div>
      </div>
      <div class="product-filter" style="margin-bottom: 10em">
        <h6 class="f-w-600">By Gender</h6>
        <div class="mt-0 checkbox-animated">
          <label
            class="d-block"
            v-for="(gender, index) in categoryByGender"
            :key="index"
          >
            <input
              @change="appliedFilter(gender)"
              class="checkbox_animated"
              :value="gender"
              v-model="applyFilter"
              :id="gender"
              type="checkbox"
            />
            {{ gender | capitalize }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import { mapGetters, mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {
      filter: false,
      value: [0, 450],
      applyFilter: [],
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      categoryByAge: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-Above'],
      categoryByGender: ['Male', 'Female']
    };
  },
  components: {
    VueSlider,
    swiper,
    swiperSlide,
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
    ...mapGetters({
      getCategory: "products/getCategory",
      getBrand: "products/getBrands",
      getColors: "products/getColors",
    }),
  },
  mounted() {
    this.$emit("priceVal", this.value);
  },
  methods: {
    isActive(filterItem) {
      return this.applyFilter.indexOf(filterItem) > -1;
    },
    appliedFilter() {
      alert(this.applyFilter)
      this.$emit("allFilters", this.applyFilter);
    },
    sliderChange(event) {
      this.$emit("priceVal", event);
    },
    getImgUrl(path) {
      return require("../../assets/images/" + path);
    },
  },
};
</script>