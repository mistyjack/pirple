from random import random
from time import time

randVal = random()

upper = 1.0
lower = 0.0

startTime = time()

while(True):
    guess = (upper + lower)/2
    if guess == randVal:
        break
    elif guess < randVal:
        lower = guess
    else:
        upper = guess

endTime = time()

print(guess)
print("It took us:", endTime-startTime, "seconds")
