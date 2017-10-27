<template>
    <div class="header">
        <h1>Music App</h1>
        <div class="userinfo">
            <i class="icon-mine"></i>
        </div>
    </div>
</template>
<script>
	export default {

	}
</script>
<style scoped lang="less">
    .header{
        position: relative;
        top: 0px;
        left: 0px;
        text-align: center;

        h1{
            font-size: 18px;
            line-height: 40px;
            color: rgb(249, 15, 89);
            font-weight: bold;
        }
        .userinfo{
            position: absolute;
            top: 0px;
            right: 20px;
            line-height: 40px;
            font-size: 18px;
            color: rgb(249, 15, 89);
        }
    }
</style>