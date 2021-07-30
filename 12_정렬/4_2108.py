import sys

n = int(sys.stdin.readline())

l = []
for i in range(n):      # 입력횟수
    l.append(int(sys.stdin.readline()))

l = sorted(l)

# avg    
avg = round(sum(l) / len(l))
print(avg)


# center
if len(l)%2 == 1:
    print(l[(len(l)//2)])
else:
    print(l[r(len(l)//2)+1])


# many
ran = l[-1] - l[0]
if len(l) == 1:
    print(l[0])
    print(0)
else:
    max_l = [0 for x in range(8001)]
   
    for i in l:
        max_l[i+4000] += 1

    max = max(max_l) 
    idx = 0

    temp = True
    for i in range(len(max_l)):
        if max_l[i] == max:
            idx = i
            if temp != True:
                idx = i
                break
            temp = False

    print(idx-4000)

    # range
    print(ran)
