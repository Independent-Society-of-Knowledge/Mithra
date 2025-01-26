package com.iskportal

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.transaction

object DatabaseFactory {
    fun init() {
        Database.connect(
            url = "jdbc:postgresql://localhost:5432/ktor",
            driver = "org.postgresql.Driver",
            user = "thisismeamir",
            password = "Nameislevi"
        )
    }

    fun <T> dbQuery(block: () -> T): T {
        return transaction { block() }
    }

}