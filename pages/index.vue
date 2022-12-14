<template>
  <div class="wrap">
    <div class="container1">
      <div class="content">
        <div class="cards">
          <div class="card">
            <div class="box">
              <h2>3</h2>
              <h3>Sinh Viên</h3>
            </div>
            <div class="icon-case">
              <v-icon style="font-size: 70px; color: #f05362"
                >mdi-account-school-outline</v-icon
              >
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h2>53</h2>
              <h3>Mentor</h3>
            </div>
            <div class="icon-case">
              <v-icon style="font-size: 70px; color: #f05362"
                >mdi-human-male-board-poll</v-icon
              >
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h2>5</h2>
              <h3>Câu hỏi</h3>
            </div>
            <div class="icon-case">
              <v-icon style="font-size: 70px; color: #f05362"
                >mdi-account-question-outline</v-icon
              >
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h2>5</h2>
              <h3>Nhóm học</h3>
            </div>
            <div class="icon-case">
              <v-icon style="font-size: 70px; color: #f05362"
                >mdi-account-group-outline</v-icon
              >
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h2>13</h2>
              <h3>Thông báo</h3>
            </div>
            <div class="icon-case">
              <v-icon style="font-size: 70px; color: #f05362"
                >mdi-bell-ring-outline</v-icon
              >
            </div>
          </div>
        </div>
        <div class="content-2">
          <div class="recent-payments">
            <div class="title">
              <h2>Recent Payments</h2>
              <a href="#" class="btn">View All</a>
            </div>
            <table>
              <tr>
                <th>Name</th>
                <th>School</th>
                <th>Amount</th>
                <th>Option</th>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>St. James College</td>
                <td>$120</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>St. James College</td>
                <td>$120</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>St. James College</td>
                <td>$120</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>St. James College</td>
                <td>$120</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>St. James College</td>
                <td>$120</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>St. James College</td>
                <td>$120</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
            </table>
          </div>
          <div class="new-students">
            <div class="title">
              <h2>Top Mentor</h2>
              <a href="#" class="btn">View All</a>
            </div>
            <table>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>option</th>
              </tr>
              <tr>
                <td><img src="/images/user.png" alt="" /></td>
                <td>John Steve Doe</td>
                <td><img src="/images/info.png" alt="" /></td>
              </tr>
              <tr>
                <td><img src="/images/user.png" alt="" /></td>
                <td>John Steve Doe</td>
                <td><img src="/images/info.png" alt="" /></td>
              </tr>
              <tr>
                <td><img src="/images/user.png" alt="" /></td>
                <td>John Steve Doe</td>
                <td><img src="/images/info.png" alt="" /></td>
              </tr>
              <tr>
                <td><img src="/images/user.png" alt="" /></td>
                <td>John Steve Doe</td>
                <td><img src="/images/info.png" alt="" /></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="content-3">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"

              >
              <!-- :src="item.src"
                cover -->
          <img :src="item.src"/>
          </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: "authenticated",
});
const items = ref([
  {
    src: "/images/m1.jpg",
  },
  {
    src: "/images/users/user.jpg",
  },
  {
    src: "/images/users/user2.jpg",
  },
  {
    src: "/images/users/3.jpg",
  },
]);
</script>

<style scoped>
a {
  text-decoration: none;
}

li {
  list-style: none;
}

h1,
h2 {
  color: #444;
}
h2 {
  text-align: center;
}
h3 {
  color: #999;
}
.wrap {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.btn {
  background: #f05462;
  color: white;
  padding: 5px 10px;
  text-align: center;
}

.btn:hover {
  color: #f05462;
  background: white;
  padding: 3px 8px;
  border: 2px solid #f05462;
}
.img-cus {
  width: 65px;
  height: 50px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 10px;
  border-bottom: 2px solid #999;
}

table {
  padding: 10px;
}

th,
td {
  text-align: left;
  padding: 8px;
}
.container1 {
  width: 100%;
  /* background: #f1f1f1; */
}

.container1 .content {
  position: relative;
  /* background: #f1f1f1; */
}

.container1 .content .cards {
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.container1 .content .cards .card {
  width: 250px;
  height: 170px;
  background: white;
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.container1 .content .content-2 {
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}

.container1 .content .content-2 .recent-payments {
  min-height: 50vh;
  flex: 5;
  background: white;
  margin: 0 25px 25px 25px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
}

.container1 .content .content-2 .new-students {
  flex: 2;
  background: white;
  min-height: 50vh;
  margin: 0 25px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
}

.container1 .content .content-2 .new-students table td:nth-child(1) img {
  height: 40px;
  width: 40px;
}

@media screen and (max-width: 536px) {
  .brand-name h1 {
    font-size: 16px;
  }
  .container1 .content .cards {
    justify-content: center;
  }
  .side-menu li img {
    width: 30px;
    height: 30px;
  }
  .container1 .content .content-2 .recent-payments table th:nth-child(2),
  .container1 .content .content-2 .recent-payments table td:nth-child(2) {
    display: none;
  }
}
.v-carousel-item img{
  object-fit: cover;
  width: 330px !important;
}
.v-carousel-item{
  margin: auto;
}
</style>
