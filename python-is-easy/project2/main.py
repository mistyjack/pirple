# Prompt player "a" to pick a word and store it in a variable, proper nouns and slangs are not allowed
#wordToGuess = input("Pick your word: ")
# Clear the screen so that player "b" can't see the chosen word.
#print(chr(27) + "[2J")
# Draw gallows and emply letter spaces
# Let player "b" guess any letter
# Check for correctness of the letter and implement the necessary actions
  ## If letter is correct, fill all spaces that corresponds to the letter
  ## If letter is wrong, draw a part of the hanger man
# If all letters are filled before the hanger man is completely drawn, player "b" wins
# If the hanger man is completed before the letters are filled, player "a" wins

def drawGame(winner, loser, noOfTrials, guessExceeded):
  import turtle
  endStatement = ""
  if guessExceeded:
    endStatement = "Guesses exceeded! " + loser + " lost to " + winner + "."
  else:
    endStatement = winner + " won after " + str(noOfTrials) + " trials."

  turtle.Screen()
  turtle.title("Hangerman")
  turtle.penup()
  turtle.goto(-200, -250)
  turtle.write(endStatement, font=("Arial", 18, "bold"))
  turtle.goto(-100,-150)
  turtle.pendown()
  turtle.forward(200)
  turtle.backward(100)
  turtle.left(90)
  turtle.forward(250)
  turtle.left(90)
  turtle.forward(150)
  turtle.left(90)
  turtle.forward(20)
  turtle.penup()
  turtle.goto(-170,60)
  turtle.pendown()
  turtle.circle(20)
  turtle.penup()
  turtle.goto(-150,40)
  turtle.pendown()
  turtle.forward(120)
  turtle.backward(90)
  turtle.left(45)
  turtle.forward(40)
  turtle.backward(40)
  turtle.right(90)
  turtle.forward(40)
  turtle.backward(40)
  turtle.left(45)
  turtle.forward(90)
  turtle.left(45)
  turtle.forward(40)
  turtle.backward(40)
  turtle.right(90)
  turtle.forward(40)
  turtle.backward(40)
  turtle.hideturtle()
  turtle.mainloop()
  return
     

drawGame("Misty", "Jack", "three", False)