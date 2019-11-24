# Create a function that takes in two parameters: rows, and columns(ints)
# Function should draw a playing board
# Determine the max width and height this terminal and screen can
# comfortably fit without wrapping and return false if rows/cols is more
def terminal_size():
    import fcntl, termios, struct
    h, w, hp, wp = struct.unpack('HHHH',
        fcntl.ioctl(0, termios.TIOCGWINSZ,
        struct.pack('HHHH', 0, 0, 0, 0)))
    return [w, h]

def drawBoard(rows, columns):
    if terminal_size()[0] > rows and terminal_size()[1] > columns:
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
        return True
    else:
        return False


print(drawBoard(11,11))

print(drawBoard(5,17))


