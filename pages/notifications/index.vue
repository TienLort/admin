<template>
  <div>
    <v-row align-item="center" class="list px-3 mx-auto">
      <v-col cols="12" sm="12" align-item="center" class="col-cus">
        <v-row>
          <v-col cols="4" class="mr-10">
          <lable>Tìm kiếm thông báo: </lable>
          <div class="input-group search" id="search">
            <input
            v-model="filter.a.search"
              class="form-control border input-cus"
              type="search"
              placeholder="Search"
            />
          </div>
        </v-col>
        <v-col cols="3">
          <v-btn @click.prevent="search" width="100%" class="mt-4">
            Search
          </v-btn>
        </v-col>
        <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn tile v-bind="props" @click="dialog = true" width="" class="mt-4">
            <v-icon left> mdi-pencil </v-icon>
             Tạo thông báo
          </v-btn>
        </template>
        <v-card>
          <v-card-title class=" ml-3 mt-3 mb-3">
            <span class="text-h5"> Thông báo mới :</span>
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
      </v-col>
      <v-col cols="12" sm="12">
        <v-row>
          <div class="header_fixed">
            <table >
              <thead>
                <tr>
                  <!-- <th><input type="checkbox" v-model="checkAll" data-check-all/></th> -->
                  <th>No.</th>
                  <th>Content</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post, index) in posts" :key="index">
                  <!-- <td><input type="checkbox" data-check-all-item/></td> -->
                  <td>{{ index + 1 }}</td>
                  <td class="td-cus">
                    <h3>
                      {{ post.title }}
                    </h3>
                    <p>
                      {{ post.content }}
                    </p>
                  </td>
                  <td>{{ post.created_at.slice(0,10) }}</td>
                  <!-- <td>{{ post.created_at.slice(0, 10) }}</td> -->
                  <td>
                    <div class="text-nowrap mt-3 card">
                      <button @click="navigateTo(`/notifications/${index}`)">
                        View
                      </button>
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
      </v-col>
    </v-row>
    <v-row
      align-content="center"
      justify="space-around"
      style="margin-bottom: 20px"
    >
    </v-row>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  // middleware: "authenticated",
});
const router = useRouter();
const route = useRoute();
const dialog = ref(false);
const posts = ref([]);
const {token} = useToken();
const filter = ref({
  a: {
    search: route.query.search === undefined ? "" : route.query.search,
  },
});
// const checkAll = ref([]);

const { url: url1 } = useUrl({
  path: "/notifications",
  queryParams: {
    isAccept: "true",
  },
});

const {
  data: dataGetPosts,
  get: getPosts,
  onFetchResponse: getPostsResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})(url1, { immediate: false });
getPosts().json().execute();
getPostsResponse(() => {
  posts.value = dataGetPosts.value.data.data;
  console.log(posts.value);
});

const search = () => {
  router.replace({
    path: "/notifications",
    query: filter.value.a,
  });
  posts.value = [];
  getPosts().json().execute();
};
</script>
<style lang="scss" scoped>
.v-card {
  width: 80vw;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Slab", "Times New Roman", serif;

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

.btn-cus {
  padding: 0px !important;
  margin: 0px !important;
}

.header_fixed {
  width: 100%;
  overflow: auto;
  border: 1px solid #dddddd;
}

.header_fixed thead th {
  position: sticky;
  top: 0;
  background-color: #023e73;
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
.input-cus {
  padding: 10px;
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
  border-radius:5px;
  background-color: #023e73;
  color: #e6e7e8;
}

.v-btn {
  background-color: #023e73;
  color: #fff;
  margin-left: 40px;
  padding: 28px;
  display: flex;
  float: right;
}

th:nth-child(1),
.td:nth-child(1) {
  width: 5%;
}
th:nth-child(2),
.td:nth-child(1) {
  width: 60%;
}
th:nth-child(3),
.td:nth-child(2) {
  width: 20%;
}
.th:nth-child(4),
.td:nth-child(3) {
  width: 10%;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #dbdada;
}
th {
  text-align: center;
  color: white;
}

td:nth-child(1) {
  color: rgb(0, 119, 128);
}
.col-cus {
  background-color: #f6f8fc;
  padding: 20px;
  margin-bottom:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}
</style>
