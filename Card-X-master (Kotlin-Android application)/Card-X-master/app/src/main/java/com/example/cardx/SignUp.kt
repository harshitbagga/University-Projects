package com.example.cardx

import android.content.Context
import android.content.Intent
import android.net.ConnectivityManager
import android.net.NetworkInfo
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.FirebaseDatabase
import kotlinx.android.synthetic.main.activity_sign_up.*


class SignUp : AppCompatActivity() {
    private lateinit var mAuth: FirebaseAuth
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)
        mAuth = FirebaseAuth.getInstance()
    }


    fun CreateAccount(view: View) {
        if(IsNetworkAvailable()) {
            email_layout.isErrorEnabled = false
            password_layout.isErrorEnabled = false
            confirmpassword_layout.isErrorEnabled = false
            if (email_input.text!!.isNotEmpty() && password_input.text!!.isNotEmpty() && confirmpassword_input.text!!.isNotEmpty()) {
                if (password_input.text.toString() == confirmpassword_input.text.toString()) {
                    if (password_input.text.toString().length >= 6) {
                        mAuth.createUserWithEmailAndPassword(
                            email_input.text.toString().trim(),
                            password_input.text.toString().trim()
                        ).addOnCompleteListener(this) { task ->
                            if (task.isSuccessful) {
                                val database = FirebaseDatabase.getInstance().reference
                                val users = database.child("users")


                                val newuser = User(
                                    0,
                                    firstname_input.text.toString(),
                                    lastname_input.text.toString()
                                )
                                users.child(mAuth.currentUser!!.uid).setValue(newuser)
                                val intent = Intent(this, LoginActivity::class.java)
                                startActivity(intent)
                                finish()
                            } else {
                                email_layout.isErrorEnabled = true
                                email_layout.error = getString(R.string.email_already_used_error)

                            }
                        }
                    } else {
                        password_layout.isErrorEnabled = true
                        password_layout.error = getString(R.string.short_password_error)
                        confirmpassword_layout.isErrorEnabled = true
                        confirmpassword_layout.error = getString(R.string.short_password_error)
                    }
                } else {
                    password_layout.isErrorEnabled = true
                    password_layout.error = getString(R.string.password_dont_match_error)
                    confirmpassword_layout.isErrorEnabled = true
                    confirmpassword_layout.error = getString(R.string.password_dont_match_error)

                }
            } else {
                if (email_input.text!!.isEmpty()) {
                    email_layout.isErrorEnabled = true
                    email_layout.error = getString(R.string.please_type_your_email)
                }
                if (password_input.text!!.isEmpty()) {
                    password_layout.isErrorEnabled = true
                    password_layout.error = getString(R.string.please_type_your_password)
                }
                if (confirmpassword_input.text!!.isEmpty()) {
                    confirmpassword_layout.isErrorEnabled = true
                    confirmpassword_layout.error = getString(R.string.please_type_your_password)
                }
            }
        }else{
            Toast.makeText(this,getString(R.string.no_internet_error), Toast.LENGTH_SHORT).show()
        }
    }

    fun IsNetworkAvailable(): Boolean {
        val connectivityManager = getSystemService(Context.CONNECTIVITY_SERVICE)
        return if (connectivityManager is ConnectivityManager) {
            val networkInfo: NetworkInfo? = connectivityManager.activeNetworkInfo
            networkInfo?.isConnected ?: false
        } else false
    }
}


