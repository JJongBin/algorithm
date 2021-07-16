import sys

def prime(n):
    erasto = [True] * (n * 2)
    erasto[0] = False
    for i in range(2, int(len(erasto) ** 0.5) + 1):
        if erasto[i-1]:
            for j in range(2*i, len(erasto)+1, i):
                erasto[j-1] = False
    return erasto


while True:
    cnt = 0
    n = int(sys.stdin.readline())
    if n == 0:
        break
    temp = prime(n)
    for i in temp[n:]:
        if temp[i]:
            cnt += 1
    print(cnt)





