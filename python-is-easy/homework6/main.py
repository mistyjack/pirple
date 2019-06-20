# f = 1
# A = [[1,2,3], [2,3,4], [3,4,5]]
# for i in range(0, 3):
#     f = f*i
#     for j in range(0, 3):
#         A[i][j] = f
# print(A)

# Length = 3
# ToPrint = "a"
# for pos in range(1, Length + 1):
#     print(ToPrint*pos)
# for pos in range(Length-1, 0, -1):
#     print(ToPrint*pos)

# Create a function that takes in two parameters: rows, and columns(ints)
# Function should draw a playing board
# Determine the max width and height this terminal and screen can
# comfortably fit without wrapping and return false if rows/cols is more

def checkEven(num):
    if num % 2 == 0:
        return True
    else:
        return False

def drawBoard(rows, columns):
    for row in range(rows):
        if  not checkEven(rows) and not checkEven(columns):
            if row % 2 == 0:
                for column in range(columns):
                    if column % 2 == 0:
                        if column != columns - 1:
                            print(" ", end="")
                        else:
                            print(" ")
                    else:
                        print("|", end="")
            else:
                for dash in range(columns):
                    if dash != columns - 1:
                        print("-", end="")
                    else:
                        print("-")
        elif checkEven(rows) and checkEven(columns):
            if row % 2 == 0:
                for column in range(1, columns+2):
                    if column % 2 == 1:
                        if column != columns+1:
                            print(" ", end="")
                        else:
                            print(" ")
                    else:
                        print("|", end="")
            else:
                for dash in range(columns+1):
                    if dash != columns:
                        print("-", end="")
                    else:
                        print("-")
        


# def terminal_size():
#     import fcntl, termios, struct
#     th, tw, hp, wp = struct.unpack('HHHH',
#         fcntl.ioctl(0, termios.TIOCGWINSZ,
#         struct.pack('HHHH', 0, 0, 0, 0)))
#     return th, tw

# a = terminal_size()
drawBoard(5,5)

# if even, odd, excess dash line at end
# if odd, even, not aligned as a result of end=""
# 


