package com.iskportal.auth

import org.jetbrains.exposed.sql.Table

object UserTable : Table() {
    val id = integer("id").autoIncrement()
    val username = varchar("username", 50).uniqueIndex()
    val password = varchar("password", 64)
    val email = varchar("email", 50).uniqueIndex()
    val name = varchar("name", 50).nullable()
    val surname = varchar("surname", 50).nullable()
}