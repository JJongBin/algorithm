import sys

n = int(sys.stdin.readline())

words = []
for i in range(n):
    word = sys.stdin.readline()
    in_word = [len(word), word]

    if in_word in words:
        continue

    words.append(in_word)

sort_words = sorted(words)

for i in sort_words:
    print(i[1], end="")