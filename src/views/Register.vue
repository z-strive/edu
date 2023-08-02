<template>
    <div class="wrap">
        <h2>用户注册</h2>
        <form autocomplete="off" @submit.prevent="onSubmit">
            <div class="a">
                <div class="left">
                    <div class="input1">
                        <label for="familyName">姓:</label>
                        <input type="text" required id="familyName" name="familyName" v-model="familyName"
                            @keyup="familyName1">
                    </div>
                    <!-- 名称 -->
                    <div class="input1">
                        <label for="name">名:</label>
                        <input type="text" required id="name" v-model="name" @input="name1">
                    </div>
                    <!-- 邮箱地址 -->
                    <div class="input1">
                        <label for="email">邮箱:</label>
                        <input type="email" required id="email" v-model="email" @input="email1">
                    </div>
                    <!-- 电话 -->
                    <div class="input1">
                        <label for="tel">手机号:</label>
                        <input type="tel" required id="tel" v-model="tel" @input="tel1">
                    </div>
                    <span class="red" v-show="telif">请输入正确的手机号</span>
                    <!-- 地址 -->
                    <div class="input1">
                        <label for="address">地址:</label>
                        <input type="text" required id="address" v-model="address" @input="address1">
                    </div>
                    <!-- 年龄 -->
                    <div class="input1">
                        <label for="age">年龄:</label>
                        <input type="text" required id="age" v-model="age" @input="age1">
                    </div>


                </div>
                <div class="right">

                    <!-- 英文名字 -->
                    <div class="input1">
                        <label for="EnglishName">英文名:</label>
                        <input type="text" required id="EnglishName" v-model="EnglishName" @input="englishName1">
                    </div>
                    <!-- 角色 -->
                    <div class="input1">
                        <label for="role">请选择角色</label>
                        <select id="role" v-model="role" placeholder="请选择">
                            <!-- 管理员 -->
                            <option value="Administrator">管理员</option>
                            <!-- 设计师 -->
                            <option value="stylist">设计师</option>
                            <!-- 库管 -->
                            <option value="InventoryKeeper">库管</option>
                            <!-- 工程师 -->
                            <option value="Engineer">工程师</option>
                        </select>
                    </div>
                    <!-- 简历 -->
                    <div class="input1">
                        <label for="desc">简介:</label>
                        <textarea name="" id="desc" cols="30" rows="10" v-model="desc"></textarea>
                    </div>
                    <!-- 密码 -->
                    <div class="input1">
                        <label for="password">密码:</label>
                        <input type="password" required id="password" v-model="password" @input="password1">
                    </div>

                </div>

            </div>
            <button type="submit" @click="submitForm">提交</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let familyName = ref()
let name = ref()
let fullName = ref()
let email = ref()
let tel = ref()
let address = ref()
let age = ref()
let EnglishName = ref()
let role = ref()
let desc = ref()
let password = ref()
let reg_tel =ref(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/) ; //11位手机号码正则
let nameif = ref(false)
let telif = ref(false)

const familyName1=()=> {

    familyName.value = familyName.value.replace(/\s/g, '');


}
const name1=()=> {

    name.value = name.value.replace(/\s/g, '');

}
const email1=()=> {

    email.value = email.value.replace(/\s/g, '');

}
const tel1=()=> {

    tel.value = tel.value.replace(/\s/g, '');
    if (!reg_tel.test(tel.value)) {
        telif.value = true

    } else {
        telif.value = false
    }
}
const address1=() =>{

    address.value = address.value.replace(/\s/g, '');

}
const age1=() =>{

    age.value = age.value.replace(/\s/g, '');

}
const englishName1=() =>{

    EnglishName.value = EnglishName.value.replace(/\s/g, '');

}
const password1=() =>{

    password.value = password.value.replace(/\s/g, '');

}
const onSubmit=() =>{
    return false;
}
</script>

<style scoped lang="less">
.wrap {
    width: 1200px;
    max-height: 70vh;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;

    .red {
        width: 300px;
        color: red;
        font-size: 10px;
        display: block;
        text-align: center;
        margin-left: 180px;
        height: 10px;
    }

    h2 {
        width: 1200px;
        text-align: center;

    }

    .a {
        display: flex;
    }

    .left,
    .right {
        width: 600px;
        height: 55vh;

    }

    label {
        display: block;
        width: 200px;
        text-align: right;
        margin-right: 20px;
        height: 40px;
        line-height: 40px;
    }

    .input1 {
        display: flex;
        margin-top: 30px;
    }

    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    select {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        color: #333;
        width: 200px;
        outline: none;
    }

    select:hover {
        border-color: #3b82f6;
    }

    select:focus {
        border-color: #1d4ed8;
    }

    textarea {
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 6px;
        background-color: #f9f9f9;
        color: #333;
        width: 300px;
        resize: none;
        outline: none;
    }

    textarea:hover {
        border-color: #3b82f6;
    }

    textarea:focus {
        background-color: #fff;
    }

    input:hover {
        border-color: #3b82f6;
    }

    input:focus {
        border-color: #1d4ed8;
    }

    button[type="submit"] {
        background-color: #3b82f6;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 80%;
        font-size: 16px;
        margin: auto;
        display: block;
        text-align: center;
    }

    button[type="submit"]:hover {
        background-color: #1d4ed8;
    }

    button[type="submit"]:focus {
        outline: none;
    }

    button[type="submit"]:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
}
</style>