<script>
    import MaterialSymbolsDeleteOutlineRounded from '~icons/material-symbols/delete-outline-rounded';

    let { url } = $props();
</script>

<div class="w-full border-[1.5px] transition hover:border-stone-500 rounded mb-4 py-2 px-1 flex justify-between reminder-list-item items-center">
    <!-- Logo -->

    <!-- Filters -->
    <p>{url}</p>

    <!-- Controls -->
    <div class="reminder-controls hidden gap-x-2">
        <button><MaterialSymbolsDeleteOutlineRounded class="text-red-500" /></button>
    </div>
</div>