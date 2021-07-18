import sys

l1 = []
l2 = []
s1 = 0
s2 = 0
for i in range(3):
    n1, n2 = map(int, sys.stdin.readline().split())
    
    if n1 in l1:
        l1.remove(n1)
    else:
        l1.append(n1)

    if n2 in l2:
        l2.remove(n2)
    else:
        l2.append(n2)

print("{} {}".format(l1[0], l2[0]))