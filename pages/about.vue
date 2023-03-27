<template>
  <main class="container mx-auto px-2">
    <section class="py-12 2xl:py-24">
      <div class="flex flex-col items-center">
        <h1 class="text-purple text-2xl mb-8 font-extrabold">About Maraboo</h1>
        <h1
          class="font-heading text-4xl md:text-6xl mb-8 max-w-[65rem] text-center md:leading-normal"
        >
          We're building borderless financial systems to connect West-Africans
          across the globe
        </h1>
        <p class="text-center text-lg max-w-[39rem] leading-normal">
          <span class="text-purple">Introducing Maraboo</span>, a West-African
          fintech firm offering transformative financial solutions that are
          fair, responsible, inclusive, and designed to improve the quality of
          life of West Africans.
        </p>
      </div>
      <div class="mt-16 text-center">
        <GlobalMore> Read More </GlobalMore>
      </div>
    </section>
    <section class="countries py-12 2xl:py-24">
      <div class="md:flex">
        <div class="w-full md:w-3/5">
          <div class="flex text-left flex-col px-4 h-full">
            <h1
              class="font-heading text-4xl max-w-[45rem] md:text-6xl leading-none mb-4 md:mb-8"
            >
              Our Core mission is to make payments in & out of WAEMU countries
              up <span class="text-purple">to 3x cheaper!</span>
              <br class="hidden md:block" />
            </h1>
            <div class="md text-xl md:w-[30rem] text-left mb-8 leading-relaxed">
              Did you know that a 10% reduction in transaction fees for sending
              money in & out of WAEMU country can boost the revenue of regional
              households by up to 16%?
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
    <section class="countries py-12 2xl:py-24">
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
              We believe that remittances should be fast, low cost, and have a
              major social impact.
            </h1>
            <p
              class="md text-xl md:mb-8 text-justify leading-relaxed max-w-[34rem]"
            >
              Two birds one stone - we apply the real exchange rate on all of
              our transactions to save you money and make the
              <span class="text-purple"> UN social development goal </span> by
              significantly reducing remittance cost by 2030 a reality today!
            </p>
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
