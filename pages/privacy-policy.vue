<template>
    <div class="lg:flex gap-5 items-baseline">
        <!-- headings  -->
        <div class="px-5 lg:hidden">
            <h2 class="font-semibold text-3xl font-heading leading-9"> {{ $t('privacy-policy.title') }} </h2>
            <p class="font-semibold leading-6">{{ $t('privacy-policy.last-updated') }}: October 9th, 2023</p>
        </div>

        <div id="toc" class="lg:max-w-[30%] lg:fixed">
            <TableOfContent :tocs="privacyPolicyToc" />
        </div>
        <div class="px-5 lg:w-[65%] lg:ml-auto">
            <div class="mt-10 mb-20 hidden lg:block">
                <h2 class="font-semibold text-6xl font-heading leading-[73px]"> {{ $t('privacy-policy.title') }} </h2>
                <p class="font-semibold leading-8 text-xl">{{ $t('privacy-policy.last-updated') }}: October 9th, 2023</p>
            </div>
            <!-- intro  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="intro">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.intro.title') }}
                </h2>
                <div>
                    <p class="mb-5" v-html="$t('privacy-policy.intro.heading')"></p>
                    <div class="mb-5" v-html="$t('privacy-policy.intro.described-policy')"></div>
                    <p class="mb-3">{{ $t('privacy-policy.intro.privacy-laws') }}</p>
                    <div class="mb-5" v-html="$t('privacy-policy.intro.policy-applies')"></div>
                    <div v-html="$t('privacy-policy.intro.more-info')"></div>
                </div>

            </div>
            <!-- info we collect  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="info-we-collect">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.info-we-collect.title') }}
                </h2>
                <div v-html="$t('privacy-policy.info-we-collect.collect-info')">
                </div>

            </div>
            <!-- how-we-collect-info  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="how-we-collect-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.how-we-collect-info.title') }}
                </h2>
                <div v-html="$t('privacy-policy.how-we-collect-info.collect-and-use')"></div>
                <div class="mb-5">
                    <h4 class="font-semibold text-xl lg:text-2xl lg:leading-9 mb-5">{{
                        $t('privacy-policy.how-we-collect-info.provided-info.title') }}</h4>
                    <div v-html="$t('privacy-policy.how-we-collect-info.provided-info.content')"></div>
                    <div class="mt-5">
                        <h4 class="font-semibold text-xl lg:text-2xl lg:leading-9 mb-5">{{
                            $t('privacy-policy.how-we-collect-info.cookies-info.title') }}</h4>
                        <div v-html="$t('privacy-policy.how-we-collect-info.cookies-info.content')"></div>
                    </div>
                    <div class="mt-5">
                        <h4 class="font-semibold text-xl lg:text-2xl lg:leading-9 mb-5">{{
                            $t('privacy-policy.how-we-collect-info.third-party.title') }}</h4>
                        <div v-html="$t('privacy-policy.how-we-collect-info.third-party.content')"></div>
                    </div>
                </div>

            </div>
            <!-- how-we-use-info  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="how-use-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.how-we-use-info.title') }}
                </h2>
                <div v-html="$t('privacy-policy.how-we-use-info.use-info')">
                </div>

            </div>
            <!-- disclosure  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="disclosure">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.disclosure.title') }}

                </h2>
                <div v-html="$t('privacy-policy.disclosure.content')">
                </div>

            </div>
            <!-- transfer info  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="transfer-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.transfer-info.title') }}

                </h2>
                <div v-html="$t('privacy-policy.transfer-info.content')">
                </div>

            </div>

            <!-- choices  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="choices">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.choices.title') }}

                </h2>
                <div v-html="$t('privacy-policy.choices.content')">
                </div>

            </div>

            <!-- marketing  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="marketing">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.marketing.title') }}

                </h2>
                <div v-html="$t('privacy-policy.marketing.content')">
                </div>

            </div>

            <!-- security  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="security">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.security.title') }}

                </h2>
                <div v-html="$t('privacy-policy.security.content')">
                </div>

            </div>

            <!-- access  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="access">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.access.title') }}

                </h2>
                <div v-html="$t('privacy-policy.access.content')">
                </div>

            </div>

            <!-- retention  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="retention">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.retention.title') }}

                </h2>
                <div v-html="$t('privacy-policy.retention.content')">
                </div>

            </div>

            <!-- under-13  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="under-13">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.under-13.title') }}

                </h2>
                <div v-html="$t('privacy-policy.under-13.content')">
                </div>

            </div>

            <!-- access-and-correct  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="access-and-correct">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.access-and-correct.title') }}

                </h2>
                <div v-html="$t('privacy-policy.access-and-correct.content')">
                </div>

            </div>

            <!-- withdraw  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="withdraw">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.withdraw.title') }}

                </h2>
                <div v-html="$t('privacy-policy.withdraw.content')">
                </div>

            </div>

            <!-- policies  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="policies">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.policies.title') }}

                </h2>
                <div v-html="$t('privacy-policy.policies.content')">
                </div>

            </div>

            <!-- changes-to-policies -->

            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="changes-to-policies">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.changes-to-policies.title') }}

                </h2>
                <div v-html="$t('privacy-policy.changes-to-policies.content')">
                </div>

            </div>


            <!-- contact-info -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="contact-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    {{ $t('privacy-policy.contact-info.title') }}

                </h2>
                <div onclick="" v-html="$t('privacy-policy.contact-info.content')">
                </div>

            </div>




        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'policy'
})

const privacyPolicyToc = [
    {
        name: "Introduction",
        link: "intro"
    },
    {
        name: "Information we collect about you",
        link: "info-we-collect"
    },
    {
        name: "How we collect information about you",
        link: "how-we-collect-info"
    },
    {
        name: "How we use your information",
        link: "how-use-info"
    },
    {
        name: "Disclosure of your information",
        link: "disclosure"
    },
    {
        name: "Transferring your personal information",
        link: "transfer-info"
    },
    {
        name: "Choices about how we use and disclose your information",
        link: "choices"
    },
    {
        name: "Marketing",
        link: "marketing"
    },
    {
        name: "Data Security",
        link: "security"
    },
    {
        name: "Access to your contact list",
        link: "access"
    },
    {
        name: "Data Retention",
        link: "retention"
    },
    {
        name: "Children under the age of 13",
        link: "under-13"
    },
    {
        name: "Accessing and correcting your personal information",
        link: "access-and-correct"
    },
    {
        name: "Withdrawing your consent",
        link: "withdraw"
    },
    {
        name: "Privacy policies of other websites",
        link: "policies"
    },
    {
        name: "Changes to our privacy policy",
        link: "changes-to-policies"
    },
    {
        name: "Contact information and challenging compliance",
        link: "contact-info"
    }
    


]

</script>




<style scoped>


   @media (min-width: 1800px)  {
       #toc{
         max-width: 500px;
       } 
   }
</style>