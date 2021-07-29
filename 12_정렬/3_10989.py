import sys

n = int(sys.stdin.readline())

max = 10000

temp = [0 for x in range(max)]

for i in range(n):
    num = int(sys.stdin.readline())
    temp[num-1] += 1

for i in range(max):
    for j in range(temp[i]):
        print(i+1)
    

