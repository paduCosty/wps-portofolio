<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Head, Link } from "@inertiajs/vue3";

// import Vue from 'vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light items-center">
        <Link>
            <div class="w-20 h-20 logo">
                <ApplicationLogo />
                <!-- <text id="WebPad-Solution" class="logo" width="190" height="44"  transform="translate(0 52)" fill="#d8d9d8" font-size="24" font-family="SegoeUI, Segoe UI" opacity="0.9">WebPad-Solution</text> -->
            </div>
        </Link>

        <div class="container">
            <Link>
                <text id="WebPad-Solution" class="text-logo"
                    >WebPad-Solution</text
                >
            </Link>

            <div class="navBar-position">
                <Link :href="route('home')" class="font-semibold"> Home </Link>

                <Link :href="route('about')" class="font-semibold">
                    About
                </Link>

                <Link :href="route('portfolio')" class="font-semibold">
                    Portfolio
                </Link>

                <Link :href="route('contact')" class="font-semibold">
                    Contact
                </Link>
            </div>
        </div>
    </nav>

    <div>
        <slot />
    </div>
</template>
<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
    /* background-color: rebeccapurple; */
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-color: rebeccapurple;
        /* background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E"); */
    }
}

/* .navBar-position {
    position: absolute;
    left: 30%;
    right: 20%;
    top: 7.19%;
    bottom: 88.36%;
    padding-left: 10px;
    background: #000000;
    opacity: 0.4;
}
.logo {
    position: absolute;
    left: 1%;
    right: 10%;
    top: 6%;
    bottom: 94%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 38px; */
    /* line-height: 58px;  */
    /* identical to box height */
    /* color: #d8d9d8;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center; */
    /* weight: 600px; */
/* } */

/* .text-logo {
    height: 150px;
    left: 1%;
    right: 10%;
} */
</style>
