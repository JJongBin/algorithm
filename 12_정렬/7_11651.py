import sys

n = int(sys.stdin.readline())
l = []
for i in range(n):
    x, y = map(int, sys.stdin.readline().split())
    l.append([y, x])
sort_l = sorted(l)


for i in sort_l:
    print(i[1], i[0])
