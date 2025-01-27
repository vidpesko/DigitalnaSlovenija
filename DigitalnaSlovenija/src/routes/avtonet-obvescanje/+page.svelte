<script>
    import MaterialSymbolsAlarm from '~icons/material-symbols/alarm';

    import ReminderListItem from "$lib/components/avtonet-obvescanje/RemindersListItem.svelte";
</script>


<div class="content-container">
    <!-- Navigation, title, description -->
    <div class="breadcrumbs text-sm mt-10">
        <ul>
            <li><a href="/" class="font-semibold">DigitalnaSlovenija</a></li>
            <li><a href=".">Avtonet Obveščanje</a></li>
        </ul>
    </div>
    <h1 class="text-4xl font-semibold">Avtonet Obveščanje</h1>
    <p>Spletna aplikacija za obveščanje o novih vozilih na avto.net-u, ki ustrezajo vašim kriterijom.</p>

    <!-- User / log in, add btn -->
    <div class="flex w-full items-center justify-between mt-16">
        <div class="">
            <p>Uporabnik:</p>
            <p class="font-semibold">vid@pesko.si</p>
        </div>
        <div class="">
            <a href="avtonet-obvescanje/ustvari" class="btn btn-primary">Ustvari opomnik <MaterialSymbolsAlarm class="text-lg"/></a>
        </div>
    </div>
    <div class="divider"></div>
    <!-- My reminders / log in -->
    <div class="mt-4">
        <h3 class="text-xl mb-2">Moji opomniki:</h3>

        <!-- IF logged in -->
        {#each Array(2) as i}
        <ReminderListItem url="hello" />
        {/each}
        <!-- ELSE -->
    </div>
</div>