<template>
    <div>
      <v-row
        align-content="center"
        justify="space-around"
        style="margin-bottom: 20px"
      >
        <v-dialog v-model="dialog" persistent>
          <template v-slot:activator="{ props }">
            <v-btn tile color="success" v-bind="props" @click="dialog = true">
              <v-icon left> mdi-pencil </v-icon>
              Create Posts
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Create Post</span>
            </v-card-title>
            <div>
              <v-text-field
                label="Title"
                background-color="light-blue"
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-textarea
                color="black"
                label="Label"
                prepend-icon="mdi-comment"
              ></v-textarea>
              <div class="d-flex flex-wrap gap-2 flex-row-reverse"></div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue-darken-1" text @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <div
        class="profiletimeline position-relative mt-7"
        v-for="post in posts"
        :key="post.id"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </template>
  
  <script setup>
  import PostCard from "../../components/posts//PostCard.vue";
  definePageMeta({
    layout: "default",
    middleware: "authenticated",
  });
  
  const dialog = ref(false);
  const posts = ref([]);
  
  const { url: url1 } = useUrl({
    path: "/posts",
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
  })(url1, { immediate: false });
  getPosts().json().execute();
  getPostsResponse(() => {
    posts.value = dataGetPosts.value.data.data;
  });
  </script>
  <style lang="scss" scoped>
  .profiletimeline {
    position: relative;
    padding-left: 40px;
    margin: 10px 10px 0 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.4 ease-in;
    .sl-item {
      margin-top: 8px;
      margin-bottom: 30px;
      display: flex;
    }
    .sl-left {
      margin-left: -60px;
      z-index: 1;
      margin-right: 15px;
    }
  }
  .profiletimeline:hover {
    transform: scale(1.01);
    cursor: default;
    background-color: #fff;
    transition: 0.3s;
  }
  
  .v-card {
    min-width: 1000px;
  }
  </style>
  