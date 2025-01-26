package com.iskportal

import io.ktor.server.application.*
import io.ktor.server.netty.*

fun main(args: Array<String>): Unit = EngineMain.main(args)

fun Application.module() {
    DatabaseFactory.init()
    configureSecurity()
    configureRouting()
    configureSerialization()
}
