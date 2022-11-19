<template>
  <v-card>
    <v-toolbar color="">
      <v-toolbar-title>
        Quản lý thông tin mentor :
        <v-tabs v-model="tab" color="primary">
          <v-tab value="option-1" class="option-btn">
            <v-icon start> mdi-account </v-icon>
            Đăng ký làm mentor
          </v-tab>
          <v-tab value="option-2" class="option-btn">
            <v-icon start> mdi-access-point </v-icon>
            Mentor đang hoạt động
          </v-tab>
        </v-tabs>
      </v-toolbar-title>
    </v-toolbar>
    <div class="flex-row">
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-row align-item="center" class="list px-3 mx-auto pt-3
            ">
              <v-col cols="12" sm="3" align-item="center" class="col-cus">
                <v-col cols="12">
                  <lable>Tìm Mentor: </lable>
                  <input
                    v-model="filter.a.search"
                    class="form-control border input-cus"
                    type="search"
                    placeholder="Môn học"
                  />

                  <div class="mt-3">
                    <label for="type">Chọn khoa</label>
                    <select
                      v-model="faculty.faculty_id"
                      class="form-select mt-1 select-cus"
                      required
                    >
                      <option value="" disabled selected>Chọn khoa</option>
                      <option
                        v-for="faculty in faculties"
                        :key="faculty.id"
                        :value="faculty.id"
                      >
                        {{ faculty.name }}
                      </option>
                    </select>
                  </div>
                  <div class="mt-3">
                    <label for="type">Chọn Môn :</label>
                    <select
                      v-model="filter.a.subject_id"
                      class="form-select mt-1 select-cus"
                      required
                    >
                      <option value="" disabled selected>Chọn môn học</option>
                      <option
                        v-for="subject in subjects"
                        :key="subject.id"
                        :value="subject.id"
                      >
                        {{ subject.name }}
                      </option>
                    </select>
                  </div>
                </v-col>
                <v-col cols="12">
                  <v-btn @click.prevent="search" width="100%" class="mt-1">
                    Search
                  </v-btn>
                </v-col>
              </v-col>
              <v-col cols="12" sm="9" class="cus-table">
                <v-row>
                  <div class="header_fixed">
                    <table>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Image</th>
                          <th>Mentor Name</th>
                          <th>Email</th>
                          <th>Faculty</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="mentor in myMentors" :key="mentor.id">
                          <td>{{ mentor.id }}</td>
                          <td><img :src="`${mentor.img}`" /></td>
                          <td>{{ mentor.name }}</td>
                          <td>{{ mentor.email }}</td>
                          <td>{{ mentor.faculty }}</td>
                          <td>
                            <button
                              @click="navigateTo(`/mentors/${mentor.id}`)"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="loader">
                      <InfiniteLoading
                        v-if="loading1"
                        class="loading"
                        @infinite="load"
                      />
                    </div>
                    <v-pagination
                      v-model="page"
                      :length="totalPages"
                      total-visible="7"
                      color="purple"
                    ></v-pagination>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <div>
              <div class="cus-header">
                <v-row align-item="center">
                  <v-col cols="9">
                    <v-row>
                      <v-col cols="4">
                        <input
                          v-model="filter.a.search"
                          class="form-control border input-cus"
                          type="search"
                          placeholder="Search"
                        />
                      </v-col>
                      <v-col cols="4">
                        <div>
                          <select
                            v-model="filter.a.type"
                            class="form-select mt-1"
                            id="type"
                          >
                            <option value="" disabled selected>
                              Trạng thái
                            </option>
                            <option
                              :value="getConfig('constants.typeOfUser.all')"
                            >
                              Tất cả
                            </option>
                            <option
                              :value="getConfig('constants.typeOfUser.active')"
                            >
                              đang hoạt động
                            </option>
                            <option
                              :value="getConfig('constants.typeOfUser.block')"
                            >
                              khóa tài khoản
                            </option>
                          </select>
                        </div>
                      </v-col>
                      <v-col cols="4">
                        <div>
                          <select
                            v-model="filter.a.faculty"
                            class="form-select mt-1"
                            required
                          >
                            <option value="" disabled selected>
                              Chọn khoa
                            </option>
                            <option
                              v-for="faculty in faculties"
                              :key="faculty.id"
                              :value="faculty.id"
                            >
                              {{ faculty.name }}
                            </option>
                          </select>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="3">
                    <v-btn @click.prevent="search1" width="100%" class="">
                      Search
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="3" v-for="mentor in myMentors" :key="mentor.id">
                  <GroupCard :mentor="mentor"/>
                </v-col>
                <!-- <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="3">
                  <GroupCard />
                </v-col> -->
              </v-row>
              <div class="text-center">
                <v-pagination
                  v-model="model"
                  :length="4"
                  rounded="circle"
                ></v-pagination>
              </div>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
