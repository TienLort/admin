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
            <v-btn color="white" text @click="dialog = false"> Close </v-btn>
            <v-btn color="white" text @click="dialog = false"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row align-item="center" class="list px-3 mx-auto">
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="searchbar"
          label="Search"
          variant="solo"
          type="text"
          required
          class="input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn @click="page = 1"> Search </v-btn>
      </v-col>
      <div class="header_fixed">
        <table>
          <thead>
            <tr>
              <!-- <th><input type="checkbox" v-model="checkAll" data-check-all/></th> -->
              <th>No.</th>
              <th>Title</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="post in posts" :key="post.id">
              <!-- <td><input type="checkbox" data-check-all-item/></td> -->
              <td>{{ post.id }}</td>
              <td class="td-cus">
                <h3>
                  {{ post.title }}
                </h3>
                <p>
                  {{ post.description }}
                </p>
              </td>
              <td>{{ post.time }}</td>
              <td>
                <div class="text-nowrap mt-3 card">
                  <v-dialog v-model="dialog1" persistent>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        tile
                        v-bind="props"
                        @click="dialog1 = true"
                        elevation="0"
                        color="secondary"
                        rounded="lg"
                        class="btn-cus"
                      >
                        <v-icon left> mdi-pencil </v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-toolbar color="primary">Edit Post</v-toolbar>

                      <div>
                        <v-text-field
                          label="Title"
                          background-color="light-blue"
                          prepend-icon="mdi-account"
                          v-model="post.title"
                        ></v-text-field>
                        <v-textarea
                          color="black"
                          label="Label"
                          prepend-icon="mdi-comment"
                          v-model="post.description"
                        ></v-textarea>
                        <div
                          class="d-flex flex-wrap gap-2 flex-row-reverse"
                        ></div>
                      </div>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="white"
                          text
                          @click="dialog1 = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="white"
                          text
                          @click="dialog1 = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog v-model="dialog2" persistent>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        tile
                        v-bind="props"
                        @click="dialog2 = true"
                        elevation="0"
                        color="error"
                        class="btn-cus"
                        rounded="lg"
                      >
                        <v-icon left> mdi-delete </v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-toolbar color="primary">Delete Post</v-toolbar>
                      <v-card-text>
                        <div class="text-h2 pa-12">
                          Bạn có muốn xóa post này không ?
                        </div>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="white" text @click="dialog2 = false">
                          Không
                        </v-btn>
                        <v-btn color="white" text @click="dialog2 = false">
                          Có
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <v-pagination
          v-model="page"
          :length="totalPages"
          total-visible="7"
          color="purple"
        ></v-pagination>
      </div>
    </v-row>
    <button @click="dialog1 = true">OK</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});

const dialog = ref(false);
const dialog1 = ref(false);
const dialog2 = ref(false);
const posts = ref([]);
// const checkAll = ref([]);

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
.v-card {
  width: 80vw;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background-color: #adacac;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.btn-cus{
  padding:0px !important;
  margin:0px !important;
}

.header_fixed {
  width: 100%;
  overflow: auto;
  border: 1px solid #dddddd;
}

.header_fixed thead th {
  position: sticky;
  top: 0;
  background-color: black;
  color: #e6e7e8;
  font-size: 15px;
}

th,
td {
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
}

.td-cus {
  text-align: left;
}

tr:nth-child(even) {
  background-color: #efefef;
}

tr:nth-child(odd) {
  background-color: #fff;
}

tr:hover td {
  cursor: pointer;
}

td button {
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  background-color: black;
  color: #e6e7e8;
}

.v-btn {
  background-color: #44b478;
  color: #fff;
  margin-left: 40px;
  padding: 28px;
  display: flex;
  float: right;
}


th:nth-child(1), .td:nth-child(1) {
  width: 5%;
}
 th:nth-child(2), .td:nth-child(1) {
  width: 60%;
}
th:nth-child(3), .td:nth-child(2) {
  width: 20%;
}
.th:nth-child(4), .td:nth-child(3) {
  width: 10%;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}
td, th {
  border: 1px solid #dbdada;
}
th {
  text-align: center;
  color: white;
}

td:nth-child(1) {
  color: rgb(0, 119, 128);
}

</style>
