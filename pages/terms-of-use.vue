<template>
    <div class="lg:flex gap-5 items-baseline text-black">
        <div class="px-5 lg:hidden">
            <h2 class="font-semibold text-3xl font-heading leading-9">Terms of Use</h2>
            <p class="font-semibold leading-6">Last updated: October 27th, 2023</p>
        </div>

        <div id="toc" class="lg:max-w-[30%] lg:fixed">
            <TableOfContent :tocs="termsOfUseToc"/>
        </div>
        <div class="px-5 lg:w-[65%] lg:ml-auto">
            <div class="mt-10 mb-20 hidden lg:block">
                <h2 class="font-semibold text-6xl font-heading leading-[73px]">Terms of Use</h2>
                <p class="font-semibold leading-8 text-xl">Last updated: October 27th, 2023</p>
            </div>

            <!-- acceptance  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="acceptance">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Acceptance of the site terms of use
                </h2>
                <div>
                    <p class="mb-5">
                        Grand Maraboo Technologies Limited, a Canadian corporation (“<strong>Company</strong>”, “<strong>we</strong>”, “<strong>us</strong>”, “<strong>our</strong>”) welcomes you to its Site https://mara.boo (the “<strong>Site</strong>”).
                        These terms of use, together with any documents and/or additional terms they expressly incorporate by reference (collectively, these “<strong>Terms of  Use</strong>” or “<strong>Terms</strong>”, or “<strong>User Agreement</strong>”),
                        govern your access to and use of, including any content, functionality, and services offered on or through the Site (the “<strong>Services</strong>”).
                    </p>
                    <p class="mb-5">
                        These Terms of Use apply to all visitors to the Site (“<strong>Site Visitors</strong>”), anyone who downloads or
                        uses the Company’s mobile applications (“<strong>Application Users</strong>”) and
                        anyone who registers for the Services (“<strong>Clients</strong>”).
                    </p>
                    <p class="mb-5">
                        Site Visitors, Application Users, and Clients are hereinafter referred to collectively as “<strong>Users</strong>” or “<strong>you</strong>” “<strong>your</strong>”.
                        The Site and the Application together with the Services and all content contained therein are referred to collectively as the “<strong>Interactive Functions</strong>” as further described in this User Agreement
                    </p>
                    <p class="mb-5">
                        BY ACCESSING AND USING THE SITE, YOU ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS OF USE AND OUR PRIVACY POLICY, FOUND AT <NuxtLink class="underline" to="/privacy-policy">https://www.mara.boo/privacy-policy</NuxtLink>,
                        INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS OF USE OR THE PRIVACY POLICY, YOU MUST NOT ACCESS OR USE THE SITE.
                    </p>
                    <p class="mb-5">
                        These Terms of Use describe the legally binding terms and conditions between you and the Company that govern your use of the Site and Services.
                        By visiting the Site and accessing the information, resources, services, products, and tools we provide, you understand and agree to accept and adhere to the following terms and conditions as stated in these Terms of Use.
                        You should be at least 18 years of age to access the Site. If you disagree with any of the provisions of these Terms, you must not access or use the Site.
                    </p>
                    <p class="mb-5">
                        A copy of these Terms of Use may be downloaded, saved, and printed for your reference.
                    </p>


                </div>

            </div>
            <!-- mod  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="mod">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Modifications to the Terms of Use and to the Site
                </h2>
                <div>
                    <p class="mb-5">
                        We reserve the right in our sole discretion to revise and update these Terms from time to time.
                        Any and all such modifications are effective immediately upon posting and apply to all access to and continued use of the Site. You agree to periodically review the terms and conditions in order to be aware of any such modifications and your continued use shall be your acceptance of these.
                    </p>
                    <p class="mb-5">
                        The information and material on this Site may be changed, withdrawn, or terminated at any time in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Site is restricted to users or unavailable at any time or for any period.
                    </p>
                </div>

            </div>
            <!-- use-of-site  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="use-of-site">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Your Use of the Site and Application and Account Set-Up and Security
                </h2>
                <div>
                    <p class="mb-5">
                        The security of your personal information is very important to us.
                        We use physical, electronic, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                    </p>
                    <p class="mb-5">
                        The safety and security of your information also depends on you.
                        Users are responsible for obtaining their own access to the Site.
                        Users are required to ensure that all persons who access the Site through a user's internet connection are aware of these Terms of Use and comply with them.
                        The Site, including content or areas of the Site, may require user registration.
                        It is a condition of your use of the Site that all the information you provide on the Site is correct, current, and complete.
                    </p>
                    <p class="mb-5">
                        Unfortunately, the transmission of information via the Internet is not completely secure.
                        Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Site.
                        Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Site.
                    </p>
                    <p class="mb-5">
                        Your provision of registration information and any submissions you make to the Site through any functionality such as applications, products, and tools we provide constitutes your consent to all actions we take with respect to such information consistent with our Privacy Policy, found at <NuxtLink class="underline" to="/privacy-policy">https://www.mara.boo/privacy-policy</NuxtLink>.
                    </p>
                    <p class="mb-5">
                        By visiting our Site and accessing the Interactive Functions we provide for you, you agree to use the Interactive Functions only for the purposes intended as permitted by (a) the terms of this User Agreement,
                        and (b) applicable laws, regulations and generally accepted online practices or guidelines.
                        In order to access some or all of the Interactive Functions, you may be required to provide certain information about yourself (such as identification, contact details, etc.) (“<strong>Registration Information</strong>”).
                        You agree that any information you provide will always be complete, accurate, correct and up to date.
                    </p>
                    <p class="mb-5">
                        You are responsible for maintaining the confidentiality of any login information associated with any account you use to access the Interactive Functions.
                        Accordingly, you are responsible for all activities that occur under your account.
                        Accessing any of the Interactive Functions by any means other than through the means we provide, is strictly prohibited. You specifically agree: (i)  not to access (or attempt to access) any of the Interactive Functions through any automated, unethical or unconventional means; (ii) attempting to copy, duplicate, reproduce, sell, trade, or resell the Interactive Functions is strictly prohibited; (iii) you will not use the Interactive Functions to create a product or service with features that are substantially similar to or that re-create the features of any of the Company’s products or services; and (iv) you are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.
                    </p>
                    <p class="mb-5">
                        Any username, password, or any other piece of information chosen by you, or provided to you as part of our security procedures, must be treated as confidential, and you must not disclose it to any other person or entity.
                        You must exercise caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.
                        You understand and agree that should you be provided an account, your account is personal to you and you agree not to provide any other person with access to the Site or Application or portions of it using your username, password, or other security information.
                        You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security.
                        You also agree to ensure that you logout from your account at the end of each session.
                        You are responsible for any password misuse or any unauthorized access.
                    </p>
                    <p class="mb-5">
                        We reserve the right at any time and from time to time, to disable or terminate your account, any username, password, or other identifier,
                        whether chosen by you or provided by us, in our sole discretion for any or no reason, including any violation of any provision of these Terms of Use.
                    </p>
                    <p class="mb-5">
                        You are prohibited from attempting to circumvent and from violating the security of this Site, including, without limitation: (a) accessing content and data that is not intended for you; (b) attempting to breach or breaching the security and/or authentication measures which are not authorized;
                        (c) restricting, disrupting or disabling service to users, hosts, servers, or networks; (d) illicitly reproducing TCP/IP packet header; (e) disrupting network services and otherwise disrupting Site owner's ability to monitor the Site; (f) using any robot, spider, or other automatic device, process,
                        or means to access the Site for any purpose, including monitoring or copying any of the material on the Site; (g) introducing any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful; (h) attacking the Site via a denial-of-service attack, distributed denial-of-service attack,
                        flooding, mailbombing, or crashing; and (i) otherwise attempting to interfere with the proper working of the Site.
                    </p>
                    <p class="mb-5">
                        We may provide various open communication tools on our website, including blog comments,
                        blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, and various social media services.
                        You understand that we generally do not pre-screen or monitor content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our website, then it is your personal responsibility to use these tools in a responsible and ethical manner.
                        By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share, or otherwise distribute any content that: (i) infringes on any trademark, patent, trade secret, copyright, or other proprietary rights of any party; (ii) contains any type of unauthorised or unsolicited advertising; (iii) impersonates any person or entity, including any Company employees or representatives; or (iv) is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language.
                    </p>
                    <p class="mb-5">
                        We have the right at our sole discretion to remove any content that we feel in our judgment does not comply with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any third-party copyrights or trademarks.
                        We are not responsible for any delay or failure in removing such content.
                        If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.
                    </p>
                </div>

            </div>
            <!-- services  -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="services">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Services and Payments
                </h2>
                <div>
                    <p class="mb-5">
                        Capitalized terms used in this section of the User Agreement but not previously defined
                        shall have the meaning ascribed to such terms at the end of this section of the User Agreement.
                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Limited License.</p>
                        Subject to the terms and conditions of this User Agreement, you are granted a non-exclusive, limited, non-transferable, non-sublicensable, freely revocable license to use the Interactive Functions for your personal, non-commercial use only and as permitted by the features of the Service. The Company reserves all rights not expressly granted herein in the Interactive Functions, the site, the application and any service. The Company may terminate this license at any time for any reason or no reason.
                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Services and Account Access. </p>
                        <p>By using the Services and Interactive Functions you understand and agree that: </p>
                        <ol class='pl-8 pt-2 lg:leading-9'>
                            <li>You will have only one Account.</li>
                            <li>
                                Remittance Services may not be activated unless we have been provided with the required information
                                so that we may identify you and can comply with all applicable Customer Due Diligence requirements. We shall keep records of such information
                                and documents in accordance with all applicable legal and regulatory requirements.
                            </li>
                            <li>
                                Reference to a currency (e.g. Canadian Dollars (CDN$)) shall mean that amount or the local currency equivalent in which your Account is denominated.
                            </li>
                            <li>
                                Any Transaction on your Account in a currency other than the currency in which your Account is denominated,
                                will require a currency conversion using an Applicable Exchange Rate.
                            </li>
                            <li>
                                The Remittance Services are not a credit or bank product, you must ensure that you have a sufficient funds to pay for each
                                of your Transactions and the applicable Fees.
                            </li>
                            <li>
                                Only persons over 18 years of age are entitled to register for and use the Remittance Services in the Province of Ontario; and persons who may register for and
                                access the Remittance Servies in any jurisdiction other than the Province of Ontario must do so at their own risk and are responsible for compliance with local laws
                                of their jurisdiction, including without limitation any age restrictions imposed by such jurisdiction with respect to registering for and using the Remittance Services.
                            </li>
                            <li>
                                Each time you seek access the Account we will require your Access Codes. As long as the correct Access Codes are entered, we assume that you are the person accessing the Services and
                                giving instructions and making Transactions and you will be liable for them, except to the extent otherwise expressly provided for herein. We can refuse to act on any instruction that we believe:
                                (i) was unclear; (ii) was not given by you; or (iii) might cause us to breach a legal or other duty; or if we believe the Remittance Service is being used for an illegal purpose.
                            </li>
                            <li>
                                You may access your Account information by logging into your Account through the Site, and form there you will be able to view details on your Transactions, including dates, currencies,
                                charges or exchange rates applied. This information is accessible at any time and can be stored and reproduced as necessary.
                            </li>
                            <li>
                                The value of each Transaction and the amount of any fees payable by you under this User Agreement will be paid by you at the time of completing such Transaction.
                            </li>
                            <li>
                                Once you have authorized a Transaction, the relevant payment order may not be withdrawn (or revoked) by you after the time it is received by us. A Transaction will be deemed to have been received by us at the time a payment order for a Transfer is provided to and received by us at the time it is issued by you via the Account.
                            </li>
                            <li>
                                Where a revocation of an authorised payment is agreed between us and you, we may charge a fee for revocation.
                            </li>
                            <li>
                                We will ensure that the amount of a Transfer is credited
                                to the Remittance Service provider of the payee by end of second Business Day
                                following the time of the receipt of your payment order.
                            </li>
                            <li>
                                We may refuse to authorise any use of the Remittance Services which could breach these terms and conditions or if we have reasonable grounds for suspecting that you or a third party have committed or are planning to commit fraud or any other illegal or un-permitted use of the Remittance Services.
                            </li>
                            <li>Your ability to use or access the Remittance Services may occasionally be interrupted. </li>
                            <li>Except as required by law, we shall not be responsible, and you will be solely responsible, for compiling and retaining your own copy of the data in your Account and your activities in connection with this Agreement. Except as expressly provided for herein, we shall have no obligation to store, retain, report, or otherwise provide any copies of, or access to, the Transaction data or any records, documentation or other information in connection with any Transactions or the Account.</li>
                            <li>You agree to only use the Remittance Services for lawful purposes and to adhere at all times to all laws, rules and regulations applicable to the use of the Remittance Services, including the terms of this Agreement.</li>
                            <li>You may not use the Remittance Services to receive or transfer any funds on behalf of anyone else, including without limitation on behalf of a company, partnership or other non-individual person.</li>
                            <li style="display: block !important;">You are responsible for the safekeeping of your username and password for your Account (“<strong class="w-full">Access Codes</strong>”) and the personal identification number for your Account (“<strong>PIN</strong>”). Do not share your PIN with anyone. You must keep your PIN safe, and separate from your Account or any record of your Account number and not disclose it to anyone else.</li>
                            <li>If you believe that someone else knows your Account or Account security details, contact us immediately.</li>
                        </ol>

                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Service Limits, Debits and Transfers. </p>
                        <p>In addition, you understand and agree that:  </p>
                        <ol class='pl-8 pt-2 lg:leading-9'>
                            <li>Transactions may be restricted by us based on Account type, individual usage patterns and payment risk profiles. Accounts are established in accordance with regulatory terms and conditions. For anti-money laundering and anti-fraud reasons we reserve our rights to change particular payment restrictions without notice and to the extent required to meet our regulatory obligations.</li>
                            <li>We will not be held liable for the payment process or fees associated with bank(s) and or intermediary bank(s) to process payments from you to us. Any fee(s) charged by third parties, not limited to receiving, processing or crediting a payment for you will be deducted by us before crediting the remaining balance to you.</li>
                            <li>You are responsible for checking and confirming payment details and fees before making a payment to us or to your Account.</li>
                            <li>You may be asked to provide us with evidence of source of funds in order for us to meet our regulatory requirements, in which case you agree to provide that evidence promptly. You represent and warrant to us that the evidence you provide to us is up to date, complete and accurate.</li>
                        </ol>
                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Remittance Services. </p>
                        <p>In addition, you understand and agree that:  </p>
                        <ol class='pl-8 pt-2 lg:leading-9'>
                            <li>You may access your Account information by logging into your Account through the Site. You will be able to view details on your Transactions, including dates, currencies, charges or exchange rates applied. This information is accessible at any time and can be stored and reproduced as necessary.</li>
                            <li>The value of each Transaction and the amount of any fees payable by you under this User Agreement will paid directly by you at the time of completing such Transaction.</li>
                            <li>Once a Transaction is authorised, the relevant payment order may not be withdrawn (or revoked) by you after the time it is received by us. A Transaction will be deemed to have been received by us at the time you authorise the Transaction and a payment order for a Transfer is provided to and received by us at the time it is issued by you via the Account.</li>
                            <li>Where a revocation of an authorised payment is agreed between us and you, we may charge a fee for revocation.</li>
                            <li>We will ensure that the amount of a Transfer is credited to the Remittance Service provider of the payee by end of the second Business Day following the time of the receipt of your payment order.</li>
                            <li>We may refuse to authorise any use of the Remittance Services which could breach these terms and conditions or if we have reasonable grounds for suspecting that you or a third party have committed or are planning to commit fraud or any other illegal or un-permitted use of the Remittance Services.</li>
                            <li>Your ability to use or access the Remittance Services may occasionally be interrupted, for example if we need to carry out maintenance on our Systems. Please contact Customer Services via our website to notify us of any problems you are experiencing using your Account or Account and we will endeavour to resolve any problem. </li>
                            <li>Except as required by law, we shall not be responsible, and you will be solely responsible, for compiling and retaining your own copy of the data in your Account and your activities in connection with this Agreement. Upon the termination of this User Agreement for any reason, we shall have no obligation to store, retain, report, or otherwise provide any copies of, or access to, the Transaction data or any records, documentation or other information in connection with any Transactions or the Account. </li>
                            <li>You agree to only use the Remittance Services for lawful purposes and to adhere at all times to all laws, rules and regulations applicable to the use of the Remittance Services, including the terms of this Agreement. </li>
                            <li>You may not use the Remittance Services to receive or transfer any funds on behalf of any other natural person or legal entity.</li>

                        </ol>
                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Identity Verification. </p>
                        <p class="mb-5">You must notify us within seven days of any change in the Account address or your other contact details. You will be liable for any loss that directly results from any failure to notify us of such a change as a result of undue delay, your gross negligence, willful misconduct or fraud. We will need to verify your new Account address and shall request the relevant proofs from you.</p>
                        <p class="mb-5">We reserve the right at any time to satisfy ourselves as to your identity and home address (for example, by requesting relevant original documents) including for the purposes of preventing fraud and/or money laundering. In addition, at the time of your application or at any time in the future, in connection with your Account, you authorise us to perform electronic identity verification checks directly or using relevant third parties.</p>

                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Termination and Cancelation of Services.  </p>
                        <p class="mb-5">Where you purchased the Remittance Services then you have a “hold period” of 14 days beginning on the date of the successful registration of your Account, to withdraw from the Remittance Services and cancel the Remittance Services, without any penalty but subject to your payment of any outstanding fees with respect to the provision of services before you cancel. You must contact us within this 14-day period and inform us that you wish to withdraw from the Remittance Services and you must not use the Remittance Services. We will then cancel the Remittance Services. After the hold period you may only terminate the Remittance Services as described herein.</p>
                        <p class="mb-5">Your Account has an expiry date (the “<strong>Expiry Date</strong>”). The Account (and any Secondary Account) and any IBAN linked to the Account will no longer be usable following the Expiry Date, and you must not use it after that time, but you will still be able to receive and send funds to and from the Account associated with the Account.</p>
                        <p class="mb-5">We shall have the absolute right to set-off, transfer, or apply sums transferred by you to us towards satisfaction of all or any liabilities and Fees owed to us that have not been paid or satisfied when due.</p>
                        <p class="mb-5">If your Account is inactive (including without limitation no access to the account or payment Transactions) for at least 2 consecutive years, we may (but we are not obliged to) notify you by sending an e-mail to your registered e-mail address and give you the option of keeping your Account open. If you do not respond to our notice within thirty (30) days, we will automatically close your Account.</p>
                        <p class="mb-5">We may terminate your use of the Remittance Services with 30 day’s prior notice.</p>
                        <p class="mb-5">Your use of your Account and any IBAN linked to the Account ends on the Expiry Date in accordance herewith.</p>
                        <p class="mb-5">This Agreement and your use of the Remittance Services will also end when your ability to initiate all Transactions ceases.</p>
                        <p class="mb-5">We may terminate or suspend, for such period as may reasonably be required, your use of the Remittance Services in whole or in part at any time or the processing of any Transaction if:</p>
                        <ol class='pl-8 pt-2 lg:leading-9'>
                            <li>there is any fault or failure in the relevant data processing system(s);</li>
                            <li>we reasonably believe that you have used or are likely to use the Remittance Services, or allow them to be used, in breach of this Agreement or to commit an offence;</li>
                            <li>we suspect that you have provided false or misleading information;</li>
                            <li>we are required to do so by law, the police, a court or any relevant governmental or regulatory authority;</li>
                            <li>required to fulfil our legal obligations in relation to the fight against money laundering and financing of terrorism;</li>
                            <li>there is suspicion of unauthorised or fraudulent access to or use of your Account or that any of its security features have been compromised, including the unauthorised or fraudulent initiation of a Transaction;</li>
                            <li>we have reasonable grounds to believe you are carrying out a prohibited or illegal activity; or</li>
                            <li>we are unable to verify your identity or any other information pertaining to you, your Account or a Transaction.</li>
                        </ol>
                        <p class="mb-5">If any Transactions are found to have been made using your Account or IBAN after expiry or any action has been taken by us hereunder, you must immediately repay such amounts to us.</p>
                        <p class="mb-5">Where it is practicable and lawful for us to do so or would not compromise reasonably justified security reasons, we will notify you via email of the suspension or restriction and the reasons for it before such measures take place or immediately thereafter.</p>
                        <p class="mb-5">We will reinstate your Account or execute the relevant Transaction(s) as soon as practicable after the reasons pursuant hereto no longer apply or exist.</p>

                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Liability for Unauthorized Transactions </p>
                        <p class="mb-5">Subject to this Agreement we will reimburse you in full for all unauthorised Transactions sent from your Account immediately and in any event no later than the end of two Business Day after noting or being notified of the Transaction (except where we have reasonable grounds for suspecting fraud), provided that you have informed us of the unauthorised Transaction without undue delay after becoming aware of the Transaction and in any event, no later than six months after the Transaction was executed. Where applicable, we shall restore your Account to the state in which it would have been had the unauthorised Transaction not taken place, so that that the credit value date shall be no later than the date the amount had been debited.</p>
                        <p class="mb-5">You may be liable for losses relating to any unauthorized Transactions resulting from the use of a lost or stolen Account or the misappropriation of your Account, unless the loss, theft or misappropriation was not detectable to you prior to payment (except where you acted fraudulently) or was caused by acts or lack of action of our employee, agent, branch or service provider.</p>
                        <p class="mb-5">You are liable for any losses incurred by an unauthorised Transaction if you have acted fraudulently or failed either intentionally or through gross negligence, to use your Account in accordance with the terms of this Agreement or to keep your Access Codes confidential and secure in accordance herewith.</p>
                        <p class="mb-5">We shall not liable for a refund or losses incurred by an incorrectly or non-executed payment Transaction if the details of the payee’s account provided by you were incorrect or we can prove that the full amount of the Transaction was duly received by the Remittance Service provider of the payee.</p>
                        <p class="mb-5">We shall not be liable for any unauthorised or incorrectly executed Transactions in case the Transaction was affected by abnormal and unforeseeable circumstances beyond our reasonable control or where we acted in accordance with a legal obligation.</p>
                        <p class="mb-5">Where we are liable for the incorrect execution of a Transfer that you receive under this Agreement, we shall immediately place the amount of the Transaction at your disposal in accordance and credit the corresponding amount to your Account no later than the date on which the amount would have been value dated, had the Transaction been correctly executed.</p>
                        <p class="mb-5">In the case of a non-executed or defectively executed Payment or Transfer by you as payer, we shall, regardless of whether we are liable, on request, make immediate efforts to trace the Transaction and notify you of the outcome, free of charge.</p>
                        <p class="mb-5">Where any request, Transaction, disputed Transaction, arbitration or reversed Transaction involves third party costs, you remain liable for these and they will be deducted from your Account or otherwise charged to you.</p>

                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Location of Service. </p>
                        <p class="mb-5">The Service is controlled and operated from facilities in the Province of Ontario, Canada. The Company makes no representations that the Service is appropriate or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own volition and are entirely responsible for compliance with all applicable Canadian and local laws and regulations, including but not limited to Canadian Sanction Laws.</p>
                    </p>
                    <p class="mb-5">
                        <p class="underline mb-5">Definitions. </p>
                        <p class="mb-5">As used herein:</p>
                        <p class="mb-5">“<strong>Account</strong>” means a data account in our systems where we record Transaction Data and other information from time to time;</p>
                        <p class="mb-5">“<strong>Account Information Service</strong>” means an online service to provide consolidated information on one or more payment accounts held by the Remittance Service user with another Remittance Service provider or with more than one Remittance Service provider;</p>
                        <p class="mb-5">“<strong>Account Information Service Provider</strong>” or “<strong>AISP</strong>” means the provider of an Account Information Service; </p>
                        <p class="mb-5">“<strong>Applicable Exchange Rate</strong>” the exchange rate available <NuxtLink to="/#exchange-rate" class="underline">/exchange rate</NuxtLink>.</p>
                        <p class="mb-5">“<strong>Authorised Person</strong>” means any person that you have designate to us is authorized authorize to access your Account;</p>
                        <p class="mb-5">“<strong>Business Day</strong>” means Monday to Friday, excluding bank and public holidays in the Province of Ontario, Canada;</p>
                        <p class="mb-5">“<strong>Canadian Sanction Laws</strong>” means the Special Economic Measures Act (Canada), the United Nations Act (Canada), the Freezing Assets of Corrupt Foreign Officials Act (Canada), the Criminal Code (Canada), the Proceeds of Crime (Money Laundering) and Terrorist Financing Act (Canada), and other similar Canadian laws imposing sanctions, each as amended;</p>
                        <p class="mb-5">“<strong>Currency Swap</strong>” means an agreement to exchange a specified amount of one currency for another currency at the Applicable Exchange Rate; </p>
                        <p class="mb-5">“<strong>Customer Due Diligence</strong>” the process we are required to go through to verify the identity of our Customers;</p>
                        <p class="mb-5">“<strong>Fees</strong>” the fees payable by you for the Remittance Services;</p>
                        <p class="mb-5">“<strong>IBAN</strong>” means an International Bank Account Number used to identify bank accounts for the purposes of international payments; or any virtual IBAN issued by our bank service provider that we allocate to your Account which can be used by you or for the purpose of making a Transfer of funds that will result in a credit of the relevant funds to your Account;</p>
                        <p class="mb-5">“<strong>Remittance Services</strong>” means the services supplied by us to you under this User Agreement, including remitting of funds and Currency Swap services;</p>
                        <p class="mb-5">“<strong>Transaction</strong>” a Direct Debit or a Transfer;</p>
                        <p class="mb-5">“<strong>Transaction Data</strong>” means all the data requires for a Transaction to be completed; and </p>
                        <p class="mb-5">“<strong>Transfer</strong>” a transfer of E-money from one Account to another Account.</p>



                    </p>

                </div>

            </div>

            <!-- data detention usgae and privacy-policy -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="data-retention">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Data Retention, Usage and Privacy Policy
                </h2>

                <p class="mb-5">
                    The Company is a registered Data Controller FINTRAC under registration number M23345406. In order for us to provide you with the services relating to your Account, we are required to collect and process personal data about you, with your consent or on a legal basis to meet our obligations for Anti-Money Laundering legislation or other governmental organization. Where applicable, if an Account holder is under 18 years of age, then parental consent is explicitly required.
                </p>

                <p class="mb-5">
                    The Company has adopted certain practices and procedures with respect to data collected and retained by the Company in connection with the provision of the Interactive Functions, and records related thereto, including Registration Information (the “Data”) to ensure (i) the Data is adequately protected and maintained, (ii) that Data no longer needed by the Company or which is of no value is discarded at the proper time, and (iii) that Data belonging to Users are safely and properly retained as needed and, when appropriate, returned or destroyed. We do not promise to store or keep showing any information and content that you may have posted. You agree that we have no obligation to store, maintain or provide you a copy of any content or information that you or others provide, except to the extent required by applicable law and as noted in our Privacy Policy.
                </p>

                <p class="mb-5">
                    By submitting your personal information and using our Site, you consent to the collection, use, reproduction, hosting, transmission, and disclosure of any such user content submissions in compliance with our Privacy Policy, found at <NuxtLink class="underline" to="/privacy-policy">https://www.mara.boo/privacy-policy</NuxtLink>, as we deem necessary for use of the Site and provision of services.
                </p>

                <p class="mb-5">
                    By using this Site you are consenting to the use of cookies which allow a server to recall previous requests or registration and/or IP addresses to analyze Site use patterns. You can set your browser to notify you before you receive a cookie, giving you the chance to decide whether to accept it. You can also set your browser to turn off cookies. If you do, however, some areas of the Site may not function adequately. For more information on this automated information gathering practices, see <NuxtLink class="underline" to="/privacy-policy#info-we-collect-through-cookies">https://www.mara.boo/privacy-policy#info-we-collect-through-cookies</NuxtLink>.
                </p>

            </div>

             <!-- Intellectual Property Rights and Ownership -->
             <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="intellect">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Intellectual Property Rights and Ownership
                </h2>

                <p class="mb-5">
                    You understand and agree that each of the Site and the Application, and its entire contents, features, and functionality, including, but not limited to, all information, software, code, data text, displays, graphics, photographs, images, video, audio, music, broadcast, design, presentation, Site layout, selection, and arrangement, are owned by the Company, its licensors, or other providers of such material and are protected in all forms by intellectual property laws including, without limitation, copyright, trademark, patent, trade secret, and any other proprietary rights.
                </p>

                <p class="mb-5">
                    The Company name, the Company logo and related names, logos, product and service names, designs, images, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. Other names, logos, product and service names, designs, images, and slogans mentioned, or which appear on this Site are the trademarks of their respective owners. Use of any such property, except as expressly authorized, shall constitute an infringement or violation of the rights of the property owner and may be a violation of federal or other laws and could subject the infringer to legal action.
                </p>

                <p class="mb-5">You may only use the Site for your personal and non-commercial use. You shall not directly or indirectly reproduce, compile for an internal database, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, in any form or medium whatsoever except:</p>
                <ol id="alpha-counter" class='pl-8 pt-2 lg:leading-9'>
                    <li>your computer and browser may temporarily store or cache copies of materials being accessed and viewed;</li>
                    <li>a reasonable number of copies for personal use only may be printed keeping any proprietary notices thereon, which may only be used for non-commercial and lawful personal use and not for further reproduction, publication, or distribution of any kind on any medium whatsoever; and</li>
                    <li>one single user copy may be downloaded with any proprietary notices intact, for your own personal, non-commercial use, conditional on your agreement to be bound by our end user licence agreement for such downloads.</li>
                </ol>
                <p class="mb-5">
                    Users are not permitted to modify copies of any materials from this Site nor delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site. You must not access or use for any commercial purposes any part of the Site or any services or materials available through the Site.
                </p>
                <p class="mb-5">
                    If you print off, copy, or download any part of our Site in breach of these Terms of Use, your right to use the Site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. You have no right, title, or interest in or to the Site or to any content on the Site, and all rights not expressly granted are reserved by the Company. Any use of the Site not expressly permitted by these Terms of Use is a breach of these Terms of Use and may infringe or violate copyright, trademark, and other intellectual property or other proprietary laws.
                </p>
            </div>

             <!-- Conditions of Use and User Submissions and Site Content Standards -->
             <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="conditions">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Conditions of Use and User Submissions and Site Content Standards
                </h2>


                <p class="mb-5">
                    As a condition of your access and use of the Site, you agree that you may use the Site only for lawful purposes and in accordance with these Terms of Use.
                </p>

                <p class="mb-5">
                    The following site content standards apply to any and all content, material, and information a user submits, posts, publishes, displays, or transmits (collectively, “<strong>submit</strong>”) to the Site or to other users or persons (collectively, “<strong>User Submissions</strong>”) and any and all Interactive Functions. Any and all User Submissions must also comply with all applicable federal, provincial, local, and international laws, regulations, and terms of service.
                </p>

                <p class="mb-5">
                    Without limiting the foregoing, you warrant and agree that your use of the Site and any User Submissions shall not:
                </p>

                <ol id="alpha-counter" class='pl-8 pt-2 lg:leading-9'>
                    <li style="display: block;">In any manner violate any applicable federal, provincial, local, or international law or regulation including, without limitation, any laws regarding the export of data or software, patent, trademark, trade secret, copyright, or other intellectual property, legal rights (including the rights of publicity and privacy of others) or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms of Use and our Privacy Policy found at <NuxtLink class="underline" to="/privacy-policy">https://www.mara.boo/privacy-policy</NuxtLink>.</li>
                    <li>In any manner violate the terms of use of any third-party Site that is linked to the Site, including but not limited to, any third-party social media Site.</li>
                    <li>Include or contain any material that is exploitive, obscene, harmful, threatening, abusive, harassing, hateful, defamatory, sexually explicit or pornographic, violent, inflammatory, or discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age or other such legally prohibited ground or be otherwise objectionable, such determination to be made in Company's sole discretion.</li>
                    <li>Involve stalking, attempting to exploit or harm any individual (including minors) in any way by exposing them to inappropriate content or otherwise or ask for personal information as prohibited under applicable laws, regulations, or code.</li>
                    <li>Involve, provide, or contribute any false, inaccurate, or misleading information.</li>
                    <li>Include sending, knowingly receiving, uploading, downloading, using, or reusing any material that does not comply with the conditions of use and User Submissions and Site Content Standards.</li>
                    <li>Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity (including, without limitation, by using email addresses or screen names associated with any of the foregoing).</li>
                    <li>Transmit, or procure the sending of, any advertisements or promotions [without our prior written consent], sales, or encourage any other commercial activities, including, without limitation, any “spam”, “junk mail”, “chain letter”, contests, sweepstakes and other sales promotions, barter, or advertising or any other similar solicitation.</li>
                    <li>Encourage any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm the Company or users of the Site or expose them to liability.</li>
                    <li>Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass, or alarm any other person.</li>
                    <li>Promote any illegal activity, or advocate, promote, or assist any unlawful act.</li>
                    <li>Give the impression that they originate from or are endorsed by us or any other person or entity, if this is not the case.</li>
                </ol>

            </div>

              <!-- User Submissions: Grant of Licence -->
              <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="user-submissions">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    User Submissions: Grant of Licence
                </h2>

                <p class="mb-5">
                    The Site may contain Interactive Functions allowing User Submissions on or through the Site.
                </p>

                <p class="mb-5">
                    None of the User Submissions you submit to the Site will be subject to any confidentiality by the Company. By providing any User Submission to the Site, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to a world-wide, royalty free, perpetual, irrevocable, non-exclusive licence to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for any purpose and according to your account settings and/or incorporate such material into any form, medium or technology throughout the world without compensation to you. You further waive any moral rights or other rights of authorship as a condition of submitting any User Submission.
                </p>

                <p class="mb-5">
                    By submitting the User Submissions, you declare and warrant that you own or have the necessary rights to submit the User Submissions and have the right to grant the licence hereof to us and our affiliates and service providers, and each of their and our respective licensees,
                    successors, and assigns to the User Submissions and comply with these Terms of Use. You represent and warrant that all User Submissions comply with applicable laws and regulations and the conditions of use and User Submissions and Site Content Standards set out in these Terms of Use.
                </p>

                <p class="mb-5">
                    You understand and agree that you, not the Company nor Company’s  subsidiaries, affiliates nor their respective directors, officers, employees, agents, service providers, contractors, licensors, suppliers, or successors, are fully responsible for any User Submissions you submit or contribute, and you are fully responsible and legally liable, including to any third party, for such content and its accuracy. We are not responsible or legally liable to any third party for the content or accuracy of any User Submissions submitted by you or any other user of the Site.
                </p>

            </div>

              <!-- Site Monitoring and Enforcement, Suspension, and Termination -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="site-monitoring">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Site Monitoring and Enforcement, Suspension, and Termination
                </h2>

                <p class="mb-5">Company has the right, without provision of notice to:</p>
                <ul class='pl-8 lg:leading-9 mb-5' style='list-style-type: disc;'>
                    <li>Remove or refuse to post on the Site any User Submissions for any or no reason in our sole discretion.</li>
                    <li>At all times, take such actions with respect to any User Submission deemed necessary or appropriate in our sole discretion, including, without limitation, for violating these Terms of Use.</li>
                    <li>Take appropriate legal action, including, without limitation, referral to law enforcement or regulatory authority, or notifying the harmed party of any illegal or unauthorized use of the Site. Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Site.</li>
                    <li>Terminate or suspend your access to all or part of the Site for any or no reason, including, without limitation, any violation of these Terms of Use.</li>

                </ul>
                <p class="mb-5">
                    YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS SUBSIDIARIES, AFFILIATES, AND THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, AND SUCCESSORS] FROM ANY AND ALL CLAIMS RESULTING FROM ANY ACTION TAKEN BY THE COMPANY AND ANY OF THE FOREGOING PARTIES RELATING TO ANY, INVESTIGATIONS BY EITHER THE COMPANY OR SUCH PARTIES OR BY LAW ENFORCEMENT AUTHORITIES.
                </p>
                <p class="mb-5">
                    We have no obligation, nor any responsibility to any party to monitor the Site or its use, and do not and cannot undertake to review material that you or other users submit to the Site. We cannot ensure prompt removal of objectionable material after it has been posted and we have no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party, subject to applicable laws.
                </p>
            </div>


            <!-- No Reliance -->
            <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="no-reliance">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    No Reliance
                </h2>

                <p class="mb-5">
                    The content on our Site is provided for general information purposes only. It is not intended to amount to advice on which you should rely. You must obtain more specific or professional advice before taking, or refraining from, any action or inaction on the basis of the content on our site.
                </p>

                <p class="mb-5">
                    Although we make reasonable efforts to update the information on our Site, we make no representations, warranties, or guarantees, whether express or implied, that the content on our Site is accurate, complete, or up to date. Your use of the Site is at your own risk and neither the Company nor its subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, licensees, suppliers, or successors have any responsibility or liability whatsoever for your use of this Site.
                </p>

                <p class="mb-5">
                    This Site may include content provided by third parties, including from other users and third-party licensors. All statements and/or opinions expressed in any such third-party content, other than the content provided by the Company, are solely the opinions and the responsibility of the person or entity providing those materials. Such materials do not necessarily reflect the opinion of the Company. Neither the Company nor its subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, licensees, suppliers, or successors have any responsibility or liability whatsoever to you, or any third party, for the content or accuracy of any third-party materials.
                </p>
            </div>

              <!-- Third-Party Sites -->
              <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="third-party">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Third-Party Sites
                </h2>

                <p class="mb-5">
                    For your convenience, this Site may provide links or pointers to third-party sites. We make no representations about any other Sites that may be accessed from this Site. If you choose to access any such sites, you do so at your own risk. We have no control over the contents of any such third-party sites and accept no responsibility for such sites or for any loss or damage that may arise from your use of them. You are subject to any terms and conditions of such third-party sites.
                </p>

                <p class="mb-5">
                    Such links to third-party sites from the Site may include links to certain social media features that enable you to link or transmit on your own or using certain third-party Sites, certain content from this Site. You may only use these features when they are provided by us and solely with respect to the content identified.
                </p>

                <p class="mb-5">
                    Our Site must not be framed on any other site, nor may you create a link to any part of our Site other than the homepage. We reserve the right to withdraw linking permission without notice. The Site in which you are linking must comply in all respects with the conditions of use and User Submissions and Site Content Standards. You agree to cooperate with us in causing any unauthorized framing or linking to immediately stop.
                </p>

                </div>

                  <!-- Geographic Restrictions -->
              <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="geographic">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Geographic Restrictions
                </h2>


                <p class="mb-5">
                    The owner of the Site is based in the Province of Ontario, Canada. This Site is not intended for use in any jurisdiction where its use is not permitted. If you access the Site from outside Canada, you do so at your own risk and you are responsible for compliance with local laws of your jurisdiction.
                </p>
             </div>

                  <!-- Disclaimer of Warranties -->
                  <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="disclaimer">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Disclaimer of Warranties
                </h2>


                <p class="mb-5">
                    YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SITE, ITS CONTENT, AND ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE SITE IS AT YOUR OWN RISK. THE SITE, ITS CONTENT, AND ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE SITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>

                <p class="mb-5">
                    NEITHER THE COMPANY NOR ITS PARENT, SUBSIDIARIES, AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS MAKE ANY WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY, OR AVAILABILITY OF THE SITE OR ITS CONTENTS. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ITS PARENT, SUBSIDIARIES, AFFILIATES OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS REPRESENT OR WARRANT THAT THE SITE, ITS CONTENT, OR ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE SITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>

                <p class="mb-5">
                    WE CANNOT AND DO NOT GUARANTEE OR WARRANT THAT FILES OR DATA AVAILABLE FOR DOWNLOADING FROM THE INTERNET OR THE SITE WILL BE FREE OF VIRUSES OR OTHER DESTRUCTIVE CODE. YOU ARE SOLELY AND ENTIRELY RESPONSIBLE FOR YOUR USE OF THE SITE AND YOUR COMPUTER, INTERNET, AND DATA SECURITY. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY DENIAL-OF-SERVICE ATTACK, DISTRIBUTED DENIAL-OF-SERVICE ATTACK, OVERLOADING, FLOODING, MAILBOMBING, OR CRASHING, VIRUSES, TROJAN HORSES, WORMS, LOGIC BOMBS, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SITE OR ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE SITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY SITE LINKED TO IT.
                </p>
                </div>

                 <!-- Limitation on Liability -->
                 <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="limitation">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Limitation on Liability
                </h2>

                <p class="mb-5">
                    EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, UNDER NO CIRCUMSTANCE WILL THE COMPANY NOR ITS PARENT, SUBSIDIARIES, AFFILIATES OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS BE LIABLE FOR NEGLIGENCE, GROSS NEGLIGENCE, NEGLIGENT MISREPRESENTATION, FUNDAMENTAL BREACH, DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT, BREACH OF CONTRACT, BREACH OF PRIVACY, OR OTHERWISE, EVEN IF THE PARTY WAS ALLEGEDLY ADVISED OR HAD REASON TO KNOW, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, OR RELIANCE ON, THE SITE, ANY LINKED SITES OR SUCH OTHER THIRD-PARTY SITES, NOR ANY SITE CONTENT, MATERIALS, POSTING, OR INFORMATION THEREON.
                </p>


                </div>

                  <!-- Indemnification -->
                  <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="indemn">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Indemnification
                </h2>

                <p class="mb-5">
                    To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless the Company, its parent, subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your breach of these Terms of Use or your use of the Site, including, but not limited to, your User Submissions, third-party sites, any use of the Site's content, services, and products other than as expressly authorized in these Terms of Use.
                </p>

                </div>

                 <!-- Governing Law and Choice of Forum -->
                 <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="governing-law">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Governing Law and Choice of Forum
                </h2>

                <p class="mb-5">
                    The Site and these Terms of Use will be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any choice or conflict of law provision, principle, or rule (whether of the laws of the Province of Ontario or any other jurisdiction) and notwithstanding your domicile, residence, or physical location.
                </p>

                <p class="mb-5">
                    Any action or proceeding arising out of or relating to this Site and under these Terms of Use will be instituted in the courts of the Province of Ontario and/or the Federal Court of Canada, and each party irrevocably submits to the exclusive jurisdiction of such courts in any such action or proceeding. You waive any and all objections to the exercise of jurisdiction over you by such courts and to the venue of such courts.
                </p>

                </div>

                <!-- Waiver -->
                 <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="waiver">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Waiver
                </h2>

                <p class="mb-5">
                    No failure to exercise, or delay in exercising, any right, remedy, power, or privilege arising from these Terms of Use operates, or may be construed, as a waiver thereof; and no single or partial exercise of any right, remedy, power, or privilege hereunder precludes any other or further exercise thereof or the exercise of any other right, remedy, power, or privilege.
                </p>

                </div>

                <!-- Severability -->
                <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="severability">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Severability
                </h2>

                <p class="mb-5">
                    If any term or provision of these Terms of Use is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of these Terms of Use or invalidate or render unenforceable such term or provision in any other jurisdiction.
                </p>

                </div>


                <!-- Entire Agreement -->
                <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="entire-agreement">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Entire Agreement
                </h2>

                <p class="mb-5">
                    The Terms of Use, our Privacy Policy constitute the sole and entire agreement between you and Grand Maraboo Technologies Limited regarding the Site and supersedes all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, regarding such subject matter.
                </p>

                </div>

                 <!-- Reporting and Contact -->
                 <div class="mb-10 lg:mb-20 lg:text-xl leading-7 lg:leading-8" id="reporting-and-contact">
                <h2 class="font-semibold text-2xl lg:text-[40px] font-heading leading-8 lg:leading-[48px] mb-5">
                    Reporting and Contact
                </h2>

                <p class="mb-5">
                    This Site is operated by Grand Maraboo Technologies Limited, <br /><a target="_blank" class="underline" href="https://maps.app.goo.gl/kFnWMVUXiTCnxkSR9">Canada - 169 ENTERPRISE BLVD. (YSPACE SUITE 300) Markham, ON, CANADA L6G-0E7</a>, <br /><a target="_blank" class="underline" href="https://maps.app.goo.gl/96GjHEE3yvMBUYdh9">Cote D’ivoire - 25 BP 663 Abidjan 25</a>.
                </p>

                <p class="mb-5">
                    Should you become aware of misuse of the Site including libelous or defamatory conduct, you must report it to the Company at <NuxtLink class="underline" to="/privacy-policy">https://www.mara.boo/privacy-policy</NuxtLink>.
                </p>

                <p class="mb-5">
                    All other feedback, comments, requests for technical support, and other communications relating to the Site should be directed to <NuxtLink class="underline" to="/privacy-policy">https://www.mara.boo/privacy-policy</NuxtLink>.
                </p>

                <p class="mb-5">
                    DATE: Oct 27, 2023
                </p>

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
        name: "Acceptance of the site terms of use",
        link: "acceptance"
    },
    {
        name: "Modifications to the Terms of Use and to the Site",
        link: "mod"
    },
    {
        name: "Your Use of the Site and Application and Account Set-Up and Security",
        link: "use-of-site"
    },
    {
        name: "Services and Payments",
        link: "services"
    },
    {
        name: "Data Retention, Usage and Privacy Policy",
        link: "data-retention"
    },
    {
        name: "Intellectual Property Rights and Ownership",
        link: "intellect"
    },
    {
        name: "Conditions of Use and User Submissions and Site Content Standards",
        link: "conditions"
    },
    {
        name: "User Submissions: Grant of Licence",
        link: "user-submissions"
    },
    {
        name: "Site Monitoring and Enforcement, Suspension, and Termination",
        link: "site-monitoring"
    },
    {
        name: "No Reliance",
        link: "no-reliance"
    },
    {
        name: "Third-Party Sites",
        link: "third-party"
    },
    {
        name: "Geographic Restrictions",
        link: "geographic"
    },
    {
        name: "Disclaimer of Warranties",
        link: "disclaimer"
    },
    {
        name: "Limitation on Liability",
        link: "limitation"
    },
    {
        name: "Indemnification",
        link: "indemn"
    },
    {
        name: "Governing Law and Choice of Forum",
        link: "governing-law"
    },
    {
        name: "Waiver",
        link: "waiver"
    },
    {
        name: "Severability",
        link: "severability"
    },
    {
        name: "Entire Agreement",
        link: "entire-agreement"
    },
    {
        name: "Reporting and Contact",
        link: "reporting-and-contact"
    },


]

</script>




<style scoped>
    ol > li {
        display: flex;
        margin-bottom: 10px;
        counter-increment: item;
    }

    ol > li::before {
    content:"(" counter(item, lower-roman) ")";
    margin-right: 15px;
    }

    #alpha-counter > li::before{
        content: "(" counter(item, lower-alpha) ")";
        margin-right: 15px;
    }

     @media (min-width: 1800px)  {
       #toc{
         max-width: 500px;
       }
     }
</style>
