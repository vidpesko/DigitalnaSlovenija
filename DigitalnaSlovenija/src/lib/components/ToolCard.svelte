<script>
    import MaterialSymbolsAlarm from '~icons/material-symbols/alarm'

    let { btnText="Obišči spletno stran", title, description, btnLink, comingSoon=false } = $props();
</script>

<div class="rounded-md p-4 bg-stone-300 dark:bg-stone-800 hover:border-stone-300 border-stone-500 border transition-all text-center flex flex-col justify-between {comingSoon ? "tooltip" : ""} tooltip-bottom tooltip-error" data-tip="Ta funkcije je še v razvoju 🥺. Dodana bo v prihodnjih dneh.">
    <div class="">
        <!-- Title -->
        <h4 class="text-center font-semibold ">{title}</h4>
        <!-- Description -->
        <p class="text-sm text-start">{description}</p>
    </div>
    <!-- CTA -->
    <a href={btnLink} class="btn {comingSoon ? "btn-disabled" : "btn-primary"} mt-4" target="_blank">
        {#if !comingSoon}
        {btnText}
        {:else}
        V razvoju <MaterialSymbolsAlarm class="text-lg" />
        {/if}
    </a>
</div>