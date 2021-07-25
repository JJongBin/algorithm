import sys
n = int(sys.stdin.readline())

for i in range(n+1):
    if i == n:
        print(0)
        break
    
    temp = 0
    for j in str(i):
        temp += int(j)
    if (i + temp) == n:
        print(i)
        break
    