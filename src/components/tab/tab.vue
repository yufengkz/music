<template>
    <div class="tab">
        <router-link class="tab-item" tag="div" to="/recommend">
            <span>推荐</span>
        </router-link>
        <router-link class="tab-item" tag="div" to="/singer">
            <span>歌手</span>
        </router-link>
        <router-link class="tab-item" tag="div" to="/rank">
            <span>排行</span>
        </router-link>
        <router-link class="tab-item" tag="div" to="/search">
            <span>搜索</span>
        </router-link>
    </div>
</template>
<script>
	export default {

	}
</script>
<style scoped lang="less">
    .tab{
        display: flex;
        height: 44px;
        line-height: 44px;
        font-size: 14px;

        .tab-item{
            flex: 1;
            text-align: center;
            
            span{
                padding-bottom: 5px;
            }
        }

        .router-link-active span{
            color: rgb(249, 15, 89);
            border-bottom: 2px solid rgb(249, 15, 89);
        }
    }
</style>