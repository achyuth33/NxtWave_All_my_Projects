def vowels_rotate(arg):
    vowels = ['a', 'e', 'i', 'o', 'u']
    for indx, letter in enumerate(arg):
        if letter.lower() in vowels:
            return arg[indx:]+arg[:indx]
    return arg
    
user_str = input()
words = user_str.split()
for i in range(len(words)):
    words[i] = vowels_rotate(words[i])
print(*words,sep=" ")