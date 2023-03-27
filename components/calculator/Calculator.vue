<template>
  <div class="min-w-sm w-[30rem] max-w-[40rem]">
    <div class="bg-gray-50 p-4 shadow-md ring ring-1 ring-opacity-5 ring-black">
      <div class="md:m-6">
        <div
          class="w-full mb-12 flex flex-col after:content- relative after:absolute after:w-full after:h-[0.2px] after:bottom-[-20px] after-mt-8 after:bg-slate-700"
        >
          <div class="text-slate-400 mb-4">1. You send:</div>
          <div class="relative mb-4 flex items-center origin">
            <input
              v-model="amount"
              placeholder="Enter amount"
              class="h-10 shadow-sm focus:outline-none w-full px-4 py-6 rounded bg-white"
              type="number"
            />
            <select
              name="currencies"
              class="absolute font-sm w-[6rem] rounded-r pl-4 focus:outline-none right-0 h-full"
            >
              <option selected value="CAD">CAD</option>
              <option value="XOF">XOF</option>
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
              <img class="md:h-14" src="~/assets/images/trend.svg" />
            </div>
            <div class="text-purple md:mr-4">
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
          class="mb-24 after:content- relative after:absolute after:w-full after:h-[0.2px] after:bottom-[-20px] after-mt-8 after:bg-gray-700"
        >
          <div class="flex items-center justify-between">
            <div>
              <small class="font-extrabold text-gray-600"
                >Delivery method & fees</small
              >
            </div>
            <select
              name="cars"
              class="bg-purple text-white text-sm font-bold w-40 py-1 px-2 rounded"
              id="cars"
            >
              <option value="volvo">Cash pickup</option>
            </select>
          </div>
          <div class="mt-8">
            <div class="text-slate-800 text-sm">
              <div class="block">
                <div class="amount inline-block mb-1.5 w-28">
                  {{ mobileMoney }} CAD
                </div>
                <span class="purpose">Mobile money fee</span>
              </div>
              <div class="block">
                <div class="amount inline-block mb-1.5 w-28">{{ fee }} CAD</div>
                <span class="purpose">Our fee</span>
              </div>
              <div class="block">
                <div class="amount inline-block mb-1.5 w-28">
                  {{ mobileMoney + fee }} CAD
                </div>
                <span class="purpose">Total fees</span>
              </div>
              <div class="block">
                <div
                  class="amount inline-block text-black font-bold mb-1.5 w-28"
                >
                  {{ balance }} CAD
                </div>
                <span class="purpose font-bold text-black">We convert</span>
              </div>
              <div class="block">
                <div class="amount inline-block mb-1.5 w-28">
                  {{ rate }} CAD
                </div>
                <span class="purpose">Real exchange rate</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mb-12 flex flex-col">
          <div class="text-slate-400 mb-4">2. Your recipient gets:</div>
          <div class="relative mb-4 flex items-center origin">
            <input
              v-model="amountToSend"
              disabled
              class="h-10 shadow-sm focus:outline-none w-full px-4 py-6 rounded bg-white"
              type="number"
            />
            <select
              name="currencies"
              class="absolute font-sm w-[6rem] rounded-r pl-4 focus:outline-none right-0 h-full"
            >
              <option value="CAD">CAD</option>
              <option selected value="XOF">XOF</option>
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
export default {
  data() {
    return {
      rate: 478.63,
      fee: 2.12,
      mobileMoney: 4.0,
      amount: null,
    };
  },
  computed: {
    balance() {
      return this.amount ? this.amount - (this.mobileMoney + this.fee) : 0;
    },
    amountToSend() {
      return Number(
        (this.balance * this.rate).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
      );
    },
  },
};
</script>

<style scoped></style>
