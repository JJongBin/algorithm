n = int(input())
s = list(map(int, input().split()))

max_s = max(s)
sum = 0
for i in s:
    sum = sum + (i/max_s)*100
print(sum/len(s))