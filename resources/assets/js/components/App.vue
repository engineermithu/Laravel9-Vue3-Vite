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
