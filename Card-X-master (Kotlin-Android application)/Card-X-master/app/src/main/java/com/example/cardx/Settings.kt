package com.example.cardx

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.children
import kotlinx.android.synthetic.main.activity_settings.*

class Settings : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_settings)
        LoadTheme()
    }

    override fun onResume() {
        super.onResume()
        LoadTheme()
    }
    override fun onBackPressed() {
        super.onBackPressed()
        val intent = Intent(this, MainPage::class.java).apply { }
        startActivity(intent)
    }

    fun OpenChangeTheme(view: View){
        val intent = Intent(this, ThemeSelection::class.java).apply { }
        startActivity(intent)
    }


    fun LoadTheme(){
        val Themes = arrayOf(R.color.white,R.color.black)
        val ButtonBackgroundThemes = arrayOf(R.drawable.button_border_light, R.drawable.button_border_dark)
        val ThemeId = LoginActivity.Companion.UserTheme
        if(ThemeId != 0){
            settings_layout.background= resources.getDrawable(Themes[ThemeId])
            pagetitle_display.setTextColor(resources.getColor(Themes[ThemeId-1]))
            for(child  in settings_buttons_layout.children){
                var btn = child as Button
                btn.background = resources.getDrawable(ButtonBackgroundThemes[ThemeId])
                btn.setTextColor(resources.getColor(Themes[ThemeId-1]))
            }
        }else{
            settings_layout.background= resources.getDrawable(Themes[ThemeId])
            pagetitle_display.setTextColor(resources.getColor(Themes[ThemeId+1]))
            for(child  in settings_buttons_layout.children){
                var btn = child as Button
                btn.background = resources.getDrawable(ButtonBackgroundThemes[ThemeId])
                btn.setTextColor(resources.getColor(Themes[ThemeId+1]))
            }
        }
    }
}
