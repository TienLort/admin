<template>
    <NuxtLink :to="{ path: `/mentors/${mentor.id}` }" class="full">
    <!-- <NuxtLink :to="{ path: `/manage-groups/${group.id}` }" class="full"> -->
    <div class="box">
            <img src="/images/m1.jpg" alt="" class="img">
            <div class="info">
                <div class="title">
                    {{mentor.name}}
                </div>
                <span class="desc">{{ mentor.faculty }}</span>
                <div class="share">
                    <span >4.5<v-icon>mdi-heart</v-icon></span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
	mentor: {
		type: Object,
	}
});
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s linear;
    font-family: Arial, Helvetica, sans-serif;
}
.full {
    text-decoration: none;
}
.box {
    height: 375px;
    width: 100%;
    border: 8px solid #fff;
    box-shadow: 0 3px 5px #000;
    overflow: hidden;
}

.box:hover .info {
    bottom: 128px;
    background: rgb(167, 214, 255);
}

.box:hover .img {
    transform: scale(1.05);
}

.img {
    height: 100%;
    width: 100%;
    object-fit: center;
}

.info {
    text-align: center;
    background-color: #fff;
    position: relative;
    bottom: 40px;
}

.title {
    padding: 10px 0;
    font-size: 20px;
    color: #333;
    text-transform: capitalize;
}

.desc {
    font-size: 16px;
    color: rgb(0, 0, 0);
}

.share {
    margin-top: 14px;
    border-top: 1px solid #4444;
    padding:7px;
}

</style>