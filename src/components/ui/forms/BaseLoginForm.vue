<template>
  <div class="login-main">
    <b-card no-body>
      <div class="login-main login-form-card">
        <validation-observer ref="loginFormRef" tag="form">
          <form @submit.prevent="handleForm" class="theme-form">
            <h4>Sign in to account</h4>
            <p>Enter your email & password to login</p>
            <BaseInput
              inputType="email"
              placeholder="Test@gmail.com"
              rules="email|required"
              v-model="form.email"
              name="Email Address"
            >
              Email Address
            </BaseInput>

            <BaseInput
              inputType="password"
              placeholder="***********"
              rules="required"
              v-model="form.password"
              name="Password"
            >
              Password
            </BaseInput>
            <div class="mb-0 form-group">
              <div class="p-0 checkbox">
                <input id="checkbox1" type="checkbox" />
                <label class="text-muted" for="checkbox1"
                  >Remember password</label
                >
              </div>
              <BaseButton> Sign In </BaseButton>
            </div>
          </form>
        </validation-observer>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      type: "password",
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState({
      activeUser: (state) => state.auth.user,
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    handleForm() {
      this.$refs.loginFormRef.validate().then((success) => {
        if (success) {
          this.login(this.form)
            .then(() => {
              if (this.activeUser.is_health_worker) {
                this.$router.replace({ name: "dashboard" }).then(() => {
                  this.$vToastify.success(
                    "👋 You have successfully logged in. Now you can start to explore!",
                    `Welcome ${this.$store.state.auth.user.name}`
                  );
                });
              } else {
                this.$router.replace({ name: "user-account", params: {id: this.activeUser.id} }).then(() => {
                  this.$vToastify.success(
                    "👋 You have successfully logged in. Now you can start to explore!",
                    `Welcome ${this.$store.state.auth.user.name}`
                  );
                });
              }
            })
            .catch((e) => {
              console.log(e.response.data.errors);
              if (e.response.status === 422) {
                Object.entries(e.response.data.errors.email).forEach(
                  ([, value]) => {
                    this.$vToastify.error(value);
                  }
                );
              } else if (e.response) {
                this.$vToastify.error(e.response.data.message);
              }
            });
        }
      });
    },
  },
};
</script>

<style>
</style>