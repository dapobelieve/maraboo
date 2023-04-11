<template>
  <div>
    <label class="">
      <slot name="label"></slot>
    </label>
    <input
      class="bg-white h-14 flex justify-center mt-2 py-2 px-3 w-full border shadow-sm rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
      :value="modelValue"
      :disabled="disabled"
      :type="inputType"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small v-show="error" class="text-red-500">{{ errMsg }}</small>
  </div>
</template>

<script>
let instance = 0;
export default {
  props: {
    error: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "text",
    },
    errMsg: {
      type: String,
      default: "error",
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      instance: instance++,
      showPassword: false,
    };
  },
  computed: {
    inputType() {
      if (this.type === "password") {
        return this.showPassword ? "text" : "password";
      } else {
        return this.type;
      }
    },
  },
};
</script>

<style scoped></style>
