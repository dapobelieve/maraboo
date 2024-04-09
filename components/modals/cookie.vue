<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

const emit = defineEmits<{
  (e: "confirm"): void;
}>();
</script>

<template>
  <VueFinalModal
    class="flex w-full items-center justify-center p-4 text-white"
    content-class="bg-primary absolute bottom-10 right-10 px-8 py-12 w-[600px] rounded-[40px]"
    swipe-to-close="down"
    content-transition="vfm-slide-down"
  >
    <div class="relative flex flex-col items-center text-left">
      <button
        class="absolute -top-8 right-0 rounded-full bg-emphasis-100 p-1"
        @click.stop="emit('confirm')"
      >
        <img src="~/assets/images/x.svg" alt="" />
      </button>
      <div class="mb-20">
        <h1 class="display-3 mb-6">Cookie Consent</h1>
        <small class="leading font-bold"
          >This website uses cookies to enhance your browsing experience. By
          clicking "Accept," you agree to the use of cookies on this site. We
          use cookies for various purposes including analytics and personalized
          marketing. You can manage your cookie preferences by clicking
          "Settings" below.</small
        >
      </div>
      <div class="hidden flex-col items-center space-y-5 text-center">
        <!--        <div>-->
        <!--          <img src="~/assets/images/qr.png" alt="" />-->
        <!--        </div>-->
        <!--        <small class="leading-1">Scan QR code to download the app</small>-->
      </div>
    </div>
  </VueFinalModal>
</template>
