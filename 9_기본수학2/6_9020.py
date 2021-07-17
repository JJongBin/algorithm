import sys
t = int(sys.stdin.readline())

def prime(n):
    erasto = [True] * n 
    erasto[0] = False
    for i in range(2, int(len(erasto) ** 0.5) + 1):
        if erasto[i-1]:
            for j in range(2*i, len(erasto)+1, i):
                erasto[j-1] = False
    return erasto


for i in range(t):
    n = int(sys.stdin.readline())
    temp = prime(n)
    e = []
    for j in range(len(temp)):
        if temp[j] == True:
            e.append(j+1)

    start_idx = 0
    for j in range(len(e)):
        if (n / 2) <= e[j]:
            start_idx = j
            break 

    check = False
    for j in e[start_idx:]:
        if check:
            break
        for k in e[:start_idx+1]:
            if (j + k) == n:
                print("{} {}".format(k, j))
                check = True
                break

