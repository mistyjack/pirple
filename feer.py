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


# a=float(input("give me a number: "))
# b=float(input("give me a number: "))
# c=float(input("give me a number: "))
  

# #Function that accepts a list and returns its square
# def returnSquare(list):
#     newList = []
#     for item in list:
#         newList.append(item**2)
#     return newList
    
# # Testing the function  
# newerList = returnSquare([1,2,3,4])
# print(newerList)


# # Function accepts three constants of quadratic expression and returns a list roots
# def solveQuadratic(a, b, c):
#     discriminant = b**2 - 4*a*c
#     if discriminant >= 0:
#         return [(-b + discriminant**.5)/2, (-b - discriminant**.5)/2]
#     else:
#         return False;

# # Testing as required
# a = int(input("Value of a: "))
# b = int(input("Value of b: "))
# c = int(input("Value of c: "))

# results = solveQuadratic(a, b, c)
# if(results):
#     if results[0] == results[1]:
#         print("There is only one root and it is " + str(results[0]))
#     else:
#         print("There are two results and they are " + str(results[0]) + " " + str(results[1]))
# else:
#     print("Result isn't a real number")


# # swap function
# def swap(A, B):
#     container = A
#     A = B
#     B = container
#     print("A = " + str(A) + " and B = " + str(B))

# # Testing swap function   
# swap(10, 12)


# def arrangeThree(a, b, c):
#     num = [a, b, c]
#     num.sort()
#     print(num[0], num[1], num[2])

# a = int(input("Integer 1: "))
# b = int(input("Integer 2: "))
# c = int(input("Integer 3: "))
# arrangeThree(a, b, c)


# def grade(score):
#     if score >= 70:
#         return "A"
#     elif score >= 60 and score < 70:
#         return "B"
#     elif score >= 50 and score < 60:
#         return "C"
#     elif score >= 45 and score < 50:
#         return "D"
#     elif score >= 40 and score < 45:
#         return "B"
#     elif score >= 0 and score < 39:
#         return "F"
#     else:
#         return False

# a = int(input("Input your score: "))
# result = grade(a)
# if result:
#     print("Your grade is " + result)
# else:
#     print("Input a positive integer")

def area(a, b, c):
    s=0.5*(a+b+c)
    return (s*(s-a)*(s-b)*(s-c))**0.5

def checkTri(a, b, c):
    return a>0 and b>0 and c>0 and a+b>c and a+c>b and b+c>a

a = int(input("Integer 1: "))
b = int(input("Integer 2: "))
c = int(input("Integer 3: "))

if checkTri(a, b, c):
     print(area(a,b,c))
else:
     print("pls gimme valid numbers that forms a triangle!")