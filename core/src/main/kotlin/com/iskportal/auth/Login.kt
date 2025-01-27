package com.iskportal.auth

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType


@Path("/auth/login")
class Login {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    fun login() = "Hello from Quarkus REST"
}