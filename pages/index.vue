import { LucideInstagram } from '#build/components';
<template>
    <div class="grid grid-cols-10">
        <!-- PROFILE CARD -->
        <div class="col-span-10 lg:col-span-4 md:col-span-5 xl:col-span-3 min-h-screen p-6">
            <IndexProfileCard />
        </div>
        <!-- SECTIONS -->
        <div class="col-span-10 md:col-span-5 lg:col-span-6 xl:col-span-7 p-6">
            <IndexAbout />
            <IndexResume />
            <IndexProject />
            <IndexTestimonial />
            <IndexContent />
        </div>
    </div>
</template>