<template>
  <v-row align-item="center" class="list px-3 mx-auto">
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
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="user in myUsers" :key="user.id">
          <tr>
            <td>{{ user.id }}</td>
            <td><img :src="`${user.img}`" /></td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.department }}</td>
            <td>
              <button @click="navigateTo(`/manage-user/${user.id}`)">
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
</template>
<script setup>
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});
const searchbar = ref("");
const page = ref(1);
const totalPages = ref(3);

const myUsers = ref({});

const { url: url2 } = useUrl({
  path: "/users",
  queryParams: {
    isAccept: "true",
  },
});

const {
  data: dataGetUsers,
  get: getUsers,
  onFetchResponse: getUsersResponse,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(url2, { immediate: false });
getUsers().json().execute();
getUsersResponse(() => {
  myUsers.value = dataGetUsers.value.data.data;
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

<!-- <tr>
                    <td>2</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Anjali</td>
                    <td>anjali@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Vejata Gupta</td>
                    <td>Vejata@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Shweta</td>
                    <td>Shweta@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Adarsh</td>
                    <td>Adarsh@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Monti</td>
                    <td>Monti@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Arpit</td>
                    <td>Arpit@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><img src="/images/user.png"/></td>
                    <td>Priya</td>
                    <td>priya@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr> -->
