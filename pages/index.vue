<template>
    <div class="min-h-screen flex">
        <!-- MAIN CONTENT -->
        <div class="bg-slate-600 min-h-screen grow grid grid-cols-10">
            <div class="col-span-10 md:col-span-3 min-h-screen bg-orange-200">
                <div class="md:fixed">content 1 fixed</div>
            </div>
            <div class="col-span-10 md:col-span-7 bg-orange-600">
                <div class="min-h-screen bg-lime-200">section 1</div>
                <div class="min-h-screen bg-lime-400">section 2</div>
                <div class="min-h-screen bg-lime-600">section 3</div>
            </div>
        </div>

        <!-- SIDE MENU -->
        <div class="bg-slate-300 min-h-screen w-28 flex-none max-md:hidden">
            <div class="fixed min-h-screen flex items-center">
                <div class="border border-neutral p-4 rounded-full flex flex-col gap-4">
                    <div class="tooltip tooltip-left" data-tip="Home">
                        <lucideHome :size="22" class="text-accent" />
                    </div>
                    <div class="tooltip tooltip-left" data-tip="About">
                        <LucideUserRound :size="22" class="text-accent" />
                    </div>
                    <div class="tooltip tooltip-left" data-tip="Resume">
                        <LucideLayoutPanelLeft :size="22" class="text-accent" />
                    </div>
                    <div class="tooltip tooltip-left" data-tip="Project">
                        <LucideBriefcase :size="22" class="text-accent" />
                    </div>
                    <div class="tooltip tooltip-left" data-tip="Testimonial">
                        <LucideUserRound :size="22" class="text-accent" />
                    </div>
                    <div class="tooltip tooltip-left" data-tip="Content">
                        <LucideMail :size="22" class="text-accent" />
                    </div>
                </div>
            </div>

            <!-- SIDE MENU TOGGLE BUTTON -->
            <div class="drawer-content fixed">
                <!-- Page content here -->
                <label for="my-drawer-4" class="btn btn-outline btn-circle mt-8">
                    <lucideMenu size="22" />
                </label> -->
            </div>
        </div>
    </div>

    <!-- MOBILE MENU DRAWER -->
    <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side overflow-hidden">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>