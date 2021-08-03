import sys

n = int(sys.stdin.readline())

l = []
result = []
for i in range(n):
    num = int(sys.stdin.readline())
    l.append(num)
    sort_l = sorted(l)

    if len(l) == 1:
        result.append(num)
    elif len(l)%2 != 0:  #중앙값이 딱 떨어질때
        idx = int(len(l)/2) 
        result.append(sort_l[idx])
    
    else:
        idx = int(len(l)/2 - 1)
        if sort_l[idx] < sort_l[idx+1]:
            result.append(sort_l[idx])
        else:
            result.append(sort_l[idx+1])
    # print("l: ", l)
    # print("result: ", result)

for i in result:
    print(i)


# 7
# 1
# 5
# 2
# 10
# -99
# 7
# 5