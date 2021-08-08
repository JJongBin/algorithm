# import sys

# n = int(sys.stdin.readline())

# def chess(n):
#     temp = []
#     for i in range(n):
#         temp.append([0 for i in range(n)])
#     return temp

# def queen(n, x, y, chessboard):
#     x -= 1
#     y -= 1
#     if n == 1:
#         result.append(1)
#         print(chessboard)
#         return chessboard

#     if chessboard[x][y] == 0:
#         # chessboard[x][y] = "queen"
#         for i in range(len(chessboard)):
#             chessboard[i][y] = 1
#             chessboard[x][i] = 1
        
#             if i == 0:
#                 continue
#             if x+i < len(chessboard) and y+i < len(chessboard):
#                 chessboard[x+i][y+i] = 1
#             if x-i >= 0 and y+i < len(chessboard):
#                 chessboard[x-i][y+i] = 1
#             if x+i < len(chessboard) and y-i >= 0:
#                 chessboard[x+i][y-i] = 1
#             if x-i >= 0 and y-i >= 0:
#                 chessboard[x-i][y-i] = 1
#         chessboard[x][y] = 2
        

#         for i in range(len(chessboard)):
#             for j in range(len(chessboard)):
#                 if chessboard[i][j] == 0:
#                     queen(n-1, i+1, j+1, chessboard)
#                     # print(chessboard)
#                     for k in chessboard:
#                         print(k)
#                     print(" ")

# count = 0
# result = []
# # for i in range(n):
# #     for j in range(n):
# #         target = chess(n)
# #         queen(n, i+1, j+1, target)
# # print(len(result))

# print(" ")
# target = chess(n)
# tt = queen(n, 1, 1, target)

# print(tt)
# # for i in target:
# #     print(i)



############################

# 정답


def queen(x):

    if x == n:
        result.append(1)
    else:
    
        for i in range(n): 
            row[x] = i
            donot = False

            for i in range(x): 
                if row[x] == row[i] or abs(row[x] - row[i]) == x - i:
                    donot = True
                    break

            if donot == False:
                queen(x+1)


n = int(sys.stdin.readline())

row = [0 for i in range(n)]     # 행별 퀸 위치
result = []
queen(0)    # 첫번째 행부터 시작


print(len(result))

    

