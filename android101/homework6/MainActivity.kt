package com.example.homework1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var toyotaCamry : Cars = Cars("Toyota", "Camry", 2020, 1514.999f)
        var toyotaCorolla : Cars = Cars("Toyota", "Corolla", 2020,
            1340.365f)
        var toyotaYaris : Cars = Cars("Toyota", "Yaris", 2017, 1055.0f)

        for (i in 0 until 50) {
            toyotaCamry.drive()
            toyotaCamry.stop()
        }
        for (i in 0 until 101) {
            toyotaCorolla.drive()
            toyotaCorolla.stop()
        }
        for (i in 0 until 2) {
            toyotaYaris.drive()
            toyotaYaris.stop()
        }
        var toyotaCamryStatus : String = "make: " + toyotaCamry.make + " model: " +
                toyotaCamry.model + " year: " + toyotaCamry.year.toString() + " weight: " +
                toyotaCamry.make.toString() + " needsMaintenance: " +
                toyotaCamry.needsMaintenance.toString() + " tripsSinceMaintenance: " +
                toyotaCamry.tripsSinceMaintenance.toString()
        var toyotaCorollaStatus : String = "make: " + toyotaCorolla.make + " model: " +
                toyotaCorolla.model + " year: " + toyotaCorolla.year.toString() + " weight: " +
                toyotaCorolla.make.toString() + " needsMaintenance: " +
                toyotaCorolla.needsMaintenance.toString() + " tripsSinceMaintenance: " +
                toyotaCorolla.tripsSinceMaintenance.toString()
        var toyotaYarisStatus : String = "make: " + toyotaYaris.make + " model: " +
                toyotaYaris.model + " year: " + toyotaYaris.year.toString() + " weight: " +
                toyotaYaris.make.toString() + " needsMaintenance: " +
                toyotaYaris.needsMaintenance.toString() + " tripsSinceMaintenance: " +
                toyotaYaris.tripsSinceMaintenance.toString()

        Log.d("MainActivity", toyotaCamryStatus)
        Log.d("MainActivity", toyotaCorollaStatus)
        Log.d("MainActivity", toyotaYarisStatus)

        var boeing : Planes = Planes("Boeing", "t-43", 2020, 27311.0f)
        var boeingStatus : String = "make: " + boeing.make + " model: " +
                boeing.model + " year: " + boeing.year.toString() + " weight: " +
                boeing.make.toString() + " needsMaintenance: " +
                boeing.needsMaintenance.toString() + " tripsSinceMaintenance: " +
                boeing.tripsSinceMaintenance.toString()

        Log.d("MainActivity", boeingStatus)
    }
}
