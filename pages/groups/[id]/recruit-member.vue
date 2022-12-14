<template>
  <div class="container">
    <v-row>
      <v-col cols="12" lg="4" sm="12">
        <div class="img">
          <img src="/images/groups/g1.png" alt="" />
        </div>
      </v-col>
      <v-col class="group-infor" cols="12" lg="8" sm="12">
        <h4 class="pt-3 pb-4">{{ group.subject }}</h4>
        <p><span>Khoa:</span> {{ group.faculty }}</p>
        <p class="title">
          <span> Tóm tắt thông tin: </span>
          {{ group.topic }}
        </p>
        <p class="information">
          <span>Thông tin chi tiết</span>
          {{ group.information }}
        </p>
        <p class="information">
          <span>Phòng học</span>
          {{ group.location_study }}
        </p>
        <p class="information">
          <span>Thời gian dự kiến</span>
          {{ group.time_study }}
        </p>
        <p class="information">
          <span>Loại nhóm học</span>
          {{ group.self_study == 0 ? "Nhóm tìm kiếm mentor" : "Nhóm tự học"   }}
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col cols="12" sm="4">
        <p><span>Người tạo nhóm :</span></p>
        <p class="mb-0">
          <NuxtLink to="/users/10" class="full">
            Nguyễn Văn Tiến _ Khoa : CNTT
          </NuxtLink>
        </p>
        <p><span>Thành viên hiện có:</span> {{ group.quantity }} thành viên</p>
        <div v-for="(member, index) in group.members" :key="member.id">
          <p class="mb-0">
            <NuxtLink :to="{ path: `/users/${member.id}` }" class="full">
              {{ index + 1 }}. {{ member.full_name }} _ Khoa:
              {{ member.faculty }}
            </NuxtLink>
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <h5>Chức năng :</h5>
        <div class="control-btn">
          <v-btn color="success" @click="submit"> {{ group.self_study == 0 ? "Tìm kiếm mentor" : "Tạo nhóm học"   }} </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});

const route = useRoute();
const groupId = ref({
  group_id: "",
});
const group = ref({
  id: "",
  faculty: "",
  subject: "",
  title: "",
  information: "",
  topic:"",
  self_study:"",
  time_study:"",
  quantity: "",
  members: [
    {
      full_name: "",
      faculty: "",
      id:0,
    },
  ],
});

const {
  data: dataGetGroup,
  get: getGroup,
  onFetchResponse: getGroupRes,
  onFetchError: getGroupErr,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})(`groups/${route.params.id}`, { immediate: false });
getGroup().json().execute();
getGroupRes(() => {
  group.value = dataGetGroup.value.data.data;
  groupId.value.group_id = group.value.id;
});

const {
  data: dataPut,
  onFetchResponse: resPut,
  onFetchError: errPut,
  statusCode: codePut,
  put,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})(`/groups/${route.params.id}`, { immediate: false });
// Trả về khi put thông tin cá nhân
resPut(() => {
  // myUsers.value = dataPut.value.data.data;
  console.log("ok")
});
errPut(() => {
  if (codePut.value === getConfig("constants.statusCodes.validation")) {
    validationErrorMessages.value = dataPut.value.meta.error_message;
  }
  return false;
});
const submit = () => {
  put().json().execute();
  navigateTo("/groups")
};
</script>
<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto Slab", "Times New Roman", serif;
}
.img {
  /* background-color: red; */
  height: 250px;
  max-width: 300px;
  border-radius: 3px;
  border: 0.5px solid rgb(172, 172, 172);
}

img {
  width: 100%;
  height: 100%;
}

h4 {
  font-size: 25px;
  font-weight: 700;
  color: rgb(0, 13, 154);
}
h5 {
  font-size: 17px;
  /* color: rgb(0, 85, 119); */
}
.full {
  text-decoration: none;
  /* color:#fff; */
}
.group-infor span {
  color: rgb(0, 16, 192);
  display: inline-block;
  width: 160px;
}
.full {
  text-decoration: none;
}
.control-btn {
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-content: space-around;
}
.v-btn {
  width: 200px;
}
</style>
