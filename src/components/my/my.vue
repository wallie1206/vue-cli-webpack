<template>
	<div class="user-center">
		<section class="user-account">
			<div class="my">
				<img :src="user.avatar" class="avatar">
				<span class="name">{{user.name}}</span>
				<span class="location">{{user.location}}</span>
			</div>
			<ul>
				<li><img src="http://cdn.optaim.com/img/landing/bajiaoke/me_collection@2x.png"><span>收藏</span></li>
				<li><img src="http://cdn.optaim.com/img/landing/bajiaoke/me_comment@2x.png"><span>评论</span></li>
				<li><img src="http://cdn.optaim.com/img/landing/bajiaoke/me_coin@2x.png"><span>积分</span></li>
			</ul>
		</section>
		<section class="user-menus">
			<ul>
				<li>
					<span class="message">消息中心</span>
					<img src="http://cdn.optaim.com/img/landing/bajiaoke/in@2x.png" class="arrow">
				</li>
				<li>
					<span class="read">阅读爱好</span>
					<img src="http://cdn.optaim.com/img/landing/bajiaoke/in@2x.png" class="arrow">
				</li>
				<li>
					<span class="help">帮助</span>
					<img src="http://cdn.optaim.com/img/landing/bajiaoke/in@2x.png" class="arrow">
				</li>
				<li>
					<span class="setting">设置</span>
					<img src="http://cdn.optaim.com/img/landing/bajiaoke/in@2x.png" class="arrow">
				</li>
			</ul>
		</section>
	</div>	
</template>

<script>
  export default {
    props: {
      user: {
        type: Object
      }
    }
  };
</script>

<style>
.user-center {
	font-size:14px;
}
.user-account { 
	width:100%;
	height:288px; 
	background-image:url('http://cdn.optaim.com/img/landing/bajiaoke/me_bg@2x.png');
	background-position: center bottom; 
	background-size: cover;
}
.user-account .my {
	padding-top: 32px;
	text-align: center;
}
.user-account .my span {
	display: block; 
}
.user-account .my span.name{
	padding:5px 0;
	font-size: 18px; 
}
.user-account .avatar {
	width:90px;
	height:90px;
	border-radius:100%;
}
.user-account ul{
	display: flex;
	margin: 18px 10px 0; 
}
.user-account ul li {
	flex: 1;
	text-align: center;
}
.user-account ul li img{
	width: 22px;
	height:22px;
}
.user-account ul li span{
	display: block;
}

.user-menus {
	position:fixed;
	top:295px;
	width:100%;
}

.user-menus li {
	border-bottom:#d9d9d9 0.5px solid;
	height:60px;
	padding:0 15px;
	position:relative;
}
.user-menus .arrow {
	position: absolute;
	right:15px;
	top:24px;
	width:7px;
	height:13px;
}
.user-menus span {
	display: block;
	line-height: 60px;
	background-size: 21px 21px;
	background-repeat: no-repeat;
	background-position: left center;
	padding-left: 30px;
}
.user-menus span.message {
	background-image: url('http://cdn.optaim.com/img/landing/bajiaoke/me_messages@2x.png');
}
.user-menus span.read {
	background-image: url('http://cdn.optaim.com/img/landing/bajiaoke/me_read@2x.png');
}
.user-menus span.help {
	background-image: url('http://cdn.optaim.com/img/landing/bajiaoke/me_help@2x.png');
}
.user-menus span.setting {
	background-image: url('http://cdn.optaim.com/img/landing/bajiaoke/me_set@2x.png');
}
</style>