<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @font-face {
        font-family: 'GT-Walsheim-Pro';
        src: url("/assets/fonts/GT-Walsheim-Pro-Bold.eot"); /* IE9 Compat Modes */
        src: url("/assets/fonts/GT-Walsheim-Pro-Bold.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
            url("/assets/fonts/GT-Walsheim-Pro-Bold.otf") format("opentype"), /* Open Type Font */
            url("/assets/fonts/GT-Walsheim-Pro-Bold.svg") format("svg"), /* Legacy iOS */
            url("/assets/fonts/GT-Walsheim-Pro-Bold.ttf") format("truetype"), /* Safari, Android, iOS */
            url("/assets/fonts/GT-Walsheim-Pro-Bold.woff") format("woff"), /* Modern Browsers */
            url("/assets/fonts/GT-Walsheim-Pro-Bold.woff2") format("woff2"); /* Modern Browsers */
        font-weight: bold;
        font-style: bold;
    }
    /* segoe ui */
    @font-face {
        font-family: 'Segoe UI Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Segoe UI Regular'), 
             url('/assets/fonts/Segoe UI.woff') 
             format('woff');
    }
    .font-gt-walsheim {
        font-family: 'GT-Walsheim-Pro' !important;
    }
    .font-roboto-mono {
        font-family: 'Roboto Mono', monospace !important;
    }
    .font-roboto {
        font-family: 'Roboto', sans-serif !important;
    }
    .font-system {
        font-family: system-ui, -apple-system, sans-serif !important;
    }
    .font-windows {
        font-family: 'Segoe UI Regular', sans-serif !important;
    }
</style>
<div class="p-4 lg:p-4 space-y-2 bg-gray-100 rounded-md leading-loose">
    <p class="text-2xl font-gt-walsheim">GT Walsheim Pro</p>
    <p class="text-2xl font-system">Apple SF Pro</p>
    <p class="text-2xl font-windows">Segoe UI</p>
    <p class="text-2xl font-roboto">Roboto</p>
    <p class="text-2xl font-roboto-mono">Roboto Mono</p>
</div>