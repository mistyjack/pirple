"""
This file contain code for connect4 game



"""


def DrawBoard(game):
    for row in range(12):
        if row % 2 == 0:
            for column in range(13):
                if(column) % 2 == 1:
                    print("|", end="")
                else:
                    gameColumn = game[int(row/2)][int(column/2)]
                    if(column) == 12:
                        print(gameColumn)
                    else:
                        print(gameColumn, end="")
        else:
            print("--------------")

currentBoard = [[" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "]]
    
Player = 1
counter = 0
playInstruction = "Choose a column to play: "
playInstructionEdit = "Choose another column"
DrawBoard(currentBoard)


trackBoard = {
    "one": 5,
    "two": 5,
    "three": 5,
    "four": 5,
    "five": 5,
    "six": 5,
    "seven": 5
}

def checkNorth(cr, cc, bd):   #cc = current row and cr = current column and bd = board
    if bd[cr][cc] == bd[cr-1][cc] and bd[cr-1][cc] == bd[cr-2][cc] and bd[cr-2][cc] == bd[cr-3][cc]:
        return True
def checkSouth(cr, cc, bd):
    if bd[cr][cc] == bd[cr+1][cc] and bd[cr+1][cc] == bd[cr+2][cc] and bd[cr+2][cc] == bd[cr+3][cc]:
        return True
def checkEast(cr, cc, bd):
    if bd[cr][cc] == bd[cr][cc+1] and bd[cr][cc+1] == bd[cr][cc+2] and bd[cr][cc+2] == bd[cr][cc+3]:
        return True
def checkWest(cr, cc, bd):
    if bd[cr][cc] == bd[cr][cc-1] and bd[cr][cc-1] == bd[cr][cc-2] and bd[cr][cc-2] == bd[cr][cc-3]:
        return True
def checkNorthEast(cr, cc, bd):
    if bd[cr][cc] == bd[cr-1][cc+1] and bd[cr-1][cc+1] == bd[cr-2][cc+2] and bd[cr-2][cc+2] == bd[cr-3][cc+3]:
        return True
def checkNorthWest(cr, cc, bd):
    if bd[cr][cc] == bd[cr-1][cc-1] and bd[cr-1][cc-1] == bd[cr-2][cc-2] and bd[cr-2][cc-2] == bd[cr-3][cc-3]:
        return True
def checkSouthWest(cr, cc, bd):
    if bd[cr][cc] == bd[cr+1][cc-1] and bd[cr+1][cc-1] == bd[cr+2][cc-2] and bd[cr+2][cc-2] == bd[cr+3][cc-3]:
        return True
def checkSouthEast(cr, cc, bd):
    if bd[cr][cc] == bd[cr+1][cc+1] and bd[cr+1][cc+1] == bd[cr+2][cc+2] and bd[cr+2][cc+2] == bd[cr+3][cc+3]:
        return True
        
def checkWin(CR, CC, BD):
    if CR <= 2 and CC == 3:
        return checkSouth(CR, CC, BD) or checkEast(CR, CC, BD) or checkWest(CR,
                CC, BD) or checkSouthEast(CR, CC,
                BD) or checkSouthWest(CR, CC, BD)
    elif (CR >= 3 and CC == 3) :
        return checkNorth(CR, CC, BD) or checkEast(CR, CC, BD) or checkWest(CR,
                CC, BD) or checkNorthEast(CR, CC,
                BD) or checkNorthWest(CR, CC, BD)
    elif CR <= 2 and CC < 3:
        return checkEast(CR, CC, BD) or checkSouth(CR, CC,
                BD) or checkSouthEast(CR, CC, BD)
    elif CR >= 3 and CC < 3:
        return checkEast(CR, CC, BD) or checkNorth(CR, CC,
                BD) or checkNorthEast(CR, CC, BD)
    elif CR <= 2 and CC > 3:
        return checkWest(CR, CC, BD) or checkSouth(CR, CC,
                BD) or checkSouthWest(CR, CC, BD)
    elif CR >= 3 and CC > 3:
        return checkWest(CR, CC, BD) or checkNorth(CR, CC,
                BD) or checkNorthWest(CR, CC, BD)

def playRound(currentColumn, player):
    if currentColumn == 1:
        if trackBoard["one"] >= 0:
            currentBoard[trackBoard["one"]][0] = player
            trackBoard["one"] -= 1
            return trackBoard["one"] + 1
        else:
            print(playInstructionEdit)
    if currentColumn == 2:
        if trackBoard["two"] >= 0:
            currentBoard[trackBoard["two"]][1] = player
            trackBoard["two"] -= 1
            return trackBoard["two"] + 1
        else:
            print(playInstructionEdit)
    if currentColumn == 3:
        if trackBoard["three"] >= 0:
            currentBoard[trackBoard["three"]][2] = player
            trackBoard["three"] -= 1
            return trackBoard["three"] + 1
        else:
            print(playInstructionEdit)
    if currentColumn == 4:
        if trackBoard["four"] >= 0:
            currentBoard[trackBoard["four"]][3] = player
            trackBoard["four"] -= 1
            return trackBoard["four"] + 1
        else:
            print(playInstructionEdit)
    if currentColumn == 5:
        if trackBoard["five"] >= 0:
            currentBoard[trackBoard["five"]][4] = player
            trackBoard["five"] -= 1
            return trackBoard["five"] + 1
        else:
            print(playInstructionEdit)
    if currentColumn == 6:
        if trackBoard["six"] >= 0:
            currentBoard[trackBoard["six"]][5] = player
            trackBoard["six"] -= 1
            return trackBoard["six"] + 1
        else:
            print(playInstructionEdit)
    if currentColumn == 7:
        if trackBoard["seven"] >= 0:
            currentBoard[trackBoard["seven"]][6] = player
            trackBoard["seven"] -= 1
            return trackBoard["seven"] + 1
        else:
            print(playInstructionEdit)

while(counter < 43):
    if Player == 1:
        print("Player 1 turn")
        column = int(input(playInstruction))
        currentRound = playRound(column, "x")
        
        if currentRound:
            Player = 2
            counter += 1
            if checkWin(int(currentRound), column-1, currentBoard):
                print("Player 1 Wins")
                DrawBoard(currentBoard)
                break
            if counter == 41:
                print("The game was a draw")
            DrawBoard(currentBoard)
    else:
        print("Player 2 turn")
        column = int(input(playInstruction))
        currentRound = playRound(column, "o")
        
        if currentRound:
            Player = 1
            counter += 1
            if checkWin(int(currentRound), column-1, currentBoard):
                print("Player 2 Wins")
                DrawBoard(currentBoard)
                break
            if counter == 42:
                print("The game was a draw")
            DrawBoard(currentBoard)