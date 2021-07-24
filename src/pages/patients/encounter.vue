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
                          type="text"
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
                          type="text"
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
                          v-model="form.rr"
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
                          v-model="form.complain_box"
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
                      <label class="typo__label"
                        >Share to another Doctor</label
                      >
                      <multiselect
                        v-model="imageValue"
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
                            :src="getImgUrl(props.option.img)"
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
                            :src="getImgUrl(props.option.img)"
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
import { required } from "@/utils/validations/validations.js";
import Datepicker from "vuejs-datepicker";

export default {
  name: "Encounter",
  components: { Datepicker },
  data() {
    return {
      format: "MM/dd/yyyy",
      form: {
        name: "",
        surname: "",
        gender: null,
        age: "",
        cadre: "",
        Weight: "",
        email: "",
        password: "",
      },
      imageValue: null,
      imageOptions: [
        { title: 'Doctor 1', img: 'c1.jpg' },
        { title: 'Doctor 2', img: 'c2.jpg' },
        { title: 'Doctor 3', img: 'c3.jpg' },
      ],
      options: [
        { name: "Male", language: "JavaScript" },
        { name: "Female", language: "Ruby" },
      ],
      visitTypeOptions: [
        { name: "First Time Visit", value: "First Time" },
        { name: "Repeat Visit", language: "Repeat" },
      ],
      diagnosisOptions: [
        { name: "Hypertension", value: "Hypertension" },
        { name: "Pneumonia", language: "Pneumonia" },
        { name: "Malaria", language: "Malaria" },
        { name: "Diabetes", language: "Diabetes" },
      ],
      required,
    };
  },
  computed: {
    calculateBmi() {
      return this.form.weight && this.form.height
        ? this.form.weight / this.form.height
        : 0;
    },
  },
  methods: {
    handleForm() {
      this.$refs.encounterRef.validate().then((success) => {
        if (success) {
          alert("all good");
        }
      });
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    }
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>