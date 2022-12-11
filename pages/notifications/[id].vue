<template>
  <div>
    <div
      style="
        background-color: blue;
        text-align: center;
        padding: 10px 0;
        border-radius: 20px 20px 0 0 ;
        color: #fff;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
      "
    >
      <h3>Chỉnh Sửa Thông Báo:</h3>
    </div>
    <form>
      <div style="
        text-align: center;
        padding: 20px ;
        margin-bottom: 20px;
        border-radius: 0 0 20px 20px;
        background-color: #fff;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
      ">
        <v-text-field
          label="Title"
          background-color="light-blue"
          prepend-icon="mdi-account"
          v-model="Posts.title"
        ></v-text-field>
        <v-textarea
          color="black"
          label="Label"
          prepend-icon="mdi-comment"
          v-model="Posts.content"
        ></v-textarea>
        <div class="d-flex flex-wrap gap-2 flex-row-reverse">
          <v-btn elevation="0" color="success" rounded="lg" @click="submit" to="/notifications"
            >Chỉnh sửa</v-btn
          >
          <v-btn
            elevation="0"
            color="error"
            rounded="lg"
            @click.prevent="deleteNotify"
            to="/notifications"
            >Xóa thông báo</v-btn
          >   
          <v-btn
            elevation="0"
            color="warning"
            rounded="lg"            
            to="/notifications"
            >Hủy</v-btn
          >        
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
const route = useRoute();
const Posts = ref({
  title: "",
  description: "",
});
const { url: url2 } = useUrl({
  path: `/notifications/${route.params.id}`,
  queryParams: {
    // isAccept: "true",
  },
});

const {
  data: dataGetPosts,
  get: getPosts,
  onFetchResponse: getPostsResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})(url2, { immediate: false });
getPosts().json().execute();
getPostsResponse(() => {
  Posts.value = dataGetPosts.value.data;
  // Posts.value = dataGetPosts.value.data.data;
});

const {
  data: dataPost,
  onFetchResponse: resPost,
  onFetchError: errPost,
  statusCode: codePost,
  put,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})(`/notifications/${route.params.id}`, { immediate: false });
// Trả về khi put thông tin cá nhân
resPost(() => {
  // myUsers.value = dataPut.value.data.data;
});
errPost(() => {
  if (codePost.value === getConfig("constants.statusCodes.validation")) {
    validationErrorMessages.value = dataPost.value.meta.error_message;
  }
  return false;
});

const submit = () => {
  put(Posts.value).json().execute();
};


const {
  data: dataDeletePost,
  onFetchResponse: resDeletePost,
  onFetchError: errDeletePost,
  delete: delPost,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})(`/notifications/${route.params.id}`, { immediate: false });
resDeletePost(() => {
  
});
errDeletePost(() => {
  
});
const deleteNotify = () => {
  delPost().json().execute();
};
</script>
<style scoped>
.v-btn {
  min-width: 120px !important;
}
</style>
