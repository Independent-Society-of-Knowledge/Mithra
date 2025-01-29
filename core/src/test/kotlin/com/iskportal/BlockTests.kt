package com.iskportal

import com.iskportal.session.Block
import com.iskportal.session.BlockType
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class BlockTests {

    @Test
    fun `Correct Block Type Based on Content`() {
        val block = Block("```code", BlockType.MARKDOWN)
        assertEquals(BlockType.CODE, block.correctBlockTypeBasedOnContent())
    }

    @Test
    fun `Add a SubBlock to Block`() {
        val block = Block("Hello World", BlockType.MARKDOWN)
        val subBlock = Block("SubBlock Content", BlockType.MARKDOWN)
        block.addSubBlock(0, subBlock)
        assertEquals(1, block.subBlocks.size)
        assertEquals(subBlock, block.subBlocks[0])
    }

    @Test
    fun `Remove a SubBlock from Block`() {
        val subBlock = Block("SubBlock Content", BlockType.MARKDOWN)
        val block = Block("Hello World", BlockType.MARKDOWN, mutableListOf(subBlock))
        block.removeSubBlock(0)
        assertEquals(0, block.subBlocks.size)
    }

    @Test
    fun `Edit a SubBlock in Block`() {
        val subBlock = Block("SubBlock Content", BlockType.MARKDOWN)
        val block = Block("Hello World", BlockType.MARKDOWN, mutableListOf(subBlock))
        block.editSubBlock("New SubBlock Content", BlockType.MARKDOWN, 0)
        assertEquals("New SubBlock Content", block.subBlocks[0].rawContent)
    }
}