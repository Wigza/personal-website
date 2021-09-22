<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    import SliderImage from './_components/SliderImage.svelte';

    import { url } from '@roxi/routify';
    
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    import 'swiper/css';
    import "swiper/css/pagination"

    import SwiperCore, { Pagination } from 'swiper';

    SwiperCore.use([Pagination]);

</script>

<section class="container max-w-2xl mx-auto px-4 heading-font-override">
    <div class="my-8">
        <div class="text-3xl font-bold mb-10">Work</div>
        <!-- heading -->
        <div class="grid gap-6 border-b pb-10 mb-10">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Assembler
                    </div>
                    <div class="text-sm font-normal uppercase">
                        July 2020 - Present
                    </div>
                </div>
                <p>I work as the lead product designer and front end engineer at Assembler, within their platform team, which works across the entire spectrum of the Assembler product suite.</p>
                <p>Assembler is a platform that allows users to create and manage web applications. Assembler’s product suite is made up of 3 seperate platforms that work in combination to provide users the necessary tools to build web applications. I've had the opportunity to design these platforms, creating a harmonious <a href="{$url('./designsystems/assembler')}" class="underline">design system</a> that provides a consistent and intuitive user experience across the product suite. </p>
                <p>I’ve breifly outlined these platforms and provided examples of each below.</p>
            </div>    
            <div class="grid gap-2 leading-relaxed">
                <div class="text-base font-semibold">
                    Dashboard
                </div>
                <p>Dashboard is the DevOps management platform that simplifies the process of setting up web applications, managing the environments they exist within and the maintenance involved with each of the resources within these environments such as databases, user lists and authentication and servers.</p>
                <Swiper pagination="{true}" class="showcase">
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Dashboard" 
                            imgType="Organisation Page" 
                            imgSrc="assets/dashboard/dashboard_01.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Dashboard" 
                            imgType="Application Page" 
                            imgSrc="assets/dashboard/dashboard_02.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Dashboard" 
                            imgType="Application Environment Page" 
                            imgSrc="assets/dashboard/dashboard_03.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Dashboard" 
                            imgType="Organisation Team Modal" 
                            imgSrc="assets/dashboard/dashboard_04.png" 
                        />
                    </SwiperSlide>
                </Swiper>
            </div>            
            <div class="grid gap-2 leading-relaxed">
                <div class="text-base font-semibold">
                    App Builder
                </div>
                <p>Builder is the core platform that users interact with to create web pages within their application, set up functional requirements and manage the users within their application.</p>
                <Swiper pagination="{true}" class="showcase">
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="App Builder" 
                            imgType="Landing Page" 
                            imgSrc="assets/builder/appbuilder_01.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="App Builder" 
                            imgType="Application Permissions" 
                            imgSrc="assets/builder/appbuilder_02.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="App Builder" 
                            imgType="Form Builder" 
                            imgSrc="assets/builder/appbuilder_03.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="App Builder" 
                            imgType="Site Builder" 
                            imgSrc="assets/builder/appbuilder_04.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="App Manager" 
                            imgType="Application Users" 
                            imgSrc="assets/builder/appbuilder_05.png" 
                        />
                    </SwiperSlide>
                </Swiper>
            </div>            
            <div class="grid gap-2 leading-relaxed">
                <div class="text-base font-semibold">
                    End User Application
                </div>
                <p>This is the user facing application that is built through the previous platforms. While it might not seem like a separate platform as its custom built by users within Builder, careful consideration is taken into the page ui components that are available to users as building blocks for their application.</p>
                <Swiper pagination="{true}" class="showcase">
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="End User Application" 
                            imgType="Register Page" 
                            imgSrc="assets/application/application_01.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="End User Application" 
                            imgType="Landing Page" 
                            imgSrc="assets/application/application_02.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="End User Application" 
                            imgType="Record Landing Page" 
                            imgSrc="assets/application/application_03.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="End User Application" 
                            imgType="Record Form Page" 
                            imgSrc="assets/application/application_04.png" 
                        />
                    </SwiperSlide>
                </Swiper>
            </div>   
            <p>Outside of my work on the Assembler platform, I've also had the opportunity to build and design the company's public  <a class="underline" target="_blank" href="https://assembler.app/">site</a>, which has been the leading web presence and marketing tool for Assembler since its creation.</p>
        </div> 
        <div class="grid gap-6 border-b pb-10 mb-10">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        PwC Australia
                    </div>
                    <div class="text-sm font-normal uppercase">
                        July 2018 - July 2020
                    </div>
                </div>
                <p>I worked in PwC Australia's <a href="https://www.pwc.com/gx/en/about/new-ventures.html" target="_blank" class="underline">New Ventures</a> (Ventures) unit for just over 2 years. The Ventures program is an internal start up incubator for teams creating SaaS solutions within PwC. </p>
                <p>I was involved with the <a href="https://www.pwc.com.au/services/new-ventures/pwc-automation-engine.pdf" target="_blank" class="underline">Automation Engine</a> (AE) product (which would later become Assembler), a platform that enabled internal teams to automate complex, often manual processes/tasks and transform them into web applications.</p>
                <p>I worked as the product designer and supported the engineering team with front end development, I created the design system for both the AE platform and the applications that we built on top of AE.</p>
                <Swiper pagination="{true}" class="showcase">
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Automation Engine" 
                            imgType="Dashboard Page" 
                            imgSrc="assets/pwc/AE_01.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Automation Engine" 
                            imgType="Record Overview" 
                            imgSrc="assets/pwc/AE_02.png" 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImage 
                            imgCategory="Automation Engine" 
                            imgType="Automation Builder" 
                            imgSrc="assets/pwc/AE_03.png" 
                        />
                    </SwiperSlide>
                </Swiper>
            </div> 
        </div>        
        <div class="grid gap-6">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Previous Experience
                    </div>
                    <div class="text-sm font-normal uppercase">
                        January 2015 - 2018
                    </div>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-base font-semibold">Just Group</div>
                    <p>I worked as a Web Designer / Front End Developer on the Smiggle brand for just over 18 months. During my time at Smiggle I had the opportunity to work on countless digital marketing campaigns across their entire international market base (Australia, New Zealand, UK, Ireland and Asia).</p>
                    <Swiper pagination="{true}" class="showcase">
                        <SwiperSlide>
                            <SliderImage 
                                imgCategory="Smiggle" 
                                imgType="Category Page" 
                                imgSrc="assets/smiggle/smiggle_01.png" 
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderImage 
                                imgCategory="Smiggle" 
                                imgType="Product Page" 
                                imgSrc="assets/smiggle/smiggle_02.png" 
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderImage 
                                imgCategory="Smiggle" 
                                imgType="Landing Page" 
                                imgSrc="assets/smiggle/smiggle_03.png" 
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-base font-semibold mt-4">General Assembly</div>
                    <p>I decided to enrol General Assembly's <a class="underline" href="https://generalassemb.ly/education/front-end-web-development/melbourne" target="_blank">Front End Web Development</a> (FEWD) 10 week course in 2016, which focused on HTML, CSS and JavaScript and how they each play a key role in building websites.</p> 
                    <p>Upon successful completion of the course, I was asked to join the following FEWD course as an instructional assistant, a role that saw me assist with students questions during and outside of class time, mark student's weekly projects and present a topic of my choice, regarding web development, to the class.</p>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-base font-semibold mt-4">Web123</div>
                    <p>I worked as web designer at <a class="underline" href="https://web123.com.au/" target="_blank">Web123</a>, a medium sized web agency where I had the opportunity to design a number of websites across a variety of small to medium sized businesses.</p>
                </div>
            </div> 
        </div>        
    </div>
</section>