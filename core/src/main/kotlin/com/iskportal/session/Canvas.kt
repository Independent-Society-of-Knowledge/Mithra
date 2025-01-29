package com.iskportal.session

import kotlinx.serialization.Serializable

@Serializable
data class Canvas (
    val canvasContent: MutableList<Block>,
){
    fun addBlock(index: Int, block: Block) {
        canvasContent.add(index, block)
    }

    fun removeBlock(index: Int){
        canvasContent.removeAt(index)
    }

    fun editBlock(content: String, index:Int){
        canvasContent[index].rawContent = content
    }

    fun addSubBlock(parentIndex: Int, index: Int, subBlock: Block){
        canvasContent[parentIndex].addSubBlock(index, subBlock)
    }


    fun removeSubBlock(parentIndex: Int, index: Int){
        canvasContent[parentIndex].subBlocks.removeAt(index)
    }

    fun editSubBlock(content:String, parentIndex: Int, index: Int){
        canvasContent[parentIndex].subBlocks[index].rawContent = content
    }

}