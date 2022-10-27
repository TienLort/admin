<template>
  <div>
    <div class="sl-item my-4 border-top pt-4">
      <div class="sl-left float-left me-3">
        <img
          src="/images/users/3.jpg"
          width="40"
          alt="user"
          class="rounded-circle"
        />
      </div>
      <div class="sl-right">
        <div>
          <div class="d-md-flex align-items-center">
            <h3 class="">Maria Smith</h3>
            <small class="sl-date text-muted ms-1">24/10/2022</small>
          </div>
          <h3>{{ post.title }}</h3>
          <p class="my-4 fs-3">
            {{ post.description }}
          </p>
        </div>
        <div class="text-nowrap mt-3 card">
          <v-row>
            <v-col cols="12" sm="12" md="4" lg="2">
              <v-dialog v-model="dialog1" persistent>
                <template v-slot:activator="{ props }">
                  <v-btn
                    tile
                    v-bind="props"
                    @click="dialog1 = true"
                    elevation="0"
                    color="secondary"
                    rounded="lg"
                  >
                    <v-icon left> mdi-pencil </v-icon>
                    Edit
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar color="primary">Edit Post</v-toolbar>

                  <div>
                    <v-text-field
                      label="Title"
                      background-color="light-blue"
                      prepend-icon="mdi-account"
                      v-model="post.title"
                    ></v-text-field>
                    <v-textarea
                      color="black"
                      label="Label"
                      prepend-icon="mdi-comment"
                      v-model="post.description"
                    ></v-textarea>
                    <div class="d-flex flex-wrap gap-2 flex-row-reverse"></div>
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" text @click="dialog1 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue-darken-1" text @click="dialog1 = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="2">
              <v-dialog v-model="dialog2" persistent>
                <template v-slot:activator="{ props }">
                  <v-btn
                    tile
                    v-bind="props"
                    @click="dialog2 = true"
                    elevation="0"
                    color="error"
                    rounded="lg"
                  >
                    <v-icon left> mdi-pencil </v-icon>
                    Delete
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar color="primary">Delete Post</v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">
                      Bạn có muốn xóa post này không ?
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" text @click="dialog2 = false">
                      Không
                    </v-btn>
                    <v-btn color="blue-darken-1" text @click="dialog2 = false">
                      Có
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  post: {
    type: Object,
  },
});
const dialog1 = ref(false);
const dialog2 = ref(false);
</script>
<style scoped>
.v-btn {
  display: inline-block;
  margin-right: 10px;
}
.v-card {
  min-width: 1000px;
}
</style>
