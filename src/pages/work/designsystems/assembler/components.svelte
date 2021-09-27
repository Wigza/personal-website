<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    
    import { url } from '@roxi/routify';
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/86f8752325.js" crossorigin="anonymous"></script> 
</svelte:head>

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
            <a href="{$url('../../../work/designsystems/assembler')}" class="truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                Assembler
            </a>
            <div class="text-sm font-medium text-gray-300">/</div>
            <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">Components</div>
        </div>
        <!-- page heading -->
        <div class="text-3xl font-bold mb-10">Components</div>
        <!-- page content -->
        <div class="grid gap-6 border-b pb-10 mb-10">  
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
                        Secondary
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
                        Basic
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
                <div class="space-y-2 lg:space-x-1 heading-font-initial">
                    <div class="inline-block lg:inline rounded-lg font-semibold text-white bg-blue-600 px-4 py-2">
                        <i class="fas fa-save opacity-70 mr-1"></i>
                        Save
                    </div>
                    <div class="inline-block lg:inline rounded-lg font-semibold text-white bg-gray-800 px-4 py-2">
                        <i class="fas fa-user-plus opacity-70 mr-1"></i>
                        Add User
                    </div>
                    <div class="inline-block lg:inline rounded-lg font-semibold text-black bg-gray-300 px-4 py-2">
                        <i class="fas fa-user-plus opacity-70 mr-1"></i>
                        View Documentation
                    </div>
                    <div class="inline-block lg:inline rounded-lg font-semibold text-black bg-gray-300 px-4 py-2">
                        <i class="fas fa-info opacity-70"></i>
                    </div>
                    <div class="inline-block lg:inline rounded-lg font-semibold text-black px-4 py-2">
                        <i class="fas fa-cogs opacity-70 mr-1"></i>
                        Settings
                    </div>
                </div>
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
            <div class="grid gap-6 heading-font-initial">
                <div class="grid gap-2">
                    <div class="text-sm font-medium">
                        Standard
                    </div>
                    <input class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
                <div class="grid gap-2">
                    <div class="text-sm font-medium">
                        Hover
                    </div>
                    <input class="px-3 py-2 text-sm border border-gray-400 rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
                <div class="grid gap-2">
                    <div class="text-sm font-medium">
                        Active
                    </div>
                    <input class="px-3 py-2 text-sm border border-blue-600 ring rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
                <div class="grid gap-2 text-red-600">
                    <div class="text-sm font-medium">
                        Negative
                    </div>
                    <input class="px-3 py-2 text-sm border border-red-600 ring ring-red-100 rounded-lg w-72" placeholder="" value="tim@bad.email.com" type="text">
                    <div class="text-xs flex items-center font-medium mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Must be a valid email
                    </div>
                </div>
                <div class="grid gap-2 text-green-600">
                    <div class="text-sm font-medium">
                        Positive
                    </div>
                    <input class="px-3 py-2 text-sm border border-green-600 ring ring-green-100 rounded-lg w-72" placeholder="" value="2jxks9^ags0as894" type="text">
                    <div class="text-xs flex items-center font-medium mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Strong password
                    </div>
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-lg font-semibold">
                        Variations
                    </div>
                </div>
            </div> 
            <div class="grid gap-6 heading-font-initial">
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Description</span>
                        <div class="mt-1 opacity-60">Descriptions allow you to further describe the purpose of the input.</div>
                    </div>
                    <input class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
                <div class="grid gap-2">
                    <div class="text-sm font-medium">
                        Required *
                    </div>
                    <input class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-lg font-semibold">
                        Types
                    </div>
                </div>
            </div> 
            <div class="grid gap-6 heading-font-initial">
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Text</span>
                    </div>
                    <input class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Client" type="text">
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Number</span>
                    </div>
                    <input class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="1200" type="number">
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Text Area</span>
                    </div>
                    <textarea class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" rows="3"></textarea>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Select</span>
                    </div>
                    <select class="px-3 py-2 text-sm border border-gray-300 rounded-lg w-72">
                        <option>Group</option>
                        <option>Wedding</option>
                        <option>Birthday</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Checkbox</span>
                    </div>
                    <div class="grid grid-cols-1 gap-1">
                        <label class="inline-flex items-center">
                            <input class="form-checkbox" type="checkbox" checked="true">
                            <span class="ml-2 text-sm opacity-70">Option 1</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input class="form-checkbox" type="checkbox" checked="">
                            <span class="ml-2 text-sm opacity-70">Option 2</span>
                        </label>
                    </div>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Radio</span>
                    </div>
                    <div class="grid grid-cols-1 gap-1">
                        <label class="inline-flex items-center">
                            <input class="form-radio" type="radio" checked="" name="radio-direct" value="1">
                            <span class="ml-2 text-sm opacity-70">Option 1</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input class="form-radio" type="radio" checked="true" name="radio-direct" value="2">
                            <span class="ml-2 text-sm opacity-70">Option 2</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input class="form-radio" type="radio" checked="" name="radio-direct" value="3">
                            <span class="ml-2 text-sm opacity-70">Option 3</span>
                        </label>
                    </div>
                </div>
                <div class="grid gap-2 leading-relaxed">
                    <div class="text-sm">
                        <span class="font-medium">Toggle Switch</span>
                    </div>
                    <div class="grid grid-cols-1 gap-1">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="grid grid-cols-1 gap-1">
                        <label class="switch">
                            <input type="checkbox" checked="true">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </div> 
        </div>
        <!-- page content -->
        <div data-theme="assembler" class="grid gap-6 border-b pb-10 mb-10">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Labels
                    </div>
                </div>
                <p>Labels are visual indicators for categories of information and number totals relating to an item.</p>
            </div> 
            <div class="grid gap-2">
                <div>
                    <div class="text-lg font-semibold">
                        Informative
                    </div>
                </div>
                <div class="space-y-1 space-y-1 lg:space-y-0 lg:space-x-1 heading-font-initial">
                    <div style="background:var(--c-p-darkgrey-08);color:var(--c-p-darkgrey-03);" 
                    class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        Standard
                    </div>
                    <div style="background:var(--c-info-positive-03);color:var(--c-info-positive-content);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        Positive
                    </div>
                    <div style="background:var(--c-info-warning-03);color:var(--c-info-warning-content);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        Warning
                    </div>
                    <div style="background:var(--c-info-negative-03);color:var(--c-info-negative-content);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        Negative
                    </div>
                </div>
            </div>
            <div class="grid gap-2">
                <div>
                    <div class="text-lg font-semibold">
                        Icons
                    </div>
                </div>
                <div class="space-y-1 lg:space-y-0 lg:space-x-1 heading-font-initial">
                    <div style="background:var(--c-p-darkgrey-08);color:var(--c-p-darkgrey-03);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        <i class="fas fa-layer-group"></i> Layout
                    </div>
                    <div style="background:var(--c-info-positive-03);color:var(--c-info-positive-content);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        <i class="fas fa-check"></i> Success
                    </div>
                    <div style="background:var(--c-info-warning-03);color:var(--c-info-warning-content);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        <i class="fas fa-info-circle"></i> Public Page
                    </div>
                    <div style="background:var(--c-info-negative-03);color:var(--c-info-negative-content);" class="inline-block text-sm font-medium rounded-lg px-3 py-1 uppercase">
                        <i class="fas fa-exclamation-triangle"></i> Compilation Error
                    </div>
                </div>
            </div>
        </div> 
        <!-- page content -->
        <div data-theme="assembler" class="grid gap-6 border-b pb-10 mb-10">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Breadcrumbs
                    </div>
                </div>
                <p>Breadcrumbs are are secondary navigation menus that show users their location within the platform. </p>
            </div> 
            <div class="breadcrumbs flex items-center space-x-3 mb-2 mt-4 heading-font-initial">
                <div class="link truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                    Item
                </div>
                <div class="text-sm font-medium text-gray-300">/</div>
                <div class="link truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                    Item
                </div>
                <div class="text-sm font-medium text-gray-300">/</div>
                <div class="link truncate max-w-xs overflow-ellipsis text-sm font-medium text-gray-700 hover:text-blue-600">
                    Item
                </div>
                <div class="text-sm font-medium text-gray-300">/</div>
                <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">
                    Active Item
                </div>
            </div>
        </div> 
        <!-- page content -->
        <div data-theme="assembler" class="grid gap-6 border-b pb-10 mb-10">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Dropdown Menus
                    </div>
                </div>
                <p>Dropdown menus display lists of options / actions to users when they are active.</p>
            </div> 
            <div class="grid gap-2">
                <div>
                    <div class="text-lg font-semibold">
                        Initial
                    </div>
                </div>
                <div class="heading-font-initial">
                    <div class="inline-block rounded-lg font-semibold cursor-pointer text-black bg-gray-300 py-2 px-3 hover:bg-gray-400">
                        <i class="fas fa-ellipsis-h opacity-70"></i>
                    </div>
                    <div class="inline-block rounded-lg font-semibold cursor-pointer text-black px-4 py-2 hover:bg-gray-200">
                        <i class="fas fa-cogs opacity-70 mr-1"></i>
                        File Types
                        <i class="fas fa-caret-down opacity-70 ml-1"></i>
                    </div>
                </div>
            </div>
            <div class="grid gap-2">
                <div>
                    <div class="text-lg font-semibold">
                        Active
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 heading-font-initial">
                    <div class="h-48 lg:h-72">
                        <div class="relative inline-block rounded-lg cursor-pointer text-black bg-gray-400 py-2 px-3">
                            <i class="fas fa-ellipsis-h opacity-100"></i>
                            <!-- dropdown menu -->
                            <div class="mt-2 dropdown top-10 left-0 absolute py-2 bg-white shadow-lg rounded overflow-hidden">
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    <i class="mr-2 fas fa-trash opacity-50 group-hover:opacity-100"></i> Delete
                                </div>
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    <i class="mr-2 fas fa-copy opacity-50 group-hover:opacity-100"></i> Duplicate
                                </div>
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    <i class="mr-2 fas fa-user-plus opacity-50 group-hover:opacity-100"></i> Add Users
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-64 lg:h-72">
                        <div class="relative inline-block rounded-lg cursor-pointer text-black px-4 py-2 bg-gray-200">
                            <i class="fas fa-cogs mr-1"></i>
                            <span class="font-semibold">File Types</span>
                            <i class="fas fa-caret-down ml-1"></i>
                            <!-- dropdown menu -->
                            <div class="mt-2 dropdown top-10 left-0 absolute py-2 bg-white shadow-lg rounded overflow-hidden">
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    Word
                                </div>
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    Excel
                                </div>
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    PDF
                                </div>
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    CSV
                                </div>
                                <div class="group min-w-max flex items-center py-2 px-4 hover:bg-gray-100">
                                    Blank Template
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- page content -->
        <div data-theme="assembler" class="grid gap-6 mb-10">
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Modal Windows
                    </div>
                </div>
                <p>Modals are used frequently throughout Assembler’s platforms. Modals display content that requires user interaction within a window displayed above the page.</p>
                <p>Modals appear conditionally, after a user has interacted with an activating element on the page which is in most cases a button.</p>
            </div>
            <div class="grid gap-2">
                <div class="font-semibold">
                    Interactive Modal
                </div>
                <div style="background:var(--c-p-darkgrey-04);" class="flex justify-center items-center w-full px-8 py-12">
                    <div class="relative w-full lg:w-4/5 bg-white rounded-lg shadow-xl heading-font-initial">
                        <div class="absolute -top-8 -right-8 p-3 text-white opacity-50 hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div class="p-4 border-b leading-relaxed">
                            <div class="font-semibold">New Record Type</div>
                            <div class="text-sm text-gray-500">To create a new record type, please fill out the short form below.</div>
                        </div>
                        <div class="p-4 leading-relaxed">
                            <div class="grid gap-6">
                                <div class="grid gap-2">
                                    <div class="text-sm font-medium">
                                        Name
                                    </div>
                                    <input class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                                </div>
                                <div class="grid gap-2">
                                    <div class="text-sm font-medium">
                                        Code
                                    </div>
                                    <input class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="Placeholder" type="text">
                                </div>
                                <div class="flex justify-end space-x-2">
                                    <div class="rounded-lg inline-block font-semibold text-white bg-blue-700 px-4 py-1">
                                        Save
                                    </div>
                                    <div class="rounded-lg inline-block font-semibold text-black bg-gray-200 px-4 py-1">
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="grid gap-2">
                <div class="font-semibold">
                    Informative Modal
                </div>
                <div style="background:var(--c-p-darkgrey-04);" class="flex justify-center items-center w-full px-8 py-12">
                    <div class="relative w-full bg-white rounded-lg shadow-xl heading-font-initial">
                        <div class="absolute -top-8 -right-8 p-3 text-white opacity-50 hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div class="pt-4 px-4 border-b leading-relaxed">
                            <div class="font-semibold">Record Type Permissions</div>
                            <div class="tab-menu flex items-center space-x-4">
                                <div class="item py-2 text-black font-medium text-sm border-b-2 border-blue-600">About</div>
                                <div class="item py-2 text-gray-500 text-sm">Roles & Groups</div>
                            </div>
                        </div>
                        <div class="p-4 leading-relaxed">
                            <div class="tab-content">
                                <div class="tab-content grid gap-6">
                                    <p class="text-sm leading-relaxed text-gray-800">Permissions consists of <span class="font-semibold">Roles</span> and <span class="font-semibold">Groups.</span> Users are invited to your application through different role types (eg. an Owner role), that role lives within a group (eg. Client Access group). It’s at the group level at which a user gains access to your appllication.</p>
                                    <img src="/assets/assembler_ds_diagrams/permissions.png" alt="permissions graphic">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</section>