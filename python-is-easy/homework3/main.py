def isEqual(x, y, z):
    x = int(x)
    y = int(y)
    z = int(z)
    
    if (x == y and y == z):
        return True
    elif (x == y or x == z or y == z):
        return True
    else:
        return False
        
print(isEqual("3", "4", 4))