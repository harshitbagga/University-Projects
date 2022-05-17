package com.example.cardx

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_create_card.*
import java.io.File
import java.io.FileOutputStream


class CreateCard : AppCompatActivity() {
    companion object {
        //image pick code
        private val IMAGE_PICK_CODE = 1000
        //Permission code
        private val PERMISSION_CODE = 1001
    }
    var LogoUri: Uri? = null
    var HasPermission = false
    var Gradients = arrayOf(R.drawable.gradient_1,R.drawable.gradient_2,R.drawable.gradient_3,
        R.drawable.gradient_4, R.drawable.gradient_5,R.drawable.gradient_6,R.drawable.gradient_7,
        R.drawable.gradient_8,R.drawable.gradient_9,R.drawable.gradient_10)
    var GradientSelection = 0
    var CardEditedId: Int? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_card)
        LoadTheme()
        ProcessPermissions()
        if(intent !=null && intent.extras !=null) {
            val CEI = intent.getIntExtra("CardEditedId", -1)
            if(CEI >=0){
                CardEditedId = CEI
            }
           val logoId = intent.getStringExtra("Logo")
            if(logoId != null && logoId != "null") {
                logo_input.setImageURI(Uri.parse(logoId))
            }
                val BI = intent.getIntExtra("BackgroundId", -1)
            if(BI >=0){
                GradientSelection = BI
            }
            CardEditedId = intent.getIntExtra("CardEditedId", -1)
            name_input.setText(intent.getStringExtra("Name"))
            business_name_input.setText(intent.getStringExtra("Business_Name"))
            speciality_input.setText(intent.getStringExtra("Speciality"))
            telephone_1_input.setText(intent.getStringExtra("Telephone_1"))
            telephone_2_input.setText(intent.getStringExtra("Telephone_2"))
            telephone_3_input.setText(intent.getStringExtra("Telephone_3"))
            email_input.setText(intent.getStringExtra("Email"))
            mail_address_input.setText(intent.getStringExtra("Mail"))
            address_input.setText(intent.getStringExtra("Address"))
            category_input.setText(intent.getStringExtra("Category"))

            card_layout.background =
                ContextCompat.getDrawable(applicationContext, Gradients[GradientSelection])
        }

    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        when (requestCode) {
            PERMISSION_CODE -> {
                if (grantResults.isNotEmpty() && grantResults[0] ==
                    PackageManager.PERMISSION_GRANTED
                ) {
                    //permission from popup granted
                    HasPermission = true
                } else {
                    //permission from popup denied
                    HasPermission = false
                    Toast.makeText(this, getString(R.string.permission_denied), Toast.LENGTH_SHORT).show()
                }
            }
        }
    }
    override fun onActivityResult(requestCode: Int, resultCode: Int, resultData: Intent?) {
        if (requestCode == IMAGE_PICK_CODE && resultCode == Activity.RESULT_OK) {
            if (resultData != null) { // this is the image selected by the user
                //val imageUri: Uri? = resultData.data
                LogoUri = resultData.data
                logo_input.setImageURI(resultData.data)
            }

        }
    }
    fun SelectBackground(view: View) {
            var vId = view.resources.getResourceName(view.id)
            vId = vId.substring(vId.indexOf("_") + 1)
            vId.trim()
            GradientSelection = vId.toInt() - 1
            card_layout.background =
                ContextCompat.getDrawable(applicationContext, Gradients[GradientSelection])


    }
    fun FinishCardCreation(view:View){
        business_name_input_layout.isErrorEnabled=false
        name_input_layout.isErrorEnabled = false
        if(name_input.text!!.isNotEmpty() || business_name_input.text!!.isNotEmpty()){
            if(LogoUri != null) {
                StoreLogo()
            }
            var LogoInput: String? = null
            if(LogoUri != null){
                LogoInput = LogoUri!!.toString()
            }
        var BackgroundInput = GradientSelection
        var NameInput = name_input.text.toString()
        var BusinessNameInput = business_name_input.text.toString()
        var SpecialityInput = speciality_input.text.toString()
        var Telephone_1_Input = telephone_1_input.text.toString()
        var Telephone_2_Input = telephone_2_input.text.toString()
        var Telephone_3_Input = telephone_3_input.text.toString()
        var Email_Input = email_input.text.toString()
        var Mail_Input = mail_address_input.text.toString()
        var Address_Input = address_input.text.toString()
        val Category = category_input.text.toString().toUpperCase()

        val db = Room.databaseBuilder(
            applicationContext,CardDatabase::class.java, "card.db"
        ).allowMainThreadQueries().build()

        var card:Card = Card(LogoInput,BackgroundInput,NameInput,BusinessNameInput,SpecialityInput,Telephone_1_Input,
            Telephone_2_Input,Telephone_3_Input,Email_Input,Mail_Input,Address_Input,Category, LoginActivity.UserId!!)
        db.cardDao().insertAll(card)
        db.close()
            if(CardEditedId != null) {
                Delete(CardEditedId!!)
            }
        val intent = Intent(this, MainPage::class.java).apply { }
        startActivity(intent)
        }else{
            business_name_input_layout.isErrorEnabled=true
            name_input_layout.isErrorEnabled = true
            business_name_input_layout.error = getString(R.string.name_business_inputs_not_filled_error)
            name_input_layout.error = getString(R.string.name_business_inputs_not_filled_error)
        }
    }

    fun Delete(cardId:Int){
        val db = Room.databaseBuilder(
            applicationContext,CardDatabase::class.java, "card.db"
        ).allowMainThreadQueries().build()
        var ar = intArrayOf(cardId)
        var L = db.cardDao().loadAllByIds(ar)
        db.cardDao().delete(L[0])
        db.close()
    }

    fun LoadTheme(){
        val Themes = arrayOf(R.color.white,R.color.black)
        val ButtonBackgroundThemes = arrayOf(R.drawable.button_border_light, R.drawable.button_border_dark)
        val ThemeId = LoginActivity.Companion.UserTheme
        if(ThemeId != 0){
            createcard_button.background = resources.getDrawable(ButtonBackgroundThemes[ThemeId])
            createcard_button.setTextColor(resources.getColor(Themes[ThemeId-1]))
            card_layout_parent.background = resources.getDrawable(Themes[ThemeId])
        }
    }

    fun ProcessPermissions(){
        if (checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) ==
            PackageManager.PERMISSION_DENIED
        ) {

            val permissions = arrayOf(Manifest.permission.READ_EXTERNAL_STORAGE)

            requestPermissions(permissions, PERMISSION_CODE)
        } else {

          HasPermission = true
        }
    }

    fun SelectLogo(view:View) {
        if (HasPermission) {
            val intent = Intent(Intent.ACTION_PICK)
            intent.type = "image/*"
            startActivityForResult(intent, IMAGE_PICK_CODE)
        }else{
            Toast.makeText(this,getString(R.string.no_permission_error),Toast.LENGTH_LONG).show()
        }
    }
    fun StoreLogo(){
        var bitmap = MediaStore.Images.Media.getBitmap(this.contentResolver, LogoUri)
        val maxSize = 400

        val bitmapOriginalWidth = bitmap.width
        val bitmapOriginalHeight = bitmap.height
        var newWidth = 0
        var newHeight = 0
        var bitmapRatio:Float
        if(bitmapOriginalWidth >= bitmapOriginalHeight){
            bitmapRatio = bitmapOriginalWidth.toFloat()/ bitmapOriginalHeight.toFloat()
            newWidth = maxSize
            newHeight = Math.round(maxSize/bitmapRatio)
        }else{
            bitmapRatio = bitmapOriginalHeight.toFloat()/bitmapOriginalWidth.toFloat()
            newWidth = Math.round(maxSize/bitmapRatio)
            newHeight = maxSize

        }

        bitmap = Bitmap.createScaledBitmap(bitmap, newWidth,newHeight, false)



        val dir = File(applicationContext.filesDir,"/Logos")
        dir.mkdirs()
        var logoFile = File(dir,"logo_1.png")
        var FoundNewName = false
        var Counter = 2
        var str:String = "logo_1.png"
        while(!FoundNewName) {
            if (logoFile.exists()) {
                 str = "logo_" + Counter +".png"
                logoFile = File(dir,str)
                Counter++
            }else{
                FoundNewName = true
            }
        }
        val output = FileOutputStream(logoFile)
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, output)
        output.flush()
        output.close()
        val Path = File(applicationContext.filesDir,"/Logos/"+str)
        LogoUri = FileProvider.getUriForFile(applicationContext,BuildConfig.APPLICATION_ID+".provider",Path)
    }


}
