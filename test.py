
# Get the file handler
fhand = open('test.txt')

# Loop through each line via file handler
for line in fhand:
	print("'%s',"%line[:-1]);
