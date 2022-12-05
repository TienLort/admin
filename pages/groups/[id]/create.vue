<template>
  <div class="wrap">
    <div>
      <div class="tabs-container">
        <div>Phần 1/3</div>
      </div>
      <div class="container emp-profile tab1">
        <div class="profile-tab">
          <h3>Thông tin đăng ký tạo mới group</h3>
          <h4>1. Thông tin cơ bản</h4>
          <div class="row" style="padding: 5px 10px 20px 10px">
            <div class="col-md-12">
              <div class="row">
            <div class="col-md-6">
              <div class="row" style="justify-content:center;">
                <div class="col-md-12">
                  <label>Sinh viên đăng ký: </label>
                </div>
                <div class="col-md-9">
                  <input
                    class="border-bottom "
                    type="text"
                    disabled
                    v-model="data.user_name"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row" style="justify-content:center;">
                <div class="col-md-12">
                  <label>Khoa đang theo học:</label>
                </div>
                <div class="col-md-9">
                  <input
                    class="border-bottom "
                    type="text"
                    disabled
                    v-model="data.faculty_id"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="row" style="justify-content:center;">
                <div class="col-md-12">
                  <label>Môn học đăng ký:</label>
                </div>
                <div class="col-md-9">
                  <input
                    class="border-bottom "
                    type="text"
                    disabled
                    v-model="data.subject_id"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row" style="justify-content:center;">
                <div class="col-md-12">
                  <label>Phân loại nhóm học:</label>
                </div>
                <div class="col-md-9">
                  <input
                    class="border-bottom "
                    type="text"
                    disabled
                    v-model="data.self_study"
                  />
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cus-tab">
      <div class="tabs-container">
        <div>Phần 2/3</div>
      </div>
      <div class="container emp-profile">
        <div class="profile-tab">
          <h4>2. Thông tin nhóm học</h4>
          <div class="row" style="padding: 5px 10px 20px 10px">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <label>Mục đích tạo nhóm học:</label>
                </div>
                <div class="col-md-12">
                  <input
                    class="border-bottom "
                    type="text"
                    v-model="data.difficult"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label
                    >Thông tin cụ thể về những gì mà bạn muốn học, mục tiêu sau
                    khi kết thúc khóa học?</label
                  >
                </div>
                <div class="col-md-12">
                  <textarea
                    class="border-bottom"
                    disabledd
                    v-model="data.target"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label>Thông tin mô tả địa điểm học:</label>
                </div>
                <div class="col-md-12">
                  <textarea
                    class="border-bottom"
                    disabledd
                    v-model="data.note"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label>Thông tin mô tả thời gian học:</label>
                </div>
                <div class="col-md-12">
                  <textarea
                    class="border-bottom"
                    disabledd
                    v-model="data.time"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cus-tab">
      <div class="tabs-container">
        <div>Phần 3/3</div>
      </div>
      <div class="container emp-profile">
        <div class="profile-tab">
          <h4>3. Câu hỏi duyệt thành viên :</h4>
          <div class="row" style="padding: 5px 10px 20px 10px">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <label>Câu 1:</label>
                </div>
                <div class="col-md-12">
                  <input
                    class="border-bottom "
                    type="text"
                    placeholder="Sinh viên"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label>Câu 2:</label>
                </div>
                <div class="col-md-12">
                  <input
                    class="border-bottom "
                    type="text"
                    placeholder="Sinh viên"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="control-btn">
          <v-btn variant="flat" color="error">Xoá </v-btn>
          <v-btn variant="flat" color="success">Duyệt</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const route = $route();
const route = useRoute();

const data = ref({
  user_name: "",
  faculty_id: "",
  subject_id: "",
  self_study: "",
  difficult: "",
  target: "",
  note: "",
  time: "",
});

const { url: url1 } = useUrl({
  path: `groups/${route.params.id}/create`,
  queryParams: {
    // isAccept: "true",
  },
});

const {
  data: dataGetGroupsCreate,
  get: getGroupsCreate,
  onFetchResponse: getGroupsCreateResponse,
} = useFetchApi({
  requireAuth: false,
  disabledHandleErrorUnauthorized: false,
})(url1, { immediate: false });
getGroupsCreate().json().execute();
getGroupsCreateResponse(() => {
  data.value = dataGetGroupsCreate.value.data.data;
  console.log(data.value);
});
</script>

<style scoped>
.emp-profile {
  border-radius: 0px 0.5rem 0.5rem 0.5rem;
  background: #fff;
  width: 80%;
  border: 1px solid #ddd;
  border-top: 10px solid #1261a6;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
.emp-profile h3 {
  text-align: center;
}
.profile-tab h4 {
  margin: 0;
}
input {
  /* padding: 10px; */
  width: 100%;
  outline: none;
}
label {
  font-size: 14px;
  color: rgba(48, 48, 48, 0.886);
  padding-left: 2px;
  padding-bottom: 3px;
  margin-top: 15px;
}
textarea {
  width: 100%;
}
.control-btn {
  padding: 20px 0;
  display: flex;
  justify-content: right;
}
.v-btn {
  padding: 7px 20px;
  margin-right: 10px;
  min-width: 70px;
}
.tabs-container {
  width: 80%;
  margin: auto;
  /* margin-left:3px; */
}
.tabs-container div {
  border-radius: 0.5rem 0.5rem 0px 0px;

  background-color: #1261a6;
  width: 10%;
  text-align: center;
  padding: 5px 10px;
  color: #fff;
}
.cus-tab{
  margin-top:20px;
}
.tab1 label{
  padding-left:10%;
}
</style>
