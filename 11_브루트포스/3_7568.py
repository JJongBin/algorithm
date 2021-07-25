import sys

n = int(sys.stdin.readline())

p = []
s = [1 for i in range(n)]
for i in range(n):
    p.append(list(map(int, sys.stdin.readline().split())))


for i in range(len(p)):
    for compare in p:
        if p[i][0] < compare[0] and p[i][1] < compare[1]:
            if p[i][0] != compare[0] or p[i][1] != compare[1]:
                s[i] += 1

print(" ".join(map(str, s)))
