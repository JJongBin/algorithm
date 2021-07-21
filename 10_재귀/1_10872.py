n =  int(input())

def func(n):
    n = n - 1
    if n == 0:
        return 1
    else:
        return n * func(n) 

if n == 0:
    print(1)
else:
    print(n*func(n))