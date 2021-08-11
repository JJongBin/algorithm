import sys

def score_func(player):
    temp = 0
    for i in player:
        for j in player:
            temp += score[i][j]
    return temp


def solve(start, count):
    if len(player) == n/2:
        temp_player = []
        for i in range(n):
            if i in player:
                continue
            temp_player.append(i)

        score1 = score_func(player)
        score2 = score_func(temp_player)

        compare = abs(score1 - score2)
        min_score[0] = min(min_score[0], compare)

        return

    else:
        for i in range(start, n):
            # 중복확인
            if i in player:
                continue

            player.append(i)
            solve(i+1, i+1)
            player.pop()
          

n = int(sys.stdin.readline())

score = []
player = []
min_score = [100*n*n]

for i in range(n):
    score.append(list(map(int, sys.stdin.readline().split())))


count = 0
solve(0, count)
print(min_score[0])