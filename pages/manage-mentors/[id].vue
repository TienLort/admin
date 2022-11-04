<script setup>
import Datepicker from "vue3-datepicker";
const v = new Date();
const picked = ref(v);
const dialog = ref(false);
const tab = ref("option-1");
const route = useRoute();
const myMentors = ref({
  id: "",
  img: "",
  name: "",
  email: "",
  phonenumber: "",
  address: "",
  gender: "",
  birthday: "",
  faculty: "",
});

const { url: url2 } = useUrl({
  path: `/manage-mentors/${route.params.id}`,
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
</script>
<template>
  <div class="container">
    <div class="header">
      <v-row>
    <v-col sm="12" md="4" lg="3">
      <div class="card">
            <img cover :src="`${myMentors.img}`" />
            <div class="mentor-name">Nguyễn Văn Tiến</div>
            <div class="action">
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="secondary"
                      dark
                      v-bind="props"
                      @click="dialog = true"
                      variant="outlined"
                    >
                      Edit
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Update User Profile</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              label="First name*"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Phone number*"
                              required
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Address*"
                              required
                              type="text"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Password*"
                              type="password"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <Datepicker v-model="picked" />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select
                              :items="['male', 'female']"
                              label="Gender*"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select
                              :items="[
                                'Công Nghệ Thông Tin',
                                'Điện Tử Viễn Thông',
                              ]"
                              label="Faculty*"
                              required
                            ></v-select>
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
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-btn variant="outlined" color="secondary">Lock</v-btn>
            </div>
          </div>
    </v-col>
    <v-col sm="12" md="8" lg="9">
      <v-card>
    <v-toolbar color="">
      <v-toolbar-title> 
        Option
        <v-tabs v-model="tab" color="primary">
                  <v-tab value="option-1" class="option-btn">
                    <v-icon start> mdi-account </v-icon>
                    Thông tin mentor:
                  </v-tab>
                  <v-tab value="option-3" class="option-btn">
                    <v-icon start> mdi-access-point </v-icon>
                    Nhóm đang hướng dẫn
                  </v-tab>
                  <v-tab value="option-4" class="option-btn">
                    <v-icon start> mdi-access-point </v-icon>
                    Nhóm đã hướng dẫn
                  </v-tab>

        </v-tabs>
      </v-toolbar-title>
    </v-toolbar>
    <div class="flex-row">
        <v-window v-model="tab">
          <v-window-item value="option-1">
            <v-card flat>
              <div class="wrap-info">
             <h1>Mentor Account</h1>
             <div class="group">
               <label>Email:</label>
               <input
                 type="text"
                 v-model="myMentors.email"
                 class="input-field"
                 readonly
               />
               <v-row>
                 <v-col cols="12" sm="12" md="6" lg="6">
                   <label>Full Name:</label>
                   <input
                     type="text"
                     v-model="myMentors.name"
                     class="input-field"
                     readonly
                   />
                 </v-col>
                 <v-col cols="12" sm="12" md="6" lg="6">
                   <label>Phone Number:</label>
                   <input
                     type="text"
                     v-model="myMentors.phonenumber"
                     class="input-field"
                     readonly
                   />
                 </v-col>
               </v-row>
               <v-row>
                 <v-col cols="12" sm="12" md="6" lg="6">
                   <label>Address:</label>
                   <input
                     type="text"
                     v-model="myMentors.address"
                     class="input-field"
                     readonly
                   />
                 </v-col>
                 <v-col cols="12" sm="12" md="6" lg="6">
                   <label>Gender:</label>
                   <input
                     type="text"
                     :v-model="myMentors.gender"
                     class="input-field"
                     readonly
                   />
                 </v-col>
               </v-row>
  
               <v-row>
                 <v-col cols="12" sm="12" md="6" lg="6">
                   <label>Birth Date:</label>
                   <!-- <Datepicker v-model="picked" class="date-field" /> -->
                   <input
                     type="text"
                     v-model="myMentors.birthday"
                     class="input-field"
                     readonly
                   />
                 </v-col>
                 <v-col cols="12" sm="12" md="6" lg="6">
                   <label>Faculty:</label>
                   <input
                     type="text"
                     v-model="myMentors.faculty"
                     class="input-field"
                     readonly
                   />
                 </v-col>
               </v-row>
             </div>
           </div>
            </v-card>
          </v-window-item>
          <v-window-item value="option-2">
            <v-card flat>
              
              OK
            </v-card>
          </v-window-item>
          <v-window-item value="option-3">
            <v-card flat>
              ok
            </v-card>
          </v-window-item>
        </v-window>
      </div>
  </v-card>
    </v-col>
  </v-row>
    </div>
  </div>
  
</template>

<style scoped>
.flex-row{
  width: 100%;
}
.wrap-info{
  width: 80%;
  padding: 20px 0px 0px 40px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
}
.action {
  display: flex;
  flex-direction: column;
}
img {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.v-responsive {
  flex: none;
}
.v-card {
  min-width: 900px;
}
.header {
  border-radius: 5px;
}
.mentor-name {
  font-size: 24px;
  font-weight: bold;
}
.v-input__control {
  padding-bottom: 10px;
}
.v-btn {
  margin: 10px 5px;
  padding: 5px 5px;
  min-width: 140px;
}
label {
  padding: 5px;
  font-weight: 600;
  font-size: 18px;
}
.input-field {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  background-color: #fff;
  border: 1px solid rgb(226, 226, 226);
  box-shadow: 5px 5px 5px #888888;
  margin-top: 5px;
  margin-bottom: 20px;
}
.v3dp__datepicker {
  padding: 10px 20px;
  outline: none;
  background-color: rgb(236, 236, 236);
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
  margin-bottom: 20px;
}
.v3dp__input_wrapper {
  width: 100%;
  outline: none;
}
.v3dp__input_wrapper > input {
  width: 100%;
  outline: none;
}
</style>
