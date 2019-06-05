def almightyFormula(a, b, c):
    discriminant = b**2 - 4*a*c
    print(discriminant)
    #if discriminant > 0:
    return [(-b + discriminant**.5)/2*a,
                (-b - discriminant**.5)/2*a]
    #else:
      #  return "Not a Number"
    
print(almightyFormula(1, 6, 9))