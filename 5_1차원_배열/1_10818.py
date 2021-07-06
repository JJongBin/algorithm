n = int(input())
l = map(int, input().split())

max = -1000000
min = 1000000
for i in l:
    if i > max:
        max = i
    if i < min:
        min = i
print(min, end=" ")
print(max)