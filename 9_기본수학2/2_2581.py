m = int(input())
n = int(input())


sum = 0
min = n
for i in range(m, n+1):
    if i == 1:
        continue

    check = True
    for j in range(2, i):
        if i % j == 0:
            check = False
            break

    if check == True:
        sum += i
        if min > i:
            min = i
    
if sum == 0:
    print(-1)
else:
    print(sum)
    print(min)
