<template>
  <div class="container emp-profile">
    <div class="row">
      <div class="col-md-3 col-cus1">
        <div class="profile-img">
          <img cover :src="`${myUsers.img}`" alt="" />
          <div class="file btn btn-lg btn-primary">
            Change Photo
            <input type="file" name="file" />
          </div>
        </div>
        <div class="profile-work">
          <div class="profile-head pl-5">
            <h5>{{ myUsers.name }}</h5>
            <h6>{{ myUsers.id }}</h6>
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
                    <v-expansion-panel v-for="i in 3" :key="i">
                      <v-expansion-panel-title>
                        Item
                      </v-expansion-panel-title>
                      <v-expansion-panel-text v-for="j in 3" :key="j">
                        Mon Hoc {{j}}
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
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ props }">
            <v-btn
              color="secondary"
              dark
              v-bind="props"
              @click="dialog = true"
              variant="outlined"
            >
              Edit user
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
                        class="form-select"
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
        <input
          type="submit"
          class="profile-edit-btn"
          name="btnAddMore"
          value="Block user"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Datepicker from "vue3-datepicker";
const v = new Date();
const picked = ref(v);
const dialog = ref(false);
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
  myUsers.value = dataGetMentors.value.data.data;
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

.v-expansion-panel-title--active{
  background-color: #4f93ff;
}
.v-expansion-panel{
  padding-top: 20px;
}
</style>
