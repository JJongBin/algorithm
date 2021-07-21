import sys
n = int(sys.stdin.readline())

def f(n):
    if n>= 2:
        return f(n-1) + f(n-2)
    else:
        return n
        
print(f(n))