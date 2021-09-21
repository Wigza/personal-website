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
                        Foundations
                    </div>
                </div>
                <p>Assembler is a platform that allows users to create and manage web applications. Assembler’s product suite is made up of 3 seperate platforms that work in combination to provide users the necessary tools to build web applications. </p>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Colours
                    </div>
                </div>
                <p>Assembler is a platform that allows users to create and manage web applications. Assembler’s product suite is made up of 3 seperate platforms that work in combination to provide users the necessary tools to build web applications. </p>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Primary
                    </div>
                </div>
                <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
                    <Colour 
                        colour="Blue"
                        rgb="0, 83, 189"
                        hex="#0053B3"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Dark Grey"
                        rgb="0, 83, 189"
                        hex="#23272A"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        bordered="border border-black"
                        colour="White"
                        rgb="255, 255, 255"
                        hex="#ffffff"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Secondary
                    </div>
                </div>
                <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
                    <Colour 
                        colour="Green"
                        rgb="0, 83, 189"
                        hex="#27B357"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Orange"
                        rgb="35, 39, 42"
                        hex="#E96423"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Purple"
                        rgb="128, 62, 236"
                        hex="#803EEC"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Red"
                        rgb="232, 46, 56"
                        hex="#E82E38"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Teal"
                        rgb="65, 212, 219"
                        hex="#41D4DB"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Yellow"
                        rgb="255, 188, 23"
                        hex="#FFBC17"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Neutral
                    </div>
                </div>
                <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
                    <Colour 
                        colour="Neutral 01"
                        rgb="0, 0, 0"
                        hex="#000000"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Neutral 02"
                        rgb="35, 39, 42"
                        hex="#23272A"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Neutral 03"
                        rgb="60, 67, 72"
                        hex="#3C4348"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Neutral 04"
                        rgb="94, 104, 112"
                        hex="#5E6870"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Neutral 05"
                        rgb="158, 164, 169"
                        hex="#9EA4A9"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Neutral 06"
                        rgb="187, 193, 198"
                        hex="#BBC1C6"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Neutral 07"
                        rgb="208, 213, 220"
                        hex="#D0D5DC"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Neutral 08"
                        rgb="225, 228, 232"
                        hex="#E1E4E8"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Neutral 09"
                        rgb="250, 251, 252"
                        hex="#FAFBFC"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                </div>
            </div> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Status
                    </div>
                </div>
                <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
                    <Colour 
                        colour="Warning 01"
                        rgb="255, 196, 20"
                        hex="#FFC414"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Warning 02"
                        rgb="255, 225, 137"
                        hex="#FFE189"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Warning 03"
                        rgb="255, 246, 220"
                        hex="#FFF6DC"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Positive 01"
                        rgb="24, 99, 66"
                        hex="#186342"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Positive 02"
                        rgb="139, 177, 160"
                        hex="#8BB1A0"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Positive 03"
                        rgb="209, 224, 217"
                        hex="#D1E0DC"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Negative 01"
                        rgb="181, 3, 7"
                        hex="#B50307"
                        blackOnWhite="Fail"
                        whiteOnBlack="Pass"
                    />
                    <Colour 
                        colour="Negative 02"
                        rgb="218, 129, 131"
                        hex="#DA8183"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                    <Colour 
                        colour="Negative 03"
                        rgb="240, 205, 205"
                        hex="#F0CDCD"
                        blackOnWhite="Pass"
                        whiteOnBlack="Fail"
                    />
                </div>
            </div> 
        </div>
        <div class="grid gap-6 border-b pb-10 mb-10"> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Iconography
                    </div>
                </div>
                <p>Assembler uses a complete port of the <a href="https://fontawesome.com/" target="_blank" class="underline">Font Awesome</a> 5.0.8 version, by Font Awesome. Icons are used to provide clarity and purpose within Assembler.</p>
            </div>
            <div class="grid grid-cols-6 lg:grid-cols-12">
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-cubes"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-globe"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-file-download"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-database"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-code-branch"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-code"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-sitemap"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-users"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-magic"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-tools"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-building"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-calculator"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-edit"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-trash"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-random"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-i-cursor"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-layer-group"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-plus"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-user"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-image"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-cube"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-sync-alt"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-info"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-mail-bulk"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-file-download"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-cloud"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-bug"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-stream"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-file-word"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-chart-pie"></i>
                </div>
                <div class="h-12 flex justify-center items-center text-xl">
                    <i class="fas fa-palette"></i>
                </div>
            </div>
            <script src="https://kit.fontawesome.com/86f8752325.js" crossorigin="anonymous"></script> 
        </div> 
        <div class="grid gap-6 border-b pb-10 mb-10"> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Typography
                    </div>
                </div>
            </div>
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Assembler Font Stack
                    </div>
                </div>
                <FontStack />
            </div>
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Brand Typography
                    </div>
                </div>
                <p>Assembler uses GT Walsheim Pro only for <span class="font-bold">branding</span> and <span class="font-bold">marketing purposes</span>, its the font used for the logo typeface and main headings throughout the website.</p>
            </div>
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-normal font-semibold">
                        Platform Typography
                    </div>
                </div>
                <p>Native typography is used throughout the product suite to improve legibility, performance and user experience. Only in instances of displaying code (text editors, certain inputs etc) is Roboto Mono used. </p>
                <div class="bg-gray-100 rounded-md p-4 font-mono text-sm">
                    ——platform-main-font: -apple-system, Segoe UI, ‘Roboto’, sans-serif;
                </div>
                <div class="bg-gray-100 rounded-md p-4 font-mono text-sm">
                    ——platform-mono-font: 'Roboto Mono', monospace;
                </div>
            </div>
        </div> 
        <div class="grid gap-6 mb-24"> 
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="text-xl font-semibold">
                        Logos
                    </div>
                </div>
                <p>The Assembler logo and symbol have been designed to deliver impact and recognizability.</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="p4 flex flex-col justify-center items-start lg:items-center">
                    <div class="p-4 text-center">
                        <img src="/assets/assembler_logos/logo.svg" alt="Assembler Logo">
                    </div>
                    <div class="pl-4 lg:pl-0 text-sm text-gray-600">Symbol & Logo</div>
                </div>
                <div class="p4 flex flex-col justify-center items-start lg:items-center">
                    <div class="p-4 text-center">
                        <img src="/assets/assembler_logos/symbol.svg" alt="Assembler Symbol">
                    </div>
                    <div class="pl-4 lg:pl-0 text-sm text-gray-600">Symbol</div>
                </div>
            </div>
            <div class="grid gap-2 leading-relaxed">
                <div>
                    <div class="font-semibold">
                        Colours
                    </div>
                </div>
                <p>The logo and symbol can be used in both negative and standard variations across the primary colour palette only.</p>
            </div>
            <div class="grid grid-cols-1">
                <div class="py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="p-4 flex flex-col justify-center items-start lg:items-center">
                        <div class="p-4 text-center">
                            <img src="/assets/assembler_logos/logo.svg" alt="Assembler Logo">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col justify-center items-start lg:items-center">
                        <div class="p-4 text-center">
                            <img src="/assets/assembler_logos/symbol.svg" alt="Assembler Symbol">
                        </div>
                    </div>
                </div>
                <div style="background:#0053B3;" class="py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="p-4 flex flex-col justify-center items-start lg:items-center">
                        <div class="p-4 text-center">
                            <img src="/assets/assembler_logos/logo_negative.svg" alt="Assembler Logo">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col justify-center items-start lg:items-center">
                        <div class="p-4 text-center">
                            <img src="/assets/assembler_logos/symbol_negative.svg" alt="Assembler Symbol">
                        </div>
                    </div>
                </div>
                <div style="background:#23272A;" class="py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="p-4 flex flex-col justify-center items-start lg:items-center">
                        <div class="p-4 text-center">
                            <img src="/assets/assembler_logos/logo_negative.svg" alt="Assembler Logo">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col justify-center items-start lg:items-center">
                        <div class="p-4 text-center">
                            <img src="/assets/assembler_logos/symbol_negative.svg" alt="Assembler Symbol">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a class="underline" href="/work/designsystems/assembler/components">View Components</a>
            </div>
        </div> 
    </div>
</section>