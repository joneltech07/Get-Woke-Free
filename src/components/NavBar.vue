<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="navbar-brand">
                <router-link
                    to="/">
                    <img class="w-50" src="../assets/img/logo.png">
                </router-link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 me-4 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Is It Woke?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Buy Woke-Free</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">About Us</a>
                    </li>
                </ul>
                <button class="btn btn-primary rounded-pill ps-4 pe-4" href="#">Sign Up</button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1000;
} */

</style>