import sys
n = int(input())

targets = list(map(int, sys.stdin.readline().split()))

cnt = 0
for i in targets:
    if i == 1:
        cnt += 1
        continue 
    for j in range(2, i):
        if i % j == 0:
            cnt += 1
            break
print(len(targets) - cnt)