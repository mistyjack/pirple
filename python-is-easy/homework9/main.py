# Homework Assigmnet #9
class Vehicle:
    def __init__(self, make, model, year, weight, NeedsMaintenance=False, TripsSinceMaintenance=0):
        self.make = make
        self.model = model
        self.year = year
        self.weight = weight
        self.NeedsMaintenance = NeedsMaintenance
        self.TripsSinceMaintenance = TripsSinceMaintenance

    def setMake(self, make):
        self.make = make
    
    def setModel(self, model):
        self.model = model

    def setYear(self, year):
        self.year = year

    def setWeight(self, weight):
        self.weight = weight


class Cars(Vehicle):
    def __init__(self, make, model, year, weight, NeedsMaintenance=False, TripsSinceMaintenance=0, isDriving=False):
        Vehicle.__init__(self, make, model, year, weight, NeedsMaintenance, TripsSinceMaintenance)
        self.isDriving = isDriving

    def Drive(self):
        self.isDriving = True
        if self.TripsSinceMaintenance <= 100:
            self.TripsSinceMaintenance += 1
        else:
            self.NeedsMaintenance = True

    def Stop(self):
        self.isDriving = False

    def Repair(self):
        self.TripsSinceMaintenance = 0
        self.NeedsMaintenance = False

class Planes(Vehicle):
    def __init__(self, make, model, year, weight, NeedsMaintenance=False, TripsSinceMaintenance=0, isFlying=False):
        Vehicle.__init__(self, make, model, year, weight, NeedsMaintenance, TripsSinceMaintenance)
        self.isFlying = isFlying

    def Fly(self):
        self.isFlying = True
        if self.TripsSinceMaintenance <= 100:
            self.TripsSinceMaintenance += 1
        else:
            print("The plane can't fly until it's repaired")
            return False

    def Land(self):
        self.isFlying = False

car1 = Cars("Lamborghini", "Aventador", "2017", "1575kg")
car2 = Cars("Ferrari", "LaFerrari", "2018", "1255kg")
car3 = Cars("Toyota", "Camry", "2020", "1486kg")
plane1 = Planes("Boeing", "737", "1967", "80,000kg")

for i in range(102):
    car1.Drive()
for j in range(50):
    car2.Drive()
for k in range(10):
    car3.Drive()
for l in range(100):
    plane1.Fly()

print("Car 1: " + car1.make + " " + car1.model + ", " + car1.year + " model, " + car1.weight + ", " + str(car1.NeedsMaintenance) + " (that is, it needs maintenance), " + str(car1.TripsSinceMaintenance) + " trips")

print("Car 2: " + car2.make + " " + car2.model + ", " + car2.year + " model, " + car2.weight + ", " + str(car2.NeedsMaintenance) + " (that is, it doesn't need maintenance), " + str(car2.TripsSinceMaintenance) + " trips")

print("Car 3: " + car3.make + " " + car3.model + ", " + car3.year + " model, " + car3.weight + ", " + str(car3.NeedsMaintenance) + " (that is, it doesn't need maintenance), " + str(car3.TripsSinceMaintenance) + " trips")

print("Plane 1: " + plane1.make + " " + plane1.model + ", " + plane1.year + " model, " + plane1.weight + ", " + str(plane1.NeedsMaintenance) + " (that is, it doesn't need maintenance), " + str(plane1.TripsSinceMaintenance) + " trips")

plane1.Fly()
plane1.Fly()