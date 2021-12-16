<template>
    <div class="admin">
        <div
            class="
                dasboard
                d-flex
                flex-column flex-shrink-0
                p-3
                text-white
                bg-dark
            "
        >
            <h2 class="text-center">Admin</h2>
            <ul class="nav nav-pills flex-column mb-auto">
                <li><a href="#" class="nav-link text-white">Main</a></li>
                <li><a href="#" class="nav-link text-white">Details</a></li>
                <li><a href="#" class="nav-link text-white">Create</a></li>
                <li><a href="#" class="nav-link text-white">Logout</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
    margin: 0;
}
.dasboard {
    width: 17.5rem;
    height: calc(100vh - 48px);
}
</style>
