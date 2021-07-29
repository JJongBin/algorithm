import sys

n = int(sys.stdin.readline())

l = []
for i in range(n):
    l.append(int(sys.stdin.readline()))
        
for i in sorted(l):
    print(i)
    
# sorted 함수는 timsort 방식
# tim sort  ->  Merge sort 와 Insert sort 혼합방식