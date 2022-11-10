<template>
  <div>      
    <v-text-field label="Title" background-color="light-blue" prepend-icon="mdi-account" v-model="Posts.title"></v-text-field>
  <v-textarea
      color="black"
      label="Label"
      prepend-icon="mdi-comment"
      v-model="Posts.description"
    ></v-textarea>
    <div class="d-flex flex-wrap gap-2 flex-row-reverse ">
        <v-btn elevation="0" color="secondary" rounded="lg" to="/notifications">Reset</v-btn>
        <v-btn elevation="0" color="warning" rounded="lg" to="/notifications">Create</v-btn>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const Posts = ref({
  id: "",
  title: "",
  description: "",
  time: "",
});
const { url: url2 } = useUrl({
  path: `/notifications/${route.params.id}`,
  queryParams: {
    isAccept: "true",
  },
});

const {
  data: dataGetPosts,
  get: getPosts,
  onFetchResponse: getPostsResponse,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(url2, { immediate: false });
getPosts().json().execute();
getPostsResponse(() => {
  Posts.value = dataGetPosts.value.data.data;
});

</script>
<style scoped>
.v-btn{
    min-width: 120px !important;
}
</style>
