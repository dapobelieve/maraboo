<template>
       <div class="my-4">
          <div class="flex justify-center bg-gray-300 w-full rounded-3xl">
            <img class="rounded-3xl" :src="team.img" alt="team_member"/>
          </div>

          <div>
            <h4 class="mt-7 font-sans text-xl font-semibold">{{ team.name }}<br /> 
              <span class="text-base font-normal">{{ team.job }}</span></h4>
            <p></p>
          </div>


        </div>
</template>

<script setup>
  const { team } = defineProps(['team'])

</script>

<style lang="scss" scoped>

</style>