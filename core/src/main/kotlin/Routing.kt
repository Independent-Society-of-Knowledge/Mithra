package com.iskportal

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.iskportal.auth.LoginRequest
import com.iskportal.auth.User
import com.iskportal.auth.UserDAO
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*
import java.util.*

fun Application.configureRouting() {
    val userDAO = UserDAO()
    val jwtSecret = "your-secret"
    val jwtIssuer = "com.iskportal"
    val jwtAudience = "com.iskportal.audience"
    val jwtRealm = "com.iskportal.realm"

    routing {
        get("/") {
            //responding a JSOn object
            call.respond(hashMapOf("message" to "Hello, World!"))
        }

        post("/auth/signup") {
            val user = call.receive<User>()
            userDAO.insert(user)
            call.respond(hashMapOf("message" to "User ${user.username} created"))
        }

        post("/auth/login") {
            val loginRequest = call.receive<LoginRequest>()
            val user = userDAO.findUserByUsername(loginRequest.username)
            if (user != null && user.password == loginRequest.password) {
                val token = JWT.create()
                    .withAudience(jwtAudience)
                    .withIssuer(jwtIssuer)
                    .withClaim("username", user.username)
                    .withExpiresAt(Date(System.currentTimeMillis() + 600000))
                    .sign(Algorithm.HMAC256(jwtSecret))
                call.respond(hashMapOf("token" to token))
            } else {
                call.respond(HttpStatusCode.Unauthorized, "Invalid credentials")
            }
        }

        authenticate("auth-jwt") {
            get("/protected") {
                val principal = call.principal<JWTPrincipal>()
                val username = principal!!.payload.getClaim("username").asString()
                call.respondText("Hello, $username!")
            }
        }
    }
}