<template>
  <div>
    <Breadcrumbs main="Users" title="Edit Profile" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Register Health Worker</h5>
            </div>
            <div class="card-body">
              <form-wizard
                finish-button-text="Submit"
                back-button-text="Previous"
                @on-complete="handleSubmit"
                shape="tab"
                color="#4466f2"
                title=""
                subtitle=""
              >
                <tab-content
                  :before-change="validatePersonalDetails"
                  title="Personal details"
                  icon="fa fa-user"
                >
                  <validation-observer ref="personalDetailsRef" tag="form">
                    <div class="setup-content" id="step-1">
                      <div class="col-xs-12">
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-6">
                              <validation-provider
                                #default="{ errors }"
                                name="Name"
                                rules="required"
                              >
                                <div class="form-group">
                                  <label class="form-label">Name</label>
                                  <input
                                    v-model="form.name"
                                    class="form-control"
                                    type="text"
                                    :state="errors.length > 0 ? false : null"
                                    :class="
                                      errors.length > 0 ? 'is-invalid' : null
                                    "
                                    placeholder="Name"
                                  />
                                  <small class="text-danger">{{
                                    errors[0]
                                  }}</small>
                                </div>
                              </validation-provider>
                            </div>
                            <div class="col-md-6">
                              <validation-provider
                                #default="{ errors }"
                                name="SurName"
                                rules="required"
                              >
                                <div class="form-group">
                                  <label class="form-label">Surname</label>
                                  <input
                                    class="form-control"
                                    v-model="form.surname"
                                    :state="errors.length > 0 ? false : null"
                                    :class="
                                      errors.length > 0 ? 'is-invalid' : null
                                    "
                                    type="text"
                                    placeholder="Username"
                                  />
                                </div>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </div>
                            <div class="col-md-6">
                              <validation-provider
                                #default="{ errors }"
                                name="Age"
                                rules="required"
                              >
                                <div class="form-group">
                                  <label class="form-label">Age</label>
                                  <input
                                    class="form-control"
                                    v-model="form.age"
                                    :state="errors.length > 0 ? false : null"
                                    :class="
                                      errors.length > 0 ? 'is-invalid' : null
                                    "
                                    type="text"
                                    placeholder="Age"
                                  />
                                </div>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </div>
                            <div class="col-md-6">
                              <validation-provider
                                #default="{ errors }"
                                name="Gender"
                                rules="required"
                              >
                                <div>
                                  <label class="typo__label">Gender</label>
                                  <multiselect
                                    v-model="form.gender"
                                    deselect-label="Can't remove this value"
                                    track-by="name"
                                    label="name"
                                    placeholder="Select one"
                                    :state="errors.length > 0 ? false : null"
                                    :class="
                                      errors.length > 0 ? 'is-invalid' : null
                                    "
                                    :options="options"
                                    :searchable="false"
                                    :allow-empty="false"
                                  >
                                  </multiselect>
                                </div>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </div>
                            <div class="col-md-6">
                              <validation-provider
                                #default="{ errors }"
                                name="Cadre"
                                rules="required"
                              >
                                <div class="form-group">
                                  <label class="form-label">Cadre</label>
                                  <input
                                    v-model="form.cadre"
                                    :state="errors.length > 0 ? false : null"
                                    :class="
                                      errors.length > 0 ? 'is-invalid' : null
                                    "
                                    class="form-control"
                                    type="text"
                                    placeholder="Cadre"
                                  />
                                </div>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </div>
                            <div class="col-md-6">
                              <validation-provider
                                #default="{ errors }"
                                name="Department"
                                rules="required"
                              >
                                <div class="form-group">
                                  <label class="form-label">Department</label>
                                  <input
                                    v-model="form.department"
                                    class="form-control"
                                    :state="errors.length > 0 ? false : null"
                                    :class="
                                      errors.length > 0 ? 'is-invalid' : null
                                    "
                                    type="text"
                                    placeholder="Department"
                                  />
                                </div>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label"
                                  >Upload File {{form.image}}</label
                                >
                                <div class="col-sm-9">
                                  <b-form-file
                                    @change="handleFile"
                                    class="form-control"
                                    plain
                                  ></b-form-file>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </validation-observer>
                </tab-content>
                <tab-content
                  :before-change="validateAdditionalInfo"
                  title="Additional Info"
                  icon="fa fa-cog"
                >
                  <validation-observer ref="additionalInfoRef" tag="form">
                    <div class="setup-content" id="step-2">
                      <div class="col-xs-12">
                        <div class="col-md-12">
                          <div>
                            <validation-provider
                              #default="{ errors }"
                              name="Email"
                              rules="required|email"
                            >
                              <div class="form-group">
                                <label class="control-label">Email</label>
                                <input
                                  class="form-control"
                                  type="email"
                                  v-model="form.email"
                                  :state="errors.length > 0 ? false : null"
                                  :class="
                                    errors.length > 0 ? 'is-invalid' : null
                                  "
                                  placeholder="name@example.com"
                                  required="required"
                                />
                              </div>
                              <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                          </div>
                          <div>
                            <validation-provider
                              #default="{ errors }"
                              name="Password"
                              rules="required"
                            >
                              <div class="form-group">
                                <label class="control-label">Password</label>
                                <input
                                  class="form-control"
                                  type="password"
                                  v-model="form.password"
                                  :state="errors.length > 0 ? false : null"
                                  :class="
                                    errors.length > 0 ? 'is-invalid' : null
                                  "
                                  placeholder="Password"
                                  required="required"
                                />
                              </div>
                              <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </validation-observer>
                </tab-content>
              </form-wizard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import formMixins from "../../mixins/form";

export default {
  name: "CreateHealthWorker",
  data() {
    return {
      form: {
        name: "",
        surname: "",
        gender: null,
        age: "",
        cadre: "",
        department: "",
        email: "",
        password: "",
        image: ''
      },
      options: [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
      ],
    };
  },
  mixins: [formMixins],
  methods: {
    ...mapActions({
      registerHealthWorker: "healthworkers/registerHealthWorker",
    }),
    handleSubmit() {
      this.form.gender = this.form.gender.value;
      this.registerHealthWorker(this.transformToFormData(this.form)).then((res) => {
        if (res.status === 200 || res.status === 201) {
          this.$vToastify.success("Record Added successfully!");
          this.resetFormFields(this.form);
        } else {
          this.$vToastify.error("Error Occured");
        }
      });
    },
    handleFile(e) {
      this.form.image = e.target.files[0]
    },
    validatePersonalDetails() {
      return new Promise((resolve, reject) => {
        this.$refs.personalDetailsRef.validate().then((success) => {
          if (success) {
            resolve(true);
          } else {
            reject();
          }
        });
      });
    },
    validateAdditionalInfo() {
      return new Promise((resolve, reject) => {
        this.$refs.additionalInfoRef.validate().then((success) => {
          if (success) {
            resolve(true);
          } else {
            reject();
          }
        });
      });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>