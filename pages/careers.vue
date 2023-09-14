<template>
  <main class="w-full">
    <section class="py-12 md:pb-32">
      <div class="flex flex-col lg:flex-row items-start">
        <div class="w-full md:w-2/4">
          <div
            class="flex md:items-start text-left items-center flex-col px-4 h-full"
          >
            <h1 class="text-purple mb-4 md:mb-14 text-2xl font-extrabold">
              {{ $t("careers.join") }}
            </h1>
            <h1 class="font-heading text-4xl md:text-6xl leading-snug mb-4">
              {{ $t("careers.come-work") }}
            </h1>
            <div class="mb-16 md:mb-20">
              {{ $t("careers.we") }}
            </div>
            <div class="bg-reds-300" v-html="$t('careers.opening')"></div>
            <div class="mt-10 w-full">
              <FileUploader @fileSelected="data.file = event" class="mb-8" />
              <button
                :disabled="computedButtonState"
                class="rounded-lg px-6 py-3 text-sm font-medium bg-black text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full md:w-2/4">
          <img
            class="md:mr-[calc(-50vw+90%)] mt-12"
            src="~/assets/images/carz.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="py-12 md:pb-32"></section>
  </main>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from "vue";
const data = reactive({
  disabled: true,
  file: null,
});

function handleFileUpload(e) {
  console.log(e);
}

const computedButtonState = computed(() => bool(data.file));
</script>
