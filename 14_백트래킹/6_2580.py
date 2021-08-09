import sys

def predict(r, c):
    number = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    temp_list = []
    for i in range(9):
        if problem[r][i] in number:
            number.remove(problem[r][i])
            
        if problem[i][c] in number:
            number.remove(problem[i][c])

    for i in range(3):
        for j in range(3):

            if problem[i+(r//3)*3][j+(c//3)*3] in number:
                number.remove(problem[i+(r//3)*3][j+(c//3)*3])

    return number
    
def solve(start):
    # 여러개의 답을 반환하는걸 방지
    if check[0] == True:
        return

    if start == len(idxs):
        for i in problem:
            print(" ".join(map(str, i)))
            check[0] = True
        return
    else:
        r = idxs[start][0]
        c = idxs[start][1]

        temp  = predict(r, c)

        for i in temp:
            problem[r][c] = i
            solve(start+1)
            problem[r][c] = 0

problem = []

# 문제 입력
for i in range(9):
    problem.append(list(map(int, sys.stdin.readline().split())))


check = [False]
idxs = []

# 채워야 하는 부분
for i in range(len(problem)):
        if 0 in problem[i]:
            for j in range(len(problem[i])):
                if problem[i][j] == 0:
                    idxs.append([i, j])

solve(0)

# 0 3 5 4 6 9 2 7 8
# 7 8 2 1 0 5 6 0 9
# 0 6 0 2 7 8 1 3 5
# 3 2 1 0 4 6 8 9 7
# 8 0 4 9 1 3 5 0 6
# 5 9 6 8 2 0 4 1 3
# 9 1 7 6 5 2 0 8 0
# 6 0 3 7 0 1 9 5 2
# 2 5 8 3 9 4 7 6 0

# 0 2 0 9 0 5 0 0 0
# 5 9 0 0 3 0 2 0 0
# 7 0 0 6 0 2 0 0 5
# 0 0 9 3 5 0 4 6 0
# 0 5 4 0 0 0 7 8 0
# 0 8 3 0 2 7 5 0 0
# 8 0 0 2 0 9 0 0 4
# 0 0 5 0 4 0 0 2 6
# 0 0 0 5 0 3 0 7 0

# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0 0 0