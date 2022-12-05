<script setup>
import GroupCard from "../../components/groups/GroupCard.vue";
const tab = ref("option-1");
const groups = ref([]);
const groupsCreate = ref([]);

const { url: url1 } = useUrl({
  path: "/groups/create",
  queryParams: {
    // isAccept: "true",
  },
});

const {
  data: dataGetGroupsCreate,
  get: getGroupsCreate,
  onFetchResponse: getGroupsCreateResponse,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(url1, { immediate: false });
getGroupsCreate().json().execute();
getGroupsCreateResponse(() => {
  groupsCreate.value = dataGetGroupsCreate.value.data.data;
});

const { url: url2 } = useUrl({
  path: "/groups",
  queryParams: {
    // isAccept: "true",
  },
});

const {
  data: dataGetGroups,
  get: getGroups,
  onFetchResponse: getGroupsResponse,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(url2, { immediate: false });
getGroups().json().execute();
getGroupsResponse(() => {
  groups.value = dataGetGroups.value.data.data;
});
</script>

<template>
  <v-card>
    <v-toolbar color="">
      <v-toolbar-title>
        <!-- Quản lý Nhóm học :  -->
        <v-tabs v-model="tab" color="primary">
          <v-tab value="option-1" class="option-btn">
            <v-icon start> mdi-account </v-icon>
            Tạo Nhóm Mới
          </v-tab>
          <v-tab value="option-2" class="option-btn">
            <v-icon start> mdi-lock </v-icon>
            Nhóm Tuyển Thành viên
          </v-tab>
          <v-tab value="option-3" class="option-btn">
            <v-icon start> mdi-access-point </v-icon>
            Nhóm Tìm Mentor
          </v-tab>
          <v-tab value="option-4" class="option-btn">
            <v-icon start> mdi-access-point </v-icon>
            Nhóm Đang Hoạt Động
          </v-tab>
          <v-tab value="option-5" class="option-btn">
            <v-icon start> mdi-access-point </v-icon>
            Nhóm Đã Đóng
          </v-tab>
        </v-tabs>
      </v-toolbar-title>
    </v-toolbar>
    <div class="flex-row">
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text>              
              <div class="header_fixed">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Tên sinh viên</th>
                      <th>Môn học</th>
                      <th>Chủ đề</th>
                      <th>Thời gian</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(group, index) in groupsCreate" :key="index">
                      <td>{{ group.id }}</td>
                      <td>{{ group.user_name }}</td>
                      <td>{{ group.subject }}</td>
                      <td>{{ group.topic }}</td>
                      <td>{{ group.created_at.slice(0,10) }}</td>
                      <td>
                        <button @click="navigateTo(`/groups/${group.id}/create`)">
                          <v-icon class="pr-3">mdi-eye</v-icon>Xem
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
            </v-card-text>
            
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                v-for="group in groups"
                :key="group.id"
              >
                <GroupCard :group="group" />
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination
                v-model="model"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                v-for="group in groups"
                :key="group.id"
              >
                <GroupCard :group="group" />
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination
                v-model="model"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
          </v-card>
        </v-window-item>
        <v-window-item value="option-4">
          <v-card flat>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                v-for="group in groups"
                :key="group.id"
              >
                <GroupCard :group="group" />
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination
                v-model="model"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
          </v-card>
        </v-window-item>
        <v-window-item value="option-5">
          <v-card flat>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                v-for="group in groups"
                :key="group.id"
              >
                <GroupCard :group="group" />
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination
                v-model="model"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<style scoped>
.v-btn {
  margin: 5px;
}
.v-btn__content {
  color: #fff;
}
.v-toolbar {
  padding-top: 20px;
  height: 90px;
  background-color: #fff;
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
  background-color: #023e73;
  color: #fff;
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
  background-color: #efefef;
}

tr:nth-child(odd) {
  background-color: #fff;
}
td,
th {
  border: 1px solid #dbdada;
}
tr:hover td {
  cursor: pointer;
}

td button {
  border: none;
  padding: 7px 20px;
  border-radius: 10px;
  background-color: #023e73;
  color: #fff;
}
td button:hover {
  opacity: 0.8;
}
thead th:nth-child(1) {
  width: 5%;
}

thead th:nth-child(2) {
  width: 15%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}
thead th:nth-child(5) {
  width: 15%;
}
thead th:nth-child(6) {
  width: 15%;
  }
</style>
