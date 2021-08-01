import sys

n = int(sys.stdin.readline())

l = []
for i in range(n):
    age, name = sys.stdin.readline().split()
    l.append([int(age), name])

l = sorted(l, key= lambda x: x[0])

for i in l:
    print(i[0], i[1])