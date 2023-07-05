<script setup>
import {Head} from '@inertiajs/vue3';
import Layout from "@/Layouts/Layout.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>
<template>
    <Layout>

        <Head title="Contact"/>

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contact</h2>
        </template>
        <h1></h1>
    </Layout>

</template>
