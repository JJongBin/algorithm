import sys

n, m = map(int, sys.stdin.readline().split())
num = m
result = []
def f(start, m, n):
    if m == 0:
        print(" ".join(map(str, result)))
        return
    else:
        for i in range(start, n+1):
            result.append(i)
            f(i, m-1, n)
            result.pop()
            

f(1, m, n)

