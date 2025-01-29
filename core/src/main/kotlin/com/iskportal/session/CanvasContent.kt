package com.iskportal.session

data class CanvasContent (
    val blocks: MutableList<Block>
) {
    fun addBlockAtIndex(index: Int, block: Block): Boolean{
        blocks.add(index, block)
        return true
    }

    fun addBlock(block: Block): Boolean{
        blocks.add(block)
        return true
    }

    fun deleteBlock(index: Int): Boolean {
        blocks.removeAt(index)
        return true
    }

    fun editBlock(content: String, blockType: BlockType, editingBlockIndex: Int): Boolean {
        blocks[editingBlockIndex]  = Block(
            content,
            blockType,
            blocks[editingBlockIndex].subBlocks
        )
        return true
    }

    fun addSubBlock(subBlock: Block, parentBlockIndex: Int): Boolean {
        blocks[parentBlockIndex].subBlocks.add(subBlock)
        return true
    }

    fun addSubBlockAtIndex(subBlock: Block, parentBlockIndex: Int, index: Int): Boolean {
        blocks[parentBlockIndex].subBlocks.add(index, subBlock)
        return true
    }

    fun deleteSubBlock(subBlockIndex: Int, parentBlockIndex: Int): Boolean {
        blocks[parentBlockIndex].subBlocks.removeAt(subBlockIndex)
        return true
    }

    fun editSubBlock(content: String, blockType: BlockType, editingSubBlockIndex: Int, parentBlockIndex: Int): Boolean {
        blocks[parentBlockIndex].subBlocks.set(editingSubBlockIndex, Block(
            content,
            blockType,
            blocks[parentBlockIndex].subBlocks.get(editingSubBlockIndex).subBlocks
        ))
        return true
    }
}