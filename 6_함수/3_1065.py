def solve(a:int) -> bool:
    prev = 0
    deff = 0
    if a >= 100:
        a = str(a)
        prev = int(a[1])
        deff = int(a[0])-int(a[1])
        for i in a[2:]:
            if deff != (prev - int(i)):
                return False
            prev = int(i)

        return True

    else:
        return True

a = int(input())
cnt = 0
for i in range(1, a+1):
    if solve(i) == False:
        continue
    cnt += 1

print(cnt)