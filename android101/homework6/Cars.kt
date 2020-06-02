package com.example.homework1

class Cars(make: String, model: String, year: Int, weight: Float) : Vehicle(make, model, year, weight) {

    var isDriving: Boolean = false


    fun drive() {
        this.isDriving = true
    }

    fun stop() {
        this.isDriving = false
        this.tripsSinceMaintenance += 1
        if(this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true
        }
    }
}