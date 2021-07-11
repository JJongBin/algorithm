import sys

t = int(sys.stdin.readline())

kn_list = []
for i in range(t):
    k = int(sys.stdin.readline())   
    n = int(sys.stdin.readline())   
    kn_list.append([k, n]) 
    
for i in kn_list:
    result = [x for x in range(1, i[1]+1)]
    for k in range(i[0]):
        for n in range(1, i[1]):
            result[n] += result[n-1]
    print(result[-1])