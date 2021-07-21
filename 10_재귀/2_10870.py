import sys
n = int(sys.stdin.readline())

def fibo(n):
    if n>= 2:
        return f(n-1) + f(n-2)
    else:
        return n
        
print(fibo(n))