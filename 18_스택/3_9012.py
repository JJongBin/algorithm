import sys

def check(s):
    slist = []
    if (s[0] == ")") or (s[-1] == "("):
        return "NO"
    else:
        for i in s:
            if i == "(":
                slist.append(i)
            else:
                if len(slist) <= 0:
                    return "NO"
                slist.pop()
        if len(slist) == 0:
            return "YES"
        else:
            return "NO"
    
t = int(input())
for i in range(t):
    s = sys.stdin.readline().strip()
    print(check(s))