package com.iskportal.session

import kotlinx.serialization.Serializable

@Serializable
data class Block(
    val rawContent: String,
    val blockType: BlockType,
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
}



