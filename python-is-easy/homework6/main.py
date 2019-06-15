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

def drawBoard(rows, columns):
    for row in range(rows):
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
        
drawBoard(21,41)

def terminal_size():
    import fcntl, termios, struct
    th, tw, hp, wp = struct.unpack('HHHH',
        fcntl.ioctl(0, termios.TIOCGWINSZ,
        struct.pack('HHHH', 0, 0, 0, 0)))
    return tw, th

print('Number of columns and Rows: ',terminal_size())
