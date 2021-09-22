<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    import Colour from '../../_components/Colour.svelte';
    import FontStack from '../../_components/FontStack.svelte';
    
    import { url } from '@roxi/routify';
</script>

<section class="relative container max-w-2xl mx-auto px-4 heading-font-override">
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
            <a href="{$url('../../../work/designsystems/assembler')}" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Assembler
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">Assembler</div>
        </div>
        <!-- page heading -->
        <div class="text-3xl font-bold mb-10">Combinations</div>
    </div>
</section>