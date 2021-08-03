import sys

n = int(sys.stdin.readline())

x = list(map(int, sys.stdin.readline().split()))

sort_x = sorted(set(x))

dict_x = {sort_x[i]: i for i in range(len(sort_x))}
for i in x:
    print(dict_x[i], end=" ")