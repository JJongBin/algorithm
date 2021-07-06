def compare(sequence):
    result = []
    stack = [[None, None]]
    for i in range(len(sequence)):
        
        if (stack[-1][1] != None) and (stack[-1][1] < sequence[i]):
            for j in range(len(stack), 1, -1):    
                if (stack[j-1][1] < sequence[i]):
                    temp = stack.pop()
                    result[temp[0]] = sequence[i]
                else:
                    break

        if i == len(sequence)-1:
            result.append(-1)
            break

        if sequence[i] < sequence[i+1]:
            result.append(sequence[i+1])
        else:
            result.append(None)
            stack.append([i, sequence[i]])
    if len(stack) >= 2:
        for i in stack[1:]:
            result[i[0]] = -1
    return result

n = int(input())
sequence = list(map(int, input().split()))
r = compare(sequence)
for i in r:
    print(i, end=" ")