<template>
    <ClickOutside
    :do="
      () => {
        close();
      }
    "
  >
    <div class="custom-select" @click="toggleDropdown">
      <div :class="selectedOption == 'Interac' ? 'cursor-not-allowed text-[#1E1E1E] bg-[#C5C5C5]' : 'bg-purple text-white'" class="relative select-value w-40 truncate lg:w-[220px]  text-sm lg:text-[16px] font-bold  py-1 px-2 ">
        <span class="w-full">{{ selectedOption }} <span v-if="formattedFee"> - {{ formattedFee }} CAD fee</span>  </span>
      <span :class="selectedOption === 'Interac' ? '' : 'bg-purple'" class="absolute top-0 bottom-0 right-1 lg:mr-1 flex items-center h-100"> 
        <img class="block h-3 w-3" :src="selectedOption === 'Interac' ? '/caret-down.svg': 'https://maraboo.netlify.app/caret-down-white.svg' "  alt="chev"></span>
      </div>
      <ul class="select-options left-[-100px] lg:left-[-50px] w-[280px] no-scrollbar h-[272px] overflow-y-auto" :class="{ 'open': isOpen }">
        <li
          v-for="(method, index) in feeMethod"
          :key="index"
          @click.stop="(method.value === 'mobile_money') && ((country === 'guinea_bissau' || query === 'guinea_bissau') || (country === 'niger' || query === 'niger')) ? '' : selectOption(method.key, method.value)"
          class="flex items-center justify-between"
        > 
        <div v-if="(method.value === 'mobile_money') && ((country === 'guinea_bissau' || query === 'guinea_bissau') || (country  === 'niger' || query === 'niger'))" class="w-[80%] opacity-50 cursor-not-allowed">
               
          <p class="">{{ method.key }}   <span v-if="(country === 'guinea_bissau' || query === 'guinea_bissau') || (country ===  'niger' || query === 'niger')" class="text-[14px]">(Coming soon)</span></p> 

          <p class="text-[12px] italic text-gray-500" :class="{'hidden': method.value === 'interac'}"> 
            Estimated time: 
            
            <span v-if="method.value === 'bank_transfer_ach'" class="font-medium text-black">Up to 48 hours </span>

            <span v-else class="font-medium text-black"> Within minutes</span>
        </p>
        <p class="text-[#868686] pt-1 font-normal text-xs whitespace-break-spaces">{{ method.info }}</p>
        </div> 

      <div v-else class="w-[80%]">
        
        <p class="">{{ method.key }}  </p>

        <p class="text-[12px] italic text-gray-500" :class="{'hidden': method.value === 'interac'}"> 
          Estimated time: 
          
          <span v-if="method.value === 'bank_transfer_ach'" class="font-medium text-black">Up to 48 hours </span>

          <span v-else class="font-medium text-black"> Within minutes</span>
      </p>
      <p class="text-[#868686] pt-1 font-normal text-xs whitespace-break-spaces">{{ method.info }}</p>
    </div> 


      <div class="w-4 h-4" v-if="selectedOption === method.key">
        <img class="w-full" src="~/assets/images/check.svg"  alt="checked" />
      </div>
      </li>
      </ul>
    </div>
    </ClickOutside>
  </template>
  
  <script>
  export default {
    props:{
        feeMethod: Array,
        default: String,
        country: String,
        fee: Array,
        query: String
    },
    data() {
      return {
        selectedOption: this.default,
        isOpen: false,
      };
    },
    computed: {
      formattedFee(){
        if(this.fee && this.fee[0] && this.fee[0].payout_fee){
          if(this.query === 'niger' || this.query === 'guinea_bissau' || this.query === 'benin'){
            return `${this.fee[0].payout_fee} CAD fee`;
          }
          
        }
        if(this.fee && this.fee[1] && this.fee[1].payout_fee){
           return `${this.fee[1].payout_fee} CAD fee`;
        }
        // else if(this.country === 'guinea_bissau' || this.country === 'niger'){
        //   return ""
        // }
        else {
          return ""
        }
      }
    },
    methods: {
      close(){
        this.isOpen = false;
      },
      toggleDropdown() {
        if(this.selectedOption === 'Interac'){
          this.isOpen = false;
        }
        else{
          this.isOpen = !this.isOpen;
        }
       
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

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
  .custom-select {
    position: relative;
    cursor: pointer;
   
  }
  
  .select-value {
    padding: 12px 10px;
    border-radius: 10px;
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
  