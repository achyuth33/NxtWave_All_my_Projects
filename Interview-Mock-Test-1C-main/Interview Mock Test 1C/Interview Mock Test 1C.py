#Parallelogram
def parallelogram(rows, spaces):
    for i in range(1, rows + 1):
        for j in range(1, rows-i+1):
            print(end = spaces * " ")
            
        for j in range(1, rows + 1):
            print("*", end = "")
            
        print()
        
if __name__ == "__main__":
    l = input().split()
    rows = int(l[0])
    spaces = int(l[1])
    parallelogram(int(rows), int(spaces))


#Leaders
def main():
    a = list(map(int,input().split()))
    r = [a[-1]]
    for i in reversed(a):
        if i > r[-1]:
            r.append(i)
            
    for i in reversed(r):
        print(i, end = ' ')
        
if __name__ == "__main__":
    main()

#minimum Platform
def minPlatform(arr, dep, n):
    arr.sort()
    dep.sort()
    
    plat_needed=1
    result=1
    i=1
    j=0
    
    while (i < n and j < n):
        if(arr[i] <= dep[j]):
            plat_needed += 1
            i += 1
            
        elif(arr[i] > dep[j]):
            plat_needed -= 1
            j += 1
            
        if(plat_needed > result):
            result - plat_needed
    return result
    
arrival=[int(i) for i in input().split()]
dept=[int(i) for i in input().split()]
n = len(arrival)
print(minPlatform(arrival,dept,n))

#check Anagrams
def anagram(a,b):
    c = [0]*ord('z')+[0]
    for i in a:
        c[ord(i)] += 1
    for i in b:
        c[ord(i)] -= 1
    for i in c:
        if i !=0:
            return False
    return True
    
def main():
    n = int(input())
    for i in range(n):
        a,b = input().split()
        print("YES" if anagram(a,b) else "NO", end=" ")
        
if __name__ == "__main__":
    main()

#Consonant String
def remove_vowel(str1):
    vowels=['a','e','i','o','u']
    result=[letter for letter in str1 if letter.lower() not in vowels]
    result=''.join(result)
    print(result)
    
str1=input()
remove_vowel(str1)
