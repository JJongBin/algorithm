l = []
result = [0 for i in range(10)]
for i in range(3):
    l.append(int(input()))
    
a = l[0]*l[1]*l[2]

for i in str(a):
    for j in range(10):
        if i == str(j):
            result[j] += 1
for i in result:
    print(i)