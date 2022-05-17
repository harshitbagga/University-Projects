package com.example.cardx

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast


class ChangeEmail : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_change_email)
    }


    fun Submit(view: View){
        Toast.makeText(applicationContext,"Email changed successfully, please login with the new email.", Toast.LENGTH_LONG).show()
        val intent = Intent(this, LoginActivity::class.java).apply { }
        startActivity(intent)
    }

}
