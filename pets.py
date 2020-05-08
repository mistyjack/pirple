class Pet:
    def __init__(self, name, age, hunger, playful):
        self.name = name
        self.age = age
        self.hunger = hunger
        self.playful = playful

    #getters
    def getName(self):
        return self.name

    def getAge(self):
        return self.age

    def getHunger(self):
        return self.hunger

    def getPlayful(self):
        return self.playful
    
    #setters
    def setName(self, name):
        self.name = name

    def setAge(self, age):
        self.age = age
    
    def setHunger(self, hunger):
        self.hunger = hunger

    def setPlayful(self, playful):
        self.playful = playful

    def __str__(self):
        return (self.name + " is " + str(self.age) + " years old")


Pet1 = Pet("Jim", 3, False, True)


class Dog(Pet):
    def __init__(self, name, age, hunger, playful, breed, favoriteToy):
        Pet.__init__(self, name, age, hunger, playful)
        self.breed = breed
        self.favoriteToy = favoriteToy

    def wantsToPlay(self):
        if self.playful == True:
            return ("Dog wants to play with " + self.favoriteToy)
        else:
            return ("Dog doesn't want to play")

class Cat(Pet):
    def __init__(self, name, age, hunger, playful, place):
        Pet.__init__(self, name, age, hunger, playful)
        self.favoritePlaceToSit  = place

    def wantsToSit(self):
        if self.playful == False:
            print("The cat wants to sit in ", self.favoritePlaceToSit)
        else:
            print("The cat wants to play")

    def __str__(self):
        return (self.name + " likes to sit in " + self.favoritePlaceToSit)


class Human:
    def __init__(self, name, pets):
        self.name = name
        self.pets = pets

    def hasPets(self):
        if len(self.pets) != 0:
            return "yes"
        else:
            return "no"

huskyDog = Dog("Snowball", 5, False, True, "Husky", "Stick")

Play = huskyDog.wantsToPlay()

print(Play)

huskyDog.playful = False

Play = huskyDog.wantsToPlay()

print(Play)

typicalCat = Cat("Fluffy", 3, False, False, "the sun ray")

typicalCat.wantsToSit()

typicalCat.playful = True

typicalCat.wantsToSit()

print(typicalCat)

print(huskyDog)

yourAverageHuman = Human("Alice", [huskyDog, typicalCat])

hasPet = yourAverageHuman.hasPets()

print(hasPet)
print(yourAverageHuman.pets[0].name)