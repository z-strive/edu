<template>
    <div class="wrap">

        <div class="data">
            <div class="data-item" v-for="item in data" :key="item.icon">
                <span :class="item.icon + ' iconfont'"></span>
                <div class="characters">
                    <p>{{ item.order }}</p>
                    <h3>{{ item.num }}</h3>
                    <p>{{ item.add }}</p>
                </div>
            </div>
        </div>
        <div class="chart">
            <el-row>
                <el-col :span="14">
                    <div class="chartLin" ref="chartLin">

                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="chartbar" ref="chartBar">

                    </div>
                </el-col>
            </el-row>


        </div>
        <div class="msg">
            <el-row>
                <el-col :span="14">
                    <div class="item">
                        <div class="top">
                            <p>活跃学员</p>
                            <div>
                                <span>日期:</span>
                                <input type="date">
                            </div>
                        </div>
                        <ul>
                            <li v-for="item in 6">
                                <img src="../image/avatar.jpg" alt="">
                                <div class="xinxi">
                                    <div class="message">
                                        <p>小仓鼠的老房子</p>
                                        <span>95%</span>
                                    </div>
                                    <div>
                                        <p class="p">学号<span>207HHM6</span></p>
                                        <el-progress :percentage="95" :show-text="false" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </el-col>
                <el-col :span="10">
                    <div class="item">
                        <div class="top">
                            <p>实时概况</p>
                            <div>
                                <span>日期:</span>
                                <input type="date">
                            </div>
                        </div>
                        <ul>
                            <li class="list" v-for="item in 4">
                                <div class="msg-item">
                                    <div class="left">
                                        <span></span>
                                    </div>
                                    <div class="right">
                                        <p>学员数</p>
                                        <span>84</span>
                                    </div>
                                </div>
                                <p>同昨天对比+1.2% <span>昨日78</span></p>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
const chartLin = ref()
const chartBar = ref()
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(chartLin.value);
    let myChart2 = echarts.init(chartBar.value);
    // 绘制图表
    myChart.setOption({
        title: {
            text: '时段分布'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        tooltip: {},
        xAxis: {
            data: ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00', "13:00", "15:00", '17:00', '19:00', "21:00", '23:00']
        },
        yAxis: {},
        series: [
            {
                type: 'line',
                data: [450, 300, 450, 239, 350, 300, 200, 150, 203, 24, 124, 534],
                smooth: true
            },
            {
                type: 'line',
                data: [123, 160, 200, 123, 350, 100, 500, 150, 234, 37, 344, 50],
                smooth: true
            },
        ]
    });
    myChart2.setOption({
        xAxis: {
            data: ['00:00', '03:00', '06:00', '09:00', '12:00', "15:00", '18:00', '21:00', "24:00"]
        },
        tooltip: {},
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: [450, 300, 450, 239, 350, 300, 200, 150, 203, 24, 124, 534]
            }
        ]
    })
})

// 定义data-item的数据
const data = ref([
    {
        icon: 'icon-qian',
        order: "今日订单收入",
        num: '￥6666.88',
        add: '+1.2%同昨天对比'
    },
    {
        icon: 'icon-wenben',
        order: "今日订单数量",
        num: '259',
        add: '+1.2%同昨天对比'
    }
    ,
    {
        icon: 'icon-yonghuguanli',
        order: "今日访客数量",
        num: '259',
        add: '+1.2%同昨天对比'
    }
    ,
    {
        icon: 'icon-baifenhao',
        order: "支付转化率",
        num: '10.00%',
        add: '+1.2%同昨天对比'
    }
])
const message = ref([
    {
        img: '/image/1.jpg',
        msg: '小仓鼠的房子',
        progress: '95%',
        xuhao: '207HHM46',

    },
    {
        img: '/image/1.jpg',
        msg: '小仓鼠的房子',
        progress: '95%',
        xuhao: '207HHM46',

    }, {
        img: '/image/1.jpg',
        msg: '小仓鼠的房子',
        progress: '95%',
        xuhao: '207HHM46',

    }, {
        img: '/image/1.jpg',
        msg: '小仓鼠的房子',
        progress: '95%',
        xuhao: '207HHM46',

    }
])
// 进度条
// const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped lang="less">
@import url(../ulits/icon.css);

.iconfont {

    font-size: 80px;
    color: #fff;
    opacity: .5;
    position: absolute;
    top: 50%;
    left: 30px;
    margin-top: -40px;
}

.wrap {
    margin-left: 20px;
}

.data {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .data-item {
        position: relative;
        box-sizing: border-box;
        width: 25%;
        height: 150px;
        margin-right: 20px;

        .characters {
            text-align: right;
            margin: 27px 25px 0 0;
            color: #fff;
            font-size: 16px;

            h3 {
                margin: 10px 0;
            }
        }
    }

    .data-item:nth-child(1) {
        background: linear-gradient(130.24deg, rgba(112, 232, 201, 1) 0%, rgba(57, 206, 199, 1) 100%);
    }

    .data-item:nth-child(2) {
        background: linear-gradient(130.24deg, rgba(208, 103, 203, 1) 0%, rgba(217, 102, 211, 1) 100%);
    }

    .data-item:nth-child(3) {
        background: linear-gradient(130.24deg, rgba(255, 174, 96, 1) 0%, rgba(251, 146, 79, 1) 100%);
    }

    .data-item:nth-child(4) {
        margin-right: none !important;
        background: linear-gradient(130.24deg, rgba(254, 136, 108, 1) 0%, rgba(253, 83, 88, 1) 100%);
    }
}

// .chart {
//     display: flex;
//     justify-content: space-around;
// }
// .el-col{
//     // box-sizing: border-box;
//     margin-right: 20px;
//     padding: 0;
//     background-color: #fff;
// }
.chart {
    box-sizing: border-box;
}

.chartLin {
    width: 80%;
    height: 350px;
}

.chartbar {
    width: 80%;
    height: 350px;
}

.el-progress {
    width: 120px;
    transform: rotate(180deg);
}


.top {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.item {
    background: #fff;
    width: 90%;
    box-sizing: border-box;
    padding: 20px 0;
}

ul {
    display: flex;
    flex-wrap: wrap;
    margin: 38px 20px;
    justify-content: space-between;
}

li {
    display: flex;
    width: 45%;
    margin: 10px 2.5px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }

    .xinxi {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        width: 100%;

        div {
            display: flex;
            font-size: 12px;
            justify-content: space-between;

            .p {
                color: #ccc;
            }
        }

        .message {
            margin-bottom: 10px;
        }

    }
}

.msg {
    overflow: hidden;
    height: 350px;
}
.list{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 50px;
    margin-top: 10px;
    p{
        font-size: 12px;
        margin-top: 10px;
    }
    .msg-item{
        display: flex;
        .left span{
            display: block;
            width: 55px;
            height: 55px;
            border-radius:50% ;
            background-color: red;
        }
        .right{
            display: flex;
            flex-direction: column;
            margin-left: 15px;
        }
    }
}

</style>