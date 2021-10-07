<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Tim Phillips, Designer'
    metatags.description = 'Description coming soon...'
    
    import { url } from '@roxi/routify';
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/86f8752325.js" crossorigin="anonymous"></script> 
</svelte:head>

<style>
    /* tabs menu */
    .bib-item {
        transition: ease .15s;
    }
    .bib-item:not(.main) {
        opacity: .8;
    }
    .bib-item:hover {
        background: rgba(255,255,255,.15);
        cursor: pointer;
        opacity: 1;
    }
    .resource-tab-menu::-webkit-scrollbar-track {
        -webkit-box-shadow: 0 0 0px transparent;
        border-radius: 0px;
        background-color: var(--c-p-darkgrey-08);
    }

    .resource-tab-menu::-webkit-scrollbar {
        width: 6px;
        /* background-color: var(--c-p-darkgrey-06); */
    }

    .resource-tab-menu::-webkit-scrollbar-thumb {
        border-radius: 50em;
        -webkit-box-shadow: inset 0 0 0px transparent;
        background-color: var(--c-p-darkgrey-06);
        border: 5px solid var(--c-p-darkgrey-08);
    }
    .resource-tab-menu::-webkit-scrollbar-thumb:hover {
        background-color: var(--c-p-darkgrey-05);
    }

    .resource-tab-menu {
        overflow-x: scroll;
        transform: rotateX(180deg);
        height: 54px;
    }
    .resource-tab-menu .item {
        transform: rotateX(180deg);
        min-width: 250px;
        max-width: 250px;
    }
    .resource-tab-menu .item.active {
        background: white;
    }
    .resource-tab-menu .item.active .tab-icon.blue  {
        background: var(--c-p-blue-03);
        color: white;
    }
    .resource-tab-menu .item.active::before,
    .resource-tab-menu .item.active::after {
        position: absolute;
        content: '';
        background: transparent;
        height: 10px;
        width: 10px;
        bottom: 0px;
    }
    .resource-tab-menu .item.active::before {
        box-shadow: 6px 0 0px 0px white;
        border-radius: 0 0 0.375rem 0;
        left: -10px;
    }
    .resource-tab-menu .item.active::after {
        box-shadow: -6px 0 0px 0px white;
        border-radius: 0 0 0 0.375rem ;
        right: -10px;
    }
    /* page headers */
    /* vertical indicators */
    .page-header-cues .absolute:after {
        content: '';
        width: 2px;
        height: 10px;
        position: absolute;
        background: var(--c-p-darkgrey-06);
        left: calc(50% - 1px);
    }
    .page-header-cues .absolute.-bottom-12:after {
        top: -10px;
    }
    /* horizontal indicators */
    .page-header-cues .absolute:before {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        background: var(--c-p-darkgrey-06);
    }
    .page-header-cues .absolute.-top-12:before {
        bottom: -10px;
    }
    .page-header-cues .absolute.-bottom-12:before {
        top: -10px;
    }
    .page-header-cues .absolute.-top-12.one {
        width: 48px;
        margin-left: .75rem;
    }
    .page-header-cues .absolute.-top-12.four {
        right: 0;
        margin-right: .75rem;
        width: 252px;
    }
    .page-header-cues .absolute.-top-12.six {
        width: 137px;
        margin-left: 200px;
    }
    .page-header-cues .absolute.-top-12.two {
        width: 114px;
        margin-left: 77px;
    }
    .page-header-cues .absolute.-bottom-12.five {
        width: 260px;
        margin-left: 161px;
    }
    .page-header-cues .absolute.-bottom-12.three {
        width: 62px;
        margin-left: 75px;
    }
</style>

