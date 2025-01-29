package com.iskportal

import com.iskportal.session.Block
import com.iskportal.session.BlockType
import com.iskportal.session.Canvas
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class CanvasTests {

    @Test
    fun `Add a Block to Canvas`() {
        val canvas = Canvas(mutableListOf())
        val block = Block("Hello World", BlockType.MARKDOWN)
        canvas.addBlock(0, block)
        assertEquals(1, canvas.canvasContent.size)
        assertEquals(block, canvas.canvasContent[0])
    }

    @Test
    fun `Remove a Block from Canvas`() {
        val block = Block("Hello World", BlockType.MARKDOWN)
        val canvas = Canvas(mutableListOf(block))
        canvas.removeBlock(0)
        assertEquals(0, canvas.canvasContent.size)
    }

    @Test
    fun `Edit a Block in Canvas`() {
        val block = Block("Hello World", BlockType.MARKDOWN)
        val canvas = Canvas(mutableListOf(block))
        canvas.editBlock("New Content", 0)
        assertEquals("New Content", canvas.canvasContent[0].rawContent)
    }

    @Test
    fun `Add a SubBlock to a Block in Canvas`() {
        val block = Block("Hello World", BlockType.MARKDOWN)
        val subBlock = Block("SubBlock Content", BlockType.MARKDOWN)
        val canvas = Canvas(mutableListOf(block))
        canvas.addSubBlock(0, 0, subBlock)
        assertEquals(1, canvas.canvasContent[0].subBlocks.size)
        assertEquals(subBlock, canvas.canvasContent[0].subBlocks[0])
    }

    @Test
    fun `Remove a SubBlock from a Block in Canvas`() {
        val subBlock = Block("SubBlock Content", BlockType.MARKDOWN)
        val block = Block("Hello World", BlockType.MARKDOWN, mutableListOf(subBlock))
        val canvas = Canvas(mutableListOf(block))
        canvas.removeSubBlock(0, 0)
        assertEquals(0, canvas.canvasContent[0].subBlocks.size)
    }

    @Test
    fun `Edit a SubBlock in a Block in Canvas`() {
        val subBlock = Block("SubBlock Content", BlockType.MARKDOWN)
        val block = Block("Hello World", BlockType.MARKDOWN, mutableListOf(subBlock))
        val canvas = Canvas(mutableListOf(block))
        canvas.editSubBlock("New SubBlock Content", 0, 0)
        assertEquals("New SubBlock Content", canvas.canvasContent[0].subBlocks[0].rawContent)
    }
}