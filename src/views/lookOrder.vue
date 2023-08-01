<template>
    <div class="wrap">
        <div class="statu">
            <p>订单状态:<span>已完成</span></p>
        </div>
        <div class="con">
            <div class="message">
                <p>基础信息</p>
                <ul class="list">
                    <li v-for="item in 5">
                        <p>订单编辑</p>
                        <div>67890345</div>
                    </li>
                </ul>
            </div>
            <div class="user">
                <p>基础信息</p>
                <ul class="list">
                    <li v-for="item in 4">
                        <p>用户信息</p>
                        <div>67890345</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped lang="less">
.wrap {
    background-color: #fff;
    width: 98%;
    margin: auto;
    overflow: hidden;
    font-size: 12px;
    box-sizing: border-box;
    padding-bottom: 326px;
}

.statu {
    width: 90%;
    height: 60px;
    background-color: #F0F6F6;
    text-align: center;
    line-height: 60px;
    margin: 50px auto;
    color: #2BC17B;
    font-size: 12px;
}
.con{
    width: 90%;
    margin:auto
}
.user{
    margin-top: 10px;
}
.list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    border: 1px solid #DCEBE4;
    border-radius: 4px;
    li {
        box-sizing: border-box;
        display: flex;
        height: 60px;
        width: 50%;
        border: 1px solid #DCEBE4;
        border-right: none;
        p {
            width: 150px;
            text-align: center;
            line-height: 60px;
            background-color: #F0F6F6;
            height: 60px;
        }

        div {
            width: 382px;
            text-align: left;
            text-indent: 32px;
            line-height: 60px;
            height: 60px;
        }
    }
    li:last-child{
        border-bottom: none;
        border-right: none;
    }
}</style>