<section class="relative container max-w-2xl mx-auto px-4 heading-font-override">
    <div class="mt-8">
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
            <div class="truncate max-w-xs overflow-ellipsis text-sm font-bold text-gray-900">Combinations</div>
        </div>
        <!-- page heading -->
        <div class="text-3xl font-bold mb-10">Combinations</div>
        <!-- page content -->
        <div class="grid gap-6">  
            <div class="grid gap-2 leading-relaxed">
                <div class="rounded-md bg-gray-100 mb-4 p-4 leading-snug">
                    <span><span class="font-semibold">Please note:</span> This page is still under construction, any lack of content is a result of that fact. </span>
                </div>
                <div>
                    <div class="text-xl font-semibold">
                        Forms
                    </div>
                </div>
                <p>Forms are a collection of inputs that allow users to enter data into the platform, to create and configure resources.</p>
            </div> 
        </div>
    </div>
</section>
<section style="background:var(--b-slider);" data-theme="assembler" class="relative py-8 px-4 my-8 heading-font-initial">
    <div class="container max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-start justify-center space-x-0 space-y-8 md:space-x-12 md:space-y-0">
            <div class="space-y-4">
                <div class="text-center text-xs text-gray-600"><span class="font-semibold">Create Role Form</span> Role Details</div>
                <div class="w-full md:w-96 bg-white rounded-lg shadow-md heading-font-initial">
                    <div class="pt-4 px-4 border-b leading-relaxed">
                        <div class="text-lg font-semibold">Create New Role</div>
                        <div class="tab-menu flex items-center space-x-4">
                            <div class="item py-2 text-black font-medium text-sm border-b-2 border-blue-600">Details</div>
                            <div class="item py-2 text-gray-500 text-sm">Email Settings</div>
                        </div>
                    </div>
                    <div class="p-4 leading-relaxed">
                        <div class="grid gap-6">
                            <div>
                                <div class="font-medium">
                                    Role Details
                                </div>
                                <p class="text-sm opacity-70">Roles are granted to users. When added to a group, a role can provide access to records or specific actions.</p>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm font-medium">
                                    Role Name *
                                </div>
                                <input class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="eg. Client Owner" type="text">
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Code *</span>
                                    <div class="text-xs opacity-60">Codes must be camel case, best practice is to keep them short and descriptive.</div>
                                </div>
                                <input class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="eg. clientOwner" type="text">
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Role Invitation Type *</span>
                                    <div class="text-xs opacity-60">Choose whether the role can be invited from an email adress or an existing group of users.</div>
                                </div>
                                <select style="color: var(--c-p-darkgrey-05);" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72">
                                    <option>Select Option</option>
                                    <option>Email</option>
                                    <option>Existing Group</option>
                                </select>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Invite Group *</span>
                                    <div class="text-xs opacity-60">Choose the group which can invite users to this role.</div>
                                </div>
                                <select style="color: var(--c-p-darkgrey-05);" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72">
                                    <option>Select Option</option>
                                    <option>Admins</option>
                                    <option>Sitewide Admins</option>
                                    <option>Default Access</option>
                                </select>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Inherit Role</span>
                                    <div class="text-xs opacity-60">Give this role type to the user which creates it.</div>
                                </div>
                                <div class="grid grid-cols-1 gap-2">
                                    <label class="radio-btn inline-flex items-center">
                                        <input type="radio" name="radio-direct" checked="" value="false">
                                        <span class="checkmark"></span>
                                        <span class="ml-8 text-sm opacity-70">Yes</span>
                                    </label>
                                    <label class="radio-btn inline-flex items-center">
                                        <input type="radio" name="radio-direct" checked="true" value="true">
                                        <span class="checkmark"></span>
                                        <span class="ml-8 text-sm opacity-70">No</span>
                                    </label>
                                </div>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Inherit Application Wide Role</span>
                                    <div class="text-xs opacity-60">Give the user of this role an application wide role that they automatically inherit.</div>
                                </div>
                                <select style="color: var(--c-p-darkgrey-05);" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72">
                                    <option>Select Option</option>
                                    <option>Admins</option>
                                    <option>Sitewide Admins</option>
                                    <option>Default Access</option>
                                </select>
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
            <div class="space-y-4">
                <div class="text-center text-xs text-gray-600"><span class="font-semibold">Create Role Form</span> Role Email Details</div>
                <div class="w-full md:w-96 bg-white rounded-lg shadow-md heading-font-initial">
                    <div class="pt-4 px-4 border-b leading-relaxed">
                        <div class="text-lg font-semibold">Create New Role</div>
                        <div class="tab-menu flex items-center space-x-4">
                            <div class="item py-2 text-gray-500 text-sm">Details</div>
                            <div class="item py-2 text-black font-medium text-sm border-b-2 border-blue-600">Email Settings</div>
                        </div>
                    </div>
                    <div class="p-4 leading-relaxed">
                        <div class="grid gap-6">
                            <div>
                                <div class="font-medium">
                                    Role Notification Email Settings
                                </div>
                                <p class="text-sm opacity-70">Roles can have email notifications that are sent to users that are granted this role.</p>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm font-medium">
                                    Email Subject Line
                                </div>
                                <input class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72" placeholder="eg. Client Owner" type="text">
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Linked Site</span>
                                    <div class="text-xs opacity-60">Select which Site (eg. Default) you want the links within this role email to connect to.</div>
                                </div>
                                <select style="color: var(--c-p-darkgrey-05);" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg w-72">
                                    <option>Select Option</option>
                                    <option>Default</option>
                                    <option>Public Site</option>
                                </select>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Send Email if User Exists</span>
                                    <div class="text-xs opacity-60">Choose whether you want this role email notification to be sent if the user already exists within your application.</div>
                                </div>
                                <div class="grid grid-cols-1 gap-2">
                                    <label class="radio-btn inline-flex items-center">
                                        <input type="radio" name="radio-direct-two" checked="" value="yes">
                                        <span class="checkmark"></span>
                                        <span class="ml-8 text-sm opacity-70">Yes</span>
                                    </label>
                                    <label class="radio-btn inline-flex items-center">
                                        <input type="radio" name="radio-direct-two" checked="true" value="no">
                                        <span class="checkmark"></span>
                                        <span class="ml-8 text-sm opacity-70">No</span>
                                    </label>
                                </div>
                            </div>
                            <div class="grid gap-2">
                                <div class="text-sm">
                                    <span class="font-medium">Send Email if User <span class="font-bold">DOES NOT</span> Exist</span>
                                    <div class="text-xs opacity-60">Choose to send this role email notification if the user does’nt exist within your application.</div>
                                </div>
                                <div class="grid grid-cols-1 gap-2">
                                    <label class="radio-btn inline-flex items-center">
                                        <input type="radio" name="radio-group-three" checked="" value="1">
                                        <span class="checkmark"></span>
                                        <span class="ml-8 text-sm opacity-70">Yes</span>
                                    </label>
                                    <label class="radio-btn inline-flex items-center">
                                        <input type="radio" name="radio-group-three" checked="true" value="2">
                                        <span class="checkmark"></span>
                                        <span class="ml-8 text-sm opacity-70">No</span>
                                    </label>
                                </div>
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
    </div>
