<script setup>
// const userprofile = ref([
//   {
//     title: "Name:",
//     desc: "",
//   },
//   {
//     title: "My Inbox",
//     desc: "Messages & Emails",
//   },
//   {
//     title: "My Tasks",
//     desc: "To-do and Daily Tasks",
//   },
// ]);
const {deleteToken} = useToken();
const {
  onFetchResponse,
  get,
} = useFetchApi({
  requireAuth: true,
  disableHandleErrorUnauthorized: false,
})(
  '/logout',
  {immediate: false},
);

onFetchResponse(() => {
  deleteToken();
  return navigateTo({name: 'login'});
});


const logout = () => {
  get().json().execute();
};
</script>

<template>
  <v-menu anchor="bottom end" origin="auto" min-width="300">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="pa-0 px-1 btn-header"
        elevation="0"
        color="transparent"
        plain
        :ripple="false"
      >
        <v-avatar size="35">
          <img src="/images/users/user2.jpg" width="35" alt="Name" />
        </v-avatar>
      </v-btn>
    </template>

    <!-- <v-list class="pa-6" elevation="10" rounded="lg">
      <v-list-item
        class="pa-3 mb-2"
        v-for="(item, i) in userprofile"
        :key="i"
        :value="item"
        :title="item.title"
        :subtitle="item.desc"
        rounded="lg"
      >
      </v-list-item>
      
    </v-list> -->
    <v-btn block color="secondary" variant="tonal" class="mt-4 py-4"  @click="logout"
        > <v-icon left  @click="logout"> mdi-logout </v-icon> Logout</v-btn
      >
  </v-menu>
</template>
<style scope>
.v-btn--icon{
  border-radius: 0 !important;
}
</style>

