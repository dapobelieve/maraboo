<template>
  <main class="container mx-auto px-2">
    <section class="py-12 md:pb-32 pt-24">
      <div class="flex flex-col items-center">
        <h1 class="text-purple text-3xl mb-8 font-extrabold">
          {{ $t("about-us.name") }}
        </h1>
        <h1
          class="font-heading text-4xl md:text-6xl mb-8 max-w-[65rem] text-center leading-snug"
        >
          {{ $t("about-us.caption") }}
        </h1>
        <p class="text-center text-lg max-w-[39rem] leading-normal">
          <span v-html="$t('about-us.text')"> </span>
        </p>
      </div>
      <div class="mt-16 text-center">
        <GlobalMore> {{ $t("about-us.read-more") }} </GlobalMore>
      </div>
    </section>
    <section class="countries py-12 md:py-32">
      <div class="md:flex">
        <div class="w-full md:w-3/5">
          <div class="flex text-left flex-col px-4 h-full">
            <h1
              class="font-heading text-4xl max-w-[45rem] md:text-6xl leading-none mb-4 md:mb-8"
              v-html="$t('about-us.section-2.caption')"
            ></h1>
            <div class="md text-xl md:w-[30rem] text-left mb-8 leading-relaxed">
              {{ $t("about-us.section-2.text") }}
            </div>
          </div>
        </div>
        <div class="md:w-2/5 flex mr-12">
          <div>
            <img
              class="ml-3 h-96s"
              src="~/assets/images/mother-child.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="countries py-12 md:py-32">
      <div class="md:flex">
        <div
          class="md:w-2/5 hidden mb-8 md:mb-0 md:flex justify-center md:mr-12"
        >
          <div>
            <img class="ml-3" src="~/assets/images/man-laugh.svg" alt="" />
          </div>
        </div>
        <div class="md:w-3/5 mb-8 md:mb-0">
          <div class="flex flex-col justify-center px-4 h-full">
            <h1
              class="font-heading md:text-left text-4xl max-w-[45rem] md:text-6xl leading-none mb-8 md:mb-16"
            >
              {{ $t("about-us.section-2.we-believe") }}
            </h1>
            <p
              class="md text-xl md:mb-8 text-justify leading-relaxed max-w-[34rem]"
              v-html="$t('about-us.section-2.two')"
            ></p>
          </div>
        </div>
        <div
          class="md:w-2/5 md:hidden mb-8 md:mb-0 flex justify-center md:mr-12"
        >
          <div>
            <img class="ml-3" src="~/assets/images/man-laugh.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
