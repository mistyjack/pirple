"""
    A program that prints the numbers from 1 to 100.
    For mulitples of three, it prints "Fizz instead of the number
    and for the multiples of five it prints "Buzz".
"""

# Print all numbers from 1 to 100
# Multiples of three should print "fizz" instead of the number
# Multiples of five should print "buzz" instead of the number
# Multiples of bothe five and three should print "fizzbuzz"
# Prime numbers should print "prime"


def checkPrime(number):
    for i in range(2, number):
        if number % i == 0:
            return False
    return True
    
for i in range(1, 101):
    if i == 1:
        print("1 is neither odd, even nor prime")
    elif checkPrime(i):
        print("prime")
    elif i % 3 == 0 and i % 5 == 0:
        print("fizzbuzz")
    elif i % 3 == 0:
        print("fizz")
    elif i % 5 == 0:
        print("buzz")
    else:
        print(i)