<script>
    import MaterialSymbolsMailRounded from "~icons/material-symbols/mail-rounded";
    import MaterialSymbolsCalendarMonthRounded from '~icons/material-symbols/calendar-month-rounded';
    import MaterialSymbolsCarTag from '~icons/material-symbols/car-tag';
    import MaterialSymbolsAttachMoneyRounded from '~icons/material-symbols/attach-money-rounded';
    import MaterialSymbolsSpeedOutlineRounded from '~icons/material-symbols/speed-outline-rounded';

    const fields = [
        {
            title: "Znamka, model",
            icon: MaterialSymbolsCarTag,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Znamka",
                    placeholder: "Audi, BMW,...",
                    type: "text"
                },
                {
                    title: "Model",
                    placeholder: "318d, A6,...",
                    type: "text"
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
                    type: "number"
                },
                {
                    title: "Max cena",
                    placeholder: "",
                    type: "number"
                }
            ]
        },
        {
            title: "Letnik 1. registracije",
            icon: MaterialSymbolsCalendarMonthRounded,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Min letnik 1. registracije",
                    placeholder: "2014, 2016,...",
                    type: "number"
                },
                {
                    title: "Max letnik 1. registracije",
                    placeholder: "2018, 2019,...",
                    type: "number"
                }
            ]
        },
        {
            title: "Kilometrina",
            icon: MaterialSymbolsSpeedOutlineRounded,
            input: inlineInputs,
            inputInfo: [
                {
                    title: "Min kilometri",
                    placeholder: "1000, 100000,...",
                    type: "number"
                },
                {
                    title: "Max kilometri",
                    placeholder: "50000, 100000,...",
                    type: "number"
                }
            ]
        },
    ];
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
                placeholder={input.placeholder}
                class="input input-bordered w-full max-w-xs"
            />
        </label>
    {/each}
{/snippet}

{#snippet fieldContainer(fieldInfo)}
    <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div class="collapse-title text-xl font-medium flex items-center gap-x-4"><svelte:component this={fieldInfo.icon} /> {fieldInfo.title}</div>
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
    <form action="" class="my-16">
        <!-- Email -->
        <label class="form-control w-full max-w-xs mb-4">
            <div class="label">
                <span class="label-text">Kam želite prejemati obvestila?</span>
            </div>
            <input
                type="text"
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
        <!-- Submit -->
        <button type="submit" class="btn btn-primary mt-6"
            >Ustvari opomnik</button
        >
    </form>
</div>
