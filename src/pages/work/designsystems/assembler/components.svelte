<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    import Colour from '../../_components/Colour.svelte';
    import FontStack from '../../_components/FontStack.svelte';
</script>

<section class="container max-w-2xl mx-auto px-4 heading-font-override">
    <div class="my-8">
        <!-- breadcrumbs -->
        <div class="breadcrumbs flex items-center space-x-3 mb-2 mt-4">
            <a href="/work" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Work
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <a href="/work/designsystems" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Design Systems
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">Assembler</div>
        </div>
        <!-- page heading -->
        <div class="text-3xl font-bold mb-10">Assembler Platform Design System</div>
        <!-- page content -->
        <div class="grid gap-6 border-b pb-10 mb-10"> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-2xl font-semibold">
                        Components
                    </div>
                </div>
                <p>Components are the reuseable UI blocks within the platform design system, when used in combination with each other, they create patterns and intuitive experiences across the Assembler platform.</p>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Buttons
                    </div>
                </div>
                <p>Buttons are informative action blocks used to trigger events and link between pages. Buttons are key components that are used throughout platform pages.</p>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="font-semibold">
                        Primary
                    </div>
                </div>
                <div class="space-x-1 heading-font-initial">
                    <div class="rounded-lg inline font-semibold text-white bg-blue-700 px-4 py-2">
                        Primary
                    </div>
                    <div class="rounded-lg inline font-semibold text-white bg-blue-800 px-4 py-2">
                        Hover
                    </div>
                    <div class="rounded-lg inline font-semibold text-white bg-blue-900 px-4 py-2">
                        Focused
                    </div>
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="font-semibold">
                        Secondary
                    </div>
                </div>
                <div class="space-x-1 heading-font-initial">
                    <div class="rounded-lg inline font-semibold text-white bg-gray-700 px-4 py-2">
                        Primary
                    </div>
                    <div class="rounded-lg inline font-semibold text-white bg-gray-800 px-4 py-2">
                        Hover
                    </div>
                    <div class="rounded-lg inline font-semibold text-white bg-gray-900 px-4 py-2">
                        Focused
                    </div>
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="font-semibold">
                        Basic
                    </div>
                </div>
                <div class="space-x-1 heading-font-initial">
                    <div class="rounded-lg inline font-semibold text-black bg-gray-200 px-4 py-2">
                        Primary
                    </div>
                    <div class="rounded-lg inline font-semibold text-black bg-gray-300 px-4 py-2">
                        Hover
                    </div>
                    <div class="rounded-lg inline font-semibold text-black bg-gray-400 px-4 py-2">
                        Focused
                    </div>
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="font-semibold">
                        Hollow
                    </div>
                </div>
                <div class="space-x-1 heading-font-initial">
                    <div class="rounded-lg inline font-semibold text-black px-4 py-2">
                        Primary
                    </div>
                    <div class="rounded-lg inline font-semibold text-black bg-gray-50 px-4 py-2">
                        Hover
                    </div>
                    <div class="rounded-lg inline font-semibold text-black bg-gray-100 px-4 py-2">
                        Focused
                    </div>
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="mt-4 font-semibold">
                        Icons
                    </div>
                </div>
                <p>Buttons can contain icons to help users quickly identify their purpose.</p>
            </div> 
            <div>
                <div class="space-x-1 heading-font-initial">
                    <div class="rounded-lg inline font-semibold text-white bg-blue-600 px-4 py-2">
                        <i class="fas fa-save opacity-70 mr-1"></i>
                        Save
                    </div>
                    <div class="rounded-lg inline font-semibold text-white bg-gray-800 px-4 py-2">
                        <i class="fas fa-user-plus opacity-70 mr-1"></i>
                        Add User
                    </div>
                    <div class="rounded-lg inline font-semibold text-black bg-gray-300 px-4 py-2">
                        <i class="fas fa-user-plus opacity-70 mr-1"></i>
                        View Documentation
                    </div>
                    <div class="rounded-lg inline font-semibold text-black bg-gray-300 px-4 py-2">
                        <i class="fas fa-info opacity-70"></i>
                    </div>
                    <div class="rounded-lg inline font-semibold text-black px-4 py-2">
                        <i class="fas fa-cogs opacity-70 mr-1"></i>
                        Settings
                    </div>
                </div>
                <script src="https://kit.fontawesome.com/86f8752325.js" crossorigin="anonymous"></script> 
            </div>
        </div>
        <!-- page content -->
        <div class="grid gap-6 border-b pb-10 mb-10">  
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Form Inputs
                    </div>
                </div>
                <p>Inputs are interactive fields that elicit responses from users. Forms within Assembler contain various different input types that allow users to enter data in different formats.</p>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-lg font-semibold">
                        Input States
                    </div>
                </div>
            </div> 
            <div class="grid gap-4 heading-font-initial">
                <div class="grid gap-1">
                    <div class="text-sm font-medium">
                        Standard
                    </div>
                    <input class="px-2 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
                <div class="grid gap-1">
                    <div class="text-sm font-medium">
                        Standard
                    </div>
                    <input class="px-2 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
            </div> 
        </div>
    </div>
</section>