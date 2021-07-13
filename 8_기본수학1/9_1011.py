n = int(input())

targets = []
for i in range(n):
    target = list(map(int, input().split()))
    targets.append(target)

for i in targets:
    temp = 1
    target = i[1] - i[0]

    while True:
        if (temp ** 2) <= target and ((temp + 1) ** 2) > target:
            break
        temp += 1

    if (temp ** 2) == target:
        print((temp * 2) - 1)

    elif (temp ** 2) < target <= (temp ** 2) + temp:
        print((temp * 2))

    else:
        print((temp * 2) + 1)

## 먼저 결과값을 나열해 규칙을 찾아본다!!