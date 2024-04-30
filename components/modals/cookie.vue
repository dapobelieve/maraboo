<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";

const state = reactive({
  settings: false,
  cookies: [
    {
      title: "Strictly Necessary Cookies",
      text: "These cookies are essential for you to browse the website and use its features, such as accessing secure areas. Without these cookies, services like shopping baskets or e-billing cannot be provided.",
      active: true,
    },
    {
      title: "Functional Cookies",
      text: "These cookies are necessary for the proper functioning of our website. They enable basic features like page navigation, access to secure areas, and ensuring the website loads correctly. These cookies do not store any personally identifiable information and are always enabled.",
      active: true,
    },
    {
      title: "Performance Cookies",
      text: "Performance cookies help us understand how visitors interact with our website. They collect anonymous data for statistical purposes, enabling us to improve the website's speed and functionality. These cookies do not collect any personally identifiable information.",
      active: true,
    },
    {
      title: "Marketing Cookies",
      text: "Marketing cookies are used to track visitors across websites and display advertisements that are relevant and engaging to individual users. These cookies may collect personal data to tailor ads to your interests.",
      active: true,
    },
  ],
});

function close(action?: string) {
  if (action === "decline") {
    localStorage.setItem("cookie", JSON.stringify({ decline: true }));
  }

  if (action === "accept-all") {
    localStorage.setItem("cookie", JSON.stringify({ " accept-all": true }));
  }
  state.settings = false;
  emit("close");
}

const toggleActive = ref<boolean>(false);

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <VueFinalModal
    class="flex w-full items-center justify-center p-4 text-white"
    content-class="bg-primary absolute bottom-10 right-10 pt-2 pb-6 w-[600px] rounded-[40px]"
    content-transition="vfm-slide-down"
    :click-to-close="false"
    :esc-to-close="false"
  >
    <div class="relative flex flex-col">
      <div class="flex w-full justify-between px-4 pt-3">
        <button
          :class="[!state.settings ? 'invisible' : '']"
          class="rounded-full bg-[#ffffff0f] p-1"
          @click.stop="state.settings = false"
        >
          <img src="~/assets/images/left.svg" alt="" />
        </button>
        <button class="rounded-full bg-[#ffffff0f] p-1" @click.stop="close">
          <img src="~/assets/images/x.svg" alt="" />
        </button>
      </div>
      <div v-show="!state.settings" class="px-8">
        <h1 class="display-3 mb-6">Cookie Consent</h1>
        <small class="leading font-bolder"
          >This website uses cookies to enhance your browsing experience. By
          clicking "Accept," you agree to the use of cookies on this site. We
          use cookies for various purposes including analytics and personalized
          marketing. You can manage your cookie preferences by clicking
          "Settings" below.</small
        >
        <div class="mt-4">
          <Button @click="close('decline')" type="tint" class="mr-4"
            >Decline All</Button
          >
          <Button type="tint" @click="state.settings = true" class="mr-4"
            >Settings</Button
          >
          <Button @click="close('accept-all')" type="active">Accept All</Button>
        </div>
      </div>
      <div
        v-show="state.settings"
        class="no-scrollbar h-[700px] overflow-y-auto"
      >
        <div class="h-full">
          <div class="px-10">
            <h1 class="display-3 mb-6">Cookie Settings</h1>
            <small class="leading"
              >Choose your cookie preferences below. You can change your
              preferences at any time. Please note that blocking some types of
              cookies may impact your experience on our website.</small
            >
          </div>
          <div class="settings mb-8 mt-4 space-y-4 px-3">
            <div class="flex items-start" v-for="(x, index) in state.cookies">
              <div class="mt-6">
                <div class="h-1 w-[20px] rounded-full bg-white">&nbsp;</div>
              </div>
              <div class="pl-3 pr-4">
                <h1 class="display-3 mb-6" style="line-height: 1.1">
                  {{ x.title }}
                </h1>
                <p>
                  {{ x.text }}
                </p>
              </div>
              <div class="shrink-0">
                <small v-if="index == 0" class="font-medium"
                  >Always Active</small
                >
                <div
                  v-if="index > 0"
                  @click.stop="toggleActive = !toggleActive"
                  class="w- flex h-8 w-[51px] items-center rounded-full duration-300 ease-in-out"
                  :class="toggleActive ? 'bg-[#EAEAEA]' : 'bg-[#EAEAEA]'"
                >
                  <!-- Switch -->
                  <div
                    class="h-[30px] w-[30px] transform rounded-full shadow-md duration-300 ease-in-out"
                    :class="[
                      toggleActive
                        ? 'translate-x-5 bg-primary'
                        : 'bg-transparent',
                    ]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-10">
            <Button type="active">Save cookie settins</Button>
            <Button type="tint" @click="state.settings = true" class="mr-4"
              >Cancel</Button
            >
          </div>
        </div>
      </div>
      <div class="hidden flex-col items-center space-y-5 text-center"></div>
    </div>
  </VueFinalModal>
</template>
