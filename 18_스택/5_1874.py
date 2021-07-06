import sys 

n = int(input())

stack_list = []
result_list = []
def push(a):
    stack_list.append(a)
    result_list.append("+")
 
def pop():
    stack_list.pop()
    result_list.append("-")

def top():
    if len(stack_list) >= 1:
        return stack_list[-1]
    else:
        return 0
    
# 입력숫자
in_list = []
n_list = []
for i in range(n, 0, -1):
    s = int(sys.stdin.readline())
    in_list.append(s)
    n_list.append(i)

# 스텍top이 낮으면 pop / 스텍 top이 높으면 push
# 스텍에는 무조건 오름차순 => 안되면 no


# 입력 숫자 하나씩
iter_check = True
for inum in in_list:
    if iter_check == False:
        break

    while True:

        if (top() < inum) and (len(n_list) > 0):
            push(n_list.pop())
            
        elif top() > inum:
            pop()

        elif top() == inum:
            pop()
            break
        
        elif (inum not in stack_list) and (top() < inum):
            result_list = ["NO"]
            iter_check = False
            break

print("\n".join(result_list))