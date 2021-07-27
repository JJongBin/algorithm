import sys

n = int(sys.stdin.readline())

l = []
for i in range(n):
    l.append(int(sys.stdin.readline()))
        
for i in range(len(l)):
    for j in range(len(l)):
        if l[i] < l[j]: 
            temp = l[i]
            l[i] = l[j]
            l[j] = temp

for i in l:
    print(i)
