package com.example.cardx

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_forgot_password.*

class ForgotPassword : AppCompatActivity() {
    private lateinit var mAuth: FirebaseAuth
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_forgot_password)
        mAuth = FirebaseAuth.getInstance()
    }

    override fun onResume() {
        super.onResume()
        email_layout.isErrorEnabled = false
    }

    fun ResetPassword(view: View) {
        email_layout.isErrorEnabled = false
        mAuth.sendPasswordResetEmail(email_input.text.toString().trim()).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                Toast.makeText(
                    applicationContext,
                    getString(R.string.sucess_reset_password_message),
                    Toast.LENGTH_LONG
                ).show()
            } else {
                email_layout.isErrorEnabled = true
                email_layout.error = getString(R.string.failure_reset_password_message)
            }
        }
    }
}
