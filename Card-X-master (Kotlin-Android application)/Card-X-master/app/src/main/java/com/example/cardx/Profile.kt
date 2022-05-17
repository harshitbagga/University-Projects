package com.example.cardx

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast

class Profile : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)
    }



    fun OpenProfilePicture(view: View){
        Toast.makeText(applicationContext,"You called the function that would open your profile picture for you to view.", Toast.LENGTH_LONG).show()
    }

    fun Camera(view:View){
        Toast.makeText(applicationContext,"You called the function that would allow you to take a photo or get a photo from your gallery and use as your new profile picture.", Toast.LENGTH_LONG).show()
    }
}
