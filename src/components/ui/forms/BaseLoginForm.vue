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
import { mapActions } from "vuex";

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
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    handleForm() {
      this.$refs.loginFormRef.validate().then((success) => {
        if (success) {
          this.login(this.form)
            .then(() => {
                this.$router
                .replace({ name: "dashboard" })
                .then(() => {
                  this.$vToastify.success("👋 You have successfully logged in. Now you can start to explore!", 
                  `Welcome ${this.$store.state.auth.user.name}`
                  ); 
                })
            })
            .catch((e) => {
              console.log(e.response.data);
            });
        }
      });
    },
  },
};
</script>

<style>
</style>