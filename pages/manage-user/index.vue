<template>
  <v-row align-item="center" class="list px-3 mx-auto">
    <v-col cols="12" sm="3" align-item="center" class="col-cus">
      <v-col cols="12">
        <lable>Tìm Sinh viên: </lable>
        <v-text-field
          v-model="searchbar"
          label="Search"
          variant="solo"
          type="text"
          required
          clearable
          hide-details="auto"
          class="input"
        ></v-text-field>
        <div class="mt-3">
          <label for="type">Chọn tình trạng sinh viên :</label>
          <select v-model="filter.a.type" class="form-select mt-1" id="type">
            <option :value="getConfig('constants.typeOfUser.all')">
              Tất cả
            </option>
            <option :value="getConfig('constants.typeOfUser.active')">
              đang hoạt động
            </option>
            <option :value="getConfig('constants.typeOfUser.block')">
              khóa tài khoản
            </option>
          </select>
        </div>
        <div class="mt-3">
          <label for="type">Chọn khoa</label>
          <select v-model="filter.a.faculty" class="form-select mt-1" required>
            <option value="" disabled selected>Chọn khoa</option>
            <option
              v-for="faculty in faculties"
              :key="faculty.id"
              :value="faculty.id"
            >
              {{ faculty.name }}
            </option>
          </select>
        </div>
      </v-col>
      <v-col cols="12">
        <v-btn @click.prevent="search" width="100%" class="mt-10">
          Search
        </v-btn>
      </v-col>
    </v-col>
    <v-col cols="12" sm="9" class="cus-table">
      <v-row>
        <div class="header_fixed">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Image</th>
                <th>Username</th>
                <th>Email</th>
                <th>Faculty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in myUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td><img :src="`${user.img}`" /></td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.faculty }}</td>
                <td>
                  <button @click="navigateTo(`/manage-user/${user.id}`)">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="loader">
                <InfiniteLoading
                  v-if="loading"
                  class="loading"
                  @infinite="load"
                />
              </div>
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
</template>
<script setup>
  import InfiniteLoading from 'v3-infinite-loading';
  import 'v3-infinite-loading/lib/style.css';
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});
const route = useRoute();
const router = useRouter();
const { getConfig } = useConfig();
const faculties = ref({});
const loading = ref(true);
const myUsers = ref({});

const filter = ref({
  a: {
    search: route.query.search === undefined ? "" : route.query.search,
    faculty: route.query.faculty === undefined ? "" : route.query.faculty,
    type: route.query.type === undefined ? "" : route.query.type,
    page: route.query.page === undefined ? 1 : route.query.page,
  },
});

const { url: urlUser } = useUrl({
  path: "/manage-user",
  queryParams: {
    queryParams: filter.value.a,
  },
});

const {
  data: dataGetFilterUsers,
  get: getFilterUsers,
  onFetchResponse: getFilterUsersResponse,
  onFetchError: getFilterUsersError,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(urlUser, { immediate: false });
getFilterUsers().json().execute();
getFilterUsersResponse(() => {
  console.log(dataGetFilterUsers.value.data.data);
  console.log("ok");
  if (dataGetFilterUsers.value.data.data.length !== 0) {
    myUsers.value = myUsers.value.concat(dataGetFilterUsers.value.data.data);
  }
  if (dataGetFilterUsers.value.data.data.length < getConfig('constants.pagination')) {
    loading.value = false;
  }
  // myUsers.value = dataGetUsers.value.data.data;
  console.log(myUsers.value);
});


const {
  data: dataFaculty,
  get: getFaculty,
  onFetchResponse: getFacultyResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})("/faculties", { immediate: false });
getFaculty().json().execute();
getFacultyResponse(() => {
  faculties.value = dataFaculty.value.data.data;
});

const search = () => {
  router.replace({
    path: "/manage-user",
    query: filter.value.a,
  });
  myUsers.value = [];
  getFilterUsers().json().execute();
};

const load = () => {
  setTimeout(() => {
    getFilterUsers().json().execute();
    filter.value.a.page += 1; 
  }, 500);
};
</script>

<style scoped>
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
.col-cus {
  background-color: #f6f8fc;
  padding: 42px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 400px;
  border-radius: 10px;
}
.cus-table {
  padding: 0 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}

.header_fixed {
  width: 100%;
  overflow: auto;
  border: 1px solid #bbb;
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

td img {
  height: 60px;
  width: 60px;
  border-radius: 100%;
  border: 5px solid #e6e7e8;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

tr:nth-child(odd) {
  background-color: #edeef1;
}

tr:hover td {
  color: #44b478;
  cursor: pointer;
  background-color: #ffffff;
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

.search {
  display: inline-block;
  color: black;
  text-align: center;
}
.search input {
  margin: 0px;
  margin-right: 0;
  width: 100%;
  display: inline-block;
  border-radius: 4px !important;
}
.search button:hover svg {
  color: rgb(7, 30, 95);
}
.loading >>> div {
  margin: auto;
  margin-top: 10px;
}
.loader {
  width: 90%;
  margin: auto;
}
.register button {
  color: rgb(0, 0, 0);
  border: none;
  font-size: 16px;
  background-color: transparent;
  padding: 5px 10px 5px 0px;
  text-decoration: underline;
}
</style>
