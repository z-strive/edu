<template>
    <div class="wrap">
        <p class="header">请输入秒杀活动相关信息</p>
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="活动编号" class="name">
                <el-input v-model="ruleForm.name" placeholder="请输入活动名称" />
            </el-form-item>
            <el-form-item label="活动封面" class="pic">
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
            <el-form-item label="活动状态" class="textarea">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">上线状态</el-radio>
                    <el-radio label="2" size="large">下线状态</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动日期" class="textarea">
                <div class="demo-date-picker">
                    <div class="block">
                        <el-date-picker v-model="value1" type="daterange" range-separator="至"
                            start-placeholder="开始时间" end-placeholder="结束时间" size="default" />
                    </div>
                </div>
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

const radio1 = ref('1')
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

const value1 = ref('')

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
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>