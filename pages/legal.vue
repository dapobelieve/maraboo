<template>
  <main class="container mx-auto px-2">
    <section class="countries py-12 md:py-32">
      <div class="md:flex items-center">
        <div class="w-full md:w-3/5">
          <div
            class="flex md:items-start text-left items-center flex-col h-full"
          >
            <h1 class="text-purple mb-4 md:mb-14 text-3xl font-extrabold">
              {{ $t("legal.name") }}
            </h1>
            <h1
              class="font-heading text-4xl max-rem] md:text-6xl leading-snug mb-4"
            >
              {{ $t("legal.policy") }}
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="countries py-12 md:py-24">
      <div class="w-4/5">
        <div class="max-w-[46rem] leading-8 text-lg">
          <p class="mb-4">
            {{ $t("legal.one") }}
          </p>
          <p class="mb-4">
            {{ $t("legal.two") }}
          </p>
          <p class="mb-4">
            {{ $t("legal.three") }}
          </p>
          <p class="mb-4">
            {{ $t("legal.four") }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
