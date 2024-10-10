
def factor(num):

    factors = []

    for i in range(1, num+1):
        if (num % i) == 0:
            factors.append(i)
    
    return factors


print(factor(20))

def gen_factor(num):
    for i in range(1, num+1):
        if (num % i) == 0:
            yield i 


print(gen_factor(20))

# for i in gen_factor(20):
#     print(i, end=' ')

class seqIterator:
    def __init__(self, seq):
        self.seq = seq
        self._idx = 0 

    def __iter__(self):
        return self 
    
    def __next__(self):
        if self._idx < len(self.seq):
            res = self.seq[self._idx]
            self._idx += 1
            return res
        else:
            raise StopIteration
        
class FibIterator:
    def __init__(self, stop=10):
        self.st_0 = 0
        self.st_1 = 1
        self.cur = 0
        self.end = stop

    def __iter__(self):
        return self
    
    def __next__(self):
        if self.st_1 < self.end:
            self.cur = self.st_0 + self.st_1
            self.st_0, self.st_1 = self.st_1, self.cur 
            return self.cur
        else:
            raise StopIteration

# for s in seqIterator([1,2,3,4]):
#     print(s)

for f in FibIterator(20):
    print(f, end=' ')