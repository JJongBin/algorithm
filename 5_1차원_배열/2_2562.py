l = []
for i in range(9):
    a = int(input())
    l.append(a)
max = 0
for i in l:
    if i > max:
        max = i
print(max)
print(l.index(max)+1)