<template>
  <div>
    <Breadcrumbs main="" title="All Patients" />
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
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-right pull-right">
                <span class="mr-2 f-w-600"
                  >Showing {{ resultQuery.length }} Results</span
                >
                <div
                  class="select2-drpdwn-product select-options d-inline-block"
                >
                  <select
                    class="form-control btn-square"
                    name="select"
                    @change="filterQueryBy($event)"
                  >
                    <option value="asc">Alphabetically, A-Z</option>
                    <option value="desc">Alphabetically, Z-A</option>
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
                      @appliedWrapperFilter="filterData"
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
                <div v-if="resultQuery.length == 0">
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
                    style="height: 101px; width: 101px; object-fit: cover"
                    alt=""
                  />
                </div>
                <div class="mt-1 text-center profile-details">
                  <h4>{{ patient.name }}</h4>
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
                      {{ patient.gender }}
                    </h3>
                  </div>
                  <div class="col-6 col-sm-6">
                    <h6>Age</h6>
                    <h3>{{ patient.age }} years</h3>
                  </div>
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
import { mapActions, mapState } from "vuex";
import Slider from "@/components/ui/filterbar";

export default {
  name: "All Patients",
  components: {
    Slider,
  },
  data() {
    return {
      searchQuery: null,
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
    ...mapState({
      getPatients: (state) => state.patients.patients,
    }),
    resultQuery() {
      if (this.searchQuery) {
        const result = this.getPatients.filter(
          (item) =>
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            item.ward.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
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
    // For Order By
    filterQueryBy(event) {
      if (event.target.value === "asc") {
        this.getPatients.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
        });
      } else if (event.target.value === "desc") {
        this.getPatients.reverse((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
        });
      }
    },
    filterData(params) {
      this.getAllPatients({ payload: params });
    },
    collapseFilter() {
      this.filtered = !this.filtered;
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
