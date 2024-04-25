<template>
  <footer class="flex justify-center bg-neutral px-5 pb-5 pt-20 md:px-10">
    <div class="container">
      <div class="w-full">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full space-y-12 text-white md:px-12">
            <h1 class="display-2">
              Download the App for <br />
              Money Transfers Beyond <br />
              Borders!
            </h1>
            <div class="items-end justify-between md:flex">
              <img
                src="~/assets/images/mock-up.svg"
                class="mb-10 md:mb-0"
                alt="phone-logo"
              />
              <Button>Download Now</Button>
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
                <p class="text-1">
                  A West-African fintech firm offering transformative financial
                  <br />
                  solutions that are fair, responsible, inclusive,and designed
                  <br />
                  to improve the quality of life of West Africa.
                </p>
              </div>
              <div class="text-1 justify-betweeen flex w-full md:w-1/4">
                <div class="w-1/3 md:mb-0">
                  <ul class="space-y-4">
                    <li><a href="#" class="text-1">Home</a></li>
                    <li><a href="#" class="text-1">About</a></li>
                    <li><a href="#" class="text-1">Link</a></li>
                    <li><a href="#" class="text-1">Link</a></li>
                  </ul>
                </div>
                <div class="w-1/3">
                  <ul class="space-y-4">
                    <li>
                      <nuxt-link to="privacy-policy" class="text-1"
                        >Privacy Policy</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="terms-of-use" href="#" class="text-1"
                        >Terms of Service</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="flex w-1/3 justify-end">
                  <ul class="space-y-4">
                    <li><a href="#" class="text-1">Facebook</a></li>
                    <li><a href="#" class="text-1">LinkedIn</a></li>
                    <li><a href="#" class="text-1">Twitter</a></li>
                    <li><a href="#" class="text-1">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full items-center justify-between md:flex">
            <div class="w-full">
              <div class="max-w-3xl justify-between md:flex md:space-x-10">
                <ul class="mb-6 space-y-1">
                  <li><a href="#" class="text-2 mb-6">Email</a></li>
                  <li><a href="#" class="text-1">enquiries@mara.boo</a></li>
                </ul>
                <ul class="grow space-y-1">
                  <li><a href="#" class="text-2">Address</a></li>
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
            <button
              class="rounded-full border border-surface-200 px-6 py-2.5 text-white"
            >
              <div class="flex items-center space-x-4">
                <img src="~/assets/images/en.svg" />
                <span class="font-extrabold">EN</span>
              </div>
            </button>
          </div>
        </div>
        <div class="my-20 w-full text-center">
          <p class="text-1">
            Grand Maraboo Technology Limited is registered as a money service
            business with the Financial <br />
            Transactions and Reports Analysis Centre of Canada (FINTRAC) under
            registration number M23345406
          </p>
        </div>
        <div class="w-full text-center md:flex md:text-justify">
          <p class="text-1">
            Grand Maraboo Technologies Limited © 2023 All rights reserved
          </p>
          <p class="ml-auto">Made in WAEMU by Africans</p>
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

<style scoped></style>
