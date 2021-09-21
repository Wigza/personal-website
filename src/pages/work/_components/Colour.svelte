<script>
    export let colour = 'colour'; 
    export let rgb = '0, 83, 189'; 
    export let hex = '#000000'; 
    export let blackOnWhite; 
    export let whiteOnBlack; 
    export let bordered = ''; 
</script>
<div class="space-y-3">
    <div style="background:{hex};" class="{bordered} border-black relative w-full h-28 rounded-lg">
        <div class="absolute bottom-0 left-0 p-3">
            <div class="grid grid-cols-2 gap-2">
                <div class="text-center">
                    <div style="color:#000000;" class="font-semibold">
                        Aa
                    </div>
                    <div style="background:#000000;" class="uppercase text-xs rounded-sm px-1 text-white">
                        {blackOnWhite}
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-white font-semibold">
                        Aa
                    </div>
                    <div style="background:#000000;" class="uppercase text-xs rounded-sm px-1 text-white">
                        {whiteOnBlack}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="font-semibold">{colour}</div>
        <div class="grid grid-cols-2">
            <div>
                <div class="font-semibold uppercase text-sm">RGB</div>
                <div class="text-xs font-mono">{rgb}</div>
            </div>
            <div>
                <div class="font-semibold uppercase text-sm">Hex</div>
                <div class="text-xs font-mono">{hex}</div>
            </div>
        </div>
    </div>
</div>