<template>
    <ClickOutside
    :do="
      () => {
        close();
      }
    "
  >
    <div class="custom-select" @click="toggleDropdown">
      <div class="relative select-value w-40 truncate lg:w-[220px] text-white text-sm lg:text-[16px] bg-purple font-bold  py-1 px-2 ">
        <span class="w-full">{{ selectedOption }}</span>
      <span class="absolute top-0 bottom-0 right-1 lg:mr-1 flex items-center bg-purple h-100"> <img  src="https://maraboo.netlify.app/caret-down-white.svg" alt="chev"></span>
      </div>
      <ul class="select-options left-[-100px] lg:left-[-40px] w-[270px]" :class="{ 'open': isOpen }">
        <li
          v-for="(method, index) in feeMethod"
          :key="index"
          @click.stop="selectOption(method.key, method.value)"
          class="truncate"
        >
          {{ method.key }}
          <p class="text-[12px] italic text-gray-500" :class="{'hidden': method.value === 'interac'}"> Estimated time: 
            <span v-if="method.value === 'bank_transfer_ach'" class="font-semibold text-black">up to 48 hours </span>
            <span v-else class="font-semibold text-black"> Within minutes</span>
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
    /* background: url(https://maraboo.netlify.app/caret-down-white.svg) no-repeat right #5f19f2;
    background-position-x: 120px; */
  }

 @media screen and (min-width: 1024px) {
  .select-value {
    background-position-x: 195px;
    max-width: none;
  }

 }
  
  .select-options {
    display: none;
    position: absolute;
    list-style: none;
    margin: 10px 10px 0 0;
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
    padding:10px 20px;
    cursor: pointer;
  }

  .select-options li:first-child{
    padding-top: 15px;
  }

  .select-options li:last-child{
    padding-bottom: 15px;
  }
  
  .select-options li:hover {
    background-color: #ddd;
    border-radius: 8px;
  }
  </style>
  