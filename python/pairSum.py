def pair_sum(myList, sum):
    # TODO
    set_ = set(myList)
    cum_ = []
    
    for i in myList:
        
        complement = sum - i 
        
        if complement in set_ and (complement, i) not in cum_:
            cum_.append((i, complement))

        print(cum_)     
    return cum_


print(pair_sum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9],7))