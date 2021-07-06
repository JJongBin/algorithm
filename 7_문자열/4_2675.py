import sys
n = int(input())
result = []

for i in range(n):
    target = sys.stdin.readline().split()
    re = int(target[0])
    change = ''
    for j in target[1]:
        change += (j * re)
    result.append(change)

for i in result:
    print(i) 
