<template>
  <section class="md:pb-32">
    <div class="flex flex-col lg:flex-row items-center">
      <div class="lg:w-2/4">
        <h1 class="text-purple mb-8 md:mb-14 text-xl font-extrabold">
          {{ $t("about-us.name") }}
        </h1>
        <h1 class="font-heading text-4xl md:text-6xl mb-8 pr-10">
          {{ $t("about-us.caption") }}
        </h1>
        <p class="text-lg max-w-[39rem] leading-normal pr-10">
          <span v-html="$t('about-us.text')"> </span>
        </p>
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
  <section class="countries py-12 md:py-0">
    <div class="md:flex">
      <div class="w-full">
        <div
          style="background: linear-gradient(180deg, #bebafc 0%, #a7b8fa 100%)"
          class="flex content-center px-6 lg:px-32 lg:py-16 rounded-[15px] pt-[30px] text-center text-white flex-col h-full"
        >
          <h1
            class="font-heading text-3xl md:text-5xl leading-9 mb-4 md:mb-8"
            v-html="$t('about-us.section-2.caption')"
          ></h1>
          <div class="md:px-24 lg:px-36 text-base mb-8 leading-relaxed">
            {{ $t("about-us.section-2.text") }}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="countries py-12 md:py-28">
    <div class="lg:flex">
      <div class="lg:w-3/5 mb-16 md:mb-0">
        <div class="flex flex-col justify-center px-4 h-full">
          <h1
            class="font-heading md:text-center lg:text-left text-3xl max-w-[45rem] lg:text-6xl leading-none mb-6 lg:mb-5"
          >
            {{ $t("about-us.section-2.we-believe") }}
          </h1>
          <p
            class="font-sans md:text-center lg:text-left text-base md:mb-8 text-justify leading-relaxed lg:max-w-[34rem]"
            v-html="$t('about-us.section-2.two')"
          ></p>
        </div>
      </div>
      <div class="lg:w-2/4 mb-8 md:mb-0 flex justify-center">
        <div>
          <img src="~/assets/images/man-laugh.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="mb-52 hidden">
    <h1
      class="font-heading text-3xl max-w-[45rem] md:text-6xl leading-9 mb-4 md:mb-8"
      v-html="$t('about-us.section-2.team')"
    ></h1>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="team_member in teams" :key="team_member.id">
        <Team :team="team_member" />
      </div>
    </div>
  </section>
</template>

<script setup>
const teams = [
  {
    id: 1,
    name: "Cheick Ouedraogo",
    job: "Founder - CEO",
  },
  {
    id: 2,
    name: "Olalekan Adebari",
    job: "CTO",
  },
  {
    id: 3,
    name: "Nimrod Payne",
    job: "Head of Compliance",
  },
  {
    id: 4,
    name: "Dela Alipui",
    job: "Head of Product Design",
  },
  {
    id: 5,
    name: "Nick Brisbois",
    job: "Backend Lead",
  },
  {
    id: 6,
    name: "Eric Lekwa",
    job: "Lead Mobile Engineer",
  },
  {
    id: 7,
    name: "Hanad Hassan",
    job: "Backend Developer",
  },
  {
    id: 8,
    name: "Abimbola Oladapo",
    job: "Full Stack Engineer",
  },
  {
    id: 9,
    name: "Brianna Megrath",
    job: "Graphic Designer",
  },
  {
    id: 10,
    name: "Alex Pang",
    job: "Marketing",
  },
  {
    id: 11,
    name: "Valiant-Joshua Bolorunduro",
    job: "Backend Developer",
  },
];
</script>
