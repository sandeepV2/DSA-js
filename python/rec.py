def powOf2(n):
    if(n==0):
        return 1 
    else:
        power = powOf2(n-1)
        return power * 2 


print(powOf2(5)) 


def printloop(n):
    if(n==0):
        return 1 
    printloop(n-1)
    print(n)


def findMax(arr, n):
    if n==0:
        return arr[0]
    return max(arr[n], findMax(arr, n-1))


def sumPos(n):
    if n==0:
        return 0
    return n%10 + sumPos(n//10)

def powerOfNum(base, exp):
    if exp == 0:
        return 1
    return base * powerOfNum(base, exp-1)

# printloop(5)
print(findMax([5,1,11,7,6], 4))

print(sumPos(111))
print(powerOfNum(15, 2))