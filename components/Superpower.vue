<template>
  <section>
    <div class="container">
      <div class="content-wrap">
        <div class="w-full space-y-20">
          <div class="w-full space-y-16 lg:space-y-0 ">
            <div class="superpower flex flex-col items-center text-center space-y-10">
              <h1 class="display-2" v-html="$t('home.section4.left.super-power')"></h1>
              <p class="text-2 sub-content text-center" v-html="$t('home.section4.left.offer')"></p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="max-w-sm space-y-12">
                <div class="inline-flex space-x-3 items-start ">
                  <img alt="" src="~/assets/images/check.png" class="mt-1">
                  <div class="space-y-3">
                    <h1 class="font-medium text-3xl">Cash</h1>
                    <p>Receive by cash at Ecobank ATMs or Xpress points</p>
                  </div>
                </div>
                <div class="inline-flex space-x-3 items-start " >
                  <img alt="" src="~/assets/images/check.png" class="mt-1">
                  <div class="space-y-3">
                    <h1 class="font-medium text-3xl">Mobile Money</h1>
                    <p>Receive by cash at Ecobank ATMs or Xpress points</p>
                  </div>
                </div>
                <div class="inline-flex space-x-3 items-start">
                  <img alt="" src="~/assets/images/check.png" class="mt-1">
                  <div class="space-y-3">
                    <h1 class="font-medium text-3xl">Bank</h1>
                    <p>Send and receive from bank accounts</p>
                  </div>
                </div>
              </div>
            </div>
            <img class="hidden lg:block" src="~/assets/images/girl.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
