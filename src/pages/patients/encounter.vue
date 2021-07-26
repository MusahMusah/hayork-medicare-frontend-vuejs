<template>
  <div>
    <Breadcrumbs main="Patient" title="Patient Encounter" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <form class="card" @submit.prevent="handleForm">
            <div class="card-header">
              <h4 class="mb-0 card-title">Start Patient Encounter</h4>
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
              <validation-observer ref="encounterRef" tag="form">
                <div class="row">
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Date"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="text-right">Date</label>
                        <datepicker
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          input-class="datepicker-here form-control digits"
                          :format="format"
                          v-model="form.date"
                          placeholder="Pick a date"
                        ></datepicker>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Time"
                      rules="required"
                    >
                      <div class="form-group">
                        <label>Time</label>
                        <b-form-input
                          type="time"
                          :state="errors.length > 0 ? false : null"
                          v-model="form.time"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          value="21:45:00"
                        ></b-form-input>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Visit Type"
                      rules="required"
                    >
                      <div>
                        <label class="typo__label">Visit Type</label>
                        <multiselect
                          v-model="form.visit_type"
                          deselect-label="Can't remove this value"
                          track-by="name"
                          label="name"
                          placeholder="Select one"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          :options="visitTypeOptions"
                          :searchable="false"
                          :allow-empty="false"
                        >
                        </multiselect>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Weight"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Weight</label>
                        <input
                          v-model="form.weight"
                          class="form-control"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          type="number"
                          placeholder="Weight"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Height"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Height</label>
                        <input
                          v-model="form.height"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          class="form-control"
                          type="number"
                          placeholder="Height"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">BMI (Weight / Height) </label>
                      <input
                        v-model="calculateBmi"
                        class="form-control"
                        readonly
                        type="text"
                        placeholder="Weight"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Blood Pressure"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Blood Pressure (BP)</label>
                        <input
                          v-model="form.bp"
                          class="form-control"
                          type="text"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          placeholder="Blood Pressure"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Temperature"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Temperature (Temp)</label>
                        <input
                          class="form-control"
                          v-model="form.temp"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          type="text"
                          placeholder="Temperature"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Respiratory Rate"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Respiratory Rate (RR)</label>
                        <input
                          class="form-control"
                          v-model="form.respiratory_rate"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          type="text"
                          placeholder="Respiratory Rate"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-6">
                    <validation-provider
                      #default="{ errors }"
                      name="Diagnosis"
                      rules="required"
                    >
                      <div>
                        <label class="typo__label">Diagnosis</label>
                        <multiselect
                          v-model="form.diagnosis"
                          deselect-label="Can't remove this value"
                          track-by="name"
                          label="name"
                          placeholder="Select one"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                          :options="diagnosisOptions"
                          :searchable="true"
                          :allow-empty="false"
                        >
                        </multiselect>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-12">
                    <validation-provider
                      #default="{ errors }"
                      name="Complain Box"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Complain Box</label>
                        <textarea
                          v-model="form.complaints"
                          class="form-control"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                        >
                        Type in</textarea
                        >
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-12">
                    <validation-provider
                      #default="{ errors }"
                      name="Treatment Plan"
                      rules="required"
                    >
                      <div class="form-group">
                        <label class="form-label">Treatment Plan</label>
                        <textarea
                          v-model="form.treatment_plan"
                          class="form-control"
                          :state="errors.length > 0 ? false : null"
                          :class="errors.length > 0 ? 'is-invalid' : null"
                        >
                        Type in</textarea
                        >
                        <small class="text-danger">{{ errors[0] }}</small>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="col-md-12">
                    <div>
                      <label class="typo__label">Share to another Doctor</label>
                      <multiselect
                        v-model="selectedDoctor"
                        placeholder="Pick a doctor to share with"
                        label="title"
                        track-by="title"
                        :options="imageOptions"
                        :option-height="104"
                        :show-labels="false"
                      >
                        <template slot="singleLabel" slot-scope="props"
                          ><img
                            class="img-fluid img-100"
                            :src="props.option.img"
                            style="width: 80px; height:60px; object-fit:contain"
                            alt="#"
                          />
                          <span class="option__desc"
                            ><span class="ml-2">{{
                              props.option.title
                            }}</span></span
                          ></template
                        >
                        <template slot="option" slot-scope="props"
                          ><img
                            class="img-fluid img-50"
                            :src="props.option.img"
                            style="width: 80px; height:60px; object-fit:contain"
                            alt="#"
                          />
                          <div class="option__desc">
                            <span>{{ props.option.title }}</span
                            ><span class="option__small">{{
                              props.option.desc
                            }}</span>
                          </div>
                        </template>
                      </multiselect>
                    </div>
                  </div>
                </div>
              </validation-observer>
            </div>
            <div class="text-right card-footer">
              <button class="btn btn-primary" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required } from "@/utils/validations/validations.js";
import Datepicker from "vuejs-datepicker";

export default {
  name: "Encounter",
  components: { Datepicker },
  data() {
    return {
      format: "MM/dd/yyyy",
      form: {
        date: '',
        time: "",
        visit_type: null,
        weight: "",
        bmi: "",
        bp: "",
        temp: "",
        respiratory_rate: "",
        diagnosis: "",
        complaints: "",
        treatment_plan: "",
      },
      selectedDoctor: null,
      imageOptions: [],
      options: [
        { name: "Male", value: "JavaScript" },
        { name: "Female", value: "Ruby" },
      ],
      visitTypeOptions: [
        { name: "First Time Visit", value: "first_time" },
        { name: "Repeat Visit", value: "repeat" },
      ],
      diagnosisOptions: [
        { name: "Hypertension", value: "Hypertension" },
        { name: "Pneumonia", value: "Pneumonia" },
        { name: "Malaria", value: "Malaria" },
        { name: "Diabetes", value: "Diabetes" },
      ],
      required,
    };
  },
  computed: {
    ...mapState({
      fetchAllHealthWorkers: (state) => state.healthworkers.healthWorkers,
    }),
    calculateBmi() {
      return this.form.weight && this.form.height
        ? this.form.weight / this.form.height
        : 0;
    },
  },
  created() {
    this.getHealthWorkers()
    .then(() => {
      this.healthWorkersList()
    })
  },
  methods: {
    ...mapActions({
      addEncounter: "patients/addEncounter",
      getHealthWorkers: "healthworkers/getHealthWorkers",
    }),
    handleForm() {
      this.$refs.encounterRef.validate().then((success) => {
        if (success) {
          this.form.diagnosis = this.form.diagnosis.value 
          this.form.visit_type = this.form.visit_type.value 
          this.form.healthworker = this.selectedDoctor.user_id
          this.form.user_id = this.$route.params.id
          this.form.bmi = this.calculateBmi
          this.addEncounter(this.form).then((res) => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
              this.$router.replace({ name: "patients" }).then(() => {
                this.getAllPatients();
                this.$vToastify.success("👋 Record Added successfully!");
              });
            } else {
              this.$vToastify.error("Error Occured");
            }
          });
        }
      });
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    healthWorkersList() {
      this.fetchAllHealthWorkers.map((options) => {
        this.imageOptions.push({
          user_id: options.id,
          title: options.name,
          img: options.image
        })
      });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>