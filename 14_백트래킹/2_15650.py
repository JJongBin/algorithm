import sys

n, m = map(int, sys.stdin.readline().split())
num = m
result = []
def f(start, m, n):
    
    if m == 0:
        print(" ".join(map(str, result)))
        return
    else:
        for i in range(start, n+1):
            # 중복확인
            if i in result:
                continue
            result.append(i)
            if result[0] == n and m != 1:
                return
            start = i+1
            f(start, m-1, n)
            result.pop()
            

f(1, m, n)

