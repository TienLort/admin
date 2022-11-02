<template>
  <v-row align-item="center" class="list px-3 mx-auto">
    <v-col cols="12" sm="3" align-item="center" class="col-cus">
      <v-btn @click="page = 1"> Search </v-btn>
    </v-col>
    <v-col cols="12" sm="9">
      <v-row>
        <v-col cols="12" sm="8">
      <v-text-field
        v-model="searchbar"
        label="Search"
        variant="solo"
        type="text"
        required
        class="input"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-btn @click="page = 1"> Search </v-btn>
    </v-col>
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
        <tbody v-for="user in myMentors" :key="user.id">
          <tr>
            <td>{{ user.id }}</td>
            <td><img :src="`${user.img}`" /></td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.faculty }}</td>
            <td>
              <button @click="navigateTo(`/manage-mentors/${user.id}`)">
                View
              </button>
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
</template>
<script setup>
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});
const searchbar = ref("");
const page = ref(1);
const totalPages = ref(3);

const myMentors = ref({});

const { url: url2 } = useUrl({
  path: "/mentors",
  queryParams: {
    isAccept: "true",
  },
});

const {
  data: dataGetMentors,
  get: getMentors,
  onFetchResponse: getMentorsResponse,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(url2, { immediate: false });
getMentors().json().execute();
getMentorsResponse(() => {
  myMentors.value = dataGetMentors.value.data.data;
});
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

table {
  width: 100%;
  border-collapse: collapse;
}

.header_fixed {
  width: 100%;
  overflow: auto;
  border: 1px solid #dddddd;
}
.col-cus{
  display: flex;
  /* align-items: center; */
  justify-content: center;
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
</style>

