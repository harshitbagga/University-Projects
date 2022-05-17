package com.example.cardx

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.view.children
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_main_page.*


class MainPage : AppCompatActivity() {
    var Gradients = arrayOf(
        R.drawable.gradient_1, R.drawable.gradient_2, R.drawable.gradient_3,
        R.drawable.gradient_4, R.drawable.gradient_5, R.drawable.gradient_6, R.drawable.gradient_7,
        R.drawable.gradient_8, R.drawable.gradient_9, R.drawable.gradient_10
    )
    val Themes = arrayOf(R.color.white, R.color.black)
    val ButtonBackgroundThemes =
        arrayOf(R.drawable.button_border_light, R.drawable.button_border_dark)
    val ThemeId = LoginActivity.UserTheme
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_page)
        val Language = resources.configuration.locales[0].language
        if(Language == "pt") {
            new_card_suggestion_image_display.setImageResource(R.drawable.new_card_message_portuguese)
        }
    }

    override fun onStart() {
        super.onStart()
        Clean()
        LoadCards()
        LoadTheme()
    }

    override fun onResume() {
        super.onResume()
        Clean()
        LoadCards()
    }

    override fun onBackPressed() {
        super.onBackPressed()
        val intent = Intent(this, LoginActivity::class.java)
        startActivity(intent)
    }

    fun PixelsToDp(pixels: Int): Int {

        var density = applicationContext.resources.displayMetrics.density
        var paddingPixel = (pixels * density).toInt()
        return paddingPixel
    }

    fun CategorySelection(view: View) {

        if (view == allcards_category_button) {
            for (child in card_library_layout.children) {
                child.visibility = View.VISIBLE
            }
        } else {
            val B = categories_layout.findViewWithTag<Button>(view.tag)
            val BText = B.text

            for (child in card_library_layout.children) {
                val childCategory = child.tag.toString().substringAfter("/").substringBefore("/")
                if (childCategory != B.tag.toString()) {
                    child.visibility = View.GONE
                } else {
                    child.visibility = View.VISIBLE
                }
            }
        }
    }

    fun OpenCard(view: View) {
        val intent = Intent(this, FullCard::class.java)
        intent.putExtra("ClickedCardId", view.tag.toString())
        startActivity(intent)
    }

    fun OpenProfile(view: View) {
        val intent = Intent(this, Profile::class.java).apply { }
        startActivity(intent)
    }

    fun PopUpSettingsMenu(view: View) {
        val PopUp = PopupMenu(this, view)
        val Inflater = PopUp.menuInflater
        Inflater.inflate(R.menu.settings_menu, PopUp.menu)
        PopUp.setOnMenuItemClickListener { item ->
            when (item.itemId) {
                R.id.settings -> {
                    val intent = Intent(this, Settings::class.java).apply { }
                    startActivity(intent)
                }

            }
            true
        }
        PopUp.show()

    }

    fun LoadCards() {
        val db = Room.databaseBuilder(
            applicationContext, CardDatabase::class.java, "card.db"
        ).allowMainThreadQueries().build()
        val L = db.cardDao().loadAllByOwnerIds(arrayOf(LoginActivity.UserId!!))
        if(L.isNotEmpty()){
            new_card_suggestion_image_display.visibility = ImageView.GONE
            allcards_category_button.visibility = ImageView.VISIBLE
        }else{
            allcards_category_button.visibility = ImageView.INVISIBLE
        }
        db.close()
        for (card in L) {
            var g = LayoutInflater.from(applicationContext)
            var view: View =
                layoutInflater.inflate(R.layout.card_layout_default, card_library_layout, false)
            val label = view.findViewById<TextView>(R.id.card_layout_title)
            val imageView = view.findViewById<ImageView>(R.id.card_layout_picture)
            view.background =
                ContextCompat.getDrawable(applicationContext, Gradients[card.Background!!])
            if (card.BusinessLogo == null) {
                imageView.visibility = ImageView.GONE
            } else {
                imageView.setImageURI(Uri.parse(card.BusinessLogo))
            }
            if (card.BusinessTitle!!.isNotEmpty()) {
                label.text = card.BusinessTitle
            } else {
                label.text = card.OwnerName
            }
            view.tag =
                card.Id.toString() + "/" + card.BusinessCategory.toString() + "/" + card.Background.toString() + "/" + card.BusinessLogo.toString()
            if (card.BusinessCategory != null && card.BusinessCategory!!.isNotEmpty()) {
                var ButtonAlreadyExists = false
                for (child in categories_layout.children) {
                    val bttn: Button = child as Button
                    if (bttn.text == card.BusinessCategory) {
                        ButtonAlreadyExists = true
                        break
                    }
                }
                if (!ButtonAlreadyExists) {
                    val Buttn = Button(this)
                    var Params = LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.WRAP_CONTENT,
                        LinearLayout.LayoutParams.WRAP_CONTENT
                    )
                    Params.setMargins(PixelsToDp(8), PixelsToDp(4), PixelsToDp(8), 0)
                    Buttn.layoutParams = Params
                    Buttn.setPadding(PixelsToDp(8), 0, PixelsToDp(8), 0)

                    Buttn.minHeight = PixelsToDp(48)
                    Buttn.minWidth = PixelsToDp(48)
                    if (ThemeId != 0) {
                        Buttn.background = resources.getDrawable(ButtonBackgroundThemes[ThemeId])
                        Buttn.setTextColor(resources.getColor(Themes[ThemeId - 1]))
                    } else {
                        Buttn.background = ContextCompat.getDrawable(
                            applicationContext,
                            R.drawable.button_border_light
                        )
                    }
                    Buttn.text = card.BusinessCategory
                    Buttn.tag = card.BusinessCategory

                    Buttn.textSize = 18.0f
                    Buttn.setOnClickListener {
                        CategorySelection(it)
                    }
                    categories_layout.addView(Buttn)
                }
            }
            card_library_layout.addView(view, 0)
        }

    }

    fun GoToAddCardActivity(view: View) {
        val intent = Intent(this, CreateCard::class.java).apply { }
        startActivity(intent)
    }

    fun RemoveAllCards() {
        card_library_layout.removeAllViews()
    }

    fun RemoveAllCategories() {
        for (child in categories_layout.children) {
            if (child.id != allcards_category_button.id) {
                categories_layout.removeView(child)
            }
        }
    }

    fun LoadTheme() {
        if (ThemeId != 0) {
            mainpage_layout.background = resources.getDrawable(Themes[ThemeId])
            allcards_category_button.background =
                resources.getDrawable(ButtonBackgroundThemes[ThemeId])
            allcards_category_button.setTextColor(resources.getColor(Themes[ThemeId - 1]))
            settings_popup_menu.background =
                resources.getDrawable(R.drawable.ic_more_vert_white_24dp)
        }
    }

    fun Clean(){
        RemoveAllCategories()
        RemoveAllCards()
    }


}
