<template>
  <div class="wrap">
    <div class="container emp-profile">
      <img cover src="/images/user.png" alt="" />
      <div class="file btn btn-lg btn-primary">
        <v-icon>mdi-image-multiple</v-icon>
        <input type="file" name="file" />
      </div>
      <div class="profile-user">
        <div class="control-btn">
          <v-dialog v-model="dialog1" persistent>
            <template v-slot:activator="{ props }">
              <v-btn
                color="secondary"
                dark
                v-bind="props"
                @click="dialog1 = true"
                variant="outlined"
                class="ml-4"
              >
                Khóa tài khoản
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Bạn có chắc muốn khóa tài khoản này không ?
              </v-card-title>
              <v-card-text
                >Tài khoản sau khi khóa sẽ không thể sử dụng các chức năng của
                ứng dụng cho đến khi được mở lại.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="dialog1 = false"
                >
                  Hủy
                </v-btn>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="dialog1 = false"
                >
                  Đồng ý
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div class="profile-head">
          <h3>Nguyễn Văn Tiến</h3>
          <p class="proile-status">Trạng thái : <span>Đang hoạt động</span></p>
        </div>
        <div class="col-md-12 col-cus">
          <v-card>
            <v-toolbar class="toolbar-cus">
              <v-toolbar-title class="pl-3 pt-3">
                <h5>Profile :</h5>
                <v-tabs v-model="tab" color="primary">
                  <v-tab value="option-1" class="option-btn">
                    <v-icon start> mdi-account </v-icon>
                    Thông tin sinh viên :
                  </v-tab>
                  <v-tab value="option-2" class="option-btn">
                    <v-icon start> mdi-account </v-icon>
                    Thông tin mentor:
                  </v-tab>
                  <v-tab value="option-3" class="option-btn">
                    <v-icon start> mdi-access-point </v-icon>
                    Nhóm học :
                  </v-tab>
                </v-tabs>
              </v-toolbar-title>
            </v-toolbar>
            <div class="flex-row">
              <v-window v-model="tab">
                <v-window-item value="option-1">
                  <v-card flat>
                    <div class="profile-tab pl-5 pt-3">
                      <div class="row">
                        <div class="col-md-4">
                          <label>Họ và tên:</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.full_name }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Email :</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.email }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Số điện thoại :</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.phone_number }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Tài khoản ngân hàng:</label>
                        </div>
                        <div class="col-md-8">
                          <p>
                            {{ infor.smart_banking }} - {{ infor.name }} -
                            {{ infor.bank }}
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Địa chỉ thường trú :</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.address }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Giới tính :</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.gender == 1 ? "Nam" : "Nữ" }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Ngày sinh :</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.birthday }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Khoa :</label>
                        </div>
                        <div class="col-md-8">
                          <p>{{ myMentors.faculty_id }}</p>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                  <v-card flat>
                    <div class="mentor-review">
                      <h3>Đánh giá từ sinh viên :</h3>
                      <v-col cols="12" class="cus-table">
                        <div class="header_fixed">
                          <table>
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Tên người đánh giá</th>
                                <th>Group</th>
                                <th>điểm</th>
                                <th>Nhận xét</th>
                                <th>thời gian</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(rating, index) in ratings" :key="index">
                                <td>{{ index + 1}}</td>
                                <td>{{ rating.name }}</td>
                                <td>{{ rating.group_id == 1 ? "CNTT" : "KHMT"  }}</td>
                                <td>{{ rating.rating }}<v-icon class="icon-cus">mdi-star</v-icon></td>
                                <td>{{ rating.comment }}</td>
                                <td>  {{ rating.created_at }}  </td>
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
                      </v-col>
                    </div>
                  </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                  <v-card flat>
                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title>
                          <h5>Group đang đăng ký</h5>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text
                          v-for="j in groupsMentor"
                          :key="j.id"
                        >
                          <NuxtLink
                            :to="{ path: `/manage-groups/${j.id}` }"
                            class="full"
                          >
                            {{ j.subject }}
                          </NuxtLink>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title>
                          <h5>Group đang giảng dạy</h5>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text
                          v-for="j in groupsMentor"
                          :key="j.id"
                        >
                          {{ j.subject }}
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title>
                          <h5>Group đã đóng</h5>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text
                          v-for="j in groupsMentor"
                          :key="j.id"
                        >
                          {{ j.subject }}
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card>
                </v-window-item>
              </v-window>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const tab = ref("option-1");
const route = useRoute();
const faculties = ref({});
const ratings = ref([]);
const groupsMentor = ref([]);
const myMentors = ref({
  id: "",
  avatar_url: "",
  full_name: "",
  email: "",
  phone_number: "",
  address: "",
  gender: "",
  birthday: "",
  id_faculty: "",
});
const infor = ref({
  smart_banking: "",
  name: "",
  bank: "",
});
const { url: url2 } = useUrl({
  path: `/mentors/${route.params.id}`,
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
  console.log("OK");
  myMentors.value = dataGetMentors.value.data.data;
  console.log("OK1");
});
console.log(myMentors);

const {
  data: dataGetFaculty,
  get: getFaculty,
  onFetchResponse: getFacultyResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})("/faculties", { immediate: false });
// Lấy tất cả khoa
getFaculty().json().execute();
getFacultyResponse(() => {
  faculties.value = dataGetFaculty.value.data.data;
});

// Tạo url lấy groups user đang tham gia học
const { url: urlgroupMentor } = useUrl({
  path: "mentors/groups",
  queryParams: {
    is_mentor: 1,
    is_active: 1,
  },
});

