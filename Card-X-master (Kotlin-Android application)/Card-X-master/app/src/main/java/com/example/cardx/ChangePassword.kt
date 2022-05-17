package com.example.cardx

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.Toast
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_change_password.*
import kotlinx.android.synthetic.main.changepassword_inputs_default.*

class ChangePassword : AppCompatActivity() {
    var ChangedPassword = false
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_change_password)
        ChangedPassword = false
        LoadTheme()
        LoadInputs()
    }

    fun Submit(view: View){
        ChangePass()
        //Toast.makeText(applicationContext,"Password changed successfully, please login with the new password.", Toast.LENGTH_LONG).show()
        if(ChangedPassword) {
            val intent = Intent(this, LoginActivity::class.java).apply { }
            startActivity(intent)
        }
    }

    fun ChangePass(){
        /*
        val db = Room.databaseBuilder(
            applicationContext, UserDatabase::class.java, "user.db"
        ).allowMainThreadQueries().build()
        val UserId = arrayOf(LoginActivity.UserId!!)
        val User = db.userDao().loadAllByIds(UserId)[0]
        if(currentpassword_input.text.toString() == User.Password){
            if(newpassword_input.text!!.isNotEmpty() && newpassword_input.text.toString() == confirmnewpassword_input.text.toString()){
                db.userDao().delete(User)
                User.Password = newpassword_input.text.toString()
                db.userDao().insertAll(User)
                db.close()
                ChangedPassword = true
            }else{
                Toast.makeText(applicationContext,"Passwords don't match", Toast.LENGTH_LONG).show()
            }
        }else{
            Toast.makeText(applicationContext,"Wrong current password", Toast.LENGTH_LONG).show()
        }
        */

    }

    fun LoadTheme(){
        val Themes = arrayOf(R.color.white,R.color.black)
        val ButtonBackgroundThemes = arrayOf(R.drawable.button_border_light, R.drawable.button_border_dark)
        val ThemeId = LoginActivity.Companion.UserTheme
        if(ThemeId != 0){
            changepassword_layout.background= resources.getDrawable(Themes[ThemeId])
            //pagetitle_display.setTextColor(resources.getColor(Themes[ThemeId-1]))
            //currentpassword_input.setTextColor(resources.getColor(Themes[ThemeId-1]))
            //newpassword_input.setTextColor(resources.getColor(Themes[ThemeId-1]))
            //confirmnewpassword_input.setTextColor(resources.getColor(Themes[ThemeId-1]))
            //currentpassword_input.setHintTextColor(resources.getColor(Themes[ThemeId-1]))
            //newpassword_input.setHintTextColor(resources.getColor(Themes[ThemeId-1]))
            //currentpassword_layout.setHintTextAppearance(R.style.TextInputLayoutDark)
            /*

            confirmnewpassword_input.setHintTextColor(resources.getColor(Themes[ThemeId-1]))
            currentpassword_layout.setHintTextAppearance((Themes[ThemeId-1]))
            newpassword_layout.setHintTextAppearance((Themes[ThemeId-1]))

            //allcards_category_button.background = resources.getDrawable(ButtonBackgroundThemes[MainActivity.Companion.UserTheme])
             */
            //allcards_category_button.setTextColor(resources.getColor(Themes[MainActivity.Companion.UserTheme - 1]))
        }
    }

    fun LoadInputs(){
        var g = LayoutInflater.from(applicationContext)
        val ThemeId = LoginActivity.Companion.UserTheme
        if(ThemeId != 0) {
            var view: View = layoutInflater.inflate(R.layout.changepassword_inputs_dark, changepassword_layout,false)
            changepassword_layout.addView(view,0)
        }else {
            var view: View = layoutInflater.inflate(
                R.layout.changepassword_inputs_default,
                changepassword_layout,
                false
            )
            changepassword_layout.addView(view,0)
        }
    }
}
