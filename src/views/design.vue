<template>
    <div class="table">
        <div class="top">
            <h3>轮播图列表</h3>
            <div class="add-course" @click="() => $router.push('/addDiscount')">
                <span class="iconfont icon-wenben"></span>
                <p>添加时段</p>
            </div>
        </div>
        <div class="tab">
            <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column property="name" label="场次编号" width="205" />
                <el-table-column property="name" label="场次名称" width="184" />
                <el-table-column property="name" label="每日开始时间" width="196" />
                <el-table-column property="name" label="每日结束时间" width="196" />
                <el-table-column property="name" label="课程数量" width="162" />
                <el-table-column property="name" label="操作" width="156">
                    <template #default="scope">
                        <div class="tab-btn">
                            <div class="bianji">
                                <span>编辑</span>
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
import { ref, watch } from 'vue'
// 多选
const checked1 = ref(false)
const value1 = ref('')//时间
// 多选
const value = ref('')//上架
const val = ref('') //上传人
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
    width: 90%;
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
    width: 90%;
    margin: 24px auto;
    background-color: #fff;
    box-sizing: border-box;
    padding: 45px;

    .top {
        display: flex;
        justify-content: space-between;
        font-size: 16px;

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
        img {
            width: 162px;
            height: 54px;
        }

    }

    .tab-btn {
        display: flex;

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
}
</style>