<template>
  <div id="Container">

    <header id="indexHeader">
      <div class="top_bar">八角客</div>
      <div class="top_menu_bar">
        <div class="top_menu_more">
          <div class="list_shadow"></div>
          <a href="/channels/" class="more_btn"></a>
        </div>
        <div id="top_menu" class="top_menu_list">
          <a href="javascript:;" v-for="channel in channels" class="btn" data-id="{{channel.ID}}">{{channel.title}}</a>
        </div>
      </div>
    </header>

    <content id="pageletListContent" class="feed-list-container">
      <div class="list_content">
        <section class="middle_mode has_action" v-for="item in news">
          <a href="{{item.linkUrl}}" target="_blank" class="article_link">

            <div v-if="item.type==3">
              <div class="item_detail">
                <h3 class="dotdot line2">{{item.title}}</h3>
                <div class="list_img_holder_large ">
                  <img :src="item.logoImageUrl">
                </div>
                <div class="item_info">
                  <span class="src space">{{item.source}}</span>
                  <span class="cmt space">浏览 {{item.scanCount}}</span>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="item_detail {{item.type==5?'desc':''}}">
                <h3 class="dotdot line2 {{item.type==5?'image-margin-right':''}}">{{item.title}}</h3>
                <div v-if="item.type==4">
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder"><img :src="item.logoImageUrl.split(';')[0]"></li>
                      <li class="list_img_holder"><img :src="item.logoImageUrl.split(';')[1]"></li>
                      <li class="list_img_holder"><img :src="item.logoImageUrl.split(';')[2]"></li>
                    </ul>
                  </div>
                </div>
                <div v-else>
                  <div class="list_img_holder_large">
                    <img :src="item.logoImageUrl">
                  </div>
                </div>
                <div class="item_info">
                  <span class="src space">{{item.source}}</span>
                  <span class="cmt space">浏览 {{item.scanCount}}</span>
                </div>
              </div>
            </div>

          </a>
        </section>
      </div>
    </content>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        channels: [],
        news: []
      };
    },
    created() {
      this.$http.get('/api/channels').then((response) => {
        response = response.body;
        if (response.errno === 0) {
          this.channels = response.data;
        }
      });
      this.$http.get('/api/news').then((response) => {
        response = response.body;
        if (response.errno === 0) {
          this.news = response.data;
        }
      });
    },
    methods:{

    }
  };
</script>