import { defineStore } from "pinia";

export const useNavigationStore = defineStore('navigation', {
    state: () => ({
        menubar: false,
    }),
    getters: {
        getMenubarStatus: (state) => state.menubar,
    },
    actions: {
        toggleMenubarStatus(){
            this.menubar = !this.menubar;
        },
        setMenubarStatus(status){
            this.menubar = status;
        }
    }
})