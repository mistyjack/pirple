package com.example.homework1

open class Vehicle(var make: String, var model: String, var year: Int, var weight: Float) {
    var needsMaintenance: Boolean = false
    var tripsSinceMaintenance: Int = 0

    constructor(make: String, model: String, year: Int, weight: Float, needsMaintenance: Boolean, tripsSinceMaintenance: Int) : this(make, model, year, weight) {
        this.needsMaintenance = needsMaintenance
        this.tripsSinceMaintenance = tripsSinceMaintenance
    }

    fun repair() {
        this.tripsSinceMaintenance = 0
        this.needsMaintenance = false
    }
}