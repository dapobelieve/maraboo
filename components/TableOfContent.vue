<template>
    <div>
         <!-- table of contents  -->
         <div class="no-scrollbar lg:max-h-[70vh] lg:overflow-y-auto my-10 border border-[#EAEAEA] rounded-[10px] p-5 py-7">
            <h4 class="font-semibold text-xl lg:text-4xl font-heading leading-6">Table of Contents</h4>
            <ol class="my-5 px-5 leading-8 underline" style="list-style-type: decimal;">
                <li v-for="(toc, index) in props.tocs" :id="index">
                    <a class="cursor-pointer" @click="scrollToSection(`#${toc.link}`)">{{ toc.name }}</a>
                </li>
        
            </ol>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

const props = defineProps({
    tocs: Object,
})


const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const targetPosition = window.scrollY + elementTop - (viewportHeight / 2);
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }
};
</script>

<style lang="scss" scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>