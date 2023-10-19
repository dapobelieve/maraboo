<template>
    <div style="background-color: rgba(0, 0, 0, 0.5);" :class="removeModal"
        class="fixed z-[1000] h-screen top-0 w-full left-0 lg:p-5">
        <div class="bg-white mt-auto animate-in duration-300 ease-in-out slide-in-from-bottom lg:slide-in-from-right"
            :class="settings ? 'no-scrollbar h-full overflow-y-auto lg:w-2/4 lg:block lg:mx-auto' : 'lg:w-2/5 lg:ml-auto'">
            <div class="p-6" :class="{ 'hidden': settings }">
                <div class="mb-2">
                    <img @click="show = false" class="ml-auto cursor-pointer" src="~/assets/images/close-black.svg"
                        alt="" />
                </div>
                <div class="mb-6">
                    <h2 class="mb-2 font-semibold text-3xl font-heading">Cookie Consent</h2>
                    <p class="text-[16px] leading-7">This website uses cookies to enhance your browsing experience. By
                        clicking
                        "Accept," you agree to the use of cookies on this site. We use cookies for various purposes
                        including
                        analytics and personalized marketing. You can manage your cookie preferences by clicking "Settings"
                        below.
                    </p>
                </div>

                <div class="block text-[12px] font-semibold lg:flex gap-3 items-center">
                    <div class="flex gap-3 mb-4 lg:mb-0">
                        <button @click="show = false" class="border border-black px-9 py-3 rounded-[5px]">
                            Decline all
                        </button>
                        <button @click="settings = true" class="border border-black px-9 py-3 rounded-[5px]">
                            Settings
                        </button>
                    </div>
                    <button @click="show = false" class="bg-black text-white px-9 py-3 rounded-[5px]">
                        Accept all
                    </button>
                </div>
            </div>
            <div v-if="settings" class="animate-in slide-in-from-bottom duration-500">
                <div class="mb-8 p-6 flex justify-between">
                    <img @click="settings = false" class="cursor-pointer" src="~/assets/images/prev.svg" alt="prev-btn" />
                    <img @click="show = false" class="cursor-pointer" src="~/assets/images/close-black.svg"
                        alt="close-btn" />
                </div>

                <div class="mb-6 px-6 pb-6 border-b border-[#EAEAEA]">
                    <h2 class="mb-2 font-semibold text-3xl font-heading">Cookie Settings</h2>
                    <p class="text-[16px] leading-7">Choose your cookie preferences below. You can change your preferences
                        at any time. Please note that blocking some types of cookies may impact your experience on our
                        website.
                    </p>
                </div>

                <div class="divide-y divide-slate-200 pt-0 pb-6">
                    <template v-for="(cookie, index) in cookies">
                        <Accordion :title="cookie.title" :id="`cookies-${index}`" :active="cookie.active">
                            {{ cookie.text }}
                        </Accordion>
                    </template>
                </div>

                <div class="flex gap-3 mb-4 p-6 text-[12px] font-semibold">
                    <button @click="show = false" class="bg-black text-white px-4 py-3 rounded-[5px]">
                        Save cookie settings
                    </button>
                    <button @click="settings = false" class="border border-black px-12 py-3 rounded-[5px]">
                        Cancel
                    </button>
                    
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
// import { reactive, computed, toRefs } from "vue";
import Accordion from '../components/Accordion.vue'



export default {
    data() {
        return {
            settings: false,
            cookies: [
                {
                    title: "Strictly Necessary Cookies",
                    text: "These cookies are essential for you to browse the website and use its features, such as accessing secure areas. Without these cookies, services like shopping baskets or e-billing cannot be provided.",
                    active: true,
                },
                {
                    title: "Functional Cookies",
                    text: "These cookies are necessary for the proper functioning of our website. They enable basic features like page navigation, access to secure areas, and ensuring the website loads correctly. These cookies do not store any personally identifiable information and are always enabled.",
                    active: true,
                },
                {
                    title: "Performance Cookies",
                    text: "Performance cookies help us understand how visitors interact with our website. They collect anonymous data for statistical purposes, enabling us to improve the website's speed and functionality. These cookies do not collect any personally identifiable information.",
                    active: true,
                },
                {
                    title: "Marketing Cookies",
                    text: "Marketing cookies are used to track visitors across websites and display advertisements that are relevant and engaging to individual users. These cookies may collect personal data to tailor ads to your interests.",
                    active: true,
                }
            ]
        }
    },
    props: {
        show: Boolean
    },
    methods: {
        acceptCookies() {
            // localStorage.setItem('show', false)
            // Set a cookie or store user preference to accept cookies
            // You can use a cookie library like vue-cookie or js-cookie
            // Hide the cookie consent modal
        },
        declineCookies() {
            // Handle user's choice to decline cookies
            // You may want to block third-party cookies and services
            // Hide the cookie consent modal
        }

    },
    computed: {
        removeModal() {
            if (!this.show) {
                localStorage.setItem('show', false)
                document.body.classList.remove('show-modal')
            }
            return [this.show ? 'flex' : 'hidden']

        }
    },
}

</script>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>