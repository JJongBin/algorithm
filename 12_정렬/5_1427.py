import sys

n = sys.stdin.readline()

l = []
for i in n[:-1]:
    l.append(int(i))

l = sorted(l)
print(l)
l.reverse()

for i in range(len(l)):
    l[i] = str(l[i])

print("".join(l))