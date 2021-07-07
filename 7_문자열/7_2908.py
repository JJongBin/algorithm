n = input().split()

n1 = int(n[0][::-1])
n2 = int(n[1][::-1])

if n1 > n2:
    print(n1)
else:
    print(n2)