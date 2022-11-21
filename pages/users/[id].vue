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
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ props }">
              <v-btn
                color="secondary"
                dark
                v-bind="props"
                @click="dialog = true"
                variant="outlined"
              >
                Chỉnh sửa thông tin
              </v-btn>
            </template>
            <v-card class="card-cus">
              <v-card-title>
                <span class="text-h5">Update User Profile</span>
              </v-card-title>
              <form @submit.prevent="submit">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Full name*"
                          required
                          v-model="myUsers.name"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                          v-model="myUsers.email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Phone number*"
                          required
                          type="number"
                          v-model="myUsers.phone_number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Address*"
                          required
                          type="text"
                          v-model="myUsers.address"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <!-- <Datepicker v-model="myUsers.birthday" /> -->
                        <input type="date" v-model="myUsers.birthday" />
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          :items="['male', 'female']"
                          label="Gender*"
                          required
                          v-model="myUsers.gender"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <select
                          id="faculty"
                          v-model="myUsers.faculty_id"
                          class="form-select select-cus"
                          required
                        >
                          <option value="" disable selected>
                            Choose your faculty
                          </option>
                          <option
                            v-for="faculty in faculties"
                            :key="faculty.id"
                            :value="faculty.id"
                          >
                            {{ faculty.name }}
                          </option>
                        </select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>* Các trường bắt buộc nhập thông tin</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                    type="submit"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </form>
            </v-card>
          </v-dialog>
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
          <p class="proile-status">Status : <span>Active</span></p>
        </div>
        <div class="col-md-12 col-cus">
          <v-card>
            <v-toolbar class="toolbar-cus">
              <v-toolbar-title class="pl-3 pt-3 pb-3">
                <h5>Mã số sinh viên : 102190242</h5>
                <v-tabs v-model="tab" color="primary">
                  <v-tab value="option-1" class="option-btn">
                    <v-icon start> mdi-account </v-icon>
                    Thông tin sinh viên :
                  </v-tab>
                  <v-tab value="option-2" class="option-btn">
                    <v-icon start> mdi-access-point </v-icon>
                    Nhóm học :
                  </v-tab>
                  <v-tab value="option-3" class="option-btn">
                    <v-icon start> mdi-text-box </v-icon>
                    Đánh giá :
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
                        <div class="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.id }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.name }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Email</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.email }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.phone_number }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Gender</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.gender == 1 ? "Nam" : "Nữ" }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>BirthDay</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.birthday }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Faculty</label>
                        </div>
                        <div class="col-md-6">
                          <p>{{ myUsers.faculty_id }}</p>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                  <v-card flat>
                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title>
                          <h5>Group đang đăng ký</h5>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text
                          v-for="j in groupsUser"
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
                          v-for="j in groupsUser"
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
                          <h5>Group đã đóng</h5>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text
                          v-for="j in groupsUser"
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
                    </v-expansion-panels>
                  </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                  <v-card flat>
                    <v-row>
                      <v-col sm="6" class="bor-col">
                        <div class="mentor-review">
                          <h5>Đánh giá từ Mentor :</h5>
                          <div v-for="rating in ratings" :key="rating.name">
                            <p class="name">{{ rating.name }}</p>
                            <p class="content">{{ rating.content }}</p>
                          </div>
                        </div>
                      </v-col>
                      <v-col sm="6">
                        <div class="mentor-review">
                          <h5>Đánh giá tới Mentor :</h5>
                          <div v-for="rating in ratings" :key="rating.name">
                            <p class="name">{{ rating.name }}</p>
                            <p class="content">{{ rating.content }}</p>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
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
import Datepicker from "vue3-datepicker";
const v = new Date();
const picked = ref(v);
const dialog = ref(false);
const dialog1 = ref(false);
const groupsUser = ref([]);
const ratings = ref([]);
const tab = ref("option-1");
const route = useRoute();
const faculties = ref({});
const myUsers = ref({
  id: "",
  img: "",
  name: "",
  email: "",
  phone_number: "",
  address: "",
  gender: "",
  birthday: "",
  faculty_id: "",
});

const { url: url2 } = useUrl({
  path: `/users/${route.params.id}`,
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
  console.log("OK");
  myUsers.value = dataGetUsers.value.data.data;
  console.log("OK1");
});
console.log(myUsers);

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

const {
  data: dataPut,
  onFetchResponse: resPut,
  onFetchError: errPut,
  statusCode: codePut,
  put,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})(`/users/${route.params.id}`, { immediate: false });
// Trả về khi put thông tin cá nhân
resPut(() => {
  myUsers.value = dataPut.value.data.data;
});
errPut(() => {
  if (codePut.value === getConfig("constants.statusCodes.validation")) {
    validationErrorMessages.value = dataPut.value.meta.error_message;
  }
  return false;
});
const submit = () => {
  // validationErrorMessages.value = {};
  // isDisabledButton.value = true;
  // if (myUsers.value.birthday === null) {
  //   const temp = new Date();
  //   myUsers.value.birthday = temp.toString().slice(4, 15);
  // } else if (myUsers.value.birthday.toString().length > 12) {
  //   myUsers.value.birthday = myUsers.value.birthday.toString().slice(4, 15);
  // }
  put(myUsers.value).json().execute();
};

// Tạo url lấy groups user đang tham gia học
const { url: urlgroupUser } = useUrl({
  path: "users/groups",
  queryParams: {
    is_user: 1,
    is_active: 1,
  },
});

// Lấy groups của user đang đăng nhập
const {
  data: dataGetgroupsUser,
  get: getgroupsUser,
  onFetchResponse: getgroupsUserResponse,
  onFetchError: getgroupsUserError,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})(urlgroupUser, { immediate: false });

getgroupsUser().json().execute();
getgroupsUserResponse(() => {
  groupsUser.value = dataGetgroupsUser.value.data.data;
});

const {
  data: dataRating,
  get: getRating,
  onFetchResponse: getRatingResponse,
  onFetchError: getRatingError,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})("/users/rating", { immediate: false });
getRating().json().execute();
getRatingResponse(() => {
  ratings.value = dataRating.value.data;
});
</script>
<style scoped>
.wrap {
  min-height: 170vh;
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
.bor-col{
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

.v-expansion-panel-title--active {
  background-color: #00FF00;
}
.v-expansion-panel {
  padding-top: 20px;
}
.full{
 text-decoration: none;
}
.mentor-review {
  padding: 10px;
  font-weight: 600;
}
.mentor-review h5 {
  text-align: center;
}
.name {
  margin-bottom: 0;
}
.select-cus{
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
</style>
