n = int(input())

targets = []
for i in range(n):
    target = list(map(int, input().split()))
    targets.append()

for target in targets:
    prev_move = 0
    cnt = 0
    length = target[1] - target[0] -1
    
    while prev_move > 0:
        if prev_move == 0:
            length -= 1 
            cnt += 1
        elif length > (prev_move + 1):
            length -= (prev_move + 1)
            cnt += 1

        elif length > prev_move
        # 잘못생각했어!
# 무조건 마지막은 1이니까 그전은 2보다 작아야됨 / 그 전전은 3보다 작아야됨 