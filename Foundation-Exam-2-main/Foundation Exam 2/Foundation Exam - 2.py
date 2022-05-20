#Sum of Prime Numbers In the Input
numbers=input("").split(' ')
sumPrimeNumbers=0
for n in numbers:
    n=int(n)
    isPrime=True
    if n > 1:
        #Check if number if prime
        for i in range(2, n):
            if (n % i) == 0:
                isPrime=False
                break
        if isPrime:
            sumPrimeNumbers+=n
print(str(sumPrimeNumbers))

#Index of Last Occurrence
a = [int(i) for i in input().split()]
b = int(input())
index = 0
for i in range(len(a)):
    if a[i] == b:
        index = i
print(index)

#Sum of Prime Numbers from M to N
m, n = int(input()), int(input())
sum = 0
for i in range(m, n + 1):
    flag = False
    for j in range(2, i):
        if i % j == 0:
            flag = True
    if flag == False and i != 1:
        sum += i
print(sum)

#Shift Numbers - 2
str = input()
digits = ''
letters = ''

for c in str:
    if c.isdigit():
        digits += c
    else:
        letters += c
print(digits + letters)

#Mean, Median and Mode
def get_median(arg_list):
    arg_list.sort()
    size = len(arg_list)
    if size % 2 == 1:
        return arg_list[size//2]
    else:
        return (arg_list[size//2] + arg_list[size//2 - 1])/2
        
def get_mean(arg_list):
    sum_list = 0
    for i in arg_list:
        sum_list += i
    return round(sum_list/len(arg_list), 2)
    
def get_mode(arg_list):
    mode_list = sorted(set(user_list), key = user_list.count, reverse = True)
    mode_max = user_list.count(mode_list[0])
    mode_res = []
    for i in mode_list:
        if user_list.count(i) < mode_max:
            break
        mode_res.append(i)
    return sorted(mode_res)
    
user_str = input()
user_list = [int(i) for i in user_str.split()]
print('Mean:', get_mean(user_list))
print('Median:', get_median(user_list))
print('Mode:', *get_mode(user_list))
