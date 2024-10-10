
def toh(hieght, from_pole, to_pole, with_pole):
    if hieght >= 1:
        toh(hieght -1, from_pole, with_pole, to_pole)
        move_disk(hieght, from_pole, to_pole)
        toh(hieght -1, with_pole, to_pole, from_pole)


def move_disk(height, fm, to):
    print("move disk, ",height," from ",fm," to ",to)


toh(3, 'A', 'B', 'C')