package com.example.cardx

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.FirebaseDatabase
import kotlinx.android.synthetic.main.activity_theme_selection.*

class ThemeSelection : AppCompatActivity() {
    val database = FirebaseDatabase.getInstance().reference
    private lateinit var mAuth: FirebaseAuth
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_theme_selection)
        mAuth = FirebaseAuth.getInstance()
        if (LoginActivity.UserTheme != 0) {
            dark_theme_button.text = getString(R.string.dark_theme) + "✔"
        } else {
            light_theme_button.text = getString(R.string.light_theme) + "✔"
        }
    }

    fun SelectTheme(view: View) {
        val users = database.child("users")
        val userRef = users.child(LoginActivity.UserId!!)
        userRef.child("t").setValue(view.tag.toString().toInt())
        userRef.child("theme").setValue(view.tag.toString().toInt())
        LoginActivity.UserTheme = view.tag.toString().toInt()
        if (LoginActivity.UserTheme != 0) {
            dark_theme_button.text = getString(R.string.dark_theme) + "✔"
            light_theme_button.text = getString(R.string.light_theme)

        } else {
            light_theme_button.text = getString(R.string.light_theme) + "✔"
            dark_theme_button.text = getString(R.string.dark_theme)
        }
    }
}

