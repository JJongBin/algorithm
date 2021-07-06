import string

s = input()
target = string.ascii_lowercase
result = []
for i in target:
    result.append(s.find(i))

for i in result:
    print(i, end=" ")


