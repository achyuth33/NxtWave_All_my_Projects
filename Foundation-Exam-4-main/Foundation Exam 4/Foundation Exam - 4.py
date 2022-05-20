#K Sum Unique Combinations
from itertools import combinations

values =[int(i) for i in input().split()]
values.sort()

K = int(input())

counterUniqueCombinations=0

for i in range(1, len(values)+1):
    com =list(set(combinations(values, i)))
    for combination in com:
        if sum(combination) == K:
            counterUniqueCombinations += 1
print(f"{counterUniqueCombinations}")

#Rotate Words Longer than given Length L by K lette
sentences = input()
L, K = [int(i) for i in input().split()]
source = [i for i in sentences.split()]

result = []
def rotate(strings, k):
    for i in range(k):
        c = strings[-1]
        strings = strings[0:-1]
        c += strings
        strings = c
    return strings
    
for cha in source:
    if len(cha) > L:
        result.append(rotate(cha, K))
    else:
        result.append(cha)
final = result[0]

for cha in result[1:]:
    final += ' '
    final += cha
print(final)

#Word Mix
def mix_words(s):
    words = s.split()
    n = max([len(w) for w in words])
    
    res = ['']*n
    for i in range(n):
        for w in words:
            if i < len(w):
                res[i] += w[i]
    return ' '.join(res)
    
def main():
    s = input()
    print(mix_words(s))
    
if __name__ == "__main__":
    main()
