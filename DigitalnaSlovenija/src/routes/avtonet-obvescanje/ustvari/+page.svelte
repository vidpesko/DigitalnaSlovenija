<script>
    import MaterialSymbolsMailRounded from "~icons/material-symbols/mail-rounded";
</script>

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
    <form action="" class="mt-16">
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
            <!-- Brand, make -->
            <div
                class="collapse collapse-arrow join-item border-base-300 border"
            >
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div class="collapse-title text-xl font-medium">
                    Znamka, model
                </div>
                <div class="collapse-content flex gap-x-4">
                    <label class="form-control w-full max-w-xs mb-4">
                        <div class="label">
                            <span class="label-text"
                                >Znamka</span
                            >
                        </div>
                        <input
                            type="text"
                            placeholder="Audi, BMW,..."
                            class="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label class="form-control w-full max-w-xs mb-4">
                        <div class="label">
                            <span class="label-text"
                                >Model</span
                            >
                        </div>
                        <input
                            type="text"
                            placeholder="Audi, BMW,..."
                            class="input input-bordered w-full max-w-xs"
                        />
                    </label>
                </div>
            </div>
            <div
                class="collapse collapse-arrow join-item border-base-300 border"
            >
                <input type="radio" name="my-accordion-4" />
                <div class="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div
                class="collapse collapse-arrow join-item border-base-300 border"
            >
                <input type="radio" name="my-accordion-4" />
                <div class="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
        <!-- Submit -->
        <button type="submit" class="btn btn-primary mt-6"
            >Ustvari opomnik</button
        >
    </form>
</div>
