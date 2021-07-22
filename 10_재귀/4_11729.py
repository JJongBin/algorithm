import sys

n = int(sys.stdin.readline())

def move(n ,a, b, c):
    if n == 1:
        print(a, c)
        return

    move(n-1, a, c, b)
    print(a, c)
    move(n-1, b, a, c)

print(2**n-1)
move(n, 1 ,2 ,3)







