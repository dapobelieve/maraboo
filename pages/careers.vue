<template>
  <main class="container mx-auto px-2">
    <section class="countries py-12 md:pb-32">
      <div class="md:flex items-center">
        <div class="w-full md:w-2/5">
          <div
            class="flex md:items-start text-left items-center flex-col px-4 h-full"
          >
            <h1 class="text-purple mb-4 md:mb-14 text-2xl font-extrabold">
              {{ $t("careers.join") }}
            </h1>
            <h1 class="font-heading text-4xl md:text-6xl leading-snug mb-4">
              {{ $t("careers.come-work") }}
            </h1>
            <div class="mb-16 text-lg md:mb-20">
              {{ $t("careers.we") }}
            </div>
            <div class="hidden md:block text-left">
              <GlobalMore> {{ $t("careers.view") }}</GlobalMore>
            </div>
          </div>
        </div>
        <div class="md:w-3/5 flex justify-center">
          <div>
            <img class="md:h-[36rem]" src="~/assets/images/hepta.svg" alt="" />
          </div>
        </div>
        <div class="md:hidden md:block mt-16 text-center">
          <GlobalMore> {{ $t("careers.view") }}</GlobalMore>
        </div>
      </div>
    </section>
    <section
      class="countries py-12 md:py-32"
      v-html="$t('careers.opening')"
    ></section>
  </main>
</template>
