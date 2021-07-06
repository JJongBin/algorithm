h, m = input().split()
h = int(h)
m = int(m)

if m >= 45:
    print(h, m-45)
elif h < 1 and m < 45:
    print(23, 60-(45-m))
elif h >= 1 and m < 45:
    print(h-1, 60-(45-m))