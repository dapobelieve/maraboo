<template>
  <div class="no-scrollbar dynamic-enter h-[575px] space-y-4 overflow-auto">
    <div>
      <h1 class="text-3 leading-9 text-emphasis-900">
        {{ displayText }}
      </h1>
    </div>
    <div class="umoa-list">
      <ul role="listbox" class="space-y-3">
        <li
          @click.exact.stop="modeSelected(mode)"
          v-for="mode in modeToDisplay"
          class="flex w-full items-center justify-between select-none space-x-8  px-3 py-3"
          :class="[
              mode.slug === state.selectedMode?.slug ? 'selected' : '',
              !mode.enabled ? 'bg-disable' : ' cursor-pointer']"
        >
          <a class="flex grow  items-center">
            <div class="w-full max-w-xs">
              <div class="flex items-center space-x-3">
                <h1 class="text-2 shrink-0 capitalize text-emphasis-900">{{ mode.name }}</h1>
                <span
                  class="-2 shrink-0 rounded-full border border-white p-1 px-2 text-xs"
                  >{{ mode.fee }}</span
                >
              </div>
              <div>
                <em
                  class="text-xs capitalize text-active text-emphasis-900 text-positive"
                  >estimated time: </em
                >
<!--                {{ // mode.estimate }}-->
              </div>
              <div>
                <p class="text-xs" v-html="mode.details"></p>
              </div>
            </div>
          </a>
          <img
            class="ml-auto hidden h-6 w-6"
            src="~/assets/images/icon-check.svg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import { useImages } from "~/composables/useImages";
const emits = defineEmits(["modeSelected"]);
const props = defineProps({
  config: {
    type: Object,
    default: "",
  },
  currency: {
    type: Object,
  },
  delivery: {
    type: Object,
  },
  mode: {
    type: Object,
    default: "",
  },
});

const { images } = useImages();
const state = reactive({
  modes: [
    {
      name: "Bank Transfer",
      slug: "bank_transfer_ach",
      method: "Bank Transfer",
      estimate: "within minutes",
      fee: "1100.0 XOF",
      details: "Send money to all banks in all UMOA countries",
    },
    {
      name: "Credit Ecobank Account",
      slug: "credit_ecobank_account",
      method: "Cash Pick-up",
      estimate: "within minutes",
      fee: "1.0% fee",
      details: "Instantly send money to any Ecobank account",
    },
    {
      name: "Mobile Money",
      slug: "mobile_money",
      method: "Mobile money",
      estimate: "within minutes",
      fee: "1.3% fees",
      details:
        "Add money to the following mobile money wallets: <br> MTN - Moov - Flooz -Orange money -Moov <br> -Moby Cash -Free - T-money",
    },
    {
      name: "Xpresscash",
      slug: "xpresscash",
      method: "Mobile money",
      estimate: "within minutes",
      fee: "1.0% fees",
      details: "Withdraw cash at any Ecobank ATM or Xpress point in UMOA",
    },
  ],
  sendingModes: [
    {
      name: "Interac Request",
      slug: "interac_request",
      fee: "3.0 CAD fee",
      estimate: "within minutes",
      details: "instantly send money to any ecobank account",
      method: "interac_request",
    },
  ],
  selectedMode: null,
});

function modeSelected(mode) {
  if(mode.enabled) {
    state.selectedMode = mode;
    setTimeout(() => {
      emits("modeSelected", mode);
    }, 500);
  }

}

watch(
  () => props.mode,
  (newVal) => {
    if (newVal) {
      const modeToSelect = [...state.modes, ...state.sendingModes].find(
        (mode) => mode.slug === newVal.slug
      );
      if (modeToSelect) {
        state.selectedMode = modeToSelect;
      }
    }
  },
  { immediate: true }
);

const displayText = computed(() => {
  return props.config.which === "delivery"
    ? "How do you want the money delivered?"
    : "Choose how you want to pay";
});

const modeToDisplay = computed(() => {
  if (props.config.which === "delivery") {

    return props.delivery.country.payout.map(mode => {
      console.log(mode)
      return {
        name: mode.name.split('_').join(' '),
        slug: mode.name,
        fee: `${mode.fee}${mode.fee_unit.toUpperCase()} Fee`,
        estimate: "within minutes",
        details: "instantly send money to any ecobank account",
        method: mode.name,
        enabled: mode.enabled
      }
    })
    }else {
      return props.currency.country.payin.map(mode => {
        console.log(mode)
        return {
          name: mode.name.split('_').join(' '),
          slug: mode.name,
          fee: `${mode.fee} ${mode.fee_unit.toUpperCase()} Fee`,
          estimate: "within minutes",
          details: "instantly send money to any ecobank account",
          method: mode.name,
          enabled: mode.enabled
        }
      })
  }
});
</script>

<style lang="scss" scoped>
.selected {
  @apply rounded-[20px] bg-[#5F19F23D];
  img {
    @apply block;
  }
}

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

.dynamic-enter {
  animation: slideInTopFastToSlow 300ms forwards;
}
</style>
