<script>
    export let imgCategory;
    export let imgType;
    export let imgSrc
</script>

<div class="flex items-center justify-center h-full w-full px-4 lg:px-8">
    <div class="space-y-4 text-center">
        <div class="text-xs text-gray-600"><span class="font-semibold">{imgCategory}</span> {imgType}</div>
        <div class="rounded-md shadow-md overflow-hidden">
            <img src="{imgSrc}" alt="{imgCategory}">
        </div>
    </div>
</div>