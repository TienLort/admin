<script setup>
import GroupCard from "../../components/groups/GroupCard.vue";
const tab = ref("option-1");
const desserts = ref([
  {
    id: 1,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    topic: "Tìm hiểu và làm bài cuối kỳ",
    datetime: "20/10/2022",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    topic: "Tìm hiểu và làm bài cuối kỳ",
    datetime: "20/10/2022",
  },
  {
    id: 3,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    topic: "Tìm hiểu và làm bài cuối kỳ",
    datetime: "20/10/2022",
  },
  {
    id: 4,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    topic: "Tìm hiểu và làm bài cuối kỳ",
    datetime: "20/10/2022",
  },
  {
    id: 5,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    topic: "Tìm hiểu và làm bài cuối kỳ",
    datetime: "20/10/2022",
  },
]);

const groups = ref([]);

const { url: url1 } = useUrl({
  path: "/groups",
  queryParams: {
    isAccept: "true",
  },
});

const {
  data: dataGetGroups,
  get: getGroups,
  onFetchResponse: getGroupsResponse,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(url1, { immediate: false });
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
                <v-table>
                  <thead>
                    <tr>
                      <th >No.</th>
                      <th >Tên sinh viên</th>
                      <th >Môn học</th>
                      <th >Chủ đề</th>
                      <th >Thời gian</th>
                      <th >Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.subject }}</td>
                      <td>{{ item.topic }}</td>
                      <td>{{ item.datetime }}</td>
                      <td class="cus-td">
                        <v-btn color="success" elevation="0"
                          ><v-icon>mdi-account-multiple-check</v-icon></v-btn
                        >
                        <v-btn color="error" elevation="0" class="btn"
                          ><v-icon>mdi-account-multiple-remove</v-icon></v-btn
                        >
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </v-card-text>
            <div class="text-center">
              <v-pagination
                v-model="model"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
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
  margin:5px;
}
.option-btn {
  min-width: 200px;
}
.v-btn__content {
  color: #fff;
}
.v-toolbar {
  padding-top: 20px;
  height: 90px;
  background-color: #fff;
}
.cus-td {
  /* display: flex;
  justify-content: center;
  margin: 0; */
}
.header_fixed {
  width: 100%;
  overflow: auto;
  border: 1px solid #bbb;
}
.header_fixed thead th {
  background-color: #26333f;
  color: #fff;
  text-align: center;
  font-size: 15px;
}

th,
td {
  text-align: center;
  border: 1px solid #dbdada;
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
td button:hover {
  opacity: 0.8;
}
.table {
  table-layout: fixed;
  width: 100%;
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
