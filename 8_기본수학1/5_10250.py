import sys

t = int(sys.stdin.readline())

target = []
result = []
for i in range(t):
    n = list(map(int, sys.stdin.readline().split()))
    target.append(n)

for i in target:
    num = (i[2] // i[0]) + 1


    floor = i[2] % i[0]
    if floor == 0:
        floor = i[0]
        num -= 1
        
    if num >= 10:
        result.append('{}{}'.format(floor, num))

    else:
        result.append('{}0{}'.format(floor, num))

for i in result:
    print(i)