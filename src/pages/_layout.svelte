<script>
    let siteName = 'Tim Phillips, Designer';
    let name = 'Tim Phillips';
    
    let d = new Date();
    
    import {isActive, url} from '@roxi/routify';
    
    const links =
    [
        ['./work', 'Work'],
        ['./about', 'About']
    ]
</script>
<!-- routify:options preload="proximity" -->
<nav class="nav relative border-b border-gray-400 py-2 lg:py-4">
    <div class="heading-font-override container max-w-2xl mx-auto space-y-1 lg:space-y-0 px-4">
        <div class="relative lg:absolute lg:left-0 lg:top-4">
            <a class="p-0 lg:pl-4 font-semibold" href="/">Tim Phillips, Designer</a>
        </div>
        <div class="space-x-4">
            {#each links as [path, name]}
                <span class:active={$isActive(path)}>
                    <a class="font-semibold" href="{$url(path)}">{name}</a>
                </span>
            {/each}
        </div>
    </div>
</nav>
<slot />
<footer class="heading-font-override text-sm container max-w-2xl mx-auto space-y-1 px-4">
    <div class="flex flex-col lg:flex-row border-t py-4 border-gray-400">
        <a href="/" class="font-semibold">{siteName}</a>
        <p class="ml-0 lg:ml-auto">Designed and Built by {name}, {d.getFullYear()}</p>
    </div>
</footer>