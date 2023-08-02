import { defineStore } from "pinia";

const useStore = defineStore('main', {
    state: () => {
        return {
            router: "首页",
            crumbs:['首页']
        }
    },
    actions: {
        changeRouter(dispaly) {
            this.router = dispaly
        },
        changeCrumbs(dispaly){
            this.crumbs = dispaly
        }
    }
    ,
    persist: {
        enabled: true
    }
})
export default useStore
