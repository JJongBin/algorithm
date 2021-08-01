import sys

# n = int(sys.stdin.readline())

# l = []
# for i in range(n):
#     x, y = map(int, sys.stdin.readline().split())
#     l.append([x, y])

# for i in range(len(l)):
#     for j in range(len(l)):
#         if i > j:
#             continue
#         if l[i][0] > l[j][0]:
#             temp = l[i]
#             l[i] = l[j]
#             l[j] = temp

# prev = None
# temp_idx = []
# check = False
# for i in range(len(l)):
#     if prev == l[i][0]:
#         if check == False:
#             temp_idx.insert(0, i-1)
#         temp_idx.append(i)
#         check = True

#     elif len(temp_idx) >= 2:
#         for j in range(temp_idx[0], temp_idx[-1]+1, 1):
#             for k in range(temp_idx[0], temp_idx[-1]+1, 1):
#                 if j > k:
#                     continue
#                 if l[j][1] > l[k][1]:
#                     temp = l[j]
#                     l[j] = l[k]
#                     l[k] = temp
#         temp_idx = []
#         check = False
    
#     prev = l[i][0]

# for i in l:
#     print(i[0], i[1])



#################################



n = int(sys.stdin.readline())
l = []
for i in range(n):
    x, y = map(int, sys.stdin.readline().split())
    l.append([x, y])
sort_l = sorted(l)


for i in sort_l:
    print(i[0], i[1])

    #sorted가 리스트 안의 요소들을 모두 고려해줌!?