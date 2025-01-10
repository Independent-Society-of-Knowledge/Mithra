import {defineStore } from 'pinia'

export  const useCanvasStore = defineStore('canvasStore', {
    state: () => ({
    contents: []
    }),
    actions:{
        addContent(content){
            this.contents.push(content)
        },
        removeContent(content){
            this.contents.splice(this.contents.indexOf(content), 1)
        }
    }
})