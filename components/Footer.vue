<template>
  <footer
    class="flex justify-center bg-neutral text-white px-5 pb-5 pt-14 md:px-10 md:pt-20"
  >
    <div class="container">
      <div class="w-full">
        <div class="w-full text-white lg:px-12">
          <div class="flex flex-col items-center justify-center space-y-12">
            <h1 class="display-2 text-center md:text-left" v-html="$t('footer.download')">

            </h1>
            <div class="flex items-center space-x-4 lg:hidden">
              <a href="#" target="_blank"
                ><span>
                  <img
                    alt=""
                    class="h-12"
                    src="~/assets/images/play-store.png"
                  /> </span
              ></a>
              <a href="#" target="_blank"
                ><span>
                  <img
                    alt=""
                    class="h-12"
                    src="~/assets/images/app-store.png"
                  /> </span
              ></a>
            </div>
            <div class="lg:flex h-52 lg:w-full">
             <div class="lg:w-[400px] w-[200px]">
               <img
                   src="~/assets/images/body.png"
                   class="mb-10 md:mb-0 bg-contain "
                   alt="phone-logo"
               />
             </div>
              <Button class="btn-lg ml-auto shrink-0">Download Now</Button>
            </div>
          </div>
          <div class="w-full space-y-12 py-10">
            <div class="justify-between md:flex">
              <div class="mb-8 w-3/4 md:mb-0">
                <img
                  src="~/assets/images/logo-grey.svg"
                  class="mb-4"
                  alt="phone-logo"
                />
                <p class="text-1" v-html="$t('footer.caption')"></p>
              </div>
              <div class="text-1 justify-betweeen flex w-full md:w-1/4">
                <div class="w-1/3 md:mb-0">
                  <ul class="space-y-4">
                    <li><nuxt-link to="/" class="text-1">Home</nuxt-link></li>
                    <li>
                      <nuxt-link to="about" class="text-1">About</nuxt-link>
                    </li>
                    <li><a href="#" class="text-1">Link</a></li>
                    <li><a href="#" class="text-1">Link</a></li>
                  </ul>
                </div>
                <div class="w-1/3">
                  <ul class="space-y-4">
                    <li>
                      <nuxt-link to="privacy-policy" class="text-1">
                        {{ $t("footer.privacy") }}</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="terms-of-use" class="text-1">
                        {{ $t("footer.terms") }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="flex w-1/3 justify-end">
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/grandmaraboo/"
                        class="text-1"
                        >LinkedIn</a
                      >
                    </li>
                    <li>
                      <a href="https://twitter.com/Grandmaraboo" class="text-1"
                        >Twitter</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/grand.maraboo/"
                        class="text-1"
                        >Instagram</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full items-center justify-between space-y-4 md:flex">
            <div class="w-full">
              <div class="max-w-3xl justify-between md:flex md:space-x-10">
                <ul class="mb-6 space-y-1">
                  <li>
                    <a href="#" class="text-2 mb-6">
                      {{ $t("footer.email") }}</a
                    >
                  </li>
                  <li><a href="#" class="text-1">enquiries@mara.boo</a></li>
                </ul>
                <ul class="grow space-y-1">
                  <li>
                    <a href="#" class="text-2"> {{ $t("footer.address") }}</a>
                  </li>
                  <li class="justify-center md:flex">
                    <a href="#" class="text-1 mb-6 block"
                      >Canada: <br />
                      169 Enterprise Blvd (YSPACE SUITE 300), <br />
                      Markham, ON, L6G 0E7
                    </a>
                    <a href="#" class="text-1 ml-auto"
                      >Côte d'Ivoire: <br />
                      25 BP 663 Abidjan 25</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <LanguageSelector class="text-white lang-select" />
          </div>
        </div>
        <div class="my-20 w-full text-center">
          <p class="text-1" v-html="$t('footer.registered')"></p>
        </div>
        <div class="w-full text-center md:flex md:text-justify">
          <p class="text-1">
            {{ $t("footer.copy") }}
          </p>
          <p class="ml-auto">
            {{ $t("footer.made-by") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
const route = useRoute();

const displayBlackFooterSection = computed(() => route.fullPath === "/join-us");
</script>

<style scoped lang="scss">

:deep(.lang-select button) {
  @apply hover:bg-neutral;
  span {
    @apply text-white
  }
}

</style>
