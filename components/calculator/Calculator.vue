<template>
  <div
    id="exchange-rate"
    class="h[652px] relative flex space-x-8 overflow-hidden rounded-[40px] bg-black p-4 text-surface-400 md:w-[430px]"
  >
    <div class="pop-in" v-if="!state.config.open">
      <div class="space-y-2">
        <div class="selects space-y-1">
          <Delivery
            :config="state.config"
            :delivery="state.delivery"
            @step="openConfigDrawer('delivery')"
          />
          <Currency
            :config="state.config"
            :currency="state.currency"
            @step="openConfigDrawer('currency')"
          />
        </div>
        <div class="inputs text space-y-4">
          <div
            :class="[
              state.apiCalling ? 'text-emphasis-100' : 'text-emphasis-900',
            ]"
            class="send relative inline-flex w-full items-center rounded-[28px] bg-[#FFFFFF0F] p-4"
          >
            <span class="shrink-0 text-xs uppercase">You send</span>

            <input
              class="w-full grow bg-transparent px-2 text-right text-2xl outline-none"
              v-model="computedSendAmount"
              @keydown="keypressed"
              @focus="state.txn.mode = 'send'"
              placeholder="0.00"
            />
            <small class="text-emphasis-100">CAD</small>
          </div>
          <div class="estimate">
            <div class="px-6">
              <div class="py- flex justify-between">
                <div class="fee inline-flex space-x-4">
                  <img src="~/assets/images/minus.svg" alt="" />
                  <span class="text-emphasis-200">Our Fee</span>
                </div>
                <div class="amount space-x-1">
                  <span class="text-emphasis-900">{{ state.txn.our_fee }}</span>
                  <small class="currency text-emphasis-100">CAD</small>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="fee inline-flex space-x-4">
                  <img src="~/assets/images/equal.svg" alt="" />
                  <span class="text-emphasis-200">We convert</span>
                </div>
                <div class="amount space-x-1">
                  <span class="text-emphasis-900">{{
                    state.txn.we_convert
                  }}</span>
                  <small class="currency text-emphasis-100">CAD</small>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="fee inline-flex space-x-4">
                  <img src="~/assets/images/multiply.svg" alt="" />
                  <span class="text-emphasis-200">Real exchange rate</span>
                </div>
                <div class="amount space-x-1">
                  <span class="text-emphasis-900">{{ state.rate }}</span>
                  <small class="currency text-emphasis-100">CAD</small>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="[
              state.apiCalling ? 'text-emphasis-100' : 'text-emphasis-900',
            ]"
            class="receive relative flex items-center justify-between rounded-[28px] bg-[#FFFFFF0F] p-4"
          >
            <div class="flex-none shrink-0 text-xs uppercase">
              RECIPIENT GETS
            </div>
            <input
              class="mr-1 w-full bg-transparent text-right text-2xl outline-none"
              v-model="computedReceiveAmount"
              @keydown="keypressed"
              @focus="state.txn.mode = 'receive'"
              placeholder="0.00"
            />
            <small class="flex-none text-emphasis-100">XOF</small>
          </div>
        </div>
      </div>
    </div>
    <div class="config-drawer w-full px-2 py-1" v-if="state.config.open">
      <div class="nav sticky mb-5 flex items-center justify-between">
        <button
          @click="state.config.tab = 'country'"
          :class="[state.config.tab === 'country' ? 'invisible' : '']"
        >
          <img src="~/assets/images/left.svg" alt="" />
        </button>
        <span class="flex items-center space-x-2">
          <span
            class="h-2 w-5 rounded-l-full rounded-r-full bg-purple-700"
          ></span>
          <span class="h-2 w-2 rounded-full bg-purple-900"></span>
        </span>
        <button @click.stop="closeConfigDrawer">
          <img src="~/assets/images/x.svg" alt="" />
        </button>
      </div>

      <component
        v-if="state.config.which === 'delivery'"
        :is="state.config.currentComponent"
        v-model:country="state.delivery.country"
        v-model:mode="state.delivery.mode"
        v-model:config="state.config"
        v-model:delivery="state.delivery"
        v-model:currency="state.currency"
        @country-selected="
          handleCountryOrDeliveryEvents('country-selected', $event)
        "
        @mode-selected="handleCountryOrDeliveryEvents('mode-selected', $event)"
      ></component>
      <component
        v-else
        :is="state.config.currentComponent"
        v-model:country="state.currency.country"
        v-model:mode="state.currency.mode"
        v-model:config="state.config"
        v-model:currency="state.currency"
        v-model:delivery="state.delivery"
        @country-selected="
          handleCountryOrDeliveryEvents('country-selected', $event)
        "
        @mode-selected="handleCountryOrDeliveryEvents('mode-selected', $event)"
      ></component>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import debounce from "lodash.debounce";
import Currency from "~/components/calculator/Currency.vue";
import useApi from "~/composables/useApi";

const DEBOUNCE_DELAY = 400;

