<template>
    <div class="lg:flex gap-5 items-baseline">
        <!-- headings  -->
        <div class="px-5 lg:hidden">
            <h2 class="font-semibold text-3xl font-heading leading-9"> Privacy Policy </h2>
            <p class="font-semibold leading-6">Last updated: October 27th, 2023</p>
        </div>

        <div id="toc" class="lg:max-w-[30%] lg:fixed">
            <TableOfContent :tocs="privacyPolicyToc" />
        </div>
        <div class="px-5 lg:w-[65%] lg:ml-auto">
            <div class="mt-10 mb-20 hidden lg:block">
                <h2 class="font-semibold text-6xl font-heading leading-[73px]"> Privacy Policy </h2>
                <p class="font-semibold leading-8 text-xl">Last updated: October 27th, 2023</p>
            </div>
            <!-- intro  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="intro">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Introduction
                </h2>
                <div>
                    <p class="mb-5">
                        Grand Maraboo Technologies Limited, a Canadian corporation (the “<strong>Company</strong>” or “<strong>we</strong>”, “<strong>our</strong>”) respects your privacy
                        and is committed to protecting it by complying with this policy.
                    </p>
                    <div class="mb-5">
                        <p>This policy describes:</p>
                        <ul class='pl-12 lg:leading-9' style='line-height:30px; list-style-type: disc;'> 
                            <li class='mb-3'> How we collect, use, disclose, and protect the personal information of our customers and website users (“<strong>you</strong>”).</li>  
                              <li class='mb-3'>  Describes the types of information we may collect from you or that you may provide when you visit the website https://mara.boo/en (our “<strong>Site</strong>”).</li> 
                             <li> Our practices for collecting, using, maintaining, protecting, and disclosing that information.</li>   
                        </ul>
                    </div>
                    <p class="mb-3">
                        Privacy laws in Canada generally define “personal information” as any information 
                        about an identifiable individual, which includes information 
                        that can be used on its own or with other information to identify, contact, or locate a single person. 
                    </p>
                    <div class="mb-5">
                        <p>This policy applies to information we collect, use, or disclose about you:</p> 
                        <ul class='pl-12 pt-2 lg:leading-9' style='list-style-type: disc;'>
                             <li class='mb-3'> On this Site. </li>   
                              <li class='mb-3'> In email, text, and other electronic messages between you and this Site. </li>  
                              <li> Through mobile and desktop application you download, which provide dedicated non-browser-based interaction between you and this Site. </li> 
                        </ul>
                    </div>
                    <div>
                        <p class="mb-5">
                            The Site may include links to third-party websites, plug-ins, services, social networks, 
                            or applications. Clicking on those links or enabling those connections may allow the third party to collect or share data about you. 
                            If you follow a link to a third-party website or engage a third-party plugin, 
                            please note that these third parties have their own privacy policies and we do not accept any responsibility or liability for these policies. We do not control these third-party websites, and we encourage you to read the privacy policy of every website you visit.
                        </p>
                        <p>Please read this policy carefully to understand our policies and practices for collecting, processing, and storing your information. 
                            If you do not agree with our policies and practices, your choice is not to use our Site. By accessing or using this Site, you indicate that you understand, accept, and consent to the practices described in this policy. 
                            This policy may change from time to time (see <a @click="scrollToSection('#changes-to-policies')" class='cursor-pointer underline'>Changes to Our Privacy Policy</a>). 
                            Your continued use of this Site after we make changes indicates that you accept and consent to those changes, so please check the policy periodically for updates. </p>
                    </div>
                </div>

            </div>
            <!-- info we collect  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="info-we-collect">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Information we collect about you
                </h2>
                <div>
                    <p class='mb-5'>
                        We collect and use several types of information from and about you, including:</p> 
                        <ul class='pl-12 lg:leading-9' style='list-style-type: disc;'> 
                         <li class='mb-3'> <strong>Personal information</strong>, that we can reasonably use to directly or indirectly identify you, such as your name, mailing address, e-mail address, telephone number, Internet protocol (IP) address used to connect your computer to the Internet, location, device, user name or other similar identifier, billing and account information, social insurance number, date of birth, and any other identifier we may use to contact you (“<strong>personal information </strong>”). </li> 
                         <li class='mb-3'>We provide an opportunity for any user to unsubscribe from our services or opt-out of contact for marketing purposes on an ongoing basis by accessing our Site, using the unsubscribe mechanism at the bottom of our e-mails.</li> 
                         <li class='mb-3'> <strong>Supplemental identification information</strong>, such as supplemental identification information, such as government-issued identity documents, taxpayer identification number or national insurance number, and employment information.</li> 
                         <li class='mb-3'> <strong>Non-personal information</strong>, that does not directly or indirectly reveal your identity or directly relate to an identifiable individual, such as demographic information, or statistical or aggregated information. Statistical or aggregated data does not directly identify a specific person, but we may derive non-personal statistical or aggregated data from personal information. For example, we may aggregate personal information to calculate the percentage of users accessing a specific Site feature. </li>   
                         <li class='mb-3'><strong>Financial information</strong>, including income/wealth verification documents or bank account statements.</li>  
                         <li class='mb-3'> <strong>Technical information</strong>, including your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, or information about your internet connection, the equipment you use to access our Site, and usage details. </li>  
                         <li class='mb-3'> <strong>Transaction information</strong>, including information related to the use of the Services, types of Services requested, dates and times of such requests, payment methods, the name of the sender, the name of the recipient, and other similar information. </li>  <li class='mb-3'> <strong>Communication data</strong>, including messages, comments, or file transmissions. </li>  
                         <li class='mb-3'> <strong>Non-personal details about your Site interactions </strong>, including the full Uniform Resource Locators (URLs), clickstream to, through and from our Site (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, or any phone number used to call our customer service number. </li> 
                    </ul>
                </div>

            </div>
            <!-- how-we-collect-info  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="how-we-collect-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    How we collect information about you
                </h2>
                <div>
                    <p class='mb-5'>We use different methods to collect your information, including through: </p> 
                    <ul class='pl-12 lg:leading-9' style='list-style-type: disc;'>  
                        <li class='mb-3'> <strong>Direct interactions with you when you provide it to us</strong>, for example, by filling in forms, submitting content to the Site, like reviews, messages, or comments, or corresponding with us by phone, email, or otherwise. </li> 
                        <li class='mb-3'> <strong>User contributions</strong>. You may also provide information for us to publish or display on public Site areas or transmit to other Site users or third parties. </li>     
                        <li class='mb-3'> <strong>Automated technologies or interactions</strong>, as you navigate through our Site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies. </li>   
                        <li class='mb-3'> <strong>Third parties or publicly available sources</strong>, for example, our business partners. </li>   
                        <li class='mb-3'> <strong>Register online</strong> or place an order for any of our products or services.</li>     
                        <li class='mb-3'> <strong>Voluntarily complete a customer survey</strong> or provide feedback on any of our message boards or via email. </li>    
                        <li class='mb-3'> <strong>Download or use</strong> any of the Company’s mobile and desktop applications you download. </li>  
                        <li class='mb-3'> <strong> Enable access to its device’s location tracking functionality</strong>, whether the Site or any mobile or desktop application you download is running in the foreground or background. Certain functionality may be affected while location data is turned off.  </li> 
                     </ul>
                </div>
                <div class="mb-5">
                    <h4 class="font-semibold text-xl lg:text-2xl lg:leading-9 mb-5">
                       Information You Provide to Us 
                    </h4>
                    <div>
                        <p class='mb-5'>
                            The information we collect directly from you on or through our Site may include:</p>   
                            <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'>   
                            <li class='mb-3'> Information that you provide by filling in forms on our Site. This includes information provided at the time of registering to use our Site, subscribing to our service, posting material, or requesting further services. We may also ask you for information when you report a problem with our Site.</li>  
                            <li class='mb-3'>Records and copies of your correspondence (including email addresses), if you contact us.</li>  
                            <li class='mb-3'>Details of transactions you carry out through our Site and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Site.</li></ul>  
                            <p> You may also provide information to be published or displayed (hereinafter, “<strong>posted</strong>”) on public areas of the Site or transmitted to other users of the Site or third parties (collectively, “<strong>User Contributions</strong>”). Your User Contributions are posted on and transmitted to others at your own risk. Although we limit access to certain pages/you may set certain privacy settings for such information by logging into your account profile, please be aware that no security measures are perfect. Additionally, we cannot control the actions of other users of the Site with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that unauthorized persons will not view your User Contributions. </p>
                    </div>
                    <div class="mt-5" id="info-we-collect-through-cookies">
                        <h4 class="font-semibold text-xl lg:text-2xl lg:leading-9 mb-5">
                            Information We Collect Through Cookies and Other Automatic Data Collection Technologies
                        </h4>
                        <div>
                            <p class='mb-5'>
                                As you navigate through and interact with our Site, we may use cookies or other automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:</p>
                                <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'>
                                <li class='mb-3'> Details of your visits to our Site, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Site. </li>
                                <li class='mb-3'>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li> </ul>  
                                <p class='mb-5'>The information we collect automatically is statistical data and does not include personal information, and we may maintain it or associate it with personal information we collect in other ways, that you provide to us, or receive from third parties. It helps us to improve our Site and to deliver a better and more personalized service, including by enabling us to: </p> 
                                <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'> 
                                    <li class='mb-3'>Store information about your preferences, allowing us to customize our Site according to your individual interests.</li>  
                                    <li class='mb-5'>Recognize you when you return to our Site.</li> 
                                </ul>  
                                <p class='mb-5'> The technologies we use for this automatic data collection may include:</p>  
                                <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'> 
                                    <li class='mb-3'> <strong>Cookies (or browser cookies).</strong> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Site. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Site.</li>  
                                    <li class='mb-3'> <strong>Flash Cookies.</strong> Certain features of our Site may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Site. Flash cookies are not managed by the same browser settings that are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see <a @click="scrollToSection('#choices')" class='cursor-pointer underline'> Choices About How We Use and Disclose Your Information</a>. </li> 
                                    <li class='mb-3'> <strong>Web Beacons.</strong> Pages of our Site and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</li>  
                               </ul>
                        </div>
                    </div>
                   
                </div>

            </div>
            <!-- how-we-use-info  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="how-use-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    How we use your information
                </h2>
                <div>
                   <p class='mb-5'>We use information that we collect about you or that you provide to us, including any personal information:</p>  
                   <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'>  
                    <li class='mb-3'>To present our Site and its contents to you.</li>   
                    <li class='mb-3'>To provide you with information, products, or services that you request from us.</li>   
                    <li class='mb-3'>To fulfill the purposes for which you provided the information or that were described when it was collected, or any other purpose for which you provide it.</li>  
                    <li class='mb-3'>To provide you with notices about your account/subscription, including expiration and renewal notices.</li>   
                    <li class='mb-3'>To carry out our obligations and enforce our rights arising from any contracts with you, including for billing and collection or to comply with legal requirements.</li>    
                    <li class='mb-3'>To notify you about changes to our Site or any products or services we offer or provide though it. </li>  
                    <li class='mb-3'>To improve our Site, products or services, marketing, or customer relationships and experiences. </li>  
                    <li class='mb-3'>To allow you to participate in interactive features, social media, or similar features on our Site.</li>  
                    <li class='mb-3'>To measure or understand the effectiveness of the advertising we serve to you and others, and to deliver relevant advertising to you. </li>  
                    <li class='mb-3'>To enhance the safety and security of our users and services, including by protecting you and the Company from errors, misrepresentations, fraud, and/or contraventions of laws or criminal activity. </li>  
                    <li class='mb-3'>For customer support.</li>  
                    <li class='mb-3'>For research and development. </li>  
                    <li class='mb-3'>To enable communications between users. </li>  
                    <li class='mb-3'>In connection with legal proceedings. </li>   
                    <li class='mb-3'>In any other way we may describe when you provide the information. </li>  
                    <li class='mb-3'>For any other “legal” purpose with your consent.</li> 
                </ul> 
                   <p class='mb-5'>We may also use your information to contact you about our own and third-parties’ goods and services, as permitted by law. If you do not want us to use your information in this way, please do not use the Site and please use the unsubscribe mechanism at the bottom of our e-mails. For more information, see <a @click="scrollToSection('#choices')" class='cursor-pointer underline'>Choices About How We Use and Disclose Your Information</a> .</p>  
                   <p class='mb-5'>We may use the information we have collected from you to enable us to display advertisements to our advertisers' target audiences. Even though we do not disclose your personal information for these purposes without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria. </p>
                </div>

            </div>
            <!-- disclosure  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="disclosure">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Disclosure of your information
                </h2>
                <div>
                    <p class='mb-5'>We may disclose aggregated information about our users without restriction.</p> 
                         <p class='mb-5'>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>  
                         <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'> 
                         <li class='mb-3'>To our subsidiaries and affiliates.</li> 
                         <li class='mb-3'>In accordance with applicable law, to a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company’s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by the Company about our customers and users is among the assets transferred.</li>  
                         <li class='mb-3'>To advertisers and advertising networks that require the information to select and serve relevant advertisements to you and others.</li>  
                         <li class='mb-3'>To third parties to market their products or services to you if you have not opted out of these disclosures. For more information, see <a @click="scrollToSection('#choices')" class='cursor-pointer underline'>Choices About How We Use and Disclose Your Information</a>. </li>   
                         <li class='mb-3'>To contractors, service providers, and other third parties we use to support our business (such as analytics and search engine providers that assist us with Site improvement and optimization) and who are contractually obligated to keep personal information confidential, use it only for the purposes for which we disclose it to them, and to process the personal information with the same standards set out in this policy.</li>   
                         <li class='mb-3'>To fulfill the purpose for which you provide it.</li>   
                         <li class='mb-3'>For any other purpose disclosed by us when you provide the information. </li> 
                         <li class='mb-3'>With your consent. </li> 
                         </ul>

                         <p class='mb-5'>We may also disclose your personal information:</p> 
                         <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'> 
                            <li class='mb-3'>To comply with any court order, law, or legal process, including to respond to any government or regulatory request, in accordance with applicable law.</li> 
                            <li class='mb-3'>To enforce or apply our <NuxtLink class="underline" to="/terms-of-use">terms of use</NuxtLink> and other agreements, including for billing and collection purposes. </li>  
                            <li class='mb-3'>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.</li> 
                         </ul>
                </div>

            </div>
            <!-- transfer info  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="transfer-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Transferring your personal information
                </h2>
                <div>
                    <p class='mb-5'> We may transfer personal information that we collect or that you provide as described in this policy to contractors, service providers, and other third parties we use to support our business (such as analytics and search engine providers that assist us with Site improvement and optimization) and who are contractually obligated to keep personal information confidential, use it only for the purposes for which we disclose it to them, and to process the personal information with the same standards set out in this policy. </p>  
                    <p class='mb-5'>We may process, store, and transfer your personal information in and to a foreign country, with different privacy laws that may or may not be as comprehensive as Canadian law. In these circumstances, the governments, courts, law enforcement, or regulatory agencies of that country may be able to obtain access to your personal information through the laws of the foreign country. Whenever we engage a service provider, we require that its privacy and security standards adhere to this policy and applicable Canadian privacy legislation. </p> 
                    <p class='mb-5'>You are welcome to contact us to obtain further information about Company policies regarding service providers outside of Canada. See <a @click="scrollToSection('#contact-info')" class='cursor-pointer underline'>Contact Information and Challenging Compliance.</a> </p> 
                    <p class='mb-5'>By submitting your personal information or engaging with the Site, you consent to this transfer, storage, or processing.</p>
                </div>

            </div>

            <!-- choices  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="choices">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Choices about how we use and disclose your information
                </h2>
                <div>
                    <p class='mb-5'>
                    We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:</p>  
                    <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'>  
                        <li class='mb-3'> <strong>Tracking Technologies and Advertising.</strong> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe’s website. If you disable or refuse cookies, please note that some parts of this Site may not be accessible or may not function properly. For more information about tracking technologies, see <a @click="scrollToSection('#info-we-collect-through-cookies')" class='cursor-pointer underline'>Information We Collect Through Cookies and Other Automatic Data Collection Technologies</a>. </li>   
                        <li class='mb-3'> <strong>Promotional Offers from the Company.</strong> If you have opted in to receive certain emails from us but no longer wish to have your contact information used by the Company to promote our own or third parties’ products or services, you can opt-out by unsubscribe from our services or opt-out of contact for marketing purposes on an ongoing basis by accessing our Site, using the unsubscribe mechanism at the bottom of our e-mails. If we have sent you a promotional email, you may unsubscribe by clicking the unsubscribe link we have included in the email. This opt-out does not apply to information provided to the Company as part of product service experience, or other transactions.</li>   
                        <li class='mb-3'> <strong>Targeted Advertising.</strong> If you do not want us to use information that we collect or that you provide to us to deliver advertisements according to our advertisers’ target-audience preferences, you can opt out by unsubscribe from our services or opt-out of contact for marketing purposes on an ongoing basis by accessing our Site, using the unsubscribe mechanism at the bottom of our e-mails. </li>  

                    </ul>
                </div>

            </div>

            <!-- marketing  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="marketing">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Marketing
                </h2>
                <div>
                    <p class='mb-5'>The Company may send its users information about products and services of the Company. Users may provide consent to marketing and promotional communication. </p>  
                    <p class='mb-5'>If you have agreed to receive such marketing materials, you may always opt out at a later date. You have the right at any time to stop the Company from contacting you for marketing purposes. </p>
                </div>

            </div>

            <!-- security  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="security">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Data Security
                </h2>
                <div>
                    <p class='mb-5'>The security of your personal information is very important to us. We use physical, electronic, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. We store all information you provide to us behind firewalls on our secure servers. Any payment transactions will be encrypted using SSL technology.  </p>  
                    <p class='mb-5'>The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password and/or person identification number for access to certain parts of our Site, you are responsible for keeping such password  and personal identification number strictly confidential. We ask you not to share your password or personal identification number with anyone. We urge you to be careful about giving out information in public areas of the Site like message boards, which any Site visitor can view.</p>  
                    <p class='mb-5'>Unfortunately, the transmission of information via the Internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Site. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Site.</p>
                </div>

            </div>

            <!-- access  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="access">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Access to your contact list
                </h2>
                <div>
                    <p class='mb-5'>
                        With your express permission, we may access your contact list on your mobile device so that you can identify your contacts on Maraboo to allow you to send money to friends and family on Maraboo by searching for their phone number, email address or username.
                        We transmit and use this information to help you easily filter your friends on ‘Maraboo’ and to help you transact with your friends and contacts if you choose to connect your contact list information with your account. 
                        We only access your contact list information with your explicit permission. For example, when you provide us with information about your contacts, we may use it to let you know which of your contacts have also signed up for our services so you can send money to them for free and quicker. 
                        We will not send messages to your contacts or make use of the data for any other purpose. 
                    </p>
                </div>

            </div>

            <!-- retention  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="retention">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Data Retention
                </h2>
                <div> 
                    <p class='mb-5'>
                    Except as otherwise permitted or required by applicable law or regulation, we will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. 
                    Under some circumstances we may anonymize your personal information so that it can no longer be associated with you. We reserve the right to use such anonymous and de-identified data for any legitimate business purpose without further notice to you or your consent. 
                    </p>
                </div>

            </div>

            <!-- under-13  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="under-13">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Children under the age of 13
                </h2>
                <div>
                    <p class='mb-5'>
                        Our Site is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on the Site. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Site or on or through any of its features/register on the Site, make any purchases through the Site, use any of the interactive or public comment features of this Site, or provide any information about yourself to us, including your name, address, telephone number, email address, 
                        or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at <strong><a href="mailto:info@mara.boo?subject=Feedback&body=Hello" class="underline">info@mara.boo</a>.</strong> </p>
                </div>

            </div>

            <!-- access-and-correct  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="access-and-correct">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Accessing and correcting your personal information
                </h2>
                <div>
                    <p class='mb-5'>It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes. By law you have the right to request access to and to correct the personal information that we hold about you.</p>  
                    <p class='mb-5'>You can review and change your personal information by logging into the Site and visiting your account profile page.</p>  
                    <p class='mb-5'>If you want to review, verify, correct, or withdraw consent to the use of your personal information you may also send us an email at <a class="underline" href="mailto:enquiries@mara.boo?subject=Feedback&body=Hello">enquiries@mara.boo</a> to request access to, correct, or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect. We may charge you a fee to access your personal information, however, we will notify you of any fee in advance.</p> 
                    <p class='mb-5'>We may request specific information from you to help us confirm your identity and your right to access, and to provide you with the personal information that we hold about you or make your requested changes. Applicable law may allow or require us to refuse to provide you with access to some or all of the personal information that we hold about you, or we may have destroyed, erased, or made your personal information anonymous in accordance with our record retention obligations and practices. If we cannot provide you with access to your personal information, we will inform you of the reasons why, subject to any legal or regulatory restrictions.</p>  
                    <p class='mb-5'>We will provide access to your personal information, subject to exceptions set out in applicable privacy legislation. Examples of such exceptions include:</p> 
                    <ul class='pl-12 mb-5 lg:leading-9' style='list-style-type: disc;'> 
                        <li class='mb-3'>Information protected by solicitor-client privilege.</li>    
                        <li class='mb-3'>Information that is part of a formal dispute resolution process.</li>   
                        <li class='mb-3'>Information that is about another individual that would reveal their personal information or confidential commercial information.</li>   
                        <li class='mb-3'>Information that is prohibitively expensive to provide.</li> 
                    </ul>  
                    <p class='mb-5'>If you are concerned about our response or would like to correct the information provided, you may contact our [Privacy Officer/[NAME OR TITLE OF APPROPRIATE CONTACT]] at [EMAIL ADDRESS OF APPROPRIATE CONTACT].</p>  
                    <p class='mb-5'>If you delete your User Contributions from the Site, copies of your User Contributions may remain viewable in cached and archived pages or might have been copied or stored by other Site users.</p>
                </div>

            </div>

            <!-- withdraw  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="withdraw">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Withdrawing your consent
                </h2>
                <div>
                    <p class='mb-5'>
                        Where you have provided your consent to the collection, use, and transfer of your personal information, you may have the legal right to withdraw your consent under certain circumstances. 
                        To withdraw your consent, if applicable, contact us at <a href="mailto:info@mara.boo?subject=Feedback&body=Hello" class="underline">info@mara.boo</a>. Please note that if you withdraw your consent we may not be able to provide you with a particular product or service. We will explain the impact to you at the time to help you with your decision.</p>
                </div>

            </div>

            <!-- policies  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="policies">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Privacy policies of other websites
                </h2>
                <div>
                    <p class='mb-5'>
                        The Site contains links to other websites. This Policy applies only to the Site. If you navigate to any other website from a link on the Site, you should review the privacy policy of such website. 
                    </p>
                </div>

            </div>

            <!-- changes-to-policies -->

            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="changes-to-policies">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Changes to our privacy policy
                </h2>
                <div>
                    <p class='mb-5'>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Site home page.</p>  
                    <p class='mb-5'>We include the date the privacy policy was last revised at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically visiting our Site and this privacy policy to check for any changes.</p>
                </div>

            </div>


            <!-- contact-info -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="contact-info">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Contact information and challenging compliance
                </h2>
                <div>
                    <p class='mb-5'>We welcome your questions, comments, and requests regarding this privacy policy and our privacy practices. Please contact us at: </p>  <p class='mb-5'><strong>[Privacy Officer]</strong> </p>   
                    <p class='mb-5'><strong>[info@mara.boo] </strong> </p>   
                    <p class='mb-5'><strong>[and/or via our toll-free number: </strong> <br />54348658.4</p>
                </div>

            </div>




        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'policy'
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