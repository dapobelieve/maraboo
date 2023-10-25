<template>
  <div class="min-w-sm border drop-shadow-lg rounded-[20px] max-w-lg w-full">
   
    <div
      class="bg-gray-50 p-6 relative rounded-[20px] shadow ring-opacity-5 ring-black"
    >
      <div
        v-show="loading"
        style="background-color: rgba(12, 10, 10, 83%)"
        class="absolute top-0 left-0 w-full h-full bg-black rounded z-10"
      ></div>
      <div class="relative">
        <div
          class="w-full mb-4 flex flex-col after:content- relative after:absolute after:w-full after:h-[0.2px] after:bottom-[-14px] after-mt-8 after:bg-slate-700"
        >
          <div class="text-slate-400 mb-4">1. {{ $t('calculator.send') }}</div>
          <div
            class="relative mb-4 pr-4 flex justify-between shadow-sm rounded bg-white items-center"
          >
     
            <input
              v-model="computedSendAmount"
              :placeholder="$t('calculator.input-placeholder')"
              type="text"
              :maxlength="amountLimit"
              @focus="activeInput = 'send'"
              @keydown="keypressed"
              class="h-10 focus:outline-none w-full px-4 py-6 rounded bg-white"
            />
            <CountrySelector 
            v-model="form.from"  
            :disabled="disableInput"
            />
            <div
              class="after:content- after:absolute after:w-[1px] after:h-[80%] after:top-[0.3rem] after:right-[6rem] after:bg-gray-400"
            ></div>
          </div>
          <div class="ml-8 mb-6">
            <span class="font-bold">{{ $t('calculator.exchg-rate') }}</span>
          </div>
          <div class="inline-flex items-center ml-auto">
            <div class="mr-6">
              <img class="h-4 md:h-6" src="~/assets/images/trend.svg" />
            </div>
            <div class="text-purple lg:mr-16 md:mr-0">
              <span class="mr-"> 1CAD = </span>
              <span
                style="line-height: 2px"
                class="text-4xl font-bold relative"
              >
                {{ String(rate).split(".")[0] }}.<sub class="relative top-0">{{
                  String(rate).split(".")[1]
                }}</sub>
              </span>
              XOF
            </div>
          </div>
        </div>
        <div
          class="mb-4 after:content- relative after:absolute after:w-full after:h-[0.2px] after:bottom-[-10px] after-mt-8 after:bg-gray-700"
        >
          <div class="flex pt-4 justify-between items-center">
            <div>
              <small class="text-sm font-extrabold text-gray-600"
                >Delivery method & fees</small
              >
            </div>
            <CustomSelect 
              v-model="form.payout_method"  
              :feeMethod="payOut.methods"
              :default="payOut.methods[0].key"
              @payOutFee="payOutFee"
              />
            <!-- <select
              name="cars"
              class="bg-purple select text-white text-sm font-bold w-40 py-1 px-2 rounded"
              v-model="form.payout_method"
            >
              <option
                v-for="(method, index) in payOut.methods"
                :value="method.value"
              >
                {{ method.key }}  
              </option>
            </select> -->
          </div>
          <div class="mt-8">
            <div class="text-slate-800 flex flex-col text-sm">
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="h-4 w-4 font-bold xl inline-flex justify-center items-center rounded-sm text-white"
                  ></span>
                </div>
                <div class="amount inline-block w-28">
                  {{ computedPayoutMethodFee }} {{ form.from.currency.toUpperCase() }}
                </div>
                <span class="purpose">{{ payOutFeeType }}</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="h-4 w-4 font-bold xl inline-flex justify-center items-center rounded-sm text-white"
                  ></span>
                </div>
                <div class="amount inline-block w-28">
                  {{ computedPayinMethodFee }} {{ form.from.currency.toUpperCase() }}
                </div>
                <span class="purpose">{{ payInFeeType }}</span>
              </div>
              
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="h-4 w-4 font-bold xl inline-flex justify-center items-center rounded-sm text-white"
                  ></span>
                </div>
                <div class="amount inline-block w-28">
                  {{ _2dp(results.our_fee) }}
                  {{ form.from.currency.toUpperCase() }}
                </div>
                <span class="purpose">Our fee</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div
                  class="w-6 after:content after:absolute after:w-0.5 after:h-full after:bg-purple after:top-[13px] after:right-[15px] relative"
                >
                  <span
                    class="bg-purple h-4 w-4 font-bold text-2xl pb-1 inline-flex justify-center items-center rounded-sm text-white"
                    >-</span
                  >
                </div>
                <div class="amount inline-block w-28">
                  {{ _2dp(results.total_fees) }}
                  {{ form.from.currency.toUpperCase() }}
                </div>
                <span class="purpose">Total fees</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div
                  class="w-6 after:content after:absolute after:w-0.5 after:h-full after:bg-purple after:top-[13px] after:right-[15px] relative"
                >
                  <span
                    class="bg-purple text-lg h-4 w-4 font-bold xl inline-flex justify-center items-center rounded-sm text-white"
                    >=</span
                  >
                </div>
                <div
                  class="amount inline-block text-black font-bold min-w-28 w-28"
                >
                  {{ _2dp(form.send_amount - results.total_fees) }}
                  {{ form.from.currency.toUpperCase() }}
                </div>
                <span class="purpose font-bold text-black">We convert</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="bg-purple h-4 w-4 pb-0.5 font-bold inline-flex justify-center items-center rounded-sm text-white"
                  >
                    {{ form.from.currency === "CAD" ? "x" : "÷" }}
                  </span>
                </div>
                <div class="amount inline-block w-28">{{ rate }} CAD</div>
                <span class="purpose">Real exchange rate</span>
              </div>
              <div class="flex pt-6 justify-between gap-2">
            <div>
              <small class="text-sm font-extrabold text-gray-600"
                >Payment method & fees</small
              >
            </div>
            <CustomSelect 
              v-model="form.payin_method"  
              :feeMethod="payIn.methods"
              :default="payIn.methods[0].key"
              @payInFee="payInFee"
              />
            <!-- <select
              name="cars"
              class="bg-purple select text-white text-sm font-bold w-40 py-1 px-2 rounded"
              v-model="form.payin_method"
            >
              <option
                v-for="(method, index) in payIn.methods"
                :value="method.value"
              >
                {{ method.key }}
              </option>
            </select> -->
          </div>
            </div>
          </div>
        </div>
        
        <div class="w-full flex flex-col">
          <div class="text-slate-400 mb-4">2. {{ $t('calculator.receive') }}</div>
          <div
            class="relative mb-4 pr-4 flex shadow-sm rounded bg-white items-center"
          >
            <input
            disabled
              v-model="computedReceiveAmount"
              @keydown="keypressed"
              @focus="activeInput = 'receive'"
              class="h-10 focus:outline-none w-full px-4 py-6 rounded bg-white"
            />
            <CountrySelector
              v-model="form.to"
              @emitDataToParent="emitDataToParent"
              :disabled="disableInput"
            />
            <div
              class="after:content- after:absolute after:w-[1px] after:h-[80%] after:top-[0.3rem] after:right-[6rem] after:bg-gray-400"
            ></div>
          </div>
        </div>

        <div v-if="calc_error" class="flex gap-2 bg-gray-100 rounded-md p-4">
          <img src="~/assets/images/error_icon.svg" />
          <span class="text-sm">
            Amount Limit Exceeded
          </span>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
