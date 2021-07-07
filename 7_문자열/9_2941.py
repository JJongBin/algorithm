s = input()
alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

cnt = 0
for i in alpha:
    idx = s.find(i)
    if idx != -1:
        for j in s[idx:idx+len(i)]:
            j = ""
        cnt += 1

print(cnt)



# s = "0123456789"
# idx = 0
# for j in s[idx:idx+3]:
#     j = ""
# print(s)