import sys

def solve(compare, count, add, sub, mul, div):
    if count == len(number)-1:
        max_num[0] = max(max_num[0], compare)
        min_num[0] = min(min_num[0], compare)
        return

    if add > 0:
        solve(compare+number[count+1], count+1, add-1, sub, mul, div)
    if sub > 0:
        solve(compare-number[count+1], count+1, add, sub-1, mul, div)
    if mul > 0:
        solve(compare*number[count+1], count+1, add, sub, mul-1, div)
    if div > 0:
        solve(int(compare/number[count+1]), count+1, add, sub, mul, div-1)



n = sys.stdin.readline()

number = list(map(int, sys.stdin.readline().split()))

add, sub, mul, div = map(int, sys.stdin.readline().split())

max_num = [-1000000000]
min_num = [1000000000]
count = 0

solve(number[0], count, add, sub, mul, div)

print(max_num[0])
print(min_num[0])