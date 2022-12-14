<template>
  <div class="box">
    <v-row>
      <v-col sm="2">
        <v-avatar size="50" color="brown">
          <span class="text-h6">T</span>
        </v-avatar>
      </v-col>
      <v-col sm="10">
        <ul>
          <li class="item">
            <div class="item-icon">
              <v-icon>mdi-account-outline</v-icon>
            </div>
            <div class="item-desc">
                <p class="span-text">{{mentor.full_name}}</p>
            </div>
          </li>
          <li class="item">
            <div class="icon">
              <v-icon>mdi-cast-education</v-icon>
            </div>
            <div class="desc">
                <p class="span-text">{{ mentor.faculty }}</p>
            </div>
          </li>
          <li class="item">
            <div class="icon">
              <v-icon>mdi-star-outline</v-icon>
            </div>
            <div class="desc">
                <p class="span-text">{{ mentor.rating_score.slice(0, 3) }}/10</p>
            </div>
          </li>
          
          
        </ul>
      </v-col>
    </v-row>
    <v-row style="justify-content: right; padding:20px 20px;">
        <NuxtLink :to="{ path: `/mentors/` }" class="full">        
            <p>Xem chi tiết <v-icon>mdi-arrow-right-thin</v-icon></p>
        </NuxtLink>
    </v-row>
  </div>
</template>
<script setup>
const props = defineProps({
  mentor: {
    type: Object,
  },
});
const message = ref(false);
const hints = ref(true);
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.full {
  text-decoration: none;
}
.box {
  width: 100%;
  border: 8px solid #fff;
  box-shadow: 0 3px 5px #000;
  overflow: hidden;
  background-color: #fff;
  padding: 20px 10px;
}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 8px 16px;
  margin-bottom: -10px;
}
.item-icon{
    min-width: 56px;
    color: rgba(0, 0, 0, 0.9);
    flex-shrink: 0;
    display: inline-flex;
}
.item-desc{
    margin: 0px;
    font-family: "Roboto Slab", "Times New Roman", serif;
    font-weight: 600;
    line-height: 1.5;
    display: block;
    text-overflow: ellipsis;
    font-Size:18px;
}
.icon{
    min-width: 56px;
    color: rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
    display: inline-flex;
}
.desc{
    font-family: "Roboto Slab", "Times New Roman", serif;
    font-size: 13px;
}
.span-text{
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow-wrap: break-word;
}
</style>
