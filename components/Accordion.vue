

<template>
    <div class="py-4 p-6">
        <h2>
            <button :id="`accordion-title-${id}`" class="flex items-center justify-between w-full font-semibold py-2"
                @click.prevent="accordionOpen = !accordionOpen" :aria-expanded="accordionOpen"
                :aria-controls="`accordion-text-${id}`">
                <div class="flex gap-3 items-center">
                    <svg class="fill-black shrink-0" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" width="16" height="2" rx="1"
                            class="transform origin-center transition duration-200 ease-out"
                            :class="{ '!rotate-180': accordionOpen }" />
                        <rect y="7" width="16" height="2" rx="1"
                            class="transform origin-center rotate-90 transition duration-200 ease-out"
                            :class="{ '!rotate-180': accordionOpen }" />
                    </svg>
                    <span>{{ title }}</span>
                </div>
                <span v-if="id == 'cookies-0'" class="text-xs">Always active</span>
                  <!-- Switch Container -->
                <div v-if="id != 'cookies-0'" @click.stop="toggleActive = !toggleActive" class="w-11 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out" :class="toggleActive ? 'bg-black' : 'bg-[#EAEAEA]'">
                    <!-- Switch -->
                    <div class="bg-white w-[18px] h-[18px] rounded-full shadow-md transform duration-300 ease-in-out" :class="{'translate-x-5': toggleActive}"></div>
                </div>
                <!-- Switch Container End -->

            </button>
        </h2>
        <div :id="`accordion-text-${id}`" role="region" :aria-labelledby="`accordion-title-${id}`"
            class="px-8 grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out"
            :class="accordionOpen ? 'grid-rows-[1fr] opacity-100 py-2  pb-6' : 'grid-rows-[0fr] opacity-0'">
            <div class="overflow-hidden">
                <p class="text-base font-normal leading-6">
                    <slot />
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const accordionOpen = ref<boolean>(false)
const toggleActive = ref<boolean>(false)


const props = defineProps<{
  title: string
  id: string
  active?: boolean
}>()

onMounted(() => {
  accordionOpen.value = props.active
})
</script>