</section>
<section class="relative container max-w-2xl mx-auto px-4 heading-font-override">
    <!-- page content -->
    <div class="grid gap-6">  
        <div class="grid gap-2 leading-relaxed">
            <div>
                <div class="text-xl font-semibold">
                    Resource Page Headers
                </div>
            </div>
            <p>Pages within the Builder platform exist within tabs, much similar to how sites live within tabs in most modern web browsers. Consistent inconography, typograpy and layout helps users quicky determine the type of resource open currently, and how they’re able to interact with it.</p>
            <ol class="list-inside list-decimal space-y-2">
               <li><span class="font-semibold">Resource Badge</span> </li>
               <li><span class="font-semibold">Resource Name</span></li>
               <li><span class="font-semibold">Resource Type</span> </li>
               <li><span class="font-semibold">Resource Actions</span> </li>
               <li><span class="font-semibold">Resource Meta Data</span> <span class="italic">(conditional)</span> in this example, it shows this resource belongs to the default site, uses the default/root layout, has the public access group set for the page permissions and is a public page</li>
               <li><span class="font-semibold">Dynamic Information</span> <span class="italic">(conditional)</span> shows dynamic information related to the resource, in this example it shows the status of this resources page compilation status</li>
            </ol>
        </div> 
    </div>
</section>
<section style="background:var(--b-slider);" data-theme="assembler" class="relative py-8 lg:py-16 px-4 my-8 heading-font-initial">
    <div class="container max-w-7xl mx-auto">
        <div class="relative page-header-cues">
            <div class="hidden lg:block absolute -top-12 one">
                <div class="mx-auto rounded-full bg-black text-white w-6 h-6 text-sm font-bold flex justify-center items-center">1</div>
            </div>
            <div class="hidden lg:block absolute -top-12 two">
                <div class="mx-auto rounded-full bg-black text-white w-6 h-6 text-sm font-bold flex justify-center items-center">2</div>
            </div>
            <div class="hidden lg:block absolute -top-12 six">
                <div class="mx-auto rounded-full bg-black text-white w-6 h-6 text-sm font-bold flex justify-center items-center">6</div>
            </div>
            <div class="hidden lg:block absolute -top-12 four">
                <div class="mx-auto rounded-full bg-black text-white w-6 h-6 text-sm font-bold flex justify-center items-center">4</div>
            </div>
            <div class="hidden lg:block absolute -bottom-12 three">
                <div class="mx-auto rounded-full bg-black text-white w-6 h-6 text-sm font-bold flex justify-center items-center">3</div>
            </div>
            <div class="hidden lg:block absolute -bottom-12 five">
                <div class="mx-auto rounded-full bg-black text-white w-6 h-6 text-sm font-bold flex justify-center items-center">5</div>
            </div>
            <div class="shadow-md p-3 bg-white flex justify-between items-start lg:items-center flex-col lg:flex-row">
                <div class="flex items-center justify space-x-4">
                    <div style="background: var(--c-s-orange-01);" class="w-12 h-12 rounded-xl flex text-white items-center justify-center">
                        <i class="text-xl fas fa-file-image"></i>
                    </div>
                    <div>
                        <div class="w-11/12 lg:w-max flex items-center space-x-2">
                            <div>
                                <div class="font-bold lg:text-lg relative">
                                    default/home
                                </div>
                            </div>
                            <div>
                                <div style="color: var(--c-p-darkgrey-04);" class="truncate text-xs space-x-2">
                                    <i class="fas fa-check-circle opacity-50"></i> Compiled Succesfully
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div style="color: var(--c-p-darkgrey-04);" class="text-sm font-medium">Site Page</div>
                            <div class="hidden lg:flex items-center space-x-3">
                                <div style="background: var(--c-p-darkgrey-06);" class="w-1 h-1 rounded-xl"></div>
                                <div style="color: var(--c-p-darkgrey-04);" class="text-xs">
                                    <i class="fas fa-globe opacity-50"></i> Default
                                </div>
                                <div style="color: var(--c-p-darkgrey-04);" class="text-xs">
                                    <i class="fas fa-layer-group opacity-50"></i> default/root
                                </div>
                                <div style="color: var(--c-p-darkgrey-04);" class="text-xs">
                                    <i class="fas fa-users opacity-50"></i> public access
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="space-y-2 lg:space-x-1">
                        <div class="text-sm inline-block lg:inline rounded-lg font-semibold text-white bg-blue-600 px-4 py-2">
                            Save
                        </div>
                        <div class="text-sm inline-block lg:inline rounded-lg font-semibold text-white bg-gray-800 px-4 py-2">
                            Settings
                        </div>
                        <div class="text-sm inline-block lg:inline rounded-lg font-semibold text-black bg-gray-300 px-4 py-2">
                            <i class="fas fa-info opacity-70"></i>
                        </div>
                        <div class="text-sm inline-block lg:inline rounded-lg font-semibold text-black hover:bg-gray-200 py-2 px-3">
                            <i class="fas fa-ellipsis-h opacity-100"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="relative container max-w-2xl mx-auto px-4 heading-font-override">
    <!-- page content -->
    <div class="grid gap-6">  
        <div class="grid gap-2 leading-relaxed">
            <div>
                <div class="text-xl font-semibold">
                    Resource Tabs
                </div>
            </div>
            <p>Resource Tabs work in unison with Resource Page headers.</p>
            <p>Application resources exist within tabs in App Builder, mimicing most modern browsers, allowing users to keep multiple resources open, within a single space while building / maintaining their application.</p>
            <ol class="list-inside list-decimal space-y-2">
               <li><span class="font-semibold">Active Tab</span> Active tabs show the resource colour in their tab icon background and have a white background that blends into the page header white background, communicating its active state to users</li>
               <li><span class="font-semibold">Inactive Tab</span> inactive tabs are grey scale in colour to communicate thier inactivty to users</li>
               <li><span class="font-semibold">Tab Icon</span> helps users quickly identify the resource</li>
               <li><span class="font-semibold">Close Tab Button</span> allows users to close the resource</li>
               <li><span class="font-semibold">Tab Menu Scrollbar</span> this shows conditionally, based on the amount of tabs open and the width of the screen</li>
               <li><span class="font-semibold">Resource Page Header</span> this component displays information relating to the active resource. Consistent inconography, typograpy and layout helps users quicky determine the type of resource open, and how they’re able to interact with it.</li>
            </ol>
        </div> 
    </div>
