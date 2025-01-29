package com.iskportal.mithra.user

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.SequenceGenerator
import org.hibernate.proxy.HibernateProxy

@Entity
open class User(
    @Column(name = "email", nullable = false, unique = true)
    var email: String
) {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "user_id_seq", sequenceName = "user_id_seq")
    @Column(name = "id", updatable = false, nullable = false)
    var userId: Long? = null

    @Column(name = "username", unique = true, nullable = false)
    var username: String? = null

    @JsonIgnore
    @Column(name = "password", unique = false, nullable = false)
    var hashPassword: String? = null

    @Transient
    var hasPassword: Boolean = hashPassword != null

    final override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || javaClass != other.javaClass) return false

        other as User

        return (userId != null && userId == other.userId)

    }

    final override fun hashCode(): Int {
        return if (this is HibernateProxy) {
            (this as HibernateProxy).hibernateLazyInitializer.identifier.hashCode()
        } else javaClass.hashCode()
    }

    override fun toString(): String {
        return this::class.simpleName + "(id = $userId, email = $email, username = $username)"
    }


}