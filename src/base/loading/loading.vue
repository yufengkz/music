<template>
	<div class=loading>
		<img  width="24" height="24" src="./loading.gif" alt="">
		<p class="desc">{{title}}</p>
	</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: '正在载入...'
			}
		}
	}
</script>
<style scoped lang="less">
	.loading{
		width: 100%;
		text-align: center;

		.desc{
			line-height: 30px;
			font-size: 20px;
			color: #f90f59;
		}
	}
</style>
