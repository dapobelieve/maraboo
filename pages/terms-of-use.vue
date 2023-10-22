<template>
    <div class="lg:flex gap-5 items-baseline">
        <!-- headings  -->
        <div class="px-5 lg:hidden">
            <h2 class="font-semibold text-3xl font-heading leading-9">Terms of Use</h2>
            <p class="font-semibold leading-6">Last updated: October 9th, 2023</p>
        </div>

        <div id="toc" class="lg:max-w-[30%] lg:fixed">
            <TableOfContent :tocs="termsOfUseToc"/>         
        </div>
        <div class="px-5 lg:w-[65%] lg:ml-auto">
            <div class="mt-10 mb-20 hidden lg:block">
                <h2 class="font-semibold text-6xl font-heading leading-[73px]">Terms of Use</h2>
                <p class="font-semibold leading-8 text-xl">Last updated: October 9th, 2023</p>
            </div>

            <!-- intro  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-6 lg:leading-8" id="intro">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Introduction
                </h2>
                <div>
                    <p class="mb-5">
                    Lorem ipsum dolor sit amet consectetur. Facilisis enim egestas egestas enim porttitor eget sed. Risus ac in hac semper integer consequat at. Nec natoque lobortis in at. Magnis vitae porttitor quisque neque magna rutrum amet. Sed ullamcorper faucibus pellentesque gravida parturient suscipit pretium vitae ut. Nec viverra duis aliquam nec urna odio. Pellentesque sed varius amet facilisis eget tortor tempor ipsum fermentum. Semper orci morbi velit elit. Id diam habitant leo auctor.
                    </p>
                    <p>
                        Penatibus id mollis quam aliquam sed auctor arcu magna. Leo scelerisque sit eget a interdum quis nibh ullamcorper eget. Massa auctor dolor ullamcorper eu nibh. Lacus sed euismod nec ut aliquam ullamcorper dolor nisi et. Mattis sollicitudin suspendisse morbi congue tortor. Pharetra sit commodo sit tortor semper nullam morbi. Ac proin id fusce ullamcorper nibh est non pretium quisque. In diam gravida magna vel erat quis risus morbi ullamcorper. Enim pretium vestibulum sit aenean vestibulum gravida ac ac. A ultrices mattis ipsum augue vitae pellentesque fringilla arcu.Volutpat eleifend pretium tellus facilisis aenean velit elit enim. Ultrices bibendum nulla lobortis scelerisque in dictumst id orci.
                    </p>
                </div>
                
            </div>
            <!-- acceptance  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-6 lg:leading-8" id="acceptance">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Acceptance of the site terms of use
                </h2>
                <div>
                    <p class="mb-5">
                    Lorem ipsum dolor sit amet consectetur. Facilisis enim egestas egestas enim porttitor eget sed. Risus ac in hac semper integer consequat at. Nec natoque lobortis in at. Magnis vitae porttitor quisque neque magna rutrum amet. Sed ullamcorper faucibus pellentesque gravida parturient suscipit pretium vitae ut. Nec viverra duis aliquam nec urna odio. Pellentesque sed varius amet facilisis eget tortor tempor ipsum fermentum. Semper orci morbi velit elit. Id diam habitant leo auctor.
                    </p>
                    <li class="pl-5">
                        Penatibus id mollis quam aliquam sed auctor arcu magna. Leo scelerisque sit eget a interdum quis nibh ullamcorper eget. Massa auctor dolor ullamcorper eu nibh. Lacus sed euismod nec ut aliquam ullamcorper dolor nisi et. Mattis sollicitudin suspendisse morbi congue tortor. Pharetra sit commodo sit tortor semper nullam morbi. Ac proin id fusce ullamcorper nibh est non pretium quisque. In diam gravida magna vel erat quis risus morbi ullamcorper. Enim pretium vestibulum sit aenean vestibulum gravida ac ac. A ultrices mattis ipsum augue vitae pellentesque fringilla arcu.Volutpat eleifend pretium tellus facilisis aenean velit elit enim. Ultrices bibendum nulla lobortis scelerisque in dictumst id orci.
                    </li>
                </div>
                
            </div>
            <!-- mod  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-6 lg:leading-8" id="mod">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Modifications to the Terms of Use and to the Site
                </h2>
                <div>
                    <div class="mb-5">
                       <h4 class="font-semibold text-xl lg:text-2xl lg:leading-9 mb-5">Information you provide to us </h4>
                        <p>Facilisis enim egestas egestas enim porttitor eget sed. Risus ac in hac semper integer consequat at. Nec natoque lobortis in at. Magnis vitae porttitor quisque neque magna rutrum amet. Sed ullamcorper faucibus pellentesque gravida parturient suscipit pretium vitae ut. Nec viverra duis aliquam nec urna odio. Pellentesque sed varius amet facilisis eget tortor tempor ipsum fermentum. Semper orci morbi velit elit. Id diam habitant leo auctor.</p>
                    </div>
                    <p>
                        Penatibus id mollis quam aliquam sed auctor arcu magna. Leo scelerisque sit eget a interdum quis nibh ullamcorper eget. Massa auctor dolor ullamcorper eu nibh. Lacus sed euismod nec ut aliquam ullamcorper dolor nisi et. Mattis sollicitudin suspendisse morbi congue tortor. Pharetra sit commodo sit tortor semper nullam morbi. Ac proin id fusce ullamcorper nibh est non pretium quisque. In diam gravida magna vel erat quis risus morbi ullamcorper. Enim pretium vestibulum sit aenean vestibulum gravida ac ac. A ultrices mattis ipsum augue vitae pellentesque fringilla arcu.Volutpat eleifend pretium tellus facilisis aenean velit elit enim. Ultrices bibendum nulla lobortis scelerisque in dictumst id orci.
                    </p>
                </div>
                
            </div>
            <!-- use-of-site  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-6 lg:leading-8" id="use-of-site">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Your Use of the Site and Application and Account Set-Up and Security
                </h2>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Facilisis enim egestas egestas enim porttitor eget sed. Risus ac in hac semper integer consequat at. Nec natoque lobortis in at. Magnis vitae porttitor quisque neque magna rutrum amet. Sed ullamcorper faucibus pellentesque gravida parturient suscipit pretium vitae ut. Nec viverra duis aliquam nec urna odio. Pellentesque sed varius amet facilisis eget tortor tempor ipsum fermentum. Semper orci morbi velit elit. Id diam habitant leo auctor.
                    </p>
                </div>
                
            </div>
            <!-- services  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-6 lg:leading-8" id="services">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Services and Payments
                </h2>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Facilisis enim egestas egestas enim porttitor eget sed. Risus ac in hac semper integer consequat at. Nec natoque lobortis in at. Magnis vitae porttitor quisque neque magna rutrum amet. Sed ullamcorper faucibus pellentesque gravida parturient suscipit pretium vitae ut. Nec viverra duis aliquam nec urna odio. Pellentesque sed varius amet facilisis eget tortor tempor ipsum fermentum. Semper orci morbi velit elit. Id diam habitant leo auctor.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'policy'
})

const termsOfUseToc = [
    {
        name:"Introduction",
        link:"intro"
    },
    {
        name: "Acceptance of the site terms of use",
        link:"acceptance"
    },
    {
        name: "Modifications to the Terms of Use and to the Site",
        link:"mod"
    },
    {
        name: "Your Use of the Site and Application and Account Set-Up and Security",
        link:"use-of-site"
    },
    {
        name: "Services and Payments",
        link:"services"
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