<script setup>
import InfiniteLoading from "v3-infinite-loading";
import GroupCard from "../../components/mentors/MentorCard.vue";
import "v3-infinite-loading/lib/style.css";
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});
const route = useRoute();
const router = useRouter();
const { getConfig } = useConfig();
const subjects = ref([]);
const faculties = ref({});
const loading1 = ref(true);
const model = ref(1);
const totalPages = ref(6);

const tab = ref("option-1");
const myMentors = ref([]);
const faculty = ref({
  faculty_id: "",
});

const filter = ref({
  a: {
    search: route.query.search === undefined ? "" : route.query.search,
    faculty: route.query.faculty === undefined ? "" : route.query.faculty,
    subject_id:
      route.query.subject_id === undefined ? "" : route.query.subject_id,
    page: route.query.page === undefined ? 1 : route.query.page,
  },
});

const { url: urlMentor } = useUrl({
  path: "/mentors",
  queryParams: {
    queryParams: filter.value.a,
  },
});

const {
  data: dataGetFilterMentors,
  get: getFilterMentors,
  onFetchResponse: getFilterMentorsResponse,
  onFetchError: getFilterMentorsError,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(urlMentor, { immediate: false });

// getFilterMentors().json().execute();

getFilterMentorsResponse(() => {
  console.log(dataGetFilterMentors.value.data.data);
  console.log("ok");
  if (dataGetFilterMentors.value.data.data.length !== 0) {
    myMentors.value = myMentors.value.concat(
      dataGetFilterMentors.value.data.data
    );
    console.log("tesst cua mentors");
  }
  console.log(dataGetFilterMentors.value.data.data.length);
  if (
    dataGetFilterMentors.value.data.data.length <
    getConfig("constants.pagination")
  ) {
    loading1.value = false;
  }
  // myMentors.value = dataGetMentors.value.data.data;
});

const {
  data: dataFaculty,
  get: getFaculty,
  onFetchResponse: getFacultyResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})("/faculties", { immediate: false });

const { url: url1 } = useUrl({
  path: "/subjects",
  queryParams: faculty.value,
});

const {
  data: dataSubject,
  get: getSubject,
  onFetchResponse: getSubjectResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})(url1, { immediate: false });

const search = () => {
  filter.value.a.page = 1;
  router.replace({
    path: "/mentors",
    query: filter.value.a,
  });
  myMentors.value = [];
  console.log("Ok :", loading1);
};
const search1 = () => {
  filter.value.a.page = 10;
  router.replace({
    path: "/mentors",
    query: filter.value.a,
  });
  // myMentors.value = [];
  console.log("Ok :1", loading1);
};

// getFilterMentors().json().execute();

const load = () => {
  setTimeout(() => {
    getFilterMentors().json().execute();
    filter.value.a.page += 1;
    console.log("run load");
  }, 500);
};

getFaculty().json().execute();
getFacultyResponse(() => {
  faculties.value = dataFaculty.value.data.data;
});
getSubjectResponse(() => {
  subjects.value = dataSubject.value.data.data;
});

watch(faculty.value, () => {
  getSubject().json().execute();
  filter.value.a.faculty_id = faculty.value.faculty_id;
});
</script>

<style scoped>
* {
  margin: 0;
  /* padding: 0; */
  box-sizing: border-box;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background-color: #adacac;
}
.col-cus {
  background-color: #f6f8fc;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 400px;
  border-radius: 10px;
}
.cus-table {
  padding: 0 20px;
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
th:nth-child(1),
.td:nth-child(1) {
  width: 5%;
}
th:nth-child(2),
.td:nth-child(1) {
  width: 5%;
}
th:nth-child(3),
.td:nth-child(2) {
  width: 20%;
}
.th:nth-child(4),
.td:nth-child(3) {
  width: 20%;
}
.th:nth-child(5),
.td:nth-child(4) {
  width: 20%;
}
.th:nth-child(6),
.td:nth-child(5) {
  width: 10%;
}

tr:hover td {
  color: #44b478;
  cursor: pointer;
  background-color: #ffffff;
}
.input-cus,
.select-cus {
  padding: 10px;
}
td button {
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  background-color: rgb(38, 20, 206);
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
.loading >>> div {
  margin: auto;
  margin-top: 10px;
}
.loader {
  width: 90%;
  margin: auto;
}

.cus-header {
  width: 80%;
  margin: 20px auto;
  background-color: #6a7ea7;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}
.text-center {
  padding-top: 20px;  
}
.v-card{
  min-height: 100vh;
}
.v-tabs .v-btn{
  background-color: #6c7ee1;
}
.v-toolbar {
  padding-top:20px;
  height: 100px;
}
.v-slide-group-item--active{
  color: #ffc4a4 !important;
}
</style>
