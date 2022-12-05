<template>
  <div class="full p-4">
    <div>
      <v-row v-for="data in allChat" :key="data.time" class="mb-4 pb-2">
        <v-col class="col-auto mt-2" cols="12" sm="1" md="1" lg="1">
          <div class="user-image">
            <img src="/images/user.png" alt="">
          </div>
        </v-col>
        <v-col class="qa" cols="12" sm="11" md="11" lg="11">
          <div>
            <p class="name">
              {{ data.name }} <span>{{ data.time }}</span>
            </p>
            <p class="mess">
              {{ data.message }}
            </p>
            <div class="reply">
              <v-row v-for="reply in data.replies" :key="reply.id">
                <v-col class="col-auto" cols="12" sm="1" md="1" lg="1">
                  <v-icon>mdi-arrow-right-bold</v-icon>
                </v-col>
                <v-col cols="12" sm="11" md="11" lg="11">
                  <p class="name">
                    {{ reply.name }} <span>{{ reply.time }}</span>
                  </p>
                  <p class="mess">
                    {{ reply.message }}
                  </p>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>      
    </div>
  </div>
</template>
      
<script setup>

definePageMeta({
  layout: 'default',
  middleware: 'authenticated',
});
definePageMeta({
  layout: false
});
const route = useRoute();
const username = ref();
const newMess = ref();
const replyMess = ref();
const showReplyMess = ref(1)
let allChat = ref([]);
const {
  database: databaseFirebase,
  ref: firebaseRef,
  push,
  set,
  onValue
} = useFirebase();

const {
  data: dataGetMe,
  get: getMe,
  onFetchResponse: getMeResponse,
  onFetchError: getMeError,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})(
  '/user',
  { immediate: false },
);
// Lấy thông tin cá nhân
getMe().json().execute();
getMeResponse(() => {
  username.value = dataGetMe.value.data.full_name;
})

const sendNewMess = () => {
  allChat.value = [];
  const time = (new Date()).getTime();
  set(firebaseRef(databaseFirebase, `groups/${route.params.id}/${time}`), {
    id: time,
    name: username.value,
    message: newMess.value,
    time: (new Date()).toLocaleString()
  });
  newMess.value = '';
};
const sendReplyMess = (id) => {
  allChat.value = [];
  const time = (new Date()).getTime();
  set(firebaseRef(databaseFirebase, `groups/${route.params.id}/${id}/replies/${time}`), {
    id: time,
    name: 'Như Hoàng',
    message: replyMess.value,
    time: (new Date()).toLocaleString()
  });
  replyMess.value = '';
  showReplyMess.value = 0;
}
const bb = () => {
  allChat.value = [];
  onValue(firebaseRef(databaseFirebase, `groups/${route.params.id}`), (data) => {
    allChat.value = [];
    data.forEach((d) => {
      allChat.value.push(d.val());
    });
    // data.value.sort((a,b) => {a.time - b.time});
    console.log(data.value)
  })
};
onMounted(() => {
  bb();
})
</script>
      
<style scoped>
* {
  color: black;
}

.full {
  background-color: #efefef;
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px !important;
}
.replyMess {
  padding: 0 0 0 40px;
}
.replyMess button{
  display: inline-block;
  width: auto;
}
.replyMess input {
  display: inline-block;
  width: 88%;
}
.qa>div>p {
  color: rgb(1, 1, 118);
}

.reply>div {
  padding-left: 40px;
  padding-top: 0px;
}

.reply>div>div:first-child {
  padding-top: 5px;
}

.reply>div>div {
  padding: 0px;
}

.qa .true {
  display: block;
}

.qa .false {
  display: none;
}

button {
  border: none;
  background-color: transparent;
}

.qa .arrow-reply:hover {
  color: rgb(17, 17, 190);
}

.qa .arrow-reply:hover svg {
  color: rgb(17, 17, 190);
}

.qa {
  background-color: white;
  padding-bottom: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 9px 9px 14px -13px rgba(110, 110, 110, 1);
  -moz-box-shadow: 9px 9px 14px -13px rgba(110, 110, 110, 1);
  box-shadow: 9px 9px 14px -13px rgba(110, 110, 110, 1);
}

.qa .name {
  font-weight: 600;
  padding: 10px;
  font-size: 15px;
  padding-bottom: 0;
}

.qa .name span,
.qa .arrow-reply {
  font-size: 14px;
  font-weight: 200;
  color: rgb(93, 93, 93);
  padding-left: 10px;
}

.qa .mess {
  padding: 10px;
  padding-top: 0;
}

p {
  margin-bottom: 0 !important;
}

.newMess {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 79%;
  padding: 20px;
  padding-left: 65px;
  background-color: #efefef;
  padding-top: 20px;
  border-top: 0.5px solid rgb(235, 235, 235);
}

.user-image {
  width: 35px;
  height: 35px;
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
}

.user-image img {
  width: 100%;
  border-radius: 60px;
}
</style>
      
    