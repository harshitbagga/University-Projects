package com.example.cardx

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import kotlinx.android.synthetic.main.activity_login.*


class LoginActivity : AppCompatActivity() {
    companion object {
        var UserId: String? = null
        var UserTheme: Int = 0
    }

    val database = FirebaseDatabase.getInstance().reference
    private lateinit var mAuth: FirebaseAuth
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        UserId = null
        mAuth = FirebaseAuth.getInstance()

    }

    override fun onResume() {
        super.onResume()
        email_input.setText("")
        password_input.setText("")
        email_input.clearFocus()
        password_input.clearFocus()
        email_layout.isErrorEnabled = false
        password_layout.isErrorEnabled = false
    }


    override fun onBackPressed() {
        super.onBackPressed()
        val intent = Intent(Intent.ACTION_MAIN)
        intent.addCategory(Intent.CATEGORY_HOME)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        startActivity(intent)
    }

    fun SingUp(view: View) {
        val intent = Intent(this, SignUp::class.java).apply { }
        startActivity(intent)
    }

    fun ForgotPassword(view: View) {
        val intent = Intent(this, ForgotPassword::class.java).apply { }
        startActivity(intent)
    }


    fun Login(view: View) {
        email_layout.isErrorEnabled = false
        password_layout.isErrorEnabled = false
        if (email_input.text!!.isNotEmpty() && password_input.text!!.isNotEmpty()) {
            mAuth.signInWithEmailAndPassword(
                email_input.text.toString().trim(),
                password_input.text.toString().trim()
            ).addOnCompleteListener(
                this
            ) { task ->
                if (task.isSuccessful) {
                    UserId = mAuth.currentUser?.uid
                    ReadUser(UserId)


                } else {
                    email_layout.isErrorEnabled = true
                    password_layout.isErrorEnabled = true
                    email_layout.error = getString(R.string.wong_email_or_password)
                    password_layout.error = getString(R.string.wong_email_or_password)
                }

            }


        } else {
            if (email_input.text!!.isEmpty() && password_input.text!!.isEmpty()) {
                email_layout.isErrorEnabled = true
                email_layout.error = getString(R.string.please_type_your_email)
                password_layout.isErrorEnabled = true
                password_layout.error = getString(R.string.please_type_your_password)

            } else if (email_input.text!!.isEmpty()) {
                email_layout.isErrorEnabled = true
                email_layout.error = getString(R.string.please_type_your_email)

            } else {
                password_layout.isErrorEnabled = true
                password_layout.error = getString(R.string.please_type_your_password)
            }
        }
    }

    fun ReadUser(uId: String?) {
        val users = database.child("users")
        val userRef = users.child(uId!!)
        var user: User? = null
        val listener = object : ValueEventListener {
            override fun onDataChange(dataSnapshot: DataSnapshot) {
                user = dataSnapshot.getValue(User::class.java)
                UserTheme = user!!.theme
                val intent = Intent(applicationContext, MainPage::class.java)
                startActivity(intent)
            }

            override fun onCancelled(databaseError: DatabaseError) {
                Toast.makeText(
                    applicationContext,
                    getString(R.string.error_getting_data_from_database),
                    Toast.LENGTH_LONG
                ).show()
            }
        }
        userRef.addListenerForSingleValueEvent(listener)
    }

}
