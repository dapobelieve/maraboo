<template>
  <div class="w-full">
    <div class="bg-white p-4 rounded-lg border overflow-hidden">
      <div class="relative feature pb-[114.9%] mb-4">
        <img
          class="rounded-lg top-0 absolute h-full object-cover w-full"
          alt="alt text"
          :src="team.img"
        />
      </div>
      <div>
        <h1 class="font-bold text-lg">{{ team.name }}</h1>
        <span class="text-md">{{ team.job }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { team } = defineProps(["team"]);
</script>

<style lang="scss" scoped></style>
