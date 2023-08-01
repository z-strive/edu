<template>
    <div class="wrap">
        <p class="header">请输入具体活动信息</p>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="优惠券" class="name">
                <el-input v-model="ruleForm.name" placeholder="请输入优惠券名称" />
            </el-form-item>
            <el-form-item label="优惠券类型" class="textarea">
                <el-select v-model="value" class="m-2" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="优惠券数量" class="textarea">
                <el-input v-model="input" placeholder="请输入" :formatter="changenumber" />
            </el-form-item>
            <el-form-item label="优惠券面额" class="textarea">
                <el-input v-model="price" placeholder="请输入" :formatter="changenumber" />
            </el-form-item>
            <el-form-item label="优惠券门槛" class="textarea">
                    <el-radio-group v-model="radio2" class="w-35">
                        <el-radio label="1" size="large">无门槛</el-radio>
                        <el-radio label="2" size="large">满</el-radio>
                    </el-radio-group>
                    <div class="inp">
                        <el-input v-model="price2" placeholder="请输入" :formatter="changenumber" />
                        <span>元</span>
                    </div>
                    
            </el-form-item>
            <el-form-item label="使用范围" class="textarea">
                <el-radio-group v-model="radio1">
                    <el-radio label="1" size="large">所有课程</el-radio>
                    <el-radio label="2" size="large">指定课程</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="有效日期" class="textarea">
                <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始时间"
                    end-placeholder="结束时间" size="default" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    确认
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">取消</el-button>
                
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
    name: '',
    delivery: false,
    resource: '',
    desc: '',
    textarea: '',
    textarea2: '',
    catalog: ''
})
const rules = reactive({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})
// 类型
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
// 上传图片
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const value = ref()
const input = ref()
const price = ref()
const value1 = ref()
const radio1 = ref('1')
const radio2 = ref('2')
const price2 = ref()
const changenumber = (val) => {
    return val = val.replace(/[^\d|.]/g, '')
}
const submitForm=()=>{
    router.push('/design')
}
const resetForm=()=>{

}
</script>

<style scoped lang="less">
.wrap {
    background-color: #fff;
    height: 86vh;
    overflow: hidden;
    padding-bottom: 50px;
    box-sizing: border-box;
    width: 98%;
    margin: auto;
}

.name,
.price {
    width: 438px;
    display: flex;
}

.price {
    position: relative;

    .label {
        margin-left: 10px;
    }
}

.textarea {
    width: 500px;
}
.inp{
    width: 200px;
    margin-left: 10px;
    display: flex;
    span{
        margin-left: 20px;
    }
}
// 上传图片的样式
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.header {
    margin: 50px 0 28px 80px;
    font-size: 12px;
    color: #ccc;
}
</style>