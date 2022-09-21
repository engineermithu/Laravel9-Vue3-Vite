<template>
    <div class="container">
        <ul class="nav navbar  navbar-expand-bg bg-info text-white justify-content-center">
            <li class="nav-item">
                <router-link :to="{name:'allUser'}" class="btn">User</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style  >
li.nav-item a {
    font-size: 16px !important;
    color: #f0e9e9;
}
a.router-link-active.router-link-exact-active {
    color: black;
}
</style>
