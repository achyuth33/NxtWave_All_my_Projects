numbers = [int(i) for i in input().split()]
values = {}
for i in numbers:
    if i in values:
        values[i] += 1
    else:
        values[i] = 1
pairs = [[k, v] for k, v in values.items()]
found = False
for pair in pairs:
    if pair[1] == 1:
        print(pair[0])
        found = True
        break
if not found:
    print('None')
found = False
for pair in pairs:
    if pair[1] > 1:
        print(pair[0])
        found = True
        break
if not found:
    print('None')