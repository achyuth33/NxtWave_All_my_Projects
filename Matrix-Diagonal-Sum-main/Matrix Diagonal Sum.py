N = int(input())
matrix = []
for i in range(N):
    matrix.append(list(map(int, input().split())))
    
sumDiagonal1 = sum(matrix[i][i] for i in range(N))
sumDiagonal2 = 0
sumDiagonal1_2 = 0
for i in range(N):
    for j in range(N):
        if i + j == N - 1:
            sumDiagonal2 += matrix[i][j]
if N % 2 == 0:
    sumDiagonal1_2 = sumDiagonal1 + sumDiagonal2
else:
    sumDiagonal1_2 = sumDiagonal1 + sumDiagonal2 - matrix[int((N - 1) / 2)][int((N - 1) / 2)]
print(sumDiagonal1_2)