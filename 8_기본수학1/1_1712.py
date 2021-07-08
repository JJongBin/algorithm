import sys
import math
n = list(map(int, sys.stdin.readline().split()))

if n[1] >= n[2] or n[2] == 0:
    print(-1)
elif n[0] == 0:
    print(1)
else: 
    i = math.ceil(n[0] / (n[2]-n[1]))
    
    if n[0] % (n[2] - n[1]) == 0:
        i += 1
    print(int(i))