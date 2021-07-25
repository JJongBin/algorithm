import sys

n, m = map(int, sys.stdin.readline().split())

correct1 = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"]
correct2 = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"]

min1 = n * m
min2 = n * m

temp = []
for i in range(n):
    temp.append((sys.stdin.readline()))

for c1 in range(n-7):
    for c2 in range(m-7):
        compare1 = 0
        compare2 = 0
        for i in range(8):
            for j in range(8):
                if correct1[i][j] != temp[i+c1][j+c2]:
                    compare1 += 1
                
                if correct2[i][j] != temp[i+c1][j+c2]:
                    compare2 += 1
        if min1 > compare1:
            min1 = compare1
        if min2 > compare2:
            min2 = compare2

if min1 > min2:
    print(min2)
else:
    print(min1)