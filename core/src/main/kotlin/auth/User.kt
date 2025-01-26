package com.iskportal.auth

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val username: String,
    val password: String,
    val email: String,
    val name: String?,
    val surname: String?,
)
