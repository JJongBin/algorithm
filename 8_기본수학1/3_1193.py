n = int(input())

place = 0
temp = 0
for i in range(1, n+1):
    temp += i
    if n <= temp:
        place = i
        break
    
a1 = 1
a2 = 1
move = temp - n

if place % 2 == 0:
    a1 = place
    for i in range(move):
        a1 -= 1
        a2 += 1
    print('{0}/{1}'.format(a1, a2))
    
else:
    a2 = place
    for i in range(move):
        a1 += 1
        a2 -= 1
    print('{0}/{1}'.format(a1, a2))