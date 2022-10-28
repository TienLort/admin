<script setup>
import GroupCard from "../../components/groups/GroupCard.vue";
const tab = ref("option-1");
const desserts = ref([
  {
    id: 1,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    datetime: "20/10/2022",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    datetime: "20/10/2022",
  },
  {
    id: 3,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    datetime: "20/10/2022",
  },
  {
    id: 4,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
    datetime: "20/10/2022",
  },
  {
    id: 5,
    name: "Nguyễn Văn A",
    subject: "Đại số tuyến tính",
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
        Option
        <v-tabs v-model="tab" color="primary">
          <v-tab value="option-1" class="option-btn" >
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
              <br />
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Id</th>
                    <th class="text-left">Name Student</th>
                    <th class="text-left">subject</th>
                    <th class="text-left">datetime</th>
                    <th class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.subject }}</td>
                    <td>{{ item.datetime }}</td>
                    <td>
                      <v-btn block color="success" elevation="0">Accept</v-btn>
                      <v-btn block color="error" elevation="0" class="btn"
                        >Refuse</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </v-table>
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
                sm="12"
                md="6"
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
                sm="12"
                md="6"
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
                sm="12"
                md="6"
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
                sm="12"
                md="6"
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
  width: 40px;
  margin: 5px;
}
.option-btn{
  min-width: 200px;
}
.v-btn__content{
  color:#fff;
}
</style>
