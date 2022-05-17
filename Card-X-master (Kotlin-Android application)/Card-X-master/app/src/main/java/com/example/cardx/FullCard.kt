package com.example.cardx

import android.content.Intent
import android.graphics.Bitmap
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewManager
import android.widget.ImageView
import android.widget.PopupMenu
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import androidx.core.view.drawToBitmap
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_full_card.*
import java.io.File
import java.io.FileOutputStream


class FullCard : AppCompatActivity() {

    var Gradients = arrayOf(
        R.drawable.gradient_1, R.drawable.gradient_2, R.drawable.gradient_3,
        R.drawable.gradient_4, R.drawable.gradient_5, R.drawable.gradient_6, R.drawable.gradient_7,
        R.drawable.gradient_8, R.drawable.gradient_9, R.drawable.gradient_10
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_full_card)
        LoadCards()
        FocusView()
        LoadTheme()
    }

    override fun onBackPressed() {
        super.onBackPressed()
        val intent = Intent(this, MainPage::class.java)
        startActivity(intent)
    }

    fun LoadCards() {
        val db = Room.databaseBuilder(
            applicationContext, CardDatabase::class.java, "card.db"
        ).allowMainThreadQueries().build()

        val L = db.cardDao().loadAllByOwnerIds(arrayOf(LoginActivity.UserId!!))
        db.close()

        for (card in L) {
            var g = LayoutInflater.from(applicationContext)
            var view: View = layoutInflater.inflate(
                R.layout.fullcard_layout_default,
                fullcard_library_layout,
                false
            )
            val logo = view.findViewById<ImageView>(R.id.logo_display)
            val OwnerName = view.findViewById<TextView>(R.id.name_display)
            val BusinessName = view.findViewById<TextView>(R.id.business_display)
            val Speciality = view.findViewById<TextView>(R.id.speciality_display)
            val Telephone_1 = view.findViewById<TextView>(R.id.telephone_1_display)
            val Telephone_2 = view.findViewById<TextView>(R.id.telephone_2_display)
            val Telephone_3 = view.findViewById<TextView>(R.id.telephone_3_display)
            val Email = view.findViewById<TextView>(R.id.email_display)
            val Mail = view.findViewById<TextView>(R.id.mail_display)
            val Address = view.findViewById<TextView>(R.id.address_display)

            view.background =
                ContextCompat.getDrawable(applicationContext, Gradients[card.Background!!])
            if (card.BusinessLogo == null) {
                logo.visibility = ImageView.GONE
            } else {
                logo.setImageURI(Uri.parse(card.BusinessLogo))
            }

            if (card.OwnerName!!.isNotEmpty()) {
                OwnerName.text = card.OwnerName
            } else {
                OwnerName.visibility = TextView.GONE
            }

            if (card.BusinessTitle!!.isNotEmpty()) {
                BusinessName.text = card.BusinessTitle
            } else {
                BusinessName.visibility = TextView.GONE
            }

            if (card.OwnerSpeciality!!.isNotEmpty()) {
                Speciality.text = card.OwnerSpeciality
            } else {
                Speciality.visibility = TextView.GONE
            }

            if (card.BusinessPhone_1!!.isNotEmpty()) {
                Telephone_1.text = card.BusinessPhone_1
            } else {
                Telephone_1.visibility = TextView.GONE
            }

            if (card.BusinessPhone_2!!.isNotEmpty()) {
                Telephone_2.text = card.BusinessPhone_2
            } else {
                Telephone_2.visibility = TextView.GONE
            }

            if (card.BusinessPhone_3!!.isNotEmpty()) {
                Telephone_3.text = card.BusinessPhone_3
            } else {
                Telephone_3.visibility = TextView.GONE
            }

            if (card.BusinessEmail!!.isNotEmpty()) {
                Email.text = card.BusinessEmail
            } else {
                Email.visibility = TextView.GONE
            }

            if (card.BusinessMailAddress!!.isNotEmpty()) {
                Mail.text = card.BusinessMailAddress
            } else {
                Mail.visibility = TextView.GONE
            }

            if (card.BusinessMailAddress!!.isNotEmpty()) {
                Address.text = card.BusinessAddress
            } else {
                Address.visibility = TextView.GONE
            }
            view.tag =
                card.Id.toString() + "/" + card.BusinessCategory.toString() + "/" + card.Background.toString() + "/" + card.BusinessLogo.toString()
            fullcard_library_layout.addView(view, 0)
        }
        db.close()
    }

    fun FocusView() {
        val ClickedCardId = intent.getStringExtra("ClickedCardId")
        val C = fullcard_scrollview.findViewWithTag<View>(ClickedCardId)


        fullcard_scrollview.post { fullcard_scrollview.scrollTo(C.left, C.right) }


    }

    fun Share(view: View) {
        val bitmap = view.drawToBitmap()
        val dir = File(applicationContext.cacheDir, "Card X Images")

        dir.mkdirs()
        val shareFile = File(dir, "share.png")
        //val shareFile = File(dir, "share.jpg")

        val output = FileOutputStream(shareFile)
        bitmap.compress(Bitmap.CompressFormat.JPEG, 85, output)
        output.flush()
        output.close()

        //intent.action = Intent.ACTION_VIEW
        val uri = FileProvider.getUriForFile(
            applicationContext,
            BuildConfig.APPLICATION_ID + ".provider",
            shareFile
        )
        val intent = Intent(Intent.ACTION_SEND, uri).apply { }
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        intent.setDataAndType(uri, contentResolver.getType(uri))
        intent.putExtra(Intent.EXTRA_STREAM, uri)
        //intent.setDataAndType(uri,"images/*")
        //startActivity(Intent.createChooser(intent,"Choose an app"))
        startActivity(intent)
    }

    fun PopUpCardOptionsMenu(view: View) {
        val PopUp = PopupMenu(this, view)
        val Inflater = PopUp.menuInflater
        Inflater.inflate(R.menu.card_options_menu, PopUp.menu)
        PopUp.setOnMenuItemClickListener { item ->
            when (item.itemId) {
                R.id.share -> {
                    Share(view.parent as View)
                }
                R.id.edit -> {
                    Edit(view.parent as View)
                }
                R.id.delete -> {
                    Delete(view.parent as View)

                    val parent = view.parent as View
                    val viewManger = parent.parent as ViewManager
                    viewManger.removeView(parent)

                }

            }
            true
        }
        PopUp.show()

    }

    fun Delete(view: View) {
        val db = Room.databaseBuilder(
            applicationContext, CardDatabase::class.java, "card.db"
        ).allowMainThreadQueries().build()
        val id = view.tag.toString().substringBefore("/")
        var ar = intArrayOf(id.toInt())
        var L = db.cardDao().loadAllByIds(ar)
        db.cardDao().delete(L[0])
        db.close()
    }

    fun Edit(view: View) {
        val intent = Intent(this, CreateCard::class.java)
        val logoId = view.tag.toString().substringAfter("/").substringAfter("/").substringAfter("/")
        intent.putExtra("Logo", logoId)
        val backgroundId =
            view.tag.toString().substringAfter("/").substringAfter("/").substringBefore("/").toInt()
        val cardId = view.tag.toString().substringBefore("/").toInt()
        intent.putExtra("CardEditedId", cardId)
        intent.putExtra("BackgroundId", backgroundId)
        intent.putExtra("Name", view.findViewById<TextView>(R.id.name_display).text)
        intent.putExtra("Business_Name", view.findViewById<TextView>(R.id.business_display).text)
        intent.putExtra("Speciality", view.findViewById<TextView>(R.id.speciality_display).text)
        intent.putExtra("Telephone_1", view.findViewById<TextView>(R.id.telephone_1_display).text)
        intent.putExtra("Telephone_2", view.findViewById<TextView>(R.id.telephone_2_display).text)
        intent.putExtra("Telephone_3", view.findViewById<TextView>(R.id.telephone_3_display).text)
        intent.putExtra("Email", view.findViewById<TextView>(R.id.email_display).text)
        intent.putExtra("Mail", view.findViewById<TextView>(R.id.mail_display).text)
        intent.putExtra("Address", view.findViewById<TextView>(R.id.address_display).text)
        intent.putExtra("Mail", view.findViewById<TextView>(R.id.mail_display).text)
        val category = view.tag.toString().substringAfter("/").substringBefore("/")
        intent.putExtra("Category", category)
        startActivity(intent)
    }

    fun RemoveAllCards() {
        fullcard_library_layout.removeAllViews()
    }

    fun LoadTheme() {
        val Themes = arrayOf(R.color.white, R.color.black)
        val ButtonBackgroundThemes =
            arrayOf(R.drawable.button_border_light, R.drawable.button_border_dark)
        val ThemeId = LoginActivity.Companion.UserTheme
        if (ThemeId != 0) {
            fullcard_layout.background = resources.getDrawable(Themes[ThemeId])
        }
    }
}
