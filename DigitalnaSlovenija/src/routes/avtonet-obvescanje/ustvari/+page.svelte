<script>
    import MaterialSymbolsMailRounded from "~icons/material-symbols/mail-rounded";
    import MaterialSymbolsCalendarMonthRounded from "~icons/material-symbols/calendar-month-rounded";
    import MaterialSymbolsCarTag from "~icons/material-symbols/car-tag";
    import MaterialSymbolsAttachMoneyRounded from "~icons/material-symbols/attach-money-rounded";
    import MaterialSymbolsSpeedOutlineRounded from "~icons/material-symbols/speed-outline-rounded";

    const fields = [
        {
            title: "Znamka, model",
            icon: MaterialSymbolsCarTag,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Znamka",
                    placeholder: "Audi, BMW,...",
                    type: "text",
                    name: "brand",
                },
                {
                    title: "Model",
                    placeholder: "318d, A6,...",
                    type: "text",
                    name: "model",
                },
            ],
        },
        {
            title: "Cena",
            icon: MaterialSymbolsAttachMoneyRounded,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Min cena",
                    placeholder: "",
                    type: "number",
                    name: "min_price",
                },
                {
                    title: "Max cena",
                    placeholder: "",
                    type: "number",
                    name: "max_price",
                },
            ],
        },
        {
            title: "Letnik 1. registracije",
            icon: MaterialSymbolsCalendarMonthRounded,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Min letnik 1. registracije",
                    placeholder: "2014, 2016,...",
                    type: "number",
                    name: "min_year",
                },
                {
                    title: "Max letnik 1. registracije",
                    placeholder: "2018, 2019,...",
                    type: "number",
                    name: "max_year",
                },
            ],
        },
        {
            title: "Kilometrina",
            icon: MaterialSymbolsSpeedOutlineRounded,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Min kilometri",
                    placeholder: "1000, 100000,...",
                    type: "number",
                    name: "min_mileage",
                },
                {
                    title: "Max kilometri",
                    placeholder: "50000, 100000,...",
                    type: "number",
                    name: "max_mileage",
                },
            ],
        },
    ];

    let reminderForm;
    let reminderFormData = {};
    let reminderFormError;

    function updateFormData() {
        reminderFormData = {}; // Reset before updating
        for (let el of reminderForm.elements) {
            if (el.name) {
                reminderFormData[el.name] = el.value;
            }
        }
    }

    function openModal() {
        updateFormData();
        document.getElementById("confirmationModal").showModal();
    }

    async function fetchData() {
        const res = await fetch("http://localhost:8000/api/avtonet-obvescanje/");
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }
</script>

<!-- Inputs -->
{#snippet inlineInputs(inputs)}
    {#each inputs as input}
        <label class="form-control w-full max-w-xs mb-4">
            <div class="label">
                <span class="label-text">{input.title}</span>
            </div>
            <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                class="input input-bordered w-full max-w-xs"
            />
        </label>
    {/each}
{/snippet}

{#snippet fieldContainer(fieldInfo)}
    <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="filter-accordion" />
        <div
            class="collapse-title text-xl font-medium flex items-center gap-x-4"
        >
            <svelte:component this={fieldInfo.icon} />
            {fieldInfo.title}
        </div>
        <!-- Inputs -->
        <div class="collapse-content flex gap-x-4">
            {@render fieldInfo.input(fieldInfo.inputInfo)}
        </div>
    </div>
{/snippet}

<div class="content-container">
    <!-- Navigation, title, description -->
    <div class="breadcrumbs text-sm mt-10">
        <ul>
            <li><a href="/" class="font-semibold">DigitalnaSlovenija</a></li>
            <li><a href=".">Avtonet Obveščanje</a></li>
            <li>Ustvari opomnik</li>
        </ul>
    </div>
    <h1 class="text-4xl font-semibold">Ustvari opomnik</h1>

    <!-- Form -->
    <form
        bind:this={reminderForm}
        action=""
        method="post"
        class="my-16"
        onsubmit={(event) => event.preventDefault()}
    >
        <!-- Email -->
        <label class="form-control w-full max-w-xs mb-4">
            <div class="label">
                <span class="label-text">Kam želite prejemati obvestila?</span>
            </div>
            <input
                type="text"
                name="email"
                placeholder="Email za obveščanje"
                class="input input-bordered w-full max-w-xs"
                value="trenutni@mail.com"
            />
        </label>
        <!-- Filters -->
        <p class="mb-2 label-text">Izberite filtre:</p>
        <div class="join join-vertical w-full">
            {#each fields as field}
                {@render fieldContainer(field)}
            {/each}
        </div>
        <!-- Open confirmation page -->
        <button
            onclick={() => {
                if (reminderForm.checkValidity()) {
                    openModal();
                    reminderFormError = false;
                } else {
                    reminderFormError = true;
                }
            }}
            class="btn btn-primary mt-6">Ustvari opomnik</button
        >
        {#if reminderFormError}
            <div class="toast toast-bottom toast-end">
                <button
                    class="alert alert-error"
                    onclick={() => (reminderFormError = false)}
                >
                    <span
                        >Napaka v obrazcu. Ali ste vnesli pravilne podatke?</span
                    >
                </button>
            </div>
        {/if}
        <a class="btn btn-error btn-outline" href="/avtonet-obvescanje"
            >Prekliči</a
        >
    </form>

    <dialog id="confirmationModal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <h3 class="text-lg font-bold mb-4">
                Še zadnji korak preden dodate nov opomnik
            </h3>
            {#if reminderForm}
                <p>Preverite vaše podatke:</p>
                <ul class="list-disc list-inside">
                    {#each Object.entries(reminderFormData) as [name, value]}
                        {#if value && name != "filter-accordion"}
                            <li>{name}: {value}</li>
                        {/if}
                    {/each}
                </ul>
                <!-- Use API to get preview of vehicles -->
                <p class="my-4">Vozila s izbranimi filtri:</p>
                <div class="">
                    {#await fetchData()}
                        loading
                    {:then response}
                    eriwepirjp
                        {response}
                    {/await}
                </div>
            {/if}
            <div class="modal-action">
                <button
                    onclick={() => reminderForm.submit()}
                    class="btn btn-primary">Ustvari opomnik</button
                >
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Prekliči</button>
                </form>
            </div>
        </div>
    </dialog>
</div>
