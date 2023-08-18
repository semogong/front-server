<template>
    <div>
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
        <div class="w-100 vh10 text-center fs-2 fw-bolder">
            채팅
        </div>
        <div class="w-100 vh20" style="background-color: #B5B5B5"></div>
        <div class="w-100 vh20" style="background-color: lightgray"></div>
        <div class="w-100 vh20" style="background-color: gray"></div>
        <div class="w-100 vh20" style="background-color: lightgray"></div>
    </div>
</template>


<script>
export default {
    name: 'Chat',
}

</script>

<style scoped>

</style>
