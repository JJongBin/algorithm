# a 올라감, b 내려감, v 높이
n = list(map(int, input().split()))

d = n[0]-n[1] # 하루 올라갈 수 있는

c = (n[2] - n[1]) % d # 나머지 체크
t = (n[2] - n[1]) / d
if c == 0: 
    print(int(t))
else:
    print(int(t+1))


