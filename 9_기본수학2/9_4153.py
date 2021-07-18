import sys
while True:
    l = list(map(int, sys.stdin.readline().split()))
    if l == [0, 0, 0]:
        break

    m = max(l)
    sum = 0
    for i in l:
        if i == m:
            m = i**2
        else:
            sum += i**2

    if sum == m:
        print("right")
    else:
        print("wrong")

