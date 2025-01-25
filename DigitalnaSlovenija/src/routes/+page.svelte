<script>
    import ToolCard from "$lib/components/ToolCard.svelte";

    import projects from "$lib/projects.json";
</script>


<div class="px-24">
    <!-- Title, description, contact -->
    <div class="text-center mt-24 mb-16">
        <h1 class="font-bold text-4xl">Digitalna Slovenija</h1>
        <p>Zbirka orodij za pomoč razvijalcem. Od API za znane spletne strani do različnih pripomočkov za vsakodnevno življenje.</p>
    </div>
    
    <!-- Tools -->
    <div class="mx-auto max-w-[80rem]">
        {#each [false, true] as comingSoonAllowed}
        <h3 class="mb-2 text-lg font-medium">
            {#if comingSoonAllowed}
            Prihaja kmalu
            {:else}
            Izdelki
            {/if}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {#each projects.filter((project) => project.comingSoon == comingSoonAllowed) as project}
            <ToolCard {...project} />
            {/each}
        </div>
        <div class="divider"></div>
        {/each}
    </div>
</div>