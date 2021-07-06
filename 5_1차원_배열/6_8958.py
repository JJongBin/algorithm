n = int(input())
temp = []
for i in range(n):
    s = input()
    temp.append(s)

for i in temp:
    prev = 1
    score = 0
    for j in i:
        if j == "O":
            if prev > 1:
                score += prev
            else:
                score += 1
            prev += 1
        else:
            prev = 1
    print(score)