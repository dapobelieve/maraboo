<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

defineProps<{
  title?: string;
}>();

const emit = defineEmits<{
  (e: "confirm"): void;
}>();
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center text-white"
    content-class="bg-primary px-8 py-12 w-[600px] rounded-[40px]"
  >
    <div class="relative flex flex-col items-center text-center">
      <button
        class="bg-grseen-50 absolute -top-8 right-0 rounded-full bg-emphasis-100 p-1"
        @click.stop="emit('confirm')"
      >
        <img src="~/assets/images/x.svg" alt="" />
      </button>
      <div class="mb-20">
        <h1 class="display-3 mb-6">
          Download the App for Money Transfers Beyond Borders!
        </h1>
        <small class="leading"
          >Available on Apple Store and Google Play Store.</small
        >
      </div>
      <div class="flex flex-col items-center space-y-5 text-center">
        <div>
          <img src="~/assets/images/qr.png" alt="" />
        </div>
        <small class="leading-1">Scan QR code to download the app</small>
      </div>
    </div>
  </VueFinalModal>
</template>

<!--<script setup>-->
// const emits = defineEmits(["confirm"]);
<!--</script>-->
