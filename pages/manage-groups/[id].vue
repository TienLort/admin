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
  quantity: "",
  members: [
    {
      full_name: "",
      faculty: "",
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
</script>
<template>
  <div class="container">
    <BRow>
      <BCol class="pb-3">
        <h5>>> Đăng ký là thành viên của nhóm</h5>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="col-4">
        <div class="img">
          <img src="/images/background/blog-bg-2x.jpg" alt="" />
        </div>
      </BCol>
      <BCol class="group-infor">
        <h4 class="pt-3 pb-4">{{ group.subject }}</h4>
        <p><span>Khoa:</span> {{ group.faculty }}</p>
        <p class="title">
          <span> Tóm tắt thông tin: </span>
          {{ group.title }}
        </p>
        <span>Thông tin chi tiết</span>
        <p class="information">
          {{ group.information }}
        </p>
      </BCol>
    </BRow>
    <BRow class="mt-3">
      <BRow>
        <p><span>Thành viên hiện có:</span> {{ group.quantity }} thành viên</p>
        <div v-for="(member, index) in group.members" :key="member.id">
          <p class="mb-0">
            <NuxtLink :to="{ path: `/manage-user/${index+1}` }" class="full">
              {{ index + 1 }}. {{ member.full_name }} _ Khoa: {{ member.faculty }}
            </NuxtLink>
          </p>
        </div>
      </BRow>
    </BRow>
  </div>
</template>

<style scoped>
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
  color: rgb(0, 85, 119);
}
.group-infor span {
  color: rgb(0, 16, 192);
  display: inline-block;
  width: 160px;
}
.full{
  text-decoration: none;
}
</style>
