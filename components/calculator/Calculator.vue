<template>
  <div id="exchange-rate" class="min-w-sm  border-2 border-black drop-shadow-lg rounded-[20px] max-w-lg w-full">

    <div class="bg-white relative rounded-[20px] shadow ring-opacity-5 ring-black">
      <div v-show="loading" style="background-color: rgba(12, 10, 10, 83%)"
        class="absolute top-0 left-0 w-full h-full bg-black rounded z-10"></div>
      <div class="relative">
        <div
          class="w-full mb-4 flex flex-col after:content- relative after:absolute after:w-full after:bottom-[-14px] after-mt-8 after:bg-slate-700">
          <div class="bg-[#FAFAFB] border-b rounded-t-[20px] py-4 px-6 lg:py-5 lg:px-8">
            <div class="mt-2 text-[#868686] text-sm"> {{ $t("calculator.send") }}</div>
            <div class="relative flex justify-between rounded items-center">

              <input v-model="computedSendAmount" :placeholder="$t('calculator.input-placeholder')" type="text"
                :maxlength="amountLimit" @focus="activeInput = 'send'" @keydown="keypressed"
                class="h-10 bg-transparent text-[28px] focus:outline-none w-full py-6" />
              <CountrySelector v-model="form.from" :disabled="disableInput" :waemu_coming_soon="waemu_coming_soon" />
              <div
                class="after:content after:absolute after:w-[1px] after:h-[60%] after:top-[0.6rem] after:right-[6rem] after:bg-gray-400">
              </div>
            </div>
          </div>
          <div class="px-6 lg:px-8 my-5 flex justify-center">
            <div>
              <span class="font-normal text-sm lg:text-[16px]">{{ $t("calculator.exchg-rate") }}</span>
            </div>
            <div class="inline-flex items-center ml-auto">
              <div class="mr-2">
                <img class="h-[10px]" src="~/assets/images/trend-green.svg" />
              </div>
              <div class="text-purple font-normal text-sm lg:text-[16px]">
                <span> 1CAD = </span>
                <span class="relative">
                  {{ String(rate).split(".")[0] }}.{{
                    String(rate).split(".")[1]
                  }}
                </span>
                XOF
              </div>
            </div>
          </div>
        </div>
  
        <div class="px-6 lg:px-8 mb-4 after:content- relative after:absolute after:w-full after-mt-8 after:bg-gray-700">
          <div class="flex pb-4 opacity-30 justify-between items-center gap-2">
            <div>
              <small class="text-sm lg:text-[16px] text-[#313131]">Payment method</small>
            </div>
           
            <CustomSelect v-model="form.payin_method" :feeMethod="payIn.methods" :default="payIn.methods[0].key"
              @payInFee="payInFee" />
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
          <div class="flex gap-2 justify-between items-center">
            <div>
              <small class="text-sm lg:text-[16px] text-black">Delivery method</small>
            </div>
            <CustomSelect v-model="form.payout_method" :feeMethod="payOut.methods" :default="payOut.methods[1].key"
              @payOutFee="payOutFee" :country="country_name" :fee="results.other_options"/>
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
            <div class="text-black flex flex-col text-[16px]">
              <div class="inline-flex mb-2 items-center justify-between pl-2">

                <div class="amount ml-3 lg:ml-6 inline-block w-28">
                  {{ computedPayoutMethodFee }} <span class="opacity-40">{{ form.from.currency.toUpperCase() }}</span>
                </div>
                <span class="purpose">{{ payOutFeeType }}</span>
              </div>
              <div class="inline-flex mb-2 items-center justify-between pl-2">

                <div class="amount ml-3 lg:ml-6 inline-block w-28">
                  {{ computedPayinMethodFee }} <span class="opacity-40">{{ form.from.currency.toUpperCase() }}</span>
                </div>
                <span class="purpose">{{ payInFeeType }}</span>
              </div>

              <div class="inline-flex mb-2 items-center justify-between pl-2">

                <div class="amount ml-3 lg:ml-6 inline-block w-28">
                  {{ _2dp(results.our_fee) }}
                  <span class="opacity-40">
                    {{ form.from.currency.toUpperCase() }}
                  </span>
                </div>
                <span class="purpose">Our fee</span>
              </div>
              <div class="inline-flex mb-2 items-center">
                <div
                  class="w-6 after:content after:absolute after:w-[0.5px] after:h-[70%] after:bg-purple after:top-[20px] after:right-[12px] relative">
                  <span
                    class="bg-white border border-purple text-2xl pb-1 font-thin inline-flex justify-center items-center rounded-full w-5 h-5 text-purple">-</span>
                </div>
                <div class="flex items-center justify-between w-full lg:pl-2">
                  <div class="amount inline-block w-28">
                    {{ _2dp(results.total_fees) }}
                    <span class="opacity-40">{{ form.from.currency.toUpperCase() }}</span>
                  </div>
                  <span class="purpose">Total fees</span>
                </div>
              </div>
              <div class="inline-flex mb-2 items-center">
                <div
                  class="w-6 after:content after:absolute after:w-[0.5px] after:h-[65%] after:bg-purple after:top-[21px] after:right-[12px] relative">
                  <span
                    class="bg-white border border-purple pb-0.5 text-lg font-thin inline-flex justify-center items-center rounded-full w-5 h-5 text-purple">=</span>
                </div>
                <div class="flex items-center justify-between w-full lg:pl-2">
                  <div class="amount inline-block text-black font-bold min-w-28 w-28">
                    {{ _2dp(form.send_amount - results.total_fees) }}
                    <span class="opacity-40 font-normal">{{ form.from.currency.toUpperCase() }}</span>
                  </div>
                  <span class="purpose font-bold text-black">We convert</span>
                </div>
              </div>
              <div class="inline-flex mb-2 items-center">
                <div class="w-6">
                  <span
                    class="bg-white border border-purple text-lg pb-1 font-thin inline-flex justify-center items-center h-5 w-5  rounded-full text-purple">
                    {{ form.from.currency === "cad" ? "x" : "÷" }}
                  </span>
                </div>
                <div class="flex items-center justify-between w-full lg:pl-2">
                  <div class="amount inline-block w-28">{{ rate }} <span class="opacity-40">CAD</span></div>
                  <span class="purpose">Real exchange rate</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="w-full flex flex-col mt-7 bg-[#FAFAFB] border-t rounded-b-[20px] py-4 px-6 lg:py-5 lg:px-8">
          <div class="text-[#868686] text-sm">{{ $t('calculator.receive') }}</div>
          <div class="relative flex rounded items-center">
            <input v-model="computedReceiveAmount" @keydown="keypressed" @focus="activeInput = 'receive'"
              class="h-10 bg-transparent text-[28px] focus:outline-none w-full py-6" />
            <CountrySelector v-model="form.to" :cad_coming_soon="cad_coming_soon" @emitDataToParent="emitDataToParent"
              :disabled="disableInput" :providers="computedProviders" />
            <div
              class="after:content- after:absolute after:w-[1px] after:h-[60%] after:top-[0.6rem] after:right-[6rem] after:bg-gray-400">
            </div>
          </div>

          <!-- this.form.payout_method -->
          <div v-if="form.payout_method === 'Select'" class="flex gap-2 bg-gray-100 rounded-md mt-4 p-4">
            <img src="~/assets/images/warning_info.svg" />
            <span class="text-sm">
              Select a delivery method
            </span>
          </div>

          <div v-if="send_amount && calc_error" class="flex gap-2 bg-gray-100 rounded-md mt-4 p-4">
            <img src="~/assets/images/error_icon.svg" />
            <span class="text-sm">
              {{ calc_error }}
            </span>
          </div>
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
      waemu_coming_soon: true,
      cad_coming_soon: true,
      country_name: "cote_d_ivoire",
      currencies: {
        CAD: {
          method: "xpresscash",
          methods: [
            {
              key: "Xpress Cash",
              value: "xpresscash",
              info: "Withdraw cash at any Ecobank ATM or Xpress point in WAEMU"
            },
            {
              key: "Mobile Money",
              value: "mobile_money",
              info: "Add money to the following mobile money wallets: MTN - Moov - Flooz -Orange money -Moov -Moby Cash -Free - T-money"
            },
            {
              key: "Bank Transfer (ACH)",
              value: "bank_transfer_ach",
              info: "Send money to all banks in all WAEMU countries"
            },
            {
              key: "Credit Ecobank Account",
              value: "credit_ecobank_account",
              info: "Instantly send money to any ecobank account"
            }
          ],
        },
        XOF: {
          method: "interac",
          methods: [
            {
              key: "Interac",
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
      payOutFeeType: "Xpress Cash fee",
      payInFeeType: "Interac",
      form: {
        from: {
          name: "Canada",

          flag: "canada",

          currency: "cad",
        },
        to: {
          name:  isCountryDefined ? this.country_name : "Cote d'Ivoire",

          flag: isCountryDefined ? this.country.toLowerCase().replace("-", "").replace("'", "i")
              : "cotedivoire",

          currency: "xof",
        },
        send_amount: 100,
        payout_method: "mobile_money",
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
        other_options: null
      },
      apiCalling: false,
      disabled: false,
      mode: 'send',
      mobile_money_providers: [
        {
          "id": "5b68fe68-3a24-4341-bc09-690350fca432",
          "provider_name": "hub2",
          "country_code": "CI",
          "country_name": "cote d'ivoire",
          "operator": "Orange"
        },
        {
          "id": "142691fc-3eab-4c71-810b-a33770654397",
          "provider_name": "hub2",
          "country_code": "CI",
          "country_name": "cote d'ivoire",
          "operator": "MTN"
        },
        {
          "id": "18b403fc-586c-4e74-8c9b-c3b2ae110e4d",
          "provider_name": "hub2",
          "country_code": "CI",
          "country_name": "cote d'ivoire",
          "operator": "Moov"
        },
        {
          "id": "d2436ca6-4f51-4d4f-9153-95628f0b70af",
          "provider_name": "hub2",
          "country_code": "SN",
          "country_name": "senegal",
          "operator": "Orange"
        },
        {
          "id": "d002e6f9-f900-4cb2-8425-50d0c6bc0d15",
          "provider_name": "hub2",
          "country_code": "SN",
          "country_name": "senegal",
          "operator": "Free"
        },
        {
          "id": "aca80f09-8a9f-4d2a-b7a5-d4c8111837e7",
          "provider_name": "hub2",
          "country_code": "SN",
          "country_name": "senegal",
          "operator": "Emoney"
        },
        {
          "id": "5d6ed2c3-135b-4b17-b0c4-19c125b6012c",
          "provider_name": "hub2",
          "country_code": "CI",
          "country_name": "cote d'ivoire",
          "operator": "Ecobank"
        },
        {
          "id": "b3cf248d-9560-4313-b439-dacb06497329",
          "provider_name": "hub2",
          "country_code": "ML",
          "country_name": "mali",
          "operator": "Orange"
        },
        {
          "id": "4eec634b-0e3e-4fa9-b539-618c4ad9c871",
          "provider_name": "hub2",
          "country_code": "ML",
          "country_name": "mali",
          "operator": "Mobicash"
        },
        {
          "id": "0e84ae64-39ee-4346-bd66-888f890730a5",
          "provider_name": "hub2",
          "country_code": "BF",
          "country_name": "burkina faso",
          "operator": "Orange"
        },
        {
          "id": "6fc3bd0e-1869-4a57-ad91-21c2d06ea824",
          "provider_name": "hub2",
          "country_code": "BJ",
          "country_name": "benin",
          "operator": "Moov"
        },
        {
          "id": "0ef69961-466f-4590-9d5f-5d64db157ebd",
          "provider_name": "hub2",
          "country_code": "BJ",
          "country_name": "benin",
          "operator": "MTN"
        },
        {
          "id": "44386322-97e5-4aec-bec2-c1bea78b86e2",
          "provider_name": "hub2",
          "country_code": "TG",
          "country_name": "togo",
          "operator": "Moov"
        },
        {
          "id": "4ae9aeab-f997-4f5b-84f7-29c3fbbd8d24",
          "provider_name": "hub2",
          "country_code": "BF",
          "country_name": "burkina faso",
          "operator": "Mobicash"
        },
        {
          "id": "41e6f99d-7e93-4de5-85c4-d468ba45c408",
          "provider_name": "hub2",
          "country_code": "TG",
          "country_name": "togo",
          "operator": "Togocell"
        },
        {
          "id": "67d7671c-c3b8-45e5-97a1-fc7e79812155",
          "provider_name": "hub2",
          "country_code": "SN",
          "country_name": "senegal",
          "operator": "Wave"
        },
        {
          "id": "6e31ee64-780d-475d-8b08-90cc29fd020f",
          "provider_name": "hub2",
          "country_code": "CI",
          "country_name": "cote d'ivoire",
          "operator": "Wave"
        }
      ]
    };
  },
  watch: {
    "form.to": {
      handler: function (newVal) {
        const valueToSend = this.form[`${this.activeInput}_amount`] || this.form.send_amount;

          this.apiCalling = true;
          if(valueToSend < 10000){
            this.mode = 'send'
          }
          else{
            this.mode = 'receive'
          }
        

          this.doConversion(valueToSend, this.mode)
            .then((res) => {
              const { user_pays, converted, ...rest } = res;
              this.results = { ...rest }
              if(this.mode === 'send'){
            this.form.receive_amount = this._2dp(converted);
            }
            else {
              this.form.send_amount = this._2dp(user_pays);
            }
              // this.form.receive_amount = this._2dp(converted);

              if (this.country_name !== 'guinea_bissau' || this.country_name !== 'niger') {
                  this.updateMethodKeys(this.results.other_options)
              }


            })
            .finally(() => {
              this.apiCalling = false
            })
      
      }
    },
    "form.payout_method": {
      handler: function (newVal) {
        // console.log(this.form.payout_method)
        const valueToSend = this.form[`${this.activeInput}_amount`] || this.form.send_amount;
        this.apiCalling = true;
        if(valueToSend < 10000){
            this.mode = 'send'
          }
          else{
            this.mode = 'receive'
          }
        // this.mode = 'send'

        // console.log(this.form.from.currency)
        this.doConversion(valueToSend, this.mode)
          .then((res) => {
            const {user_pays, converted, ...rest } = res;
            this.results = { ...rest }
            if(this.mode === 'send'){
            this.form.receive_amount = this._2dp(converted);
            }
            else {
              this.form.send_amount = this._2dp(user_pays);
            }
            this.updateMethodKeys(this.results.other_options)
            // console.log(this.results)
          })
          .finally(() => {
            this.apiCalling = false;
          })

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
          if(valueToSend < 10000){
            this.mode = 'send'
          }
          else{
            this.mode = 'receive'
          }
          // this.mode = 'send'

          this.doConversion(valueToSend, this.mode)
            .then((res) => {
              const { user_pays, converted, ...rest } = res;
              this.results = { ...rest }
              if(this.mode === 'send'){
            this.form.receive_amount = this._2dp(converted);
            }
            else {
              this.form.send_amount = this._2dp(user_pays);
            }
              // this.form.receive_amount = this._2dp(converted);
              this.updateMethodKeys(this.results.other_options)
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
            this.mode = 'send'

            this.doConversion(newVal, this.mode)
              .then((res) => {
                if (res) {
                  const { converted, ...rest } = res;
                  console.log(res)
                  this.form.receive_amount = this._2dp(converted);

                  this.results = { ...rest };
                  this.updateMethodKeys(this.results.other_options)
                  // console.log(this.results)
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
            this.mode = 'receive'
            
            this.doConversion(newVal, this.mode)
              .then((res) => {
                console.log(res)
                const { user_pays, we_convert, ...rest } = res;

                this.form.send_amount = this._2dp(user_pays)
                // this.form.send_amount = this.form.send_amount.value 
                // if (this.form.from.currency === "xof") {
                //   this.form.send_amount = this._2dp(xof_amount);
                // } else {
                //   this.form.send_amount = this._2dp(cad_amount);
                // }
                this.results = { ...rest };
                

                this.updateMethodKeys(this.results.other_options)


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
    updateMethodKeys(other_options) {
      this.currencies['CAD'].methods.forEach((method, index) => {
        if (other_options[index] && other_options[index].payout_fee) {
          const fee = `${other_options[index].payout_fee} CAD fee`;
          const splitIndex = method.key.indexOf(' - ');

          if (this.country_name === 'guinea_bissau' || this.country_name === 'niger') {
            if (method.value === 'mobile_money') {
              // Remove the value from splitIndex for 'Mobile Money'
              method.key = `Mobile Money`;
            } else if (method.value === 'bank_transfer_ach') {
              // Add the fee to 'Bank Transfer (ACH)'
              method.key =  method.key.slice(0, splitIndex) + " - " + other_options[1].payout_fee + ' CAD fee'
            }
          } else {
            if (splitIndex !== -1) {
              // Replace the value for all other cases
              method.key = method.key.slice(0, splitIndex) + " - " + fee;
            } else {
              method.key = `${method.key} - ${fee}`;
            }
          }
        }

      })
    },
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
    async doConversion(send_amount, mode) {
      this.calc_error = null;
      try {
        if (send_amount) {
          return await useApi().calculate({
            payin_method: this.form.payin_method,
            payout_method: this.form.payout_method,
            payin_market: 'canada',
            payout_market: this.country_name,
            amount: send_amount,
            mode: mode,
          });
        } else {
          // throw new Error("Params incomplete");
        }
      }
      catch (error) {
        this.calc_error = error.response.data.detail
      }
    },
    emitDataToParent(data) {
      //Emit an event with the data you want to pass
      this.$emit("dataToParent", data);
      this.country_name = data.country
      // console.log(this.country_name)
    },
    payOutFee(data) {
      this.form.payout_method = data
    },
    payInFee(data) {
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
          return "0";
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
        return this._2dp(this.results.payout_fee);
      }
      else if (this.form.payout_method === "mobile_money") {
        this.payOutFeeType = "Mobile Money fee";
        // console.log(this._2dp(this.results.pay_in_fee))
        return this._2dp(this.results.payout_fee);
      }
      else if (this.form.payout_method === "credit_ecobank_account") {
        this.payOutFeeType = "Credit Ecobank Account fee ";
        return this._2dp(this.results.payout_fee);
      }
      else {
        return '0'
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
      if (this.form.from.currency === 'cad') {
        return this.currencies[this.form.from.currency.toUpperCase()];
      }
      else {
        return this.currencies[this.form.to.currency.toUpperCase()];
      }

    },
    payIn() {
      if (this.form.to.currency === 'xof') {
        return this.currencies[this.form.to.currency.toUpperCase()]
      }
      else {
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
    amountLimit() {
      return this.form.from.currency == 'cad' ? 5 : 8
    },
    computedProviders() {
      if (this.form.payout_method === 'mobile_money') {
        return this.mobile_money_providers
      }
    }
  },
  async mounted() {
    const default_amount = this.form.send_amount;
    const { currency_value } = await useApi().exchangeRate();
    this.rate = this._2dp(currency_value);

    // console.log(default_amount)

    if (!this.apiCalling) {
      this.apiCalling = true;

      this.doConversion(default_amount)
        .then((res) => {
          if (res) {
            const { converted, ...rest } = res;
            this.form.receive_amount = this._2dp(converted);

            this.results = { ...rest };
            this.updateMethodKeys(this.results.other_options)
          }
        })
        .finally(() => {
          this.apiCalling = false
        })
    }

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
  background: url(https://maraboo.netlify.app/caret-down-white.svg) no-repeat right #5f19f2;
  -webkit-appearance: none;
  background-position-x: 134px;
}
</style>
