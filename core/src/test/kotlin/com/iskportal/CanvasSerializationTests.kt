package com.iskportal

import com.iskportal.session.Block
import com.iskportal.session.BlockType
import com.iskportal.session.Canvas
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class CanvasSerializationTests {

    @Test
    fun `Serialize Canvas to JSON`() {
        val block = Block("Hello World", BlockType.MARKDOWN)
        val canvas = Canvas(mutableListOf(block))
        val json = Json.encodeToString(Canvas.serializer(), canvas)
        val expectedJson = """{"canvasContent":[{"rawContent":"Hello World","blockType":"MARKDOWN"}]}"""
        assertEquals(expectedJson, json)
    }

    @Test
    fun `Deserialize Canvas from JSON`() {
        val json = """{"canvasContent":[{"rawContent":"Hello World","blockType":"MARKDOWN","subBlocks":[]}]}"""
        val canvas = Json.decodeFromString(Canvas.serializer(), json)
        val block = Block("Hello World", BlockType.MARKDOWN)
        val expectedCanvas = Canvas(mutableListOf(block))
        assertEquals(expectedCanvas, canvas)
    }
}