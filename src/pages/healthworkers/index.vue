<template>
  <div>
    <Breadcrumbs main="" title="Healthworkers" />
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
              <div class="grid-options d-inline-block"></div>
            </div>
            <div class="col-md-6">
              <div class="text-right pull-right">
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
            <div class="mt-1 col-md-3 col-sm-12">
              <button
                @click="() => $router.push({ name: 'register-healthworkers' })"
                class="btn btn-pill btn-outline-primary-2x btn-air-primary"
              >
                <i class="fa fa-plus-circle"></i> Add Doctor
              </button>
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
              v-for="(worker, index) in resultQuery"
              :key="index"
            >
              <div class="card custom-card">
                <div class="card-profile">
                  <img class="rounded-circle" :src="worker.image" style="height: 101px; width:101px; object-fit:cover" alt="" />
                </div>
                <div class="mt-1 text-center profile-details">
                  <h4>{{ worker.name }}</h4>
                  <h6>Doctor</h6>
                  <button
                    @click="
                      () =>
                        $router.push({
                          name: 'healthworker-profile',
                          params: { id: worker.id },
                        })
                    "
                    class="mb-3 btn btn-squre btn-outline-primary-2x"
                  >
                    View Profile
                  </button>
                </div>
                <div class="card-footer row">
                  <div class="col-6 col-sm-6">
                    <h6>Department</h6>
                    <h3 class="counter">
                      {{ worker.department }}
                    </h3>
                  </div>
                  <div class="col-6 col-sm-6">
                    <h6>Age</h6>
                    <h3>{{ worker.age }}</h3>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "Product",
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
      getHealthWorkers: (state) => state.healthworkers.healthWorkers,
    }),
    resultQuery() {
      if (this.searchQuery) {
        const result = this.getHealthWorkers.filter(
          (item) =>
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            item.department
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            item.cadre.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        if (result.length > 0) {
          return result;
        }
        return [];
      }
      return this.getHealthWorkers;
    },
  },
  created() {
    this.getAllHealthWorkers();
  },
  methods: {
    ...mapActions({
      getAllHealthWorkers: "healthworkers/getHealthWorkers",
    }),
    // For Order By
    filterQueryBy(event) {
      if (event.target.value === "asc") {
        this.getHealthWorkers.sort((a, b) => {
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
        this.getHealthWorkers.reverse((a, b) => {
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
