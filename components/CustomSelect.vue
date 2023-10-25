<template>
    <ClickOutside
    :do="
      () => {
        close();
      }
    "
  >
    <div class="custom-select" @click="toggleDropdown">
      <div class="select-value truncate text-white text-sm font-bold bg-purple w-40 py-1 px-2 ">{{ selectedOption }}</div>
      <ul class="select-options w-[220px] lg:w-[270px]" :class="{ 'open': isOpen }">
        <li
          v-for="(method, index) in feeMethod"
          :key="index"
          @click.stop="selectOption(method.key, method.value)"
        >
          {{ method.key }}
          <p class="text-[12px] italic" :class="{'hidden': method.value === 'interac'}"> Estimated time: 
            <span v-if="method.value === 'bank_transfer_ach'" class="font-semibold">up to 48 hours </span>
            <span v-else class="font-semibold"> Within minutes</span>
        </p>
        <p v-if="method.value === 'interac'" class="text-[12px] italic hidden"> Estimated time: 
            <span v-if="method.value === 'bank_transfer_ach'" class="font-semibold">up to 48 hours </span>
            <span v-else class="font-semibold"> Within minutes</span>
        </p>
        </li>
      </ul>
    </div>
    </ClickOutside>
  </template>
  
  <script>
  export default {
    props:{
        feeMethod: Array,
        default: String
    },
    data() {
      return {
        options: ['Option 1', 'Option 2', 'Option 3'], // Your options here
        selectedOption: this.default,
        isOpen: false,
      };
    },
    methods: {
      close(){
        this.isOpen = false;
      },
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option, value) {
        this.selectedOption = option;
        this.isOpen = false;
        this.$emit('payOutFee', value)
        this.$emit('payInFee', value)
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-select {
    position: relative;
    cursor: pointer;
   
  }
  
  .select-value {
    padding: 10px;
    border-radius: 4px;
    background: url(https://maraboo.netlify.app/caret-down-white.svg) no-repeat right #5f19f2;
    background-position-x: 130px;
  }
  
  .select-options {
    display: none;
    position: absolute;
    list-style: none;
    padding: 0;
    margin: 10px 100px 0 0;
    border: 1px solid rgba(243, 243, 243, 1);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px rgba(201, 201, 201, 0.25);
    z-index: 1;
  }
  
  .select-options.open {
    display: block;
  }
  
  .select-options li {
    padding: 10px;
    cursor: pointer;
  }
  
  .select-options li:hover {
    background-color: #ddd;
    border-radius: 8px;
  }
  </style>
  