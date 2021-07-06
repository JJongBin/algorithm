l = []
for i in range(10):
    l.append(int(input()))
    l[i] = l[i] % 42

cnt = 0
check = []
for i in l:
    if l.count(i) == 1:
        cnt += 1
    else:
        if check.count(i) == 0:
            check.append(i)
            cnt += 1
print(cnt)