<template>
    <div class="form">
        <div class="date">
            <span class="uptime type">上传时间</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始时间"
                end-placeholder="结束时间" size="default" />
        </div>
        <div class="state">
            <span class="type">上架状态</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="state">
            <span class="type">上传人</span>
            <el-select v-model="val" placeholder="请选择">
                <el-option v-for="item in man" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="search">
            <span class="type">手动搜索</span>
            <div class="sear">
                <el-input v-model="input2" placeholder="请输入课程标题或者关键词" />
            </div>
        </div>
        <div class="btn">
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button type="info" plain>重置</el-button>
        </div>
    </div>
    <div class="table">
        <div class="top">
            <h3>课程列表</h3>
            <div class="add-course" @click="() => $router.push('/addCourse')">
                <span class="iconfont icon-wenben"></span>
                <p>添加课程</p>
            </div>
        </div>
        <div class="tab">
            <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange"
                :table-layout="tableLayout">
                <el-table-column type="selection" align="center" />
                <el-table-column property="code" label="编号" align="center" />
                <el-table-column property="name" label="名称" align="center" />
                <el-table-column label="封面" align="center">
                    <template #default="scope">
                        <div class="tab-img">
                            <img :src="scope.row.cover" alt="">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column property="status" label="状态" align="center" />
                <el-table-column property="price" label="价格" align="center" />
                <el-table-column property="counts" label="销量" align="center" />
                <el-table-column property="updateUserName" label="上传人" align="center" />
                <el-table-column property="updateTime" label="上传时间" align="center" />
                <el-table-column property="operations" label="操作" align="center">
                    <template #default="scope">
                        <div class="tab-btn">
                            <div class="bianji">
                                <span @click="edit">编辑</span>
                                <span>|</span>
                                <span @click="statusOut">下架</span>
                            </div>
                            <span @click="del">
                                删除
                            </span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="bottom">
                <div @click="download()">
                    导出
                </div>
                <el-checkbox v-model="checked1" label="反选" size="large" @change="toggleSelection(tableData)" />
                <div>
                    <el-pagination :page-size="pageSize" v-model:current-page="page" background
                        layout="prev, pager,next,jumper" :total="100" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { queryCourseByCondition, setCourseStatusOut, queryUserByRole, courseCover, setCourseStatusDelete } from '../api/index'
import { exportElcel } from '../ulits/elseConfig'
import router from '../router';
// queryUserByRole({
//     role:'admin'
// })
// queryCourseByCondition({
//     pageSize:1,
//     pageNumber:10
// })
const data = [
    ['第一列', '第二列', '第三列'],
    ['aa', 'bb', 'cc'],
    [1, 2, 3]
]
const download = () => { exportElcel('导出的表格', data) }
// 多选
const checked1 = ref(false)
const value1 = ref('')//时间
// 多选
const page = ref(1)
const pageSize = ref(6)
const value = ref('')//上架
const val = ref('') //上传人
const input2 = ref('') //搜索框
const tableLayout = ref('auto')
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
    console.log(multipleSelection.value)
}

let tableData = ref()

watch(page, (o, n) => {
    search()
})
// 搜索
const search = () => {
    queryCourseByCondition({
        pageNumber: page.value,
        pageSize: pageSize.value,
        keywords: input2.value
    }).then(res => {
        console.log(res.data)
        tableData.value = res.data.courses
    }
    )
}

search()
// 下架
const statusOut = () => {
    setCourseStatusOut({
        courses: multipleSelection.value.map(i => i.code)
    }).then(res => {
        console.log(res)
        search()
    })
}
// 删除
const del = () => {
    console.log(multipleSelection.value.map(i => i.code))
    setCourseStatusDelete({
        courses: multipleSelection.value.map(i => i.code)
    }).then(res => {
        console.log(res)
        search()
    })
}
// 编辑
const edit = () => {
    router.push({
        path:'/addCourse',
        query:multipleSelection.value[0]
    })
}
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

        h3 {
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

    .tab-img {
        margin: auto;
    }

    .tab-img,
    img {
        width: 160px;
        height: 54px;
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

.bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}</style>