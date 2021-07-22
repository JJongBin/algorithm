import sys

n = int(sys.stdin.readline())


def star(n):
    if n == 1:
        return ["*"]

    sub_star = star(n//3)
    l = []

    for i in sub_star:
        l.append(i*3)
    for i in sub_star:
        l.append(i + (" " * (n//3)) + i)
    for i in sub_star:
        l.append(i*3)
    return l

print("\n".join(star(n)))

