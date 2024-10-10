
def max_two_num(arr):

    max_1,max_2 = 0,0

    for a in arr:
        print('__')
        print(a, max_1, max_2)
        if a > max_1:
            max_2= max_1
            max_1 = a 
        elif a > max_2:
            max_2 = a
        print(a, max_1, max_2)
        print('__')

    return max_1, max_2

def max_three_num(arr):

    max_1,max_2,max_3 = 0,0,0

    for a in arr:
        print('__')
        print(a, max_1, max_2, max_3)
        if a > max_1:
            max_3 = max_2
            max_2= max_1
            max_1 = a 
        elif a > max_2:
            max_3 = max_2
            max_2 = a
        elif a > max_3:
           max_3 = a
        print(a, max_1, max_2, max_3)
        print('__')

    return max_1, max_2, max_3


def find_largest_three(arr):
  """Finds the three largest elements in an array.

  Args:
    arr: The input array.

  Returns:
    A list of the three largest elements.
  """

  if len(arr) < 3:
    return arr

  #first = arr[0]
  first = float('-inf')
  second = float('-inf')
  third = float('-inf')

  for num in arr[1:]:
    if num > first:
      third = second
      second = first
      first = num
    elif num > second:
      third = second
      second = num
    elif num > third:
      third = num

  return [first, second, third]

#print(max_two_num(range(3)))

#print(find_largest_three(range(10)))

print(max_three_num(range(10)))