<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    import Colour from '../../_components/Colour.svelte';
    import FontStack from '../../_components/FontStack.svelte';
    
    import { url } from '@roxi/routify';
</script>

<section class="container max-w-2xl mx-auto px-4 heading-font-override">
    <div class="my-8">
        <!-- breadcrumbs -->
        <div class="breadcrumbs flex items-center space-x-3 mb-2 mt-4">
            <a href="{$url('../../../work')}" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Work
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <a href="{$url('../../../work/designsystems')}" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Design Systems
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">Assembler</div>
        </div>
        <!-- page content -->
        <div class="grid gap-6">
            <div class="grid gap-2 leading-relaxed">
                <div class="text-3xl font-bold mb-2">Assembler Platform DS</div>
                <p class="text-lg">Assembler’s platform design system has been carefully designed to give designers and developers the ability to build simple, beautiful and intuitive expereriences within the Assembler product suite.</p>
                <div class="grid gap-4 mt-4">
                    <a class="rounded-lg p-8 bg-gray-100 grid grid-cols-1 gap-2" href="{$url('../../../work/designsystems/assembler/foundations')}">
                        <div class="font-semibold text-lg">Foundations</div>
                        <p>Foundations are the visual elements needed to create engaging end-to-end user experiences. This includes guidance on iconography, typography, layout and structure.</p>
                        <div class="font-semibold flex items-center">
                            View Foundations
                            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                    <a class="rounded-lg p-8 bg-gray-100 grid grid-cols-1 gap-2" href="{$url('../../../work/designsystems/assembler/components')}">
                        <div class="font-semibold text-lg">Components</div>
                        <p>Components are the reuseable UI blocks within the platform design system, when used in combination with each other, they create patterns and intuitive experiences across the Assembler platform.</p>
                        <div class="font-semibold flex items-center">
                            View Components
                            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                    <a class="rounded-lg p-8 bg-gray-100 grid grid-cols-1 gap-2" href="{$url('../../../work/designsystems/assembler/combinations')}">
                        <div class="font-semibold text-lg">Combinations</div>
                        <p>Combinations are re-useable groupings of components that aim to solve common patterns of user behaviour. Combinations create consistency throughout the user experience of the Assembler platforms.</p>
                        <div class="font-semibold flex items-center">
                            View Components
                            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div> 
        </div> 
    </div>
</section>