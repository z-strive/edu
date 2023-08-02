<template>
    <div class="wrap">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup>
import {nextTick, ref} from 'vue'
let spend = ref(1)
let bar = ref()
let timer = ref()
const startLoading=()=>{
    let dom = bar.value
    spend.value = 1;
    timer.value = window.requestAnimationFrame(function fn(){
        if(spend.value < 90){
            spend.value+=1
            dom.style.width = spend.value + 'vw'
            timer.value = window.requestAnimationFrame(fn)
        }else{
            spend.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })
}
const endLoading= ()=>{
    let dom = bar.value
    setTimeout(()=>{
       window.requestAnimationFrame(()=>{
            spend.value = 100;
            dom.style.width = spend.value +'vw'
       }) 
    },500)
}

defineExpose({
    startLoading,
    endLoading
})
</script>

<style scoped lang="less">
    .wrap{
        position: fixed;
        top: 0;
        width: 100vw;
        height: 2px;
        .bar{
            height: inherit;
            width: 1px;
            background-color: red;
        }
    }
</style>