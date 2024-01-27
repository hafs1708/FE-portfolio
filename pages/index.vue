<template>
    <div class="grid grid-cols-10">
        <!-- PROFILE CARD -->
        <div class="col-span-10 lg:col-span-4 md:col-span-5 xl:col-span-3 min-h-screen p-6">
            <IndexProfileCard :profile="profile" />
        </div>
        <!-- SECTIONS -->
        <div class="col-span-10 md:col-span-5 lg:col-span-6 xl:col-span-7 p-6 lg:px-20 xl:px-40">
            <IndexAbout :profile="profile" />
            <IndexBlog :blogs="blogs" />
            <IndexExperience :experiences="experiences" />
            <IndexEducation />
            <IndexProject />
            <IndexSkill />
            <IndexContent />
        </div>
    </div>
</template>

<script setup>
// ngambil data dari back end
// const data_useFetch = await useFetch('http://localhost:5000/portfolio');

// EXTRACT OBJECT
const { data } = await $fetch('http://localhost:5000/portfolio');

const profile = data.profile;
const projects = data.projects;
const educations = data.educations;
const experiences = data.experiences;
const skills = data.skills;
const blogs = data.blogs;

console.log('Profile');
console.log(profile);
console.log('projects');
console.log(projects);
console.log('educations');
console.log(educations);
console.log('experiences');
console.log(experiences);
console.log('skills');
console.log(skills);
console.log('blogs');
console.log(blogs);
</script>