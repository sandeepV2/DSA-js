def min_window(str1, str2):
    
    size_s1,size_s2 = len(str1), len(str2)
    idx_1,idx_2 = 0,0
    min_str_w = ""
    min_w_l = float('inf')
    while idx_1 < size_s1:
      if str1[idx_1] == str2[idx_2]:
        idx_2+=1
        if idx_2 == size_s2:
          start,end = idx_1,idx_1
          idx_2 -= 1
          while idx_2 >= 0:
            if str2[idx_2] == str1[start]:
              idx_2 -= 1
            start -= 1
          if end - start < min_w_l:
            min_w_l = end - start
            min_str_w = str1[start:end+1]
          idx_1 = start +1
          idx_2 = 0
          continue
            
      idx_1 += 1
    # Replace this placeholder return statement with your code

    return min_str_w


def min_window(str1, str2):
    size_str1, size_str2 = len(str1), len(str2)
    min_sub_len = float('inf')
    index_s1, index_s2 = 0, 0
    min_subsequence = ""
    while index_s1 < size_str1:
        if str1[index_s1] == str2[index_s2]:
            index_s2 += 1
            if index_s2 == size_str2:
                start, end = index_s1, index_s1
                index_s2 -= 1
                while index_s2 >= 0:
                    if str1[start] == str2[index_s2]:
                        index_s2 -= 1
                    start -= 1
                start += 1
                if end - start < min_sub_len:
                    min_sub_len = end - start
                    min_subsequence = str1[start:end+1]
                index_s1 = start
                index_s2 = 0
        index_s1 += 1
    return min_subsequence

# driver code
def main():
    str1 = ["abcdedeaqdweq", "fgrqsqsnodwmxzkzxwqegkndaa", "zxcvnhss", "alpha", "beta"]
    str2 = ["adeq", "kzed", "css", "la", "ab"]

    for i in range(len(str1)):
        print(i+1, ". \tInput string: (" + str1[i]+", " + str2[i]+")", sep="")
        print("\tSubsequence string: ", min_window(str1[i], str2[i]))
        print("-"*100)

if __name__ == '__main__':
    main()