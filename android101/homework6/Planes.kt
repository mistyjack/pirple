package com.example.homework1

import android.util.Log

class Planes(make: String, model: String, year: Int, weight: Float) : Vehicle(make, model, year, weight) {
    var isFlying: Boolean = false

    fun fly() : Boolean {
        if (this.needsMaintenance) {
            Log.d("MainActivity", "Plane can't fly until it's repaired")
            return false
        } else {
            this.isFlying = true
            return true
        }
    }

    fun land() {
        this.isFlying = false
        this.tripsSinceMaintenance += 1
        if(this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true
        }
    }
}