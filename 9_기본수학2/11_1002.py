import sys

t = int(sys.stdin.readline())

for i in range(t):
    x1, y1, r1, x2, y2, r2 = map(int, sys.stdin.readline().split())

    d = ((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))**0.5

    if d != 0:
        if abs(r2-r1)==d or (r1+r2)==d:
            print(1)
        elif (r1+r2)>d and abs(r1-r2)<d:
            print(2)
        else:
            print(0)
    else:
        if r1==r2:
            print(-1)
        else:
            print(0)
