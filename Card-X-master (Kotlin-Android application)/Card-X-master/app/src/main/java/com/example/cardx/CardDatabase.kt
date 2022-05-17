package com.example.cardx

import androidx.room.Database
import androidx.room.RoomDatabase

@Database(entities = arrayOf(Card::class), version = 1, exportSchema = false)
abstract class CardDatabase : RoomDatabase() {
    abstract fun cardDao(): CardDao
}