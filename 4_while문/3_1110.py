def change(data):
    new = ""
    if len(str(int(data[0])+int(data[1]))) == 1:
        new = data[1] + str(int(data[0])+int(data[1]))
        
    else:
        new = data[1] + (str(int(data[0])+int(data[1])))[1]
    return new

n = input()
check = n
cnt = 1

if len(n) == 1:
    n = "0" + n
    check = "0" + check

n = change(n)
while True:
    if len(n) == 1:
        n = "0" + n

    if n == check:
        print(cnt)
        break

    else:
        n = change(n)
        cnt += 1
