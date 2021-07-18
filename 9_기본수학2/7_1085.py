import sys

x, y, w, h = map(int, sys.stdin.readline().split())

s1 = 0
s2 = 0

if x > (w-x):
    s1 = w-x
else:
    s1 = x
if y > (h-y):
    s2 = h-y
else:
    s2 = y

if (s1 > s2):
    print(s2)
else:
    print(s1)
