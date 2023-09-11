<template>
  <section class="py-12 md:pb-32">
    <div class="md:flex items-center">
      <div class="w-full md:w-2/4">
        <div
          class="flex md:items-start md:mb-20 text-left items-center flex-col h-full"
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
        <div class="w-full md:w-4/5">
          <div class="max-w-[46rem] leading-8 text-lg">
            <p class="mb-4">
              {{ $t("legal.one") }}
            </p>
            <p class="mb-4">
              <!--            {{ $t("legal.two") }}-->
            </p>
            <p class="mb-4">
              {{ $t("legal.three") }}
            </p>
            <p class="mb-4">
              {{ $t("legal.four") }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center md:w-2/4">
        <img
          class="lg:mr-[calc(-50vw+99%)] mt-12 w-full"
          src="~/assets/images/shadow.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss"></style>
