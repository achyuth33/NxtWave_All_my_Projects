#smaller scores
def score_c(nums, count):
    res = [0 for i in range(count)]
    
    for k, num in enumerate(nums):
        c = filter(lambda x: x < num, nums[k+1:])
        res [k] = len(list(c))
    print(*res)
    
n = input("")
s = input("")

s_ = list(map(lambda x: int(x), s.split(" ")))
score_c(s_, int(n))

#Vertical Printing
from itertools import zip_longest
S = input()
lst = map(list, S.split())
for item in zip_longest(*lst, fillvalue=' '):
	print(''.join(item))

#Balanced Brackets
open_list = ["[","{","("]
close_list = ["]","}",")"]
def Convert(string):
    li = list(string.split(" "))
    return li
def balanced_parenthesis(str):
    stack = []
    for i in j:
        if i in open_list:
            stack.append(i)
        elif i in close_list:
            pos = close_list.index(i)
            if ((len(stack) > 0) and
                (open_list[pos] == stack[len(stack)-1])):
                stack.pop()
            else:
                return ("NO")
    if len(stack) == 0:
        return ("YES")
    else:
        return ("NO")
s = input();
a = (Convert(s))
for j in a:
    print(balanced_parenthesis(j))

#Largest Missing Negative Number
s = input()
A = [int(r) for r in s.split() if int(r) < 0]
A.sort(reverse = True)
X = -1
for i in range(len(A)):
    if X > A[i]:
        break
    X = A[i] - 1
print(X)
