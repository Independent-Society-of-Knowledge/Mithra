package com.iskportal

import com.iskportal.session.Block
import com.iskportal.session.BlockType
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class BlockSerializationTests {

    @Test
    fun `Serialize Block to JSON`() {
        val block = Block("Hello World", BlockType.MARKDOWN)
        val json = Json.encodeToString(Block.serializer(), block)
        val expectedJson = """{"rawContent":"Hello World","blockType":"MARKDOWN"}"""
        assertEquals(expectedJson, json)
    }

    @Test
    fun `Deserialize Block from JSON`() {
        val json = """{"rawContent":"Hello World","blockType":"MARKDOWN","subBlocks":[]}"""
        val block = Json.decodeFromString(Block.serializer(), json)
        val expectedBlock = Block("Hello World", BlockType.MARKDOWN)
        assertEquals(expectedBlock, block)
    }
}