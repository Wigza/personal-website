<script>
    import { metatags } from '@roxi/routify'
    import { url } from '@roxi/routify';
    import { afterPageLoad } from "@roxi/routify";

    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    
    $afterPageLoad(page => {
        function cycleImages() {
            let wrapper = document.getElementById('imgWrapper');
            let images = wrapper.getElementsByClassName('asmblr-ds-img');
        }
        cycleImages()
    })
</script>

<style>
    @keyframes slideUpBounce {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        60% {
            opacity: 1;
        }
        60% {
            transform: translateY(-5px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    div#imgWrapper {
        min-height: 355px;
    }
    .asmblr-ds-img {
        position: absolute;
        animation-fill-mode: forwards;
        animation-name: slideUpBounce;
        animation-timing-function: ease-in-out;
        animation-duration: 1000ms;
    }

</style>

<section class="container max-w-2xl mx-auto px-4 heading-font-override">
    <div class="my-8">
        <!-- breadcrumbs -->
        <div class="breadcrumbs flex items-center space-x-3 mb-2 mt-4">
            <a href="{$url('../../work')}" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Work
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">Design Systems</div>
        </div>
        <!-- page content -->
        <div class="grid gap-6">
            <div class="grid gap-2 leading-relaxed">
                <div class="text-3xl font-bold">Design Systems</div>
                <div class="grid gap-4 mt-4">
                    <a class="link-card rounded-lg p-8 bg-gray-100 hover:bg-gray-200 grid grid-cols-1 gap-2" href="{$url('../../work/designsystems/assembler')}">
                        <div class="font-semibold text-2xl">Assembler</div>
                        <p class="text-lg">Assembler’s platform design system has been carefully designed to give designers and developers the ability to build simple, beautiful and intuitive expereriences within the Assembler product suite.</p>
                        <div class="cta transition font-semibold flex items-center">
                            View Assembler Design System
                            <svg class="ml-1 h-4 w-4 duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <div id="imgWrapper" class="relative mt-8">
                            <div class="asmblr-ds-img img-01 overflow-hidden rounded-lg shadow-xl">
                                <img class="" src="../assets/assembler_ds_diagrams/dashboard.png" alt="">
                            </div>
                        </div>
                    </a>
                </div>
            </div> 
        </div> 
    </div>
</section>