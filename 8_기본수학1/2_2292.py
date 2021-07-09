n = int(input())
t = 1
for i in range(1, n+1):
    if (n <= t):
        print(i)
        break
    t += (6 * i)