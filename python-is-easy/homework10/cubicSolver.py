# This program solves cubic equations using Cardano's Formula

from math import pow, cos, sin
from cmath import polar, sqrt

# Function that raise complex numbers to the power of n
def complexPower(real, imaginary, power):
    r = polar(complex(real, imaginary))[0]
    phi = polar(complex(real, imaginary))[1]
    return complex((pow(r, power) * (cos(phi/power**-1))), (pow(r, power**-1) * (sin(phi/power**-1))))

# Prompting user for input
print("General form = ax^3 + bx^2 + cx +d")
a = float(input("Enter the value of a: "))
b = float(input("Enter the value of b: "))
c = float(input("Enter the value of c: "))
d = float(input("Enter the value of d: "))

# Evaluate the values of Q, R, S and T
Q = (3*a*c - b**2)/(9*a**2)
R = (9*a*b*c - 27*a**2*d - 2*pow(b, 3))/(54*pow(a, 3))

sDeterminant = R + sqrt(pow(Q, 3) + R**2)
tDeterminant = R - sqrt(pow(Q, 3) + R**2)
SR = polar(sDeterminant)[0]
SPhi = polar(sDeterminant)[1]
TR = polar(tDeterminant)[0]
TPhi = polar(tDeterminant)[1]
S = complexPower(SR*cos(SPhi), SR*sin(SPhi), 1/3)
T = complexPower(TR*cos(TPhi), TR*sin(TPhi), 1/3)

# Evaluate the values of x
x_one = S + T - (b/3*a)
x_two = -(S + T)/2 - (b/3*a) +  (S - T) * complex(0, (3**0.5)/2)
x_three = -(S + T)/2 - (b/3*a) -  (S - T) * complex(0, (3**0.5)/2)

# If value of x isn't complex, change format to non complex number
if sin(polar(x_one)[1]) < 0.00001:
    x_one = polar(x_one)[0] * cos(polar(x_one)[1])
if sin(polar(x_two)[1]) < 0.00001:
    x_two = polar(x_two)[0] * cos(polar(x_two)[1])
if sin(polar(x_three)[1]) < 0.00001:
    x_three = polar(x_three)[0] * cos(polar(x_three)[1])

# Print final answer
print(x_one, x_two, x_three)