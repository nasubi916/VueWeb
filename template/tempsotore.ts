import {defineStore } from 'pinia'

export const xxx =defineStore('xxx',{
    state:()=>({
        counter:0
    }),
    getters:{
        xxx:(state)=>state.counter//calc
    },
    actions:{
        xxx(){
            this.counter//calc
        }
    }
})