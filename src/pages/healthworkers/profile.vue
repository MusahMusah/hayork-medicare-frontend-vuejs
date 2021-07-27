<template>
  <div>
    <Breadcrumbs main="" title="Doctor Profile" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="user-profile">
        <div class="row">
          <!-- user profile first-style start-->
          <div class="col-sm-12">
            <div class="text-center card hovercard" style="margin-top: 5em">
              <!-- <div class="cardheader"></div> -->
              <div class="user-image">
                <div class="avatar">
                  <img alt="" :src="singleWorker.image" style="object-fit:cover" />
                </div>
                <div class="icon-wrapper">
                  <i class="icofont icofont-pencil-alt-5"></i>
                </div>
              </div>
              <div class="info">
                <div class="row">
                  <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6>Department</h6>
                          <span>{{singleWorker.department}}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6>Cadre</h6>
                          <span>{{singleWorker.cadre}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                    <div class="user-designation">
                      <div class="title">
                        <a target="_blank" href="">{{singleWorker.name}}</a>
                      </div>
                      <div class="mt-2 desc">{{singleWorker.cadre}}</div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6>Gender</h6>
                          <span>{{singleWorker.gender}}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6>
                           Age
                          </h6>
                          <span>{{singleWorker.age}} years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <BasePatientEncounter :patients="singleWorker.patients_encounter" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import users from "@/data/users";
export default {
  data() {
    return {
      users,
      basic: {
        currentPage: 1,
        totalPages: 0,
      },
    };
  },
  computed: {
    ...mapState({
      singleWorker: state => state.healthworkers.singleWorker
    }),
  },
  created() {
    this.validateHealthworker()
  },
  methods: {
    ...mapActions({
      getSingleWorker: 'healthworkers/getSingleWorker'
    }),
    validateHealthworker() {
      this.getSingleWorker(this.$route.params.id)
        .then(() => {
        })
    },
  }
};
</script>