const state = reactive({
  config: {
    open: false,
    which: "delivery",
    tab: "country",
    currentComponent: "CountrySelectorV2",
    currentComponentKey: null,
    services: [],
  },
  apiCalling: false,
  rate: "0.00",
  txn: {
    send: null,
    we_convert: "0.00",
    our_fee: "0.00",
    receive: null,
    mode: "send",
    amount: null,
  },
  delivery: {
    country: {},
    mode: {},
  },
  currency: {
    country: {},
    mode: {},
  },
});

const computedSendAmount = computed({
  get() {
    if (!state.txn.send) {
      return "";
    }
    return new Intl.NumberFormat({
      style: "currency",
      currency: "CAD",
      maximumSignificantDigits: 2,
    }).format(state.txn.send);
  },
  set(newVal) {
    state.txn.send = Number(newVal.replace(/[^0-9.]/g, ""));
  },
});

const computedReceiveAmount = computed({
  get() {
    if (!state.txn.receive) {
      return "";
    }
    return new Intl.NumberFormat({
      style: "currency",
      currency: "XOF",
      maximumSignificantDigits: 2,
    }).format(state.txn.receive);
  },
  set(newVal) {
    state.txn.receive = Number(newVal.replace(/[^0-9.]/g, ""));
  },
});

watch(
  () => state.txn.send,
  debounce(async (newVal, oldVal) => {
    try {
      if (state.txn.mode === "send") {
        if (state.delivery.country.name && state.currency.country.name) {
          await convert(parseFloat(newVal));
        }
      }
    } catch (e) {
    } finally {
    }
  }, DEBOUNCE_DELAY)
);

watch(
  () => state.txn.receive,
  debounce(async (newVal) => {
    try {
      if (state.txn.mode === "receive") {
        if (state.delivery.country.name && state.currency.country.name) {
          await convert(parseFloat(newVal));
        }
      }
    } catch (e) {
    } finally {
    }
  }, DEBOUNCE_DELAY)
);

watch(
  () => state.config.tab,
  (newVal) => {
    if (newVal === "country") {
      state.config.currentComponent = "CountrySelectorV2";
    } else if (newVal === "mode") {
      state.config.currentComponent = "DeliveryModeSelector";
    }
  },
  { immediate: true }
);

watch(
  [() => state.delivery, () => state.currency],
  async (
    [newDeliveryVal, newCurrencyVal],
    [oldDeliveryVal, oldCurrencyVal]
  ) => {
    const hasChanged =
      JSON.stringify(newDeliveryVal) !== JSON.stringify(oldDeliveryVal) ||
      JSON.stringify(newCurrencyVal) !== JSON.stringify(oldCurrencyVal);

    const isValidDelivery =
      newDeliveryVal.country?.name && newDeliveryVal.mode?.name;
    const isValidCurrency =
      newCurrencyVal.country?.name && newCurrencyVal.mode?.name;

    if (hasChanged && isValidDelivery && isValidCurrency && state.txn.send) {
      try {
        await convert(state.txn.send);
      } catch (error) {
        console.error("Conversion request failed:", error);
      }
    }
  },
  { deep: true, immediate: true }
);

onBeforeMount(async () => {
  await exchangeRate();
  await paymentServices();
});

function _2dp(_number = 0) {
  return Number(_number?.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
}

async function convert(amount) {
  state.apiCalling = true;
  try {
    const res = await useApi().convert({
      payin_method: state.currency.mode.slug,
      payout_method: state.delivery.mode.slug,
      payin_market: state.currency.country.code,
      payout_market: state.delivery.country.code,
      amount: amount,
      mode: state.txn.mode,
    });
    const { converted, user_pays, we_convert, our_fee } = res;
    if (state.txn.mode === "send") {
      state.txn.receive = _2dp(converted);
    } else {
      state.txn.send = _2dp(user_pays);
    }
    state.txn.our_fee = _2dp(our_fee);
    state.txn.we_convert = _2dp(we_convert);
  } catch (e) {
  } finally {
    state.apiCalling = false;
  }
}

async function exchangeRate() {
  try {
    const rate = await useApi().exchangeRate("XOF");
    state.rate = _2dp(rate?.currency_value);
  } catch (e) {}
}

async function paymentServices() {
  try {
    state.config.services = await useApi().paymentServices();
  } catch (e) {
    //
  }
}

function keypressed(event) {
  if (!/[\d\.\-]|Backspace/.test(event.key)) {
    event.preventDefault();
  }
}

function handleCountryOrDeliveryEvents(event, data) {
  if (event === "country-selected") {
    state[state.config.which] = { ...state[state.config.which], country: data };
    state.config.tab = "mode";
  } else {
    state[state.config.which] = { ...state[state.config.which], mode: data };
    state.config.tab = "country";
    state.config.open = false;
  }
}

function openConfigDrawer(config) {
  state.config.open = true;
  state.config.which = config;
}

function closeConfigDrawer() {
  Object.assign(state.config, {
    open: false,
    which: "delivery",
    tab: "country",
    currentComponent: "CountrySelectorV2",
    currentComponentKey: null,
  });
}
</script>

<style scoped lang="scss">
@keyframes slideInTopFastToSlow {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.pop-in {
  animation: slideInTopFastToSlow 300ms forwards;
}
</style>
