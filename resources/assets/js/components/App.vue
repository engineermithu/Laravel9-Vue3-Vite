<!--<template>-->
<!--    <div class="container">-->
<!--        <div class="row justify-content-center">-->
<!--            <div class="col-md-8">-->
<!--                <div class="card">-->
<!--                    <div class="card-header">Home Component</div>-->
<!--                    <div class="card-body">-->
<!--                        <h1>Welcome to Homepage</h1>-->
<!--                        <h1>Welcome to Homepage</h1>-->
<!--                        <h1>Welcome to Homepage</h1>-->
<!--                        <h1>Welcome to Homepage</h1>-->
<!--                        <br/>-->
<!--                        <router-link :to="{name:'allUser'}" class="btn btn-success">Go to All user</router-link>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    name: 'App',-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->

<template>
    <div>
        <HeaderVue />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderVue from '../components/Header.vue';
export default{
    name:   'FrontendCrudApp',
    components:{
        HeaderVue
    },
    data(){
        return {

        }
    }
}
</script>
