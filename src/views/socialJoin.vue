<template>
    <div class="w-100 d-sm-flex">
        <div class="w-100 m-auto form-signin" style="background-color: gray">
            <div class="d-sm-flex mb-3"><img :src="require('@/assets/logo.png')" class="m-auto"></div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'social-join'
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

.form-signin {
    max-width: 400px;
    padding: 1rem;
}
</style>