s = input()

dial = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
}
num = 0
for i in s:
    for k, v in dial.items():
        if v.find(i) != -1:
            num += (k+1)

print(num)