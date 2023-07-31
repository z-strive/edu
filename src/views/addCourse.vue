<template>
    <div class="wrap">
        <p class="header">请输入相关信息</p>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="课程名称" class="name">
                <el-input v-model="ruleForm.name" placeholder="请输入课程名称" />
            </el-form-item>
            <el-form-item label="封面图片" class="pic">
                <el-upload action="#" list-type="picture-card" :auto-upload="false">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <template #file="{ file }">
                        <div>
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <el-icon><zoom-in /></el-icon>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <el-icon>
                                        <Download />
                                    </el-icon>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <el-icon>
                                        <Delete />
                                    </el-icon>
                                </span>
                            </span>
                        </div>
                    </template>
                    <template #tip>
                        <div class="el-upload__tip">
                            只能上传jpg/png文件，且不超过500KB.
                        </div>
                    </template>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>
            </el-form-item>
            <el-form-item label="商品限制">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="上架转态" />
                    <el-radio label="下架状态" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="课程价格" class="price">
                <el-input-number v-model="ruleForm.price" :controls="false" placeholder="请输入金额" />
                <span class="label">元</span>
            </el-form-item>
            <el-form-item label="课程简介" class="textarea">
                <el-input v-model="ruleForm.textarea" :rows="4" type="textarea" placeholder="请输入内容" />
            </el-form-item>
            <el-form-item label="讲师介绍" class="textarea">
                <el-input v-model="ruleForm.textarea2" :rows="4" type="textarea" placeholder="请输入内容" />
            </el-form-item>
            <el-form-item label="课程目录" class="textarea">
                <el-input v-model="ruleForm.catalog" placeholder="请输入目录以“逗号”隔开" />
            </el-form-item>
            <!--<el-form-item label="Activity time" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker v-model="ruleForm.date1" type="date" label="Pick a date" placeholder="Pick a date"
                            style="width: 100%" />
                    </el-form-item>
                </el-col>
                <el-col class="text-center" :span="2">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="Pick a time"
                            style="width: 100%" />
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery" prop="delivery">
                <el-switch v-model="ruleForm.delivery" />
            </el-form-item>
            <el-form-item label="Activity type" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            
            <el-form-item label="Activity form" prop="desc">
                <el-input v-model="ruleForm.desc" type="textarea" />
            </el-form-item>-->
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Create
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item> 
        </el-form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
    name: '',
    delivery: false,
    resource: '',
    desc: '',
    textarea:'',
    textarea2:'',
    catalog:''
})
// 单选
let radio = ref("1")
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

// 上传图片
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file) => {
    console.log(file)
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}

const handleDownload = (file) => {
    console.log(file)
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
}

.price {
    position: relative;

    .label {
        margin-left: 10px;
    }
}
.textarea{
    width: 500px;
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
.header{
    margin: 50px 0 28px 80px;
    font-size: 12px ;
    color: #ccc;
}
</style>