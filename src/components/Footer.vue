<script>

</script>

<template>
    <div class="bg-footerBg w-full">
        <div class="container mx-auto">
            <div class="block lg:flex lg:justify-between pt-[24px]">
                <div class="md:flex md:justify-between block w-full">
                    <!-- logo and social media -->
                    <div class="lg:px-[15.5px] flex flex-col justify-center items-center mb-[78px]">
                        <figure class="flex justify-center items-center">
                            <img class="md:w-[80px] lg:w-full" src="/logoFooter.svg" alt="logo footer">
                        </figure>
                        <figure class="flex mt-[38px] lg:gap-[24px] gap-[14px]">
                            <img src="/ig.svg" alt="instagram">
                            <img src="/in.svg" alt="linkedin">
                            <img src="/basket.svg" alt="ball">
                            <img src="/slack.svg" alt="slack">
                        </figure>
                    </div>
                    <!-- list -->
                    <div class="flex md:gap-[70px] gap-[18px]">
                        <!-- top news -->
                        <div class=" py-[10px] w-full">
                            <p class="lg:text-[24px] lg:leading-[28.8px] text-[16px] leading-[19.2px] font-semibold font-bricolage text-white">Top News</p>
                            <ul class="text-footerText font-bricolage lg:text-[16px] lg:leading-[19.2px] text-[14px] leading-[16.8px] font-light mt-[14px] flex flex-col gap-[10px]">
                                <li><a href="#">Disaster</a></li>
                                <li><a href="#">Politics</a></li>
                                <li><a href="#">Accident</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Sport</a></li>
                                <li><a href="#">Education</a></li>
                            </ul>
                        </div>
                        <!-- contact -->
                        <div class="py-[10px] text-white w-full">
                            <p class="lg:text-[24px] lg:leading-[28.8px] font-bricolage text-[16px] leading-[19.2px]">Contact Us</p>
                            <div class="mt-[14px] flex flex-col gap-[10px]">
                                <p class="lg:text-[16px] text-[14px] leading-[16.8px] lg:font-bold font-semibold font-bricolage lg:leading-[19.2px]">Email : </p>
                                <p><a class=" font-bricolage lg:text-[16px] lg:leading-[19.2px] text-[14px] leading-[16.8px] font-light text-footerText" href="#">mangcoding@gmail.com</a></p>
                                <p class="lg:text-[16px] text-[14px] leading-[16.8px] lg:font-bold font-semibold font-bricolage lg:leading-[19.2px]">No Telp :</p>
                                <p><a class=" font-bricolage lg:text-[16px] lg:leading-[19.2px] text-[14px] leading-[16.8px] font-light text-footerText" href="#">095695832655</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:ml-[23px] xl:ml-[83px] justify-center flex flex-col md:items-center md:text-center pb-[36px] lg:pb-0 mt-[24px] lg:mt-0">
                    <div class="">
                        <p class="lg:text-[24px] lg:leading-[28.8px] text-[16px] leading-[19.2px] font-bricolage font-semibold text-white py-[24px] lg:py-0 lg:mb-[14px]">Get Email Notification</p>
                        <p class="lg:text-[16px] lg:leading-[19.2px] text-[14px]leading-[16.8px] font-bricolage font-light text-footerText">Sign up to our e-mail newsletter to receive the latest news & updates.</p>
                    </div>
                    <form action="#" class="md:flex lg:gap-[15px] gap-[10px] lg:mt-[39px] mt-[16px] w-full">
                        <input type="text" placeholder="Email" class=" bg-inputFooter border border-gray-400 outline-none py-[8px] lg:pl-[17.5px] pl-[10px] text-white font-bricolage lg:w-[200%] md:w-[150%] w-full">
                        <button class="bg-white lg:px-[20px] px-[10px] py-[9px] lg:text-[18px] text-[16px] leading-[21.6px] font-light font-bricolage md:mt-0 mt-[12px] w-full">subcribe</button>
                    </form>
                </div>
            </div>
            <div class="border-t border-line lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[22px] text-[16px] leading-[22px] py-[20px] md:flex text-center text-white justify-between font-bricolage">
                <p>© 2024 mangcoding. All rights reserved.</p>
                <p>Terms of services</p>
            </div>
        </div>
    </div>
</template>