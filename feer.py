# # read value of t
# t = int(input("Give me a value of t: "))

# # produce y(t)
# def func(t):
#     if t < 0:
#         return -3*t**2 + 3*t -5
#     elif t == 0:
#         return 3*t**2 - 3*t + 5
#     else:
#          return 3*t**2 - 3*t - 5
         
         
# # generate the value of t between -9 and 91 in steps of 3
# print("The result of func(", t, ") is", func(t))

# counter = -9
# while counter <= 91:
#     result = func(counter)
#     print("The result of func(", counter, ") is", result)
#     counter += 3


a=float(input("give me a number: "))
b=float(input("give me a number: "))
c=float(input("give me a number: "))

def area(a, b, c):
    s=0.5*(a+b+c)
    return (s*(s-a)*(s-b)*(s-c))**0.5
  
def checkTri(a, b, c):
    return a>0 and b>0 and c>0 and a+b>c and a+c>b and b+c>a

if checkTri(a, b, c):
     print(area(a,b,c))
else:
     print("pls gimme  valid numbers")