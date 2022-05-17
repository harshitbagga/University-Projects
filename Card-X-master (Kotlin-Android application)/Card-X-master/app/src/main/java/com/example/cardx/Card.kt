package com.example.cardx

import android.net.Uri
import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Card (val bL:String?,val bG:Int?, val oN:String?, val bT:String?, val oS:String?, val bP_1:String?, val bP_2:String?,val bP_3:String?, val bE:String?, val bMA:String?, val bA:String?, val bC:String?, val oI:String){
    @PrimaryKey(autoGenerate = true)
    var Id: Int = 0

    @ColumnInfo(name = "business_logo")
    var BusinessLogo: String? = bL

    @ColumnInfo(name = "background")
    var Background: Int? = bG

    @ColumnInfo(name = "owner_name")
    var OwnerName: String? = oN
    @ColumnInfo(name = "business_title")
    var BusinessTitle: String? = bT

    @ColumnInfo(name = "owner_speciality")
    var OwnerSpeciality: String? = oS

    @ColumnInfo(name = "business_phone_1")
    var BusinessPhone_1: String? = bP_1

    @ColumnInfo(name = "business_phone_2")
    var BusinessPhone_2: String? = bP_2

    @ColumnInfo(name = "business_phone_3")
    var BusinessPhone_3: String? = bP_3

    @ColumnInfo(name = "business_email")
    var BusinessEmail: String? = bE

    @ColumnInfo(name = "business_mail_address")
    var BusinessMailAddress: String? = bMA

    @ColumnInfo(name = "business_address")
    var BusinessAddress: String? = bA

    @ColumnInfo(name = "business_category")
    var BusinessCategory: String? = bC

    @ColumnInfo(name = "owner_id")
    var OwnerId: String = oI

}
