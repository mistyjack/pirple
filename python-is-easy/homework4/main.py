"""
    This file contains code that adds a new item to an
    existing list
"""

# Create the global list called myUniqueList
myUniqueList = []
myLeftovers = []

# Create a function that makes it possible to add list items
def addNewItem(item, mainList, otherList):
    # Does item exists? no, add to global list and return true
    if item not in mainList:
        mainList.append(item)
        print("Item added to unique list")
        return True
    
    # Exists? add to leftover list and return false
    else:
        otherList.append(item)
        print("Item added to leftover list")
        return False
# End of function

# Test 
addNewItem("hello", myUniqueList, myLeftovers)
addNewItem("hi", myUniqueList, myLeftovers)
addNewItem("hello", myUniqueList, myLeftovers)
addNewItem("hello", myUniqueList, myLeftovers)
addNewItem(15, myUniqueList, myLeftovers)
print(myUniqueList)