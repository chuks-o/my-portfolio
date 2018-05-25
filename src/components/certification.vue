<template>
<div class="container">
    <div>
        <img src="@/assets/images/screenshot-crop.png" alt="">

    </div>
</div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    border: 1px solid orange;
    justify-content: center;
    padding: 1%;
}

@media screen and (max-width: 568px) {
    /* .container {
        
    } */
    img {
        height: auto;
        width: 100%;
        max-width: 230px;
    }
}
</style>
