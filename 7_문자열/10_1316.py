import sys

n = int(input())

cnt = n

for i in range(n):
    s = sys.stdin.readline()
    check = set()
    prev_j = s[0]

    for j in s:
        if prev_j != j:
            if (j in check) == True:
                cnt -= 1
                break
            check.add(prev_j)
        prev_j = j

print(cnt)

