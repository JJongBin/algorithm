n =  int(input())

def f(n):
    n = n - 1
    if n == 0:
        return 1
    else:
        return n * f(n) 

if n == 0:
    print(1)
else:
    print(n*f(n))