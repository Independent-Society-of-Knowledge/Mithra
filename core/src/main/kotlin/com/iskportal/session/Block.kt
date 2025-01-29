package com.iskportal.session

import kotlinx.serialization.Serializable

@Serializable
data class Block(
    var rawContent: String,
    var blockType: BlockType,
    val subBlocks: MutableList<Block> = mutableListOf()
){
    fun correctBlockTypeBasedOnContent(): BlockType {
        return when {
            rawContent.startsWith("```") -> BlockType.CODE
            rawContent.startsWith("![]") -> BlockType.IMAGE
            rawContent.startsWith("<iframe") -> BlockType.IFRAME
            rawContent.startsWith("<video") -> BlockType.VIDEO
            rawContent.startsWith("<embed") -> BlockType.EMBEDED
            rawContent.startsWith(">") -> BlockType.QUOTE
            rawContent.startsWith("[") -> BlockType.REFERENCE
            rawContent.startsWith("$") -> BlockType.MATH
            else -> BlockType.MARKDOWN
        }
    }

    fun addSubBlock(index: Int, subBlock: Block,) {
        subBlocks.add(index, subBlock)
    }

    fun removeSubBlock(subBlock: Int) {
        subBlocks.removeAt(subBlock)
    }

    fun editSubBlock(content: String, blockType: BlockType, editingSubBlockIndex: Int) {
        subBlocks.set(editingSubBlockIndex, Block(content, blockType, subBlocks.toMutableList().get(editingSubBlockIndex).subBlocks))
    }


}



