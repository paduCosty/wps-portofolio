<template>
    <header>
        <div class="navbar-container">
            <div class="logo-container">
                <router-link to="/" class="nav-link">
                    <svg
                        id="Group_331"
                        data-name="Group 331"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="71.91"
                        height="34.27"
                        viewBox="0 0 71.91 34.27"
                    >
                        <defs>
                            <linearGradient
                                id="linear-gradient"
                                x1="-0.003"
                                y1="1.008"
                                x2="1.07"
                                y2="1.069"
                                gradientUnits="objectBoundingBox"
                            >
                                <stop offset="0" stop-color="#2086ca" />
                                <stop offset="0" stop-color="#06d4c6" />
                                <stop offset="0.358" stop-color="#087a83" />
                                <stop offset="0.878" stop-color="#00ff7f" />
                                <stop offset="1" stop-color="#6bd0c9" />
                            </linearGradient>
                            <clipPath id="clip-path">
                                <rect
                                    id="Rectangle_93"
                                    data-name="Rectangle 93"
                                    width="71.91"
                                    height="34.27"
                                    fill="url(#linear-gradient)"
                                />
                            </clipPath>
                        </defs>
                        <g
                            id="Group_254"
                            data-name="Group 254"
                            clip-path="url(#clip-path)"
                        >
                            <path
                                id="Path_104"
                                data-name="Path 104"
                                d="M22.682,4.072l-14.513,0,2.652,6.248,5.658,13.33,8.7-11.964L30.517,13.1l-2.838,4.192,7.681,9.923L58.7,13.96,40.157,12.708,64.3,1.035l3.594,2.807-12.966,6.27,17.084,1.154L33.5,33.136,21.318,17.392l3.832-5.662,2.683.686,2.653.729L15.03,34.393,5.2,11.224.647.5,22.68.5l0,3.572Z"
                                transform="translate(-0.449 -0.406)"
                                fill="url(#linear-gradient)"
                            />
                        </g>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="269"
                        height="33"
                        viewBox="0 0 369 64"
                    >
                        <text
                            id="WebPad-Solution"
                            transform="translate(0 52)"
                            fill="#d8d9d8"
                            font-size="48"
                            font-family="SegoeUI, Segoe UI"
                            opacity="0.9"
                        >
                            <tspan x="0" y="0">WebPad-Solution</tspan>
                        </text>
                    </svg>
                </router-link>
            </div>

            <div class="nav navBar-position ">
                <ul class="horizontal-list">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38.5"
                    height="10.213"
                    viewBox="0 0 1261.5 100.213"
                >
                    F
                    <path
                        id="Path_177"
                        data-name="Path 177"
                        d="M0,0H1261.5V100.213H0Z"
                        opacity="0.4"
                    />
                </svg>
                    <li>
                        <router-link to="/home" class="nav-link me-5 ">
                           <h5 class="nav-bar-letters"> Home</h5>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="nav-link me-5">
                            <h5 class="nav-bar-letters"> About</h5> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio" class="nav-link me-5">
                            <h5 class="nav-bar-letters"> Portfolio</h5> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="nav-link me-5">
                            <h5 class="nav-bar-letters"> Contact</h5>
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
    components: { ApplicationLogo },
};
</script>
