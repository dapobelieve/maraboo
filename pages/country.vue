<template>
    <div>
        <section class="container mx-auto px-4">
      <div
        class="rounded-[30px] flex md:py-14 py-8 lg:px-8 justify-center"
       
      >
        <div class="max-w-7xl w-full md:space-y-0 space-y-8 md:flex">
          <div class="md:w-1/2 text-white flex flex-col justify-between">
            <h1
              class="font-heading drop-shadow-lg text-4xl md:text-5xl"
              style="line-height: 3.4rem !important"
            >
            Send money from Burkina Faso to Canada at the real exchange rate!
            </h1>
            <p class="drop-shadow-lg mb-8 md:mb-0">
              From local to global in real time, Maraboo Magic: Discover 3x
              <br />
              Savings on international money Transfers to or from WAEMU
              countries!
            </p>
            <div class="inline-flex">
              <img
                class="md:h-56 h-32 mr-5 drop-shadow-lg"
                src="~/assets/images/qr.svg"
              />
              <span class="md:mt-10 drop-shadow-lg text-lg">
                Scan QR code to <br />
                download the app
              </span>
            </div>
          </div>
          <div class="md:w-1/2">
            <Calculator class="md:ml-auto" />
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script setup>
   definePageMeta({
     layout: 'country'
   })
</script>

<style lang="scss" scoped>

</style>