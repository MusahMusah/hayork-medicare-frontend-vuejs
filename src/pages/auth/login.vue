<template>
  <div>
    <!-- page-wrapper Start-->
    <div class="p-0 container-fluid">
      <div class="m-0 row">
        <div class="p-0 col-12">
          <div class="login-card">
            <div>
              <div>
                <h2 class="logo">
                  Hayork Medicare
                </h2>
              </div>
              <div class="login-main">
                <b-card no-body>
                  <div class="login-main login-form-card">
                    <form class="theme-form">
                      <h4>Sign in to account</h4>
                      <p>Enter your email & password to login</p>
                      <div class="form-group">
                        <label class="col-form-label">Email Address</label>
                        <input
                          class="form-control"
                          type="email"
                          required=""
                          placeholder="Test@gmail.com"
                        />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input
                          class="form-control"
                          v-model="password"
                          autocomplete=""
                          :type="type"
                          name="login[password]"
                          required=""
                          placeholder="*********"
                        />
                        <div class="show-hide" @click="showPassword">
                          <span class="show" v-if="type === 'password'"> </span>
                          <span class="hide" v-if="type === 'text'"> </span>
                        </div>
                      </div>
                      <div class="mb-0 form-group">
                        <div class="p-0 checkbox">
                          <input id="checkbox1" type="checkbox" />
                          <label class="text-muted" for="checkbox1"
                            >Remember password</label
                          >
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- latest jquery-->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      type: "password",
      email: "test@admin.com",
      password: "",
      username: "",
      passwordjwt: "",
      submitted: false,
    };
  },
  methods: {
    // JWT authentication
    handleSubmit() {
      this.submitted = true;
    },
    // show/hide password
    showPassword: function () {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>