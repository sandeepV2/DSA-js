mt = [[1,2,3], [4,5,6], [7,8,9]]

for i in range(len(mt)):
    print(mt[i])
for i in range(len(mt)-1):
    j = i + 1 
    mt[i][j], mt[j][i] = mt[j][i], mt[i][j]

# for i in range(len(mt)):
#     print(mt[i])

for k in range(len(mt)):
    i,j = 0, len(mt)-1
    mt[i][j], mt[j][i] = mt[j][i], mt[i][j]

for i in range(len(mt)):
    print(mt[i])