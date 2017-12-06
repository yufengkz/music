<template>
	<div class="recommend">
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<!--Swiper-->
				<div class="slider-wapper">
					<swipe class="my-swipe" ref="mySwipe2" :auto="3000" :continuous="true" :show-indicators="true"
					       @change="changeSwipe">
						<swipe-item :key="item.id" v-for="item in recommends">
							<a :href="item.linkUrl">
								<img class="needsclick" :src="item.picUrl" alt="">
							</a>
						</swipe-item>
					</swipe>
				</div>

				<!--热门歌单-->
				<div class="recommend-list">
					<h1 class="list-title">热门歌单推荐</h1>

					<ul>
						<li v-for="item in discList" class="item">
							<div class="icon">
								<img width="60" height="60" v-lazy="item.imgurl">
							</div>
							<div class="text">
								<h2 class="name" v-html="item.creator.name"></h2>
								<p class="desc">{{item.dissname}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="loading-container" v-show="!discList.length">
				<loading />
			</div>

		</scroll>
	</div>
</template>
<script>
	import Loading from 'base/loading/loading'
	import Scroll from 'base/scroll/scroll'
	import {getRecommend, getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config'
	import {Swipe, SwipeItem} from 'base/slider'

	export default {
		data() {
			return {
				recommends: [],
				discList: []
			}
		},
		created() {
			this._getRecommend()

			//延时看loading
			//setTimeout( () => {
			this._getDiscList()
			//}, 1000)
		},
		methods: {
			//banner
			_getRecommend() {
				getRecommend().then((res) => {
					if (res.code === ERR_OK) {
						this.recommends = res.data.slider
					}
				})
			},
			//热门歌单
			_getDiscList() {
				getDiscList().then((res) => {
					if (res.code === ERR_OK) {
						this.discList = res.data.list
						console.log(res.data.list)
					}
				})
			},
			goto(index) {
				this.$refs.mySwipe2.goto(index);
			},
			changeSwipe(newIndex, oldIndex) {
				//console.log(`swipe from ${oldIndex} to ${newIndex}`);
			}
		},
		components: {
			swipe: Swipe,
			swipeItem: SwipeItem,
			Scroll,
			Loading
		}
	}
</script>
<style scoped lang="less">
	.recommend {
		position: fixed;
		width: 100%;
		top: 88px;
		bottom: 0;
	}

	.recommend-content {
		height: 100%;
		overflow: hidden;
	}

	.my-swipe {
		height: 200px;
		color: #fff;
		font-size: 30px;
		text-align: center;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.recommend-list {

		.list-title {
			height: 65px;
			line-height: 65px;
			text-align: center;
			font-size: 14px;
			color: #f90f59;
		}

		ul {
			.item {
				display: flex;
				box-sizing: border-box;
				align-items: center;
				padding: 0 20px 20px 20px;

				.icon {
					flex: 0 0 60px;
					width: 60px;
					padding-right: 20px;
				}
				.text {
					display: flex;
					flex-direction: column;
					justify-content: center;
					flex: 1;
					line-height: 20px;
					overflow: hidden;
					font-size: 14px;

					.name {
						margin-bottom: 10px;
						color: #fff;
					}
					.desc {
						color: rgba(255, 255, 255, 0.3);
					}
				}

			}
		}
	}

	.loading-container{
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
