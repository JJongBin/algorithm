import sys
n, m = map(int, sys.stdin.readline().split())

cards = list(map(int, sys.stdin.readline().split()))

r = 0
for i1 in range(len(cards)):
    c1 = cards[i1]
    for i2 in range(i1+1, len(cards)):
        c2 = cards[i2]
        for c3 in cards[i2+1:]:
            temp = c1 + c2 + c3
            if temp <= m and temp > r:
                r = temp

print(r)


# 5 21
# 5 6 7 8 9

# 10 500
# 93 181 245 214 315 36 185 138 216 295
