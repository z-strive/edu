<template>
    <div class="wrap">
        <p class="header">请输入相关信息</p>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="课程名称" class="name" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入课程名称" />
            </el-form-item>
            <el-form-item label="封面图片" class="pic">
                <el-upload list-type="picture-card" action="http://114.116.26.78/api/upload/courseCover" name="coursecover"
                    :headers="header" :on-success="aa">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <template #file="{ file }">
                        <div>
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                        </div>
                    </template>
                    <template #tip>
                        <div class="el-upload__tip">
                            只能上传jpg/png文件，且不超过500KB.
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品限制" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="1">上架转态</el-radio>
                    <el-radio label="0">下架状态</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="课程价格" class="price" prop="price">
                <el-input-number v-model="ruleForm.price" :controls="false" placeholder="请输入金额" />
                <span class="label">元</span>
            </el-form-item>
            <el-form-item label="课程简介" class="textarea" prop="courseIntroduction">
                <el-input v-model="ruleForm.courseIntroduction" :rows="4" type="textarea" placeholder="请输入内容" />
            </el-form-item>
            <el-form-item label="讲师介绍" class="textarea" prop="lecturerProfile">
                <el-input v-model="ruleForm.lecturerProfile" :rows="4" type="textarea" placeholder="请输入内容" />
            </el-form-item>
            <el-form-item label="课程目录" class="textarea" prop="catalog">
                <el-input v-model="ruleForm.catalog" placeholder="请输入目录以“逗号”隔开" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    {{ flag ? '确定' : '提交' }}
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { reactive, ref, watch } from 'vue'
import { updateCourse, addCourse } from '../api/index' //上传课程封面
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.query)
let flag = ref(!route.query.name)
const header = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
}
const aa = (response) => {
    fileImg.value = 'http://114.116.26.78' + response.data.url
}
const router = useRouter()
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
    name: route.query.name || '',//课程名称
    resource: route.query.resource || '1',//课程状态
    price: route.query.price || 0,//课程价格
    courseIntroduction: route.query.desc || '',//课程简介
    lecturerProfile: route.query.teacherDesc || '',//讲师简介
    catalog: route.query.catalog || ''//课程目录
})
const rules = reactive({
    name: [
        { required: true, message: '请输入课程名称', trigger: 'blur' },
        { min: 2, max: 10, message: '课程的名称为2-10个字符', trigger: 'blur' },
    ],
    price: [
        {
            required: true,
            message: '请输入价格',
            trigger: 'blur'
        }
    ],
    resource: [
        {
            required: true,
            message: '请输入课程的状态',
            trigger: 'change',
        },
    ],
    courseIntroduction: [
        {
            required: true,
            message: '请输入课程简介',
            trigger: 'blur'
        }
    ],
    lecturerProfile: [
        {
            required: true,
            message: '请输入讲师简介',
            trigger: 'blur'
        }
    ],
    catalog: [
        {
            required: true,
            message: '请输入课程目录',
            trigger: 'blur'
        }
    ]
})
// 上传图片
const file = ref()
const fileImg = ref('')

const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (flag.value) {
                addCourse({
                    name: ruleForm.name,
                    cover: fileImg.value,
                    desc: ruleForm.courseIntroduction,
                    catalog: ruleForm.catalog,
                    status: ruleForm.resource * 1,
                    price: ruleForm.price,
                    updateUserId: '64e2bf5073cb4c0fcda15e13',
                    updateUserName: 'strive'
                }).then(res => {
                    console.log(res)
                    router.push('course')
                }
                )
            } else {
                updateCourse({
                    code:route.query.code,
                    name: ruleForm.name,
                    cover: fileImg.value,
                    desc: ruleForm.courseIntroduction,
                    catalog: ruleForm.catalog,
                    status: ruleForm.resource * 1,
                    price: ruleForm.price,
                }).then((res)=> router.push('course'))
            }

        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
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

.textarea {
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

.header {
    margin: 50px 0 28px 80px;
    font-size: 12px;
    color: #ccc;
}

.img {
    width: 300px;
    height: 300px;
}
</style>