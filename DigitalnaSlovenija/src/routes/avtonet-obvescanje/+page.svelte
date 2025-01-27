<script>
    import MaterialSymbolsAlarm from '~icons/material-symbols/alarm';

    import ReminderListItem from "$lib/components/avtonet-obvescanje/RemindersListItem.svelte";
</script>

<div class="content-container">
    <!-- User / log in, add btn -->
    <div class="flex w-full justify-between mt-48">
        <div class="">
            <p>Uporabnik:</p>
            <p class="font-semibold">vid@pesko.si</p>
        </div>
        <div class="">
            <button class="btn btn-primary">Ustvari opomnik <MaterialSymbolsAlarm class="text-lg"/></button>
        </div>
    </div>
    <div class="divider"></div>
    <!-- My reminders / log in -->
    <div class="mt-10">
        <h3 class="text-xl">Moji opomniki:</h3>

        <!-- IF logged in -->
        {#each Array(2) as i}
        <ReminderListItem url="hello" />
        {/each}
        <!-- ELSE -->
    </div>
</div>