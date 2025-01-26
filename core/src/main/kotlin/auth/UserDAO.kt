package com.iskportal.auth

import com.iskportal.auth.UserTable.email
import com.iskportal.auth.UserTable.name
import com.iskportal.auth.UserTable.password
import com.iskportal.auth.UserTable.surname
import com.iskportal.auth.UserTable.username
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction

class UserDAO {
    fun insert(user: User) {
        transaction {
            UserTable.insert {
                it[username] = user.username
                it[password] = user.password
                it[email] = user.email
                it[name] = user.name
                it[surname] = user.surname
            }
        }
    }

    fun findUserByUsername(username: String): User? {
        return transaction {
            UserTable.select { UserTable.username eq username}
                .mapNotNull{ toUser(it) }
                .singleOrNull()
        }
    }

    private fun toUser(row: ResultRow): User =
        User(
            row[username],
            row[password],
            row[email],
            row[name],
            row[surname]
        )


}