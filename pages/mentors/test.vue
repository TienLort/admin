<script setup>
import GroupCard from "../../components/mentors/MentorCard.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});
const route = useRoute();
const router = useRouter();
const { getConfig } = useConfig();
const faculties = ref({});
const loading = ref(true);
const myMentors = ref([]);
const model = ref(4);
const filter = ref({
  a: {
    search: route.query.search === undefined ? "" : route.query.search,
    faculty: route.query.faculty === undefined ? "" : route.query.faculty,
    type: route.query.type === undefined ? "" : route.query.type,
    page: route.query.page === undefined ? 1 : route.query.page,
  },
});

const { url: urlUser } = useUrl({
  path: "/mentors",
  queryParams: {
    queryParams: filter.value.a,
  },
});

const {
  data: dataGetFilterUsers,
  get: getFilterUsers,
  onFetchResponse: getFilterUsersResponse,
  onFetchError: getFilterUsersError,
} = useFetchApi({
  requireAuth: false,
  disableHandleErrorUnauthorized: false,
})(urlUser, { immediate: false });
getFilterUsers().json().execute();
getFilterUsersResponse(() => {
  console.log(dataGetFilterUsers.value.data.data);
  console.log("ok");
  if (dataGetFilterUsers.value.data.data.length !== 0) {
    myMentors.value = myMentors.value.concat(
      dataGetFilterUsers.value.data.data
    );
  }
  if (
    dataGetFilterUsers.value.data.data.length <
    getConfig("constants.pagination")
  ) {
    loading.value = false;
  }
  // myMentors.value = dataGetUsers.value.data.data;
});

const {
  data: dataFaculty,
  get: getFaculty,
  onFetchResponse: getFacultyResponse,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: true,
})("/faculties", { immediate: false });
getFaculty().json().execute();
getFacultyResponse(() => {
  faculties.value = dataFaculty.value.data.data;
});

const search = () => {
  router.replace({
    path: "/mentors",
    query: filter.value.a,
  });
  myMentors.value = [];
  getFilterUsers().json().execute();
};

const load = () => {
  setTimeout(() => {
    getFilterUsers().json().execute();
    filter.value.a.page += 1;
  }, 500);
};
</script>

<template>
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
            <div >
              <select
                v-model="filter.a.type"
                class="form-select mt-1"
                
                id="type"
              >
              <option value="" disabled selected>Trạng thái</option>
                <option :value="getConfig('constants.typeOfUser.all')">
                  Tất cả
                </option>
                <option :value="getConfig('constants.typeOfUser.active')">
                  đang hoạt động
                </option>
                <option :value="getConfig('constants.typeOfUser.block')">
                  khóa tài khoản
                </option>
              </select>
            </div>
          </v-col>
          <v-col cols="4">
            <div >
              <select
                v-model="filter.a.faculty"
                class="form-select mt-1"
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
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-btn @click.prevent="search" width="100%" class=""> Search </v-btn>
      </v-col>
    </v-row>
    </div>

    <v-row>
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
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="3">
        <GroupCard />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="3">
        <GroupCard />
      </v-col>
    </v-row>
    <div class="text-center">
              <v-pagination
                v-model="model"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
  </div>
</template>

<style scoped>
.cus-header{
    width: 80%;
    margin: 20px auto;
    background-color: #6a7ea7;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
}
.input-cus {
  padding: 10px;
}
.text-center{
    padding-top:20px;
}
</style>
