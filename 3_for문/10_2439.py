n = int(input())

for i in range(n):
    print("%{}s".format(n) % ("*"*(i+1)))