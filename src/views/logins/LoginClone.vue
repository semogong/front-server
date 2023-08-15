<template>

    <div class="row w-100 h-100">
        <div class="m-auto align-self-center w-25" style="height: 60%;">

            <div class="w-100 mb-4">
                <a href="/login"><img :src="require('@/assets/images/logo.png')" class="w-100"></a>
            </div>

            <!-- component position -->
            <JoinClone/>

        </div>
    </div>
</template>



<script>
import JoinClone from "@/views/logins/JoinClone.vue";

export default {
    name: 'LoginClone',
    components: {JoinClone},
    data() {
        return {
            show: 0
        };
    },
}
</script>



<style>
html,
body {
    height: 100%;
}

a{
    text-decoration: none;
    color: #B5B5B5;
}


</style>