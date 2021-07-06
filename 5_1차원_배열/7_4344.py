import sys

n = int(input())
total = []
for i in range(n):
    std = list(map(int, sys.stdin.readline().split()))
    total.append(std)

result = []
for i in total:
    avg = sum(i[1:])/i[0]
    cnt = 0
    for j in i[1:]:
        if j > avg:
            cnt+=1
    result.append(cnt/(len(i)-1)*100)
for i in result:
    print("{}%".format(format(i, ".3f")))