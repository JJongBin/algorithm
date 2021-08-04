import sys

n, m = map(int, sys.stdin.readline().split())
num = m
result = []
def f(check, m, n):
    if m == 0:
        print(" ".join(map(str, result)))
        return
    else:
        for i in range(1, n+1):
            # 중복확인
            if i in result:
                continue
            result.append(i)
            f(check, m-1, n)
            result.pop()
            

f(0, m, n)

