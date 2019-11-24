"""
This file contains code that makes creating a note possible using
file writing and reading feature of python. 
"""

import os.path as PATH

def writeNewFile(name, text):
    newFile = open(name, "w")
    newFile.write(text + "\n")
    newFile.close()
    
def readFile(name):
    existingFile = open(name, "r")
    print(existingFile.read())
    existingFile.close()
    
def appendFile(name, text):
    existingFile = open(name, "a")
    existingFile.write(text + "\n")
    existingFile.close()

def writeLine(name, lineNumber, text):
    existingFile = open(name, "r")
    existingData = existingFile.readlines()
 
    existingData[int(lineNumber) - 1] = text + "\n"
    existingFile = open(name, "w")
    existingFile.writelines(existingData)
    existingFile.close()
    
# files = []

while True:
    filename = input("Enter the title of your note: ")
    if PATH.isfile(filename):
        userInput = input("Press r to read, n to overwrite, l to overwrite a line and a to append to file: ").upper()
        if userInput == "R":
            readFile(filename)
        elif userInput == "N":
            textContent = input("Enter text to be overwritten in your new file: ")
            writeNewFile(filename, textContent)
        elif userInput == "A":
            textContent = input("Enter text to be appended in your new file: ")
            appendFile(filename, textContent)
        elif userInput == "L":
            lineNum = input("What line do you wanna overwrite? ")
            lineContent = input("Enter text")
            writeLine(filename, lineNum, lineContent)
    else:
        textContent = input("Enter text to be written in your new file: ")
        writeNewFile(filename, textContent)

# readFile(input("What file do you wanna read? "))