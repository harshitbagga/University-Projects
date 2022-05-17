package com.example.cardx

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query

@Dao
interface CardDao {
    @Query("SELECT * FROM card")
    fun getAll(): List<Card>

    @Query("SELECT * FROM card WHERE Id IN (:cardIds)")
    fun loadAllByIds(cardIds: IntArray): List<Card>

    @Query("SELECT * FROM card WHERE owner_id LIKE :OwnerId")
    fun loadAllByOwnerIds(OwnerId: Array<String>): List<Card>

    @Query("SELECT * FROM card WHERE business_title LIKE :BusinessTitle AND " +
            "owner_name LIKE :OwnerName LIMIT 1")
    fun findByName(BusinessTitle: String, OwnerName: String): Card

    @Query("SELECT COUNT(Id) FROM Card")
    fun getCount():Int

    @Insert
    fun insertAll(vararg cards: Card)

    @Delete
    fun delete(card: Card)
}