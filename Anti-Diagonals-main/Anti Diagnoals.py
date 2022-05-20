m, n = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(m)]

max_sum = m + n - 2
for sum in range(max_sum+1):
    for i in range(sum+1):
        if i < m and sum - i < n:
            print(matrix[i][sum - i], end=" ")
    print()