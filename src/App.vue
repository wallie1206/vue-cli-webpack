<template>
  <div id="app" class="indexContainer">
    <nav class="mainNav">
      <ul>
        <li><a v-link="{path:'/home'}"><i class="home"></i><span>首 页</span></a></li>
        <li><a v-link="{path:'/video'}"><i class="video"></i><span>视 频</span></a></li>
        <li><a v-link="{path:'/my'}"><i class="my"></i><span>我 的</span></a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user:{}
      };
    },
    created() {
      this.$http.get('/api/user').then((response) => {
        response = response.body;
        if (response.errno === 0) {
          this.user.data = response.data;
          console.log(this.user)
        }
      });
    }
  };
</script>
