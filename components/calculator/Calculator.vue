<template>
  <div class="min-w-sm max-w-lg w-full">
    <div
      class="bg-gray-50 p-6 relative shadow-md ring ring-1 ring-opacity-5 ring-black"
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
          <div class="text-slate-400 mb-4">1. You send:</div>
          <div class="relative mb-4 flex items-center origin">
            <input
              v-model="computedSendAmount"
              placeholder="Enter amount"
              type="text"
              @focus="activeInput = 'send'"
              @keydown="keypressed"
              class="h-10 shadow-sm focus:outline-none w-full px-4 py-6 rounded bg-white"
            />
            <select
              name="currencies"
              v-model="form.from_currency"
              class="absolute font-sm w-[6rem] bg-white rounded-r pl-4 focus:outline-none right-0 h-full"
            >
              <option v-for="curr in currencyKeys" :value="curr">
                {{ curr.toUpperCase() }}
              </option>
            </select>
            <div
              class="after:content- after:absolute after:w-[1px] after:h-[80%] after:top-[0.3rem] after:right-[6rem] after:bg-gray-400"
            ></div>
          </div>
          <div class="ml-8 mb-6">
            <span class="font-bold"> at the real exchange rate!</span>
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
          <div class="flex pt-4 justify-between">
            <div>
              <small class="font-extrabold text-gray-600"
                >Select {{ fromObject.method }} method:</small
              >
            </div>
            <select
              name="cars"
              class="bg-purple text-white text-sm font-bold w-40 py-1 px-2 rounded"
              v-model="form.method"
            >
              <option
                v-for="(method, index) in fromObject.methods"
                :value="method.value"
              >
                {{ method.key }}
              </option>
            </select>
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
                  {{ computedMethodFee }} {{ form.from_currency }}
                </div>
                <span class="purpose">{{ feeType }}</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="h-4 w-4 font-bold xl inline-flex justify-center items-center rounded-sm text-white"
                  ></span>
                </div>
                <div class="amount inline-block w-28">
                  {{ _2dp(results.our_fee) }} {{ form.from_currency }}
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
                  {{ _2dp(results.total_fees) }} {{ form.from_currency }}
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
                  {{ form.from_currency }}
                </div>
                <span class="purpose font-bold text-black">We convert</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="bg-purple h-4 w-4 pb-0.5 font-bold inline-flex justify-center items-center rounded-sm text-white"
                  >
                    {{ form.from_currency === "CAD" ? "x" : "÷" }}
                  </span>
                </div>
                <div class="amount inline-block w-28">{{ rate }} CAD</div>
                <span class="purpose">Real exchange rate</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col">
          <div class="text-slate-400 mb-4">2. Your recipient gets:</div>
          <div class="relative mb-4 flex items-center origin">
            <input
              v-model="computedReceiveAmount"
              @keydown="keypressed"
              @focus="activeInput = 'receive'"
              class="h-10 shadow-sm focus:outline-none w-full px-4 py-6 rounded bg-white"
            />
            <select
              name="currencies"
              v-model="form.to_currency"
              class="absolute font-sm w-[6rem] bg-white rounded-r pl-4 focus:outline-none right-0 h-full"
            >
              <option v-for="curr in currencyKeys" :value="curr">
                {{ curr.toUpperCase() }}
              </option>
            </select>
            <div
              class="after:content- after:absolute after:w-[1px] after:h-[80%] after:top-[0.3rem] after:right-[6rem] after:bg-gray-400"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import { calculate, exchangeRate } from "../../services/apiService";
