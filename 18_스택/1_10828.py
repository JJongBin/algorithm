import sys
stack_list = []

n = int(input())

for i in range(n):
    command = sys.stdin.readline().strip()
    if "push" in command:
        command, num = command.split()
        stack_list.append(int(num))
    elif "top" in command:
        if len(stack_list) <= 0:
            print(-1)
        else:
            print(stack_list[-1])        
    elif "size" in command:
        print(len(stack_list))
    elif "empty" in command:
        if len(stack_list) > 0:
            print(0)
        else:
            print(1)
    elif "pop" in command:
        if len(stack_list) <= 0:
            print(-1)
        else:
            print(stack_list.pop())