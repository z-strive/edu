import { defineStore } from "pinia";

const useStore = defineStore('main', {
    state: () => {
        return {
            router: "首页"
        }
    },
    actions: {
        changeRouter(dispaly) {
            this.router = dispaly
        }
    }
    ,
    persist: {
        enabled: true
    }
})
export default useStore