const DEBOUNCE_DELAY = 500;
export default {
  data() {
    return {
      currencies: {
        CAD: {
          method: "Delivery",
          methods: [
            {
              key: "mobile money",
              value: "mobile",
            },
            {
              key: "cash pickup",
              value: "cash",
            },
          ],
        },
        XOF: {
          method: "Payment",
          methods: [
            {
              key: "visa / mastercad",
              value: "visa",
            },
            {
              key: "Ecobank Debit",
              value: "debit",
            },
          ],
        },
      },
      loading: false,
      feeType: "Mobile Money",
      form: {
        from_currency: "CAD",
        to_currency: "XOF",
        send_amount: null,
        method: "cash",
        receive_amount: null,
      },
      rate: 0.0,
      activeInput: null,
      results: {
        cad_amount: 0,
        cash_fee: 0,
        mobile_fee: 0,
        our_fee: 0,
        debit_fee: 0,
        visa_fee: 0,
        total_fees: 0,
        xof_amount: 0,
      },
      apiCalling: false,
    };
  },
  watch: {
    "form.method": {
      handler: function (newVal) {
        const valueToSend = this.form[`${this.activeInput}_amount`];
        if (this.activeInput === "receive") {
          this.apiCalling = true;
          this.doConversion(this.form.from_currency, undefined, valueToSend)
            .then((res) => {
              const { cad_amount, xof_amount, ...rest } = res;
              if (this.form.from_currency === "XOF") {
                this.form.send_amount = this._2dp(xof_amount);
              } else {
                this.form.send_amount = this._2dp(cad_amount);
              }
              this.results = { ...rest, cad_amount };
            })
            .finally(() => {
              this.apiCalling = false;
            });
        } else {
          this.apiCalling = true;
          this.doConversion(this.form.from_currency, valueToSend)
            .then((res) => {
              const { xof_amount, cad_amount, ...rest } = res;
              if (this.form.from_currency === "XOF") {
                this.form.receive_amount = cad_amount;
              } else {
                this.form.receive_amount = this._2dp(xof_amount);
              }
              this.results = { ...rest, cad_amount };
            })
            .finally(() => {
              this.apiCalling = false;
            });
        }
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
            this.doConversion(this.form.from_currency, newVal)
              .then((res) => {
                const { xof_amount, cad_amount, ...rest } = res;
                if (this.form.from_currency === "XOF") {
                  this.form.receive_amount = cad_amount;
                } else {
                  this.form.receive_amount = this._2dp(xof_amount);
                }
                this.results = { ...rest, cad_amount };
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
            this.doConversion(this.form.from_currency, undefined, newVal)
              .then((res) => {
                const { cad_amount, xof_amount, ...rest } = res;
                if (this.form.from_currency === "XOF") {
                  this.form.send_amount = this._2dp(xof_amount);
                } else {
                  this.form.send_amount = this._2dp(cad_amount);
                }
                this.results = { ...rest, cad_amount };
              })
              .finally(() => {
                this.apiCalling = false;
              });
          }
        }
      }, DEBOUNCE_DELAY),
    },
    "form.from_currency"(newValue, oldValue) {
      this.form.to_currency = newValue === "CAD" ? "XOF" : "CAD";
      if (newValue === "XOF") {
        this.form.method = "debit";
      } else {
        this.form.method = "cash";
      }
      this.form.send_amount = null;
      this.resetResults();
    },
    "form.to_currency"(newValue, oldValue) {
      this.form.from_currency = newValue === "CAD" ? "XOF" : "CAD";
      this.form.receive_amount = null;
      this.resetResults();
    },
  },
  methods: {
    resetResults() {
      this.results = {
        cad_amount: 0,
        cash_fee: 0,
        mobile_fee: 0,
        our_fee: 0,
        debit_fee: 0,
        visa_fee: 0,
        total_fees: 0,
        xof_amount: 0,
      };
    },
    keypressed(event) {
      if (!/[\d\.\-]|Backspace/.test(event.key)) {
        event.preventDefault();
      }
    },
    _2dp(_number) {
      return Number(_number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    },
    async doConversion(from_currency, send_amount, receive_amount) {
      if (send_amount || receive_amount) {
        return await calculate({
          method: this.form.method,
          from_currency,
          send_amount,
          receive_amount,
        });
      }
    },
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
    computedMethodFee() {
      if (this.form.method === "mobile") {
        this.feeType = "Mobile Money fee";
        return this._2dp(this.results.mobile_fee);
      } else if (this.form.method === "debit") {
        this.feeType = "Debit fee";
        return this._2dp(this.results.debit_fee);
      } else if (this.form.method === "visa") {
        this.feeType = "Mastercard/Visa fee";
        return this._2dp(this.results.visa_fee);
      } else {
        this.feeType = "Cash pickup fee ";
        return this.results.mobile_fee
          ? this._2dp(this.results.mobile_fee)
          : this._2dp(this.results.cash_fee);
      }
    },
    currencyKeys() {
      return Object.keys(this.currencies);
    },
    fromObject() {
      return this.currencies[this.form.from_currency];
    },
  },
  async mounted() {
    const { currency_value } = await exchangeRate();
    this.rate = this._2dp(currency_value);
  },
};
</script>

<style scoped></style>
