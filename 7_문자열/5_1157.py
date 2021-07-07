s = input()
s = s.lower()


temp = {}
for i in s:
    cnt = 0
    if temp.get(i) != None:
        continue

    for j in s:
        if i == j:
            cnt += 1
    temp[i] = cnt

max = ['', 0]

for k, v in temp.items():
    if v >= max[1]:
        max[0] = k
        max[1] = v


max_num = 0
for i in temp.values():
    if i == max[1]:
        max_num += 1

if max_num != 1:
    print('?')
else:
    print(max[0].upper())