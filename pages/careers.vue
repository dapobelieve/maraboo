<template>
  <main class="w-full">
    <section class="md:pb-6">
      <div class="flex flex-col md:flex-row items-start">
        <div class="w-full md:w-2/4">
          <div class="flex md:items-start text-left flex-col h-full">
            <h1 class="text-purple mb-8 md:mb-14 text-xl font-extrabold">
              {{ $t("careers.join") }}
            </h1>
            <h1 class="font-heading text-4xl md:text-5xl leading-snug mb-2">
              {{ $t("careers.come-work") }}
            </h1>

            <div class="mb-12 md:mb-20">
              {{ $t("careers.we") }}
            </div>
            <img
              class="mb-32 md:hidden"
              src="~/assets/images/carz.svg"
              alt=""
            />
            <div class="bg-reds-300" v-html="$t('careers.opening')"></div>
          </div>
        </div>
        <div class="md:flex hidden justify-center md:w-2/4">
          <img
            class="lg:mr-[calc(-50vw+98%)] w-full mt-12"
            src="~/assets/images/carz.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="mt-16">
      <div>
        <h1
          class="text-4xl md:text-4xl text-center text-black font-heading mb-8"
        >
          {{ $t('careers.resume.title') }}
        </h1>
        <p class="text-center">
          {{ $t('careers.resume.caption') }}
        </p>
        <div class="mt-10 container mx-auto max-w-4xl w-full">
          <FileUploader @fileSelected="data.file = event" class="mb-8" />
          <button
            :disabled="computedButtonState"
            class="rounded-lg px-6 py-3 text-sm font-medium bg-black text-white"
          >
          {{ $t("careers.submit")  }}
          </button>
        </div>
      </div>
    </section>
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

const computedButtonState = computed(() => !!data.file);
</script>
