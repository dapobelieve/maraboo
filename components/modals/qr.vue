<template>
  <VueFinalModal
    class="flex items-center justify-center text-white"
    content-class="bg-primary px-8 py-12 w-[600px] rounded"
  >
    <div class="relative flex flex-col items-center text-center">
      <button
        class="bg-[#d0d0d038] absolute -top-8 right-0 rounded-full p-1"
        @click.stop="emit('confirm')"
      >
        <img src="~/assets/images/x.svg" alt="" />
      </button>
      <div class="mb-10">
        <h1 class="display-3 mb-6">
          {{ $t("home.modal.title") }}
        </h1>
        <small class="leading"
          > {{ $t("home.modal.sub") }}</small
        >
      </div>
      <div class="flex flex-col items-center space-y-5 text-center">
        <div class="bg-[#d0d0d038] rounded-full flex justify-evenly">
          <button @click="switchQrCode('Android')"
                  :class="[state.code === 'Android' ? 'active': '']" class="inline-flex  rounded-l-full items-center space-x-2 bg-tint-100 px-4 py-2">
            <Icon
                class="text-white"
                size="2rem"
                icon="google-play"
            ></Icon>
            <span>Google Play</span></button>
          <button  :class="[state.code === 'IOS' ? 'active': '']" @click="switchQrCode('IOS')" class="inline-flex items-center rounded-r-full space-x-2 bg-tint-100 px-3 py-1">
            <Icon
                class="text-white"
                size="2rem"
                icon="app-store"
            ></Icon>
            <span>App store</span></button>
        </div>
        <div>
          <img v-if="state.code == 'Android'" class="h-36" src="~/assets/images/PlayStore.png" alt="" />
          <img v-else class="h-36" src="~/assets/images/Apple.png" alt="" />
        </div>
        <small class="leading-1"> {{ $t("home.modal.scan") }}
          <span class="min-w-xs inline-block text-left w-[54px]">
          {{state.code}}
        </span></small>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

const emit = defineEmits<{
  (e: "confirm"): void;
}>();

const state = reactive({
  code: 'Android'
})

function switchQrCode(name: string) {
    state.code = name
}
</script>

<style>

.active {
  background-color: #d0d0d0b5;
}
</style>
