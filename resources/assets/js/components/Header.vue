<template>
    <div>
        <div class="container">
            <ul class="nav navbar bg-info text-white justify-content-start">
<!--                <li class="nav-item m-2">-->
<!--                    <router-link :to="{name:'about'}" >-->

<!--                    </router-link>-->
<!--                </li>-->
<!--                <li class="nav-item m-2">-->
<!--                    <router-link :to="{name:'app'}" >-->
<!--                        App-->
<!--                    </router-link>-->
<!--                </li>-->
                <li class="nav-item m-2">
                    <router-link :to="{name:'allUser'}"  >
                        User
                    </router-link>
                </li>
                <li class="nav-item m-2">
                    <router-link :to="{name:'allEmployee'}">
                        Employee
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style>
li.nav-item a {
    font-size: 16px !important;
    color: #f0e9e9;
}

a.router-link-active.router-link-exact-active {
    color: black;
}
</style>


<!--<template>-->
<!--    <div class="container">-->
<!--        <ul class="nav navbar  navbar-expand-bg bg-info text-white ">-->
<!--            <li class="nav-item">-->
<!--                <router-link :to="{name:'app'}" class="btn">Home</router-link>-->
<!--                <router-link :to="{name:'allUser'}" class="btn">User</router-link>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->

<!--<style  >-->
<!--li.nav-item a {-->
<!--    font-size: 16px !important;-->
<!--    color: #f0e9e9;-->
<!--}-->
<!--a.router-link-active.router-link-exact-active {-->
<!--    color: black;-->
<!--}-->
<!--</style>-->



