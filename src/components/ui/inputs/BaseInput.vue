<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <div class="form-group">
      <label class="form-label">
        <slot />
      </label>
      <input
        class="form-control"
        :type="inputType"
        :state="errors.length > 0 ? false : null"
        :class="errors.length > 0 ? 'is-invalid' : null"
        :value="value"
        :readonly="readonly"
        :placeholder="placeholder"
        @input="handleInput"
      />
      <div v-if="name === 'Password'" class="show-hide" @click="showPassword">
        <span class="mr-2 show" v-if="inputType === 'password'"> </span>
        <span class="mr-2 hide" v-if="inputType === 'text'"> </span>
      </div>
      <small class="text-danger">{{ errors[0] }}</small>
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    // show/hide password
    showPassword: function () {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
  },
};
</script>

<style scoped>
.is-invalid {
  border: 1px solid #d42525 !important;
}
.show-hide {
 top: 48px !important;
}
</style>