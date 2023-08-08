<template>
    <header>
        <div class="navbar-container">
            <div class="logo-container">
                <router-link to="/" class="nav-link">
                    <application-logo class="application-logo"></application-logo>
                </router-link>
            </div>

            <div class="menu-container d-flex justify-content-center">
                
                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

                    <li>
                        <router-link to="/home" class="nav-link me-5"></router-link>
                    </li>
                    <li>
                        <router-link to="/home" class="nav-link me-5">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="nav-link me-5">
                            About
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio" class="nav-link me-5">
                            Portfolio
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="nav-link me-5">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import ApplicationLogo from "../Components/ApplicationLogo.vue";
import "../Assets/navbar.css";

export default {
    name: "App",
    components: {ApplicationLogo},
};
</script>
