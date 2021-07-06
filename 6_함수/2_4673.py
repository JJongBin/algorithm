def solve(a:int) -> int:
    r = a
    a = str(a)
    for i in a:
        r += int(i)
    return r

a = [x for x in range(1, 10001)]
for i in range(1, 10001):
    x = solve(i)
    if x in a:
        a.remove(x)

for i in a:
    print(i)