<script>
    import { url } from '@roxi/routify'
</script>

<style>
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<div class="e404">
  <div class="text-6xl font-bold">404!</div>
  <div class="text-lg">Page not found. 
  <!-- link to the parent folder of _fallback.svelte -->
  <a class="underline" href={$url('../')}>Go back</a>
  </div>
</div>
