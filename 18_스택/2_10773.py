import sys

def pop():
    del cal[-1]
    
k = int(input())
cal = []
for i in range(k):
    n = int(sys.stdin.readline())
    if n == 0:
        pop()
    else:
        cal.append(n)
        
sum = 0        
for i in cal:
    sum += i
print(sum)
    