</section>
<section style="background:var(--b-slider);" data-theme="assembler" class="relative py-8 lg:py-16 px-4 my-8 heading-font-initial">
    <div class="container max-w-7xl mx-auto">
        <div class="relative">
            <div class="shadow-md">
                <div class="resource-tab-menu flex items-start" style="background: var(--c-p-darkgrey-08);">
                    <div class="opacity-70 hover:opacity-100 item text-gray-700 relative flex items-center h-9 rounded-tr-md rounded-tl-md cursor-pointer">
                        <div class="tab-icon purple mx-2 text-xs rounded w-6 h-6 flex items-center justify-center">
                             <i class="fas fa-random"></i>
                        </div>
                        <span class="block truncate w-9/12 text-xs">child/workflows</span>
                        <div class="absolute p-2 text-xs right-0"><i class="fas fa-times opacity-50 hover:opacity-100"></i></div>
                    </div>
                    <div class="item active relative text-gray-700 flex items-center h-9 rounded-tr-md rounded-tl-md cursor-pointer">
                        <div class="tab-icon blue mx-2 text-xs rounded w-6 h-6 flex items-center justify-center">
                             <i class="fas fa-users"></i>
                        </div>
                        <span class="block truncate w-9/12 text-xs">Application Permissions</span>
                        <div class="absolute p-2 text-xs right-0"><i class="fas fa-times opacity-50 hover:opacity-100"></i></div>
                    </div>
                    <div class="opacity-70 hover:opacity-100 item text-gray-700 relative flex items-center h-9 rounded-tr-md rounded-tl-md cursor-pointer">
                        <div class="tab-icon purple mx-2 text-xs rounded w-6 h-6 flex items-center justify-center">
                             <i class="fas fa-users"></i>
                        </div>
                        <span class="block truncate w-9/12 text-xs">child/newAutomation</span>
                        <div class="absolute p-2 text-xs right-0"><i class="fas fa-times opacity-50 hover:opacity-100"></i></div>
                    </div>
                    <div class="opacity-70 hover:opacity-100 item text-gray-700 relative flex items-center h-9 rounded-tr-md rounded-tl-md cursor-pointer">
                        <div class="tab-icon orange mx-2 text-xs rounded w-6 h-6 flex items-center justify-center">
                             <i class="fas fa-file-image"></i>
                        </div>
                        <span class="block truncate w-9/12 text-xs">default/login</span>
                        <div class="absolute p-2 text-xs right-0"><i class="fas fa-times opacity-50 hover:opacity-100"></i></div>
                    </div>
                    <div class="opacity-70 hover:opacity-100 item text-gray-700 relative flex items-center h-9 rounded-tr-md rounded-tl-md cursor-pointer">
                        <div class="tab-icon orange mx-2 text-xs rounded w-6 h-6 flex items-center justify-center">
                             <i class="fas fa-file-image"></i>
                        </div>
                        <span class="block truncate w-9/12 text-xs">default/client/home</span>
                        <div class="absolute p-2 text-xs right-0"><i class="fas fa-times opacity-50 hover:opacity-100"></i></div>
                    </div>
                    <div class="opacity-70 hover:opacity-100 item text-gray-700 relative flex items-center h-9 rounded-tr-md rounded-tl-md">
                        <div class="purple mx-2 text-xs rounded w-6 h-6 flex items-center justify-center">
                             <i class="fas fa-database"></i>
                        </div>
                        <span class="block truncate w-9/12 text-xs">getAllClients</span>
                        <div class="absolute p-2 text-xs right-0"><i class="fas fa-times"></i></div>
                    </div>
                </div>
                <div class="p-3 bg-white flex justify-between items-start lg:items-center flex-col lg:flex-row">
                    <div class="flex items-center justify space-x-4">
                        <div style="background: var(--c-p-blue-03);" class="w-12 h-12 rounded-xl flex text-white items-center justify-center">
                            <i class="text-xl fas fa-users"></i>
                        </div>
                        <div>
                            <div class="w-11/12 lg:w-max flex items-center space-x-2">
                                <div>
                                    <div class="font-bold lg:text-lg relative">
                                        Permissions
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div style="color: var(--c-p-darkgrey-04);" class="text-sm font-medium">Application Wide</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="space-y-2 lg:space-x-1">
                            <div class="text-sm inline-block lg:inline rounded-lg font-semibold text-black bg-gray-300 px-4 py-2">
                                <i class="fas fa-info opacity-70"></i>
                            </div>
                            <div class="text-sm inline-block lg:inline rounded-lg font-semibold text-black hover:bg-gray-200 py-2 px-3">
                                <i class="fas fa-ellipsis-h opacity-100"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="relative container max-w-2xl mx-auto px-4 heading-font-override">
    <!-- page content -->
    <div class="grid gap-6">  
        <div class="grid gap-2 leading-relaxed">
            <div>
                <div class="text-xl font-semibold">
                    Branch Information Banner
                </div>
            </div>
            <p>Assembler uses git version control software to allow users to create, manage and edit individual branches of their application, to allow multiple users to collaborate on the process of building / maintaining web applications.</p>
            <p>The branch information banner helps users identify which branch they’re currently on within their application. This banner is identifiable at all times, throughout the entire application.</p>
            <ol class="list-inside list-decimal space-y-2">
               <li><span class="font-semibold">Current Branch</span> this shows the user what branch they’re currently working on, users can also expand this menu item to open details about the current branch, view all active branches and switch over to these branches if needed.</li>
               <li><span class="font-semibold">Branch Actions</span> (dynamic) this menu item indicates information to the user about their current branch, and in some cases, provides them an action in regards to their workflow within a branch.</li>
               <li><span class="font-semibold">Site Link</span> this links users (in a new tab) to their application site.</li>
            </ol>
        </div> 
    </div>
</section>
<section style="background:var(--b-slider);" data-theme="assembler" class="relative py-8 lg:py-16 px-4 my-8 heading-font-initial">
    <div class="container max-w-7xl mx-auto">
        <div class="relative">
            <div style="background:var(--c-p-blue-03);" class="text-sm px-2 flex justify-between items-center text-white">
                <div class="flex justify-between items-center">
                    <span class="py-1 px-2 space-x-1 bib-item main"><i class="br fas fa-code-branch"></i> <span>Current Branch</span> <i class="fas fa-caret-down opacity-50"></i></span>
                    <span class="py-1 px-2 space-x-1 bib-item hidden lg:inline"><i class="br fas fa-save opacity-80"></i> <span>Save Changes</span></span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="py-1 px-2 space-x-1 bib-item"><i class="br fas fa-external-link-alt opacity-80"></i> <span>View Site</span></span>
                </div>
            </div>
        </div>
    </div>
</section>