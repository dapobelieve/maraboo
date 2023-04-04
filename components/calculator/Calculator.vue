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
              class="h-10 shadow-sm focus:outline-none w-full px-4 py-6 rounded bg-white"
            />
            <select
              name="currencies"
              v-model="form.from_currency"
              class="absolute font-sm w-[6rem] rounded-r pl-4 focus:outline-none right-0 h-full"
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
                v-for="method in fromObject.methods"
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
                  {{ computedMethodFee }} CAD
                </div>
                <span class="purpose">{{ feeType }} fee</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="h-4 w-4 font-bold xl inline-flex justify-center items-center rounded-sm text-white"
                  ></span>
                </div>
                <div class="amount inline-block w-28">
                  {{ _2dp(results.our_fee) }} CAD
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
                  {{ _2dp(results.total_fees) }} CAD
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
                  class="amount inline-block text-black font-bold min-w-28 mr-2 w-28"
                >
                  {{ _2dp(results.cad_amount) }} CAD
                </div>
                <span class="purpose font-bold text-black">We convert</span>
              </div>
              <div class="inline-flex mb-1.5 items-center">
                <div class="w-6">
                  <span
                    class="bg-purple h-4 w-4 pb-0.5 font-bold inline-flex justify-center items-center rounded-sm text-white"
                    >x</span
                  >
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
              class="h-10 shadow-sm focus:outline-none w-full px-4 py-6 rounded bg-white"
            />
            <select
              name="currencies"
              v-model="form.to_currency"
              class="absolute font-sm w-[6rem] rounded-r pl-4 focus:outline-none right-0 h-full"
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
        method: null,
        receive_amount: null,
      },
      rate: 0.0,
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
    };
  },
  filters: {},
  watch: {
    form: {
      handler(val, oldVal) {
        this.calculate(val);
      },
      immediate: true,
      deep: true,
    },
    "form.from_currency"(newValue, oldValue) {
      this.form.to_currency = newValue === "CAD" ? "XOF" : "CAD";
    },
    "form.to_currency"(newValue, oldValue) {
      this.form.from_currency = newValue === "CAD" ? "XOF" : "CAD";
    },
  },
  methods: {
    _2dp(_number) {
      return Number(_number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    },
    calculate(data) {
      debounce(async (data) => {
        const {
          method,
          from_currency,
          send_amount,
          receive_amount,
          to_currency,
        } = data;
        if (
          (from_currency && send_amount && method) ||
          (to_currency && receive_amount && method)
        ) {
          const { xof_amount, ...rest } = await calculate(data);
          this.form.receive_amount = this._2dp(xof_amount);
          this.results = rest;

          this.loading = false;
        } else {
          // this.message = "Select ";
        }
      }, 1000)(data);
    },
  },
  computed: {
    computedReceiveAmount: {
      get() {
        return this.form.receive_amount?.toLocaleString();
      },
      set(value) {
        this.form.receive_amount = parseFloat(value.replace(/,/g, ""));
      },
    },
    computedSendAmount: {
      get() {
        return this.form.send_amount?.toLocaleString();
      },
      set(value) {
        this.form.send_amount = parseFloat(value.replace(/,/g, ""));
      },
    },
    computedMethodFee() {
      if (this.results.mobile_fee) {
        return this._2dp(this.results.mobile_fee);
      } else if (this.results.debit_fee) {
        this.feeType = "Debit ";
        return this._2dp(this.results.debit_fee);
      } else if (this.results.visa_fee) {
        this.feeType = "Mastercard/visa ";
        return this._2dp(this.results.visa_fee);
      } else return 0;
    },
    currencyKeys() {
      return Object.keys(this.currencies);
    },
    balance() {
      return 0;
    },
    fromObject() {
      return this.currencies[this.form.from_currency];
    },
    amountToSend() {
      return Number(
        (this.balance * this.rate).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
      );
    },
  },
  async mounted() {
    const { currency_value } = await exchangeRate();
    this.rate = this._2dp(currency_value);
  },
};
</script>

<style scoped></style>
