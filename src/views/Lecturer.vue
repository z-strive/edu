<template>
    <div class="form">
        <div class="date">
            <span class="uptime type">注册时间</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始时间"
                end-placeholder="结束时间" size="default" />
        </div>
        <div class="search">
            <span class="type">手动搜索</span>
            <div class="sear">
                <el-input v-model="input2" placeholder="请输入讲师ID、昵称、手机号" />
            </div>
        </div>
        <div class="btn">
            <el-button type="primary">搜索</el-button>
            <el-button type="info" plain>重置</el-button>
        </div>
    </div>
    <div class="table">
        <div class="top">
            <h3>讲师列表</h3>
            <div class="add-course" @click="()=>$router.push('/addLecturer')">
                <span class="iconfont icon-wenben"></span>
                <p>添加讲师</p>
            </div>
        </div>
        <div class="tab">
            <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                @selection-change="handleSelectionChange" table-layout="fixed">
                <el-table-column type="selection" align="center" />
                <el-table-column property="name" label="讲师名称" align="center" />
                <el-table-column property="name" label="讲师简介" align="center"/>
                <el-table-column property="name" label="添加时间" align="center"/>
                <el-table-column property="name" label="操作" align="center">
                    <template #default="scope">
                        <div class="tab-btn">
                            <div class="bianji" >
                                <span @click="$router.push('/lookOrder')">编辑</span>
                            </div>
                            <span>
                                删除
                            </span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="bottom">
                <el-checkbox v-model="checked1" label="反选" size="large" @change="toggleSelection(tableData)" />
                <div>
                    <el-pagination background layout="prev, pager,next,jumper" :total="1000" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {queryUsersByRole} from '../api/index'
queryUsersByRole({
    role:'superAdmin'
}).then((res)=>console.log(res))
const switcha = ref(false)
// 多选
const checked1 = ref(false)
const value1 = ref('')//时间
// 多选
const value = ref('')//上架
const input2 = ref('') //搜索框
const options = [
    {
        value: '上架',
        label: '上架',
    },
    {
        value: '下架',
        label: '下架',
    }]
const man = [
    {
        value: '张三',
        label: '张三',
    },
    {
        value: '李四',
        label: '李四',
    }
]

// 表格

const multipleTableRef = ref()
const multipleSelection = ref([])
const toggleSelection = (rows) => {
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value.clearSelection()
    }
}
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}

const tableData = [
    {
        img: '/src/image/avatar.jpg',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    }]


</script>

<style scoped lang="less">
.form {
    width: 98%;
    margin: auto;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 20px;
    align-content: space-around;

    .type {
        font-size: 12px;
        margin-right: 10px;
    }

    >div {
        margin: 15px 25px;
        display: flex;
        align-items: center;

        .sear {
            display: flex;
            align-items: center;
        }
    }
}

.table {
    width: 98%;
    margin: 24px auto;
    background-color: #fff;
    box-sizing: border-box;
    padding: 45px;

    .top {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin-bottom: 10px;
        h3{
            font-weight: normal;
        }
        div {
            color: #2BC17B;
            display: flex;
            align-items: center;
            cursor: pointer;

            span {
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }

    .tab-btn {
        display: flex;
        justify-content: center;
        .bianji {
            color: #2BC17B;
        }

        >span {
            color: #FB5451;
            margin-left: 17px;
        }

        span {
            cursor: pointer;
        }
    }
}
.bottom{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
</style>