const DEBOUNCE_DELAY = 500;
const defaultWaemu = {
  name: "Benin",
  flag: "benin",
  currency: "xof",
};

import useApi from "~/composables/useApi";
import CountrySelector from "./CountrySelector.vue";

const defaultCanada = {
  name: "Canada",
  flag: "canada",
  currency: "cad",
};
export default {
  components: {
    CountrySelector,
  },
  props: {
    country: String,
  },
  data() {
    const isCountryDefined = this.country && typeof this.country == "string";


    return {
      calc_error: null,
      country_name: "cote_d_ivoire",
      currencies: {
        CAD: {
          method: "xpresscash",
          methods: [
            {
              key: "Xpress Cash - 6 CAD fee",
              value: "xpresscash",
            },
            {
              key: "Bank Transfer (ACH) - 6 CAD fee",
              value: "bank_transfer_ach",
            },
            {
              key: "Mobile Money - 6 CAD fee",
              value: "mobile_money",
            },
            {
              key: "Credit Ecobank Account - 2.5 CAD fee",
              value: "credit_ecobank_account"
            }
          ],
        },
        XOF: {
          method: "interac",
          methods: [
            {
              key: "Interac - 2.5 CAD fee",
              value: "interac",
            },
            // {
            //   key: "Ecobank Debit",
            //   value: "debit",
            // },
          ],
        },
      },
      loading: false,
      payOutFeeType: "Xpress Cash",
      payInFeeType: "Interac",
      form: {
        from: {
          name: isCountryDefined ? (isCountryDefined ? this.country.replace("-", " ") : "Côte d'Ivoire") : "Canada",

          flag: isCountryDefined ? (isCountryDefined ? this.country.toLowerCase().replace("-", "").replace("'", "i")
              : "cotedivoire") : "canada",

          currency: isCountryDefined ? "xof" : "cad",
        },
        to: {
          name: isCountryDefined ? "Canada" : (isCountryDefined ? this.country.replace("-", " ") : "Côte d'Ivoire"),

          flag: isCountryDefined ? "canada" : (isCountryDefined ? this.country.toLowerCase().replace("-", "").replace("'", "i")
              : "cotedivoire"),

          currency:  isCountryDefined ? "cad" : "xof",
        },
        send_amount: null,
        payout_method: "xpresscash",
        payin_method: "interac",
        receive_amount: null,
      },
      rate: 0.0,
      activeInput: null,
      results: {
        converted: 0,
        our_fee: 0,
        pay_in_fee: 0,
        payout_fee: 0,
        total_fees: 0,
        we_convert: 0,
        other_options: []
      },
      apiCalling: false,
      disabled: false,
    };
  },
  watch: {
    "form.payout_method": {
      handler: function (newVal) {
        console.log(this.form.payout_method)
        const valueToSend = this.form[`${this.activeInput}_amount`];
        if (this.activeInput === "send") {
          this.apiCalling = true;
         
          // console.log(this.form.from.currency)
          this.doConversion(valueToSend)
          .then((res) => {
            const {converted, ...rest } = res;
            this.results = {...rest}
            this.form.receive_amount = this._2dp(converted);
            console.log(this.results)
          })
          .finally(() => {
            this.apiCalling = false;
          })
        } 
        // else {
        //   this.apiCalling = true;
        //   console.log(this.form.from.currency)
        //   this.doConversion(this.form.from.currency, valueToSend)
        //     .then((res) => {
        //       if (res) {
        //         const { converted, ...rest } = res;
        //             this.form.receive_amount = this._2dp(converted);
        //             // console.log(converted)
        //           // else { 
        //           //   this.form.send_amount = this._2dp(xof_amount);
        //           // }
        //         this.results = { ...rest };
        //       }
        //     })
        //     .finally(() => {
        //       this.apiCalling = false;
        //     });
        // }
      },
    },
    "form.payin_method": {
      handler: function (newVal) {
        console.log(this.form.payin_method) 
        const valueToSend = this.form[`${this.activeInput}_amount`];
        if (this.activeInput === "send") {
          this.apiCalling = true;
         
          this.doConversion(this.form.from.currency, valueToSend, this.form.to.currency)
          .then((res) => {
            const {converted, ...rest } = res;
            this.results = {...rest}
            this.form.receive_amount = this._2dp(converted);
            // console.log(this.results)
          })
          .finally(() => {
            this.apiCalling = false;
          })
        } 
        // else {
        //   this.apiCalling = true;
        //   console.log(this.form.from.currency)
        //   this.doConversion(this.form.from.currency, valueToSend)
        //     .then((res) => {
        //       if (res) {
        //         const { converted, ...rest } = res;
        //             this.form.receive_amount = this._2dp(converted);
        //             // console.log(converted)
        //           // else { 
        //           //   this.form.send_amount = this._2dp(xof_amount);
        //           // }
        //         this.results = { ...rest };
        //       }
        //     })
        //     .finally(() => {
        //       this.apiCalling = false;
        //     });
        // }
      },
    },
    "form.send_amount": {
      handler: debounce(function (newVal, oldVal) {
        if (newVal === null) {
          this.resetResults();
          this.form.receive_amount = null;
        }
        if (this.activeInput === "send") {
          if (!this.apiCalling && newVal !== oldVal) {
            this.apiCalling = true;

            this.doConversion(newVal)
              .then((res) => {
                if (res) {
                  const { converted, ...rest } = res;
                  this.form.receive_amount = this._2dp(converted);

                  this.results = { ...rest };
                  console.log(this.results)
                }
              })
              .finally(() => {
                this.apiCalling = false;
              });
          }
        }
      }, DEBOUNCE_DELAY),
    },
    "form.receive_amount": {
      handler: debounce(function (newVal, oldVal) {
        if (newVal === null) {
          this.resetResults();
          this.form.send_amount = null;
        }
        if (this.activeInput === "receive") {
          if (!this.apiCalling && newVal !== oldVal) {
            this.apiCalling = true;
            this.doConversion(this.form.from.currency, Number(newVal / this.rate), this.form.to.currency)
              .then((res) => {
                const {  ...rest } = res;
              
                // this.form.send_amount = user_pays + total_fees
                // this.form.send_amount = this.form.send_amount.value 
                // if (this.form.from.currency === "xof") {
                //   this.form.send_amount = this._2dp(xof_amount);
                // } else {
                //   this.form.send_amount = this._2dp(cad_amount);
                // }
                this.results = { ...rest };

                this.form.send_amount = this._2dp(this.results.we_convert + this.results.total_fees)
                 

              })  
              .finally(() => {
                this.apiCalling = false;
              });
          }
        }
      }, DEBOUNCE_DELAY),
    },
    "form.from.currency"(newValue, oldValue) {
      this.form.to = newValue === "cad" ? defaultWaemu : defaultCanada;
      // if (newValue === "xof") {
      //   this.form.method = "interac";
      // } else {
      //   this.form.method = "cash_pickup";
      // }
      this.form.send_amount = null;
      this.resetResults();
    },
    "form.to.currency"(newValue, oldValue) {
      this.form.from = newValue === "cad" ? defaultWaemu : defaultCanada;
      this.form.receive_amount = null;
      this.resetResults();
    },
  },
  methods: {
    resetResults() {
      this.results = {
        converted: 0,
        our_fee: 0,
        pay_in_fee: 0,
        payout_fee: 0,
        total_fees: 0,
        we_convert: 0,
      };
    },
    keypressed(event) {
      if (!/[\d\.\-]|Backspace/.test(event.key)) {
        event.preventDefault();
      }
    },
    _2dp(_number = 0) {
      return Number(_number?.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    },
    async doConversion(send_amount) {
      this.calc_error = null;
      try{
          if (send_amount) {
          return await useApi().calculate({
            payin_method: this.form.payin_method,
            payout_method: this.form.payout_method,
            payin_market: 'canada',
            payout_market: this.country_name,
            amount: send_amount,
            mode: 'send',
          });
          } else {
            // throw new Error("Params incomplete");
          }
      }
      catch(error){
        this.calc_error = error.response.data.detail
      }
    },
    emitDataToParent(data) {
      //Emit an event with the data you want to pass
      this.$emit("dataToParent", data);
      this.country_name = data.country
      console.log(this.country_name)
    },
    payOutFee(data){
      this.form.payout_method = data
    },
    payInFee(data){
      this.form.payin_method = data
    }
  },
  computed: {
    computedSendAmount: {
      get() {
        if (this.form.send_amount === null || this.form.send_amount === "") {
          return "";
        }
        return this.form.send_amount.toLocaleString();
      },
      set(value) {
        if (!value) {
          this.form.send_amount = null;
          return;
        }
        const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
        if (!isNaN(numValue)) {
          this.form.send_amount = numValue;
        }
      },
    },
    computedReceiveAmount: {
      get() {
        if (
          this.form.receive_amount === null ||
          this.form.receive_amount === ""
        ) {
          return "";
        }
        return this.form.receive_amount.toLocaleString();
      },
      set(value) {
        if (!value) {
          this.form.receive_amount = null;
          return;
        }
        const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
        if (!isNaN(numValue)) {
          this.form.receive_amount = numValue;
        }
      },
    },
    computedPayoutMethodFee() {
       if (this.form.payout_method === "xpresscash") {
        this.payOutFeeType = "Xpress Cash fee";
        return this._2dp(this.results.payout_fee);
      } 
      else if (this.form.payout_method === "bank_transfer_ach") {
        this.payOutFeeType = "Bank Transfer Ach fee";
        return this._2dp(this.results.payout_fee);;
      }
      else if (this.form.payout_method === "mobile_money") {
        this.payOutFeeType = "Mobile Money fee";
        // console.log(this._2dp(this.results.pay_in_fee))
        return this._2dp(this.results.payout_fee);
      } 
      else if(this.form.payout_method === "credit_ecobank_account") {
        this.payOutFeeType = "Credit Ecobank Account fee ";
        return this._2dp(this.results.payout_fee);
      }
    },
    computedPayinMethodFee() {
       if (this.form.payin_method === "interac") {
        this.payInFeeType = "Interac fee";
        return this._2dp(this.results.pay_in_fee);
      } 

    },
    currencyKeys() {
      return Object.keys(this.currencies);
    },
    payOut() {
      if(this.form.from.currency === 'cad'){
        return this.currencies[this.form.from.currency.toUpperCase()];
      }
      else{
        return this.currencies[this.form.to.currency.toUpperCase()];
      }
      
    },
    payIn() {
      if(this.form.to.currency === 'xof'){
        return this.currencies[this.form.to.currency.toUpperCase()]
      }
      else{
        return this.currencies[this.form.from.currency.toUpperCase()];
      }
      
    },
    disableInput() {
      if (this.country && typeof this.country == "string") {
        return (this.disabled = true);
      } else {
        return (this.disabled = false);
      }
    },
    amountLimit(){
      return this.form.from.currency == 'cad' ? 5 : 8
    }
  },
  async mounted() {
    const { currency_value } = await useApi().exchangeRate();
    this.rate = this._2dp(currency_value);

  },
};
</script>

<style scoped lang="scss">
.select {
  padding-right: 5px;
  font-size: 16px;
  line-height: 1;
  border: 0;
  border-radius: 5px;
  height: 34px;
  background: url(https://maraboo.netlify.app/caret-down-white.svg) no-repeat
    right #5f19f2;
  -webkit-appearance: none;
  background-position-x: 134px;
}
</style>
