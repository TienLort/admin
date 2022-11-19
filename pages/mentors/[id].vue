<template>
  <div class="container emp-profile">
    <div class="row">
      <div class="col-md-3 col-cus1">
        <div class="profile-img">
          <img cover :src="`${myMentors.img}`" alt="" />
          <div class="file btn btn-lg btn-primary">
            Change Photo
            <input type="file" name="file" />
          </div>
        </div>
        <div class="profile-work">
          <div class="profile-head pl-5">
            <h5>{{ myMentors.name }}</h5>
            <h6>{{ myMentors.id }}</h6>
            <p class="proile-rating">Status : <span>Active</span></p>
          </div>
          <p>WORK LINK</p>
          <a href="">Website Link</a><br />
          <a href="">Bootsnipp Profile</a><br />
          <a href="">Bootply Profile</a>
          <p>SKILLS</p>
          <a href="">Web Designer</a><br />
          <a href="">Web Developer</a><br />
          <a href="">WordPress</a><br />
          <a href="">WooCommerce</a><br />
          <a href="">PHP, .Net</a><br />
        </div>
      </div>
      <div class="col-md-7 col-cus">
        <v-card>
          <v-toolbar class="toolbar-cus">
            <v-toolbar-title class="pl-3 pt-3">
              <h5>Mã số sinh viên : 102190242</h5>
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
                      <div class="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.id }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.name }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.email }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.phone_number }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.gender == 1 ? "Nam" : "Nữ" }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>BirthDay</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.birthday }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Faculty</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ myMentors.faculty_id }}</p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-window-item>
              <v-window-item value="option-2">
                <v-card flat>
                  <div class="profile-tab pl-5 pt-3">
                    <div class="row">
                      <div class="col-md-4">
                        <label>Tài khoản ngân hàng:</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ infor.smart_banking }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label>Người thụ hưởng :</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ infor.name }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label>Ngân hàng :</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ infor.bank }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label>Sơ yếu lý lịch :</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ infor.cv }}</p>
                      </div>
                    </div>
                    
                  </div>
                  <div class="mentor-review">
                      <h5>Đánh giá từ sinh viên :</h5>
                      <div v-for="rating in ratings" :key="rating.name">
                        <p class="name">{{ rating.name }}</p>
                        <p class="content">{{ rating.content }}</p>
                      </div>
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
      <div class="col-md-2">
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Khóa tài khoản </v-btn>
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
                  @click="dialog = false"
                >
                  Hủy
                </v-btn>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="dialog = false"
                >
                  Đồng ý
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script setup>
const dialog = ref(false);
const tab = ref("option-1");
const route = useRoute();
const faculties = ref({});
const ratings = ref([]);
const groupsMentor = ref([]);
const myMentors = ref({
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
})(
  '/mentors/rating',
  { immediate: false },
);
getRating().json().execute();
getRatingResponse(() => {
  ratings.value = dataRating.value.data;
});
</script>

<style scoped>
.emp-profile {
  padding: 3% 0;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.option-btn {
  padding: 0 20px;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 60%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
img {
  width: 150px;
  height: 150px;
  border: 1px solid #0062cc;
  border-radius: 50%;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.toolbar-cus {
  background-color: #fff;
  padding-bottom: 5px;
  border-bottom: 3px solid #0062cc;
}

.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.card-cus {
  min-width: 80vw;
  min-height: 90vh;
  align-content: center;
}
.col-cus {
  padding-left: 20px;
}
.col-md-6 {
  padding: 10px;
}
.col-cus1 {
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
.full {
  text-decoration: none;
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
  background-color: #4f93ff;
  color: #fff;
}
.v-expansion-panel {
  padding-top: 20px;
}
.mentor-review{
  padding:10px;
  font-weight: 600;
}
.mentor-review h5{
  text-align:center;
}
.name{
  margin-bottom: 0 ;
}
.content{
  padding-left:20px;
  margin-bottom:20px;
  font-weight:500;
}
</style>
