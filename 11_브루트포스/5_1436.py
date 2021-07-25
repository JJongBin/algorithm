import sys

n = int(sys.stdin.readline())

check = "666"
i = 0
num = 0
while True:
    num += 1
    if str(num).find(check) != -1:
        i += 1
        if n == i:
            print(num)
            break
