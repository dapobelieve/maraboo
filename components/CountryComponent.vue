<template>
  <NuxtLink :to="countryLink">
  <span ref="countryAnimate" class="flex flex-col items-center"
  :class="{ 'animate-pulse': isElementInViewport }"
  >
    <img
      class="w-[50px] md:h-[4.7rem] md:w-[5.7rem] mb-2"
      :src="`${images[props.country.flag]}`"
      alt=""
    />
    <small>{{ countryName }}</small>
  </span>
</NuxtLink>
</template>


<script>
  export default {
    data() {
      return {
        isElementInViewport:false,
      }
    },

    mounted() {
      //initialize the intersection observer
      const options = {
        threshold: 0.5,
      }

      const observer = new IntersectionObserver(this.handleIntersection, options);
      //element to observe
      observer.observe(this.$refs.countryAnimate);
    },

    methods: {
      handleIntersection(entries) {

        const [entry] = entries;
        if(entry.isIntersecting){
          //element is in the viewport, add the animation class
          this.isElementInViewport = true;

          //set a timeout to remove the class after a few seconds
          setTimeout(() => {
            this.isElementInViewport = false; 
          }, 3000);  // 3000 milliseconds => 3 seconds
        }
      }
    }

  }

</script>

<script setup>
import { computed } from "vue";
const props = defineProps({
  country: Object,
});


const { images } = useImages();

const countryName = computed(() => {
  return (
    props.country.name.charAt(0).toUpperCase() + props.country.name.slice(1)
  );
});

const countryLink = computed(() => {
   if (props.country.name == "canada"){
    return '/exchange/send-money-from-canada'
   }
   else{
    return `/exchange/send-money-from-${(props.country.name.replace(" ", "-"))}-to-canada`.toLowerCase()
   }
})
</script>