// Lấy groups của user đang đăng nhập
const {
  data: dataGetgroupsMentor,
  get: getgroupsMentor,
  onFetchResponse: getgroupsMentorResponse,
  onFetchError: getgroupsMentorError,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})(urlgroupMentor, { immediate: false });

getgroupsMentor().json().execute();
getgroupsMentorResponse(() => {
  groupsMentor.value = dataGetgroupsMentor.value.data.data;
});
const {
  data: dataMentorInfor,
  get: getMentorInfor,
  onFetchResponse: getMentorInforResponse,
  onFetchError: getMentorInforError,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})("/mentors/mentor-infor", { immediate: false });
getMentorInfor().json().execute();
getMentorInforResponse(() => {
  infor.value = dataMentorInfor.value.data;
});

const {
  data: dataRating,
  get: getRating,
  onFetchResponse: getRatingResponse,
  onFetchError: getRatingError,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})("/mentors/rating", { immediate: false });
getRating().json().execute();
getRatingResponse(() => {
  ratings.value = dataRating.value.data;
});
</script>

<style scoped>
.wrap {
  min-height: 183vh;
  font-family: "Roboto Slab", "Times New Roman", serif !important;
}
.emp-profile {
  padding: 3% 0;
  border-radius: 0.5rem;
  background: #7d7d7d;
  position: relative;
  min-height: 400px;
  max-width: 1318px;
  border: 1px solid #ddd;
}
.profile-user {
  background-color: #fff;
  width: 70%;
  position: absolute;
  top: 35%;
  left: 14%;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.12),
    0 7px 10px -5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.control-btn {
  display: flex;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
}
.control-btn .v-btn {
  min-width: 180px;
}
.emp-profile img {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: absolute;
  top: 9%;
  left: 40%;
  z-index: 100;
}
.emp-profile .file {
  position: absolute;
  overflow: hidden;
  border: none;
  border-radius: 50%;
  background: #212529b8;
  font-size: 15px;
  top: 13%;
  left: 53%;
  z-index: 100;
}
.emp-profile .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.card-cus {
  min-width: 80vw;
  min-height: 90vh;
  align-content: center;
}
.profile-head h3 {
  margin-top: 30px;
  min-height: 32px;
  color: #3c4858;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  text-align: center;
}
.proile-status {
  text-align: center;
}
.v-tabs .v-btn {
  /* background-color: #6c7ee1; */
  margin-left: 20px;
  /* color: #fff; */
  text-align: center;
}
.v-toolbar {
  padding-top: 20px;
  height: 100px;
  background-color: #fff;
}
.v-slide-group-item--active {
  /* color: #ffc4a4 !important; */
}
.col-md-6 {
  padding: 10px;
}
.bor-col {
  border-right: 3px solid #0062cc;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.col-cus {
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.v-input__details {
  display: none;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab {
  background-color: #fff;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #0062cc;
}
.container {
  max-width: 1318px;
  border: 1px solid #ddd;
}
.v3dp__datepicker {
  padding: 10px 20px;
  outline: none;
  background-color: #f6f6f6;
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
  margin-bottom: 20px;
}
.v3dp__datepicker:hover {
  cursor: pointer;
  background-color: #eeeeee;
}
.v3dp__input_wrapper {
  width: 100%;
  outline: none;
}
.v3dp__input_wrapper > input {
  width: 100%;
  border: none;
  outline: none;
}

input[type="date"] {
  padding: 10px 20px;
  outline: none;
  background-color: #f6f6f6;
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: "Roboto Mono", monospace;
  color: rgb(58, 58, 58);
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #a5a5a5;
  width: 100%;
}
::-webkit-calendar-picker-indicator {
  background-color: #ffffff;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #ddd;
}
.v-expansion-panel {
  background-color: #fff;
}
.v-expansion-panel-title--active {
  background-color: #2f3c7e;
  color: #fff;
}
.v-expansion-panel {
  padding-top: 20px;
}
.full {
  text-decoration: none;
}
.mentor-review {
  padding: 10px;
  font-weight: 600;
}
.mentor-review h3 {
  /* text-align: center; */
  padding: 20px;
}
.mentor-review h3:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #ee2c74;
  margin-top: 5px;
}
.name {
  margin-bottom: 0;
}
.select-cus {
  padding: 15px 20px;
  outline: none;
  background-color: #f6f6f6;
  font-family: "Roboto Mono", monospace;
  color: rgb(58, 58, 58);
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #a5a5a5;
  width: 100%;
}
.content {
  padding-left: 20px;
  margin-bottom: 20px;
  font-weight: 500;
}

table {
  width: 100%;
  border-collapse: collapse;
}
.header_fixed {
  width: 100%;
  overflow: auto;
  border-top: 3px solid red;
}
.header_fixed thead th {
  background-color: #04aa6d;
  color: #fff;
  font-size: 15px;
}
th,
td {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
}
tr:nth-child(even) {
  background-color: #efefef;
}

tr:nth-child(odd) {
  background-color: #fff;
}
.icon-cus{
  font-size: 16px;
  padding:0 0 4px 4px;
}
td,
th {
  /* border: 1px solid #dbdada; */
}
tr:hover td {
  cursor: pointer;
}
th:nth-child(1),
.td:nth-child(1) {
  width: 5%;
}
th:nth-child(2),
.td:nth-child(1) {
  width: 20%;
}
th:nth-child(3),
.td:nth-child(2) {
  width: 15%;
}
.th:nth-child(4),
.td:nth-child(3) {
  width: 10%;
}
.th:nth-child(5),
.td:nth-child(4) {
  width: 40%;
}
.th:nth-child(6),
.td:nth-child(5) {
  width: 10%;
}
</style>
