import sys

def check_func(in_str):
    for i in in_str:
        if i == "(" or i == "[":
            check_braket.append(i)
        elif i == ")" or i == "]":
            if len(check_braket) <= 0:
                return 'no'
            elif (check_braket[-1] == '(' and i != ")") or (check_braket[-1] == '[' and i != "]"):
                return "no"
            check_braket.pop()
            
    if len(check_braket) == 0:
        return "yes"
    else:
        return "no"

while True:
    check_braket = []
    in_str = sys.stdin.readline().replace('\n', '')
    # 입력 확인
    if in_str == ".":
        break
        
    print(check_func(in_str))