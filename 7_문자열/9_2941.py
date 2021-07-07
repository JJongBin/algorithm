s = input()
alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

cnt = 0
for i in alpha:
    idx = s.find(i)
    num = s.count(i)
    if idx != -1:
        s = s.replace(i, "#")
        cnt += num

try:
    for i in s:
        if i != "#":
            cnt += 1
except:
    pass

print(cnt)