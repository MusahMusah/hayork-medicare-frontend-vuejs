<template>
  <div>
    <Breadcrumbs main="" title="Patient DashBoard" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="edit-profile">
        <div class="row">
          <div class="col-xl-4">
            <div class="card">
              <div class="card-header">
                <h4 class="mb-0 card-title">My Profile</h4>
                <div class="card-options">
                  <a
                    class="card-options-collapse"
                    href="#"
                    data-toggle="card-collapse"
                    ><i class="fe fe-chevron-up"></i></a
                  ><a
                    class="card-options-remove"
                    href="#"
                    data-toggle="card-remove"
                    ><i class="fe fe-x"></i
                  ></a>
                </div>
              </div>
              <div class="card-body">
                <div class="mb-2 row">
                  <div class="col-auto">
                    <img
                      class="img-70 rounded-circle"
                      alt=""
                      :src="singlePatient.image"
                      style="width: 90px; height:60px; object-fit:cover"
                    />
                  </div>
                  <div class="col">
                    <h4 class="mb-4">{{ singlePatient.name }}</h4>
                  </div>
                </div>
                <div class="form-footer">
                  <button
                    @click="() => $router.push({ name: 'patient-encounter', params: { id: singlePatient.id} })"
                    class="btn btn-primary btn-block"
                  >
                    Start Encounter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <form class="card">
              <div class="card-header">
                <h4 class="mb-0 card-title">Patient Profile</h4>
                <div class="card-options">
                  <a
                    class="card-options-collapse"
                    href="#"
                    data-toggle="card-collapse"
                    ><i class="fe fe-chevron-up"></i></a
                  ><a
                    class="card-options-remove"
                    href="#"
                    data-toggle="card-remove"
                    ><i class="fe fe-x"></i
                  ></a>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <BaseInput
                      inputType="text"
                      readonly
                      :value="singlePatient.surname"
                    >
                      Surname
                    </BaseInput>
                  </div>
                  <div class="col-md-6">
                    <BaseInput
                      inputType="text"
                      readonly
                      :value="singlePatient.gender"
                    >
                      Gender
                    </BaseInput>
                  </div>
                  <div class="col-md-6">
                    <BaseInput
                      inputType="text"
                      label="Gender"
                      readonly
                      :value="singlePatient.height"
                    >
                      Height
                    </BaseInput>
                  </div>
                  <div class="col-md-6">
                    <BaseInput
                      inputType="text"
                      label="Gender"
                      readonly
                      :value="singlePatient.weight"
                    >
                      Weight
                    </BaseInput>
                  </div>
                  <div class="col-md-6">
                    <BaseInput
                      inputType="text"
                      label="Gender"
                      readonly
                      :value="singlePatient.bmi"
                    >
                      BMI
                    </BaseInput>
                  </div>
                  <div class="col-md-6">
                    <BaseInput
                      inputType="text"
                      label="Gender"
                      readonly
                      :value="singlePatient.ward"
                    >
                      Ward
                    </BaseInput>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ProfilePage",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      singlePatient: (state) => state.patients.singlePatient,
    }),
  },
  created() {
    this.validateSinglePatient();
  },
  methods: {
    ...mapActions({
      getSinglePatient: "patients/getSinglePatient",
    }),
    validateSinglePatient() {
      this.getSinglePatient(this.$route.params.id)
        .then((res) => {
          console.log(res);
          if (!(res.status === 201 || res.status === 200)) {
            this.$router.replace({ name: "Error404" }).catch(() => {});
          }
        })
        .catch(() => {
          this.$router.replace({ name: "Error404" }).catch(() => {});
        });
    },
  },
};
</script>